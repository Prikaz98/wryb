(ns wryb.domain.sqlite.taskrepo
  (:require [wryb.domain.task :refer [->Task]]
            [wryb.domain.sqlite.connectionmanager :refer [connection]])
  (:import (java.util UUID)))

(defn task-to-insert-q [t]
  (str "INSERT INTO task VALUES('" (:id t) "','" (:title t) "','" (:desc t) "'," (:is-done t) ");"))

(defn task-to-update-q [t]
  (str "UPDATE task SET title='" (:title t) "',desc='" (:desc t) "',isdone=" (:is-done t) " where id='" (:id t) "';"))

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
      (.executeUpdate (create-stmt) (task-to-insert-q new-task))
      new-task)
    (do
      (.executeUpdate (create-stmt) (task-to-update-q task))
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