// Compiled by ClojureScript 1.10.439 {}
goog.provide('wryb_ui.components.categories_list');
goog.require('cljs.core');
goog.require('wryb_ui.model');
goog.require('wryb_ui.util');
wryb_ui.components.categories_list.switch_category = (function wryb_ui$components$categories_list$switch_category(category){
wryb_ui.util.highlights_row.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(category),"element","element selected");

cljs.core.reset_BANG_.call(null,wryb_ui.model.selected_task,null);

return cljs.core.reset_BANG_.call(null,wryb_ui.model.selected_category,category);
});
wryb_ui.components.categories_list.category_row = (function wryb_ui$components$categories_list$category_row(c){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.element","div.element",-250677621),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return wryb_ui.components.categories_list.switch_category.call(null,c);
})], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(c)], null);
});
wryb_ui.components.categories_list.categories_component = (function wryb_ui$components$categories_list$categories_component(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.categories","div.categories",358341752),cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__31576_SHARP_){
return wryb_ui.components.categories_list.category_row.call(null,p1__31576_SHARP_);
}),cljs.core.deref.call(null,wryb_ui.model.categories)))], null);
});

//# sourceMappingURL=categories_list.js.map
