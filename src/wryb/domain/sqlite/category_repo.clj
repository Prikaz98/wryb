(ns wryb.domain.sqlite.category-repo
  (:require [wryb.domain.sqlite.connectionmanager :refer [connection]]
            [wryb.domain.category :refer [->Category]])
  (:import (java.util UUID)))

(defn- create-stmt []
  (.createStatement @connection))

(defn- insert-category! [c]
  (let [stmt (.prepareStatement @connection
                                "INSERT INTO category (id, name) VALUES (?,?);")]
    (.setString stmt 1 (:id c))
    (.setString stmt 2 (:name c))
    (.execute stmt)
    (.close stmt)))

(defn- update-category! [c]
  (let [stmt (.prepareStatement @connection "UPDATE category SET name=?;")]
    (.setString stmt 1 (:name c))
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
          name (.getString rs "name")]
      (->Category id name))))

(defn remove! [c]
  (-> (create-stmt)
      (.executeUpdate (str "DELETE FROM category WHERE id='" (:id c) "';"))))

(defn get-all []
  (let [rs (.executeQuery (create-stmt) (str "SELECT * FROM category;"))]
    ((fn [acc rs]
       (let [c (category-from-result-set rs)]
         (if (nil? c) acc
             (recur (conj acc c) rs)))) '() rs)))
