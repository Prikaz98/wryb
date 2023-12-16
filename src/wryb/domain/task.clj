(ns wryb.domain.task
  (:require
   [clojure.data.json :as json]
   [wryb.date.instant-utils :refer [now parse-instant format-instant]]
   [wryb.util.option :refer [get-or-else]]))

(defrecord Task [id title desc is-done category create-time])

(defn task-from-json [json-str]
  (let [create-time-opt (get json-str "create-time")]
    (->Task (get json-str "id")
            (get json-str "title")
            (get json-str "desc")
            (get json-str "is-done")
            (get json-str "category")
            (if create-time-opt (parse-instant create-time-opt) (now)))))

(defn task-to-json [task]
  (json/write-str {:id (:id task)
                   :title (:title task)
                   :desc (:desc task)
                   :isdone (:is-done task)
                   :category (:category task)
                   :create-time (format-instant (:create-time task))}))

