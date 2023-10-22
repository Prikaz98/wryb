(ns wryb.main
  (:require [ring.adapter.jetty :as jetty]
            [wryb.domain.sqlite.connectionmanager :refer [init-connection]]
            [wryb.core :as w-core]
            [toml-clj.core :as toml]
            [clojure.java.io :as io]))

(defn -main
  ([] (-main ""))
  ([&args]
   (let [app-conf (toml/read-string (slurp (io/resource "application.toml")))
         dbconf (get app-conf "database")
         serverconf (get app-conf "server")]
     (init-connection (get dbconf "path"))
     (jetty/run-jetty w-core/app {:port (get serverconf "port") :join? false}))))