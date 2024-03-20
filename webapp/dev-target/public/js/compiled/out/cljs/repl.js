// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37189){
var map__37190 = p__37189;
var map__37190__$1 = (((((!((map__37190 == null))))?(((((map__37190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37190.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37190):map__37190);
var m = map__37190__$1;
var n = cljs.core.get.call(null,map__37190__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__37190__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37192_37214 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37193_37215 = null;
var count__37194_37216 = (0);
var i__37195_37217 = (0);
while(true){
if((i__37195_37217 < count__37194_37216)){
var f_37218 = cljs.core._nth.call(null,chunk__37193_37215,i__37195_37217);
cljs.core.println.call(null,"  ",f_37218);


var G__37219 = seq__37192_37214;
var G__37220 = chunk__37193_37215;
var G__37221 = count__37194_37216;
var G__37222 = (i__37195_37217 + (1));
seq__37192_37214 = G__37219;
chunk__37193_37215 = G__37220;
count__37194_37216 = G__37221;
i__37195_37217 = G__37222;
continue;
} else {
var temp__5720__auto___37223 = cljs.core.seq.call(null,seq__37192_37214);
if(temp__5720__auto___37223){
var seq__37192_37224__$1 = temp__5720__auto___37223;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37192_37224__$1)){
var c__4461__auto___37225 = cljs.core.chunk_first.call(null,seq__37192_37224__$1);
var G__37226 = cljs.core.chunk_rest.call(null,seq__37192_37224__$1);
var G__37227 = c__4461__auto___37225;
var G__37228 = cljs.core.count.call(null,c__4461__auto___37225);
var G__37229 = (0);
seq__37192_37214 = G__37226;
chunk__37193_37215 = G__37227;
count__37194_37216 = G__37228;
i__37195_37217 = G__37229;
continue;
} else {
var f_37230 = cljs.core.first.call(null,seq__37192_37224__$1);
cljs.core.println.call(null,"  ",f_37230);


var G__37231 = cljs.core.next.call(null,seq__37192_37224__$1);
var G__37232 = null;
var G__37233 = (0);
var G__37234 = (0);
seq__37192_37214 = G__37231;
chunk__37193_37215 = G__37232;
count__37194_37216 = G__37233;
i__37195_37217 = G__37234;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37235 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_37235);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_37235)))?cljs.core.second.call(null,arglists_37235):arglists_37235));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37196_37236 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37197_37237 = null;
var count__37198_37238 = (0);
var i__37199_37239 = (0);
while(true){
if((i__37199_37239 < count__37198_37238)){
var vec__37200_37240 = cljs.core._nth.call(null,chunk__37197_37237,i__37199_37239);
var name_37241 = cljs.core.nth.call(null,vec__37200_37240,(0),null);
var map__37203_37242 = cljs.core.nth.call(null,vec__37200_37240,(1),null);
var map__37203_37243__$1 = (((((!((map__37203_37242 == null))))?(((((map__37203_37242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37203_37242.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37203_37242):map__37203_37242);
var doc_37244 = cljs.core.get.call(null,map__37203_37243__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37245 = cljs.core.get.call(null,map__37203_37243__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37241);

cljs.core.println.call(null," ",arglists_37245);

if(cljs.core.truth_(doc_37244)){
cljs.core.println.call(null," ",doc_37244);
} else {
}


var G__37246 = seq__37196_37236;
var G__37247 = chunk__37197_37237;
var G__37248 = count__37198_37238;
var G__37249 = (i__37199_37239 + (1));
seq__37196_37236 = G__37246;
chunk__37197_37237 = G__37247;
count__37198_37238 = G__37248;
i__37199_37239 = G__37249;
continue;
} else {
var temp__5720__auto___37250 = cljs.core.seq.call(null,seq__37196_37236);
if(temp__5720__auto___37250){
var seq__37196_37251__$1 = temp__5720__auto___37250;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37196_37251__$1)){
var c__4461__auto___37252 = cljs.core.chunk_first.call(null,seq__37196_37251__$1);
var G__37253 = cljs.core.chunk_rest.call(null,seq__37196_37251__$1);
var G__37254 = c__4461__auto___37252;
var G__37255 = cljs.core.count.call(null,c__4461__auto___37252);
var G__37256 = (0);
seq__37196_37236 = G__37253;
chunk__37197_37237 = G__37254;
count__37198_37238 = G__37255;
i__37199_37239 = G__37256;
continue;
} else {
var vec__37205_37257 = cljs.core.first.call(null,seq__37196_37251__$1);
var name_37258 = cljs.core.nth.call(null,vec__37205_37257,(0),null);
var map__37208_37259 = cljs.core.nth.call(null,vec__37205_37257,(1),null);
var map__37208_37260__$1 = (((((!((map__37208_37259 == null))))?(((((map__37208_37259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37208_37259.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37208_37259):map__37208_37259);
var doc_37261 = cljs.core.get.call(null,map__37208_37260__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37262 = cljs.core.get.call(null,map__37208_37260__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37258);

cljs.core.println.call(null," ",arglists_37262);

if(cljs.core.truth_(doc_37261)){
cljs.core.println.call(null," ",doc_37261);
} else {
}


var G__37263 = cljs.core.next.call(null,seq__37196_37251__$1);
var G__37264 = null;
var G__37265 = (0);
var G__37266 = (0);
seq__37196_37236 = G__37263;
chunk__37197_37237 = G__37264;
count__37198_37238 = G__37265;
i__37199_37239 = G__37266;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__37210 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37211 = null;
var count__37212 = (0);
var i__37213 = (0);
while(true){
if((i__37213 < count__37212)){
var role = cljs.core._nth.call(null,chunk__37211,i__37213);
var temp__5720__auto___37267__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___37267__$1)){
var spec_37268 = temp__5720__auto___37267__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37268));
} else {
}


var G__37269 = seq__37210;
var G__37270 = chunk__37211;
var G__37271 = count__37212;
var G__37272 = (i__37213 + (1));
seq__37210 = G__37269;
chunk__37211 = G__37270;
count__37212 = G__37271;
i__37213 = G__37272;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__37210);
if(temp__5720__auto____$1){
var seq__37210__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37210__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__37210__$1);
var G__37273 = cljs.core.chunk_rest.call(null,seq__37210__$1);
var G__37274 = c__4461__auto__;
var G__37275 = cljs.core.count.call(null,c__4461__auto__);
var G__37276 = (0);
seq__37210 = G__37273;
chunk__37211 = G__37274;
count__37212 = G__37275;
i__37213 = G__37276;
continue;
} else {
var role = cljs.core.first.call(null,seq__37210__$1);
var temp__5720__auto___37277__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___37277__$2)){
var spec_37278 = temp__5720__auto___37277__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37278));
} else {
}


var G__37279 = cljs.core.next.call(null,seq__37210__$1);
var G__37280 = null;
var G__37281 = (0);
var G__37282 = (0);
seq__37210 = G__37279;
chunk__37211 = G__37280;
count__37212 = G__37281;
i__37213 = G__37282;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1710956805477
