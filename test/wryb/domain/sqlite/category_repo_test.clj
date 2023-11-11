(ns wryb.domain.sqlite.category-repo-test
  (:require [wryb.domain.sqlite.connectionmanager :as cm]
            [wryb.domain.sqlite.category-repo :as repo]
            [wryb.domain.category :refer [->Category]]
            [clojure.test :refer :all]))

(deftest insert-and-get-all-category
  (testing "insert and get-all"
    (cm/init-connection ":memory:")
    (let [c (->Category "id" "work")
          saved-id (:id (repo/save! c))
          all (repo/get-all)]
      (is (not (nil? all))))))

(deftest insert-and-remove-by-id-category
  (testing "insert and remove"
    (cm/init-connection ":memory:")
    (let [c (->Category nil "work")
          saved (repo/save! c)
          all-size (count (repo/get-all))]
      (repo/remove! saved)
      (is (= (- all-size 1) (count (repo/get-all)))))))