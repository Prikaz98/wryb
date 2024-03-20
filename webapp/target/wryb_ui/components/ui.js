// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('wryb_ui.components.ui');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('com.stuartsierra.component');
goog.require('wryb_ui.core');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {com.stuartsierra.component.Lifecycle}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
wryb_ui.components.ui.UIComponent = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
wryb_ui.components.ui.UIComponent.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

wryb_ui.components.ui.UIComponent.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k30441,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__30445 = k30441;
switch (G__30445) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k30441,else__4304__auto__);

}
});

wryb_ui.components.ui.UIComponent.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__30446){
var vec__30447 = p__30446;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30447,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30447,(1),null);
return (f__4321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4321__auto__.cljs$core$IFn$_invoke$arity$3(ret__4323__auto__,k__4324__auto__,v__4325__auto__) : f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__));
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

wryb_ui.components.ui.UIComponent.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer(writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4316__auto__,pr_pair__4318__auto__,"#wryb-ui.components.ui.UIComponent{",", ","}",opts__4317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

wryb_ui.components.ui.UIComponent.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30440){
var self__ = this;
var G__30440__$1 = this;
return (new cljs.core.RecordIter((0),G__30440__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

wryb_ui.components.ui.UIComponent.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

wryb_ui.components.ui.UIComponent.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new wryb_ui.components.ui.UIComponent(self__.__meta,self__.__extmap,self__.__hash));
});

wryb_ui.components.ui.UIComponent.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
});

wryb_ui.components.ui.UIComponent.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = (function (){var fexpr__30450 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (-530825023 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__30450(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

wryb_ui.components.ui.UIComponent.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this30442,other30443){
var self__ = this;
var this30442__$1 = this;
return (((!((other30443 == null)))) && ((this30442__$1.constructor === other30443.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30442__$1.__extmap,other30443.__extmap)));
});

wryb_ui.components.ui.UIComponent.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__4311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new wryb_ui.components.ui.UIComponent(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4311__auto__)),null));
}
});

wryb_ui.components.ui.UIComponent.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__30440){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__30451 = cljs.core.keyword_identical_QMARK_;
var expr__30452 = k__4309__auto__;
return (new wryb_ui.components.ui.UIComponent(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__30440),null));
});

wryb_ui.components.ui.UIComponent.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

wryb_ui.components.ui.UIComponent.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__30440){
var self__ = this;
var this__4300__auto____$1 = this;
return (new wryb_ui.components.ui.UIComponent(G__30440,self__.__extmap,self__.__hash));
});

wryb_ui.components.ui.UIComponent.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

wryb_ui.components.ui.UIComponent.prototype.com$stuartsierra$component$Lifecycle$ = cljs.core.PROTOCOL_SENTINEL;

wryb_ui.components.ui.UIComponent.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (component){
var self__ = this;
var component__$1 = this;
wryb_ui.core.render();

return component__$1;
});

wryb_ui.components.ui.UIComponent.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (component){
var self__ = this;
var component__$1 = this;
return component__$1;
});

wryb_ui.components.ui.UIComponent.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

wryb_ui.components.ui.UIComponent.cljs$lang$type = true;

wryb_ui.components.ui.UIComponent.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"wryb-ui.components.ui/UIComponent",null,(1),null));
});

wryb_ui.components.ui.UIComponent.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write(writer__4345__auto__,"wryb-ui.components.ui/UIComponent");
});

/**
 * Positional factory function for wryb-ui.components.ui/UIComponent.
 */
wryb_ui.components.ui.__GT_UIComponent = (function wryb_ui$components$ui$__GT_UIComponent(){
return (new wryb_ui.components.ui.UIComponent(null,null,null));
});

/**
 * Factory function for wryb-ui.components.ui/UIComponent, taking a map of keywords to field values.
 */
wryb_ui.components.ui.map__GT_UIComponent = (function wryb_ui$components$ui$map__GT_UIComponent(G__30444){
var extmap__4340__auto__ = (function (){var G__30454 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__30444);
if(cljs.core.record_QMARK_(G__30444)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__30454);
} else {
return G__30454;
}
})();
return (new wryb_ui.components.ui.UIComponent(null,cljs.core.not_empty(extmap__4340__auto__),null));
});

wryb_ui.components.ui.new_ui_component = (function wryb_ui$components$ui$new_ui_component(){
return wryb_ui.components.ui.map__GT_UIComponent(cljs.core.PersistentArrayMap.EMPTY);
});
