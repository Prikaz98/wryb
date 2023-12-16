(ns wryb.core
  (:require
   [compojure.core :refer [defroutes DELETE GET POST]]
   [compojure.handler :refer [api]]
   [ring.middleware.resource :refer [wrap-resource]]
   [wryb.router :as router]
   [ring.util.request :as request]))

(defroutes routes
  (GET "/" [] (router/handle-mainpage))
  (GET "/tasks" {params :query-params} (router/handle-tasks params (get params "category")))
  (POST "/task" request (router/handle-store-task! request))
  (DELETE "/task" request (router/handle-remove-task! request))
  (GET "/categories" [] (router/handle-get-categories))
  (POST "/category" request (router/handle-category-save! request))
  (DELETE "/category" request (router/handle-category-remove! request)))

(def app
  (wrap-resource (api routes) "public"))
