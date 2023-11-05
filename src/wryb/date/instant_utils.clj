(ns wryb.date.instant-utils
  (:import (java.time Instant)
           (java.time.format DateTimeFormatter)
           (java.sql Timestamp)))

(defn now [] (Instant/now))

(defn parse-instant
  ([instant-str] (Instant/from (.parse DateTimeFormatter/ISO_INSTANT instant-str))))

(defn format-instant
  ([instant] (.format DateTimeFormatter/ISO_INSTANT instant)))

(defn instant-to-timestamp [instant]
  (Timestamp/from instant))

(defn timestamp-to-instant [timestamp]
  (.toInstant timestamp))