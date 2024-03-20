
(ns wryb-ui.components.task-list
  (:require
   [wryb-ui.model :refer [selected-task todos]]
   [wryb-ui.util :refer [highlights-row]]))

(defn- select-row [task]
  (highlights-row (:id task) "task-row" "task-row selected")
  (reset! selected-task task))

(defn task-row-component [task]
  [:div.task-row {:id (:id task)
                  :on-click #(select-row task)}
   [:input {:type "checkbox"
            :checked (:isdone task)}]
   (:title task)
   [:button {:style {:float "right"}} "x"]])

(defn tasks-component []
  [:div.content.split.left
   [:input.title.task-input {:placeholder "+ Add task"}]
   [:div
    [:text "Overdue:"]
    (map task-row-component (filter #(not (:isdone %)) @todos))]
   [:div.done
    [:text "Done:"]
    (map task-row-component (filter #(:isdone %) @todos))]])
