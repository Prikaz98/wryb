(ns wryb.domain.taskrepotest
  (:require
   [clojure.test :refer :all]
   [wryb.date.instant-utils :refer [now]]
   [wryb.domain.sqlite.task-repo :as repo]
   [wryb.domain.task :refer [->Task]])
  (:import
   [java.time Instant]))

(deftest save-test
  (testing "Store data test"
    (let [task (->Task nil "cook" nil false "inbox" Instant/EPOCH)]
      (is (not (nil? (:id (repo/save! task))))))))

(deftest update-test
  (testing "Update data test"
    (let [task (repo/save! (->Task nil "cook" nil false "inbox" Instant/EPOCH))
          updated (assoc task :title "recover" :isdone true)]
      (repo/save! updated)
      (is (= (list updated) (repo/get-by-id (:id updated)))))))

(deftest get-test
  (testing "Access to data test"
    (let [task (->Task nil "cook" nil false "inbox" Instant/EPOCH)
          new-task (repo/save! task)
          id (:id new-task)]
      (and (is (= (repo/get-by-id id) (list new-task)))
           (is (not-empty (repo/get-all)))))))
