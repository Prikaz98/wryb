(ns wryb.core
  (:require [wryb.router :as router]
            [compojure.core :refer [defroutes GET POST DELETE]]
            [compojure.handler :refer [api]]
            [ring.middleware.resource :refer [wrap-resource]]))

(defroutes routes
  (GET "/" [] (router/handle-mainpage))
  (GET "/tasks" {params :query-params} (router/handle-tasks (get params "category")))
  (POST "/task" request (router/handle-store-task! request))
  (DELETE "/task" request (router/handle-remove-task! request))
  (GET "/categories" [] (router/handle-categories)))

(def app
  (wrap-resource (api routes) "public"))
