(ns wryb.core-test
  (:require
   [clojure.data.json :as json]
   [clojure.test :refer :all]
   [wryb.core :refer :all]
   [wryb.domain.task :refer :all]))

(deftest json-mapping
  (testing "Task mapping"
    (let [expected (->Task "cook" "after dinner" false)
          js-body (json/write-str {:title "cook" :desc "after dinner" :isdone false})]
      (is (= expected (task-from-json js-body))))))

(deftest json-mapping
  (testing "Task mapping"
    (let [task (->Task "cook" "after dinner" false)
          expected (json/write-str {:title "cook" :desc "after dinner" :isdone false})]
      (is (= expected (task-to-json task))))))
