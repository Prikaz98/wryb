(ns wryb.domain.category
 (:require
   [wryb.date.instant-utils :refer [now parse-instant]]))

(defrecord Category [id name createtime])

(defn from-json [json-str]
  (let [create-time-opt (get json-str "createtime")]
    (->Category (get json-str "id")
                (get json-str "name")
                (if create-time-opt (parse-instant create-time-opt) (now)))))
