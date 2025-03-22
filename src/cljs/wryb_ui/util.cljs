(ns wryb-ui.util)

(defn highlights-row [id default-class-name selected-class-name]
  (doseq [element (.from js/Array (.getElementsByClassName js/document selected-class-name))]
    (.setAttribute element "class" default-class-name))
  (.setAttribute (.getElementById js/document id) "class" selected-class-name))

(defn http-req [url body & method]
  (-> (js/fetch url (clj->js {:method (if method method "POST") :body (.stringify js/JSON (clj->js body))}))
        (.then (fn [resp] (if (.-ok resp)
                           (.json resp)
                           (throw (js/Error. "smt went wrong")))))
        (.then #(js->clj % :keywordize-keys true))))

(defn http-get [url]
  (-> (js/fetch url)
        (.then #(.json %))
        (.then #(js->clj % :keywordize-keys true))))

(defn find-first [pred coll]
  (first (filter pred coll)))

(defn zip-with-index
  "Zip elements to seqence of [[value index]]"
  ([arr] (zip-with-index arr [] 0))
  ([arr start] (zip-with-index arr [] start))
  ([arr acc next-index]
   (if (empty? arr)
     acc
     (recur (rest arr) (conj acc [(first arr) next-index]) (+ next-index 1)))))

(defn put-nth
  "Recreate a COLL where EL in I position."
  [coll i el]
  (concat (take i coll) (list el) (drop (+ 1 i) coll)))
