// Compiled by ClojureScript 1.10.439 {}
goog.provide('wryb_ui.util');
goog.require('cljs.core');
wryb_ui.util.highlights_row = (function wryb_ui$util$highlights_row(id,default_class_name,selected_class_name){
var seq__30569_30573 = cljs.core.seq.call(null,Array.from(document.getElementsByClassName(selected_class_name)));
var chunk__30570_30574 = null;
var count__30571_30575 = (0);
var i__30572_30576 = (0);
while(true){
if((i__30572_30576 < count__30571_30575)){
var element_30577 = cljs.core._nth.call(null,chunk__30570_30574,i__30572_30576);
element_30577.setAttribute("class",default_class_name);


var G__30578 = seq__30569_30573;
var G__30579 = chunk__30570_30574;
var G__30580 = count__30571_30575;
var G__30581 = (i__30572_30576 + (1));
seq__30569_30573 = G__30578;
chunk__30570_30574 = G__30579;
count__30571_30575 = G__30580;
i__30572_30576 = G__30581;
continue;
} else {
var temp__5720__auto___30582 = cljs.core.seq.call(null,seq__30569_30573);
if(temp__5720__auto___30582){
var seq__30569_30583__$1 = temp__5720__auto___30582;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30569_30583__$1)){
var c__4461__auto___30584 = cljs.core.chunk_first.call(null,seq__30569_30583__$1);
var G__30585 = cljs.core.chunk_rest.call(null,seq__30569_30583__$1);
var G__30586 = c__4461__auto___30584;
var G__30587 = cljs.core.count.call(null,c__4461__auto___30584);
var G__30588 = (0);
seq__30569_30573 = G__30585;
chunk__30570_30574 = G__30586;
count__30571_30575 = G__30587;
i__30572_30576 = G__30588;
continue;
} else {
var element_30589 = cljs.core.first.call(null,seq__30569_30583__$1);
element_30589.setAttribute("class",default_class_name);


var G__30590 = cljs.core.next.call(null,seq__30569_30583__$1);
var G__30591 = null;
var G__30592 = (0);
var G__30593 = (0);
seq__30569_30573 = G__30590;
chunk__30570_30574 = G__30591;
count__30571_30575 = G__30592;
i__30572_30576 = G__30593;
continue;
}
} else {
}
}
break;
}

return document.getElementById(id).setAttribute("class",selected_class_name);
});

//# sourceMappingURL=util.js.map?rel=1710956799218
