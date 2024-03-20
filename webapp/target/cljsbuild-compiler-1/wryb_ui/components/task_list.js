// Compiled by ClojureScript 1.10.439 {}
goog.provide('wryb_ui.components.task_list');
goog.require('cljs.core');
goog.require('wryb_ui.model');
goog.require('wryb_ui.util');
wryb_ui.components.task_list.select_row = (function wryb_ui$components$task_list$select_row(task){
wryb_ui.util.highlights_row.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(task),"task-row","task-row selected");

return cljs.core.reset_BANG_.call(null,wryb_ui.model.selected_task,task);
});
wryb_ui.components.task_list.task_row_component = (function wryb_ui$components$task_list$task_row_component(task){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.task-row","div.task-row",1207866078),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(task),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return wryb_ui.components.task_list.select_row.call(null,task);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"isdone","isdone",-1585765754).cljs$core$IFn$_invoke$arity$1(task)], null)], null),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(task),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"right"], null)], null),"x"], null)], null);
});
wryb_ui.components.task_list.tasks_component = (function wryb_ui$components$task_list$tasks_component(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content.split.left","div.content.split.left",1808598388),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.title.task-input","input.title.task-input",2034710314),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"+ Add task"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),"Overdue:"], null),cljs.core.map.call(null,wryb_ui.components.task_list.task_row_component,cljs.core.filter.call(null,(function (p1__31572_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"isdone","isdone",-1585765754).cljs$core$IFn$_invoke$arity$1(p1__31572_SHARP_));
}),cljs.core.deref.call(null,wryb_ui.model.todos)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.done","div.done",1370506905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),"Done:"], null),cljs.core.map.call(null,wryb_ui.components.task_list.task_row_component,cljs.core.filter.call(null,(function (p1__31573_SHARP_){
return new cljs.core.Keyword(null,"isdone","isdone",-1585765754).cljs$core$IFn$_invoke$arity$1(p1__31573_SHARP_);
}),cljs.core.deref.call(null,wryb_ui.model.todos)))], null)], null);
});

//# sourceMappingURL=task_list.js.map
