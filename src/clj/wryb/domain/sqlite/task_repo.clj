(ns wryb.domain.sqlite.task-repo
  (:require
   [wryb.date.instant-utils :refer [timestamp-to-instant]]
   [wryb.domain.sqlite.repository :refer [delete-by insert! select-by update! =*]]
   [wryb.domain.task :refer [->Task]]
   [clojure.tools.logging :as log])
  (:import
   (java.util UUID)))

(defn row-decode [rs]
  (let [id (.getString rs "id")
        title (.getString rs "title")
        desc (.getString rs "desc")
        isdone (.getBoolean rs "isdone")
        create-time (timestamp-to-instant (.getTimestamp rs "createtime"))
        expired-time (timestamp-to-instant (.getTimestamp rs "expiredtime"))
        category (.getString rs "category")]
    (->Task id title desc isdone category create-time expired-time)))

(def task-context {:primary-key #{:id}
                   :table-name "task"
                   :row-decode row-decode})

(defn save! [task]
  (log/debug task)
  (if (nil? (:id task))
    (let [id (str (UUID/randomUUID))
          new-task (assoc task :id id)]
      (insert! task-context new-task)
      new-task)
    (do
      (update! task-context task)
      task)))

(defn get-by-id [id]
  (first (select-by
          task-context
          :where (list (=* :id id)))))

(defn get-all [& [ordering]]
  (select-by
   task-context
   :order-by ordering))

(defn get-by-category [category & [ordering]]
  (select-by
   task-context
   :where (list (when category (=* :category category)))
   :order-by ordering))

(defn remove! [id]
  (delete-by task-context (=* :id id)))
