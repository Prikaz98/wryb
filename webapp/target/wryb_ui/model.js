// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('wryb_ui.model');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
if((typeof wryb_ui !== 'undefined') && (typeof wryb_ui.model !== 'undefined') && (typeof wryb_ui.model.categories !== 'undefined')){
} else {
wryb_ui.model.categories = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
fetch("http://localhost:3000/categories").then((function (p1__30310_SHARP_){
return p1__30310_SHARP_.json();
})).then((function (p1__30311_SHARP_){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(p1__30311_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,true], 0));
})).then((function (p1__30312_SHARP_){
return cljs.core.reset_BANG_(wryb_ui.model.categories,p1__30312_SHARP_);
}));
wryb_ui.model.tasks = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,(1),cljs.core.cst$kw$category,"uuid-other",cljs.core.cst$kw$title,"task1",cljs.core.cst$kw$desc,"task1 desc",cljs.core.cst$kw$isdone,false,cljs.core.cst$kw$createtime,"2024-03-19T19:26:28.807Z"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,(2),cljs.core.cst$kw$category,"uuid-inbox",cljs.core.cst$kw$title,"task2",cljs.core.cst$kw$desc,"task2 desc",cljs.core.cst$kw$isdone,true,cljs.core.cst$kw$createtime,"2024-03-19T19:26:28.807Z"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,(3),cljs.core.cst$kw$category,"uuid-wryb",cljs.core.cst$kw$title,"task3",cljs.core.cst$kw$desc,"task3 desc",cljs.core.cst$kw$isdone,false,cljs.core.cst$kw$createtime,"2024-03-19T19:26:28.807Z"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,(4),cljs.core.cst$kw$category,"uuid-wryb",cljs.core.cst$kw$title,"task4",cljs.core.cst$kw$desc,"task4 desc",cljs.core.cst$kw$isdone,true,cljs.core.cst$kw$createtime,"2024-03-19T19:26:28.807Z"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,(5),cljs.core.cst$kw$category,"uuid-wryb",cljs.core.cst$kw$title,"task5",cljs.core.cst$kw$desc,"task5 desc",cljs.core.cst$kw$isdone,false,cljs.core.cst$kw$createtime,"2024-03-19T19:26:28.807Z"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$id,(6),cljs.core.cst$kw$category,"uuid-wryb",cljs.core.cst$kw$title,"task6",cljs.core.cst$kw$isdone,false,cljs.core.cst$kw$createtime,"2024-03-19T19:26:28.807Z"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$id,(7),cljs.core.cst$kw$category,"uuid-other",cljs.core.cst$kw$title,"task7",cljs.core.cst$kw$isdone,true,cljs.core.cst$kw$createtime,"2024-03-19T19:26:28.807Z"], null)], null);
if((typeof wryb_ui !== 'undefined') && (typeof wryb_ui.model !== 'undefined') && (typeof wryb_ui.model.todos !== 'undefined')){
} else {
wryb_ui.model.todos = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(wryb_ui.model.tasks);
}
if((typeof wryb_ui !== 'undefined') && (typeof wryb_ui.model !== 'undefined') && (typeof wryb_ui.model.selected_category !== 'undefined')){
} else {
wryb_ui.model.selected_category = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
wryb_ui.model.load_tasks = (function wryb_ui$model$load_tasks(category){
return fetch(["http://localhost:3000/tasks?category=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(category))].join('')).then((function (p1__30313_SHARP_){
return p1__30313_SHARP_.json();
})).then((function (p1__30314_SHARP_){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(p1__30314_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,true], 0));
})).then((function (p1__30315_SHARP_){
return cljs.core.reset_BANG_(wryb_ui.model.todos,p1__30315_SHARP_);
}));
});
cljs.core.add_watch(wryb_ui.model.selected_category,cljs.core.cst$kw$watcher,(function (_,___$1,___$2,new_state){
return wryb_ui.model.load_tasks(new_state);
}));
if((typeof wryb_ui !== 'undefined') && (typeof wryb_ui.model !== 'undefined') && (typeof wryb_ui.model.selected_task !== 'undefined')){
} else {
wryb_ui.model.selected_task = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
