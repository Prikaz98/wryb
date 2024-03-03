(ns wryb.domain.sqlite.task-repo
  (:require
   [clojure.tools.logging :refer [info]]
   [wryb.date.instant-utils :refer [timestamp-to-instant]]
   [wryb.domain.sqlite.repository :refer [insert! update! select-by delete-by]]
   [wryb.domain.task :refer [->Task]])
  (:import
   (java.util UUID)))


(defn row-decode [rs]
  (let [id (.getString rs "id")
        title (.getString rs "title")
        desc (.getString rs "desc")
        isdone (.getBoolean rs "isdone")
        category (.getString rs "category")
        create-time (timestamp-to-instant (.getTimestamp rs "createtime"))]
    (->Task id title desc isdone category create-time)))

(def task-context {:primary-key #{:id}
                   :table-name "task"
                   :row-decode row-decode})

(defn save! [task]
  (info task)
  (if (nil? (:id task))
    (let [id (str (UUID/randomUUID))
          new-task (assoc task :id id)]
      (insert! new-task task-context)
      new-task)
    (do
      (update! task task-context)
      task)))

(defn get-by-id [id]
  (select-by task-context (list "id" "=" id)))

(defn get-all []
  (select-by task-context))

(defn get-by-category [category]
  (select-by task-context (list "category" "=" category)))

(defn remove! [id]
  (delete-by task-context (list "id" "=" id)))
