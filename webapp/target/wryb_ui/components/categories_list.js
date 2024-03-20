// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('wryb_ui.components.categories_list');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('wryb_ui.model');
goog.require('wryb_ui.util');
wryb_ui.components.categories_list.switch_category = (function wryb_ui$components$categories_list$switch_category(category){
wryb_ui.util.highlights_row(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(category),"element","element selected");

cljs.core.reset_BANG_(wryb_ui.model.selected_task,null);

return cljs.core.reset_BANG_(wryb_ui.model.selected_category,category);
});
wryb_ui.components.categories_list.category_row = (function wryb_ui$components$categories_list$category_row(c){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$element,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(c),cljs.core.cst$kw$on_DASH_click,(function (){
return wryb_ui.components.categories_list.switch_category(c);
})], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(c)], null);
});
wryb_ui.components.categories_list.categories_component = (function wryb_ui$components$categories_list$categories_component(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$categories,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30435_SHARP_){
return wryb_ui.components.categories_list.category_row(p1__30435_SHARP_);
}),cljs.core.deref(wryb_ui.model.categories)))], null);
});
