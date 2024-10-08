(ns wryb-ui.components.task-edit
  (:require
   [clojure.string :refer [blank? includes? split]]
   [clojure.string :as str]
   [reagent.core :as reagent :refer [atom]]
   [wryb-ui.model :refer [categories selected-task update-todo-in-list]]
   [wryb-ui.util :refer [http-req]]))

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

(defn- concat-with-delimiter [delim coll]
  (if (or (nil? coll) (empty? coll)) nil
      (reduce #(str %1 delim %2) coll)))

(def desc-block-delimiter "---\n")

(defn- update-is-todo-in-sub! [is-done target sub-task todos description-block]
  (let [todo-changed (if is-done target (str "." target))
        new-content (map (fn [row]
                           (if (= row sub-task)
                             todo-changed
                             row)) todos)]
    (update-state! :desc (str description-block
                              desc-block-delimiter
                              (concat-with-delimiter "\n" new-content)))))

(defn- with-br-tag [str]
  (let [rows (split str #"\n")]
    [:label
     (first rows)
     (map (fn [row] ^{:key row} [:label [:br] row]) (rest rows))]))

(defn- content-component []
  (fn [content]
    (if (not (includes? content desc-block-delimiter))
      [with-br-tag content]
      (let [[description-block todo-block] (split content desc-block-delimiter)
            todos (split todo-block #"\n")]
        [:div
         (with-br-tag description-block)
         (for [sub-task todos]
           (let [is-done (= \. (first sub-task))
                 title (if is-done
                         (subs sub-task 1 (count sub-task))
                         sub-task)]
             ^{:key title}  [:div.task-row
                             [:input {:style {:float "left" :margin-right "5px"}
                                      :type "checkbox"
                                      :on-change #(update-is-todo-in-sub!
                                                   is-done
                                                   title
                                                   sub-task
                                                   todos
                                                   description-block)
                                      :checked is-done}]
                             [:div title]]))]))))

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

(defn- deconstruct-datetime [datetime-str]
  (map (fn [el] (str/replace el #"Z" "")) (split datetime-str #"T")))

(defn- expired-time-edit-component [toggle-edit expiredtime]
  (let [close-modal #(reset! toggle-edit false)
        [date time] (deconstruct-datetime expiredtime)
        edit-date (atom date)
        edit-time (atom time)
        expired-date-time-format (fn [] (str @edit-date "T" @edit-time "Z"))]
    (fn [_ _]
      [:div.modal {:style {:display (if @toggle-edit "block" "none")} }
       [:div.modal-content
        [:input {:type "date"
                 :value @edit-date
                 :on-change #(reset! edit-date (-> % .-target .-value))}]
        [:input {:type "time"
                 :value @edit-time
                 :on-change #(reset! edit-time (str (-> % .-target .-value) ":00"))}]
        [:div
         [:button {:on-click close-modal} "Close"]
         [:button {:on-click (fn []
                               (update-state! :expiredtime (expired-date-time-format))
                               (close-modal))} "Submit"]]]])))

(defn- edit-task-frame []
  (let [toggle-edit-expired-time (atom false)]
    (fn [is-desc-edit desc-content reset-all! {:keys [title desc createtime expiredtime category]}]
      [:div
       [:input.title.task-input {:placeholder "title description"
                                 :on-change #(update-state! :title (-> % .-target .-value))
                                 :value title}]
       (if @is-desc-edit
         (edit-description desc-content reset-all!)
         [:div.desc {:on-double-click (fn []
                                        (reset! is-desc-edit true)
                                        (reset! desc-content (if desc desc "")))}
          (if desc
            [:div [content-component desc]]
            [:label {:style {:color "gray"}} "click twice to edit"])])
       [:table {:style {:margin-top "20px"}}
        [:tbody
         [:tr [:td "Create time:"] [:td (format-time createtime)]]
         [:tr [:td "Expired time:"]
          [:td {:on-click (fn []
                            (reset! toggle-edit-expired-time true))}
           (if expiredtime (format-time expiredtime) "None")]]
         [:tr [:td "Current category:"] [:td [category-selector category @categories]]]]]

       [expired-time-edit-component toggle-edit-expired-time expiredtime]])))

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
                     (reset! desc-content "")
                     (reset! is-desc-edit false))]
    (fn []
      (let [curr-task @selected-task]
        [:div.split.right
         (if (:title curr-task)
           [edit-task-frame is-desc-edit desc-content reset-all! curr-task]
           [default-frame])]))))
