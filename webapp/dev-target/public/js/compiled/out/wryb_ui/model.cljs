(ns wryb-ui.model
  (:require
   [reagent.core :as reagent :refer [atom]]))

(defonce categories (atom []))

(-> (js/fetch "http://localhost:3000/categories")
    (.then #(.json %))
    (.then #(js->clj % :keywordize-keys true))
    (.then #(reset! categories %)))

(def tasks
  [{:id 1 :category "uuid-other" :title "task1" :desc "task1 desc" :isdone false :createtime "2024-03-19T19:26:28.807Z"}
   {:id 2 :category "uuid-inbox" :title "task2" :desc "task2 desc" :isdone true :createtime "2024-03-19T19:26:28.807Z"}
   {:id 3 :category "uuid-wryb" :title "task3" :desc "task3 desc" :isdone false :createtime "2024-03-19T19:26:28.807Z"}
   {:id 4 :category "uuid-wryb" :title "task4" :desc "task4 desc" :isdone true :createtime "2024-03-19T19:26:28.807Z"}
   {:id 5 :category "uuid-wryb" :title "task5" :desc "task5 desc" :isdone false :createtime "2024-03-19T19:26:28.807Z"}
   {:id 6 :category "uuid-wryb" :title "task6" :isdone false :createtime "2024-03-19T19:26:28.807Z"}
   {:id 7 :category "uuid-other" :title "task7" :isdone true :createtime "2024-03-19T19:26:28.807Z"}])

(defonce todos (atom tasks))

(defonce selected-category (atom nil))

(defn- load-tasks [category]
  (-> (js/fetch (str "http://localhost:3000/tasks?category=" (:id category)))
    (.then #(.json %))
    (.then #(js->clj % :keywordize-keys true))
    (.then #(reset! todos %))))

(add-watch selected-category :watcher
           (fn [_ _ _ new-state]
             ;;(js/console.log new-state)
             (load-tasks new-state)))

(defonce selected-task (atom nil))
