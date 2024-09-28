(ns wryb.handler
  (:require
   [clojure.data.json :as json]
   [clojure.java.io :as io]
   [clojure.tools.logging :as log]
   [ring.util.request :refer [body-string]]
   [ring.util.response :refer [content-type response]]
   [wryb.domain.category :as category]
   [wryb.domain.sqlite.category-repo :as c-repo]
   [wryb.domain.sqlite.task-repo :as t-repo]
   [wryb.domain.task :refer [task-from-json]]))

(defn- transform-with-logging [request]
  (let [internal-request {:request-method (:request-method request)
                          :uri            (:uri request)
                          :remote-addr    (:remote-addr request)
                          :body           (body-string request)}]
    internal-request))

(defn- build-logging-msg [until from response-string]
  (let [count-str (count response-string)]
    (if (< (+ until from) count-str)
      (str (apply str (take until response-string))
           "..."
           (apply str (take-last from response-string))
           "[size " count-str "]")
      response-string)))

(defn- logging-response [response]
  (let [response-string (str response)
        [begin-chars end-chars] '(100 20)
        logging-msg     (build-logging-msg begin-chars end-chars response-string)]
    (when logging-msg (log/info (str "RESP:" logging-msg)))
    response))

(defn- app-json [resp]
  (content-type resp "application/json"))

(defn default-handle
  ([process]
   (-> (process)
       (json/write-str)
       (logging-response)
       (response)
       (app-json)))
  ([request process]
   (-> request
       (transform-with-logging)
       (:body)
       ((fn [body] (if (nil? body) "" (json/read-str body))))
       (process)
       ((fn [result] (if (nil? result) "" result)))
       (json/write-str)
       (logging-response)
       (response)
       (app-json))))

(defn handle-mainpage []
  (-> "public/index.html"
      io/resource
      io/input-stream
      response
      (assoc :headers {"Content-Type" "text/html; charset=utf-8"})))
  ;;(resource-response "public/index.html"))

(defn- load-tasks
  ([] (t-repo/get-all #{:createtime}))
  ([category] (t-repo/get-by-category category #{:createtime})))

(defn- remove-task! [task-id]
  (let [id (get task-id "id")]
    (t-repo/remove! id)
    id))

(defn- store-task! [new-task]
  (t-repo/save! new-task))

(defn handle-remove-task! [request]
  (default-handle request (fn [json-body] (remove-task! json-body))))

(defn handle-store-task! [request]
  (default-handle request (fn [json-body] (store-task! (task-from-json json-body)))))

(defn handle-tasks
  ([] (default-handle load-tasks))
  ([category] (default-handle #(load-tasks category))))

(defn handle-get-task [id]
  (default-handle #(t-repo/get-by-id id)))

(defn handle-get-categories []
  (default-handle (fn [] (c-repo/get-all #{:createtime}))))

(defn handle-category-save! [request]
  (default-handle request (fn [json-body] (c-repo/save! (category/from-json json-body)))))

(defn- remove-category
  "if category doesn't have task remove else ignore"
  [id] (let [category (c-repo/get-by-id id)
             tasks    (t-repo/get-by-category id)]
         (if (= 0 (count tasks)) (do (c-repo/remove! id) {:id id})
             {:error (str "Couldn't remove category with " (:name category) ". Cause there're " (count tasks) " tasks")})))

(defn handle-category-remove! [request]
  (default-handle request (fn [json-body] (remove-category (get json-body "id")))))
