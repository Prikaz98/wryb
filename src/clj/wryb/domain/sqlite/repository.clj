(ns wryb.domain.sqlite.repository
  (:require
   [clojure.string :as string]
   [clojure.tools.logging :as log]
   [wryb.date.instant-utils :refer [format-instant instant-to-timestamp]]
   [wryb.domain.sqlite.connectionmanager :refer [connection]]
   [wryb.utils :refer [zip-with-index]]))

(defn- normilize-keys
  "Remove special key symbol ';'"
  [keys]
  (map #(str (string/replace % #":" "")) keys))

(defn- as-sql-params [keys]
  (->> keys
       (normilize-keys)
       (map #(str % "=?"))
       (string/join ", ")))

(defn- to-insert-query
  "Build insert query from the data"
  [table-name obj]
  (let [field-names     (normilize-keys (keys obj))
        field-as-params (string/join ", " field-names)
        values          (->> field-names
                             (map (fn [_] "?"))
                             (string/join ", "))]
    (str "INSERT INTO " table-name "(" field-as-params ") VALUES (" values ");")))

(defn- fill-stmt!
  "Read fields and put them into statment"
  [stmt coll]
  (doseq [[value index] (zip-with-index coll 1)]
    (condp = (type value)
      java.lang.Boolean (.setBoolean stmt index value)
      java.time.Instant (.setTimestamp stmt index (instant-to-timestamp value))
      (.setString stmt index value))))

(defn- fill-insert-stmt! [stmt obj] (fill-stmt! stmt (vals obj)))

(defn resultset-to-list
  "transform result set to list of elements use map function"
  ([mapf rs] (resultset-to-list mapf rs '()))
  ([mapf rs acc]
   (if (not (.next rs))
     acc
     (recur mapf rs (conj acc (mapf rs))))))

(defn- to-update-query [table-name obj identity-keys]
  (let [set-field-names   (->> (keys obj)
                               (filter #(not (contains? identity-keys %)))
                               (as-sql-params))
        where-field-names (->> (keys obj)
                               (filter #(contains? identity-keys %))
                               (as-sql-params))]
    (str "UPDATE " table-name " SET " set-field-names " WHERE " where-field-names ";")))

(defn- fill-update-stmt!
  [stmt obj identity-keys]
  (let [update-values (->> (keys obj)
                           (filter #(not (contains? identity-keys %)))
                           (map #(% obj)))
        where-values  (->> (keys obj)
                          (filter #(contains? identity-keys %))
                          (map #(% obj)))]
    (fill-stmt! stmt (concat update-values where-values))))

(defn- create-stmt []
  (.createStatement @connection))

(defn insert!
  "Insert entity. In context (ctx) should be following options:

  :table-name - name of table"
  [ctx entity]
  (let [stmt (.prepareStatement @connection
                                (to-insert-query (:table-name ctx) entity))]
    (fill-insert-stmt! stmt entity)
    (.execute stmt)
    (.close stmt)))

(defn update!
  "Update entity. In context (ctx) should be following options:

  :primary-key - set of structure keys which determines uniqualy identifies of record
  :table-name  - name of table"
  [ctx entity]
  (let [pk   (:primary-key ctx)
        stmt (.prepareStatement @connection
                                (to-update-query (:table-name ctx) entity pk))]
    (fill-update-stmt! stmt entity pk)
    (.execute stmt)
    (.close stmt)))

(defn- to-query-condition-value [v]
  (condp = (type v)
    java.lang.Boolean (str v)
    java.time.Instant (str "'" (format-instant v) "'")
    (str "'" v "'")))

(defn- build-sql-condition [condition]
  (let [[key op value] condition]
    (str key op (to-query-condition-value value))))

(defn- build-order-by [order-by is-desc]
  (when order-by
    (str "ORDER BY "
         (->> order-by
              (normilize-keys)
              (string/join ", "))
         (if is-desc " DESC" " ASC"))))

(defn =* [field value]
  (str (name field) " = " (to-query-condition-value value)))

(defn- build-where [where]
  (when (and where (every? #(not (nil? %)) where))
    (str "WHERE " (string/join " AND " where))))

(defn select-by
  "Select records by conditional and ordering.
  ordering
  ctx - options:
   :table-name  - name of table
   :row-decoder - function which apply java.sql.ResultSet and return mapped entity

  where - seq of query params. Example: [(=* :id uuid)]
  ordering   - key set of name field. Example: #{:createtime}"
  [ctx & {:keys [where order-by is-desc offset limit]}]
  (log/debug where)
  (let [where-params (build-where where)
        order-params (build-order-by order-by is-desc)
        query        (string/join
                      " "
                      (list
                       "SELECT * FROM"
                       (:table-name ctx)
                       (or where-params "")
                       (or order-params "")
                       (if offset (str "OFFSET " offset) "")
                       (if limit (str "LIMIT " limit) "")
                       ";"))]
    (->> (.executeQuery (create-stmt) query)
         (resultset-to-list (:row-decode ctx)))))

(defn delete-by
  "Remove records by where

  ctx - options:
   :table-name  - name of table

  where - seq of query params. Example: (=* :id uuid)"
  [ctx & where]
  (when (and where (not-empty where))
    (log/debug where)
    (let [where-params (build-where where)
          query        (str "DELETE FROM " (:table-name ctx) " " where-params ";")]
      (log/debug query)
      (.executeUpdate (create-stmt) query))))
