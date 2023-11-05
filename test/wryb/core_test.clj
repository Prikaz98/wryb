(ns wryb.core-test
  (:require
   [clojure.data.json :as json]
   [clojure.test :refer :all]
   [wryb.core :refer :all]
   [wryb.date.instant-utils :refer [now format-instant]]
   [wryb.domain.task :refer :all]))

(deftest json-mapping
  (testing "Task mapping from json"
    (let [now (now)
          expected (->Task "id" "cook" "after dinner" false now)
          js-body (json/write-str {:id "id" :title "cook"
                                   :desc "after dinner" :isdone false
                                   :create-time (format-instant now)})]
      (is (= expected (task-from-json js-body))))))

(deftest json-mapping
  (testing "Task mapping to json"
    (let [now (now)
          task (->Task "id" "cook" "after dinner" false now)
          expected (json/write-str {:id "id" :title "cook"
                                    :desc "after dinner" :isdone false
                                    :create-time (format-instant now)})]
      (is (= expected (task-to-json task))))))
