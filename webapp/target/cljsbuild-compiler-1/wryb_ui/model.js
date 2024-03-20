// Compiled by ClojureScript 1.10.439 {}
goog.provide('wryb_ui.model');
goog.require('cljs.core');
goog.require('reagent.core');
if((typeof wryb_ui !== 'undefined') && (typeof wryb_ui.model !== 'undefined') && (typeof wryb_ui.model.categories !== 'undefined')){
} else {
wryb_ui.model.categories = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
fetch("http://localhost:3000/categories").then((function (p1__30734_SHARP_){
return p1__30734_SHARP_.json();
})).then((function (p1__30735_SHARP_){
return cljs.core.js__GT_clj.call(null,p1__30735_SHARP_,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
})).then((function (p1__30736_SHARP_){
return cljs.core.reset_BANG_.call(null,wryb_ui.model.categories,p1__30736_SHARP_);
}));
wryb_ui.model.tasks = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"category","category",-593092832),"uuid-other",new cljs.core.Keyword(null,"title","title",636505583),"task1",new cljs.core.Keyword(null,"desc","desc",2093485764),"task1 desc",new cljs.core.Keyword(null,"isdone","isdone",-1585765754),false,new cljs.core.Keyword(null,"createtime","createtime",-204909253),"2024-03-19T19:26:28.807Z"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"category","category",-593092832),"uuid-inbox",new cljs.core.Keyword(null,"title","title",636505583),"task2",new cljs.core.Keyword(null,"desc","desc",2093485764),"task2 desc",new cljs.core.Keyword(null,"isdone","isdone",-1585765754),true,new cljs.core.Keyword(null,"createtime","createtime",-204909253),"2024-03-19T19:26:28.807Z"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),(3),new cljs.core.Keyword(null,"category","category",-593092832),"uuid-wryb",new cljs.core.Keyword(null,"title","title",636505583),"task3",new cljs.core.Keyword(null,"desc","desc",2093485764),"task3 desc",new cljs.core.Keyword(null,"isdone","isdone",-1585765754),false,new cljs.core.Keyword(null,"createtime","createtime",-204909253),"2024-03-19T19:26:28.807Z"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),(4),new cljs.core.Keyword(null,"category","category",-593092832),"uuid-wryb",new cljs.core.Keyword(null,"title","title",636505583),"task4",new cljs.core.Keyword(null,"desc","desc",2093485764),"task4 desc",new cljs.core.Keyword(null,"isdone","isdone",-1585765754),true,new cljs.core.Keyword(null,"createtime","createtime",-204909253),"2024-03-19T19:26:28.807Z"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),(5),new cljs.core.Keyword(null,"category","category",-593092832),"uuid-wryb",new cljs.core.Keyword(null,"title","title",636505583),"task5",new cljs.core.Keyword(null,"desc","desc",2093485764),"task5 desc",new cljs.core.Keyword(null,"isdone","isdone",-1585765754),false,new cljs.core.Keyword(null,"createtime","createtime",-204909253),"2024-03-19T19:26:28.807Z"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),(6),new cljs.core.Keyword(null,"category","category",-593092832),"uuid-wryb",new cljs.core.Keyword(null,"title","title",636505583),"task6",new cljs.core.Keyword(null,"isdone","isdone",-1585765754),false,new cljs.core.Keyword(null,"createtime","createtime",-204909253),"2024-03-19T19:26:28.807Z"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),(7),new cljs.core.Keyword(null,"category","category",-593092832),"uuid-other",new cljs.core.Keyword(null,"title","title",636505583),"task7",new cljs.core.Keyword(null,"isdone","isdone",-1585765754),true,new cljs.core.Keyword(null,"createtime","createtime",-204909253),"2024-03-19T19:26:28.807Z"], null)], null);
if((typeof wryb_ui !== 'undefined') && (typeof wryb_ui.model !== 'undefined') && (typeof wryb_ui.model.todos !== 'undefined')){
} else {
wryb_ui.model.todos = reagent.core.atom.call(null,wryb_ui.model.tasks);
}
if((typeof wryb_ui !== 'undefined') && (typeof wryb_ui.model !== 'undefined') && (typeof wryb_ui.model.selected_category !== 'undefined')){
} else {
wryb_ui.model.selected_category = reagent.core.atom.call(null,null);
}
wryb_ui.model.load_tasks = (function wryb_ui$model$load_tasks(category){
return fetch(["http://localhost:3000/tasks?category=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(category))].join('')).then((function (p1__30737_SHARP_){
return p1__30737_SHARP_.json();
})).then((function (p1__30738_SHARP_){
return cljs.core.js__GT_clj.call(null,p1__30738_SHARP_,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
})).then((function (p1__30739_SHARP_){
return cljs.core.reset_BANG_.call(null,wryb_ui.model.todos,p1__30739_SHARP_);
}));
});
cljs.core.add_watch.call(null,wryb_ui.model.selected_category,new cljs.core.Keyword(null,"watcher","watcher",2145165251),(function (_,___$1,___$2,new_state){
return wryb_ui.model.load_tasks.call(null,new_state);
}));
if((typeof wryb_ui !== 'undefined') && (typeof wryb_ui.model !== 'undefined') && (typeof wryb_ui.model.selected_task !== 'undefined')){
} else {
wryb_ui.model.selected_task = reagent.core.atom.call(null,null);
}

//# sourceMappingURL=model.js.map
