(ns wryb.mainpage)

(println "clojre script is working")

(defn submit-task []
  (let [new-task (.-value (.getElementById js/document "task-in"))
        before-list (.-innerHTML (.getElementById js/document "task-list"))]
    (-> js/document
          (.getElementById "task-list")
          (.-innerHTML)
          (set! (str before-list "<li>" new-task "</li>")))))