// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('com.stuartsierra.component');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('com.stuartsierra.dependency');
goog.require('com.stuartsierra.component.platform');

/**
 * @interface
 */
com.stuartsierra.component.Lifecycle = function(){};

/**
 * Begins operation of this component. Synchronous, does not return
 *   until the component is started. Returns an updated version of this
 *   component.
 */
com.stuartsierra.component.start = (function com$stuartsierra$component$start(component){
if((((!((component == null)))) && ((!((component.com$stuartsierra$component$Lifecycle$start$arity$1 == null)))))){
return component.com$stuartsierra$component$Lifecycle$start$arity$1(component);
} else {
var x__4347__auto__ = (((component == null))?null:component);
var m__4348__auto__ = (com.stuartsierra.component.start[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(component) : m__4348__auto__.call(null,component));
} else {
var m__4348__auto____$1 = (com.stuartsierra.component.start["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(component) : m__4348__auto____$1.call(null,component));
} else {
throw cljs.core.missing_protocol("Lifecycle.start",component);
}
}
}
});

/**
 * Ceases operation of this component. Synchronous, does not return
 *   until the component is stopped. Returns an updated version of this
 *   component.
 */
com.stuartsierra.component.stop = (function com$stuartsierra$component$stop(component){
if((((!((component == null)))) && ((!((component.com$stuartsierra$component$Lifecycle$stop$arity$1 == null)))))){
return component.com$stuartsierra$component$Lifecycle$stop$arity$1(component);
} else {
var x__4347__auto__ = (((component == null))?null:component);
var m__4348__auto__ = (com.stuartsierra.component.stop[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(component) : m__4348__auto__.call(null,component));
} else {
var m__4348__auto____$1 = (com.stuartsierra.component.stop["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(component) : m__4348__auto____$1.call(null,component));
} else {
throw cljs.core.missing_protocol("Lifecycle.stop",component);
}
}
}
});

goog.object.set(com.stuartsierra.component.Lifecycle,"_",true);

var G__36593_36599 = com.stuartsierra.component.start;
var G__36594_36600 = "_";
var G__36595_36601 = ((function (G__36593_36599,G__36594_36600){
return (function (this$){
return this$;
});})(G__36593_36599,G__36594_36600))
;
goog.object.set(G__36593_36599,G__36594_36600,G__36595_36601);

var G__36596_36602 = com.stuartsierra.component.stop;
var G__36597_36603 = "_";
var G__36598_36604 = ((function (G__36596_36602,G__36597_36603){
return (function (this$){
return this$;
});})(G__36596_36602,G__36597_36603))
;
goog.object.set(G__36596_36602,G__36597_36603,G__36598_36604);
/**
 * Returns the map of other components on which this component depends.
 */
com.stuartsierra.component.dependencies = (function com$stuartsierra$component$dependencies(component){
return cljs.core.cst$kw$com$stuartsierra$component_SLASH_dependencies.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(component),cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * Associates metadata with component describing the other components
 *   on which it depends. Component dependencies are specified as a map.
 *   Keys in the map correspond to keys in this component which must be
 *   provided by its containing system. Values in the map are the keys in
 *   the system at which those components may be found. Alternatively, if
 *   the keys are the same in both the component and its enclosing
 *   system, they may be specified as a vector of keys.
 */
com.stuartsierra.component.using = (function com$stuartsierra$component$using(component,dependencies){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$5(component,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$stuartsierra$component_SLASH_dependencies], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY),((cljs.core.map_QMARK_(dependencies))?dependencies:((cljs.core.vector_QMARK_(dependencies))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x], null);
}),dependencies)):(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Dependencies must be a map or vector",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$reason,cljs.core.cst$kw$com$stuartsierra$component_SLASH_invalid_DASH_dependencies,cljs.core.cst$kw$component,component,cljs.core.cst$kw$dependencies,dependencies], null))})()
)));
});
com.stuartsierra.component.nil_component = (function com$stuartsierra$component$nil_component(system,key){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Component ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)," was nil in system; maybe it returned nil from start or stop"].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$reason,cljs.core.cst$kw$com$stuartsierra$component_SLASH_nil_DASH_component,cljs.core.cst$kw$system_DASH_key,key,cljs.core.cst$kw$system,system], null));
});
com.stuartsierra.component.get_component = (function com$stuartsierra$component$get_component(system,key){
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$3(system,key,cljs.core.cst$kw$com$stuartsierra$component_SLASH_not_DASH_found);
if((component == null)){
throw com.stuartsierra.component.nil_component(system,key);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$com$stuartsierra$component_SLASH_not_DASH_found,component)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Missing component ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)," from system"].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$reason,cljs.core.cst$kw$com$stuartsierra$component_SLASH_missing_DASH_component,cljs.core.cst$kw$system_DASH_key,key,cljs.core.cst$kw$system,system], null));
} else {
}

