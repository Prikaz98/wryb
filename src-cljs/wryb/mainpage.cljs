(ns wryb.mainpage)

(println "clojre script is working")

(defn clear-element [id]
  (println "clear element")
  (-> js/document
      (.getElementById id)
      (.-value)
      (set! nil)))

(defn add-handler [id type fun]
  (-> js/document
      (.getElementById id)
      (.addEventListener type fun)))

(defn make-new-task [task uuid]
  (str "<div><input id=\"" uuid "\" type=\"checkbox\"/><lable>" task "</label></div>"))

(defn submit-task []
  (let [task-field-id "task-in"
        new-task (.-value (.getElementById js/document task-field-id))
        before-list (.-innerHTML (.getElementById js/document "new-tasks"))
        uuid (random-uuid)]
    (when (not-empty new-task)
      (-> js/document
          (.getElementById "new-tasks")
          (.-innerHTML)
          (set! (str before-list (make-new-task new-task uuid))))
      (add-handler uuid "change" (fn [event] (println uuid "changed" event)))
      (clear-element task-field-id))))

(add-handler "task-in" "keypress" (fn [event] (if (= (.-keyCode event) 13) (submit-task))))