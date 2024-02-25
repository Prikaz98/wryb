(ns wryb.domain.sqlite.util
  (:require
   [clojure.string :as string]
   [wryb.date.instant-utils :refer [instant-to-timestamp]]))

(defn extract-clean-fields-name [obj]
  (map #(str (string/replace % #":" "")) (keys obj)))

(defn- concat-with-delimiter [seq delim]
  (reduce #(str %1 delim %2) seq))

(defn to-insert-query[table-name obj]
  (let [field-names (extract-clean-fields-name obj)
        field-as-params (concat-with-delimiter field-names ", ")
        values (concat-with-delimiter (map (fn [_] "?") field-names) ", ")]
    (str "INSERT INTO " table-name "(" field-as-params ") VALUES (" values ");")))

(defn zip-with-index
  ([arr] (zip-with-index arr 0))
  ([arr start]
   (zipmap arr (range start (+ start (count arr))))))

(defn fill-insert-stmt!
  "Read fields and put them into statment"
  [stmt obj]
  (doseq [[value index] (zip-with-index (vals obj) 1)]
    (condp = (type value)
      java.lang.Boolean (.setBoolean stmt index value)
      java.time.Instant (.setTimestamp stmt index (instant-to-timestamp value))
      (.setString stmt index value))))

(defn- accumulate-rs
  ([rs map-f] (accumulate-rs '() rs map-f))
  ([acc rs map-f]
   (let [task (map-f rs)]
     (if (nil? task) acc
         (recur (conj acc task) rs map-f)))))

(defn resultset-to-list
  "transform result set to list of elements use map function"
  [rs mapf]
  (accumulate-rs rs mapf))
