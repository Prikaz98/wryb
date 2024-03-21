(ns wryb.domain.sqlite.category-repo
  (:require
   [wryb.date.instant-utils :refer [timestamp-to-instant]]
   [wryb.domain.category :refer [->Category]]
   [wryb.domain.sqlite.repository :refer [insert! select-by update! delete-by]])
  (:import
   (java.util UUID)))

(defn row-decode [rs]
  (let [id (.getString rs "id")
        name (.getString rs "name")
        create-time (timestamp-to-instant (.getTimestamp rs "createtime"))]
    (->Category id name create-time)))

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
  (delete-by category-context ["id" "=" id]))

(defn get-all [& [ordering-keys]]
  (select-by category-context nil ordering-keys))

(defn get-by-id [id]
  (select-by category-context [["id" "=" id]]))
