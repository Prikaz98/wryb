(ns wryb-ui.model
  (:require
   [reagent.core :as reagent :refer [atom]]
   [wryb-ui.util :refer [http-get]]))

(defonce categories (atom []))

(-> (js/fetch "/categories")
    (.then #(.json %))
    (.then #(js->clj % :keywordize-keys true))
    (.then #(reset! categories (apply vector %))))

(defonce todos (atom '()))

(defn- replace-by-key-or-add [key src target]
  (let [loop-acc (fn [tail acc]
                   (let [head (first tail)]
                     (case head
                       nil acc
                       (if (= (key head) (key target))
                         (recur (rest tail) (cons target acc))
                         (recur (rest tail) (cons head acc))))))]
    (if (some #(= (key %) (key target)) src)
      (loop-acc (reverse src) nil)
      (conj src target))))

(defn update-todo-in-list [todo]
  (reset! todos (replace-by-key-or-add :id @todos todo)))

(defn update-category-in-list [c]
  (->> (replace-by-key-or-add :id @categories c)
       (sort-by #(:createtime %))
       (reset! categories)))

(defonce selected-category (atom nil))

(defn- load-tasks [category]
  (-> (http-get (str "/tasks?category=" (:id category)))
      (.then #(reset! todos (apply list %)))))

(add-watch selected-category :watcher
           (fn [_ _ _ new-state]
             (load-tasks new-state)))

(defonce selected-task (atom nil))
