(ns wryb-ui.config
  (:require
   [clojure.java.io :as io]
   [toml-clj.core :as toml]
   [environ.core :refer [env]]
   [ring.middleware.defaults :refer [api-defaults wrap-defaults]]
   [ring.middleware.gzip :refer [wrap-gzip]]
   [ring.middleware.logger :refer [wrap-with-logger]]))

(defn- read-app-config []
  (toml/read-string (slurp (io/resource "application.toml")) {:key-fn keyword}))

(defn config []
  (let [app-conf (read-app-config)]
    {:http-port  (or (env :port) (:port (:server app-conf)))
     :middleware [[wrap-defaults api-defaults]
                  wrap-with-logger
                  wrap-gzip]
     :dbconf (:database app-conf)}))
