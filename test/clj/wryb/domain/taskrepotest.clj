(ns wryb.domain.taskrepotest
  (:require
   [clojure.test :refer :all]
   [wryb.domain.sqlite.task-repo :as repo]
   [wryb.domain.task :refer [->Task]]
   [clojure.string :refer [split]])
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
      (is (= updated (repo/get-by-id (:id updated)))))))

(deftest get-test
  (testing "Access to data test"
    (let [task (->Task nil "cook" nil false "inbox" Instant/EPOCH)
          new-task (repo/save! task)
          id (:id new-task)]
      (and (is (= (repo/get-by-id id) new-task))
           (is (not-empty (repo/get-all)))))))

(def parse-param [{:rgx #"\*" :tag :b}
                  {:rgx #"\/" :tag :i}])

(defn- content-to-html [content {:keys [rgx tag]}]
  (let [splitted-by-tag (split content rgx)]
    (for [i (range 0 (count splitted-by-tag))]
      (if (not (even? i))
        [tag (nth splitted-by-tag i)]
        (nth splitted-by-tag i)))))

(let [content "*bold* /italic/ *other bold*"]
  (map #(content-to-html content %) parse-param))
