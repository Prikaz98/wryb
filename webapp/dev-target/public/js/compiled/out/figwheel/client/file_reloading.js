// Compiled by ClojureScript 1.10.439 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4047__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4047__auto__){
return or__4047__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4047__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__35726_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__35726_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__35727 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__35728 = null;
var count__35729 = (0);
var i__35730 = (0);
while(true){
if((i__35730 < count__35729)){
var n = cljs.core._nth.call(null,chunk__35728,i__35730);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__35731 = seq__35727;
var G__35732 = chunk__35728;
var G__35733 = count__35729;
var G__35734 = (i__35730 + (1));
seq__35727 = G__35731;
chunk__35728 = G__35732;
count__35729 = G__35733;
i__35730 = G__35734;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__35727);
if(temp__5720__auto__){
var seq__35727__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35727__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__35727__$1);
var G__35735 = cljs.core.chunk_rest.call(null,seq__35727__$1);
var G__35736 = c__4461__auto__;
var G__35737 = cljs.core.count.call(null,c__4461__auto__);
var G__35738 = (0);
seq__35727 = G__35735;
chunk__35728 = G__35736;
count__35729 = G__35737;
i__35730 = G__35738;
continue;
} else {
var n = cljs.core.first.call(null,seq__35727__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__35739 = cljs.core.next.call(null,seq__35727__$1);
var G__35740 = null;
var G__35741 = (0);
var G__35742 = (0);
seq__35727 = G__35739;
chunk__35728 = G__35740;
count__35729 = G__35741;
i__35730 = G__35742;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__35743){
var vec__35744 = p__35743;
var _ = cljs.core.nth.call(null,vec__35744,(0),null);
var v = cljs.core.nth.call(null,vec__35744,(1),null);
var and__4036__auto__ = v;
if(cljs.core.truth_(and__4036__auto__)){
return v.call(null,dep);
} else {
return and__4036__auto__;
}
}),cljs.core.filter.call(null,(function (p__35747){
var vec__35748 = p__35747;
var k = cljs.core.nth.call(null,vec__35748,(0),null);
var v = cljs.core.nth.call(null,vec__35748,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__35760_35768 = cljs.core.seq.call(null,deps);
var chunk__35761_35769 = null;
var count__35762_35770 = (0);
var i__35763_35771 = (0);
while(true){
if((i__35763_35771 < count__35762_35770)){
var dep_35772 = cljs.core._nth.call(null,chunk__35761_35769,i__35763_35771);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_35772;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_35772));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_35772,(depth + (1)),state);
} else {
}


var G__35773 = seq__35760_35768;
var G__35774 = chunk__35761_35769;
var G__35775 = count__35762_35770;
var G__35776 = (i__35763_35771 + (1));
seq__35760_35768 = G__35773;
chunk__35761_35769 = G__35774;
count__35762_35770 = G__35775;
i__35763_35771 = G__35776;
continue;
} else {
var temp__5720__auto___35777 = cljs.core.seq.call(null,seq__35760_35768);
if(temp__5720__auto___35777){
var seq__35760_35778__$1 = temp__5720__auto___35777;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35760_35778__$1)){
var c__4461__auto___35779 = cljs.core.chunk_first.call(null,seq__35760_35778__$1);
var G__35780 = cljs.core.chunk_rest.call(null,seq__35760_35778__$1);
var G__35781 = c__4461__auto___35779;
var G__35782 = cljs.core.count.call(null,c__4461__auto___35779);
var G__35783 = (0);
seq__35760_35768 = G__35780;
chunk__35761_35769 = G__35781;
count__35762_35770 = G__35782;
i__35763_35771 = G__35783;
continue;
} else {
var dep_35784 = cljs.core.first.call(null,seq__35760_35778__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_35784;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_35784));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_35784,(depth + (1)),state);
} else {
}


var G__35785 = cljs.core.next.call(null,seq__35760_35778__$1);
var G__35786 = null;
var G__35787 = (0);
var G__35788 = (0);
seq__35760_35768 = G__35785;
chunk__35761_35769 = G__35786;
count__35762_35770 = G__35787;
i__35763_35771 = G__35788;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__35764){
var vec__35765 = p__35764;
var seq__35766 = cljs.core.seq.call(null,vec__35765);
var first__35767 = cljs.core.first.call(null,seq__35766);
var seq__35766__$1 = cljs.core.next.call(null,seq__35766);
var x = first__35767;
var xs = seq__35766__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__35765,seq__35766,first__35767,seq__35766__$1,x,xs,get_deps__$1){
return (function (p1__35751_SHARP_){
return clojure.set.difference.call(null,p1__35751_SHARP_,x);
});})(vec__35765,seq__35766,first__35767,seq__35766__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__35789 = cljs.core.seq.call(null,provides);
var chunk__35790 = null;
var count__35791 = (0);
var i__35792 = (0);
while(true){
if((i__35792 < count__35791)){
var prov = cljs.core._nth.call(null,chunk__35790,i__35792);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35793_35801 = cljs.core.seq.call(null,requires);
var chunk__35794_35802 = null;
var count__35795_35803 = (0);
var i__35796_35804 = (0);
while(true){
if((i__35796_35804 < count__35795_35803)){
var req_35805 = cljs.core._nth.call(null,chunk__35794_35802,i__35796_35804);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35805,prov);


var G__35806 = seq__35793_35801;
var G__35807 = chunk__35794_35802;
var G__35808 = count__35795_35803;
var G__35809 = (i__35796_35804 + (1));
seq__35793_35801 = G__35806;
chunk__35794_35802 = G__35807;
count__35795_35803 = G__35808;
i__35796_35804 = G__35809;
continue;
} else {
var temp__5720__auto___35810 = cljs.core.seq.call(null,seq__35793_35801);
if(temp__5720__auto___35810){
var seq__35793_35811__$1 = temp__5720__auto___35810;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35793_35811__$1)){
var c__4461__auto___35812 = cljs.core.chunk_first.call(null,seq__35793_35811__$1);
var G__35813 = cljs.core.chunk_rest.call(null,seq__35793_35811__$1);
var G__35814 = c__4461__auto___35812;
var G__35815 = cljs.core.count.call(null,c__4461__auto___35812);
var G__35816 = (0);
seq__35793_35801 = G__35813;
chunk__35794_35802 = G__35814;
count__35795_35803 = G__35815;
i__35796_35804 = G__35816;
continue;
} else {
var req_35817 = cljs.core.first.call(null,seq__35793_35811__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35817,prov);


var G__35818 = cljs.core.next.call(null,seq__35793_35811__$1);
var G__35819 = null;
var G__35820 = (0);
var G__35821 = (0);
seq__35793_35801 = G__35818;
chunk__35794_35802 = G__35819;
count__35795_35803 = G__35820;
i__35796_35804 = G__35821;
continue;
}
} else {
}
}
break;
}


