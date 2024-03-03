(ns wryb.domain.sqlite.category-repo-test
  (:require
   [clojure.test :refer :all]
   [wryb.domain.category :refer [->Category]]
   [wryb.domain.sqlite.category-repo :as repo]
   [wryb.domain.sqlite.connectionmanager :as cm])
  (:import
   [java.time Instant]))

(deftest insert-and-get-all-category
  (testing "insert and get-all"
    (cm/init-connection ":memory:")
    (let [c        (->Category "id" "work" Instant/EPOCH)
          saved-id (:id (repo/save! c))
          all      (repo/get-all)]
      (is (not (nil? all))))))

(deftest insert-and-remove-by-id-category
  (testing "insert and remove"
    (cm/init-connection ":memory:")
    (let [c        (->Category nil "work" Instant/EPOCH)
          saved    (repo/save! c)
          all-size (count (repo/get-all))]
      (repo/remove! (:id saved))
      (is (= (- all-size 1) (count (repo/get-all)))))))

(deftest insert-and-get-by-id-category
  (testing "insert and get by id"
    (cm/init-connection ":memory:")
    (let [c     (->Category nil "work" Instant/EPOCH)
          saved (repo/save! c)
          got   (repo/get-by-id (:id saved))]
      (is (= (list saved) got)))))
