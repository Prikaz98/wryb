(ns wryb-ui.test-runner
  (:require
   [doo.runner :refer-macros [doo-tests]]
   [wryb-ui.core-test]
   [wryb-ui.common-test]))

(enable-console-print!)

(doo-tests 'wryb-ui.core-test
           'wryb-ui.common-test)
