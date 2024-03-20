// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('wryb_ui.system');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('com.stuartsierra.component');
goog.require('wryb_ui.components.ui');
wryb_ui.system.new_system = (function wryb_ui$system$new_system(){
return com.stuartsierra.component.system_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$app_DASH_root,wryb_ui.components.ui.new_ui_component()], 0));
});
wryb_ui.system.init = (function wryb_ui$system$init(){
return wryb_ui.system.system = wryb_ui.system.new_system();
});
wryb_ui.system.start = (function wryb_ui$system$start(){
return wryb_ui.system.system = com.stuartsierra.component.start(wryb_ui.system.system);
});
wryb_ui.system.stop = (function wryb_ui$system$stop(){
return wryb_ui.system.system = com.stuartsierra.component.stop(wryb_ui.system.system);
});
wryb_ui.system.go = (function wryb_ui$system$go(){
wryb_ui.system.init();

return wryb_ui.system.start();
});
goog.exportSymbol('wryb_ui.system.go', wryb_ui.system.go);
wryb_ui.system.reset = (function wryb_ui$system$reset(){
wryb_ui.system.stop();

return wryb_ui.system.go();
});
