(ns wryb.domain.sqlite.category-repo
  (:require
   [wryb.date.instant-utils :refer [instant-to-timestamp timestamp-to-instant]]
   [wryb.domain.category :refer [->Category]]
   [wryb.domain.sqlite.connectionmanager :refer [connection]])
  (:import
   (java.util UUID)))

(defn- create-stmt []
  (.createStatement @connection))

(defn- insert-category! [c]
  (let [stmt (.prepareStatement @connection
                                "INSERT INTO category (id, name, create_time) VALUES (?,?,?);")]
    (.setString stmt 1 (:id c))
    (.setString stmt 2 (:name c))
    (.setTimestamp stmt 3 (instant-to-timestamp (:createtime c)))
    (.execute stmt)
    (.close stmt)))

(defn- update-category! [c]
  (let [stmt (.prepareStatement @connection "UPDATE category SET name=? where id=?;")]
    (.setString stmt 1 (:name c))
    (.setString stmt 2 (:id c))
    (.execute stmt)
    (.close stmt)))

(defn save! [c]
  (if (nil? (:id c))
    (let [id (str (UUID/randomUUID))
          new-categ (assoc c :id id)]
      (insert-category! new-categ)
      new-categ)
    (do
      (update-category! c)
      c)))

(defn- category-from-result-set
  "Check ResultSet next next and map in Category entity else return nil"
  [rs]
  (when (.next rs)
    (let [id (.getString rs "id")
          name (.getString rs "name")
          create-time (timestamp-to-instant (.getTimestamp rs "create_time"))]
      (->Category id name create-time))))

(defn remove! [id]
  (-> (create-stmt)
      (.executeUpdate (str "DELETE FROM category WHERE id='" id "';"))))

(defn get-all []
  (let [rs (.executeQuery (create-stmt) (str "SELECT * FROM category;"))]
    ((fn [acc rs]
       (let [c (category-from-result-set rs)]
         (if (nil? c) acc
             (recur (conj acc c) rs)))) '() rs)))

(defn get-by-id [id]
  (let [rs (.executeQuery (create-stmt) (str "SELECT * FROM category WHERE id = '" id "';"))]
    (category-from-result-set rs)))
