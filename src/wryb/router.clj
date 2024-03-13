(ns wryb.router
  (:require
   [clojure.data.json :as json]
   [clojure.tools.logging :refer [info]]
   [ring.util.request :refer [body-string]]
   [ring.util.response :refer [content-type resource-response response]]
   [wryb.domain.category :as category]
   [wryb.domain.sqlite.category-repo :as c-repo]
   [wryb.domain.sqlite.task-repo :as t-repo]
   [wryb.domain.task :refer [task-from-json]]))


(defn- transform-with-logging [request]
  (let [internal-request {:request-method (:request-method request)
                          :uri            (:uri request)
                          :remote-addr    (:remote-addr request)
                          :body           (body-string request)}]
    (info internal-request)
    internal-request))

(defn- logging-response [response]
  (let [response-string (str response)
        logging-msg     (if (< 200 (count response-string)) (str (apply str (take 150 response-string)) "..." (apply str (take-last 20 response-string)))
                            response-string)]
    (info (str "RESP:" logging-msg))
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
       ((fn [body](if (nil? body) "" (json/read-str body))))
       (process)
       ((fn [result](if (nil? result) "" result)))
       (json/write-str)
       (logging-response)
       (response)
       (app-json))))

(defn handle-mainpage []
  (resource-response "public/index.html"))

(defn- task-list
  ([] (t-repo/get-all))
  ([category] (t-repo/get-by-category category)))

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
  ([] (default-handle task-list))
  ([category] (default-handle #(task-list category))))

(defn handle-get-categories []
  (default-handle #(sort-by :createtime (c-repo/get-all))))

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
