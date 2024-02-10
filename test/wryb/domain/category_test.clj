(ns wryb.domain.category-test
  (:require
   [clojure.data.json :as json]
   [clojure.test :refer :all]
   [wryb.domain.category :refer [from-json]]))

(deftest category-from-json-test
  (testing "category from json"
    (let [category (from-json (json/read-str "{\"name\":\"work\"}"))]
      (is (not (nil? (:name category)))))))