return component;
});
com.stuartsierra.component.get_dependency = (function com$stuartsierra$component$get_dependency(system,system_key,component,dependency_key){
var dependency = cljs.core.get.cljs$core$IFn$_invoke$arity$3(system,system_key,cljs.core.cst$kw$com$stuartsierra$component_SLASH_not_DASH_found);
if((dependency == null)){
throw com.stuartsierra.component.nil_component(system,system_key);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$com$stuartsierra$component_SLASH_not_DASH_found,dependency)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Missing dependency ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dependency_key)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.stuartsierra.component.platform.type_name(component))," expected in system at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(system_key)].join(''),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$reason,cljs.core.cst$kw$com$stuartsierra$component_SLASH_missing_DASH_dependency,cljs.core.cst$kw$system_DASH_key,system_key,cljs.core.cst$kw$dependency_DASH_key,dependency_key,cljs.core.cst$kw$component,component,cljs.core.cst$kw$system,system], null));
} else {
}

return dependency;
});
/**
 * Associates dependency metadata with multiple components in the
 *   system. dependency-map is a map of keys in the system to maps or
 *   vectors specifying the dependencies of the component at that key in
 *   the system, as per 'using'.
 */
com.stuartsierra.component.system_using = (function com$stuartsierra$component$system_using(system,dependency_map){
return cljs.core.reduce_kv((function (system__$1,key,dependencies){
var component = com.stuartsierra.component.get_component(system__$1,key);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(system__$1,key,com.stuartsierra.component.using(component,dependencies));
}),system,dependency_map);
});
/**
 * Returns a dependency graph, using the data structures defined in
 *   com.stuartsierra.dependency, for the components found by
 *   (select-keys system component-keys)
 */
com.stuartsierra.component.dependency_graph = (function com$stuartsierra$component$dependency_graph(system,component_keys){
return cljs.core.reduce_kv((function (graph,key,component){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__36605_SHARP_,p2__36606_SHARP_){
return com.stuartsierra.dependency.depend(p1__36605_SHARP_,key,p2__36606_SHARP_);
}),graph,cljs.core.vals(com.stuartsierra.component.dependencies(component)));
}),com.stuartsierra.dependency.graph(),cljs.core.select_keys(system,component_keys));
});
com.stuartsierra.component.assoc_dependency = (function com$stuartsierra$component$assoc_dependency(system,component,dependency_key,system_key){
var dependency = com.stuartsierra.component.get_dependency(system,system_key,component,dependency_key);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(component,dependency_key,dependency);
});
com.stuartsierra.component.assoc_dependencies = (function com$stuartsierra$component$assoc_dependencies(component,system){
return cljs.core.reduce_kv((function (p1__36607_SHARP_,p2__36608_SHARP_,p3__36609_SHARP_){
return com.stuartsierra.component.assoc_dependency(system,p1__36607_SHARP_,p2__36608_SHARP_,p3__36609_SHARP_);
}),component,com.stuartsierra.component.dependencies(component));
});
com.stuartsierra.component.try_action = (function com$stuartsierra$component$try_action(component,system,key,f,args){
try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,component,args);
}catch (e36610){var t = e36610;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(["Error in component ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)," in system ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.stuartsierra.component.platform.type_name(system))," calling ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$reason,cljs.core.cst$kw$com$stuartsierra$component_SLASH_component_DASH_function_DASH_threw_DASH_exception,cljs.core.cst$kw$function,f,cljs.core.cst$kw$system_DASH_key,key,cljs.core.cst$kw$component,component,cljs.core.cst$kw$system,system], null),t);
}});
/**
 * Invokes (apply f component args) on each of the components at
 *   component-keys in the system, in dependency order. Before invoking
 *   f, assoc's updated dependencies of the component.
 */
