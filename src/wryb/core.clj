(ns wryb.core
  (:require [ring.middleware.resource :refer [wrap-resource]]
              [ring.util.response :refer [resource-response]]
              [compojure.core :refer [defroutes GET]]))

(defroutes routes
  (GET "/" []
       (resource-response "public/index.html")))

(def app
  (-> routes
      (wrap-resource "public")))