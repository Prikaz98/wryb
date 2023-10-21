(ns wryb.main
  (:require [ring.adapter.jetty :as jetty]
            [wryb.domain.sqlite.connectionmanager :refer [init-connection]]
            [wryb.core :as w-core]))

(defn -main
  ([] (-main ""))
  ([&args]
    (init-connection "/home/ivan/tmp/task.db")
    (jetty/run-jetty w-core/app {:port 3000 :join? false})))