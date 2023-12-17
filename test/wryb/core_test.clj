(ns wryb.core-test
  (:require
   [clojure.data.json :as json]
   [clojure.test :refer [deftest is testing]]
   [wryb.core :refer :all]
   [wryb.date.instant-utils :refer [now]]
   [wryb.domain.task :refer :all]))

(deftest json-mapping-1
  (testing "Task mapping from json"
    (let [now (now)
          expected (->Task "id" "cook" "after dinner" false "inbox" now)
          js-body (json/write-str {:id "id"
                                   :title "cook"
                                   :desc "after dinner"
                                   :isdone false
                                   :category "inbox"
                                   :createtime now})]
      (is (= expected (task-from-json (json/read-str js-body)))))))
