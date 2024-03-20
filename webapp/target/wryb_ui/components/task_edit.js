// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('wryb_ui.components.task_edit');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('wryb_ui.model');
wryb_ui.components.task_edit.format_time = (function wryb_ui$components$task_edit$format_time(time){
if(cljs.core.truth_(time)){
return (new Date(time)).toLocaleString("en-GB",(function (){var obj30319 = {"timeZone":"UTC"};
return obj30319;
})());
} else {
return null;
}
});
wryb_ui.components.task_edit.category_selector = (function wryb_ui$components$task_edit$category_selector(category_id,categories){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$float,"right"], null)], null),(function (){var current_category = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__30320_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(category_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__30320_SHARP_));
}),categories));
if(cljs.core.truth_(current_category)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(current_category)], null);
} else {
return null;
}
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(c)], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(c)], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__30321_SHARP_){
return (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(category_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__30321_SHARP_))));
}),categories))], null);
});
wryb_ui.components.task_edit.update_state = (function wryb_ui$components$task_edit$update_state(task,key,value){
console.log(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(task,key,value));

return cljs.core.reset_BANG_(wryb_ui.model.selected_task,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(task,key,value));
});
wryb_ui.components.task_edit.edit_task_component = (function wryb_ui$components$task_edit$edit_task_component(){
var task = cljs.core.deref(wryb_ui.model.selected_task);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$split$right,(cljs.core.truth_(task)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$title$task_DASH_input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$placeholder,"title description",cljs.core.cst$kw$on_DASH_change,((function (task){
return (function (p1__30322_SHARP_){
return wryb_ui.components.task_edit.update_state(task,cljs.core.cst$kw$title,p1__30322_SHARP_.target.value);
});})(task))
,cljs.core.cst$kw$value,cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(task)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea$desc$task_DASH_input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$placeholder,"description",cljs.core.cst$kw$rows,"10",cljs.core.cst$kw$on_DASH_change,((function (task){
return (function (p1__30323_SHARP_){
return wryb_ui.components.task_edit.update_state(task,cljs.core.cst$kw$desc,p1__30323_SHARP_.target.value);
});})(task))
,cljs.core.cst$kw$value,(cljs.core.truth_(cljs.core.cst$kw$desc.cljs$core$IFn$_invoke$arity$1(task))?cljs.core.cst$kw$desc.cljs$core$IFn$_invoke$arity$1(task):"")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,"Create time:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,wryb_ui.components.task_edit.format_time(cljs.core.cst$kw$createtime.cljs$core$IFn$_invoke$arity$1(task))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,"Current category:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,wryb_ui.components.task_edit.category_selector(cljs.core.cst$kw$category.cljs$core$IFn$_invoke$arity$1(task),cljs.core.deref(wryb_ui.model.categories))], null)], null)], null)], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin,"100px 0px 0px 100px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$src,"images/select_task.png",cljs.core.cst$kw$alt,"select task",cljs.core.cst$kw$width,"200",cljs.core.cst$kw$height,"200"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$text,"Click task title to view the derail"], null)], null))], null);
});
