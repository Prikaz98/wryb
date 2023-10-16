(ns wryb.core
  (:require
   [wryb.domain.taskrepo :as repo]
   [clojure.string :refer [join]]
   [compojure.core :refer [defroutes GET POST]]
   [ring.middleware.resource :refer [wrap-resource]]
   [ring.util.request :refer [body-string]]
   [ring.util.response :refer [content-type resource-response response]]
   [wryb.domain.task :refer [task-from-json task-to-json]]))

(defn store-new-task! [request]
  (let [new-task (-> (body-string request)
                     (task-from-json))]
    (task-to-json (repo/save! new-task))))

(defn return-task-list []
  (let [data-list (repo/get-all)]
    (if (empty? data-list) nil
        (concat "[" (join "," (map (fn [el] (task-to-json el)) data-list)) "]"))))

(defn app-json [resp]
  (content-type resp "application/json"))

(defroutes routes
  (GET "/" [] (resource-response "public/index.html"))
  (GET "/get-tasks" [] (app-json (response (return-task-list))))
  (POST "/new-task" request
    (app-json (response (store-new-task! request)))))

(def app
  (-> routes
      (wrap-resource "public")))