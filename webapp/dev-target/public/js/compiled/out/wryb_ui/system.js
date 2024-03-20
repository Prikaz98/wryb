// Compiled by ClojureScript 1.10.439 {}
goog.provide('wryb_ui.system');
goog.require('cljs.core');
goog.require('com.stuartsierra.component');
goog.require('wryb_ui.components.ui');
wryb_ui.system.new_system = (function wryb_ui$system$new_system(){
return com.stuartsierra.component.system_map.call(null,new cljs.core.Keyword(null,"app-root","app-root",1723856706),wryb_ui.components.ui.new_ui_component.call(null));
});
wryb_ui.system.init = (function wryb_ui$system$init(){
return wryb_ui.system.system = wryb_ui.system.new_system.call(null);
});
wryb_ui.system.start = (function wryb_ui$system$start(){
return wryb_ui.system.system = com.stuartsierra.component.start.call(null,wryb_ui.system.system);
});
wryb_ui.system.stop = (function wryb_ui$system$stop(){
return wryb_ui.system.system = com.stuartsierra.component.stop.call(null,wryb_ui.system.system);
});
wryb_ui.system.go = (function wryb_ui$system$go(){
wryb_ui.system.init.call(null);

return wryb_ui.system.start.call(null);
});
goog.exportSymbol('wryb_ui.system.go', wryb_ui.system.go);
wryb_ui.system.reset = (function wryb_ui$system$reset(){
wryb_ui.system.stop.call(null);

return wryb_ui.system.go.call(null);
});

//# sourceMappingURL=system.js.map?rel=1710957562348