com.stuartsierra.component.update_system = (function com$stuartsierra$component$update_system(var_args){
var args__4647__auto__ = [];
var len__4641__auto___36615 = arguments.length;
var i__4642__auto___36616 = (0);
while(true){
if((i__4642__auto___36616 < len__4641__auto___36615)){
args__4647__auto__.push((arguments[i__4642__auto___36616]));

var G__36617 = (i__4642__auto___36616 + (1));
i__4642__auto___36616 = G__36617;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return com.stuartsierra.component.update_system.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

com.stuartsierra.component.update_system.cljs$core$IFn$_invoke$arity$variadic = (function (system,component_keys,f,args){
var graph = com.stuartsierra.component.dependency_graph(system,component_keys);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (graph){
return (function (system__$1,key){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(system__$1,key,com.stuartsierra.component.try_action(com.stuartsierra.component.assoc_dependencies(com.stuartsierra.component.get_component(system__$1,key),system__$1),system__$1,key,f,args));
});})(graph))
,system,cljs.core.sort.cljs$core$IFn$_invoke$arity$2(com.stuartsierra.dependency.topo_comparator(graph),component_keys));
});

com.stuartsierra.component.update_system.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
com.stuartsierra.component.update_system.cljs$lang$applyTo = (function (seq36611){
var G__36612 = cljs.core.first(seq36611);
var seq36611__$1 = cljs.core.next(seq36611);
var G__36613 = cljs.core.first(seq36611__$1);
var seq36611__$2 = cljs.core.next(seq36611__$1);
var G__36614 = cljs.core.first(seq36611__$2);
var seq36611__$3 = cljs.core.next(seq36611__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36612,G__36613,G__36614,seq36611__$3);
});

/**
 * Like update-system but operates in reverse dependency order.
 */
com.stuartsierra.component.update_system_reverse = (function com$stuartsierra$component$update_system_reverse(var_args){
var args__4647__auto__ = [];
var len__4641__auto___36622 = arguments.length;
var i__4642__auto___36623 = (0);
while(true){
if((i__4642__auto___36623 < len__4641__auto___36622)){
args__4647__auto__.push((arguments[i__4642__auto___36623]));

var G__36624 = (i__4642__auto___36623 + (1));
i__4642__auto___36623 = G__36624;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return com.stuartsierra.component.update_system_reverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

com.stuartsierra.component.update_system_reverse.cljs$core$IFn$_invoke$arity$variadic = (function (system,component_keys,f,args){
var graph = com.stuartsierra.component.dependency_graph(system,component_keys);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (graph){
return (function (system__$1,key){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(system__$1,key,com.stuartsierra.component.try_action(com.stuartsierra.component.assoc_dependencies(com.stuartsierra.component.get_component(system__$1,key),system__$1),system__$1,key,f,args));
});})(graph))
,system,cljs.core.reverse(cljs.core.sort.cljs$core$IFn$_invoke$arity$2(com.stuartsierra.dependency.topo_comparator(graph),component_keys)));
});

com.stuartsierra.component.update_system_reverse.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
com.stuartsierra.component.update_system_reverse.cljs$lang$applyTo = (function (seq36618){
var G__36619 = cljs.core.first(seq36618);
var seq36618__$1 = cljs.core.next(seq36618);
var G__36620 = cljs.core.first(seq36618__$1);
var seq36618__$2 = cljs.core.next(seq36618__$1);
var G__36621 = cljs.core.first(seq36618__$2);
var seq36618__$3 = cljs.core.next(seq36618__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36619,G__36620,G__36621,seq36618__$3);
});

/**
 * Recursively starts components in the system, in dependency order,
 *   assoc'ing in their dependencies along the way. component-keys is a
 *   collection of keys (order doesn't matter) in the system specifying
 *   the components to start, defaults to all keys in the system.
 */
com.stuartsierra.component.start_system = (function com$stuartsierra$component$start_system(var_args){
var G__36626 = arguments.length;
switch (G__36626) {
case 1:
return com.stuartsierra.component.start_system.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.stuartsierra.component.start_system.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.stuartsierra.component.start_system.cljs$core$IFn$_invoke$arity$1 = (function (system){
return com.stuartsierra.component.start_system.cljs$core$IFn$_invoke$arity$2(system,cljs.core.keys(system));
});

com.stuartsierra.component.start_system.cljs$core$IFn$_invoke$arity$2 = (function (system,component_keys){
return com.stuartsierra.component.update_system(system,component_keys,new cljs.core.Var(function(){return com.stuartsierra.component.start;},cljs.core.cst$sym$com$stuartsierra$component_SLASH_start,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$protocol,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$com$stuartsierra$component_SLASH_Lifecycle,cljs.core.cst$sym$com$stuartsierra$component,cljs.core.cst$sym$start,"target/com/stuartsierra/component.cljc",9,1,5,6,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$component], null)),"Begins operation of this component. Synchronous, does not return\n  until the component is started. Returns an updated version of this\n  component.",(cljs.core.truth_(com.stuartsierra.component.start)?com.stuartsierra.component.start.cljs$lang$test:null)])));
});

