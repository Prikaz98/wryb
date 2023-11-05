(ns wryb.domain.sqlite.taskrepo
  (:require [wryb.domain.task :refer [->Task]]
            [wryb.domain.sqlite.connectionmanager :refer [connection]])
  (:import (java.util UUID)))

(defn- insert-task! [t]
  (let [stmt (.prepareStatement @connection "INSERT INTO task (id, title, desc, isdone) VALUES (?,?,?,?);")]
    (.setString stmt 1 (:id t))
    (.setString stmt 2 (:title t))
    (.setString stmt 3 (:desc t))
    (.setBoolean stmt 4 (:is-done t))
    (.execute stmt)
    (.close stmt)))

(defn- update-task! [t]
  (let [stmt (.prepareStatement @connection "UPDATE task SET title=?,desc=?,isdone=? where id=?;")]
    (.setString stmt 1 (:title t))
    (.setString stmt 2 (:desc t))
    (.setBoolean stmt 3 (:is-done t))
    (.setString stmt 4 (:id t))
    (.execute stmt)
    (.close stmt)))

(defn task-id-delete-q [id]
  (str "DELETE FROM task WHERE id='" id "';"))

(defn- create-stmt []
  (.createStatement @connection))

(defn- task-from-result-set
  "Check ResultSet next next and map in Task entity else return nil"
  [rs]
  (when (.next rs)
    (let [id (.getString rs "id")
          title (.getString rs "title")
          desc (.getString rs "desc")
          isdone (.getBoolean rs "isdone")]
      (->Task id title desc isdone))))

(defn save! [task]
  (if (nil? (:id task))
    (let [id (str (UUID/randomUUID))
          new-task (assoc task :id id)]
      (insert-task! new-task)
      new-task)
    (do
      (update-task! task)
      task)))

(defn get-by-id [id]
  (-> (.executeQuery (create-stmt) (str "SELECT * FROM task WHERE id='" id "';"))
      (task-from-result-set)))

(defn get-all []
  (let [rs (.executeQuery (create-stmt) (str "SELECT * FROM task;"))]
    ((fn [acc rs]
       (let [task (task-from-result-set rs)]
         (if (nil? task) acc
             (recur (conj acc task) rs)))) '() rs)))

(defn remove! [id]
  (-> (create-stmt)
      (.executeUpdate (task-id-delete-q id))))