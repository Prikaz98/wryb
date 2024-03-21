(ns wryb.domain.task
  (:require
   [wryb.date.instant-utils :refer [now parse-instant]]))

(defrecord Task [id title desc isdone category createtime])

(defn task-from-json [json]
  (let [create-time-opt (get json "createtime")]
    (->Task (get json "id")
            (get json "title")
            (get json "desc")
            (get json "isdone")
            (get json "category")
            (if create-time-opt (parse-instant create-time-opt) (now)))))
