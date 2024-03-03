(ns wryb.domain.sqlite.connectionmanagertest
  (:require
   [clojure.test :refer :all]
   [wryb.domain.sqlite.connectionmanager :as cm]
   [wryb.domain.sqlite.task-repo :refer :all]
   [wryb.domain.task :refer [->Task]])
  (:import
   [java.time Instant]))


(deftest load-resource
  (testing "Load resource"
    (is (not (nil? (cm/load-migration-scripts))))))

(deftest create-db-apply-migration
  (testing "Sqlite create in-memory connection and apply migration"
    (is (not (nil? (cm/init-connection ":memory:"))))))

(deftest insert-and-get-by-id
  (testing "insert task and get by id"
    (cm/init-connection ":memory:")
    (let [t (->Task nil "hello" "after mornign" false "inbox"  Instant/EPOCH)
          saved (save! t)]
      (is (not (nil? saved)))
      (-> (get-by-id (:id saved))
          (= (list saved))
          (is)))))

(deftest insert-and-get-all
  (testing "insert task and get by id"
    (cm/init-connection ":memory:")
    (let [t (->Task nil "hello" "after mornign" false "inbox" Instant/EPOCH)
          saved (save! t)
          all (get-all)]
      (is (= (first all) saved)))))

(deftest insert-and-remove-by-id
  (testing "insert task and remove by id"
    (cm/init-connection ":memory:")
    (let [t (->Task nil "hello" "after mornign" false "inbox"  Instant/EPOCH)
          saved-id (:id (save! t))]
      (remove! saved-id)
      (is (empty? (get-by-id saved-id))))))

(deftest get-by-category-test
  (testing "get by default inbox category"
    (cm/init-connection ":memory:")
    (let [category "working222"
          saved (save! (->Task nil "hello" "after mornign" false category Instant/EPOCH))
          all-by-category (get-by-category category)]
      (is (= saved (first all-by-category))))))
