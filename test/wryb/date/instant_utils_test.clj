(ns wryb.date.instant-utils-test
  (:require
   [clojure.test :refer :all]
   [wryb.date.instant-utils :refer [format-instant parse-instant now instant-to-timestamp timestamp-to-instant]]))

(deftest now-test
  (testing "now func return not null value")
  (is (not (nil? (now)))))

(deftest format-parse-test
  (testing "format and parse function have to match values")
  (let [now (now)
        formated (format-instant now)
        parsed (parse-instant formated)]
    (is (= now parsed))))

(deftest to-timestamp-and-back
  (testing "convert to timestamp and return back to instant")
  (let [now (now)
        timestamp (instant-to-timestamp now)
        instant (timestamp-to-instant timestamp)]
    (is (= now instant))))