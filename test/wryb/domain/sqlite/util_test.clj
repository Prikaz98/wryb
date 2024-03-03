(ns wryb.domain.sqlite.util-test
  (:require
   [clojure.test :refer :all]
   [wryb.date.instant-utils :refer [now]]
   [wryb.domain.category :refer [->Category]]
   [wryb.domain.sqlite.util :refer [to-update-query]]))


(deftest update-to-query-test
  (testing "making correct query"
    (let [ent (->Category "id" "work" (now))
          query (to-update-query "category" ent #{:id})]
      (is (= query "UPDATE category SET name=?, createtime=? WHERE id=?;")))))
