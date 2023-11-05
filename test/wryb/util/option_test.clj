(ns wryb.util.option-test
  (:require [clojure.test :refer :all]
            [wryb.util.option :refer [get-or-else]]))

(deftest get-or-else-test
  (testing "get or else method must return value if they aren't nil else fallback value")
  (is (= (get-or-else nil "other") "other")))