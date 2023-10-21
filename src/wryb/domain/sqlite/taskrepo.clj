(ns wryb.domain.sqlite.taskrepo
  (:require [wryb.domain.task :refer [->Task]]
            [wryb.domain.sqlite.connectionmanager :refer [connection]])
  (:import (java.util UUID)))

(defn task-to-insert-q [t]
  (str "INSERT INTO task VALUES('" (:id t) "','" (:title t) "','" (:desc t) "'," (:is-done t) ");"))

(defn task-to-update-q [t]
  (str "UPDATE task SET id='" (:id t) "',title='" (:title t) "',desc='" (:desc t) "',isdone=" (:is-done t) ";"))

(defn task-from-result-set [rs]
  (let [id (.getString rs "id")
        title (.getString rs "title")
        desc (.getString rs "desc")
        isdone (.getBoolean rs "isdone")]
    (->Task id title desc isdone)))

(defn save! [task]
  (if (nil? (:id task))
    (let [id (str (UUID/randomUUID))
          new-task (assoc task :id id)]
      (.executeUpdate (.createStatement @connection) (task-to-insert-q new-task))
      new-task)
    (do
      (.executeUpdate (.createStatement @connection) (task-to-update-q task))
      task)))

(defn get-by-id [id]
  (-> (.executeQuery (.createStatement @connection) (str "SELECT * FROM task WHERE id='" id "';"))
      (task-from-result-set)))

(defn get-all []
  (let [rs (.executeQuery (.createStatement @connection) (str "SELECT * FROM task;"))]
    ((fn [acc rs]
       (if
        (not (.next rs)) acc
        (recur (conj acc (task-from-result-set rs)) rs))) '() rs)))
