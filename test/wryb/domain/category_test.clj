(ns wryb.domain.category-test
  (:require [clojure.test :refer :all]
            [wryb.domain.category :refer [->Category from-json to-json]]))

(deftest category-to-json-test
  (testing "category to json"
    (let [category-json (to-json (->Category "id" "work"))]
      (is (= "{\"id\":\"id\",\"name\":\"work\"}" category-json)))))

(deftest category-from-json-test
  (testing "category from json"
    (let [category (from-json "{\"name\":\"work\"}")]
      (is (= (->Category nil "work") category)))))
