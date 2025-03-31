(ns wryb-ui.components.task-list
  (:require
   [reagent.core :refer [atom]]
   [wryb-ui.model :refer [selected-category selected-task todos
                          update-todo-in-list]]
   [wryb-ui.util :refer [highlights-row http-get http-req]]))

(defn- select-row [task]
  (highlights-row (:id task) "task-row" "task-row selected")
  (-> (http-get (str "task?id=" (:id task)))
      (.then #(reset! selected-task %))))

(defn- remove-task [task-id]
  (-> (http-req "task" {:id task-id} "DELETE")
      (.then (fn [removed-id]
               (->> @todos
                    (filter #(not (= removed-id (:id %))))
                    (reset! todos))
               (reset! selected-task nil)))))

(defn switch-isdone [task isdone]
  (let [changed-task (assoc task :isdone isdone)]
    (-> (http-req "task" changed-task "POST")
        (.then (fn [result] (update-todo-in-list result))))))

(defn- task-row-component [task]
  (let [{:keys [id isdone title]} task]
    [:div.task-row {:id id}
     [:input {:style {:float "left" :margin-right "5px"}
              :type "checkbox"
              :defaultChecked isdone
              :on-change #(switch-isdone task (-> % .-target .-checked))}]
     [:div {:on-click #(select-row task)}
      title
      [:button {:style {:float "right"}
                :on-click (fn [_] (remove-task id))}
       "x"]]]))

(defn- eval-placeholder [category]
  (str "+ Add task"
       (if category (str " to \"" (:name category) "\"") "")))

(defn- store-new-task [title]
  (let [new-task {:title title
                  :category (:id @selected-category)}]
    (-> (http-req "task" new-task "POST")
        (.then #(reset! todos (cons % @todos))))))

(defn- input-title-component []
  (let [title-input (atom "")]
    (fn []
      [:input.title.task-input {:type "text"
                                :value @title-input
                                :placeholder (eval-placeholder @selected-category)
                                :on-change (fn [e]
                                             (reset! title-input (-> e .-target .-value)))
                                :on-key-down (fn [e]
                                               (when (= 13 (.-which e))
                                                 (store-new-task @title-input)
                                                 (reset! title-input "")))}])))

(defn tasks-component []
  (fn []
    (let [overdue (atom (filter #(not (:isdone %)) @todos))
          done    (atom (filter #(:isdone %) @todos))]
      [:div.content.split.left
       [input-title-component]
       [:div
        [:label "Overdue:"]
        (for [todo @overdue]
          ^{:key (:id todo)} [task-row-component todo])]
       [:div.done
        [:label "Done:"]
        (for [todo @done]
          ^{:key (:id todo)} [task-row-component todo])]])))
