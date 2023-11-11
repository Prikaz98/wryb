(ns wryb.domain.task-repo
  (:import (java.util UUID)))

;;depricated use sqlite storage

(def task-storage (atom {}))

(defn save! [task]
  (if (nil? (:id task))
    (let [id (str (UUID/randomUUID))
          new-task (assoc task :id id)]
      (swap! task-storage assoc id new-task)
      new-task)
    (do
      (swap! task-storage assoc (:id task) task)
      task)))

(defn get-by-id [id]
  (get @task-storage id))

(defn get-all []
  (vals @task-storage))
