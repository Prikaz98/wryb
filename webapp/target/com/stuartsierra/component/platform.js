// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('com.stuartsierra.component.platform');
goog.require('cljs.core');
goog.require('cljs.core.constants');
com.stuartsierra.component.platform.argument_error = (function com$stuartsierra$component$platform$argument_error(message){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(message,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$reason,cljs.core.cst$kw$com$stuartsierra$component$platform_SLASH_illegal_DASH_argument], null));
});
/**
 * Returns a string name for the type/class of x.
 */
com.stuartsierra.component.platform.type_name = (function com$stuartsierra$component$platform$type_name(x){
return cljs.core.type__GT_str(cljs.core.type(x));
});
/**
 * Returns a new ExceptionInfo with the same details as error and
 *   ex-data as the result of (apply f (ex-data throwable) args).
 */
com.stuartsierra.component.platform.alter_ex_data = (function com$stuartsierra$component$platform$alter_ex_data(var_args){
var args__4647__auto__ = [];
var len__4641__auto___36539 = arguments.length;
var i__4642__auto___36540 = (0);
while(true){
if((i__4642__auto___36540 < len__4641__auto___36539)){
args__4647__auto__.push((arguments[i__4642__auto___36540]));

var G__36541 = (i__4642__auto___36540 + (1));
i__4642__auto___36540 = G__36541;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((2) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((2)),(0),null)):null);
return com.stuartsierra.component.platform.alter_ex_data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4648__auto__);
});

com.stuartsierra.component.platform.alter_ex_data.cljs$core$IFn$_invoke$arity$variadic = (function (error,f,args){
var ex = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(cljs.core.ex_message(error),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,cljs.core.ex_data(error),args),cljs.core.ex_cause(error));
ex.name = error.name;

ex.description = error.description;

ex.number = error.number;

ex.fileName = error.fileName;

ex.lineNumber = error.lineNumber;

ex.columnNumber = error.columnNumber;

ex.stack = error.stack;

return ex;
});

com.stuartsierra.component.platform.alter_ex_data.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
com.stuartsierra.component.platform.alter_ex_data.cljs$lang$applyTo = (function (seq36536){
var G__36537 = cljs.core.first(seq36536);
var seq36536__$1 = cljs.core.next(seq36536);
var G__36538 = cljs.core.first(seq36536__$1);
var seq36536__$2 = cljs.core.next(seq36536__$1);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36537,G__36538,seq36536__$2);
});