var G__35822 = seq__35789;
var G__35823 = chunk__35790;
var G__35824 = count__35791;
var G__35825 = (i__35792 + (1));
seq__35789 = G__35822;
chunk__35790 = G__35823;
count__35791 = G__35824;
i__35792 = G__35825;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__35789);
if(temp__5720__auto__){
var seq__35789__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35789__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__35789__$1);
var G__35826 = cljs.core.chunk_rest.call(null,seq__35789__$1);
var G__35827 = c__4461__auto__;
var G__35828 = cljs.core.count.call(null,c__4461__auto__);
var G__35829 = (0);
seq__35789 = G__35826;
chunk__35790 = G__35827;
count__35791 = G__35828;
i__35792 = G__35829;
continue;
} else {
var prov = cljs.core.first.call(null,seq__35789__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35797_35830 = cljs.core.seq.call(null,requires);
var chunk__35798_35831 = null;
var count__35799_35832 = (0);
var i__35800_35833 = (0);
while(true){
if((i__35800_35833 < count__35799_35832)){
var req_35834 = cljs.core._nth.call(null,chunk__35798_35831,i__35800_35833);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35834,prov);


var G__35835 = seq__35797_35830;
var G__35836 = chunk__35798_35831;
var G__35837 = count__35799_35832;
var G__35838 = (i__35800_35833 + (1));
seq__35797_35830 = G__35835;
chunk__35798_35831 = G__35836;
count__35799_35832 = G__35837;
i__35800_35833 = G__35838;
continue;
} else {
var temp__5720__auto___35839__$1 = cljs.core.seq.call(null,seq__35797_35830);
if(temp__5720__auto___35839__$1){
var seq__35797_35840__$1 = temp__5720__auto___35839__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35797_35840__$1)){
var c__4461__auto___35841 = cljs.core.chunk_first.call(null,seq__35797_35840__$1);
var G__35842 = cljs.core.chunk_rest.call(null,seq__35797_35840__$1);
var G__35843 = c__4461__auto___35841;
var G__35844 = cljs.core.count.call(null,c__4461__auto___35841);
var G__35845 = (0);
seq__35797_35830 = G__35842;
chunk__35798_35831 = G__35843;
count__35799_35832 = G__35844;
i__35800_35833 = G__35845;
continue;
} else {
var req_35846 = cljs.core.first.call(null,seq__35797_35840__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35846,prov);


var G__35847 = cljs.core.next.call(null,seq__35797_35840__$1);
var G__35848 = null;
var G__35849 = (0);
var G__35850 = (0);
seq__35797_35830 = G__35847;
chunk__35798_35831 = G__35848;
count__35799_35832 = G__35849;
i__35800_35833 = G__35850;
continue;
}
} else {
}
}
break;
}


