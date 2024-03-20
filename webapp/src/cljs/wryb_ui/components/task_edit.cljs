(ns wryb-ui.components.task-edit
  (:require
   [wryb-ui.model :refer [categories selected-task]]))

(defn- format-time [time]
  (when time
    (.toLocaleString (new js/Date time) "en-GB" (js-obj "timeZone" "UTC"))))

(defn- category-selector [category-id categories]
  [:select {:style {:float "right"}}
   (let [current-category (first (filter #(= category-id (:id %)) categories))]
     (when current-category
       [:option (:name current-category)]))
   (->> categories
        (filter #(not (= category-id (:id %))))
        (map (fn [c] [:option {:value (:id c)} (:name c)])))])

(defn- update-state [task key value]
  (js/console.log (assoc task key value))
  (reset! selected-task (assoc task key value)))

(defn edit-task-component []
  (let [task @selected-task]
    [:div.split.right
     (if task
       [:div
        [:input.title.task-input {:placeholder "title description"
                                  :on-change #(update-state task :title (-> % .-target .-value))
                                  :value (:title task)}]
        [:textarea.desc.task-input {:placeholder "description"
                                    :rows "10"
                                    :on-change #(update-state task :desc (-> % .-target .-value))
                                    :value (if (:desc task) (:desc task) "")}]
        [:table
         [:tbody
          [:tr [:td "Create time:"] [:td (format-time (:createtime task))]]
          [:tr [:td "Current category:"] [:td (category-selector (:category task) @categories)]]]]]
       [:div {:style {:margin "100px 0px 0px 100px"}}
        [:img {:src "images/select_task.png"
               :alt "select task"
               :width "200"
               :height "200"}]
        [:br]
        [:text "Click task title to view the derail"]])]))
