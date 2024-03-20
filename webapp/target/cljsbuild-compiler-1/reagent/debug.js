// Compiled by ClojureScript 1.10.439 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__30262__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__30262 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30263__i = 0, G__30263__a = new Array(arguments.length -  0);
while (G__30263__i < G__30263__a.length) {G__30263__a[G__30263__i] = arguments[G__30263__i + 0]; ++G__30263__i;}
  args = new cljs.core.IndexedSeq(G__30263__a,0,null);
} 
return G__30262__delegate.call(this,args);};
G__30262.cljs$lang$maxFixedArity = 0;
G__30262.cljs$lang$applyTo = (function (arglist__30264){
var args = cljs.core.seq(arglist__30264);
return G__30262__delegate(args);
});
G__30262.cljs$core$IFn$_invoke$arity$variadic = G__30262__delegate;
return G__30262;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__30265__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__30265 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30266__i = 0, G__30266__a = new Array(arguments.length -  0);
while (G__30266__i < G__30266__a.length) {G__30266__a[G__30266__i] = arguments[G__30266__i + 0]; ++G__30266__i;}
  args = new cljs.core.IndexedSeq(G__30266__a,0,null);
} 
return G__30265__delegate.call(this,args);};
G__30265.cljs$lang$maxFixedArity = 0;
G__30265.cljs$lang$applyTo = (function (arglist__30267){
var args = cljs.core.seq(arglist__30267);
return G__30265__delegate(args);
});
G__30265.cljs$core$IFn$_invoke$arity$variadic = G__30265__delegate;
return G__30265;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map
