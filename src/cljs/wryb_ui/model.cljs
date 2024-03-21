(ns wryb-ui.model
  (:require
   [reagent.core :as reagent :refer [atom]]
   [wryb-ui.util :refer [http-get]]))

(defonce categories (atom []))

(-> (js/fetch "/categories")
    (.then #(.json %))
    (.then #(js->clj % :keywordize-keys true))
    (.then #(reset! categories %)))

(defonce todos (atom '()))

(defn- replace-by-key [key src target]
  ((fn [tail acc]
     (let [head (first tail)]
       (case head
         nil acc
         (if (= (key head) (key target))
           (recur (rest tail) (cons target acc))
           (recur (rest tail) (cons head acc)))))) (reverse src) nil))

(defn update-todo-in-list [todo]
  (reset! todos (replace-by-key :id @todos todo)))

(defonce selected-category (atom nil))

(defn- load-tasks [category]
  (-> (http-get (str "/tasks?category=" (:id category)))
      (.then #(reset! todos (apply list %)))))

(add-watch selected-category :watcher
           (fn [_ _ _ new-state]
             ;;(js/console.log new-state)
             (load-tasks new-state)))

(defonce selected-task (atom nil))
