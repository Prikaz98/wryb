(defproject wryb "0.1.0-SNAPSHOT"
  :plugins [[lein-cljsbuild "1.1.8"]
            [lein-ring "0.12.6"]]
  :description "Write your business"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url "https://www.eclipse.org/legal/epl-2.0/"}
  :dependencies [[org.clojure/clojure "1.11.1"]
                 [ring "1.10.0"]
                 [compojure "1.1.6"]
                 [org.clojure/data.json "2.4.0"]
                 [org.xerial/sqlite-jdbc "3.42.0.0"]
                 [io.github.tonsky/toml-clj "0.1.0"]
                 [org.apache.logging.log4j/log4j-core "2.23.1"]
                 [org.clojure/tools.logging "1.3.0"]]
  :repl-options {:init-ns wryb.core}
  :main wryb.main/-main)

;;use jdk 11 version
