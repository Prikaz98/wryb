(ns wryb-ui.core
  (:require
   [wryb-ui.components.categories-list :refer [categories-component]]
   [wryb-ui.components.task-edit :refer [edit-task-component]]
   [wryb-ui.components.task-list :refer [tasks-component]]
   [reagent.core :as reagent]))

(enable-console-print!)

(defn root []
  [:div
   [categories-component]
   [tasks-component]
   [edit-task-component]])

(defn render []
  (reagent/render [root] (.getElementById js/document "app")))
