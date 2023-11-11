(ns wryb.router
  (:require
   [clojure.string :refer [join]]
   [wryb.domain.sqlite.task-repo :as repo]
   [ring.util.request :refer [body-string]]
   [wryb.domain.task :refer [task-from-json task-to-json]]
   [ring.util.response :refer [content-type resource-response response]]
   [clojure.data.json :as json]))

(defn- return-task-list []
  (let [data-list (repo/get-all)]
    (if (empty? data-list) nil
        (concat "[" (join "," (map (fn [el] (task-to-json el)) data-list)) "]"))))

(defn- app-json [resp]
  (content-type resp "application/json"))

(defn- logging! [request]
  (println request)
  request)

(defn- remove-task! [request]
  (let [id (-> (body-string request)
               (json/read-str)
               (get "id"))]
    (repo/remove! id)
    id))

(defn- store-task! [request]
  (let [new-task (-> (body-string request)
                     (task-from-json))]
    (task-to-json (repo/save! new-task))))

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

(defn handle-tasks []
  (app-json (response (return-task-list))))
