(ns wryb.domain.sqlite.task-repo
  (:require
   [clojure.tools.logging :refer [info]]
   [wryb.date.instant-utils :refer [instant-to-timestamp timestamp-to-instant]]
   [wryb.domain.sqlite.connectionmanager :refer [connection]]
   [wryb.domain.task :refer [->Task]])
  (:import
   (java.util UUID)))

(defn- insert-task! [t]
  (let [stmt (.prepareStatement @connection
                                "INSERT INTO task (id,title,desc,isdone,category,create_time) VALUES (?,?,?,?,?,?);")]
    (.setString stmt 1 (:id t))
    (.setString stmt 2 (:title t))
    (.setString stmt 3 (:desc t))
    (.setBoolean stmt 4 (:isdone t))
    (.setString stmt 5 (:category t))
    (.setTimestamp stmt 6 (instant-to-timestamp (:createtime t)))
    (.execute stmt)
    (.close stmt)))

(defn- update-task! [t]
  (let [stmt (.prepareStatement @connection "UPDATE task SET title=?,desc=?,isdone=?,category=? where id=?;")]
    (.setString stmt 1 (:title t))
    (.setString stmt 2 (:desc t))
    (.setBoolean stmt 3 (:isdone t))
    (.setString stmt 4 (:category t))
    (.setString stmt 5 (:id t))
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
          isdone (.getBoolean rs "isdone")
          category (.getString rs "category")
          create-time (timestamp-to-instant (.getTimestamp rs "create_time"))]
      (->Task id title desc isdone category create-time))))

(defn save! [task]
  (info task)
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

(defn- resultset-to-list [rs]
  ((fn [acc rs]
     (let [task (task-from-result-set rs)]
       (if (nil? task) acc
           (recur (conj acc task) rs)))) '() rs))

(defn get-all []
  (let [rs (.executeQuery (create-stmt) (str "SELECT * FROM task ORDER BY create_time DESC;"))]
    (resultset-to-list rs)))

(defn get-by-category [category]
  (let [rs (.executeQuery (create-stmt) (str "SELECT * FROM task WHERE category='" category "' ORDER BY create_time DESC;"))]
    (resultset-to-list rs)))

(defn remove! [id]
  (-> (create-stmt)
      (.executeUpdate (task-id-delete-q id))))
