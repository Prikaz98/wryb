(ns wryb.domain.sqlite.category-repo
  (:require
   [wryb.date.instant-utils :refer [timestamp-to-instant]]
   [wryb.domain.category :refer [->Category]]
   [wryb.domain.sqlite.connectionmanager :refer [connection]]
   [wryb.domain.sqlite.util :refer [fill-insert-stmt! resultset-to-list
                                    to-insert-query]])
  (:import
   (java.util UUID)))

(defn- create-stmt []
  (.createStatement @connection))

(defn- insert-category! [c]
  (let [stmt (.prepareStatement @connection
                                (to-insert-query "category" c))]
    (fill-insert-stmt! stmt c)
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
    (let [new-categ (assoc c :id (str (UUID/randomUUID)))]
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
          create-time (timestamp-to-instant (.getTimestamp rs "createtime"))]
      (->Category id name create-time))))

(defn remove! [id]
  (-> (create-stmt)
      (.executeUpdate (str "DELETE FROM category WHERE id='" id "';"))))

(defn get-all []
  (resultset-to-list (.executeQuery (create-stmt) (str "SELECT * FROM category;")) category-from-result-set))

(defn get-by-id [id]
  (category-from-result-set (.executeQuery (create-stmt) (str "SELECT * FROM category WHERE id = '" id "';"))))
