(ns wryb.domain.sqlite.connectionmanagertest
  (:require [wryb.domain.sqlite.connectionmanager :as cm]
            [wryb.domain.task :refer [->Task]]
            [wryb.date.instant-utils :refer [now]]
            [wryb.domain.sqlite.task-repo :refer :all]
            [clojure.test :refer :all]))

(defn- tasks-equeal [l r]
  (and (= (:id l) (:id r))
       (= (:title l) (:title r))
       (= (:desc l) (:desc r))
       (= (:category l) (:category r))
       (= (:isdone l) (:isdone r))))

(deftest load-resource
  (testing "Load resource"
    (is (not (nil? (cm/load-migration-scripts))))))

(deftest create-db-apply-migration
  (testing "Sqlite create in-memory connection and apply migration"
    (is (not (nil? (cm/init-connection ":memory:"))))))

(deftest delete-query-from-task-id
  (testing "make query from task id"
    (let [query (task-id-delete-q "someid")
          expected "DELETE FROM task WHERE id='someid';"]
      (is (= expected query)))))

(deftest insert-and-get-by-id
  (testing "insert task and get by id"
    (cm/init-connection ":memory:")
    (let [t (->Task nil "hello" "after mornign" false "inbox"  (now))
          saved (save! t)]
      (is (not (nil? saved)))
      (-> (get-by-id (:id saved))
          (tasks-equeal saved)
          (is)))))

(deftest insert-and-get-all
  (testing "insert task and get by id"
    (cm/init-connection ":memory:")
    (let [t (->Task nil "hello" "after mornign" false "inbox" (now))
          saved (save! t)
          all (get-all)]
      (is (tasks-equeal (first all) saved)))))

(deftest insert-and-remove-by-id
  (testing "insert task and remove by id"
    (cm/init-connection ":memory:")
    (let [t (->Task nil "hello" "after mornign" false "inbox"  (now))
          saved-id (:id (save! t))]
      (remove! saved-id)
      (is (nil? (get-by-id saved-id))))))

(deftest get-by-category-test
  (testing "get by default inbox category"
    (cm/init-connection ":memory:")
    (let [category "working11"
          saved (save! (->Task nil "hello" "after mornign" false "working222" (now)))
          all-by-category (get-by-category "working222")]
      (is (tasks-equeal saved (first all-by-category))))))