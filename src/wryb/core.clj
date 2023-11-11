(ns wryb.core
  (:require [wryb.router :as router]
            [compojure.core :refer [defroutes GET POST DELETE]]
            [ring.middleware.resource :refer [wrap-resource]]))

(defroutes routes
  (GET "/" [] (router/handle-mainpage))
  (GET "/tasks" [] (router/handle-tasks))
  (GET "/tasks" {category :category} (router/handle-tasks (pr-str category)))
  (POST "/task" request (router/handle-store-task! request))
  (DELETE "/task" request (router/handle-remove-task! request))
  (GET "/categories" [] (router/handle-categories)))

(def app
  (-> routes
      (wrap-resource "public")))