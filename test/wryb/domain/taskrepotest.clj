(ns wryb.domain.taskrepotest
  (:require [wryb.domain.taskrepo :as repo]
            [clojure.test :refer :all]
            [wryb.domain.task :refer [->Task]]))

(deftest save-test
  (testing "Store data test"
    (let [task (->Task nil "cook" nil false)]
      (is (not (nil? (:id (repo/save! task))))))))

(deftest update-test
  (testing "Update data test"
    (let [task (repo/save! (->Task nil "cook" nil false))
          updated (assoc task :title "recover" :is-done true)]
      (repo/save! updated)
      (is (= updated (repo/get-by-id (:id updated)))))))

(deftest get-test
  (testing "Access to data test"
    (let [task (->Task nil "cook" nil false)
          new-task (repo/save! task)
          id (:id new-task)]
      (and (is (= (repo/get-by-id id) new-task))
           (is (not (empty? (repo/get-all))))))))



