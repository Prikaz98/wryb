(ns wryb.domain.sqlite.repository
  (:require
   [clojure.string :as string]
   [wryb.date.instant-utils :refer [format-instant instant-to-timestamp]]
   [wryb.domain.sqlite.connectionmanager :refer [connection]]
   [clojure.tools.logging :as log]))

(defn- extract-clean-fields-name [obj]
  (map #(str (string/replace % #":" "")) (keys obj)))

(defn- concat-with-delimiter [delim coll]
  (if (or (nil? coll) (empty? coll)) nil
    (reduce #(str %1 delim %2) coll)))

(defn- to-insert-query
  "Build insert query from the data"
  [table-name obj]
  (let [field-names (extract-clean-fields-name obj)
        field-as-params (concat-with-delimiter ", " field-names)
        values (concat-with-delimiter ", " (map (fn [_] "?") field-names))]
    (str "INSERT INTO " table-name "(" field-as-params ") VALUES (" values ");")))

(defn- zip-with-index
  ([arr] (zip-with-index arr 0))
  ([arr start]
   (zipmap arr (range start (+ start (count arr))))))

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

(defn- as-sql-params [keys]
  (->> keys
       (map #(str % "=?"))
       (map #(str (string/replace % #":" "")))
       (concat-with-delimiter ", ")))

(defn to-update-query [table-name obj identity-keys]
  (let [set-field-names (->> (keys obj)
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
        where-values (->> (keys obj)
                          (filter #(contains? identity-keys %))
                          (map #(% obj)))]
    (fill-stmt! stmt (concat update-values where-values))))

(defn- create-stmt []
  (.createStatement @connection))

(defn insert! [entity ctx]
  (let [stmt (.prepareStatement @connection
                                (to-insert-query (:table-name ctx) entity))]
    (fill-insert-stmt! stmt entity)
    (.execute stmt)
    (.close stmt)))

(defn update! [entity ctx]
  (let [pk (:primary-key ctx)
        stmt (.prepareStatement @connection
                                (to-update-query (:table-name ctx) entity pk))]
    (fill-update-stmt! stmt entity pk)
    (.execute stmt)
    (.close stmt)))

(defn- to-sql-query-param [v]
  (condp = (type v)
    java.lang.Boolean (str v)
    java.time.Instant (str "'" (format-instant v) "'")
    (str "'" v "'")))

(defn- build-where [condition]
  (let [[key op value] condition]
    (str key op (to-sql-query-param value))))

(defn select-by [ctx & conditions]
  (let [where-params (->> conditions
                          (map build-where)
                          (concat-with-delimiter " "))
        query (str "SELECT * FROM " (:table-name ctx) (if where-params (str " WHERE " where-params) "") ";")]
    (log/info query)
    (->> (.executeQuery (create-stmt) query)
         (resultset-to-list (:row-decode ctx)))))

(defn delete-by [ctx & params]
  (if (or (nil? params) (empty? params))
    nil
    (let [where-params (->> params
                            (map build-where)
                            (concat-with-delimiter " "))
          query (str "DELETE FROM " (:table-name ctx) (str " WHERE " where-params) ";")]
      (log/info query)
      (.executeUpdate (create-stmt) query))))
