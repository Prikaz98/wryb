(ns wryb-ui.routes
  (:require [compojure.core :refer [GET POST DELETE routes]]
            [compojure.route :refer [resources]]
            [wryb.handler :as handler]))

(defn home-routes [endpoint]
  (routes
   (GET "/" [] (handler/handle-mainpage))
   (GET "/tasks" {params :query-params} (handler/handle-tasks (get params "category")))
   (GET "/task" {params :query-params} (handler/handle-get-task (get params "id")))
   (POST "/task" request (handler/handle-store-task! request))
   (DELETE "/task" request (handler/handle-remove-task! request))
   (GET "/categories" [] (handler/handle-get-categories))
   (POST "/category" request (handler/handle-category-save! request))
   (DELETE "/category" request (handler/handle-category-remove! request))
   (resources "/")))
