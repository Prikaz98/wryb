(defproject wryb "0.1.0-SNAPSHOT"
  :plugins [[lein-cljsbuild "1.1.8"]
            [lein-ring "0.8.7"]]
  :cljsbuild {:builds [{; The path to the top-level ClojureScript source directory:
                        :source-paths ["src-cljs"]
                    ; The standard ClojureScript compiler options:
                    ; (See the ClojureScript compiler documentation for details.)
                        :compiler {:output-to "resources/public/js/cljsbuild-main.js"
                                   :optimizations :whitespace
                                   :pretty-print true}}]}
  :description "Write your business"
  ;;:url "http://example.com/FIXME"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url "https://www.eclipse.org/legal/epl-2.0/"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [ring "1.10.0"]
                 [org.clojure/clojurescript "1.11.60"]
                 [compojure "1.1.6"]
                 [org.clojure/data.json "2.4.0"]]
  :repl-options {:init-ns wryb.core}
  :main wryb.main/-main)
