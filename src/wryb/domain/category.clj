(ns wryb.domain.category)

(defrecord Category [id name])

(defn from-json [json-str]
    (->Category (get json-str "id")
                (get json-str "name")))
