// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('wryb_ui.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
wryb_ui.util.highlights_row = (function wryb_ui$util$highlights_row(id,default_class_name,selected_class_name){
var seq__30404_30408 = cljs.core.seq(Array.from(document.getElementsByClassName(selected_class_name)));
var chunk__30405_30409 = null;
var count__30406_30410 = (0);
var i__30407_30411 = (0);
while(true){
if((i__30407_30411 < count__30406_30410)){
var element_30412 = chunk__30405_30409.cljs$core$IIndexed$_nth$arity$2(null,i__30407_30411);
element_30412.setAttribute("class",default_class_name);


var G__30413 = seq__30404_30408;
var G__30414 = chunk__30405_30409;
var G__30415 = count__30406_30410;
var G__30416 = (i__30407_30411 + (1));
seq__30404_30408 = G__30413;
chunk__30405_30409 = G__30414;
count__30406_30410 = G__30415;
i__30407_30411 = G__30416;
continue;
} else {
var temp__5720__auto___30417 = cljs.core.seq(seq__30404_30408);
if(temp__5720__auto___30417){
var seq__30404_30418__$1 = temp__5720__auto___30417;
if(cljs.core.chunked_seq_QMARK_(seq__30404_30418__$1)){
var c__4461__auto___30419 = cljs.core.chunk_first(seq__30404_30418__$1);
var G__30420 = cljs.core.chunk_rest(seq__30404_30418__$1);
var G__30421 = c__4461__auto___30419;
var G__30422 = cljs.core.count(c__4461__auto___30419);
var G__30423 = (0);
seq__30404_30408 = G__30420;
chunk__30405_30409 = G__30421;
count__30406_30410 = G__30422;
i__30407_30411 = G__30423;
continue;
} else {
var element_30424 = cljs.core.first(seq__30404_30418__$1);
element_30424.setAttribute("class",default_class_name);


var G__30425 = cljs.core.next(seq__30404_30418__$1);
var G__30426 = null;
var G__30427 = (0);
var G__30428 = (0);
seq__30404_30408 = G__30425;
chunk__30405_30409 = G__30426;
count__30406_30410 = G__30427;
i__30407_30411 = G__30428;
continue;
}
} else {
}
}
break;
}

return document.getElementById(id).setAttribute("class",selected_class_name);
});
