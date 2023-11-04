(ns wryb.date.instant-utils-test
  (:require
   [clojure.test :refer :all]
   [wryb.date.instant-utils :as date-util]))

(deftest now-test
  (testing "now func return not null value")
  (is (not (nil? (date-util/now)))))

(deftest format-parse-test
  (testing "format and parse function have to match values")
  (let [now (date-util/now)
        formated (date-util/format now)
        parsed (date-util/parse formated)]
    (is (= now parsed))))