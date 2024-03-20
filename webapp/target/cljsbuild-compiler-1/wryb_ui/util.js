// Compiled by ClojureScript 1.10.439 {}
goog.provide('wryb_ui.util');
goog.require('cljs.core');
wryb_ui.util.highlights_row = (function wryb_ui$util$highlights_row(id,default_class_name,selected_class_name){
var seq__31545_31549 = cljs.core.seq.call(null,Array.from(document.getElementsByClassName(selected_class_name)));
var chunk__31546_31550 = null;
var count__31547_31551 = (0);
var i__31548_31552 = (0);
while(true){
if((i__31548_31552 < count__31547_31551)){
var element_31553 = cljs.core._nth.call(null,chunk__31546_31550,i__31548_31552);
element_31553.setAttribute("class",default_class_name);


var G__31554 = seq__31545_31549;
var G__31555 = chunk__31546_31550;
var G__31556 = count__31547_31551;
var G__31557 = (i__31548_31552 + (1));
seq__31545_31549 = G__31554;
chunk__31546_31550 = G__31555;
count__31547_31551 = G__31556;
i__31548_31552 = G__31557;
continue;
} else {
var temp__5720__auto___31558 = cljs.core.seq.call(null,seq__31545_31549);
if(temp__5720__auto___31558){
var seq__31545_31559__$1 = temp__5720__auto___31558;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31545_31559__$1)){
var c__4461__auto___31560 = cljs.core.chunk_first.call(null,seq__31545_31559__$1);
var G__31561 = cljs.core.chunk_rest.call(null,seq__31545_31559__$1);
var G__31562 = c__4461__auto___31560;
var G__31563 = cljs.core.count.call(null,c__4461__auto___31560);
var G__31564 = (0);
seq__31545_31549 = G__31561;
chunk__31546_31550 = G__31562;
count__31547_31551 = G__31563;
i__31548_31552 = G__31564;
continue;
} else {
var element_31565 = cljs.core.first.call(null,seq__31545_31559__$1);
element_31565.setAttribute("class",default_class_name);


var G__31566 = cljs.core.next.call(null,seq__31545_31559__$1);
var G__31567 = null;
var G__31568 = (0);
var G__31569 = (0);
seq__31545_31549 = G__31566;
chunk__31546_31550 = G__31567;
count__31547_31551 = G__31568;
i__31548_31552 = G__31569;
continue;
}
} else {
}
}
break;
}

return document.getElementById(id).setAttribute("class",selected_class_name);
});

//# sourceMappingURL=util.js.map
