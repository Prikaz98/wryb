(ns wryb.domain.taskrepotest
  (:require [wryb.domain.task-repo :as repo]
            [wryb.date.instant-utils :refer [now]]
            [clojure.test :refer :all]
            [wryb.domain.task :refer [->Task]]))

(deftest save-test
  (testing "Store data test"
    (let [task (->Task nil "cook" nil false "inbox" (now))]
      (is (not (nil? (:id (repo/save! task))))))))

(deftest update-test
  (testing "Update data test"
    (let [task (repo/save! (->Task nil "cook" nil false "inbox" (now)))
          updated (assoc task :title "recover" :isdone true)]
      (repo/save! updated)
      (is (= updated (repo/get-by-id (:id updated)))))))

(deftest get-test
  (testing "Access to data test"
    (let [task (->Task nil "cook" nil false "inbox" (now))
          new-task (repo/save! task)
          id (:id new-task)]
      (and (is (= (repo/get-by-id id) new-task))
           (is (not (empty? (repo/get-all))))))))
