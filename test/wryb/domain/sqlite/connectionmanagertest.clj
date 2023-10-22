(ns wryb.domain.sqlite.connectionmanagertest
  (:require [wryb.domain.sqlite.connectionmanager :as cm]
            [wryb.domain.task :refer [->Task]]
            [wryb.domain.sqlite.taskrepo :refer :all]
            [clojure.test :refer :all]))

(deftest load-resource
  (testing "Load resource"
    (is (not (nil? (cm/load-migration-scripts))))))

(deftest create-db-apply-migration
  (testing "Sqlite create in-memory connection and apply migration"
    (is (not (nil? (cm/init-connection ":memory:"))))))

(deftest create-insert-query-from-task
  (testing "query make from task"
    (let [query (task-to-insert-q (->Task "id" "hello" "after mornign" false))
          expected "INSERT INTO task VALUES('id','hello','after mornign',false);"]
      (is (= expected query)))))

(deftest create-update-query-from-task
  (testing "query make from task"
    (let [query (task-to-update-q (->Task "id" "hello" "after mornign" false))
          expected "UPDATE task SET title='hello',desc='after mornign',isdone=false where id='id';"]
      (is (= expected query)))))

(deftest delete-query-from-task-id
  (testing "make query from task id"
    (let [query (task-id-delete-q "someid")
          expected "DELETE FROM task WHERE id='someid';"]
      (is (= expected query)))))

(deftest insert-and-get-by-id
  (testing "insert task and get by id"
    (cm/init-connection ":memory:")
    (let [t (->Task nil "hello" "after mornign" false)
          saved (save! t)]
      (is (not (nil? saved)))
      (-> (get-by-id (:id saved))
          (= saved)
          (is)))))

(deftest insert-and-get-all
  (testing "insert task and get by id"
    (cm/init-connection ":memory:")
    (let [t (->Task nil "hello" "after mornign" false)
          saved (save! t)
          all (get-all)]
      (is (= (first all) saved)))))

(deftest insert-and-remove-by-id
  (testing "insert task and remove by id"
    (cm/init-connection ":memory:")
    (let [t (->Task nil "hello" "after mornign" false)
          saved-id (:id (save! t))]
      (remove! saved-id)
      (is (nil? (get-by-id saved-id))))))
