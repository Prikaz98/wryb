(ns wryb-ui.components.categories-list
  (:require
   [reagent.core :refer [atom]]
   [wryb-ui.model :refer [categories selected-category selected-task
                          update-category-in-list]]
   [wryb-ui.util :refer [highlights-row http-req]]))

(defn switch-category [category]
  (highlights-row (:id category) "element" "element selected")
  (reset! selected-task nil)
  (reset! selected-category category))

(defn- store-category [edit-category input-name reset-all]
  (-> (http-req "category" (assoc @edit-category :name @input-name) "POST")
      (.then (fn [c]
               (update-category-in-list c)
               (reset-all)))))

(defn- category-row [edit-category is-edit input-name category]
  (let [{:keys [id name]} category]
    [:div.element {:id id
                   :on-click #(switch-category category)
                   :on-double-click (fn [_]
                                      (reset! edit-category category)
                                      (reset! is-edit true)
                                      (reset! input-name name))}
     name]))

(defn- edit-category-component [input-name category-on-edit reset-all]
  [:div
   [:input.element {:type "text"
                    :style {:border "solid"
                            :border-width "1px"}
                    :on-change #(reset! input-name (-> % .-target .-value))
                    :value @input-name
                    :on-key-down (fn [e]
                                   (case (.-which e)
                                     27 (reset-all)
                                     13 (store-category category-on-edit input-name reset-all)
                                     nil))}]
   (when (not-empty @category-on-edit)
     [:button {:style {:float "left"
                       :background-color " #ff9983 "
                       :margin-top "5px"}
               :on-click (fn []
                           (-> (http-req "category" {:id (:id @category-on-edit)} "DELETE")
                               (.then (fn [{:keys [id error]}]
                                        (when id
                                          (reset! categories (filter #(not (= id (:id %))) @categories)))
                                        (when error
                                          (js/alert error))
                                        (reset-all)))))}
      "del"])])

(defn categories-component []
  (let [is-edit-category (atom false)
        category-on-edit (atom {})
        input-name (atom nil)
        reset-all (fn []
                    (reset! is-edit-category false)
                    (reset! category-on-edit {})
                    (reset! input-name nil))]
    (fn []
      [:div.categories
       (for [c @categories]
         ^{:key (:id c)} [category-row category-on-edit is-edit-category input-name c])
       (if @is-edit-category
         [edit-category-component input-name category-on-edit reset-all]
         [:button {:style {:float "right" :margin-top "5px"}
                   :on-click (fn [_]
                               (reset! is-edit-category true))}
          "+"])])))