com.stuartsierra.component.start_system.cljs$lang$maxFixedArity = 2;

/**
 * Recursively stops components in the system, in reverse dependency
 *   order. component-keys is a collection of keys (order doesn't matter)
 *   in the system specifying the components to stop, defaults to all
 *   keys in the system.
 */
com.stuartsierra.component.stop_system = (function com$stuartsierra$component$stop_system(var_args){
var G__36629 = arguments.length;
switch (G__36629) {
case 1:
return com.stuartsierra.component.stop_system.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.stuartsierra.component.stop_system.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.stuartsierra.component.stop_system.cljs$core$IFn$_invoke$arity$1 = (function (system){
return com.stuartsierra.component.stop_system.cljs$core$IFn$_invoke$arity$2(system,cljs.core.keys(system));
});

com.stuartsierra.component.stop_system.cljs$core$IFn$_invoke$arity$2 = (function (system,component_keys){
return com.stuartsierra.component.update_system_reverse(system,component_keys,new cljs.core.Var(function(){return com.stuartsierra.component.stop;},cljs.core.cst$sym$com$stuartsierra$component_SLASH_stop,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$protocol,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$com$stuartsierra$component_SLASH_Lifecycle,cljs.core.cst$sym$com$stuartsierra$component,cljs.core.cst$sym$stop,"target/com/stuartsierra/component.cljc",8,1,5,10,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$component], null)),"Ceases operation of this component. Synchronous, does not return\n  until the component is stopped. Returns an updated version of this\n  component.",(cljs.core.truth_(com.stuartsierra.component.stop)?com.stuartsierra.component.stop.cljs$lang$test:null)])));
});

com.stuartsierra.component.stop_system.cljs$lang$maxFixedArity = 2;


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
com.stuartsierra.component.SystemMap = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.stuartsierra.component.SystemMap.prototype.com$stuartsierra$component$Lifecycle$ = cljs.core.PROTOCOL_SENTINEL;

com.stuartsierra.component.SystemMap.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (system){
var self__ = this;
var system__$1 = this;
return com.stuartsierra.component.start_system.cljs$core$IFn$_invoke$arity$1(system__$1);
});

com.stuartsierra.component.SystemMap.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (system){
var self__ = this;
var system__$1 = this;
return com.stuartsierra.component.stop_system.cljs$core$IFn$_invoke$arity$1(system__$1);
});

com.stuartsierra.component.SystemMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

com.stuartsierra.component.SystemMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k36632,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__36636 = k36632;
switch (G__36636) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36632,else__4304__auto__);

}
});

com.stuartsierra.component.SystemMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__36637){
var vec__36638 = p__36637;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36638,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36638,(1),null);
return (f__4321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4321__auto__.cljs$core$IFn$_invoke$arity$3(ret__4323__auto__,k__4324__auto__,v__4325__auto__) : f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__));
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

com.stuartsierra.component.SystemMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer(writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4316__auto__,pr_pair__4318__auto__,"#com.stuartsierra.component.SystemMap{",", ","}",opts__4317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

com.stuartsierra.component.SystemMap.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36631){
var self__ = this;
var G__36631__$1 = this;
return (new cljs.core.RecordIter((0),G__36631__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.stuartsierra.component.SystemMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

com.stuartsierra.component.SystemMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new com.stuartsierra.component.SystemMap(self__.__meta,self__.__extmap,self__.__hash));
});

com.stuartsierra.component.SystemMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
});

com.stuartsierra.component.SystemMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = (function (){var fexpr__36641 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (-616645845 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__36641(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

com.stuartsierra.component.SystemMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36633,other36634){
var self__ = this;
var this36633__$1 = this;
return (((!((other36634 == null)))) && ((this36633__$1.constructor === other36634.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36633__$1.__extmap,other36634.__extmap)));
});

com.stuartsierra.component.SystemMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__4311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new com.stuartsierra.component.SystemMap(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4311__auto__)),null));
}
});

com.stuartsierra.component.SystemMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__36631){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__36642 = cljs.core.keyword_identical_QMARK_;
var expr__36643 = k__4309__auto__;
return (new com.stuartsierra.component.SystemMap(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__36631),null));
});

