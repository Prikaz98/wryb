(ns wryb.date.instant-utils
  (:import (java.time Instant)
           (java.time.format DateTimeFormatter)))

(defn now [] (Instant/now))

(defn parse
  ([instant-str] (Instant/from (.parse DateTimeFormatter/ISO_INSTANT instant-str))))

(defn format
  ([instant] (.format DateTimeFormatter/ISO_INSTANT instant)))