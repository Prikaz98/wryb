(ns wryb.main
  (:require
   [ring.adapter.jetty :as jetty]
   [wryb.config.config :refer [read-app-config]]
   [wryb.core :as w-core]
   [wryb.domain.sqlite.connectionmanager :refer [init-connection]]))


(defn -main
  ([] (-main ""))
  ([&args]
   (let [app-conf (read-app-config)
         dbconf (get app-conf "database")
         serverconf (get app-conf "server")]
     (init-connection (get dbconf "path"))
     (jetty/run-jetty w-core/app {:port (get serverconf "port") :join? false }))))
