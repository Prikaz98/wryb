(ns wryb.main
  (:require [ring.adapter.jetty :as jetty]
            [wryb.core :as w-core]))

(defn -main [&args]
  (jetty/run-jetty w-core/app {:port 3000 :join? false}))