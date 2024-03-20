// Compiled by ClojureScript 1.10.439 {}
goog.provide('fipp.clojure');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('fipp.visit');
goog.require('fipp.edn');
fipp.clojure.block = (function fipp$clojure$block(nodes){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nest","nest",-314993663),(2),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),nodes)], null);
});
fipp.clojure.list_group = (function fipp$clojure$list_group(var_args){
var args__4647__auto__ = [];
var len__4641__auto___31203 = arguments.length;
var i__4642__auto___31204 = (0);
while(true){
if((i__4642__auto___31204 < len__4641__auto___31203)){
args__4647__auto__.push((arguments[i__4642__auto___31204]));

var G__31205 = (i__4642__auto___31204 + (1));
i__4642__auto___31204 = G__31205;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return fipp.clojure.list_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

fipp.clojure.list_group.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),"(",nodes,")"], null);
});

fipp.clojure.list_group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fipp.clojure.list_group.cljs$lang$applyTo = (function (seq31202){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31202));
});

fipp.clojure.maybe_a = (function fipp$clojure$maybe_a(pred,xs){
var x = cljs.core.first.call(null,xs);
if(cljs.core.truth_(pred.call(null,x))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.rest.call(null,xs)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,xs], null);
}
});
fipp.clojure.pretty_cond_clause = (function fipp$clojure$pretty_cond_clause(p,p__31206){
var vec__31207 = p__31206;
var test = cljs.core.nth.call(null,vec__31207,(0),null);
var result = cljs.core.nth.call(null,vec__31207,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),fipp.visit.visit.call(null,p,test),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nest","nest",-314993663),(2),fipp.visit.visit.call(null,p,result)], null)], null);
});
fipp.clojure.pretty_case = (function fipp$clojure$pretty_case(p,p__31211){
var vec__31212 = p__31211;
var seq__31213 = cljs.core.seq.call(null,vec__31212);
var first__31214 = cljs.core.first.call(null,seq__31213);
var seq__31213__$1 = cljs.core.next.call(null,seq__31213);
var head = first__31214;
var first__31214__$1 = cljs.core.first.call(null,seq__31213__$1);
var seq__31213__$2 = cljs.core.next.call(null,seq__31213__$1);
var expr = first__31214__$1;
var more = seq__31213__$2;
var clauses = cljs.core.partition.call(null,(2),more);
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,more)))?cljs.core.last.call(null,more):null);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,expr),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (clauses,default$,vec__31212,seq__31213,first__31214,seq__31213__$1,head,first__31214__$1,seq__31213__$2,expr,more){
return (function (p1__31210_SHARP_){
return fipp.clojure.pretty_cond_clause.call(null,p,p1__31210_SHARP_);
});})(clauses,default$,vec__31212,seq__31213,first__31214,seq__31213__$1,head,first__31214__$1,seq__31213__$2,expr,more))
,clauses),(cljs.core.truth_(default$)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,default$)], null):null))));
});
fipp.clojure.pretty_cond = (function fipp$clojure$pretty_cond(p,p__31216){
var vec__31217 = p__31216;
var seq__31218 = cljs.core.seq.call(null,vec__31217);
var first__31219 = cljs.core.first.call(null,seq__31218);
var seq__31218__$1 = cljs.core.next.call(null,seq__31218);
var head = first__31219;
var more = seq__31218__$1;
var clauses = cljs.core.partition.call(null,(2),more);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (clauses,vec__31217,seq__31218,first__31219,seq__31218__$1,head,more){
return (function (p1__31215_SHARP_){
return fipp.clojure.pretty_cond_clause.call(null,p,p1__31215_SHARP_);
});})(clauses,vec__31217,seq__31218,first__31219,seq__31218__$1,head,more))
,clauses)));
});
fipp.clojure.pretty_condp = (function fipp$clojure$pretty_condp(p,p__31221){
var vec__31222 = p__31221;
var seq__31223 = cljs.core.seq.call(null,vec__31222);
var first__31224 = cljs.core.first.call(null,seq__31223);
var seq__31223__$1 = cljs.core.next.call(null,seq__31223);
var head = first__31224;
var first__31224__$1 = cljs.core.first.call(null,seq__31223__$1);
var seq__31223__$2 = cljs.core.next.call(null,seq__31223__$1);
var pred = first__31224__$1;
var first__31224__$2 = cljs.core.first.call(null,seq__31223__$2);
var seq__31223__$3 = cljs.core.next.call(null,seq__31223__$2);
var expr = first__31224__$2;
var more = seq__31223__$3;
var clauses = cljs.core.partition.call(null,(2),more);
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,more)))?cljs.core.last.call(null,more):null);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,pred)," ",fipp.visit.visit.call(null,p,expr),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (clauses,default$,vec__31222,seq__31223,first__31224,seq__31223__$1,head,first__31224__$1,seq__31223__$2,pred,first__31224__$2,seq__31223__$3,expr,more){
return (function (p1__31220_SHARP_){
return fipp.clojure.pretty_cond_clause.call(null,p,p1__31220_SHARP_);
});})(clauses,default$,vec__31222,seq__31223,first__31224,seq__31223__$1,head,first__31224__$1,seq__31223__$2,pred,first__31224__$2,seq__31223__$3,expr,more))
,clauses),(cljs.core.truth_(default$)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,default$)], null):null))));
});
fipp.clojure.pretty_arrow = (function fipp$clojure$pretty_arrow(p,p__31226){
var vec__31227 = p__31226;
var seq__31228 = cljs.core.seq.call(null,vec__31227);
var first__31229 = cljs.core.first.call(null,seq__31228);
var seq__31228__$1 = cljs.core.next.call(null,seq__31228);
var head = first__31229;
var stmts = seq__31228__$1;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (vec__31227,seq__31228,first__31229,seq__31228__$1,head,stmts){
return (function (p1__31225_SHARP_){
return fipp.visit.visit.call(null,p,p1__31225_SHARP_);
});})(vec__31227,seq__31228,first__31229,seq__31228__$1,head,stmts))
,stmts))], null));
});
fipp.clojure.pretty_if = (function fipp$clojure$pretty_if(p,p__31231){
var vec__31232 = p__31231;
var seq__31233 = cljs.core.seq.call(null,vec__31232);
var first__31234 = cljs.core.first.call(null,seq__31233);
var seq__31233__$1 = cljs.core.next.call(null,seq__31233);
var head = first__31234;
var first__31234__$1 = cljs.core.first.call(null,seq__31233__$1);
var seq__31233__$2 = cljs.core.next.call(null,seq__31233__$1);
var test = first__31234__$1;
var more = seq__31233__$2;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,test),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (vec__31232,seq__31233,first__31234,seq__31233__$1,head,first__31234__$1,seq__31233__$2,test,more){
return (function (p1__31230_SHARP_){
return fipp.visit.visit.call(null,p,p1__31230_SHARP_);
});})(vec__31232,seq__31233,first__31234,seq__31233__$1,head,first__31234__$1,seq__31233__$2,test,more))
,more)));
});
fipp.clojure.pretty_method = (function fipp$clojure$pretty_method(p,p__31236){
var vec__31237 = p__31236;
var seq__31238 = cljs.core.seq.call(null,vec__31237);
var first__31239 = cljs.core.first.call(null,seq__31238);
var seq__31238__$1 = cljs.core.next.call(null,seq__31238);
var params = first__31239;
var body = seq__31238__$1;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,params),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (vec__31237,seq__31238,first__31239,seq__31238__$1,params,body){
return (function (p1__31235_SHARP_){
return fipp.visit.visit.call(null,p,p1__31235_SHARP_);
});})(vec__31237,seq__31238,first__31239,seq__31238__$1,params,body))
,body)));
});
fipp.clojure.pretty_defn = (function fipp$clojure$pretty_defn(p,p__31242){
var vec__31243 = p__31242;
var seq__31244 = cljs.core.seq.call(null,vec__31243);
var first__31245 = cljs.core.first.call(null,seq__31244);
var seq__31244__$1 = cljs.core.next.call(null,seq__31244);
var head = first__31245;
var first__31245__$1 = cljs.core.first.call(null,seq__31244__$1);
var seq__31244__$2 = cljs.core.next.call(null,seq__31244__$1);
var fn_name = first__31245__$1;
var more = seq__31244__$2;
var vec__31246 = fipp.clojure.maybe_a.call(null,cljs.core.string_QMARK_,more);
var docstring = cljs.core.nth.call(null,vec__31246,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__31246,(1),null);
var vec__31249 = fipp.clojure.maybe_a.call(null,cljs.core.map_QMARK_,more__$1);
var attr_map = cljs.core.nth.call(null,vec__31249,(0),null);
var more__$2 = cljs.core.nth.call(null,vec__31249,(1),null);
var vec__31252 = fipp.clojure.maybe_a.call(null,cljs.core.vector_QMARK_,more__$2);
var params = cljs.core.nth.call(null,vec__31252,(0),null);
var body = cljs.core.nth.call(null,vec__31252,(1),null);
var params_on_first_line_QMARK_ = (function (){var and__4036__auto__ = params;
if(cljs.core.truth_(and__4036__auto__)){
return (((docstring == null)) && ((attr_map == null)));
} else {
return and__4036__auto__;
}
})();
var params_after_attr_map_QMARK_ = (function (){var and__4036__auto__ = params;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,params_on_first_line_QMARK_);
} else {
return and__4036__auto__;
}
})();
return fipp.clojure.list_group.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,fn_name)], null),(cljs.core.truth_(params_on_first_line_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",fipp.visit.visit.call(null,p,params)], null):null)),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,(cljs.core.truth_(docstring)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,docstring)], null):null),(cljs.core.truth_(attr_map)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,attr_map)], null):null),(cljs.core.truth_(params_after_attr_map_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,params)], null):null),(cljs.core.truth_(body)?cljs.core.map.call(null,((function (vec__31246,docstring,more__$1,vec__31249,attr_map,more__$2,vec__31252,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__31243,seq__31244,first__31245,seq__31244__$1,head,first__31245__$1,seq__31244__$2,fn_name,more){
return (function (p1__31240_SHARP_){
return fipp.visit.visit.call(null,p,p1__31240_SHARP_);
});})(vec__31246,docstring,more__$1,vec__31249,attr_map,more__$2,vec__31252,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__31243,seq__31244,first__31245,seq__31244__$1,head,first__31245__$1,seq__31244__$2,fn_name,more))
,body):cljs.core.map.call(null,((function (vec__31246,docstring,more__$1,vec__31249,attr_map,more__$2,vec__31252,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__31243,seq__31244,first__31245,seq__31244__$1,head,first__31245__$1,seq__31244__$2,fn_name,more){
return (function (p1__31241_SHARP_){
return fipp.clojure.pretty_method.call(null,p,p1__31241_SHARP_);
});})(vec__31246,docstring,more__$1,vec__31249,attr_map,more__$2,vec__31252,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__31243,seq__31244,first__31245,seq__31244__$1,head,first__31245__$1,seq__31244__$2,fn_name,more))
,more__$2)))));
});
fipp.clojure.pretty_fn = (function fipp$clojure$pretty_fn(p,p__31257){
var vec__31258 = p__31257;
var seq__31259 = cljs.core.seq.call(null,vec__31258);
var first__31260 = cljs.core.first.call(null,seq__31259);
var seq__31259__$1 = cljs.core.next.call(null,seq__31259);
var head = first__31260;
var more = seq__31259__$1;
var vec__31261 = fipp.clojure.maybe_a.call(null,cljs.core.symbol_QMARK_,more);
var fn_name = cljs.core.nth.call(null,vec__31261,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__31261,(1),null);
var vec__31264 = fipp.clojure.maybe_a.call(null,cljs.core.vector_QMARK_,more__$1);
var params = cljs.core.nth.call(null,vec__31264,(0),null);
var body = cljs.core.nth.call(null,vec__31264,(1),null);
return fipp.clojure.list_group.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,head)], null),(cljs.core.truth_(fn_name)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",fipp.visit.visit.call(null,p,fn_name)], null):null),(cljs.core.truth_(params)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",fipp.visit.visit.call(null,p,params)], null):null)),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,(cljs.core.truth_(body)?cljs.core.map.call(null,((function (vec__31261,fn_name,more__$1,vec__31264,params,body,vec__31258,seq__31259,first__31260,seq__31259__$1,head,more){
return (function (p1__31255_SHARP_){
return fipp.visit.visit.call(null,p,p1__31255_SHARP_);
});})(vec__31261,fn_name,more__$1,vec__31264,params,body,vec__31258,seq__31259,first__31260,seq__31259__$1,head,more))
,body):cljs.core.map.call(null,((function (vec__31261,fn_name,more__$1,vec__31264,params,body,vec__31258,seq__31259,first__31260,seq__31259__$1,head,more){
return (function (p1__31256_SHARP_){
return fipp.clojure.pretty_method.call(null,p,p1__31256_SHARP_);
});})(vec__31261,fn_name,more__$1,vec__31264,params,body,vec__31258,seq__31259,first__31260,seq__31259__$1,head,more))
,more__$1))));
});
fipp.clojure.pretty_fn_STAR_ = (function fipp$clojure$pretty_fn_STAR_(p,p__31270){
var vec__31271 = p__31270;
var _ = cljs.core.nth.call(null,vec__31271,(0),null);
var params = cljs.core.nth.call(null,vec__31271,(1),null);
var body = cljs.core.nth.call(null,vec__31271,(2),null);
var form = vec__31271;
if(((cljs.core.vector_QMARK_.call(null,params)) && (cljs.core.seq_QMARK_.call(null,body)))){
var vec__31274 = cljs.core.split_with.call(null,((function (vec__31271,_,params,body,form){
return (function (p1__31267_SHARP_){
return cljs.core.not_EQ_.call(null,p1__31267_SHARP_,new cljs.core.Symbol(null,"&","&",-2144855648,null));
});})(vec__31271,_,params,body,form))
,params);
var inits = cljs.core.nth.call(null,vec__31274,(0),null);
var rests = cljs.core.nth.call(null,vec__31274,(1),null);
var params_STAR_ = cljs.core.merge.call(null,((cljs.core._EQ_.call(null,cljs.core.count.call(null,inits),(1)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,inits),new cljs.core.Symbol(null,"%","%",-950237169,null)]):cljs.core.zipmap.call(null,inits,cljs.core.map.call(null,((function (vec__31274,inits,rests,vec__31271,_,params,body,form){
return (function (p1__31268_SHARP_){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("%"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((p1__31268_SHARP_ + (1)))].join(''));
});})(vec__31274,inits,rests,vec__31271,_,params,body,form))
,cljs.core.range.call(null)))),((cljs.core.seq.call(null,rests))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.second.call(null,rests),new cljs.core.Symbol(null,"%&","%&",-728707069,null)]):null));
var body_STAR_ = clojure.walk.prewalk_replace.call(null,params_STAR_,body);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),"#(",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),(2),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (vec__31274,inits,rests,params_STAR_,body_STAR_,vec__31271,_,params,body,form){
return (function (p1__31269_SHARP_){
return fipp.visit.visit.call(null,p,p1__31269_SHARP_);
});})(vec__31274,inits,rests,params_STAR_,body_STAR_,vec__31271,_,params,body,form))
,body_STAR_))], null),")"], null);
} else {
return fipp.clojure.pretty_fn.call(null,p,form);
}
});
fipp.clojure.pretty_libspec = (function fipp$clojure$pretty_libspec(p,p__31278){
var vec__31279 = p__31278;
var seq__31280 = cljs.core.seq.call(null,vec__31279);
var first__31281 = cljs.core.first.call(null,seq__31280);
var seq__31280__$1 = cljs.core.next.call(null,seq__31280);
var head = first__31281;
var clauses = seq__31280__$1;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (vec__31279,seq__31280,first__31281,seq__31280__$1,head,clauses){
return (function (p1__31277_SHARP_){
return fipp.visit.visit.call(null,p,p1__31277_SHARP_);
});})(vec__31279,seq__31280,first__31281,seq__31280__$1,head,clauses))
,clauses))], null));
});
fipp.clojure.pretty_ns = (function fipp$clojure$pretty_ns(p,p__31283){
var vec__31284 = p__31283;
var seq__31285 = cljs.core.seq.call(null,vec__31284);
var first__31286 = cljs.core.first.call(null,seq__31285);
var seq__31285__$1 = cljs.core.next.call(null,seq__31285);
var head = first__31286;
var first__31286__$1 = cljs.core.first.call(null,seq__31285__$1);
var seq__31285__$2 = cljs.core.next.call(null,seq__31285__$1);
var ns_sym = first__31286__$1;
var more = seq__31285__$2;
var vec__31287 = fipp.clojure.maybe_a.call(null,cljs.core.string_QMARK_,more);
var docstring = cljs.core.nth.call(null,vec__31287,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__31287,(1),null);
var vec__31290 = fipp.clojure.maybe_a.call(null,cljs.core.map_QMARK_,more__$1);
var attr_map = cljs.core.nth.call(null,vec__31290,(0),null);
var specs = cljs.core.nth.call(null,vec__31290,(1),null);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,ns_sym),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,(cljs.core.truth_(docstring)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,docstring)], null):null),(cljs.core.truth_(attr_map)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,attr_map)], null):null),cljs.core.map.call(null,((function (vec__31287,docstring,more__$1,vec__31290,attr_map,specs,vec__31284,seq__31285,first__31286,seq__31285__$1,head,first__31286__$1,seq__31285__$2,ns_sym,more){
return (function (p1__31282_SHARP_){
return fipp.clojure.pretty_libspec.call(null,p,p1__31282_SHARP_);
});})(vec__31287,docstring,more__$1,vec__31290,attr_map,specs,vec__31284,seq__31285,first__31286,seq__31285__$1,head,first__31286__$1,seq__31285__$2,ns_sym,more))
,specs))));
});
fipp.clojure.pretty_quote = (function fipp$clojure$pretty_quote(p,p__31293){
var vec__31294 = p__31293;
var macro = cljs.core.nth.call(null,vec__31294,(0),null);
var arg = cljs.core.nth.call(null,vec__31294,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__31297 = cljs.core.keyword.call(null,cljs.core.name.call(null,macro));
var G__31297__$1 = (((G__31297 instanceof cljs.core.Keyword))?G__31297.fqn:null);
switch (G__31297__$1) {
case "deref":
return "@";

break;
case "quote":
return "'";

break;
case "unquote":
return "~";

break;
case "var":
return "#'";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31297__$1)].join('')));

}
})(),fipp.visit.visit.call(null,p,arg)], null);
});
fipp.clojure.pretty_bindings = (function fipp$clojure$pretty_bindings(p,bvec){
var kvps = (function (){var iter__4434__auto__ = (function fipp$clojure$pretty_bindings_$_iter__31299(s__31300){
return (new cljs.core.LazySeq(null,(function (){
var s__31300__$1 = s__31300;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__31300__$1);
if(temp__5720__auto__){
var s__31300__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31300__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__31300__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__31302 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__31301 = (0);
while(true){
if((i__31301 < size__4433__auto__)){
var vec__31303 = cljs.core._nth.call(null,c__4432__auto__,i__31301);
var k = cljs.core.nth.call(null,vec__31303,(0),null);
var v = cljs.core.nth.call(null,vec__31303,(1),null);
cljs.core.chunk_append.call(null,b__31302,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),fipp.visit.visit.call(null,p,k)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),fipp.visit.visit.call(null,p,v)], null)], null));

var G__31309 = (i__31301 + (1));
i__31301 = G__31309;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31302),fipp$clojure$pretty_bindings_$_iter__31299.call(null,cljs.core.chunk_rest.call(null,s__31300__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31302),null);
}
} else {
var vec__31306 = cljs.core.first.call(null,s__31300__$2);
var k = cljs.core.nth.call(null,vec__31306,(0),null);
var v = cljs.core.nth.call(null,vec__31306,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),fipp.visit.visit.call(null,p,k)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),fipp.visit.visit.call(null,p,v)], null)], null),fipp$clojure$pretty_bindings_$_iter__31299.call(null,cljs.core.rest.call(null,s__31300__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__.call(null,cljs.core.partition.call(null,(2),bvec));
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),"[",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),", "], null),kvps)], null),"]"], null);
});
fipp.clojure.pretty_let = (function fipp$clojure$pretty_let(p,p__31311){
var vec__31312 = p__31311;
var seq__31313 = cljs.core.seq.call(null,vec__31312);
var first__31314 = cljs.core.first.call(null,seq__31313);
var seq__31313__$1 = cljs.core.next.call(null,seq__31313);
var head = first__31314;
var first__31314__$1 = cljs.core.first.call(null,seq__31313__$1);
var seq__31313__$2 = cljs.core.next.call(null,seq__31313__$1);
var bvec = first__31314__$1;
var body = seq__31313__$2;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.clojure.pretty_bindings.call(null,p,bvec),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (vec__31312,seq__31313,first__31314,seq__31313__$1,head,first__31314__$1,seq__31313__$2,bvec,body){
return (function (p1__31310_SHARP_){
return fipp.visit.visit.call(null,p,p1__31310_SHARP_);
});})(vec__31312,seq__31313,first__31314,seq__31313__$1,head,first__31314__$1,seq__31313__$2,bvec,body))
,body)));
});
fipp.clojure.pretty_impls = (function fipp$clojure$pretty_impls(p,opts_PLUS_specs){
return fipp.clojure.block.call(null,cljs.core.map.call(null,(function (p1__31315_SHARP_){
return fipp.visit.visit.call(null,p,p1__31315_SHARP_);
}),opts_PLUS_specs));
});
fipp.clojure.pretty_type = (function fipp$clojure$pretty_type(p,p__31316){
var vec__31317 = p__31316;
var seq__31318 = cljs.core.seq.call(null,vec__31317);
var first__31319 = cljs.core.first.call(null,seq__31318);
var seq__31318__$1 = cljs.core.next.call(null,seq__31318);
var head = first__31319;
var first__31319__$1 = cljs.core.first.call(null,seq__31318__$1);
var seq__31318__$2 = cljs.core.next.call(null,seq__31318__$1);
var fields = first__31319__$1;
var opts_PLUS_specs = seq__31318__$2;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,fields),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.pretty_impls.call(null,p,opts_PLUS_specs));
});
fipp.clojure.pretty_reify = (function fipp$clojure$pretty_reify(p,p__31320){
var vec__31321 = p__31320;
var seq__31322 = cljs.core.seq.call(null,vec__31321);
var first__31323 = cljs.core.first.call(null,seq__31322);
var seq__31322__$1 = cljs.core.next.call(null,seq__31322);
var head = first__31323;
var opts_PLUS_specs = seq__31322__$1;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.pretty_impls.call(null,p,opts_PLUS_specs));
});
fipp.clojure.build_symbol_map = (function fipp$clojure$build_symbol_map(dispatch){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4434__auto__ = (function fipp$clojure$build_symbol_map_$_iter__31324(s__31325){
return (new cljs.core.LazySeq(null,(function (){
var s__31325__$1 = s__31325;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__31325__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var vec__31332 = cljs.core.first.call(null,xs__6277__auto__);
var pretty_fn = cljs.core.nth.call(null,vec__31332,(0),null);
var syms = cljs.core.nth.call(null,vec__31332,(1),null);
var iterys__4430__auto__ = ((function (s__31325__$1,vec__31332,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__){
return (function fipp$clojure$build_symbol_map_$_iter__31324_$_iter__31326(s__31327){
return (new cljs.core.LazySeq(null,((function (s__31325__$1,vec__31332,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__31327__$1 = s__31327;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__31327__$1);
if(temp__5720__auto____$1){
var xs__6277__auto____$1 = temp__5720__auto____$1;
var sym = cljs.core.first.call(null,xs__6277__auto____$1);
var iterys__4430__auto__ = ((function (s__31327__$1,s__31325__$1,sym,xs__6277__auto____$1,temp__5720__auto____$1,vec__31332,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__){
return (function fipp$clojure$build_symbol_map_$_iter__31324_$_iter__31326_$_iter__31328(s__31329){
return (new cljs.core.LazySeq(null,((function (s__31327__$1,s__31325__$1,sym,xs__6277__auto____$1,temp__5720__auto____$1,vec__31332,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__31329__$1 = s__31329;
while(true){
var temp__5720__auto____$2 = cljs.core.seq.call(null,s__31329__$1);
if(temp__5720__auto____$2){
var s__31329__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31329__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__31329__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__31331 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__31330 = (0);
while(true){
if((i__31330 < size__4433__auto__)){
var sym__$1 = cljs.core._nth.call(null,c__4432__auto__,i__31330);
cljs.core.chunk_append.call(null,b__31331,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,pretty_fn], null));

var G__31335 = (i__31330 + (1));
i__31330 = G__31335;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31331),fipp$clojure$build_symbol_map_$_iter__31324_$_iter__31326_$_iter__31328.call(null,cljs.core.chunk_rest.call(null,s__31329__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31331),null);
}
} else {
var sym__$1 = cljs.core.first.call(null,s__31329__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,pretty_fn], null),fipp$clojure$build_symbol_map_$_iter__31324_$_iter__31326_$_iter__31328.call(null,cljs.core.rest.call(null,s__31329__$2)));
}
} else {
return null;
}
break;
}
});})(s__31327__$1,s__31325__$1,sym,xs__6277__auto____$1,temp__5720__auto____$1,vec__31332,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__31327__$1,s__31325__$1,sym,xs__6277__auto____$1,temp__5720__auto____$1,vec__31332,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__))
;
var fs__4431__auto__ = cljs.core.seq.call(null,iterys__4430__auto__.call(null,cljs.core.cons.call(null,sym,((cljs.core.special_symbol_QMARK_.call(null,sym))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,"clojure.core",cljs.core.name.call(null,sym)),cljs.core.symbol.call(null,"cljs.core",cljs.core.name.call(null,sym))], null)))));
if(fs__4431__auto__){
return cljs.core.concat.call(null,fs__4431__auto__,fipp$clojure$build_symbol_map_$_iter__31324_$_iter__31326.call(null,cljs.core.rest.call(null,s__31327__$1)));
} else {
var G__31336 = cljs.core.rest.call(null,s__31327__$1);
s__31327__$1 = G__31336;
continue;
}
} else {
return null;
}
break;
}
});})(s__31325__$1,vec__31332,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__31325__$1,vec__31332,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__))
;
var fs__4431__auto__ = cljs.core.seq.call(null,iterys__4430__auto__.call(null,syms));
if(fs__4431__auto__){
return cljs.core.concat.call(null,fs__4431__auto__,fipp$clojure$build_symbol_map_$_iter__31324.call(null,cljs.core.rest.call(null,s__31325__$1)));
} else {
var G__31337 = cljs.core.rest.call(null,s__31325__$1);
s__31325__$1 = G__31337;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__.call(null,dispatch);
})());
});
fipp.clojure.default_symbols = fipp.clojure.build_symbol_map.call(null,cljs.core.PersistentHashMap.fromArrays([fipp.clojure.pretty_fn_STAR_,fipp.clojure.pretty_condp,fipp.clojure.pretty_quote,fipp.clojure.pretty_cond,fipp.clojure.pretty_fn,fipp.clojure.pretty_arrow,fipp.clojure.pretty_reify,fipp.clojure.pretty_let,fipp.clojure.pretty_type,fipp.clojure.pretty_if,fipp.clojure.pretty_defn,fipp.clojure.pretty_ns,fipp.clojure.pretty_case],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn*","fn*",-752876845,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"condp","condp",1054325175,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"deref","deref",1494944732,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"unquote","unquote",-1004694737,null),new cljs.core.Symbol(null,"var","var",870848730,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond","cond",1606708055,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Symbol(null,"..","..",-300507420,null),new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"->>","->>",-1874332161,null),new cljs.core.Symbol(null,"and","and",668631710,null),new cljs.core.Symbol(null,"doto","doto",1252536074,null),new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"some->","some->",-1011172200,null),new cljs.core.Symbol(null,"some->>","some->>",-1499987794,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reify","reify",1885539699,null)], null),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Symbol(null,"doseq","doseq",221164135,null),new cljs.core.Symbol(null,"dotimes","dotimes",-818708397,null),new cljs.core.Symbol(null,"for","for",316745208,null),new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.Symbol(null,"if-some","if-some",1960677609,null),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Symbol(null,"let*","let*",1920721458,null),new cljs.core.Symbol(null,"loop","loop",1244978678,null),new cljs.core.Symbol(null,"loop*","loop*",615029416,null),new cljs.core.Symbol(null,"when-first","when-first",821699168,null),new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.Symbol(null,"when-some","when-some",1700415903,null),new cljs.core.Symbol(null,"with-local-vars","with-local-vars",837642072,null),new cljs.core.Symbol(null,"with-open","with-open",172119667,null),new cljs.core.Symbol(null,"with-redefs","with-redefs",-1143728263,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"deftype","deftype",1980826088,null),new cljs.core.Symbol(null,"defrecord","defrecord",273038109,null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"defonce","defonce",-1681484013,null),new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"if-not","if-not",-265415609,null),new cljs.core.Symbol(null,"when","when",1064114221,null),new cljs.core.Symbol(null,"when-not","when-not",-1223136340,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"defmacro","defmacro",2054157304,null),new cljs.core.Symbol(null,"defmulti","defmulti",1936112154,null),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"defn-","defn-",1097765044,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ns","ns",2082130287,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"case","case",-1510733573,null),new cljs.core.Symbol(null,"cond->","cond->",561741875,null),new cljs.core.Symbol(null,"cond->>","cond->>",348844960,null)], null)]));
fipp.clojure.pprint = (function fipp$clojure$pprint(var_args){
var G__31339 = arguments.length;
switch (G__31339) {
case 1:
return fipp.clojure.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fipp.clojure.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fipp.clojure.pprint.cljs$core$IFn$_invoke$arity$1 = (function (x){
return fipp.clojure.pprint.call(null,x,cljs.core.PersistentArrayMap.EMPTY);
});

fipp.clojure.pprint.cljs$core$IFn$_invoke$arity$2 = (function (x,options){
return fipp.edn.pprint.call(null,x,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbols","symbols",1211743),fipp.clojure.default_symbols], null),options));
});

fipp.clojure.pprint.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=clojure.js.map