com.stuartsierra.component.SystemMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

com.stuartsierra.component.SystemMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__36631){
var self__ = this;
var this__4300__auto____$1 = this;
return (new com.stuartsierra.component.SystemMap(G__36631,self__.__extmap,self__.__hash));
});

com.stuartsierra.component.SystemMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

com.stuartsierra.component.SystemMap.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

com.stuartsierra.component.SystemMap.cljs$lang$type = true;

com.stuartsierra.component.SystemMap.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"com.stuartsierra.component/SystemMap",null,(1),null));
});

com.stuartsierra.component.SystemMap.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write(writer__4345__auto__,"com.stuartsierra.component/SystemMap");
});

/**
 * Positional factory function for com.stuartsierra.component/SystemMap.
 */
com.stuartsierra.component.__GT_SystemMap = (function com$stuartsierra$component$__GT_SystemMap(){
return (new com.stuartsierra.component.SystemMap(null,null,null));
});

/**
 * Factory function for com.stuartsierra.component/SystemMap, taking a map of keywords to field values.
 */
com.stuartsierra.component.map__GT_SystemMap = (function com$stuartsierra$component$map__GT_SystemMap(G__36635){
var extmap__4340__auto__ = (function (){var G__36645 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__36635);
if(cljs.core.record_QMARK_(G__36635)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36645);
} else {
return G__36645;
}
})();
return (new com.stuartsierra.component.SystemMap(null,cljs.core.not_empty(extmap__4340__auto__),null));
});

com.stuartsierra.component.SystemMap.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

com.stuartsierra.component.SystemMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core._write(writer,"#<SystemMap>");
});
/**
 * Returns a system constructed of key/value pairs. The system has
 *   default implementations of the Lifecycle 'start' and 'stop' methods
 *   which recursively start/stop all components in the system.
 * 
 *   System maps print as #<SystemMap> to avoid overwhelming the printer
 *   with large objects. As a consequence, printed system maps cannot be
 *   'read'. To disable this behavior and print system maps like normal
 *   records, call
 *   (remove-method clojure.core/print-method com.stuartsierra.component.SystemMap)
 */
com.stuartsierra.component.system_map = (function com$stuartsierra$component$system_map(var_args){
var args__4647__auto__ = [];
var len__4641__auto___36648 = arguments.length;
var i__4642__auto___36649 = (0);
while(true){
if((i__4642__auto___36649 < len__4641__auto___36648)){
args__4647__auto__.push((arguments[i__4642__auto___36649]));

var G__36650 = (i__4642__auto___36649 + (1));
i__4642__auto___36649 = G__36650;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return com.stuartsierra.component.system_map.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

com.stuartsierra.component.system_map.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
if(cljs.core.even_QMARK_(cljs.core.count(keyvals))){
} else {
throw com.stuartsierra.component.platform.argument_error("system-map requires an even number of arguments");
}

return com.stuartsierra.component.map__GT_SystemMap(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,keyvals));
});

com.stuartsierra.component.system_map.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.stuartsierra.component.system_map.cljs$lang$applyTo = (function (seq36647){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36647));
});

/**
 * True if the error has ex-data indicating it was thrown by something
 *   in the com.stuartsierra.component namespace.
 */
com.stuartsierra.component.ex_component_QMARK_ = (function com$stuartsierra$component$ex_component_QMARK_(error){
var map__36651 = cljs.core.ex_data(error);
var map__36651__$1 = (((((!((map__36651 == null))))?(((((map__36651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36651.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36651):map__36651);
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36651__$1,cljs.core.cst$kw$reason);
return (((reason instanceof cljs.core.Keyword)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("com.stuartsierra.component",cljs.core.namespace(reason))));
});
/**
 * If the error has ex-data provided by the com.stuartsierra.component
 *   namespace, returns a new exception instance with the :component
 *   and :system removed from its ex-data. Preserves the other details of
 *   the original error. If the error was not created by this namespace,
 *   returns it unchanged. Use this when you want to catch and rethrow
 *   exceptions without including the full component or system.
 */
com.stuartsierra.component.ex_without_components = (function com$stuartsierra$component$ex_without_components(error){
if(com.stuartsierra.component.ex_component_QMARK_(error)){
return com.stuartsierra.component.platform.alter_ex_data.cljs$core$IFn$_invoke$arity$variadic(error,cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$component,cljs.core.cst$kw$system], 0));
} else {
return error;
}
});
