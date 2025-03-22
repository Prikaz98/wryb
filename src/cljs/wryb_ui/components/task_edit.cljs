(ns wryb-ui.components.task-edit
  (:require
   [clojure.string :refer [blank? includes? split]]
   [clojure.string :as str]
   [reagent.core :as reagent :refer [atom]]
   [wryb-ui.model :refer [categories selected-task update-todo-in-list]]
   [wryb-ui.util :refer [http-req zip-with-index put-nth]]))


(defn- format-time [time]
  (when time
    (.toLocaleString (new js/Date time) "en-GB" (js-obj "timeZone" "UTC"))))


(defn- update-state! [key value]
  (let [task @selected-task]
    (-> (http-req "task" (assoc task key value) "POST")
        (.then (fn [stored]
                 (reset! selected-task stored)
                 (update-todo-in-list stored))))))


(defn- category-selector [curr-category categories]
  [:select {:style {:float "right"
                    :border "0px"
                    :background-color "white"}
            :on-change #(update-state! :category (-> % .-target .-value))}
   (for [{:keys [id name]} categories]
     ^{:key id} [:option {:selected (= curr-category id)
                          :value id}
                 name])])


(defn- toggle-checkbox [row]
  (cond
    (re-matches #"^- \[X\] .*" row) (str/replace row #"- \[X\]" "- [ ]")
    (re-matches #"^- \[ \] .*" row) (str/replace row #"- \[ \]" "- [X]")
    :else row))


(defn- markdown-content [rows]
  (for [[row index] (zip-with-index rows)]
    (do
      (cond
      (re-matches #"^- \[[ X]\] .*" row)
      ^{:key index} [:div.task-row
       [:input {:style {:float "left" :margin-right "5px"}
                :type "checkbox"
                :checked (nil? (re-matches #"^- \[ \] .*" row))
                :on-change (fn [_]
                             (update-state!
                                :desc
                                (str/join
                                 "\n"
                                 (put-nth rows index (toggle-checkbox (nth rows index)) ))))}]
       [:label (second (split row #"^- \[[ X]\] *"))]]
      :else ^{:key index} [:label row [:br]]))))


(comment
  (toggle-checkbox "- [X] First")
  (let [rows '("hi" "there" "- [ ] todo")
        [row index] ["- [ ] todo" 2]]
    (str/join
     "\n"
     (concat
      (take index rows)
      (list (toggle-checkbox (nth rows index)))
      (drop (+ 1 index) rowx))))


  (second (split "- [ ] First" #"^- \[[ X]\] *"))
  (split "new\nline" #"\n")
  (markdown-content
   '("there is a list of tasks"
     "- [ ] first item"
     "- [ ] second item"
     "other text"))
  ((content-component)
   "there is a list of sub tasks
- [X] first item"))


(defn- content-component []
  (fn [desc]
    (let [rows (split desc #"\n")]
      [:div
       (markdown-content rows)])))


(defn- edit-description [desc-content reset-all!]
  (let [store-desc (fn []
                     (update-state! :desc (when (not (blank? @desc-content)) @desc-content))
                     (reset-all!))]
       [:div
        [:textarea.desc.task-input {:placeholder "Press Esc or sumbit button to exit with save"
                                    :rows "10"
                                    :on-change #(reset! desc-content (-> % .-target .-value))
                                    :on-key-down #(when (= 27 (.-which %)) (store-desc))
                                    :value @desc-content}]
        [:button {:on-click #(store-desc)
                  :style {:float "right"}}
         "submit"]]))


(defn- edit-task-frame []
  (let [toggle-edit-expired-time (atom false)]
    (fn [is-desc-edit desc-content reset-all! {:keys [title desc createtime expiredtime category]}]
      [:div
       [:input.title.task-input {:placeholder "title description"
                                 :on-change #(update-state! :title (-> % .-target .-value))
                                 :value title}]
       (if @is-desc-edit
         (edit-description desc-content reset-all!)
         [:div.desc {:on-click (fn [e]
                                 (when (= (.-detail e) 3)
                                   (reset! is-desc-edit true)
                                        (reset! desc-content (if desc desc ""))))}
          (if desc
            [content-component desc]
            [:label {:style {:color "gray"}} "click three times to edit"])])
       [:table {:style {:margin-top "20px"}}
        [:tbody
         [:tr [:td "Create time:"] [:td (format-time createtime)]]
         [:tr [:td "Current category:"] [:td [category-selector category @categories]]]]]])))


(defn- default-frame []
  [:div {:style {:margin "100px 0px 0px 100px"}}
   [:img {:src "images/select_task.png"
          :alt "select task"
          :width "200"
          :height "200"}]
   [:br]
   [:label "Click task title to view the derail"]])


(defn edit-task-component []
  (let [is-desc-edit (atom false)
        desc-content (atom "")
        reset-all! (fn []
                     (reset! is-desc-edit false))]
    (fn []
      (let [curr-task @selected-task]
        (reset! desc-content (:desc curr-task))
        [:div.split.right
         (if (:title curr-task)
           [edit-task-frame is-desc-edit desc-content reset-all! curr-task]
           [default-frame])]))))
