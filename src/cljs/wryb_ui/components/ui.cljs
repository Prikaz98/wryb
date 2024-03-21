(ns wryb-ui.components.ui
  (:require [com.stuartsierra.component :as component]
            [wryb-ui.core :refer [render]]))

(defrecord UIComponent []
  component/Lifecycle
  (start [component]
    (render)
    component)
  (stop [component]
    component))

(defn new-ui-component []
  (map->UIComponent {}))
