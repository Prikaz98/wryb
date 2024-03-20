// Compiled by ClojureScript 1.10.439 {}
goog.provide('wryb_ui.core');
goog.require('cljs.core');
goog.require('wryb_ui.components.categories_list');
goog.require('wryb_ui.components.task_edit');
goog.require('wryb_ui.components.task_list');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
wryb_ui.core.root = (function wryb_ui$core$root(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wryb_ui.components.categories_list.categories_component], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wryb_ui.components.task_list.tasks_component], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wryb_ui.components.task_edit.edit_task_component], null)], null);
});
wryb_ui.core.render = (function wryb_ui$core$render(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wryb_ui.core.root], null),document.body);
});

//# sourceMappingURL=core.js.map
