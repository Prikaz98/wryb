(ns wryb-ui.components.categories-list
  (:require
   [wryb-ui.model :refer [categories selected-task selected-category]]
   [wryb-ui.util :refer [highlights-row]]))

(defn switch-category [category]
  (highlights-row (:id category) "element" "element selected")
  (reset! selected-task nil)
  (reset! selected-category category))

(defn- category-row [c]
  [:div.element {:id (:id c)
                 :on-click #(switch-category c )}
   (:name c)])

(defn categories-component []
  [:div.categories
   (doall (map #(category-row %) @categories))])
