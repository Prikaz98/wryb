// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('wryb_ui.components.task_list');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('wryb_ui.model');
goog.require('wryb_ui.util');
wryb_ui.components.task_list.select_row = (function wryb_ui$components$task_list$select_row(task){
wryb_ui.util.highlights_row(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(task),"task-row","task-row selected");

return cljs.core.reset_BANG_(wryb_ui.model.selected_task,task);
});
wryb_ui.components.task_list.task_row_component = (function wryb_ui$components$task_list$task_row_component(task){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$task_DASH_row,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(task),cljs.core.cst$kw$on_DASH_click,(function (){
return wryb_ui.components.task_list.select_row(task);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$checked,cljs.core.cst$kw$isdone.cljs$core$IFn$_invoke$arity$1(task)], null)], null),cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(task),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$float,"right"], null)], null),"x"], null)], null);
});
wryb_ui.components.task_list.tasks_component = (function wryb_ui$components$task_list$tasks_component(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$content$split$left,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$title$task_DASH_input,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$placeholder,"+ Add task"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$text,"Overdue:"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(wryb_ui.components.task_list.task_row_component,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__30431_SHARP_){
return cljs.core.not(cljs.core.cst$kw$isdone.cljs$core$IFn$_invoke$arity$1(p1__30431_SHARP_));
}),cljs.core.deref(wryb_ui.model.todos)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$done,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$text,"Done:"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(wryb_ui.components.task_list.task_row_component,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__30432_SHARP_){
return cljs.core.cst$kw$isdone.cljs$core$IFn$_invoke$arity$1(p1__30432_SHARP_);
}),cljs.core.deref(wryb_ui.model.todos)))], null)], null);
});
