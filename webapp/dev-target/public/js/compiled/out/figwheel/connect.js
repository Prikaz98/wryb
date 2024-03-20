// Compiled by ClojureScript 1.10.439 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
figwheel.connect.start = (function figwheel$connect$start(){
var config = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__37969__delegate = function (x__37953__auto__){
if(cljs.core.truth_(wryb_ui.system.reset)){
return cljs.core.apply.call(null,wryb_ui.system.reset,x__37953__auto__);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),["Figwheel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602))," hook '",cljs.core.str.cljs$core$IFn$_invoke$arity$1("wryb-ui.system/reset"),"' is missing"].join(''));
}
};
var G__37969 = function (var_args){
var x__37953__auto__ = null;
if (arguments.length > 0) {
var G__37970__i = 0, G__37970__a = new Array(arguments.length -  0);
while (G__37970__i < G__37970__a.length) {G__37970__a[G__37970__i] = arguments[G__37970__i + 0]; ++G__37970__i;}
  x__37953__auto__ = new cljs.core.IndexedSeq(G__37970__a,0,null);
} 
return G__37969__delegate.call(this,x__37953__auto__);};
G__37969.cljs$lang$maxFixedArity = 0;
G__37969.cljs$lang$applyTo = (function (arglist__37971){
var x__37953__auto__ = cljs.core.seq(arglist__37971);
return G__37969__delegate(x__37953__auto__);
});
G__37969.cljs$core$IFn$_invoke$arity$variadic = G__37969__delegate;
return G__37969;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"app",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null);
figwheel.client.start.call(null,config);

if(cljs.core.truth_(new cljs.core.Keyword(null,"devcards","devcards",365747130).cljs$core$IFn$_invoke$arity$1(config))){
return devcards.core.start_devcard_ui_BANG__STAR_();
} else {
return null;
}
});
goog.exportSymbol('figwheel.connect.start', figwheel.connect.start);

//# sourceMappingURL=connect.js.map?rel=1710956806158