var G__35851 = cljs.core.next.call(null,seq__35789__$1);
var G__35852 = null;
var G__35853 = (0);
var G__35854 = (0);
seq__35789 = G__35851;
chunk__35790 = G__35852;
count__35791 = G__35853;
i__35792 = G__35854;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__35855_35859 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__35856_35860 = null;
var count__35857_35861 = (0);
var i__35858_35862 = (0);
while(true){
if((i__35858_35862 < count__35857_35861)){
var ns_35863 = cljs.core._nth.call(null,chunk__35856_35860,i__35858_35862);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35863);


var G__35864 = seq__35855_35859;
var G__35865 = chunk__35856_35860;
var G__35866 = count__35857_35861;
var G__35867 = (i__35858_35862 + (1));
seq__35855_35859 = G__35864;
chunk__35856_35860 = G__35865;
count__35857_35861 = G__35866;
i__35858_35862 = G__35867;
continue;
} else {
var temp__5720__auto___35868 = cljs.core.seq.call(null,seq__35855_35859);
if(temp__5720__auto___35868){
var seq__35855_35869__$1 = temp__5720__auto___35868;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35855_35869__$1)){
var c__4461__auto___35870 = cljs.core.chunk_first.call(null,seq__35855_35869__$1);
var G__35871 = cljs.core.chunk_rest.call(null,seq__35855_35869__$1);
var G__35872 = c__4461__auto___35870;
var G__35873 = cljs.core.count.call(null,c__4461__auto___35870);
var G__35874 = (0);
seq__35855_35859 = G__35871;
chunk__35856_35860 = G__35872;
count__35857_35861 = G__35873;
i__35858_35862 = G__35874;
continue;
} else {
var ns_35875 = cljs.core.first.call(null,seq__35855_35869__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35875);


var G__35876 = cljs.core.next.call(null,seq__35855_35869__$1);
var G__35877 = null;
var G__35878 = (0);
var G__35879 = (0);
seq__35855_35859 = G__35876;
chunk__35856_35860 = G__35877;
count__35857_35861 = G__35878;
i__35858_35862 = G__35879;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4047__auto__ = goog.require__;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__35880__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__35880 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35881__i = 0, G__35881__a = new Array(arguments.length -  0);
while (G__35881__i < G__35881__a.length) {G__35881__a[G__35881__i] = arguments[G__35881__i + 0]; ++G__35881__i;}
  args = new cljs.core.IndexedSeq(G__35881__a,0,null);
} 
return G__35880__delegate.call(this,args);};
G__35880.cljs$lang$maxFixedArity = 0;
G__35880.cljs$lang$applyTo = (function (arglist__35882){
var args = cljs.core.seq(arglist__35882);
return G__35880__delegate(args);
});
G__35880.cljs$core$IFn$_invoke$arity$variadic = G__35880__delegate;
return G__35880;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__35883_SHARP_,p2__35884_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35883_SHARP_)),p2__35884_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__35885_SHARP_,p2__35886_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35885_SHARP_),p2__35886_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__35887 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__35887.addCallback(((function (G__35887){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__35887))
);

G__35887.addErrback(((function (G__35887){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__35887))
);

return G__35887;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e35888){if((e35888 instanceof Error)){
var e = e35888;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35888;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e35889){if((e35889 instanceof Error)){
var e = e35889;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35889;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__35890 = cljs.core._EQ_;
var expr__35891 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__35890.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__35891))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__35890.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__35891))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__35890.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__35891))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__35890,expr__35891){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__35890,expr__35891))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__35893,callback){
var map__35894 = p__35893;
var map__35894__$1 = (((((!((map__35894 == null))))?(((((map__35894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35894.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35894):map__35894);
var file_msg = map__35894__$1;
var request_url = cljs.core.get.call(null,map__35894__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4047__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__35894,map__35894__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__35894,map__35894__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__32052__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32052__auto__){
return (function (){
var f__32053__auto__ = (function (){var switch__31957__auto__ = ((function (c__32052__auto__){
return (function (state_35932){
var state_val_35933 = (state_35932[(1)]);
if((state_val_35933 === (7))){
var inst_35928 = (state_35932[(2)]);
var state_35932__$1 = state_35932;
var statearr_35934_35960 = state_35932__$1;
(statearr_35934_35960[(2)] = inst_35928);

(statearr_35934_35960[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35933 === (1))){
var state_35932__$1 = state_35932;
var statearr_35935_35961 = state_35932__$1;
(statearr_35935_35961[(2)] = null);

(statearr_35935_35961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35933 === (4))){
var inst_35898 = (state_35932[(7)]);
var inst_35898__$1 = (state_35932[(2)]);
var state_35932__$1 = (function (){var statearr_35936 = state_35932;
(statearr_35936[(7)] = inst_35898__$1);

return statearr_35936;
})();
if(cljs.core.truth_(inst_35898__$1)){
var statearr_35937_35962 = state_35932__$1;
(statearr_35937_35962[(1)] = (5));

} else {
var statearr_35938_35963 = state_35932__$1;
(statearr_35938_35963[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35933 === (15))){
var inst_35913 = (state_35932[(8)]);
var inst_35911 = (state_35932[(9)]);
var inst_35915 = inst_35913.call(null,inst_35911);
var state_35932__$1 = state_35932;
var statearr_35939_35964 = state_35932__$1;
(statearr_35939_35964[(2)] = inst_35915);

(statearr_35939_35964[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35933 === (13))){
var inst_35922 = (state_35932[(2)]);
var state_35932__$1 = state_35932;
var statearr_35940_35965 = state_35932__$1;
(statearr_35940_35965[(2)] = inst_35922);

(statearr_35940_35965[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35933 === (6))){
var state_35932__$1 = state_35932;
var statearr_35941_35966 = state_35932__$1;
(statearr_35941_35966[(2)] = null);

(statearr_35941_35966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35933 === (17))){
var inst_35919 = (state_35932[(2)]);
var state_35932__$1 = state_35932;
var statearr_35942_35967 = state_35932__$1;
(statearr_35942_35967[(2)] = inst_35919);

(statearr_35942_35967[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35933 === (3))){
var inst_35930 = (state_35932[(2)]);
var state_35932__$1 = state_35932;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35932__$1,inst_35930);
} else {
if((state_val_35933 === (12))){
var state_35932__$1 = state_35932;
var statearr_35943_35968 = state_35932__$1;
(statearr_35943_35968[(2)] = null);

(statearr_35943_35968[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35933 === (2))){
var state_35932__$1 = state_35932;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35932__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_35933 === (11))){
var inst_35903 = (state_35932[(10)]);
var inst_35909 = figwheel.client.file_reloading.blocking_load.call(null,inst_35903);
var state_35932__$1 = state_35932;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35932__$1,(14),inst_35909);
} else {
if((state_val_35933 === (9))){
var inst_35903 = (state_35932[(10)]);
var state_35932__$1 = state_35932;
if(cljs.core.truth_(inst_35903)){
var statearr_35944_35969 = state_35932__$1;
(statearr_35944_35969[(1)] = (11));

} else {
var statearr_35945_35970 = state_35932__$1;
(statearr_35945_35970[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35933 === (5))){
var inst_35898 = (state_35932[(7)]);
var inst_35904 = (state_35932[(11)]);
var inst_35903 = cljs.core.nth.call(null,inst_35898,(0),null);
var inst_35904__$1 = cljs.core.nth.call(null,inst_35898,(1),null);
var state_35932__$1 = (function (){var statearr_35946 = state_35932;
(statearr_35946[(10)] = inst_35903);

(statearr_35946[(11)] = inst_35904__$1);

return statearr_35946;
})();
if(cljs.core.truth_(inst_35904__$1)){
var statearr_35947_35971 = state_35932__$1;
(statearr_35947_35971[(1)] = (8));

} else {
var statearr_35948_35972 = state_35932__$1;
(statearr_35948_35972[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35933 === (14))){
var inst_35903 = (state_35932[(10)]);
var inst_35913 = (state_35932[(8)]);
var inst_35911 = (state_35932[(2)]);
var inst_35912 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_35913__$1 = cljs.core.get.call(null,inst_35912,inst_35903);
var state_35932__$1 = (function (){var statearr_35949 = state_35932;
(statearr_35949[(8)] = inst_35913__$1);

(statearr_35949[(9)] = inst_35911);

return statearr_35949;
})();
if(cljs.core.truth_(inst_35913__$1)){
var statearr_35950_35973 = state_35932__$1;
(statearr_35950_35973[(1)] = (15));

} else {
var statearr_35951_35974 = state_35932__$1;
(statearr_35951_35974[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35933 === (16))){
var inst_35911 = (state_35932[(9)]);
var inst_35917 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_35911);
var state_35932__$1 = state_35932;
var statearr_35952_35975 = state_35932__$1;
(statearr_35952_35975[(2)] = inst_35917);

(statearr_35952_35975[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35933 === (10))){
var inst_35924 = (state_35932[(2)]);
var state_35932__$1 = (function (){var statearr_35953 = state_35932;
(statearr_35953[(12)] = inst_35924);

return statearr_35953;
})();
var statearr_35954_35976 = state_35932__$1;
(statearr_35954_35976[(2)] = null);

(statearr_35954_35976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35933 === (8))){
var inst_35904 = (state_35932[(11)]);
var inst_35906 = eval(inst_35904);
var state_35932__$1 = state_35932;
var statearr_35955_35977 = state_35932__$1;
(statearr_35955_35977[(2)] = inst_35906);

(statearr_35955_35977[(1)] = (10));


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
});})(c__32052__auto__))
;
return ((function (switch__31957__auto__,c__32052__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__31958__auto__ = null;
var figwheel$client$file_reloading$state_machine__31958__auto____0 = (function (){
var statearr_35956 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35956[(0)] = figwheel$client$file_reloading$state_machine__31958__auto__);

(statearr_35956[(1)] = (1));

return statearr_35956;
});
var figwheel$client$file_reloading$state_machine__31958__auto____1 = (function (state_35932){
while(true){
var ret_value__31959__auto__ = (function (){try{while(true){
var result__31960__auto__ = switch__31957__auto__.call(null,state_35932);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31960__auto__;
}
break;
}
}catch (e35957){if((e35957 instanceof Object)){
var ex__31961__auto__ = e35957;
var statearr_35958_35978 = state_35932;
(statearr_35958_35978[(5)] = ex__31961__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35932);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35957;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35979 = state_35932;
state_35932 = G__35979;
continue;
} else {
return ret_value__31959__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__31958__auto__ = function(state_35932){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__31958__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__31958__auto____1.call(this,state_35932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__31958__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__31958__auto____0;
figwheel$client$file_reloading$state_machine__31958__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__31958__auto____1;
return figwheel$client$file_reloading$state_machine__31958__auto__;
})()
;})(switch__31957__auto__,c__32052__auto__))
})();
var state__32054__auto__ = (function (){var statearr_35959 = f__32053__auto__.call(null);
(statearr_35959[(6)] = c__32052__auto__);

return statearr_35959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32054__auto__);
});})(c__32052__auto__))
);

return c__32052__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__35981 = arguments.length;
switch (G__35981) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__35983,callback){
var map__35984 = p__35983;
var map__35984__$1 = (((((!((map__35984 == null))))?(((((map__35984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35984.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35984):map__35984);
var file_msg = map__35984__$1;
var namespace = cljs.core.get.call(null,map__35984__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__35984,map__35984__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__35984,map__35984__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__35986){
var map__35987 = p__35986;
var map__35987__$1 = (((((!((map__35987 == null))))?(((((map__35987.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35987.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35987):map__35987);
var file_msg = map__35987__$1;
var namespace = cljs.core.get.call(null,map__35987__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__35989){
var map__35990 = p__35989;
var map__35990__$1 = (((((!((map__35990 == null))))?(((((map__35990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35990.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35990):map__35990);
var file_msg = map__35990__$1;
var namespace = cljs.core.get.call(null,map__35990__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4036__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4036__auto__){
var or__4047__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
var or__4047__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4047__auto____$2)){
return or__4047__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4036__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__35992,callback){
var map__35993 = p__35992;
var map__35993__$1 = (((((!((map__35993 == null))))?(((((map__35993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35993.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35993):map__35993);
var file_msg = map__35993__$1;
var request_url = cljs.core.get.call(null,map__35993__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__35993__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__32052__auto___36043 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32052__auto___36043,out){
return (function (){
var f__32053__auto__ = (function (){var switch__31957__auto__ = ((function (c__32052__auto___36043,out){
return (function (state_36028){
var state_val_36029 = (state_36028[(1)]);
if((state_val_36029 === (1))){
var inst_36002 = cljs.core.seq.call(null,files);
var inst_36003 = cljs.core.first.call(null,inst_36002);
var inst_36004 = cljs.core.next.call(null,inst_36002);
var inst_36005 = files;
var state_36028__$1 = (function (){var statearr_36030 = state_36028;
(statearr_36030[(7)] = inst_36005);

(statearr_36030[(8)] = inst_36004);

(statearr_36030[(9)] = inst_36003);

return statearr_36030;
})();
var statearr_36031_36044 = state_36028__$1;
(statearr_36031_36044[(2)] = null);

(statearr_36031_36044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36029 === (2))){
var inst_36005 = (state_36028[(7)]);
var inst_36011 = (state_36028[(10)]);
var inst_36010 = cljs.core.seq.call(null,inst_36005);
var inst_36011__$1 = cljs.core.first.call(null,inst_36010);
var inst_36012 = cljs.core.next.call(null,inst_36010);
var inst_36013 = (inst_36011__$1 == null);
var inst_36014 = cljs.core.not.call(null,inst_36013);
var state_36028__$1 = (function (){var statearr_36032 = state_36028;
(statearr_36032[(11)] = inst_36012);

(statearr_36032[(10)] = inst_36011__$1);

return statearr_36032;
})();
if(inst_36014){
var statearr_36033_36045 = state_36028__$1;
(statearr_36033_36045[(1)] = (4));

} else {
var statearr_36034_36046 = state_36028__$1;
(statearr_36034_36046[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36029 === (3))){
var inst_36026 = (state_36028[(2)]);
var state_36028__$1 = state_36028;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36028__$1,inst_36026);
} else {
if((state_val_36029 === (4))){
var inst_36011 = (state_36028[(10)]);
var inst_36016 = figwheel.client.file_reloading.reload_js_file.call(null,inst_36011);
var state_36028__$1 = state_36028;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36028__$1,(7),inst_36016);
} else {
if((state_val_36029 === (5))){
var inst_36022 = cljs.core.async.close_BANG_.call(null,out);
var state_36028__$1 = state_36028;
var statearr_36035_36047 = state_36028__$1;
(statearr_36035_36047[(2)] = inst_36022);

(statearr_36035_36047[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36029 === (6))){
var inst_36024 = (state_36028[(2)]);
var state_36028__$1 = state_36028;
var statearr_36036_36048 = state_36028__$1;
(statearr_36036_36048[(2)] = inst_36024);

(statearr_36036_36048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36029 === (7))){
var inst_36012 = (state_36028[(11)]);
var inst_36018 = (state_36028[(2)]);
var inst_36019 = cljs.core.async.put_BANG_.call(null,out,inst_36018);
var inst_36005 = inst_36012;
var state_36028__$1 = (function (){var statearr_36037 = state_36028;
(statearr_36037[(7)] = inst_36005);

(statearr_36037[(12)] = inst_36019);

return statearr_36037;
})();
var statearr_36038_36049 = state_36028__$1;
(statearr_36038_36049[(2)] = null);

(statearr_36038_36049[(1)] = (2));


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
});})(c__32052__auto___36043,out))
;
return ((function (switch__31957__auto__,c__32052__auto___36043,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31958__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31958__auto____0 = (function (){
var statearr_36039 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36039[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31958__auto__);

(statearr_36039[(1)] = (1));

return statearr_36039;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31958__auto____1 = (function (state_36028){
while(true){
var ret_value__31959__auto__ = (function (){try{while(true){
var result__31960__auto__ = switch__31957__auto__.call(null,state_36028);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31960__auto__;
}
break;
}
}catch (e36040){if((e36040 instanceof Object)){
var ex__31961__auto__ = e36040;
var statearr_36041_36050 = state_36028;
(statearr_36041_36050[(5)] = ex__31961__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36028);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36040;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36051 = state_36028;
state_36028 = G__36051;
continue;
} else {
return ret_value__31959__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31958__auto__ = function(state_36028){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31958__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31958__auto____1.call(this,state_36028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31958__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31958__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31958__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31958__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31958__auto__;
})()
;})(switch__31957__auto__,c__32052__auto___36043,out))
})();
var state__32054__auto__ = (function (){var statearr_36042 = f__32053__auto__.call(null);
(statearr_36042[(6)] = c__32052__auto___36043);

return statearr_36042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32054__auto__);
});})(c__32052__auto___36043,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__36052,opts){
var map__36053 = p__36052;
var map__36053__$1 = (((((!((map__36053 == null))))?(((((map__36053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36053.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36053):map__36053);
var eval_body = cljs.core.get.call(null,map__36053__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__36053__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4036__auto__ = eval_body;
if(cljs.core.truth_(and__4036__auto__)){
return typeof eval_body === 'string';
} else {
return and__4036__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e36055){var e = e36055;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__36056_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36056_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5718__auto__)){
var file_msg = temp__5718__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__36057){
var vec__36058 = p__36057;
var k = cljs.core.nth.call(null,vec__36058,(0),null);
var v = cljs.core.nth.call(null,vec__36058,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__36061){
var vec__36062 = p__36061;
var k = cljs.core.nth.call(null,vec__36062,(0),null);
var v = cljs.core.nth.call(null,vec__36062,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__36068,p__36069){
var map__36070 = p__36068;
var map__36070__$1 = (((((!((map__36070 == null))))?(((((map__36070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36070.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36070):map__36070);
var opts = map__36070__$1;
var before_jsload = cljs.core.get.call(null,map__36070__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__36070__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__36070__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__36071 = p__36069;
var map__36071__$1 = (((((!((map__36071 == null))))?(((((map__36071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36071):map__36071);
var msg = map__36071__$1;
var files = cljs.core.get.call(null,map__36071__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__36071__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__36071__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__32052__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32052__auto__,map__36070,map__36070__$1,opts,before_jsload,on_jsload,reload_dependents,map__36071,map__36071__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__32053__auto__ = (function (){var switch__31957__auto__ = ((function (c__32052__auto__,map__36070,map__36070__$1,opts,before_jsload,on_jsload,reload_dependents,map__36071,map__36071__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_36225){
var state_val_36226 = (state_36225[(1)]);
if((state_val_36226 === (7))){
var inst_36086 = (state_36225[(7)]);
var inst_36087 = (state_36225[(8)]);
var inst_36088 = (state_36225[(9)]);
var inst_36085 = (state_36225[(10)]);
var inst_36093 = cljs.core._nth.call(null,inst_36086,inst_36088);
var inst_36094 = figwheel.client.file_reloading.eval_body.call(null,inst_36093,opts);
var inst_36095 = (inst_36088 + (1));
var tmp36227 = inst_36086;
var tmp36228 = inst_36087;
var tmp36229 = inst_36085;
var inst_36085__$1 = tmp36229;
var inst_36086__$1 = tmp36227;
var inst_36087__$1 = tmp36228;
var inst_36088__$1 = inst_36095;
var state_36225__$1 = (function (){var statearr_36230 = state_36225;
(statearr_36230[(7)] = inst_36086__$1);

(statearr_36230[(8)] = inst_36087__$1);

(statearr_36230[(11)] = inst_36094);

(statearr_36230[(9)] = inst_36088__$1);

(statearr_36230[(10)] = inst_36085__$1);

return statearr_36230;
})();
var statearr_36231_36314 = state_36225__$1;
(statearr_36231_36314[(2)] = null);

(statearr_36231_36314[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36226 === (20))){
var inst_36128 = (state_36225[(12)]);
var inst_36136 = figwheel.client.file_reloading.sort_files.call(null,inst_36128);
var state_36225__$1 = state_36225;
var statearr_36232_36315 = state_36225__$1;
(statearr_36232_36315[(2)] = inst_36136);

(statearr_36232_36315[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36226 === (27))){
var state_36225__$1 = state_36225;
var statearr_36233_36316 = state_36225__$1;
(statearr_36233_36316[(2)] = null);

(statearr_36233_36316[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36226 === (1))){
var inst_36077 = (state_36225[(13)]);
var inst_36074 = before_jsload.call(null,files);
var inst_36075 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_36076 = (function (){return ((function (inst_36077,inst_36074,inst_36075,state_val_36226,c__32052__auto__,map__36070,map__36070__$1,opts,before_jsload,on_jsload,reload_dependents,map__36071,map__36071__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36065_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36065_SHARP_);
});
;})(inst_36077,inst_36074,inst_36075,state_val_36226,c__32052__auto__,map__36070,map__36070__$1,opts,before_jsload,on_jsload,reload_dependents,map__36071,map__36071__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36077__$1 = cljs.core.filter.call(null,inst_36076,files);
var inst_36078 = cljs.core.not_empty.call(null,inst_36077__$1);
var state_36225__$1 = (function (){var statearr_36234 = state_36225;
(statearr_36234[(13)] = inst_36077__$1);

(statearr_36234[(14)] = inst_36075);

(statearr_36234[(15)] = inst_36074);

return statearr_36234;
})();
if(cljs.core.truth_(inst_36078)){
var statearr_36235_36317 = state_36225__$1;
(statearr_36235_36317[(1)] = (2));

} else {
var statearr_36236_36318 = state_36225__$1;
(statearr_36236_36318[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36226 === (24))){
var state_36225__$1 = state_36225;
var statearr_36237_36319 = state_36225__$1;
(statearr_36237_36319[(2)] = null);

(statearr_36237_36319[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36226 === (39))){
var inst_36178 = (state_36225[(16)]);
var state_36225__$1 = state_36225;
var statearr_36238_36320 = state_36225__$1;
(statearr_36238_36320[(2)] = inst_36178);

(statearr_36238_36320[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36226 === (46))){
var inst_36220 = (state_36225[(2)]);
var state_36225__$1 = state_36225;
var statearr_36239_36321 = state_36225__$1;
(statearr_36239_36321[(2)] = inst_36220);

(statearr_36239_36321[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36226 === (4))){
var inst_36122 = (state_36225[(2)]);
var inst_36123 = cljs.core.List.EMPTY;
var inst_36124 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_36123);
var inst_36125 = (function (){return ((function (inst_36122,inst_36123,inst_36124,state_val_36226,c__32052__auto__,map__36070,map__36070__$1,opts,before_jsload,on_jsload,reload_dependents,map__36071,map__36071__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36066_SHARP_){
var and__4036__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36066_SHARP_);
if(cljs.core.truth_(and__4036__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36066_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__36066_SHARP_))));
} else {
return and__4036__auto__;
}
});
;})(inst_36122,inst_36123,inst_36124,state_val_36226,c__32052__auto__,map__36070,map__36070__$1,opts,before_jsload,on_jsload,reload_dependents,map__36071,map__36071__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36126 = cljs.core.filter.call(null,inst_36125,files);
var inst_36127 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_36128 = cljs.core.concat.call(null,inst_36126,inst_36127);
var state_36225__$1 = (function (){var statearr_36240 = state_36225;
(statearr_36240[(17)] = inst_36122);

(statearr_36240[(18)] = inst_36124);

(statearr_36240[(12)] = inst_36128);

return statearr_36240;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_36241_36322 = state_36225__$1;
(statearr_36241_36322[(1)] = (16));

} else {
var statearr_36242_36323 = state_36225__$1;
(statearr_36242_36323[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36226 === (15))){
var inst_36112 = (state_36225[(2)]);
var state_36225__$1 = state_36225;
var statearr_36243_36324 = state_36225__$1;
(statearr_36243_36324[(2)] = inst_36112);

(statearr_36243_36324[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36226 === (21))){
var inst_36138 = (state_36225[(19)]);
var inst_36138__$1 = (state_36225[(2)]);
var inst_36139 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_36138__$1);
var state_36225__$1 = (function (){var statearr_36244 = state_36225;
(statearr_36244[(19)] = inst_36138__$1);

return statearr_36244;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36225__$1,(22),inst_36139);
} else {
if((state_val_36226 === (31))){
var inst_36223 = (state_36225[(2)]);
var state_36225__$1 = state_36225;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36225__$1,inst_36223);
} else {
if((state_val_36226 === (32))){
var inst_36178 = (state_36225[(16)]);
var inst_36183 = inst_36178.cljs$lang$protocol_mask$partition0$;
var inst_36184 = (inst_36183 & (64));
var inst_36185 = inst_36178.cljs$core$ISeq$;
var inst_36186 = (cljs.core.PROTOCOL_SENTINEL === inst_36185);
var inst_36187 = ((inst_36184) || (inst_36186));
var state_36225__$1 = state_36225;
if(cljs.core.truth_(inst_36187)){
var statearr_36245_36325 = state_36225__$1;
(statearr_36245_36325[(1)] = (35));

} else {
var statearr_36246_36326 = state_36225__$1;
(statearr_36246_36326[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36226 === (40))){
var inst_36200 = (state_36225[(20)]);
var inst_36199 = (state_36225[(2)]);
var inst_36200__$1 = cljs.core.get.call(null,inst_36199,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_36201 = cljs.core.get.call(null,inst_36199,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_36202 = cljs.core.not_empty.call(null,inst_36200__$1);
var state_36225__$1 = (function (){var statearr_36247 = state_36225;
(statearr_36247[(20)] = inst_36200__$1);

(statearr_36247[(21)] = inst_36201);

return statearr_36247;
})();
if(cljs.core.truth_(inst_36202)){
var statearr_36248_36327 = state_36225__$1;
(statearr_36248_36327[(1)] = (41));

} else {
var statearr_36249_36328 = state_36225__$1;
(statearr_36249_36328[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36226 === (33))){
var state_36225__$1 = state_36225;
var statearr_36250_36329 = state_36225__$1;
(statearr_36250_36329[(2)] = false);

(statearr_36250_36329[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36226 === (13))){
var inst_36098 = (state_36225[(22)]);
var inst_36102 = cljs.core.chunk_first.call(null,inst_36098);
var inst_36103 = cljs.core.chunk_rest.call(null,inst_36098);
var inst_36104 = cljs.core.count.call(null,inst_36102);
var inst_36085 = inst_36103;
var inst_36086 = inst_36102;
var inst_36087 = inst_36104;
var inst_36088 = (0);
var state_36225__$1 = (function (){var statearr_36251 = state_36225;
(statearr_36251[(7)] = inst_36086);

(statearr_36251[(8)] = inst_36087);

(statearr_36251[(9)] = inst_36088);

(statearr_36251[(10)] = inst_36085);

return statearr_36251;
})();
var statearr_36252_36330 = state_36225__$1;
(statearr_36252_36330[(2)] = null);

(statearr_36252_36330[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36226 === (22))){
var inst_36138 = (state_36225[(19)]);
var inst_36146 = (state_36225[(23)]);
var inst_36142 = (state_36225[(24)]);
var inst_36141 = (state_36225[(25)]);
var inst_36141__$1 = (state_36225[(2)]);
var inst_36142__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36141__$1);
var inst_36143 = (function (){var all_files = inst_36138;
var res_SINGLEQUOTE_ = inst_36141__$1;
var res = inst_36142__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_36138,inst_36146,inst_36142,inst_36141,inst_36141__$1,inst_36142__$1,state_val_36226,c__32052__auto__,map__36070,map__36070__$1,opts,before_jsload,on_jsload,reload_dependents,map__36071,map__36071__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36067_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__36067_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_36138,inst_36146,inst_36142,inst_36141,inst_36141__$1,inst_36142__$1,state_val_36226,c__32052__auto__,map__36070,map__36070__$1,opts,before_jsload,on_jsload,reload_dependents,map__36071,map__36071__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36144 = cljs.core.filter.call(null,inst_36143,inst_36141__$1);
var inst_36145 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_36146__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36145);
var inst_36147 = cljs.core.not_empty.call(null,inst_36146__$1);
var state_36225__$1 = (function (){var statearr_36253 = state_36225;
(statearr_36253[(23)] = inst_36146__$1);

(statearr_36253[(24)] = inst_36142__$1);

(statearr_36253[(25)] = inst_36141__$1);

(statearr_36253[(26)] = inst_36144);

return statearr_36253;
})();
if(cljs.core.truth_(inst_36147)){
var statearr_36254_36331 = state_36225__$1;
(statearr_36254_36331[(1)] = (23));

} else {
var statearr_36255_36332 = state_36225__$1;
(statearr_36255_36332[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36226 === (36))){
var state_36225__$1 = state_36225;
var statearr_36256_36333 = state_36225__$1;
(statearr_36256_36333[(2)] = false);

(statearr_36256_36333[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36226 === (41))){
var inst_36200 = (state_36225[(20)]);
var inst_36204 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_36205 = cljs.core.map.call(null,inst_36204,inst_36200);
var inst_36206 = cljs.core.pr_str.call(null,inst_36205);
var inst_36207 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36206)].join('');
var inst_36208 = figwheel.client.utils.log.call(null,inst_36207);
var state_36225__$1 = state_36225;
var statearr_36257_36334 = state_36225__$1;
(statearr_36257_36334[(2)] = inst_36208);

(statearr_36257_36334[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36226 === (43))){
var inst_36201 = (state_36225[(21)]);
var inst_36211 = (state_36225[(2)]);
var inst_36212 = cljs.core.not_empty.call(null,inst_36201);
var state_36225__$1 = (function (){var statearr_36258 = state_36225;
(statearr_36258[(27)] = inst_36211);

return statearr_36258;
})();
if(cljs.core.truth_(inst_36212)){
var statearr_36259_36335 = state_36225__$1;
(statearr_36259_36335[(1)] = (44));

} else {
var statearr_36260_36336 = state_36225__$1;
(statearr_36260_36336[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36226 === (29))){
var inst_36138 = (state_36225[(19)]);
var inst_36146 = (state_36225[(23)]);
var inst_36142 = (state_36225[(24)]);
var inst_36141 = (state_36225[(25)]);
var inst_36144 = (state_36225[(26)]);
var inst_36178 = (state_36225[(16)]);
var inst_36174 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_36177 = (function (){var all_files = inst_36138;
var res_SINGLEQUOTE_ = inst_36141;
var res = inst_36142;
var files_not_loaded = inst_36144;
var dependencies_that_loaded = inst_36146;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36138,inst_36146,inst_36142,inst_36141,inst_36144,inst_36178,inst_36174,state_val_36226,c__32052__auto__,map__36070,map__36070__$1,opts,before_jsload,on_jsload,reload_dependents,map__36071,map__36071__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36176){
var map__36261 = p__36176;
var map__36261__$1 = (((((!((map__36261 == null))))?(((((map__36261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36261):map__36261);
var namespace = cljs.core.get.call(null,map__36261__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36138,inst_36146,inst_36142,inst_36141,inst_36144,inst_36178,inst_36174,state_val_36226,c__32052__auto__,map__36070,map__36070__$1,opts,before_jsload,on_jsload,reload_dependents,map__36071,map__36071__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36178__$1 = cljs.core.group_by.call(null,inst_36177,inst_36144);
var inst_36180 = (inst_36178__$1 == null);
var inst_36181 = cljs.core.not.call(null,inst_36180);
var state_36225__$1 = (function (){var statearr_36263 = state_36225;
(statearr_36263[(28)] = inst_36174);

(statearr_36263[(16)] = inst_36178__$1);

return statearr_36263;
})();
if(inst_36181){
var statearr_36264_36337 = state_36225__$1;
(statearr_36264_36337[(1)] = (32));

} else {
var statearr_36265_36338 = state_36225__$1;
(statearr_36265_36338[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36226 === (44))){
var inst_36201 = (state_36225[(21)]);
var inst_36214 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36201);
var inst_36215 = cljs.core.pr_str.call(null,inst_36214);
var inst_36216 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36215)].join('');
var inst_36217 = figwheel.client.utils.log.call(null,inst_36216);
var state_36225__$1 = state_36225;
var statearr_36266_36339 = state_36225__$1;
(statearr_36266_36339[(2)] = inst_36217);

(statearr_36266_36339[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36226 === (6))){
var inst_36119 = (state_36225[(2)]);
var state_36225__$1 = state_36225;
var statearr_36267_36340 = state_36225__$1;
(statearr_36267_36340[(2)] = inst_36119);

(statearr_36267_36340[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36226 === (28))){
var inst_36144 = (state_36225[(26)]);
var inst_36171 = (state_36225[(2)]);
var inst_36172 = cljs.core.not_empty.call(null,inst_36144);
var state_36225__$1 = (function (){var statearr_36268 = state_36225;
(statearr_36268[(29)] = inst_36171);

return statearr_36268;
})();
if(cljs.core.truth_(inst_36172)){
var statearr_36269_36341 = state_36225__$1;
(statearr_36269_36341[(1)] = (29));

} else {
var statearr_36270_36342 = state_36225__$1;
(statearr_36270_36342[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36226 === (25))){
var inst_36142 = (state_36225[(24)]);
var inst_36158 = (state_36225[(2)]);
var inst_36159 = cljs.core.not_empty.call(null,inst_36142);
var state_36225__$1 = (function (){var statearr_36271 = state_36225;
(statearr_36271[(30)] = inst_36158);

return statearr_36271;
})();
if(cljs.core.truth_(inst_36159)){
var statearr_36272_36343 = state_36225__$1;
(statearr_36272_36343[(1)] = (26));

} else {
var statearr_36273_36344 = state_36225__$1;
(statearr_36273_36344[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36226 === (34))){
var inst_36194 = (state_36225[(2)]);
var state_36225__$1 = state_36225;
if(cljs.core.truth_(inst_36194)){
var statearr_36274_36345 = state_36225__$1;
(statearr_36274_36345[(1)] = (38));

} else {
var statearr_36275_36346 = state_36225__$1;
(statearr_36275_36346[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36226 === (17))){
var state_36225__$1 = state_36225;
var statearr_36276_36347 = state_36225__$1;
(statearr_36276_36347[(2)] = recompile_dependents);

(statearr_36276_36347[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36226 === (3))){
var state_36225__$1 = state_36225;
var statearr_36277_36348 = state_36225__$1;
(statearr_36277_36348[(2)] = null);

(statearr_36277_36348[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36226 === (12))){
var inst_36115 = (state_36225[(2)]);
var state_36225__$1 = state_36225;
var statearr_36278_36349 = state_36225__$1;
(statearr_36278_36349[(2)] = inst_36115);

(statearr_36278_36349[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36226 === (2))){
var inst_36077 = (state_36225[(13)]);
var inst_36084 = cljs.core.seq.call(null,inst_36077);
var inst_36085 = inst_36084;
var inst_36086 = null;
var inst_36087 = (0);
var inst_36088 = (0);
var state_36225__$1 = (function (){var statearr_36279 = state_36225;
(statearr_36279[(7)] = inst_36086);

(statearr_36279[(8)] = inst_36087);

(statearr_36279[(9)] = inst_36088);

(statearr_36279[(10)] = inst_36085);

return statearr_36279;
})();
var statearr_36280_36350 = state_36225__$1;
(statearr_36280_36350[(2)] = null);

(statearr_36280_36350[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36226 === (23))){
var inst_36138 = (state_36225[(19)]);
var inst_36146 = (state_36225[(23)]);
var inst_36142 = (state_36225[(24)]);
var inst_36141 = (state_36225[(25)]);
var inst_36144 = (state_36225[(26)]);
var inst_36149 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_36151 = (function (){var all_files = inst_36138;
var res_SINGLEQUOTE_ = inst_36141;
var res = inst_36142;
var files_not_loaded = inst_36144;
var dependencies_that_loaded = inst_36146;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36138,inst_36146,inst_36142,inst_36141,inst_36144,inst_36149,state_val_36226,c__32052__auto__,map__36070,map__36070__$1,opts,before_jsload,on_jsload,reload_dependents,map__36071,map__36071__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36150){
var map__36281 = p__36150;
var map__36281__$1 = (((((!((map__36281 == null))))?(((((map__36281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36281):map__36281);
var request_url = cljs.core.get.call(null,map__36281__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36138,inst_36146,inst_36142,inst_36141,inst_36144,inst_36149,state_val_36226,c__32052__auto__,map__36070,map__36070__$1,opts,before_jsload,on_jsload,reload_dependents,map__36071,map__36071__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36152 = cljs.core.reverse.call(null,inst_36146);
var inst_36153 = cljs.core.map.call(null,inst_36151,inst_36152);
var inst_36154 = cljs.core.pr_str.call(null,inst_36153);
var inst_36155 = figwheel.client.utils.log.call(null,inst_36154);
var state_36225__$1 = (function (){var statearr_36283 = state_36225;
(statearr_36283[(31)] = inst_36149);

return statearr_36283;
})();
var statearr_36284_36351 = state_36225__$1;
(statearr_36284_36351[(2)] = inst_36155);

(statearr_36284_36351[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36226 === (35))){
var state_36225__$1 = state_36225;
var statearr_36285_36352 = state_36225__$1;
(statearr_36285_36352[(2)] = true);

(statearr_36285_36352[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36226 === (19))){
var inst_36128 = (state_36225[(12)]);
var inst_36134 = figwheel.client.file_reloading.expand_files.call(null,inst_36128);
var state_36225__$1 = state_36225;
var statearr_36286_36353 = state_36225__$1;
(statearr_36286_36353[(2)] = inst_36134);

(statearr_36286_36353[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36226 === (11))){
var state_36225__$1 = state_36225;
var statearr_36287_36354 = state_36225__$1;
(statearr_36287_36354[(2)] = null);

(statearr_36287_36354[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36226 === (9))){
var inst_36117 = (state_36225[(2)]);
var state_36225__$1 = state_36225;
var statearr_36288_36355 = state_36225__$1;
(statearr_36288_36355[(2)] = inst_36117);

(statearr_36288_36355[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36226 === (5))){
var inst_36087 = (state_36225[(8)]);
var inst_36088 = (state_36225[(9)]);
var inst_36090 = (inst_36088 < inst_36087);
var inst_36091 = inst_36090;
var state_36225__$1 = state_36225;
if(cljs.core.truth_(inst_36091)){
var statearr_36289_36356 = state_36225__$1;
(statearr_36289_36356[(1)] = (7));

} else {
var statearr_36290_36357 = state_36225__$1;
(statearr_36290_36357[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36226 === (14))){
var inst_36098 = (state_36225[(22)]);
var inst_36107 = cljs.core.first.call(null,inst_36098);
var inst_36108 = figwheel.client.file_reloading.eval_body.call(null,inst_36107,opts);
var inst_36109 = cljs.core.next.call(null,inst_36098);
var inst_36085 = inst_36109;
var inst_36086 = null;
var inst_36087 = (0);
var inst_36088 = (0);
var state_36225__$1 = (function (){var statearr_36291 = state_36225;
(statearr_36291[(7)] = inst_36086);

(statearr_36291[(8)] = inst_36087);

(statearr_36291[(32)] = inst_36108);

(statearr_36291[(9)] = inst_36088);

(statearr_36291[(10)] = inst_36085);

return statearr_36291;
})();
var statearr_36292_36358 = state_36225__$1;
(statearr_36292_36358[(2)] = null);

(statearr_36292_36358[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36226 === (45))){
var state_36225__$1 = state_36225;
var statearr_36293_36359 = state_36225__$1;
(statearr_36293_36359[(2)] = null);

(statearr_36293_36359[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36226 === (26))){
var inst_36138 = (state_36225[(19)]);
var inst_36146 = (state_36225[(23)]);
var inst_36142 = (state_36225[(24)]);
var inst_36141 = (state_36225[(25)]);
var inst_36144 = (state_36225[(26)]);
var inst_36161 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_36163 = (function (){var all_files = inst_36138;
var res_SINGLEQUOTE_ = inst_36141;
var res = inst_36142;
var files_not_loaded = inst_36144;
var dependencies_that_loaded = inst_36146;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36138,inst_36146,inst_36142,inst_36141,inst_36144,inst_36161,state_val_36226,c__32052__auto__,map__36070,map__36070__$1,opts,before_jsload,on_jsload,reload_dependents,map__36071,map__36071__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36162){
var map__36294 = p__36162;
var map__36294__$1 = (((((!((map__36294 == null))))?(((((map__36294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36294):map__36294);
var namespace = cljs.core.get.call(null,map__36294__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__36294__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36138,inst_36146,inst_36142,inst_36141,inst_36144,inst_36161,state_val_36226,c__32052__auto__,map__36070,map__36070__$1,opts,before_jsload,on_jsload,reload_dependents,map__36071,map__36071__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36164 = cljs.core.map.call(null,inst_36163,inst_36142);
var inst_36165 = cljs.core.pr_str.call(null,inst_36164);
var inst_36166 = figwheel.client.utils.log.call(null,inst_36165);
var inst_36167 = (function (){var all_files = inst_36138;
var res_SINGLEQUOTE_ = inst_36141;
var res = inst_36142;
var files_not_loaded = inst_36144;
var dependencies_that_loaded = inst_36146;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36138,inst_36146,inst_36142,inst_36141,inst_36144,inst_36161,inst_36163,inst_36164,inst_36165,inst_36166,state_val_36226,c__32052__auto__,map__36070,map__36070__$1,opts,before_jsload,on_jsload,reload_dependents,map__36071,map__36071__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36138,inst_36146,inst_36142,inst_36141,inst_36144,inst_36161,inst_36163,inst_36164,inst_36165,inst_36166,state_val_36226,c__32052__auto__,map__36070,map__36070__$1,opts,before_jsload,on_jsload,reload_dependents,map__36071,map__36071__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36168 = setTimeout(inst_36167,(10));
var state_36225__$1 = (function (){var statearr_36296 = state_36225;
(statearr_36296[(33)] = inst_36166);

(statearr_36296[(34)] = inst_36161);

return statearr_36296;
})();
var statearr_36297_36360 = state_36225__$1;
(statearr_36297_36360[(2)] = inst_36168);

(statearr_36297_36360[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36226 === (16))){
var state_36225__$1 = state_36225;
var statearr_36298_36361 = state_36225__$1;
(statearr_36298_36361[(2)] = reload_dependents);

(statearr_36298_36361[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36226 === (38))){
var inst_36178 = (state_36225[(16)]);
var inst_36196 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36178);
var state_36225__$1 = state_36225;
var statearr_36299_36362 = state_36225__$1;
(statearr_36299_36362[(2)] = inst_36196);

(statearr_36299_36362[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36226 === (30))){
var state_36225__$1 = state_36225;
var statearr_36300_36363 = state_36225__$1;
(statearr_36300_36363[(2)] = null);

(statearr_36300_36363[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36226 === (10))){
var inst_36098 = (state_36225[(22)]);
var inst_36100 = cljs.core.chunked_seq_QMARK_.call(null,inst_36098);
var state_36225__$1 = state_36225;
if(inst_36100){
var statearr_36301_36364 = state_36225__$1;
(statearr_36301_36364[(1)] = (13));

} else {
var statearr_36302_36365 = state_36225__$1;
(statearr_36302_36365[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36226 === (18))){
var inst_36132 = (state_36225[(2)]);
var state_36225__$1 = state_36225;
if(cljs.core.truth_(inst_36132)){
var statearr_36303_36366 = state_36225__$1;
(statearr_36303_36366[(1)] = (19));

} else {
var statearr_36304_36367 = state_36225__$1;
(statearr_36304_36367[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36226 === (42))){
var state_36225__$1 = state_36225;
var statearr_36305_36368 = state_36225__$1;
(statearr_36305_36368[(2)] = null);

(statearr_36305_36368[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36226 === (37))){
var inst_36191 = (state_36225[(2)]);
var state_36225__$1 = state_36225;
var statearr_36306_36369 = state_36225__$1;
(statearr_36306_36369[(2)] = inst_36191);

(statearr_36306_36369[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36226 === (8))){
var inst_36098 = (state_36225[(22)]);
var inst_36085 = (state_36225[(10)]);
var inst_36098__$1 = cljs.core.seq.call(null,inst_36085);
var state_36225__$1 = (function (){var statearr_36307 = state_36225;
(statearr_36307[(22)] = inst_36098__$1);

return statearr_36307;
})();
if(inst_36098__$1){
var statearr_36308_36370 = state_36225__$1;
(statearr_36308_36370[(1)] = (10));

} else {
var statearr_36309_36371 = state_36225__$1;
(statearr_36309_36371[(1)] = (11));

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
});})(c__32052__auto__,map__36070,map__36070__$1,opts,before_jsload,on_jsload,reload_dependents,map__36071,map__36071__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__31957__auto__,c__32052__auto__,map__36070,map__36070__$1,opts,before_jsload,on_jsload,reload_dependents,map__36071,map__36071__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31958__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31958__auto____0 = (function (){
var statearr_36310 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36310[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__31958__auto__);

(statearr_36310[(1)] = (1));

return statearr_36310;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31958__auto____1 = (function (state_36225){
while(true){
var ret_value__31959__auto__ = (function (){try{while(true){
var result__31960__auto__ = switch__31957__auto__.call(null,state_36225);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31960__auto__;
}
break;
}
}catch (e36311){if((e36311 instanceof Object)){
var ex__31961__auto__ = e36311;
var statearr_36312_36372 = state_36225;
(statearr_36312_36372[(5)] = ex__31961__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36225);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36311;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36373 = state_36225;
state_36225 = G__36373;
continue;
} else {
return ret_value__31959__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__31958__auto__ = function(state_36225){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31958__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31958__auto____1.call(this,state_36225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__31958__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31958__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__31958__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31958__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31958__auto__;
})()
;})(switch__31957__auto__,c__32052__auto__,map__36070,map__36070__$1,opts,before_jsload,on_jsload,reload_dependents,map__36071,map__36071__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__32054__auto__ = (function (){var statearr_36313 = f__32053__auto__.call(null);
(statearr_36313[(6)] = c__32052__auto__);

return statearr_36313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32054__auto__);
});})(c__32052__auto__,map__36070,map__36070__$1,opts,before_jsload,on_jsload,reload_dependents,map__36071,map__36071__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__32052__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__36376,link){
var map__36377 = p__36376;
var map__36377__$1 = (((((!((map__36377 == null))))?(((((map__36377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36377):map__36377);
var file = cljs.core.get.call(null,map__36377__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5720__auto__,map__36377,map__36377__$1,file){
return (function (p1__36374_SHARP_,p2__36375_SHARP_){
if(cljs.core._EQ_.call(null,p1__36374_SHARP_,p2__36375_SHARP_)){
return p1__36374_SHARP_;
} else {
return false;
}
});})(link_href,temp__5720__auto__,map__36377,map__36377__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__36380){
var map__36381 = p__36380;
var map__36381__$1 = (((((!((map__36381 == null))))?(((((map__36381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36381):map__36381);
var match_length = cljs.core.get.call(null,map__36381__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__36381__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__36379_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__36379_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5720__auto__)){
var res = temp__5720__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__36383_SHARP_,p2__36384_SHARP_){
return cljs.core.assoc.call(null,p1__36383_SHARP_,cljs.core.get.call(null,p2__36384_SHARP_,key),p2__36384_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5718__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5718__auto__)){
var link = temp__5718__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5718__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5718__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_36385 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_36385);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_36385);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__36386,p__36387){
var map__36388 = p__36386;
var map__36388__$1 = (((((!((map__36388 == null))))?(((((map__36388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36388.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36388):map__36388);
var on_cssload = cljs.core.get.call(null,map__36388__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__36389 = p__36387;
var map__36389__$1 = (((((!((map__36389 == null))))?(((((map__36389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36389.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36389):map__36389);
var files_msg = map__36389__$1;
var files = cljs.core.get.call(null,map__36389__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5720__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5720__auto__)){
var f_datas = temp__5720__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1710956803970
