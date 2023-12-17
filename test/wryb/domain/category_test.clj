(ns wryb.domain.category-test
  (:require
   [clojure.test :refer :all]
   [clojure.data.json :as json]
   [wryb.domain.category :refer [->Category from-json]]))

(deftest category-from-json-test
  (testing "category from json"
    (let [category (from-json (json/read-str "{\"name\":\"work\"}"))]
      (is (= (->Category nil "work") category)))))
