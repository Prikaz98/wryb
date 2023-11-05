(ns wryb.util.option)

(defn get-or-else [t fallback] (if t t fallback))