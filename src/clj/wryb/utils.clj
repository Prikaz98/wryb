(ns wryb.utils)

(defn zip-with-index
  "Zip elements to seqence of [[value index]]"
  ([arr] (zip-with-index arr [] 0))
  ([arr start] (zip-with-index arr [] start))
  ([arr acc next-index]
   (if (empty? arr)
     acc
     (recur (rest arr) (conj acc [(first arr) next-index]) (+ next-index 1)))))
