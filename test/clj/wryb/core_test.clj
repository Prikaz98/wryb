(ns wryb.core-test
  (:require
   [clojure.data.json :as json]
   [clojure.test :refer [deftest is testing]]
   [wryb.date.instant-utils :refer [now]]
   [wryb.domain.task :refer [->Task task-from-json]]))

(deftest json-mapping-1
  (testing "Task mapping from json"
    (let [now      (now)
          expected (->Task "id" "cook" "after dinner" false "inbox" now now)
          js-body  (json/write-str {:id "id"
                                    :title "cook"
                                    :desc "after dinner"
                                    :isdone false
                                    :category "inbox"
                                    :createtime now
                                    :expiredtime now})]
      (is (= expected (task-from-json (json/read-str js-body)))))))
