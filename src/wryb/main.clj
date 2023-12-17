(ns wryb.main
  (:require
   [ring.adapter.jetty :as jetty]
   [wryb.config.config :refer [read-app-config]]
   [wryb.core :as w-core]
   [clojure.java.io :as io]
   [wryb.domain.sqlite.connectionmanager :refer [init-connection]])
(:import (javax.net.ssl SSLContext
                        TrustManager
                        KeyManagerFactory)
         (java.security KeyStore
                        SecureRandom)))


(defn- configureSSLContext [store password]
  (let [pass (.toCharArray password)
        key-store (KeyStore/getInstance "PKCS12")
        input-stream (io/input-stream (io/resource store))
        key-manager-factory (KeyManagerFactory/getInstance "SunX509")
        ssl-context (SSLContext/getInstance "TLS")]
   (.load key-store input-stream pass)
   (.close input-stream)
   (.init key-manager-factory key-store pass)
   (.init ssl-context (.getKeyManagers key-manager-factory) (make-array TrustManager 0) (new SecureRandom))
   ssl-context))

(defn -main
  ([] (-main ""))
  ([&args]
   (let [app-conf (read-app-config)
         dbconf (get app-conf "database")
         serverconf (get app-conf "server")
         store (get serverconf "store")
         password (get serverconf "pass")]
     (init-connection (get dbconf "path"))
     (jetty/run-jetty w-core/app {:port (get serverconf "port") :join? false :ssl? true :ssl-context (configureSSLContext store password)}))))
