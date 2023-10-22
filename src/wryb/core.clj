(ns wryb.core
  (:require
;;   [wryb.domain.taskrepo :as repo]
   [wryb.router :as router]
   [compojure.core :refer [defroutes GET POST DELETE]]
   [ring.middleware.resource :refer [wrap-resource]]))

(defroutes routes
  (GET "/" [] (router/handle-mainpage))
  (GET "/tasks" [] (router/handle-tasks))
  (POST "/task" request (router/handle-store-task! request))
  (DELETE "/task" request (router/handle-remove-task! request)))

(def app
  (-> routes
      (wrap-resource "public")))