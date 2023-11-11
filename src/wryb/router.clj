(ns wryb.router
  (:require [clojure.string :refer [join]]
            [wryb.domain.sqlite.task-repo :as t-repo]
            [wryb.domain.sqlite.category-repo :as c-repo]
            [ring.util.request :refer [body-string]]
            [wryb.domain.task :refer [task-from-json task-to-json]]
            [wryb.domain.category :as category]
            [ring.util.response :refer [content-type resource-response response]]
            [clojure.data.json :as json]
            [wryb.api :as api]))

(defn- to-array-js [data-list to-json]
  (if (empty? data-list) nil
      (concat "[" (join "," (map (fn [el] (to-json el)) data-list)) "]")))

(defn- task-list
  ([] (to-array-js (t-repo/get-all) task-to-json))
  ([category] (to-array-js (t-repo/get-by-category category) task-to-json)))

(defn- app-json [resp]
  (content-type resp "application/json"))

(defn- logging! [request]
  (println request)
  request)

(defn- remove-task! [request]
  (let [id (-> (body-string request)
               (json/read-str)
               (get "id"))]
    (t-repo/remove! id)
    id))

(defn- store-task! [request]
  (let [new-task (-> (body-string request)
                     (task-from-json))]
    (task-to-json (t-repo/save! new-task))))

(defn handle-mainpage []
  (resource-response "public/index.html"))

(defn handle-store-task! [request]
  (-> request
      (store-task!)
      (response)
      (app-json)))

(defn handle-remove-task! [request]
  (-> request
      (remove-task!)
      (response)))

(defn handle-tasks
  ([] (app-json (response (task-list))))
  ([category] (app-json (response (task-list category)))))

(defn- category-list []
  (to-array-js (c-repo/get-all) category/to-json))

(defn handle-categories []
  (app-json (response (category-list))))
