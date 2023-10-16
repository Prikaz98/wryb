(ns wryb.core
  (:require
   [clojure.string :refer [join]]
   [compojure.core :refer [defroutes GET POST]]
   [ring.middleware.resource :refer [wrap-resource]]
   [ring.util.request :refer [body-string]]
   [ring.util.response :refer [content-type resource-response response]]
   [wryb.domain.task :refer [task-from-json task-to-json]]))

(def ntasks (atom '()))

(defn store-new-task! [request]
  (let [nw (-> (body-string request)
               (task-from-json))]
    (swap! ntasks conj nw)))

(defn return-task-list []
  (if (empty? @ntasks) nil
      (concat "[" (join "," (map (fn [el] (task-to-json el)) @ntasks)) "]")))

(defroutes routes
  (GET "/" [] (resource-response "public/index.html"))
  (GET "/get-tasks" [] (content-type (response (return-task-list)) "application/json"))
  (POST "/new-task" request
    (store-new-task! request)
    (response "ok")))

(def app
  (-> routes
      (wrap-resource "public")))