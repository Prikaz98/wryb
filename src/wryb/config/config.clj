(ns wryb.config.config
  (:require [toml-clj.core :as toml]
            [clojure.java.io :as io]))

(defn read-app-config []
  (toml/read-string (slurp (io/resource "application.toml"))))