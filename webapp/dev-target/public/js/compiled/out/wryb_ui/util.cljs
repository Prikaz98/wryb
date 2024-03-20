(ns wryb-ui.util)

(defn highlights-row [id default-class-name selected-class-name]
  (doseq [element (.from js/Array (.getElementsByClassName js/document selected-class-name))]
    (.setAttribute element "class" default-class-name))
  (.setAttribute (.getElementById js/document id) "class" selected-class-name))
