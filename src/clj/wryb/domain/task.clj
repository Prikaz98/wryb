(ns wryb.domain.task
  (:require
   [wryb.date.instant-utils :refer [now parse-instant]]))

(defrecord Task [id title desc isdone category createtime expiredtime])

(defn task-from-json [json]
  (let [create-time-opt (get json "createtime")
        expired-time-opt (get json "expiredtime")]
    (->Task (get json "id")
            (get json "title")
            (get json "desc")
            (get json "isdone")
            (get json "category")
            (if create-time-opt (parse-instant create-time-opt) (now))
            (if expired-time-opt (parse-instant expired-time-opt) (now)))))
