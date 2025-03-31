(ns wryb-ui.application
  (:gen-class)
  (:require
   [com.stuartsierra.component :as component]
   [system.components.endpoint :refer [new-endpoint]]
   [system.components.handler :refer [new-handler]]
   [system.components.jetty :refer [new-jetty]]
   [system.components.middleware :refer [new-middleware]]
   [wryb-ui.components.server-info :refer [server-info]]
   [wryb-ui.config :refer [config]]
   [wryb-ui.routes :refer [home-routes]]
   [wryb.domain.sqlite.connectionmanager :refer [init-connection]]
   [clojure.tools.logging :as log]))

(defn app-system [config]
  (log/info config)
  (init-connection config)
  (component/system-map
   :routes     (new-endpoint home-routes)
   :middleware (new-middleware {:middleware (:middleware config)})
   :handler    (-> (new-handler)
                   (component/using [:routes :middleware]))
   :http       (-> (new-jetty :port (:http-port config))
                   (component/using [:handler]))
   :server-info (server-info (:http-port config))))

(defn -main [& _]
  (let [config (config)]
    (-> config
        app-system
        component/start)))

(comment
  (-main))
