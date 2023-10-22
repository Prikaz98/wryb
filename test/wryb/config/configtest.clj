(ns wryb.config.configtest
  (:require [clojure.test :refer :all]
            [wryb.config.config :refer [read-app-config]]))

(deftest load-and-parse-app-config
  (testing "application config"
    (let [conf (read-app-config)]
      (is (not (nil? conf))))))


