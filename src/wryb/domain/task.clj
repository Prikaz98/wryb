(ns wryb.domain.task
  (:require
   [clojure.data.json :as json]))

(defrecord Task [id title desc is-done])

(defn task-from-json [str]
  (let [json-str (json/read-str str)]
    (->Task (get json-str "id") (get json-str "title") (get json-str "desc") (get json-str "isdone"))))

(defn task-to-json [task]
  (json/write-str {:id (:id task) :title (:title task) :desc (:desc task) :isdone (:is-done task)}))
