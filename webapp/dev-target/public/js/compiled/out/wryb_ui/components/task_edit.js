// Compiled by ClojureScript 1.10.439 {}
goog.provide('wryb_ui.components.task_edit');
goog.require('cljs.core');
goog.require('wryb_ui.model');
wryb_ui.components.task_edit.format_time = (function wryb_ui$components$task_edit$format_time(time){
if(cljs.core.truth_(time)){
return (new Date(time)).toLocaleString("en-GB",(function (){var obj37987 = {"timeZone":"UTC"};
return obj37987;
})());
} else {
return null;
}
});
wryb_ui.components.task_edit.category_selector = (function wryb_ui$components$task_edit$category_selector(category_id,categories){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"right"], null)], null),(function (){var current_category = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__37988_SHARP_){
return cljs.core._EQ_.call(null,category_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__37988_SHARP_));
}),categories));
if(cljs.core.truth_(current_category)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(current_category)], null);
} else {
return null;
}
})(),cljs.core.map.call(null,(function (c){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c)], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(c)], null);
}),cljs.core.filter.call(null,(function (p1__37989_SHARP_){
return (!(cljs.core._EQ_.call(null,category_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__37989_SHARP_))));
}),categories))], null);
});
wryb_ui.components.task_edit.update_state = (function wryb_ui$components$task_edit$update_state(task,key,value){
console.log(cljs.core.assoc.call(null,task,key,value));

return cljs.core.reset_BANG_.call(null,wryb_ui.model.selected_task,cljs.core.assoc.call(null,task,key,value));
});
wryb_ui.components.task_edit.edit_task_component = (function wryb_ui$components$task_edit$edit_task_component(){
var task = cljs.core.deref.call(null,wryb_ui.model.selected_task);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.split.right","div.split.right",2007932820),(cljs.core.truth_(task)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.title.task-input","input.title.task-input",2034710314),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"title description",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (task){
return (function (p1__37990_SHARP_){
return wryb_ui.components.task_edit.update_state.call(null,task,new cljs.core.Keyword(null,"title","title",636505583),p1__37990_SHARP_.target.value);
});})(task))
,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(task)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.desc.task-input","textarea.desc.task-input",-787336920),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"description",new cljs.core.Keyword(null,"rows","rows",850049680),"10",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (task){
return (function (p1__37991_SHARP_){
return wryb_ui.components.task_edit.update_state.call(null,task,new cljs.core.Keyword(null,"desc","desc",2093485764),p1__37991_SHARP_.target.value);
});})(task))
,new cljs.core.Keyword(null,"value","value",305978217),(cljs.core.truth_(new cljs.core.Keyword(null,"desc","desc",2093485764).cljs$core$IFn$_invoke$arity$1(task))?new cljs.core.Keyword(null,"desc","desc",2093485764).cljs$core$IFn$_invoke$arity$1(task):"")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Create time:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),wryb_ui.components.task_edit.format_time.call(null,new cljs.core.Keyword(null,"createtime","createtime",-204909253).cljs$core$IFn$_invoke$arity$1(task))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Current category:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),wryb_ui.components.task_edit.category_selector.call(null,new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(task),cljs.core.deref.call(null,wryb_ui.model.categories))], null)], null)], null)], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"100px 0px 0px 100px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"src","src",-1651076051),"images/select_task.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"select task",new cljs.core.Keyword(null,"width","width",-384071477),"200",new cljs.core.Keyword(null,"height","height",1025178622),"200"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),"Click task title to view the derail"], null)], null))], null);
});

//# sourceMappingURL=task_edit.js.map?rel=1710956921682
