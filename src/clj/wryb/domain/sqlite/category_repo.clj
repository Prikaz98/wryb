(ns wryb.domain.sqlite.category-repo
  (:require
   [wryb.date.instant-utils :refer [timestamp-to-instant]]
   [wryb.domain.category :refer [->Category]]
   [wryb.domain.sqlite.repository :refer [insert! select-by update! delete-by =*]])
  (:import
   (java.util UUID)))

(defn row-decode [rs]
  (->Category
   (.getString rs "id")
   (.getString rs "name")
   (timestamp-to-instant (.getTimestamp rs "createtime"))))

(def category-context {:primary-key #{:id}
                       :table-name "category"
                       :row-decode row-decode})

(defn- update-category! [c]
  (update! category-context c))

(defn save! [c]
  (if (nil? (:id c))
    (let [new-categ (assoc c :id (str (UUID/randomUUID)))]
      (insert! category-context new-categ)
      new-categ)
    (do
      (update-category! c)
      c)))

(defn remove! [id]
  (delete-by category-context (=* :id id)))

(defn get-all [& [ordering]]
  (select-by
   category-context
   :order-by ordering
   :is-desc true))

(defn get-by-id [id]
  (select-by
   category-context
   :where (list (=* :id id))))
