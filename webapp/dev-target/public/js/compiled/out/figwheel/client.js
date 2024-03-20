// Compiled by ClojureScript 1.10.439 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.18";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e37477){if((e37477 instanceof Error)){
var e = e37477;
return "Error: Unable to stringify";
} else {
throw e37477;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__37480 = arguments.length;
switch (G__37480) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__37478_SHARP_){
if(typeof p1__37478_SHARP_ === 'string'){
return p1__37478_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__37478_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4647__auto__ = [];
var len__4641__auto___37483 = arguments.length;
var i__4642__auto___37484 = (0);
while(true){
if((i__4642__auto___37484 < len__4641__auto___37483)){
args__4647__auto__.push((arguments[i__4642__auto___37484]));

var G__37485 = (i__4642__auto___37484 + (1));
i__4642__auto___37484 = G__37485;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq37482){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37482));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4647__auto__ = [];
var len__4641__auto___37487 = arguments.length;
var i__4642__auto___37488 = (0);
while(true){
if((i__4642__auto___37488 < len__4641__auto___37487)){
args__4647__auto__.push((arguments[i__4642__auto___37488]));

var G__37489 = (i__4642__auto___37488 + (1));
i__4642__auto___37488 = G__37489;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq37486){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37486));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__37490){
var map__37491 = p__37490;
var map__37491__$1 = (((((!((map__37491 == null))))?(((((map__37491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37491.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37491):map__37491);
var message = cljs.core.get.call(null,map__37491__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__37491__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4047__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4036__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4036__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4036__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__32052__auto___37570 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32052__auto___37570,ch){
return (function (){
var f__32053__auto__ = (function (){var switch__31957__auto__ = ((function (c__32052__auto___37570,ch){
return (function (state_37542){
var state_val_37543 = (state_37542[(1)]);
if((state_val_37543 === (7))){
var inst_37538 = (state_37542[(2)]);
var state_37542__$1 = state_37542;
var statearr_37544_37571 = state_37542__$1;
(statearr_37544_37571[(2)] = inst_37538);

(statearr_37544_37571[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37543 === (1))){
var state_37542__$1 = state_37542;
var statearr_37545_37572 = state_37542__$1;
(statearr_37545_37572[(2)] = null);

(statearr_37545_37572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37543 === (4))){
var inst_37495 = (state_37542[(7)]);
var inst_37495__$1 = (state_37542[(2)]);
var state_37542__$1 = (function (){var statearr_37546 = state_37542;
(statearr_37546[(7)] = inst_37495__$1);

return statearr_37546;
})();
if(cljs.core.truth_(inst_37495__$1)){
var statearr_37547_37573 = state_37542__$1;
(statearr_37547_37573[(1)] = (5));

} else {
var statearr_37548_37574 = state_37542__$1;
(statearr_37548_37574[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37543 === (15))){
var inst_37502 = (state_37542[(8)]);
var inst_37517 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37502);
var inst_37518 = cljs.core.first.call(null,inst_37517);
var inst_37519 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37518);
var inst_37520 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37519)].join('');
var inst_37521 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_37520);
var state_37542__$1 = state_37542;
var statearr_37549_37575 = state_37542__$1;
(statearr_37549_37575[(2)] = inst_37521);

(statearr_37549_37575[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37543 === (13))){
var inst_37526 = (state_37542[(2)]);
var state_37542__$1 = state_37542;
var statearr_37550_37576 = state_37542__$1;
(statearr_37550_37576[(2)] = inst_37526);

(statearr_37550_37576[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37543 === (6))){
var state_37542__$1 = state_37542;
var statearr_37551_37577 = state_37542__$1;
(statearr_37551_37577[(2)] = null);

(statearr_37551_37577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37543 === (17))){
var inst_37524 = (state_37542[(2)]);
var state_37542__$1 = state_37542;
var statearr_37552_37578 = state_37542__$1;
(statearr_37552_37578[(2)] = inst_37524);

(statearr_37552_37578[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37543 === (3))){
var inst_37540 = (state_37542[(2)]);
var state_37542__$1 = state_37542;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37542__$1,inst_37540);
} else {
if((state_val_37543 === (12))){
var inst_37501 = (state_37542[(9)]);
var inst_37515 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37501,opts);
var state_37542__$1 = state_37542;
if(inst_37515){
var statearr_37553_37579 = state_37542__$1;
(statearr_37553_37579[(1)] = (15));

} else {
var statearr_37554_37580 = state_37542__$1;
(statearr_37554_37580[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37543 === (2))){
var state_37542__$1 = state_37542;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37542__$1,(4),ch);
} else {
if((state_val_37543 === (11))){
var inst_37502 = (state_37542[(8)]);
var inst_37507 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37508 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37502);
var inst_37509 = cljs.core.async.timeout.call(null,(1000));
var inst_37510 = [inst_37508,inst_37509];
var inst_37511 = (new cljs.core.PersistentVector(null,2,(5),inst_37507,inst_37510,null));
var state_37542__$1 = state_37542;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37542__$1,(14),inst_37511);
} else {
if((state_val_37543 === (9))){
var inst_37502 = (state_37542[(8)]);
var inst_37528 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_37529 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37502);
var inst_37530 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37529);
var inst_37531 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37530)].join('');
var inst_37532 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_37531);
var state_37542__$1 = (function (){var statearr_37555 = state_37542;
(statearr_37555[(10)] = inst_37528);

return statearr_37555;
})();
var statearr_37556_37581 = state_37542__$1;
(statearr_37556_37581[(2)] = inst_37532);

(statearr_37556_37581[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37543 === (5))){
var inst_37495 = (state_37542[(7)]);
var inst_37497 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37498 = (new cljs.core.PersistentArrayMap(null,2,inst_37497,null));
var inst_37499 = (new cljs.core.PersistentHashSet(null,inst_37498,null));
var inst_37500 = figwheel.client.focus_msgs.call(null,inst_37499,inst_37495);
var inst_37501 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37500);
var inst_37502 = cljs.core.first.call(null,inst_37500);
var inst_37503 = figwheel.client.autoload_QMARK_.call(null);
var state_37542__$1 = (function (){var statearr_37557 = state_37542;
(statearr_37557[(9)] = inst_37501);

(statearr_37557[(8)] = inst_37502);

return statearr_37557;
})();
if(cljs.core.truth_(inst_37503)){
var statearr_37558_37582 = state_37542__$1;
(statearr_37558_37582[(1)] = (8));

} else {
var statearr_37559_37583 = state_37542__$1;
(statearr_37559_37583[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37543 === (14))){
var inst_37513 = (state_37542[(2)]);
var state_37542__$1 = state_37542;
var statearr_37560_37584 = state_37542__$1;
(statearr_37560_37584[(2)] = inst_37513);

(statearr_37560_37584[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37543 === (16))){
var state_37542__$1 = state_37542;
var statearr_37561_37585 = state_37542__$1;
(statearr_37561_37585[(2)] = null);

(statearr_37561_37585[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37543 === (10))){
var inst_37534 = (state_37542[(2)]);
var state_37542__$1 = (function (){var statearr_37562 = state_37542;
(statearr_37562[(11)] = inst_37534);

return statearr_37562;
})();
var statearr_37563_37586 = state_37542__$1;
(statearr_37563_37586[(2)] = null);

(statearr_37563_37586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37543 === (8))){
var inst_37501 = (state_37542[(9)]);
var inst_37505 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37501,opts);
var state_37542__$1 = state_37542;
if(cljs.core.truth_(inst_37505)){
var statearr_37564_37587 = state_37542__$1;
(statearr_37564_37587[(1)] = (11));

} else {
var statearr_37565_37588 = state_37542__$1;
(statearr_37565_37588[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32052__auto___37570,ch))
;
return ((function (switch__31957__auto__,c__32052__auto___37570,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__31958__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__31958__auto____0 = (function (){
var statearr_37566 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37566[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__31958__auto__);

(statearr_37566[(1)] = (1));

return statearr_37566;
});
var figwheel$client$file_reloader_plugin_$_state_machine__31958__auto____1 = (function (state_37542){
while(true){
var ret_value__31959__auto__ = (function (){try{while(true){
var result__31960__auto__ = switch__31957__auto__.call(null,state_37542);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31960__auto__;
}
break;
}
}catch (e37567){if((e37567 instanceof Object)){
var ex__31961__auto__ = e37567;
var statearr_37568_37589 = state_37542;
(statearr_37568_37589[(5)] = ex__31961__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37542);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37567;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37590 = state_37542;
state_37542 = G__37590;
continue;
} else {
return ret_value__31959__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__31958__auto__ = function(state_37542){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__31958__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__31958__auto____1.call(this,state_37542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__31958__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__31958__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__31958__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__31958__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__31958__auto__;
})()
;})(switch__31957__auto__,c__32052__auto___37570,ch))
})();
var state__32054__auto__ = (function (){var statearr_37569 = f__32053__auto__.call(null);
(statearr_37569[(6)] = c__32052__auto___37570);

return statearr_37569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32054__auto__);
});})(c__32052__auto___37570,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37591_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37591_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_37597 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_37597){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37593 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37594 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37595 = true;
var _STAR_print_fn_STAR__temp_val__37596 = ((function (_STAR_print_newline_STAR__orig_val__37593,_STAR_print_fn_STAR__orig_val__37594,_STAR_print_newline_STAR__temp_val__37595,sb,base_path_37597){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__37593,_STAR_print_fn_STAR__orig_val__37594,_STAR_print_newline_STAR__temp_val__37595,sb,base_path_37597))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37595;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37596;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37594;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37593;
}}catch (e37592){if((e37592 instanceof Error)){
var e = e37592;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37597], null));
} else {
var e = e37592;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_37597))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37598){
var map__37599 = p__37598;
var map__37599__$1 = (((((!((map__37599 == null))))?(((((map__37599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37599.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37599):map__37599);
var opts = map__37599__$1;
var build_id = cljs.core.get.call(null,map__37599__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37599,map__37599__$1,opts,build_id){
return (function (p__37601){
var vec__37602 = p__37601;
var seq__37603 = cljs.core.seq.call(null,vec__37602);
var first__37604 = cljs.core.first.call(null,seq__37603);
var seq__37603__$1 = cljs.core.next.call(null,seq__37603);
var map__37605 = first__37604;
var map__37605__$1 = (((((!((map__37605 == null))))?(((((map__37605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37605.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37605):map__37605);
var msg = map__37605__$1;
var msg_name = cljs.core.get.call(null,map__37605__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37603__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37602,seq__37603,first__37604,seq__37603__$1,map__37605,map__37605__$1,msg,msg_name,_,map__37599,map__37599__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37602,seq__37603,first__37604,seq__37603__$1,map__37605,map__37605__$1,msg,msg_name,_,map__37599,map__37599__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37599,map__37599__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37607){
var vec__37608 = p__37607;
var seq__37609 = cljs.core.seq.call(null,vec__37608);
var first__37610 = cljs.core.first.call(null,seq__37609);
var seq__37609__$1 = cljs.core.next.call(null,seq__37609);
var map__37611 = first__37610;
var map__37611__$1 = (((((!((map__37611 == null))))?(((((map__37611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37611.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37611):map__37611);
var msg = map__37611__$1;
var msg_name = cljs.core.get.call(null,map__37611__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37609__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37613){
var map__37614 = p__37613;
var map__37614__$1 = (((((!((map__37614 == null))))?(((((map__37614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37614.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37614):map__37614);
var on_compile_warning = cljs.core.get.call(null,map__37614__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37614__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37614,map__37614__$1,on_compile_warning,on_compile_fail){
return (function (p__37616){
var vec__37617 = p__37616;
var seq__37618 = cljs.core.seq.call(null,vec__37617);
var first__37619 = cljs.core.first.call(null,seq__37618);
var seq__37618__$1 = cljs.core.next.call(null,seq__37618);
var map__37620 = first__37619;
var map__37620__$1 = (((((!((map__37620 == null))))?(((((map__37620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37620.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37620):map__37620);
var msg = map__37620__$1;
var msg_name = cljs.core.get.call(null,map__37620__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37618__$1;
var pred__37622 = cljs.core._EQ_;
var expr__37623 = msg_name;
if(cljs.core.truth_(pred__37622.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37623))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37622.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37623))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37614,map__37614__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__32052__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32052__auto__,msg_hist,msg_names,msg){
return (function (){
var f__32053__auto__ = (function (){var switch__31957__auto__ = ((function (c__32052__auto__,msg_hist,msg_names,msg){
return (function (state_37712){
var state_val_37713 = (state_37712[(1)]);
if((state_val_37713 === (7))){
var inst_37632 = (state_37712[(2)]);
var state_37712__$1 = state_37712;
if(cljs.core.truth_(inst_37632)){
var statearr_37714_37761 = state_37712__$1;
(statearr_37714_37761[(1)] = (8));

} else {
var statearr_37715_37762 = state_37712__$1;
(statearr_37715_37762[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37713 === (20))){
var inst_37706 = (state_37712[(2)]);
var state_37712__$1 = state_37712;
var statearr_37716_37763 = state_37712__$1;
(statearr_37716_37763[(2)] = inst_37706);

(statearr_37716_37763[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37713 === (27))){
var inst_37702 = (state_37712[(2)]);
var state_37712__$1 = state_37712;
var statearr_37717_37764 = state_37712__$1;
(statearr_37717_37764[(2)] = inst_37702);

(statearr_37717_37764[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37713 === (1))){
var inst_37625 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37712__$1 = state_37712;
if(cljs.core.truth_(inst_37625)){
var statearr_37718_37765 = state_37712__$1;
(statearr_37718_37765[(1)] = (2));

} else {
var statearr_37719_37766 = state_37712__$1;
(statearr_37719_37766[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37713 === (24))){
var inst_37704 = (state_37712[(2)]);
var state_37712__$1 = state_37712;
var statearr_37720_37767 = state_37712__$1;
(statearr_37720_37767[(2)] = inst_37704);

(statearr_37720_37767[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37713 === (4))){
var inst_37710 = (state_37712[(2)]);
var state_37712__$1 = state_37712;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37712__$1,inst_37710);
} else {
if((state_val_37713 === (15))){
var inst_37708 = (state_37712[(2)]);
var state_37712__$1 = state_37712;
var statearr_37721_37768 = state_37712__$1;
(statearr_37721_37768[(2)] = inst_37708);

(statearr_37721_37768[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37713 === (21))){
var inst_37661 = (state_37712[(2)]);
var inst_37662 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37663 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37662);
var state_37712__$1 = (function (){var statearr_37722 = state_37712;
(statearr_37722[(7)] = inst_37661);

return statearr_37722;
})();
var statearr_37723_37769 = state_37712__$1;
(statearr_37723_37769[(2)] = inst_37663);

(statearr_37723_37769[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37713 === (31))){
var inst_37691 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37712__$1 = state_37712;
if(inst_37691){
var statearr_37724_37770 = state_37712__$1;
(statearr_37724_37770[(1)] = (34));

} else {
var statearr_37725_37771 = state_37712__$1;
(statearr_37725_37771[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37713 === (32))){
var inst_37700 = (state_37712[(2)]);
var state_37712__$1 = state_37712;
var statearr_37726_37772 = state_37712__$1;
(statearr_37726_37772[(2)] = inst_37700);

(statearr_37726_37772[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37713 === (33))){
var inst_37687 = (state_37712[(2)]);
var inst_37688 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37689 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37688);
var state_37712__$1 = (function (){var statearr_37727 = state_37712;
(statearr_37727[(8)] = inst_37687);

return statearr_37727;
})();
var statearr_37728_37773 = state_37712__$1;
(statearr_37728_37773[(2)] = inst_37689);

(statearr_37728_37773[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37713 === (13))){
var inst_37646 = figwheel.client.heads_up.clear.call(null);
var state_37712__$1 = state_37712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37712__$1,(16),inst_37646);
} else {
if((state_val_37713 === (22))){
var inst_37667 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37668 = figwheel.client.heads_up.append_warning_message.call(null,inst_37667);
var state_37712__$1 = state_37712;
var statearr_37729_37774 = state_37712__$1;
(statearr_37729_37774[(2)] = inst_37668);

(statearr_37729_37774[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37713 === (36))){
var inst_37698 = (state_37712[(2)]);
var state_37712__$1 = state_37712;
var statearr_37730_37775 = state_37712__$1;
(statearr_37730_37775[(2)] = inst_37698);

(statearr_37730_37775[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37713 === (29))){
var inst_37678 = (state_37712[(2)]);
var inst_37679 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37680 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37679);
var state_37712__$1 = (function (){var statearr_37731 = state_37712;
(statearr_37731[(9)] = inst_37678);

return statearr_37731;
})();
var statearr_37732_37776 = state_37712__$1;
(statearr_37732_37776[(2)] = inst_37680);

(statearr_37732_37776[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37713 === (6))){
var inst_37627 = (state_37712[(10)]);
var state_37712__$1 = state_37712;
var statearr_37733_37777 = state_37712__$1;
(statearr_37733_37777[(2)] = inst_37627);

(statearr_37733_37777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37713 === (28))){
var inst_37674 = (state_37712[(2)]);
var inst_37675 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37676 = figwheel.client.heads_up.display_warning.call(null,inst_37675);
var state_37712__$1 = (function (){var statearr_37734 = state_37712;
(statearr_37734[(11)] = inst_37674);

return statearr_37734;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37712__$1,(29),inst_37676);
} else {
if((state_val_37713 === (25))){
var inst_37672 = figwheel.client.heads_up.clear.call(null);
var state_37712__$1 = state_37712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37712__$1,(28),inst_37672);
} else {
if((state_val_37713 === (34))){
var inst_37693 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37712__$1 = state_37712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37712__$1,(37),inst_37693);
} else {
if((state_val_37713 === (17))){
var inst_37652 = (state_37712[(2)]);
var inst_37653 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37654 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37653);
var state_37712__$1 = (function (){var statearr_37735 = state_37712;
(statearr_37735[(12)] = inst_37652);

return statearr_37735;
})();
var statearr_37736_37778 = state_37712__$1;
(statearr_37736_37778[(2)] = inst_37654);

(statearr_37736_37778[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37713 === (3))){
var inst_37644 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37712__$1 = state_37712;
if(inst_37644){
var statearr_37737_37779 = state_37712__$1;
(statearr_37737_37779[(1)] = (13));

} else {
var statearr_37738_37780 = state_37712__$1;
(statearr_37738_37780[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37713 === (12))){
var inst_37640 = (state_37712[(2)]);
var state_37712__$1 = state_37712;
var statearr_37739_37781 = state_37712__$1;
(statearr_37739_37781[(2)] = inst_37640);

(statearr_37739_37781[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37713 === (2))){
var inst_37627 = (state_37712[(10)]);
var inst_37627__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37712__$1 = (function (){var statearr_37740 = state_37712;
(statearr_37740[(10)] = inst_37627__$1);

return statearr_37740;
})();
if(cljs.core.truth_(inst_37627__$1)){
var statearr_37741_37782 = state_37712__$1;
(statearr_37741_37782[(1)] = (5));

} else {
var statearr_37742_37783 = state_37712__$1;
(statearr_37742_37783[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37713 === (23))){
var inst_37670 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37712__$1 = state_37712;
if(inst_37670){
var statearr_37743_37784 = state_37712__$1;
(statearr_37743_37784[(1)] = (25));

} else {
var statearr_37744_37785 = state_37712__$1;
(statearr_37744_37785[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37713 === (35))){
var state_37712__$1 = state_37712;
var statearr_37745_37786 = state_37712__$1;
(statearr_37745_37786[(2)] = null);

(statearr_37745_37786[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37713 === (19))){
var inst_37665 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37712__$1 = state_37712;
if(inst_37665){
var statearr_37746_37787 = state_37712__$1;
(statearr_37746_37787[(1)] = (22));

} else {
var statearr_37747_37788 = state_37712__$1;
(statearr_37747_37788[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37713 === (11))){
var inst_37636 = (state_37712[(2)]);
var state_37712__$1 = state_37712;
var statearr_37748_37789 = state_37712__$1;
(statearr_37748_37789[(2)] = inst_37636);

(statearr_37748_37789[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37713 === (9))){
var inst_37638 = figwheel.client.heads_up.clear.call(null);
var state_37712__$1 = state_37712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37712__$1,(12),inst_37638);
} else {
if((state_val_37713 === (5))){
var inst_37629 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37712__$1 = state_37712;
var statearr_37749_37790 = state_37712__$1;
(statearr_37749_37790[(2)] = inst_37629);

(statearr_37749_37790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37713 === (14))){
var inst_37656 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37712__$1 = state_37712;
if(inst_37656){
var statearr_37750_37791 = state_37712__$1;
(statearr_37750_37791[(1)] = (18));

} else {
var statearr_37751_37792 = state_37712__$1;
(statearr_37751_37792[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37713 === (26))){
var inst_37682 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37712__$1 = state_37712;
if(inst_37682){
var statearr_37752_37793 = state_37712__$1;
(statearr_37752_37793[(1)] = (30));

} else {
var statearr_37753_37794 = state_37712__$1;
(statearr_37753_37794[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37713 === (16))){
var inst_37648 = (state_37712[(2)]);
var inst_37649 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37650 = figwheel.client.heads_up.display_exception.call(null,inst_37649);
var state_37712__$1 = (function (){var statearr_37754 = state_37712;
(statearr_37754[(13)] = inst_37648);

return statearr_37754;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37712__$1,(17),inst_37650);
} else {
if((state_val_37713 === (30))){
var inst_37684 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37685 = figwheel.client.heads_up.display_warning.call(null,inst_37684);
var state_37712__$1 = state_37712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37712__$1,(33),inst_37685);
} else {
if((state_val_37713 === (10))){
var inst_37642 = (state_37712[(2)]);
var state_37712__$1 = state_37712;
var statearr_37755_37795 = state_37712__$1;
(statearr_37755_37795[(2)] = inst_37642);

(statearr_37755_37795[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37713 === (18))){
var inst_37658 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37659 = figwheel.client.heads_up.display_exception.call(null,inst_37658);
var state_37712__$1 = state_37712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37712__$1,(21),inst_37659);
} else {
if((state_val_37713 === (37))){
var inst_37695 = (state_37712[(2)]);
var state_37712__$1 = state_37712;
var statearr_37756_37796 = state_37712__$1;
(statearr_37756_37796[(2)] = inst_37695);

(statearr_37756_37796[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37713 === (8))){
var inst_37634 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37712__$1 = state_37712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37712__$1,(11),inst_37634);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32052__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__31957__auto__,c__32052__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31958__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31958__auto____0 = (function (){
var statearr_37757 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37757[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31958__auto__);

(statearr_37757[(1)] = (1));

return statearr_37757;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31958__auto____1 = (function (state_37712){
while(true){
var ret_value__31959__auto__ = (function (){try{while(true){
var result__31960__auto__ = switch__31957__auto__.call(null,state_37712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31960__auto__;
}
break;
}
}catch (e37758){if((e37758 instanceof Object)){
var ex__31961__auto__ = e37758;
var statearr_37759_37797 = state_37712;
(statearr_37759_37797[(5)] = ex__31961__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37758;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37798 = state_37712;
state_37712 = G__37798;
continue;
} else {
return ret_value__31959__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31958__auto__ = function(state_37712){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31958__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31958__auto____1.call(this,state_37712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31958__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31958__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31958__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31958__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31958__auto__;
})()
;})(switch__31957__auto__,c__32052__auto__,msg_hist,msg_names,msg))
})();
var state__32054__auto__ = (function (){var statearr_37760 = f__32053__auto__.call(null);
(statearr_37760[(6)] = c__32052__auto__);

return statearr_37760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32054__auto__);
});})(c__32052__auto__,msg_hist,msg_names,msg))
);

return c__32052__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__32052__auto___37827 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32052__auto___37827,ch){
return (function (){
var f__32053__auto__ = (function (){var switch__31957__auto__ = ((function (c__32052__auto___37827,ch){
return (function (state_37813){
var state_val_37814 = (state_37813[(1)]);
if((state_val_37814 === (1))){
var state_37813__$1 = state_37813;
var statearr_37815_37828 = state_37813__$1;
(statearr_37815_37828[(2)] = null);

(statearr_37815_37828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37814 === (2))){
var state_37813__$1 = state_37813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37813__$1,(4),ch);
} else {
if((state_val_37814 === (3))){
var inst_37811 = (state_37813[(2)]);
var state_37813__$1 = state_37813;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37813__$1,inst_37811);
} else {
if((state_val_37814 === (4))){
var inst_37801 = (state_37813[(7)]);
var inst_37801__$1 = (state_37813[(2)]);
var state_37813__$1 = (function (){var statearr_37816 = state_37813;
(statearr_37816[(7)] = inst_37801__$1);

return statearr_37816;
})();
if(cljs.core.truth_(inst_37801__$1)){
var statearr_37817_37829 = state_37813__$1;
(statearr_37817_37829[(1)] = (5));

} else {
var statearr_37818_37830 = state_37813__$1;
(statearr_37818_37830[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37814 === (5))){
var inst_37801 = (state_37813[(7)]);
var inst_37803 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37801);
var state_37813__$1 = state_37813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37813__$1,(8),inst_37803);
} else {
if((state_val_37814 === (6))){
var state_37813__$1 = state_37813;
var statearr_37819_37831 = state_37813__$1;
(statearr_37819_37831[(2)] = null);

(statearr_37819_37831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37814 === (7))){
var inst_37809 = (state_37813[(2)]);
var state_37813__$1 = state_37813;
var statearr_37820_37832 = state_37813__$1;
(statearr_37820_37832[(2)] = inst_37809);

(statearr_37820_37832[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37814 === (8))){
var inst_37805 = (state_37813[(2)]);
var state_37813__$1 = (function (){var statearr_37821 = state_37813;
(statearr_37821[(8)] = inst_37805);

return statearr_37821;
})();
var statearr_37822_37833 = state_37813__$1;
(statearr_37822_37833[(2)] = null);

(statearr_37822_37833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__32052__auto___37827,ch))
;
return ((function (switch__31957__auto__,c__32052__auto___37827,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__31958__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__31958__auto____0 = (function (){
var statearr_37823 = [null,null,null,null,null,null,null,null,null];
(statearr_37823[(0)] = figwheel$client$heads_up_plugin_$_state_machine__31958__auto__);

(statearr_37823[(1)] = (1));

return statearr_37823;
});
var figwheel$client$heads_up_plugin_$_state_machine__31958__auto____1 = (function (state_37813){
while(true){
var ret_value__31959__auto__ = (function (){try{while(true){
var result__31960__auto__ = switch__31957__auto__.call(null,state_37813);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31960__auto__;
}
break;
}
}catch (e37824){if((e37824 instanceof Object)){
var ex__31961__auto__ = e37824;
var statearr_37825_37834 = state_37813;
(statearr_37825_37834[(5)] = ex__31961__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37813);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37824;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37835 = state_37813;
state_37813 = G__37835;
continue;
} else {
return ret_value__31959__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__31958__auto__ = function(state_37813){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__31958__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__31958__auto____1.call(this,state_37813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__31958__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__31958__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__31958__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__31958__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__31958__auto__;
})()
;})(switch__31957__auto__,c__32052__auto___37827,ch))
})();
var state__32054__auto__ = (function (){var statearr_37826 = f__32053__auto__.call(null);
(statearr_37826[(6)] = c__32052__auto___37827);

return statearr_37826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32054__auto__);
});})(c__32052__auto___37827,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__32052__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32052__auto__){
return (function (){
var f__32053__auto__ = (function (){var switch__31957__auto__ = ((function (c__32052__auto__){
return (function (state_37841){
var state_val_37842 = (state_37841[(1)]);
if((state_val_37842 === (1))){
var inst_37836 = cljs.core.async.timeout.call(null,(3000));
var state_37841__$1 = state_37841;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37841__$1,(2),inst_37836);
} else {
if((state_val_37842 === (2))){
var inst_37838 = (state_37841[(2)]);
var inst_37839 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37841__$1 = (function (){var statearr_37843 = state_37841;
(statearr_37843[(7)] = inst_37838);

return statearr_37843;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37841__$1,inst_37839);
} else {
return null;
}
}
});})(c__32052__auto__))
;
return ((function (switch__31957__auto__,c__32052__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__31958__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__31958__auto____0 = (function (){
var statearr_37844 = [null,null,null,null,null,null,null,null];
(statearr_37844[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__31958__auto__);

(statearr_37844[(1)] = (1));

return statearr_37844;
});
var figwheel$client$enforce_project_plugin_$_state_machine__31958__auto____1 = (function (state_37841){
while(true){
var ret_value__31959__auto__ = (function (){try{while(true){
var result__31960__auto__ = switch__31957__auto__.call(null,state_37841);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31960__auto__;
}
break;
}
}catch (e37845){if((e37845 instanceof Object)){
var ex__31961__auto__ = e37845;
var statearr_37846_37848 = state_37841;
(statearr_37846_37848[(5)] = ex__31961__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37841);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37845;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37849 = state_37841;
state_37841 = G__37849;
continue;
} else {
return ret_value__31959__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__31958__auto__ = function(state_37841){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__31958__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__31958__auto____1.call(this,state_37841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__31958__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__31958__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__31958__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__31958__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__31958__auto__;
})()
;})(switch__31957__auto__,c__32052__auto__))
})();
var state__32054__auto__ = (function (){var statearr_37847 = f__32053__auto__.call(null);
(statearr_37847[(6)] = c__32052__auto__);

return statearr_37847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32054__auto__);
});})(c__32052__auto__))
);

return c__32052__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5720__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5720__auto__)){
var figwheel_version = temp__5720__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__32052__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32052__auto__,figwheel_version,temp__5720__auto__){
return (function (){
var f__32053__auto__ = (function (){var switch__31957__auto__ = ((function (c__32052__auto__,figwheel_version,temp__5720__auto__){
return (function (state_37856){
var state_val_37857 = (state_37856[(1)]);
if((state_val_37857 === (1))){
var inst_37850 = cljs.core.async.timeout.call(null,(2000));
var state_37856__$1 = state_37856;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37856__$1,(2),inst_37850);
} else {
if((state_val_37857 === (2))){
var inst_37852 = (state_37856[(2)]);
var inst_37853 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_37854 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_37853);
var state_37856__$1 = (function (){var statearr_37858 = state_37856;
(statearr_37858[(7)] = inst_37852);

return statearr_37858;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37856__$1,inst_37854);
} else {
return null;
}
}
});})(c__32052__auto__,figwheel_version,temp__5720__auto__))
;
return ((function (switch__31957__auto__,c__32052__auto__,figwheel_version,temp__5720__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31958__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31958__auto____0 = (function (){
var statearr_37859 = [null,null,null,null,null,null,null,null];
(statearr_37859[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31958__auto__);

(statearr_37859[(1)] = (1));

return statearr_37859;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31958__auto____1 = (function (state_37856){
while(true){
var ret_value__31959__auto__ = (function (){try{while(true){
var result__31960__auto__ = switch__31957__auto__.call(null,state_37856);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31960__auto__;
}
break;
}
}catch (e37860){if((e37860 instanceof Object)){
var ex__31961__auto__ = e37860;
var statearr_37861_37863 = state_37856;
(statearr_37861_37863[(5)] = ex__31961__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37856);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37860;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37864 = state_37856;
state_37856 = G__37864;
continue;
} else {
return ret_value__31959__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31958__auto__ = function(state_37856){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31958__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31958__auto____1.call(this,state_37856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31958__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31958__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31958__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31958__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31958__auto__;
})()
;})(switch__31957__auto__,c__32052__auto__,figwheel_version,temp__5720__auto__))
})();
var state__32054__auto__ = (function (){var statearr_37862 = f__32053__auto__.call(null);
(statearr_37862[(6)] = c__32052__auto__);

return statearr_37862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32054__auto__);
});})(c__32052__auto__,figwheel_version,temp__5720__auto__))
);

return c__32052__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__37865){
var map__37866 = p__37865;
var map__37866__$1 = (((((!((map__37866 == null))))?(((((map__37866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37866.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37866):map__37866);
var file = cljs.core.get.call(null,map__37866__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37866__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37866__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37868 = "";
var G__37868__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37868),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__37868);
var G__37868__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37868__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__37868__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = line;
if(cljs.core.truth_(and__4036__auto__)){
return column;
} else {
return and__4036__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37868__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__37868__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37869){
var map__37870 = p__37869;
var map__37870__$1 = (((((!((map__37870 == null))))?(((((map__37870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37870.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37870):map__37870);
var ed = map__37870__$1;
var exception_data = cljs.core.get.call(null,map__37870__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37870__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_37873 = (function (){var G__37872 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37872)," Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,exception_data))].join('');
} else {
return G__37872;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_37873);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37874){
var map__37875 = p__37874;
var map__37875__$1 = (((((!((map__37875 == null))))?(((((map__37875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37875.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37875):map__37875);
var w = map__37875__$1;
var message = cljs.core.get.call(null,map__37875__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"dev-target/public/js/compiled/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"dev-target/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4036__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4036__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__37877 = cljs.core.seq.call(null,plugins);
var chunk__37878 = null;
var count__37879 = (0);
var i__37880 = (0);
while(true){
if((i__37880 < count__37879)){
var vec__37881 = cljs.core._nth.call(null,chunk__37878,i__37880);
var k = cljs.core.nth.call(null,vec__37881,(0),null);
var plugin = cljs.core.nth.call(null,vec__37881,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37887 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37877,chunk__37878,count__37879,i__37880,pl_37887,vec__37881,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37887.call(null,msg_hist);
});})(seq__37877,chunk__37878,count__37879,i__37880,pl_37887,vec__37881,k,plugin))
);
} else {
}


var G__37888 = seq__37877;
var G__37889 = chunk__37878;
var G__37890 = count__37879;
var G__37891 = (i__37880 + (1));
seq__37877 = G__37888;
chunk__37878 = G__37889;
count__37879 = G__37890;
i__37880 = G__37891;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__37877);
if(temp__5720__auto__){
var seq__37877__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37877__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__37877__$1);
var G__37892 = cljs.core.chunk_rest.call(null,seq__37877__$1);
var G__37893 = c__4461__auto__;
var G__37894 = cljs.core.count.call(null,c__4461__auto__);
var G__37895 = (0);
seq__37877 = G__37892;
chunk__37878 = G__37893;
count__37879 = G__37894;
i__37880 = G__37895;
continue;
} else {
var vec__37884 = cljs.core.first.call(null,seq__37877__$1);
var k = cljs.core.nth.call(null,vec__37884,(0),null);
var plugin = cljs.core.nth.call(null,vec__37884,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37896 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37877,chunk__37878,count__37879,i__37880,pl_37896,vec__37884,k,plugin,seq__37877__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37896.call(null,msg_hist);
});})(seq__37877,chunk__37878,count__37879,i__37880,pl_37896,vec__37884,k,plugin,seq__37877__$1,temp__5720__auto__))
);
} else {
}


var G__37897 = cljs.core.next.call(null,seq__37877__$1);
var G__37898 = null;
var G__37899 = (0);
var G__37900 = (0);
seq__37877 = G__37897;
chunk__37878 = G__37898;
count__37879 = G__37899;
i__37880 = G__37900;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__37902 = arguments.length;
switch (G__37902) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__37903_37908 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37904_37909 = null;
var count__37905_37910 = (0);
var i__37906_37911 = (0);
while(true){
if((i__37906_37911 < count__37905_37910)){
var msg_37912 = cljs.core._nth.call(null,chunk__37904_37909,i__37906_37911);
figwheel.client.socket.handle_incoming_message.call(null,msg_37912);


var G__37913 = seq__37903_37908;
var G__37914 = chunk__37904_37909;
var G__37915 = count__37905_37910;
var G__37916 = (i__37906_37911 + (1));
seq__37903_37908 = G__37913;
chunk__37904_37909 = G__37914;
count__37905_37910 = G__37915;
i__37906_37911 = G__37916;
continue;
} else {
var temp__5720__auto___37917 = cljs.core.seq.call(null,seq__37903_37908);
if(temp__5720__auto___37917){
var seq__37903_37918__$1 = temp__5720__auto___37917;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37903_37918__$1)){
var c__4461__auto___37919 = cljs.core.chunk_first.call(null,seq__37903_37918__$1);
var G__37920 = cljs.core.chunk_rest.call(null,seq__37903_37918__$1);
var G__37921 = c__4461__auto___37919;
var G__37922 = cljs.core.count.call(null,c__4461__auto___37919);
var G__37923 = (0);
seq__37903_37908 = G__37920;
chunk__37904_37909 = G__37921;
count__37905_37910 = G__37922;
i__37906_37911 = G__37923;
continue;
} else {
var msg_37924 = cljs.core.first.call(null,seq__37903_37918__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37924);


var G__37925 = cljs.core.next.call(null,seq__37903_37918__$1);
var G__37926 = null;
var G__37927 = (0);
var G__37928 = (0);
seq__37903_37908 = G__37925;
chunk__37904_37909 = G__37926;
count__37905_37910 = G__37927;
i__37906_37911 = G__37928;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4647__auto__ = [];
var len__4641__auto___37933 = arguments.length;
var i__4642__auto___37934 = (0);
while(true){
if((i__4642__auto___37934 < len__4641__auto___37933)){
args__4647__auto__.push((arguments[i__4642__auto___37934]));

var G__37935 = (i__4642__auto___37934 + (1));
i__4642__auto___37934 = G__37935;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37930){
var map__37931 = p__37930;
var map__37931__$1 = (((((!((map__37931 == null))))?(((((map__37931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37931.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37931):map__37931);
var opts = map__37931__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37929){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37929));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37936){if((e37936 instanceof Error)){
var e = e37936;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37936;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__37937){
var map__37938 = p__37937;
var map__37938__$1 = (((((!((map__37938 == null))))?(((((map__37938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37938.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37938):map__37938);
var msg_name = cljs.core.get.call(null,map__37938__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1710956806070
