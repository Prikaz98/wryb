(ns wryb.domain.sqlite.connectionmanager
  (:require
   [clojure.java.io :as io])
  (:import
   (java.sql DriverManager)))

(defn load-migration-scripts []
  (slurp (io/resource "db/ddl.sql")))

(def connection (atom nil))

(defn craete-db-model [stmt]
  (let [scripts (load-migration-scripts)]
    (.executeUpdate stmt scripts)))

(defn init-connection [conf]
  (let [path (:path (:dbconf conf))]
    (reset! connection (DriverManager/getConnection (str "jdbc:sqlite:" path)))
    (craete-db-model (.createStatement @connection))
    @connection))
