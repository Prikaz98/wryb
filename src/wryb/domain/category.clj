(ns wryb.domain.category
  (:require
   [clojure.data.json :as json]))

(defrecord Category [id name])

(defn to-json [c]
  (json/write-str {:id (:id c)
                   :name (:name c)}))

(defn from-json [json-str]
    (->Category (get json-str "id")
                (get json-str "name")))
