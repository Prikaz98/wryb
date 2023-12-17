(ns wryb.config.config
  (:require
   [clojure.java.io :as io]
   [toml-clj.core :as toml]))

(defn read-app-config []
  (toml/read-string (slurp (io/resource "application.toml"))))
