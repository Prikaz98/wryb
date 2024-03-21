(ns wryb-ui.components.task-edit
  (:require
   [wryb-ui.model :refer [categories selected-task todos update-todo-in-list]]
   [wryb-ui.util :refer [http-req]]))

(defn- format-time [time]
  (when time
    (.toLocaleString (new js/Date time) "en-GB" (js-obj "timeZone" "UTC"))))

(defn- update-state [key value]
  (let [task @selected-task]
    (-> (http-req "task" (assoc task key value) "POST")
        (.then (fn [stored]
                 (reset! selected-task stored)
                 (update-todo-in-list stored))))))

(defn- category-selector [curr-category categories]
  [:select {:style {:float "right"
                    :border "0px"
                    :background-color "white"}
            :on-change #(update-state :category (-> % .-target .-value))}
   (for [{:keys [id name]} categories]
     ^{:key id} [:option {:selected (= curr-category id)
                          :value id}
                 name])])

(defn edit-task-component []
  (let [{:keys [title desc createtime category]} @selected-task]
    [:div.split.right
     (if title
       [:div
        [:input.title.task-input {:placeholder "title description"
                                  :on-change #(update-state :title (-> % .-target .-value))
                                  :value title}]
        [:textarea.desc.task-input {:placeholder "description"
                                    :rows "10"
                                    :on-change #(update-state :desc (-> % .-target .-value))
                                    :value (if desc desc "")}]
        [:table
         [:tbody
          [:tr [:td "Create time:"] [:td (format-time createtime)]]
          [:tr [:td "Current category:"] [:td (category-selector category @categories)]]]]]
       [:div {:style {:margin "100px 0px 0px 100px"}}
        [:img {:src "images/select_task.png"
               :alt "select task"
               :width "200"
               :height "200"}]
        [:br]
        [:text "Click task title to view the derail"]])]))
