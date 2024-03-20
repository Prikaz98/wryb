// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__32112 = arguments.length;
switch (G__32112) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32113 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32113 = (function (f,blockable,meta32114){
this.f = f;
this.blockable = blockable;
this.meta32114 = meta32114;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32113.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32115,meta32114__$1){
var self__ = this;
var _32115__$1 = this;
return (new cljs.core.async.t_cljs$core$async32113(self__.f,self__.blockable,meta32114__$1));
});

cljs.core.async.t_cljs$core$async32113.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32115){
var self__ = this;
var _32115__$1 = this;
return self__.meta32114;
});

cljs.core.async.t_cljs$core$async32113.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32113.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32113.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async32113.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async32113.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32114","meta32114",-1501481273,null)], null);
});

cljs.core.async.t_cljs$core$async32113.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32113.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32113";

cljs.core.async.t_cljs$core$async32113.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async32113");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32113.
 */
cljs.core.async.__GT_t_cljs$core$async32113 = (function cljs$core$async$__GT_t_cljs$core$async32113(f__$1,blockable__$1,meta32114){
return (new cljs.core.async.t_cljs$core$async32113(f__$1,blockable__$1,meta32114));
});

}

return (new cljs.core.async.t_cljs$core$async32113(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__32119 = arguments.length;
switch (G__32119) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__32122 = arguments.length;
switch (G__32122) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__32125 = arguments.length;
switch (G__32125) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_32127 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_32127);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_32127,ret){
return (function (){
return fn1.call(null,val_32127);
});})(val_32127,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__32129 = arguments.length;
switch (G__32129) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5718__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5718__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4518__auto___32131 = n;
var x_32132 = (0);
while(true){
if((x_32132 < n__4518__auto___32131)){
(a[x_32132] = (0));

var G__32133 = (x_32132 + (1));
x_32132 = G__32133;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__32134 = (i + (1));
i = G__32134;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32135 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32135 = (function (flag,meta32136){
this.flag = flag;
this.meta32136 = meta32136;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32135.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_32137,meta32136__$1){
var self__ = this;
var _32137__$1 = this;
return (new cljs.core.async.t_cljs$core$async32135(self__.flag,meta32136__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async32135.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_32137){
var self__ = this;
var _32137__$1 = this;
return self__.meta32136;
});})(flag))
;

cljs.core.async.t_cljs$core$async32135.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32135.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async32135.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32135.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32135.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32136","meta32136",61026561,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async32135.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32135.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32135";

cljs.core.async.t_cljs$core$async32135.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async32135");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32135.
 */
cljs.core.async.__GT_t_cljs$core$async32135 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32135(flag__$1,meta32136){
return (new cljs.core.async.t_cljs$core$async32135(flag__$1,meta32136));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async32135(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32138 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32138 = (function (flag,cb,meta32139){
this.flag = flag;
this.cb = cb;
this.meta32139 = meta32139;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32138.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32140,meta32139__$1){
var self__ = this;
var _32140__$1 = this;
return (new cljs.core.async.t_cljs$core$async32138(self__.flag,self__.cb,meta32139__$1));
});

cljs.core.async.t_cljs$core$async32138.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32140){
var self__ = this;
var _32140__$1 = this;
return self__.meta32139;
});

cljs.core.async.t_cljs$core$async32138.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32138.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async32138.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32138.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async32138.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32139","meta32139",1106512476,null)], null);
});

cljs.core.async.t_cljs$core$async32138.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32138.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32138";

cljs.core.async.t_cljs$core$async32138.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async32138");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32138.
 */
cljs.core.async.__GT_t_cljs$core$async32138 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32138(flag__$1,cb__$1,meta32139){
return (new cljs.core.async.t_cljs$core$async32138(flag__$1,cb__$1,meta32139));
});

}

return (new cljs.core.async.t_cljs$core$async32138(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32141_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32141_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32142_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32142_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4047__auto__ = wport;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32143 = (i + (1));
i = G__32143;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4047__auto__ = ret;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4036__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___32149 = arguments.length;
var i__4642__auto___32150 = (0);
while(true){
if((i__4642__auto___32150 < len__4641__auto___32149)){
args__4647__auto__.push((arguments[i__4642__auto___32150]));

var G__32151 = (i__4642__auto___32150 + (1));
i__4642__auto___32150 = G__32151;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32146){
var map__32147 = p__32146;
var map__32147__$1 = (((((!((map__32147 == null))))?(((((map__32147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32147):map__32147);
var opts = map__32147__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32144){
var G__32145 = cljs.core.first.call(null,seq32144);
var seq32144__$1 = cljs.core.next.call(null,seq32144);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32145,seq32144__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__32153 = arguments.length;
switch (G__32153) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__32052__auto___32199 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32052__auto___32199){
return (function (){
var f__32053__auto__ = (function (){var switch__31957__auto__ = ((function (c__32052__auto___32199){
return (function (state_32177){
var state_val_32178 = (state_32177[(1)]);
if((state_val_32178 === (7))){
var inst_32173 = (state_32177[(2)]);
var state_32177__$1 = state_32177;
var statearr_32179_32200 = state_32177__$1;
(statearr_32179_32200[(2)] = inst_32173);

(statearr_32179_32200[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32178 === (1))){
var state_32177__$1 = state_32177;
var statearr_32180_32201 = state_32177__$1;
(statearr_32180_32201[(2)] = null);

(statearr_32180_32201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32178 === (4))){
var inst_32156 = (state_32177[(7)]);
var inst_32156__$1 = (state_32177[(2)]);
var inst_32157 = (inst_32156__$1 == null);
var state_32177__$1 = (function (){var statearr_32181 = state_32177;
(statearr_32181[(7)] = inst_32156__$1);

return statearr_32181;
})();
if(cljs.core.truth_(inst_32157)){
var statearr_32182_32202 = state_32177__$1;
(statearr_32182_32202[(1)] = (5));

} else {
var statearr_32183_32203 = state_32177__$1;
(statearr_32183_32203[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32178 === (13))){
var state_32177__$1 = state_32177;
var statearr_32184_32204 = state_32177__$1;
(statearr_32184_32204[(2)] = null);

(statearr_32184_32204[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32178 === (6))){
var inst_32156 = (state_32177[(7)]);
var state_32177__$1 = state_32177;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32177__$1,(11),to,inst_32156);
} else {
if((state_val_32178 === (3))){
var inst_32175 = (state_32177[(2)]);
var state_32177__$1 = state_32177;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32177__$1,inst_32175);
} else {
if((state_val_32178 === (12))){
var state_32177__$1 = state_32177;
var statearr_32185_32205 = state_32177__$1;
(statearr_32185_32205[(2)] = null);

(statearr_32185_32205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32178 === (2))){
var state_32177__$1 = state_32177;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32177__$1,(4),from);
} else {
if((state_val_32178 === (11))){
var inst_32166 = (state_32177[(2)]);
var state_32177__$1 = state_32177;
if(cljs.core.truth_(inst_32166)){
var statearr_32186_32206 = state_32177__$1;
(statearr_32186_32206[(1)] = (12));

} else {
var statearr_32187_32207 = state_32177__$1;
(statearr_32187_32207[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32178 === (9))){
var state_32177__$1 = state_32177;
var statearr_32188_32208 = state_32177__$1;
(statearr_32188_32208[(2)] = null);

(statearr_32188_32208[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32178 === (5))){
var state_32177__$1 = state_32177;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32189_32209 = state_32177__$1;
(statearr_32189_32209[(1)] = (8));

} else {
var statearr_32190_32210 = state_32177__$1;
(statearr_32190_32210[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32178 === (14))){
var inst_32171 = (state_32177[(2)]);
var state_32177__$1 = state_32177;
var statearr_32191_32211 = state_32177__$1;
(statearr_32191_32211[(2)] = inst_32171);

(statearr_32191_32211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32178 === (10))){
var inst_32163 = (state_32177[(2)]);
var state_32177__$1 = state_32177;
var statearr_32192_32212 = state_32177__$1;
(statearr_32192_32212[(2)] = inst_32163);

(statearr_32192_32212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32178 === (8))){
var inst_32160 = cljs.core.async.close_BANG_.call(null,to);
var state_32177__$1 = state_32177;
var statearr_32193_32213 = state_32177__$1;
(statearr_32193_32213[(2)] = inst_32160);

(statearr_32193_32213[(1)] = (10));


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
});})(c__32052__auto___32199))
;
return ((function (switch__31957__auto__,c__32052__auto___32199){
return (function() {
var cljs$core$async$state_machine__31958__auto__ = null;
var cljs$core$async$state_machine__31958__auto____0 = (function (){
var statearr_32194 = [null,null,null,null,null,null,null,null];
(statearr_32194[(0)] = cljs$core$async$state_machine__31958__auto__);

(statearr_32194[(1)] = (1));

return statearr_32194;
});
var cljs$core$async$state_machine__31958__auto____1 = (function (state_32177){
while(true){
var ret_value__31959__auto__ = (function (){try{while(true){
var result__31960__auto__ = switch__31957__auto__.call(null,state_32177);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31960__auto__;
}
break;
}
}catch (e32195){if((e32195 instanceof Object)){
var ex__31961__auto__ = e32195;
var statearr_32196_32214 = state_32177;
(statearr_32196_32214[(5)] = ex__31961__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32177);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32195;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32215 = state_32177;
state_32177 = G__32215;
continue;
} else {
return ret_value__31959__auto__;
}
break;
}
});
cljs$core$async$state_machine__31958__auto__ = function(state_32177){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31958__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31958__auto____1.call(this,state_32177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31958__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31958__auto____0;
cljs$core$async$state_machine__31958__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31958__auto____1;
return cljs$core$async$state_machine__31958__auto__;
})()
;})(switch__31957__auto__,c__32052__auto___32199))
})();
var state__32054__auto__ = (function (){var statearr_32197 = f__32053__auto__.call(null);
(statearr_32197[(6)] = c__32052__auto___32199);

return statearr_32197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32054__auto__);
});})(c__32052__auto___32199))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__32216){
var vec__32217 = p__32216;
var v = cljs.core.nth.call(null,vec__32217,(0),null);
var p = cljs.core.nth.call(null,vec__32217,(1),null);
var job = vec__32217;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__32052__auto___32388 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32052__auto___32388,res,vec__32217,v,p,job,jobs,results){
return (function (){
var f__32053__auto__ = (function (){var switch__31957__auto__ = ((function (c__32052__auto___32388,res,vec__32217,v,p,job,jobs,results){
return (function (state_32224){
var state_val_32225 = (state_32224[(1)]);
if((state_val_32225 === (1))){
var state_32224__$1 = state_32224;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32224__$1,(2),res,v);
} else {
if((state_val_32225 === (2))){
var inst_32221 = (state_32224[(2)]);
var inst_32222 = cljs.core.async.close_BANG_.call(null,res);
var state_32224__$1 = (function (){var statearr_32226 = state_32224;
(statearr_32226[(7)] = inst_32221);

return statearr_32226;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32224__$1,inst_32222);
} else {
return null;
}
}
});})(c__32052__auto___32388,res,vec__32217,v,p,job,jobs,results))
;
return ((function (switch__31957__auto__,c__32052__auto___32388,res,vec__32217,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31958__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31958__auto____0 = (function (){
var statearr_32227 = [null,null,null,null,null,null,null,null];
(statearr_32227[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31958__auto__);

(statearr_32227[(1)] = (1));

return statearr_32227;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31958__auto____1 = (function (state_32224){
while(true){
var ret_value__31959__auto__ = (function (){try{while(true){
var result__31960__auto__ = switch__31957__auto__.call(null,state_32224);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31960__auto__;
}
break;
}
}catch (e32228){if((e32228 instanceof Object)){
var ex__31961__auto__ = e32228;
var statearr_32229_32389 = state_32224;
(statearr_32229_32389[(5)] = ex__31961__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32228;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32390 = state_32224;
state_32224 = G__32390;
continue;
} else {
return ret_value__31959__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31958__auto__ = function(state_32224){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31958__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31958__auto____1.call(this,state_32224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31958__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31958__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31958__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31958__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31958__auto__;
})()
;})(switch__31957__auto__,c__32052__auto___32388,res,vec__32217,v,p,job,jobs,results))
})();
var state__32054__auto__ = (function (){var statearr_32230 = f__32053__auto__.call(null);
(statearr_32230[(6)] = c__32052__auto___32388);

return statearr_32230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32054__auto__);
});})(c__32052__auto___32388,res,vec__32217,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__32231){
var vec__32232 = p__32231;
var v = cljs.core.nth.call(null,vec__32232,(0),null);
var p = cljs.core.nth.call(null,vec__32232,(1),null);
var job = vec__32232;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4518__auto___32391 = n;
var __32392 = (0);
while(true){
if((__32392 < n__4518__auto___32391)){
var G__32235_32393 = type;
var G__32235_32394__$1 = (((G__32235_32393 instanceof cljs.core.Keyword))?G__32235_32393.fqn:null);
switch (G__32235_32394__$1) {
case "compute":
var c__32052__auto___32396 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32392,c__32052__auto___32396,G__32235_32393,G__32235_32394__$1,n__4518__auto___32391,jobs,results,process,async){
return (function (){
var f__32053__auto__ = (function (){var switch__31957__auto__ = ((function (__32392,c__32052__auto___32396,G__32235_32393,G__32235_32394__$1,n__4518__auto___32391,jobs,results,process,async){
return (function (state_32248){
var state_val_32249 = (state_32248[(1)]);
if((state_val_32249 === (1))){
var state_32248__$1 = state_32248;
var statearr_32250_32397 = state_32248__$1;
(statearr_32250_32397[(2)] = null);

(statearr_32250_32397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32249 === (2))){
var state_32248__$1 = state_32248;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32248__$1,(4),jobs);
} else {
if((state_val_32249 === (3))){
var inst_32246 = (state_32248[(2)]);
var state_32248__$1 = state_32248;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32248__$1,inst_32246);
} else {
if((state_val_32249 === (4))){
var inst_32238 = (state_32248[(2)]);
var inst_32239 = process.call(null,inst_32238);
var state_32248__$1 = state_32248;
if(cljs.core.truth_(inst_32239)){
var statearr_32251_32398 = state_32248__$1;
(statearr_32251_32398[(1)] = (5));

} else {
var statearr_32252_32399 = state_32248__$1;
(statearr_32252_32399[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32249 === (5))){
var state_32248__$1 = state_32248;
var statearr_32253_32400 = state_32248__$1;
(statearr_32253_32400[(2)] = null);

(statearr_32253_32400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32249 === (6))){
var state_32248__$1 = state_32248;
var statearr_32254_32401 = state_32248__$1;
(statearr_32254_32401[(2)] = null);

(statearr_32254_32401[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32249 === (7))){
var inst_32244 = (state_32248[(2)]);
var state_32248__$1 = state_32248;
var statearr_32255_32402 = state_32248__$1;
(statearr_32255_32402[(2)] = inst_32244);

(statearr_32255_32402[(1)] = (3));


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
});})(__32392,c__32052__auto___32396,G__32235_32393,G__32235_32394__$1,n__4518__auto___32391,jobs,results,process,async))
;
return ((function (__32392,switch__31957__auto__,c__32052__auto___32396,G__32235_32393,G__32235_32394__$1,n__4518__auto___32391,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31958__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31958__auto____0 = (function (){
var statearr_32256 = [null,null,null,null,null,null,null];
(statearr_32256[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31958__auto__);

(statearr_32256[(1)] = (1));

return statearr_32256;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31958__auto____1 = (function (state_32248){
while(true){
var ret_value__31959__auto__ = (function (){try{while(true){
var result__31960__auto__ = switch__31957__auto__.call(null,state_32248);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31960__auto__;
}
break;
}
}catch (e32257){if((e32257 instanceof Object)){
var ex__31961__auto__ = e32257;
var statearr_32258_32403 = state_32248;
(statearr_32258_32403[(5)] = ex__31961__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32248);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32257;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32404 = state_32248;
state_32248 = G__32404;
continue;
} else {
return ret_value__31959__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31958__auto__ = function(state_32248){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31958__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31958__auto____1.call(this,state_32248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31958__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31958__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31958__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31958__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31958__auto__;
})()
;})(__32392,switch__31957__auto__,c__32052__auto___32396,G__32235_32393,G__32235_32394__$1,n__4518__auto___32391,jobs,results,process,async))
})();
var state__32054__auto__ = (function (){var statearr_32259 = f__32053__auto__.call(null);
(statearr_32259[(6)] = c__32052__auto___32396);

return statearr_32259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32054__auto__);
});})(__32392,c__32052__auto___32396,G__32235_32393,G__32235_32394__$1,n__4518__auto___32391,jobs,results,process,async))
);


break;
case "async":
var c__32052__auto___32405 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32392,c__32052__auto___32405,G__32235_32393,G__32235_32394__$1,n__4518__auto___32391,jobs,results,process,async){
return (function (){
var f__32053__auto__ = (function (){var switch__31957__auto__ = ((function (__32392,c__32052__auto___32405,G__32235_32393,G__32235_32394__$1,n__4518__auto___32391,jobs,results,process,async){
return (function (state_32272){
var state_val_32273 = (state_32272[(1)]);
if((state_val_32273 === (1))){
var state_32272__$1 = state_32272;
var statearr_32274_32406 = state_32272__$1;
(statearr_32274_32406[(2)] = null);

(statearr_32274_32406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32273 === (2))){
var state_32272__$1 = state_32272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32272__$1,(4),jobs);
} else {
if((state_val_32273 === (3))){
var inst_32270 = (state_32272[(2)]);
var state_32272__$1 = state_32272;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32272__$1,inst_32270);
} else {
if((state_val_32273 === (4))){
var inst_32262 = (state_32272[(2)]);
var inst_32263 = async.call(null,inst_32262);
var state_32272__$1 = state_32272;
if(cljs.core.truth_(inst_32263)){
var statearr_32275_32407 = state_32272__$1;
(statearr_32275_32407[(1)] = (5));

} else {
var statearr_32276_32408 = state_32272__$1;
(statearr_32276_32408[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32273 === (5))){
var state_32272__$1 = state_32272;
var statearr_32277_32409 = state_32272__$1;
(statearr_32277_32409[(2)] = null);

(statearr_32277_32409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32273 === (6))){
var state_32272__$1 = state_32272;
var statearr_32278_32410 = state_32272__$1;
(statearr_32278_32410[(2)] = null);

(statearr_32278_32410[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32273 === (7))){
var inst_32268 = (state_32272[(2)]);
var state_32272__$1 = state_32272;
var statearr_32279_32411 = state_32272__$1;
(statearr_32279_32411[(2)] = inst_32268);

(statearr_32279_32411[(1)] = (3));


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
});})(__32392,c__32052__auto___32405,G__32235_32393,G__32235_32394__$1,n__4518__auto___32391,jobs,results,process,async))
;
return ((function (__32392,switch__31957__auto__,c__32052__auto___32405,G__32235_32393,G__32235_32394__$1,n__4518__auto___32391,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31958__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31958__auto____0 = (function (){
var statearr_32280 = [null,null,null,null,null,null,null];
(statearr_32280[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31958__auto__);

(statearr_32280[(1)] = (1));

return statearr_32280;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31958__auto____1 = (function (state_32272){
while(true){
var ret_value__31959__auto__ = (function (){try{while(true){
var result__31960__auto__ = switch__31957__auto__.call(null,state_32272);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31960__auto__;
}
break;
}
}catch (e32281){if((e32281 instanceof Object)){
var ex__31961__auto__ = e32281;
var statearr_32282_32412 = state_32272;
(statearr_32282_32412[(5)] = ex__31961__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32281;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32413 = state_32272;
state_32272 = G__32413;
continue;
} else {
return ret_value__31959__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31958__auto__ = function(state_32272){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31958__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31958__auto____1.call(this,state_32272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31958__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31958__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31958__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31958__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31958__auto__;
})()
;})(__32392,switch__31957__auto__,c__32052__auto___32405,G__32235_32393,G__32235_32394__$1,n__4518__auto___32391,jobs,results,process,async))
})();
var state__32054__auto__ = (function (){var statearr_32283 = f__32053__auto__.call(null);
(statearr_32283[(6)] = c__32052__auto___32405);

return statearr_32283;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32054__auto__);
});})(__32392,c__32052__auto___32405,G__32235_32393,G__32235_32394__$1,n__4518__auto___32391,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32235_32394__$1)].join('')));

}

var G__32414 = (__32392 + (1));
__32392 = G__32414;
continue;
} else {
}
break;
}

var c__32052__auto___32415 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32052__auto___32415,jobs,results,process,async){
return (function (){
var f__32053__auto__ = (function (){var switch__31957__auto__ = ((function (c__32052__auto___32415,jobs,results,process,async){
return (function (state_32305){
var state_val_32306 = (state_32305[(1)]);
if((state_val_32306 === (7))){
var inst_32301 = (state_32305[(2)]);
var state_32305__$1 = state_32305;
var statearr_32307_32416 = state_32305__$1;
(statearr_32307_32416[(2)] = inst_32301);

(statearr_32307_32416[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32306 === (1))){
var state_32305__$1 = state_32305;
var statearr_32308_32417 = state_32305__$1;
(statearr_32308_32417[(2)] = null);

(statearr_32308_32417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32306 === (4))){
var inst_32286 = (state_32305[(7)]);
var inst_32286__$1 = (state_32305[(2)]);
var inst_32287 = (inst_32286__$1 == null);
var state_32305__$1 = (function (){var statearr_32309 = state_32305;
(statearr_32309[(7)] = inst_32286__$1);

return statearr_32309;
})();
if(cljs.core.truth_(inst_32287)){
var statearr_32310_32418 = state_32305__$1;
(statearr_32310_32418[(1)] = (5));

} else {
var statearr_32311_32419 = state_32305__$1;
(statearr_32311_32419[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32306 === (6))){
var inst_32291 = (state_32305[(8)]);
var inst_32286 = (state_32305[(7)]);
var inst_32291__$1 = cljs.core.async.chan.call(null,(1));
var inst_32292 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32293 = [inst_32286,inst_32291__$1];
var inst_32294 = (new cljs.core.PersistentVector(null,2,(5),inst_32292,inst_32293,null));
var state_32305__$1 = (function (){var statearr_32312 = state_32305;
(statearr_32312[(8)] = inst_32291__$1);

return statearr_32312;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32305__$1,(8),jobs,inst_32294);
} else {
if((state_val_32306 === (3))){
var inst_32303 = (state_32305[(2)]);
var state_32305__$1 = state_32305;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32305__$1,inst_32303);
} else {
if((state_val_32306 === (2))){
var state_32305__$1 = state_32305;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32305__$1,(4),from);
} else {
if((state_val_32306 === (9))){
var inst_32298 = (state_32305[(2)]);
var state_32305__$1 = (function (){var statearr_32313 = state_32305;
(statearr_32313[(9)] = inst_32298);

return statearr_32313;
})();
var statearr_32314_32420 = state_32305__$1;
(statearr_32314_32420[(2)] = null);

(statearr_32314_32420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32306 === (5))){
var inst_32289 = cljs.core.async.close_BANG_.call(null,jobs);
var state_32305__$1 = state_32305;
var statearr_32315_32421 = state_32305__$1;
(statearr_32315_32421[(2)] = inst_32289);

(statearr_32315_32421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32306 === (8))){
var inst_32291 = (state_32305[(8)]);
var inst_32296 = (state_32305[(2)]);
var state_32305__$1 = (function (){var statearr_32316 = state_32305;
(statearr_32316[(10)] = inst_32296);

return statearr_32316;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32305__$1,(9),results,inst_32291);
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
});})(c__32052__auto___32415,jobs,results,process,async))
;
return ((function (switch__31957__auto__,c__32052__auto___32415,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31958__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31958__auto____0 = (function (){
var statearr_32317 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32317[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31958__auto__);

(statearr_32317[(1)] = (1));

return statearr_32317;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31958__auto____1 = (function (state_32305){
while(true){
var ret_value__31959__auto__ = (function (){try{while(true){
var result__31960__auto__ = switch__31957__auto__.call(null,state_32305);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31960__auto__;
}
break;
}
}catch (e32318){if((e32318 instanceof Object)){
var ex__31961__auto__ = e32318;
var statearr_32319_32422 = state_32305;
(statearr_32319_32422[(5)] = ex__31961__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32305);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32318;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32423 = state_32305;
state_32305 = G__32423;
continue;
} else {
return ret_value__31959__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31958__auto__ = function(state_32305){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31958__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31958__auto____1.call(this,state_32305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31958__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31958__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31958__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31958__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31958__auto__;
})()
;})(switch__31957__auto__,c__32052__auto___32415,jobs,results,process,async))
})();
var state__32054__auto__ = (function (){var statearr_32320 = f__32053__auto__.call(null);
(statearr_32320[(6)] = c__32052__auto___32415);

return statearr_32320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32054__auto__);
});})(c__32052__auto___32415,jobs,results,process,async))
);


var c__32052__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32052__auto__,jobs,results,process,async){
return (function (){
var f__32053__auto__ = (function (){var switch__31957__auto__ = ((function (c__32052__auto__,jobs,results,process,async){
return (function (state_32358){
var state_val_32359 = (state_32358[(1)]);
if((state_val_32359 === (7))){
var inst_32354 = (state_32358[(2)]);
var state_32358__$1 = state_32358;
var statearr_32360_32424 = state_32358__$1;
(statearr_32360_32424[(2)] = inst_32354);

(statearr_32360_32424[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32359 === (20))){
var state_32358__$1 = state_32358;
var statearr_32361_32425 = state_32358__$1;
(statearr_32361_32425[(2)] = null);

(statearr_32361_32425[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32359 === (1))){
var state_32358__$1 = state_32358;
var statearr_32362_32426 = state_32358__$1;
(statearr_32362_32426[(2)] = null);

(statearr_32362_32426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32359 === (4))){
var inst_32323 = (state_32358[(7)]);
var inst_32323__$1 = (state_32358[(2)]);
var inst_32324 = (inst_32323__$1 == null);
var state_32358__$1 = (function (){var statearr_32363 = state_32358;
(statearr_32363[(7)] = inst_32323__$1);

return statearr_32363;
})();
if(cljs.core.truth_(inst_32324)){
var statearr_32364_32427 = state_32358__$1;
(statearr_32364_32427[(1)] = (5));

} else {
var statearr_32365_32428 = state_32358__$1;
(statearr_32365_32428[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32359 === (15))){
var inst_32336 = (state_32358[(8)]);
var state_32358__$1 = state_32358;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32358__$1,(18),to,inst_32336);
} else {
if((state_val_32359 === (21))){
var inst_32349 = (state_32358[(2)]);
var state_32358__$1 = state_32358;
var statearr_32366_32429 = state_32358__$1;
(statearr_32366_32429[(2)] = inst_32349);

(statearr_32366_32429[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32359 === (13))){
var inst_32351 = (state_32358[(2)]);
var state_32358__$1 = (function (){var statearr_32367 = state_32358;
(statearr_32367[(9)] = inst_32351);

return statearr_32367;
})();
var statearr_32368_32430 = state_32358__$1;
(statearr_32368_32430[(2)] = null);

(statearr_32368_32430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32359 === (6))){
var inst_32323 = (state_32358[(7)]);
var state_32358__$1 = state_32358;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32358__$1,(11),inst_32323);
} else {
if((state_val_32359 === (17))){
var inst_32344 = (state_32358[(2)]);
var state_32358__$1 = state_32358;
if(cljs.core.truth_(inst_32344)){
var statearr_32369_32431 = state_32358__$1;
(statearr_32369_32431[(1)] = (19));

} else {
var statearr_32370_32432 = state_32358__$1;
(statearr_32370_32432[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32359 === (3))){
var inst_32356 = (state_32358[(2)]);
var state_32358__$1 = state_32358;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32358__$1,inst_32356);
} else {
if((state_val_32359 === (12))){
var inst_32333 = (state_32358[(10)]);
var state_32358__$1 = state_32358;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32358__$1,(14),inst_32333);
} else {
if((state_val_32359 === (2))){
var state_32358__$1 = state_32358;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32358__$1,(4),results);
} else {
if((state_val_32359 === (19))){
var state_32358__$1 = state_32358;
var statearr_32371_32433 = state_32358__$1;
(statearr_32371_32433[(2)] = null);

(statearr_32371_32433[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32359 === (11))){
var inst_32333 = (state_32358[(2)]);
var state_32358__$1 = (function (){var statearr_32372 = state_32358;
(statearr_32372[(10)] = inst_32333);

return statearr_32372;
})();
var statearr_32373_32434 = state_32358__$1;
(statearr_32373_32434[(2)] = null);

(statearr_32373_32434[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32359 === (9))){
var state_32358__$1 = state_32358;
var statearr_32374_32435 = state_32358__$1;
(statearr_32374_32435[(2)] = null);

(statearr_32374_32435[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32359 === (5))){
var state_32358__$1 = state_32358;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32375_32436 = state_32358__$1;
(statearr_32375_32436[(1)] = (8));

} else {
var statearr_32376_32437 = state_32358__$1;
(statearr_32376_32437[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32359 === (14))){
var inst_32336 = (state_32358[(8)]);
var inst_32338 = (state_32358[(11)]);
var inst_32336__$1 = (state_32358[(2)]);
var inst_32337 = (inst_32336__$1 == null);
var inst_32338__$1 = cljs.core.not.call(null,inst_32337);
var state_32358__$1 = (function (){var statearr_32377 = state_32358;
(statearr_32377[(8)] = inst_32336__$1);

(statearr_32377[(11)] = inst_32338__$1);

return statearr_32377;
})();
if(inst_32338__$1){
var statearr_32378_32438 = state_32358__$1;
(statearr_32378_32438[(1)] = (15));

} else {
var statearr_32379_32439 = state_32358__$1;
(statearr_32379_32439[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32359 === (16))){
var inst_32338 = (state_32358[(11)]);
var state_32358__$1 = state_32358;
var statearr_32380_32440 = state_32358__$1;
(statearr_32380_32440[(2)] = inst_32338);

(statearr_32380_32440[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32359 === (10))){
var inst_32330 = (state_32358[(2)]);
var state_32358__$1 = state_32358;
var statearr_32381_32441 = state_32358__$1;
(statearr_32381_32441[(2)] = inst_32330);

(statearr_32381_32441[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32359 === (18))){
var inst_32341 = (state_32358[(2)]);
var state_32358__$1 = state_32358;
var statearr_32382_32442 = state_32358__$1;
(statearr_32382_32442[(2)] = inst_32341);

(statearr_32382_32442[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32359 === (8))){
var inst_32327 = cljs.core.async.close_BANG_.call(null,to);
var state_32358__$1 = state_32358;
var statearr_32383_32443 = state_32358__$1;
(statearr_32383_32443[(2)] = inst_32327);

(statearr_32383_32443[(1)] = (10));


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
});})(c__32052__auto__,jobs,results,process,async))
;
return ((function (switch__31957__auto__,c__32052__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31958__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31958__auto____0 = (function (){
var statearr_32384 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32384[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31958__auto__);

(statearr_32384[(1)] = (1));

return statearr_32384;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31958__auto____1 = (function (state_32358){
while(true){
var ret_value__31959__auto__ = (function (){try{while(true){
var result__31960__auto__ = switch__31957__auto__.call(null,state_32358);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31960__auto__;
}
break;
}
}catch (e32385){if((e32385 instanceof Object)){
var ex__31961__auto__ = e32385;
var statearr_32386_32444 = state_32358;
(statearr_32386_32444[(5)] = ex__31961__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32358);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32385;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32445 = state_32358;
state_32358 = G__32445;
continue;
} else {
return ret_value__31959__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31958__auto__ = function(state_32358){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31958__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31958__auto____1.call(this,state_32358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31958__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31958__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31958__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31958__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31958__auto__;
})()
;})(switch__31957__auto__,c__32052__auto__,jobs,results,process,async))
})();
var state__32054__auto__ = (function (){var statearr_32387 = f__32053__auto__.call(null);
(statearr_32387[(6)] = c__32052__auto__);

return statearr_32387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32054__auto__);
});})(c__32052__auto__,jobs,results,process,async))
);

return c__32052__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__32447 = arguments.length;
switch (G__32447) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__32450 = arguments.length;
switch (G__32450) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__32453 = arguments.length;
switch (G__32453) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__32052__auto___32502 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32052__auto___32502,tc,fc){
return (function (){
var f__32053__auto__ = (function (){var switch__31957__auto__ = ((function (c__32052__auto___32502,tc,fc){
return (function (state_32479){
var state_val_32480 = (state_32479[(1)]);
if((state_val_32480 === (7))){
var inst_32475 = (state_32479[(2)]);
var state_32479__$1 = state_32479;
var statearr_32481_32503 = state_32479__$1;
(statearr_32481_32503[(2)] = inst_32475);

(statearr_32481_32503[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32480 === (1))){
var state_32479__$1 = state_32479;
var statearr_32482_32504 = state_32479__$1;
(statearr_32482_32504[(2)] = null);

(statearr_32482_32504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32480 === (4))){
var inst_32456 = (state_32479[(7)]);
var inst_32456__$1 = (state_32479[(2)]);
var inst_32457 = (inst_32456__$1 == null);
var state_32479__$1 = (function (){var statearr_32483 = state_32479;
(statearr_32483[(7)] = inst_32456__$1);

return statearr_32483;
})();
if(cljs.core.truth_(inst_32457)){
var statearr_32484_32505 = state_32479__$1;
(statearr_32484_32505[(1)] = (5));

} else {
var statearr_32485_32506 = state_32479__$1;
(statearr_32485_32506[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32480 === (13))){
var state_32479__$1 = state_32479;
var statearr_32486_32507 = state_32479__$1;
(statearr_32486_32507[(2)] = null);

(statearr_32486_32507[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32480 === (6))){
var inst_32456 = (state_32479[(7)]);
var inst_32462 = p.call(null,inst_32456);
var state_32479__$1 = state_32479;
if(cljs.core.truth_(inst_32462)){
var statearr_32487_32508 = state_32479__$1;
(statearr_32487_32508[(1)] = (9));

} else {
var statearr_32488_32509 = state_32479__$1;
(statearr_32488_32509[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32480 === (3))){
var inst_32477 = (state_32479[(2)]);
var state_32479__$1 = state_32479;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32479__$1,inst_32477);
} else {
if((state_val_32480 === (12))){
var state_32479__$1 = state_32479;
var statearr_32489_32510 = state_32479__$1;
(statearr_32489_32510[(2)] = null);

(statearr_32489_32510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32480 === (2))){
var state_32479__$1 = state_32479;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32479__$1,(4),ch);
} else {
if((state_val_32480 === (11))){
var inst_32456 = (state_32479[(7)]);
var inst_32466 = (state_32479[(2)]);
var state_32479__$1 = state_32479;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32479__$1,(8),inst_32466,inst_32456);
} else {
if((state_val_32480 === (9))){
var state_32479__$1 = state_32479;
var statearr_32490_32511 = state_32479__$1;
(statearr_32490_32511[(2)] = tc);

(statearr_32490_32511[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32480 === (5))){
var inst_32459 = cljs.core.async.close_BANG_.call(null,tc);
var inst_32460 = cljs.core.async.close_BANG_.call(null,fc);
var state_32479__$1 = (function (){var statearr_32491 = state_32479;
(statearr_32491[(8)] = inst_32459);

return statearr_32491;
})();
var statearr_32492_32512 = state_32479__$1;
(statearr_32492_32512[(2)] = inst_32460);

(statearr_32492_32512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32480 === (14))){
var inst_32473 = (state_32479[(2)]);
var state_32479__$1 = state_32479;
var statearr_32493_32513 = state_32479__$1;
(statearr_32493_32513[(2)] = inst_32473);

(statearr_32493_32513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32480 === (10))){
var state_32479__$1 = state_32479;
var statearr_32494_32514 = state_32479__$1;
(statearr_32494_32514[(2)] = fc);

(statearr_32494_32514[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32480 === (8))){
var inst_32468 = (state_32479[(2)]);
var state_32479__$1 = state_32479;
if(cljs.core.truth_(inst_32468)){
var statearr_32495_32515 = state_32479__$1;
(statearr_32495_32515[(1)] = (12));

} else {
var statearr_32496_32516 = state_32479__$1;
(statearr_32496_32516[(1)] = (13));

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
});})(c__32052__auto___32502,tc,fc))
;
return ((function (switch__31957__auto__,c__32052__auto___32502,tc,fc){
return (function() {
var cljs$core$async$state_machine__31958__auto__ = null;
var cljs$core$async$state_machine__31958__auto____0 = (function (){
var statearr_32497 = [null,null,null,null,null,null,null,null,null];
(statearr_32497[(0)] = cljs$core$async$state_machine__31958__auto__);

(statearr_32497[(1)] = (1));

return statearr_32497;
});
var cljs$core$async$state_machine__31958__auto____1 = (function (state_32479){
while(true){
var ret_value__31959__auto__ = (function (){try{while(true){
var result__31960__auto__ = switch__31957__auto__.call(null,state_32479);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31960__auto__;
}
break;
}
}catch (e32498){if((e32498 instanceof Object)){
var ex__31961__auto__ = e32498;
var statearr_32499_32517 = state_32479;
(statearr_32499_32517[(5)] = ex__31961__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32479);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32498;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32518 = state_32479;
state_32479 = G__32518;
continue;
} else {
return ret_value__31959__auto__;
}
break;
}
});
cljs$core$async$state_machine__31958__auto__ = function(state_32479){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31958__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31958__auto____1.call(this,state_32479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31958__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31958__auto____0;
cljs$core$async$state_machine__31958__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31958__auto____1;
return cljs$core$async$state_machine__31958__auto__;
})()
;})(switch__31957__auto__,c__32052__auto___32502,tc,fc))
})();
var state__32054__auto__ = (function (){var statearr_32500 = f__32053__auto__.call(null);
(statearr_32500[(6)] = c__32052__auto___32502);

return statearr_32500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32054__auto__);
});})(c__32052__auto___32502,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__32052__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32052__auto__){
return (function (){
var f__32053__auto__ = (function (){var switch__31957__auto__ = ((function (c__32052__auto__){
return (function (state_32539){
var state_val_32540 = (state_32539[(1)]);
if((state_val_32540 === (7))){
var inst_32535 = (state_32539[(2)]);
var state_32539__$1 = state_32539;
var statearr_32541_32559 = state_32539__$1;
(statearr_32541_32559[(2)] = inst_32535);

(statearr_32541_32559[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32540 === (1))){
var inst_32519 = init;
var state_32539__$1 = (function (){var statearr_32542 = state_32539;
(statearr_32542[(7)] = inst_32519);

return statearr_32542;
})();
var statearr_32543_32560 = state_32539__$1;
(statearr_32543_32560[(2)] = null);

(statearr_32543_32560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32540 === (4))){
var inst_32522 = (state_32539[(8)]);
var inst_32522__$1 = (state_32539[(2)]);
var inst_32523 = (inst_32522__$1 == null);
var state_32539__$1 = (function (){var statearr_32544 = state_32539;
(statearr_32544[(8)] = inst_32522__$1);

return statearr_32544;
})();
if(cljs.core.truth_(inst_32523)){
var statearr_32545_32561 = state_32539__$1;
(statearr_32545_32561[(1)] = (5));

} else {
var statearr_32546_32562 = state_32539__$1;
(statearr_32546_32562[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32540 === (6))){
var inst_32526 = (state_32539[(9)]);
var inst_32522 = (state_32539[(8)]);
var inst_32519 = (state_32539[(7)]);
var inst_32526__$1 = f.call(null,inst_32519,inst_32522);
var inst_32527 = cljs.core.reduced_QMARK_.call(null,inst_32526__$1);
var state_32539__$1 = (function (){var statearr_32547 = state_32539;
(statearr_32547[(9)] = inst_32526__$1);

return statearr_32547;
})();
if(inst_32527){
var statearr_32548_32563 = state_32539__$1;
(statearr_32548_32563[(1)] = (8));

} else {
var statearr_32549_32564 = state_32539__$1;
(statearr_32549_32564[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32540 === (3))){
var inst_32537 = (state_32539[(2)]);
var state_32539__$1 = state_32539;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32539__$1,inst_32537);
} else {
if((state_val_32540 === (2))){
var state_32539__$1 = state_32539;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32539__$1,(4),ch);
} else {
if((state_val_32540 === (9))){
var inst_32526 = (state_32539[(9)]);
var inst_32519 = inst_32526;
var state_32539__$1 = (function (){var statearr_32550 = state_32539;
(statearr_32550[(7)] = inst_32519);

return statearr_32550;
})();
var statearr_32551_32565 = state_32539__$1;
(statearr_32551_32565[(2)] = null);

(statearr_32551_32565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32540 === (5))){
var inst_32519 = (state_32539[(7)]);
var state_32539__$1 = state_32539;
var statearr_32552_32566 = state_32539__$1;
(statearr_32552_32566[(2)] = inst_32519);

(statearr_32552_32566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32540 === (10))){
var inst_32533 = (state_32539[(2)]);
var state_32539__$1 = state_32539;
var statearr_32553_32567 = state_32539__$1;
(statearr_32553_32567[(2)] = inst_32533);

(statearr_32553_32567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32540 === (8))){
var inst_32526 = (state_32539[(9)]);
var inst_32529 = cljs.core.deref.call(null,inst_32526);
var state_32539__$1 = state_32539;
var statearr_32554_32568 = state_32539__$1;
(statearr_32554_32568[(2)] = inst_32529);

(statearr_32554_32568[(1)] = (10));


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
});})(c__32052__auto__))
;
return ((function (switch__31957__auto__,c__32052__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__31958__auto__ = null;
var cljs$core$async$reduce_$_state_machine__31958__auto____0 = (function (){
var statearr_32555 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32555[(0)] = cljs$core$async$reduce_$_state_machine__31958__auto__);

(statearr_32555[(1)] = (1));

return statearr_32555;
});
var cljs$core$async$reduce_$_state_machine__31958__auto____1 = (function (state_32539){
while(true){
var ret_value__31959__auto__ = (function (){try{while(true){
var result__31960__auto__ = switch__31957__auto__.call(null,state_32539);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31960__auto__;
}
break;
}
}catch (e32556){if((e32556 instanceof Object)){
var ex__31961__auto__ = e32556;
var statearr_32557_32569 = state_32539;
(statearr_32557_32569[(5)] = ex__31961__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32539);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32556;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32570 = state_32539;
state_32539 = G__32570;
continue;
} else {
return ret_value__31959__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__31958__auto__ = function(state_32539){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__31958__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__31958__auto____1.call(this,state_32539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__31958__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__31958__auto____0;
cljs$core$async$reduce_$_state_machine__31958__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__31958__auto____1;
return cljs$core$async$reduce_$_state_machine__31958__auto__;
})()
;})(switch__31957__auto__,c__32052__auto__))
})();
var state__32054__auto__ = (function (){var statearr_32558 = f__32053__auto__.call(null);
(statearr_32558[(6)] = c__32052__auto__);

return statearr_32558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32054__auto__);
});})(c__32052__auto__))
);

return c__32052__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__32052__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32052__auto__,f__$1){
return (function (){
var f__32053__auto__ = (function (){var switch__31957__auto__ = ((function (c__32052__auto__,f__$1){
return (function (state_32576){
var state_val_32577 = (state_32576[(1)]);
if((state_val_32577 === (1))){
var inst_32571 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_32576__$1 = state_32576;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32576__$1,(2),inst_32571);
} else {
if((state_val_32577 === (2))){
var inst_32573 = (state_32576[(2)]);
var inst_32574 = f__$1.call(null,inst_32573);
var state_32576__$1 = state_32576;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32576__$1,inst_32574);
} else {
return null;
}
}
});})(c__32052__auto__,f__$1))
;
return ((function (switch__31957__auto__,c__32052__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__31958__auto__ = null;
var cljs$core$async$transduce_$_state_machine__31958__auto____0 = (function (){
var statearr_32578 = [null,null,null,null,null,null,null];
(statearr_32578[(0)] = cljs$core$async$transduce_$_state_machine__31958__auto__);

(statearr_32578[(1)] = (1));

return statearr_32578;
});
var cljs$core$async$transduce_$_state_machine__31958__auto____1 = (function (state_32576){
while(true){
var ret_value__31959__auto__ = (function (){try{while(true){
var result__31960__auto__ = switch__31957__auto__.call(null,state_32576);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31960__auto__;
}
break;
}
}catch (e32579){if((e32579 instanceof Object)){
var ex__31961__auto__ = e32579;
var statearr_32580_32582 = state_32576;
(statearr_32580_32582[(5)] = ex__31961__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32576);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32579;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32583 = state_32576;
state_32576 = G__32583;
continue;
} else {
return ret_value__31959__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__31958__auto__ = function(state_32576){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__31958__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__31958__auto____1.call(this,state_32576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__31958__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__31958__auto____0;
cljs$core$async$transduce_$_state_machine__31958__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__31958__auto____1;
return cljs$core$async$transduce_$_state_machine__31958__auto__;
})()
;})(switch__31957__auto__,c__32052__auto__,f__$1))
})();
var state__32054__auto__ = (function (){var statearr_32581 = f__32053__auto__.call(null);
(statearr_32581[(6)] = c__32052__auto__);

return statearr_32581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32054__auto__);
});})(c__32052__auto__,f__$1))
);

return c__32052__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__32585 = arguments.length;
switch (G__32585) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__32052__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32052__auto__){
return (function (){
var f__32053__auto__ = (function (){var switch__31957__auto__ = ((function (c__32052__auto__){
return (function (state_32610){
var state_val_32611 = (state_32610[(1)]);
if((state_val_32611 === (7))){
var inst_32592 = (state_32610[(2)]);
var state_32610__$1 = state_32610;
var statearr_32612_32633 = state_32610__$1;
(statearr_32612_32633[(2)] = inst_32592);

(statearr_32612_32633[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32611 === (1))){
var inst_32586 = cljs.core.seq.call(null,coll);
var inst_32587 = inst_32586;
var state_32610__$1 = (function (){var statearr_32613 = state_32610;
(statearr_32613[(7)] = inst_32587);

return statearr_32613;
})();
var statearr_32614_32634 = state_32610__$1;
(statearr_32614_32634[(2)] = null);

(statearr_32614_32634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32611 === (4))){
var inst_32587 = (state_32610[(7)]);
var inst_32590 = cljs.core.first.call(null,inst_32587);
var state_32610__$1 = state_32610;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32610__$1,(7),ch,inst_32590);
} else {
if((state_val_32611 === (13))){
var inst_32604 = (state_32610[(2)]);
var state_32610__$1 = state_32610;
var statearr_32615_32635 = state_32610__$1;
(statearr_32615_32635[(2)] = inst_32604);

(statearr_32615_32635[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32611 === (6))){
var inst_32595 = (state_32610[(2)]);
var state_32610__$1 = state_32610;
if(cljs.core.truth_(inst_32595)){
var statearr_32616_32636 = state_32610__$1;
(statearr_32616_32636[(1)] = (8));

} else {
var statearr_32617_32637 = state_32610__$1;
(statearr_32617_32637[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32611 === (3))){
var inst_32608 = (state_32610[(2)]);
var state_32610__$1 = state_32610;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32610__$1,inst_32608);
} else {
if((state_val_32611 === (12))){
var state_32610__$1 = state_32610;
var statearr_32618_32638 = state_32610__$1;
(statearr_32618_32638[(2)] = null);

(statearr_32618_32638[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32611 === (2))){
var inst_32587 = (state_32610[(7)]);
var state_32610__$1 = state_32610;
if(cljs.core.truth_(inst_32587)){
var statearr_32619_32639 = state_32610__$1;
(statearr_32619_32639[(1)] = (4));

} else {
var statearr_32620_32640 = state_32610__$1;
(statearr_32620_32640[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32611 === (11))){
var inst_32601 = cljs.core.async.close_BANG_.call(null,ch);
var state_32610__$1 = state_32610;
var statearr_32621_32641 = state_32610__$1;
(statearr_32621_32641[(2)] = inst_32601);

(statearr_32621_32641[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32611 === (9))){
var state_32610__$1 = state_32610;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32622_32642 = state_32610__$1;
(statearr_32622_32642[(1)] = (11));

} else {
var statearr_32623_32643 = state_32610__$1;
(statearr_32623_32643[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32611 === (5))){
var inst_32587 = (state_32610[(7)]);
var state_32610__$1 = state_32610;
var statearr_32624_32644 = state_32610__$1;
(statearr_32624_32644[(2)] = inst_32587);

(statearr_32624_32644[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32611 === (10))){
var inst_32606 = (state_32610[(2)]);
var state_32610__$1 = state_32610;
var statearr_32625_32645 = state_32610__$1;
(statearr_32625_32645[(2)] = inst_32606);

(statearr_32625_32645[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32611 === (8))){
var inst_32587 = (state_32610[(7)]);
var inst_32597 = cljs.core.next.call(null,inst_32587);
var inst_32587__$1 = inst_32597;
var state_32610__$1 = (function (){var statearr_32626 = state_32610;
(statearr_32626[(7)] = inst_32587__$1);

return statearr_32626;
})();
var statearr_32627_32646 = state_32610__$1;
(statearr_32627_32646[(2)] = null);

(statearr_32627_32646[(1)] = (2));


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
});})(c__32052__auto__))
;
return ((function (switch__31957__auto__,c__32052__auto__){
return (function() {
var cljs$core$async$state_machine__31958__auto__ = null;
var cljs$core$async$state_machine__31958__auto____0 = (function (){
var statearr_32628 = [null,null,null,null,null,null,null,null];
(statearr_32628[(0)] = cljs$core$async$state_machine__31958__auto__);

(statearr_32628[(1)] = (1));

return statearr_32628;
});
var cljs$core$async$state_machine__31958__auto____1 = (function (state_32610){
while(true){
var ret_value__31959__auto__ = (function (){try{while(true){
var result__31960__auto__ = switch__31957__auto__.call(null,state_32610);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31960__auto__;
}
break;
}
}catch (e32629){if((e32629 instanceof Object)){
var ex__31961__auto__ = e32629;
var statearr_32630_32647 = state_32610;
(statearr_32630_32647[(5)] = ex__31961__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32610);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32629;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32648 = state_32610;
state_32610 = G__32648;
continue;
} else {
return ret_value__31959__auto__;
}
break;
}
});
cljs$core$async$state_machine__31958__auto__ = function(state_32610){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31958__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31958__auto____1.call(this,state_32610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31958__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31958__auto____0;
cljs$core$async$state_machine__31958__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31958__auto____1;
return cljs$core$async$state_machine__31958__auto__;
})()
;})(switch__31957__auto__,c__32052__auto__))
})();
var state__32054__auto__ = (function (){var statearr_32631 = f__32053__auto__.call(null);
(statearr_32631[(6)] = c__32052__auto__);

return statearr_32631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32054__auto__);
});})(c__32052__auto__))
);

return c__32052__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4347__auto__ = (((_ == null))?null:_);
var m__4348__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,_);
} else {
var m__4348__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4348__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m);
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32649 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32649 = (function (ch,cs,meta32650){
this.ch = ch;
this.cs = cs;
this.meta32650 = meta32650;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32649.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32651,meta32650__$1){
var self__ = this;
var _32651__$1 = this;
return (new cljs.core.async.t_cljs$core$async32649(self__.ch,self__.cs,meta32650__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async32649.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32651){
var self__ = this;
var _32651__$1 = this;
return self__.meta32650;
});})(cs))
;

cljs.core.async.t_cljs$core$async32649.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32649.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async32649.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32649.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32649.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32649.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32649.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32650","meta32650",-874171111,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async32649.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32649.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32649";

cljs.core.async.t_cljs$core$async32649.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async32649");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32649.
 */
cljs.core.async.__GT_t_cljs$core$async32649 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async32649(ch__$1,cs__$1,meta32650){
return (new cljs.core.async.t_cljs$core$async32649(ch__$1,cs__$1,meta32650));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async32649(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__32052__auto___32871 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32052__auto___32871,cs,m,dchan,dctr,done){
return (function (){
var f__32053__auto__ = (function (){var switch__31957__auto__ = ((function (c__32052__auto___32871,cs,m,dchan,dctr,done){
return (function (state_32786){
var state_val_32787 = (state_32786[(1)]);
if((state_val_32787 === (7))){
var inst_32782 = (state_32786[(2)]);
var state_32786__$1 = state_32786;
var statearr_32788_32872 = state_32786__$1;
(statearr_32788_32872[(2)] = inst_32782);

(statearr_32788_32872[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32787 === (20))){
var inst_32685 = (state_32786[(7)]);
var inst_32697 = cljs.core.first.call(null,inst_32685);
var inst_32698 = cljs.core.nth.call(null,inst_32697,(0),null);
var inst_32699 = cljs.core.nth.call(null,inst_32697,(1),null);
var state_32786__$1 = (function (){var statearr_32789 = state_32786;
(statearr_32789[(8)] = inst_32698);

return statearr_32789;
})();
if(cljs.core.truth_(inst_32699)){
var statearr_32790_32873 = state_32786__$1;
(statearr_32790_32873[(1)] = (22));

} else {
var statearr_32791_32874 = state_32786__$1;
(statearr_32791_32874[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32787 === (27))){
var inst_32729 = (state_32786[(9)]);
var inst_32654 = (state_32786[(10)]);
var inst_32727 = (state_32786[(11)]);
var inst_32734 = (state_32786[(12)]);
var inst_32734__$1 = cljs.core._nth.call(null,inst_32727,inst_32729);
var inst_32735 = cljs.core.async.put_BANG_.call(null,inst_32734__$1,inst_32654,done);
var state_32786__$1 = (function (){var statearr_32792 = state_32786;
(statearr_32792[(12)] = inst_32734__$1);

return statearr_32792;
})();
if(cljs.core.truth_(inst_32735)){
var statearr_32793_32875 = state_32786__$1;
(statearr_32793_32875[(1)] = (30));

} else {
var statearr_32794_32876 = state_32786__$1;
(statearr_32794_32876[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32787 === (1))){
var state_32786__$1 = state_32786;
var statearr_32795_32877 = state_32786__$1;
(statearr_32795_32877[(2)] = null);

(statearr_32795_32877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32787 === (24))){
var inst_32685 = (state_32786[(7)]);
var inst_32704 = (state_32786[(2)]);
var inst_32705 = cljs.core.next.call(null,inst_32685);
var inst_32663 = inst_32705;
var inst_32664 = null;
var inst_32665 = (0);
var inst_32666 = (0);
var state_32786__$1 = (function (){var statearr_32796 = state_32786;
(statearr_32796[(13)] = inst_32663);

(statearr_32796[(14)] = inst_32704);

(statearr_32796[(15)] = inst_32664);

(statearr_32796[(16)] = inst_32666);

(statearr_32796[(17)] = inst_32665);

return statearr_32796;
})();
var statearr_32797_32878 = state_32786__$1;
(statearr_32797_32878[(2)] = null);

(statearr_32797_32878[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32787 === (39))){
var state_32786__$1 = state_32786;
var statearr_32801_32879 = state_32786__$1;
(statearr_32801_32879[(2)] = null);

(statearr_32801_32879[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32787 === (4))){
var inst_32654 = (state_32786[(10)]);
var inst_32654__$1 = (state_32786[(2)]);
var inst_32655 = (inst_32654__$1 == null);
var state_32786__$1 = (function (){var statearr_32802 = state_32786;
(statearr_32802[(10)] = inst_32654__$1);

return statearr_32802;
})();
if(cljs.core.truth_(inst_32655)){
var statearr_32803_32880 = state_32786__$1;
(statearr_32803_32880[(1)] = (5));

} else {
var statearr_32804_32881 = state_32786__$1;
(statearr_32804_32881[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32787 === (15))){
var inst_32663 = (state_32786[(13)]);
var inst_32664 = (state_32786[(15)]);
var inst_32666 = (state_32786[(16)]);
var inst_32665 = (state_32786[(17)]);
var inst_32681 = (state_32786[(2)]);
var inst_32682 = (inst_32666 + (1));
var tmp32798 = inst_32663;
var tmp32799 = inst_32664;
var tmp32800 = inst_32665;
var inst_32663__$1 = tmp32798;
var inst_32664__$1 = tmp32799;
var inst_32665__$1 = tmp32800;
var inst_32666__$1 = inst_32682;
var state_32786__$1 = (function (){var statearr_32805 = state_32786;
(statearr_32805[(13)] = inst_32663__$1);

(statearr_32805[(18)] = inst_32681);

(statearr_32805[(15)] = inst_32664__$1);

(statearr_32805[(16)] = inst_32666__$1);

(statearr_32805[(17)] = inst_32665__$1);

return statearr_32805;
})();
var statearr_32806_32882 = state_32786__$1;
(statearr_32806_32882[(2)] = null);

(statearr_32806_32882[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32787 === (21))){
var inst_32708 = (state_32786[(2)]);
var state_32786__$1 = state_32786;
var statearr_32810_32883 = state_32786__$1;
(statearr_32810_32883[(2)] = inst_32708);

(statearr_32810_32883[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32787 === (31))){
var inst_32734 = (state_32786[(12)]);
var inst_32738 = done.call(null,null);
var inst_32739 = cljs.core.async.untap_STAR_.call(null,m,inst_32734);
var state_32786__$1 = (function (){var statearr_32811 = state_32786;
(statearr_32811[(19)] = inst_32738);

return statearr_32811;
})();
var statearr_32812_32884 = state_32786__$1;
(statearr_32812_32884[(2)] = inst_32739);

(statearr_32812_32884[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32787 === (32))){
var inst_32729 = (state_32786[(9)]);
var inst_32728 = (state_32786[(20)]);
var inst_32727 = (state_32786[(11)]);
var inst_32726 = (state_32786[(21)]);
var inst_32741 = (state_32786[(2)]);
var inst_32742 = (inst_32729 + (1));
var tmp32807 = inst_32728;
var tmp32808 = inst_32727;
var tmp32809 = inst_32726;
var inst_32726__$1 = tmp32809;
var inst_32727__$1 = tmp32808;
var inst_32728__$1 = tmp32807;
var inst_32729__$1 = inst_32742;
var state_32786__$1 = (function (){var statearr_32813 = state_32786;
(statearr_32813[(9)] = inst_32729__$1);

(statearr_32813[(20)] = inst_32728__$1);

(statearr_32813[(22)] = inst_32741);

(statearr_32813[(11)] = inst_32727__$1);

(statearr_32813[(21)] = inst_32726__$1);

return statearr_32813;
})();
var statearr_32814_32885 = state_32786__$1;
(statearr_32814_32885[(2)] = null);

(statearr_32814_32885[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32787 === (40))){
var inst_32754 = (state_32786[(23)]);
var inst_32758 = done.call(null,null);
var inst_32759 = cljs.core.async.untap_STAR_.call(null,m,inst_32754);
var state_32786__$1 = (function (){var statearr_32815 = state_32786;
(statearr_32815[(24)] = inst_32758);

return statearr_32815;
})();
var statearr_32816_32886 = state_32786__$1;
(statearr_32816_32886[(2)] = inst_32759);

(statearr_32816_32886[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32787 === (33))){
var inst_32745 = (state_32786[(25)]);
var inst_32747 = cljs.core.chunked_seq_QMARK_.call(null,inst_32745);
var state_32786__$1 = state_32786;
if(inst_32747){
var statearr_32817_32887 = state_32786__$1;
(statearr_32817_32887[(1)] = (36));

} else {
var statearr_32818_32888 = state_32786__$1;
(statearr_32818_32888[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32787 === (13))){
var inst_32675 = (state_32786[(26)]);
var inst_32678 = cljs.core.async.close_BANG_.call(null,inst_32675);
var state_32786__$1 = state_32786;
var statearr_32819_32889 = state_32786__$1;
(statearr_32819_32889[(2)] = inst_32678);

(statearr_32819_32889[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32787 === (22))){
var inst_32698 = (state_32786[(8)]);
var inst_32701 = cljs.core.async.close_BANG_.call(null,inst_32698);
var state_32786__$1 = state_32786;
var statearr_32820_32890 = state_32786__$1;
(statearr_32820_32890[(2)] = inst_32701);

(statearr_32820_32890[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32787 === (36))){
var inst_32745 = (state_32786[(25)]);
var inst_32749 = cljs.core.chunk_first.call(null,inst_32745);
var inst_32750 = cljs.core.chunk_rest.call(null,inst_32745);
var inst_32751 = cljs.core.count.call(null,inst_32749);
var inst_32726 = inst_32750;
var inst_32727 = inst_32749;
var inst_32728 = inst_32751;
var inst_32729 = (0);
var state_32786__$1 = (function (){var statearr_32821 = state_32786;
(statearr_32821[(9)] = inst_32729);

(statearr_32821[(20)] = inst_32728);

(statearr_32821[(11)] = inst_32727);

(statearr_32821[(21)] = inst_32726);

return statearr_32821;
})();
var statearr_32822_32891 = state_32786__$1;
(statearr_32822_32891[(2)] = null);

(statearr_32822_32891[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32787 === (41))){
var inst_32745 = (state_32786[(25)]);
var inst_32761 = (state_32786[(2)]);
var inst_32762 = cljs.core.next.call(null,inst_32745);
var inst_32726 = inst_32762;
var inst_32727 = null;
var inst_32728 = (0);
var inst_32729 = (0);
var state_32786__$1 = (function (){var statearr_32823 = state_32786;
(statearr_32823[(27)] = inst_32761);

(statearr_32823[(9)] = inst_32729);

(statearr_32823[(20)] = inst_32728);

(statearr_32823[(11)] = inst_32727);

(statearr_32823[(21)] = inst_32726);

return statearr_32823;
})();
var statearr_32824_32892 = state_32786__$1;
(statearr_32824_32892[(2)] = null);

(statearr_32824_32892[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32787 === (43))){
var state_32786__$1 = state_32786;
var statearr_32825_32893 = state_32786__$1;
(statearr_32825_32893[(2)] = null);

(statearr_32825_32893[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32787 === (29))){
var inst_32770 = (state_32786[(2)]);
var state_32786__$1 = state_32786;
var statearr_32826_32894 = state_32786__$1;
(statearr_32826_32894[(2)] = inst_32770);

(statearr_32826_32894[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32787 === (44))){
var inst_32779 = (state_32786[(2)]);
var state_32786__$1 = (function (){var statearr_32827 = state_32786;
(statearr_32827[(28)] = inst_32779);

return statearr_32827;
})();
var statearr_32828_32895 = state_32786__$1;
(statearr_32828_32895[(2)] = null);

(statearr_32828_32895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32787 === (6))){
var inst_32718 = (state_32786[(29)]);
var inst_32717 = cljs.core.deref.call(null,cs);
var inst_32718__$1 = cljs.core.keys.call(null,inst_32717);
var inst_32719 = cljs.core.count.call(null,inst_32718__$1);
var inst_32720 = cljs.core.reset_BANG_.call(null,dctr,inst_32719);
var inst_32725 = cljs.core.seq.call(null,inst_32718__$1);
var inst_32726 = inst_32725;
var inst_32727 = null;
var inst_32728 = (0);
var inst_32729 = (0);
var state_32786__$1 = (function (){var statearr_32829 = state_32786;
(statearr_32829[(30)] = inst_32720);

(statearr_32829[(9)] = inst_32729);

(statearr_32829[(29)] = inst_32718__$1);

(statearr_32829[(20)] = inst_32728);

(statearr_32829[(11)] = inst_32727);

(statearr_32829[(21)] = inst_32726);

return statearr_32829;
})();
var statearr_32830_32896 = state_32786__$1;
(statearr_32830_32896[(2)] = null);

(statearr_32830_32896[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32787 === (28))){
var inst_32745 = (state_32786[(25)]);
var inst_32726 = (state_32786[(21)]);
var inst_32745__$1 = cljs.core.seq.call(null,inst_32726);
var state_32786__$1 = (function (){var statearr_32831 = state_32786;
(statearr_32831[(25)] = inst_32745__$1);

return statearr_32831;
})();
if(inst_32745__$1){
var statearr_32832_32897 = state_32786__$1;
(statearr_32832_32897[(1)] = (33));

} else {
var statearr_32833_32898 = state_32786__$1;
(statearr_32833_32898[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32787 === (25))){
var inst_32729 = (state_32786[(9)]);
var inst_32728 = (state_32786[(20)]);
var inst_32731 = (inst_32729 < inst_32728);
var inst_32732 = inst_32731;
var state_32786__$1 = state_32786;
if(cljs.core.truth_(inst_32732)){
var statearr_32834_32899 = state_32786__$1;
(statearr_32834_32899[(1)] = (27));

} else {
var statearr_32835_32900 = state_32786__$1;
(statearr_32835_32900[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32787 === (34))){
var state_32786__$1 = state_32786;
var statearr_32836_32901 = state_32786__$1;
(statearr_32836_32901[(2)] = null);

(statearr_32836_32901[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32787 === (17))){
var state_32786__$1 = state_32786;
var statearr_32837_32902 = state_32786__$1;
(statearr_32837_32902[(2)] = null);

(statearr_32837_32902[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32787 === (3))){
var inst_32784 = (state_32786[(2)]);
var state_32786__$1 = state_32786;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32786__$1,inst_32784);
} else {
if((state_val_32787 === (12))){
var inst_32713 = (state_32786[(2)]);
var state_32786__$1 = state_32786;
var statearr_32838_32903 = state_32786__$1;
(statearr_32838_32903[(2)] = inst_32713);

(statearr_32838_32903[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32787 === (2))){
var state_32786__$1 = state_32786;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32786__$1,(4),ch);
} else {
if((state_val_32787 === (23))){
var state_32786__$1 = state_32786;
var statearr_32839_32904 = state_32786__$1;
(statearr_32839_32904[(2)] = null);

(statearr_32839_32904[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32787 === (35))){
var inst_32768 = (state_32786[(2)]);
var state_32786__$1 = state_32786;
var statearr_32840_32905 = state_32786__$1;
(statearr_32840_32905[(2)] = inst_32768);

(statearr_32840_32905[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32787 === (19))){
var inst_32685 = (state_32786[(7)]);
var inst_32689 = cljs.core.chunk_first.call(null,inst_32685);
var inst_32690 = cljs.core.chunk_rest.call(null,inst_32685);
var inst_32691 = cljs.core.count.call(null,inst_32689);
var inst_32663 = inst_32690;
var inst_32664 = inst_32689;
var inst_32665 = inst_32691;
var inst_32666 = (0);
var state_32786__$1 = (function (){var statearr_32841 = state_32786;
(statearr_32841[(13)] = inst_32663);

(statearr_32841[(15)] = inst_32664);

(statearr_32841[(16)] = inst_32666);

(statearr_32841[(17)] = inst_32665);

return statearr_32841;
})();
var statearr_32842_32906 = state_32786__$1;
(statearr_32842_32906[(2)] = null);

(statearr_32842_32906[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32787 === (11))){
var inst_32663 = (state_32786[(13)]);
var inst_32685 = (state_32786[(7)]);
var inst_32685__$1 = cljs.core.seq.call(null,inst_32663);
var state_32786__$1 = (function (){var statearr_32843 = state_32786;
(statearr_32843[(7)] = inst_32685__$1);

return statearr_32843;
})();
if(inst_32685__$1){
var statearr_32844_32907 = state_32786__$1;
(statearr_32844_32907[(1)] = (16));

} else {
var statearr_32845_32908 = state_32786__$1;
(statearr_32845_32908[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32787 === (9))){
var inst_32715 = (state_32786[(2)]);
var state_32786__$1 = state_32786;
var statearr_32846_32909 = state_32786__$1;
(statearr_32846_32909[(2)] = inst_32715);

(statearr_32846_32909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32787 === (5))){
var inst_32661 = cljs.core.deref.call(null,cs);
var inst_32662 = cljs.core.seq.call(null,inst_32661);
var inst_32663 = inst_32662;
var inst_32664 = null;
var inst_32665 = (0);
var inst_32666 = (0);
var state_32786__$1 = (function (){var statearr_32847 = state_32786;
(statearr_32847[(13)] = inst_32663);

(statearr_32847[(15)] = inst_32664);

(statearr_32847[(16)] = inst_32666);

(statearr_32847[(17)] = inst_32665);

return statearr_32847;
})();
var statearr_32848_32910 = state_32786__$1;
(statearr_32848_32910[(2)] = null);

(statearr_32848_32910[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32787 === (14))){
var state_32786__$1 = state_32786;
var statearr_32849_32911 = state_32786__$1;
(statearr_32849_32911[(2)] = null);

(statearr_32849_32911[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32787 === (45))){
var inst_32776 = (state_32786[(2)]);
var state_32786__$1 = state_32786;
var statearr_32850_32912 = state_32786__$1;
(statearr_32850_32912[(2)] = inst_32776);

(statearr_32850_32912[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32787 === (26))){
var inst_32718 = (state_32786[(29)]);
var inst_32772 = (state_32786[(2)]);
var inst_32773 = cljs.core.seq.call(null,inst_32718);
var state_32786__$1 = (function (){var statearr_32851 = state_32786;
(statearr_32851[(31)] = inst_32772);

return statearr_32851;
})();
if(inst_32773){
var statearr_32852_32913 = state_32786__$1;
(statearr_32852_32913[(1)] = (42));

} else {
var statearr_32853_32914 = state_32786__$1;
(statearr_32853_32914[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32787 === (16))){
var inst_32685 = (state_32786[(7)]);
var inst_32687 = cljs.core.chunked_seq_QMARK_.call(null,inst_32685);
var state_32786__$1 = state_32786;
if(inst_32687){
var statearr_32854_32915 = state_32786__$1;
(statearr_32854_32915[(1)] = (19));

} else {
var statearr_32855_32916 = state_32786__$1;
(statearr_32855_32916[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32787 === (38))){
var inst_32765 = (state_32786[(2)]);
var state_32786__$1 = state_32786;
var statearr_32856_32917 = state_32786__$1;
(statearr_32856_32917[(2)] = inst_32765);

(statearr_32856_32917[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32787 === (30))){
var state_32786__$1 = state_32786;
var statearr_32857_32918 = state_32786__$1;
(statearr_32857_32918[(2)] = null);

(statearr_32857_32918[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32787 === (10))){
var inst_32664 = (state_32786[(15)]);
var inst_32666 = (state_32786[(16)]);
var inst_32674 = cljs.core._nth.call(null,inst_32664,inst_32666);
var inst_32675 = cljs.core.nth.call(null,inst_32674,(0),null);
var inst_32676 = cljs.core.nth.call(null,inst_32674,(1),null);
var state_32786__$1 = (function (){var statearr_32858 = state_32786;
(statearr_32858[(26)] = inst_32675);

return statearr_32858;
})();
if(cljs.core.truth_(inst_32676)){
var statearr_32859_32919 = state_32786__$1;
(statearr_32859_32919[(1)] = (13));

} else {
var statearr_32860_32920 = state_32786__$1;
(statearr_32860_32920[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32787 === (18))){
var inst_32711 = (state_32786[(2)]);
var state_32786__$1 = state_32786;
var statearr_32861_32921 = state_32786__$1;
(statearr_32861_32921[(2)] = inst_32711);

(statearr_32861_32921[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32787 === (42))){
var state_32786__$1 = state_32786;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32786__$1,(45),dchan);
} else {
if((state_val_32787 === (37))){
var inst_32754 = (state_32786[(23)]);
var inst_32654 = (state_32786[(10)]);
var inst_32745 = (state_32786[(25)]);
var inst_32754__$1 = cljs.core.first.call(null,inst_32745);
var inst_32755 = cljs.core.async.put_BANG_.call(null,inst_32754__$1,inst_32654,done);
var state_32786__$1 = (function (){var statearr_32862 = state_32786;
(statearr_32862[(23)] = inst_32754__$1);

return statearr_32862;
})();
if(cljs.core.truth_(inst_32755)){
var statearr_32863_32922 = state_32786__$1;
(statearr_32863_32922[(1)] = (39));

} else {
var statearr_32864_32923 = state_32786__$1;
(statearr_32864_32923[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32787 === (8))){
var inst_32666 = (state_32786[(16)]);
var inst_32665 = (state_32786[(17)]);
var inst_32668 = (inst_32666 < inst_32665);
var inst_32669 = inst_32668;
var state_32786__$1 = state_32786;
if(cljs.core.truth_(inst_32669)){
var statearr_32865_32924 = state_32786__$1;
(statearr_32865_32924[(1)] = (10));

} else {
var statearr_32866_32925 = state_32786__$1;
(statearr_32866_32925[(1)] = (11));

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
});})(c__32052__auto___32871,cs,m,dchan,dctr,done))
;
return ((function (switch__31957__auto__,c__32052__auto___32871,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__31958__auto__ = null;
var cljs$core$async$mult_$_state_machine__31958__auto____0 = (function (){
var statearr_32867 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32867[(0)] = cljs$core$async$mult_$_state_machine__31958__auto__);

(statearr_32867[(1)] = (1));

return statearr_32867;
});
var cljs$core$async$mult_$_state_machine__31958__auto____1 = (function (state_32786){
while(true){
var ret_value__31959__auto__ = (function (){try{while(true){
var result__31960__auto__ = switch__31957__auto__.call(null,state_32786);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31960__auto__;
}
break;
}
}catch (e32868){if((e32868 instanceof Object)){
var ex__31961__auto__ = e32868;
var statearr_32869_32926 = state_32786;
(statearr_32869_32926[(5)] = ex__31961__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32786);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32868;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32927 = state_32786;
state_32786 = G__32927;
continue;
} else {
return ret_value__31959__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__31958__auto__ = function(state_32786){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__31958__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__31958__auto____1.call(this,state_32786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__31958__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__31958__auto____0;
cljs$core$async$mult_$_state_machine__31958__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__31958__auto____1;
return cljs$core$async$mult_$_state_machine__31958__auto__;
})()
;})(switch__31957__auto__,c__32052__auto___32871,cs,m,dchan,dctr,done))
})();
var state__32054__auto__ = (function (){var statearr_32870 = f__32053__auto__.call(null);
(statearr_32870[(6)] = c__32052__auto___32871);

return statearr_32870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32054__auto__);
});})(c__32052__auto___32871,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__32929 = arguments.length;
switch (G__32929) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m);
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,state_map);
} else {
var m__4348__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,mode);
} else {
var m__4348__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___32941 = arguments.length;
var i__4642__auto___32942 = (0);
while(true){
if((i__4642__auto___32942 < len__4641__auto___32941)){
args__4647__auto__.push((arguments[i__4642__auto___32942]));

var G__32943 = (i__4642__auto___32942 + (1));
i__4642__auto___32942 = G__32943;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32935){
var map__32936 = p__32935;
var map__32936__$1 = (((((!((map__32936 == null))))?(((((map__32936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32936.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32936):map__32936);
var opts = map__32936__$1;
var statearr_32938_32944 = state;
(statearr_32938_32944[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__32936,map__32936__$1,opts){
return (function (val){
var statearr_32939_32945 = state;
(statearr_32939_32945[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__32936,map__32936__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_32940_32946 = state;
(statearr_32940_32946[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32931){
var G__32932 = cljs.core.first.call(null,seq32931);
var seq32931__$1 = cljs.core.next.call(null,seq32931);
var G__32933 = cljs.core.first.call(null,seq32931__$1);
var seq32931__$2 = cljs.core.next.call(null,seq32931__$1);
var G__32934 = cljs.core.first.call(null,seq32931__$2);
var seq32931__$3 = cljs.core.next.call(null,seq32931__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32932,G__32933,G__32934,seq32931__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32947 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32947 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32948){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32948 = meta32948;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32947.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32949,meta32948__$1){
var self__ = this;
var _32949__$1 = this;
return (new cljs.core.async.t_cljs$core$async32947(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32948__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32947.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32949){
var self__ = this;
var _32949__$1 = this;
return self__.meta32948;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32947.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32947.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32947.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32947.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32947.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32947.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32947.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32947.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32947.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32948","meta32948",947977318,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32947.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32947.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32947";

cljs.core.async.t_cljs$core$async32947.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async32947");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32947.
 */
cljs.core.async.__GT_t_cljs$core$async32947 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async32947(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32948){
return (new cljs.core.async.t_cljs$core$async32947(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32948));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async32947(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32052__auto___33111 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32052__auto___33111,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__32053__auto__ = (function (){var switch__31957__auto__ = ((function (c__32052__auto___33111,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_33051){
var state_val_33052 = (state_33051[(1)]);
if((state_val_33052 === (7))){
var inst_32966 = (state_33051[(2)]);
var state_33051__$1 = state_33051;
var statearr_33053_33112 = state_33051__$1;
(statearr_33053_33112[(2)] = inst_32966);

(statearr_33053_33112[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33052 === (20))){
var inst_32978 = (state_33051[(7)]);
var state_33051__$1 = state_33051;
var statearr_33054_33113 = state_33051__$1;
(statearr_33054_33113[(2)] = inst_32978);

(statearr_33054_33113[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33052 === (27))){
var state_33051__$1 = state_33051;
var statearr_33055_33114 = state_33051__$1;
(statearr_33055_33114[(2)] = null);

(statearr_33055_33114[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33052 === (1))){
var inst_32953 = (state_33051[(8)]);
var inst_32953__$1 = calc_state.call(null);
var inst_32955 = (inst_32953__$1 == null);
var inst_32956 = cljs.core.not.call(null,inst_32955);
var state_33051__$1 = (function (){var statearr_33056 = state_33051;
(statearr_33056[(8)] = inst_32953__$1);

return statearr_33056;
})();
if(inst_32956){
var statearr_33057_33115 = state_33051__$1;
(statearr_33057_33115[(1)] = (2));

} else {
var statearr_33058_33116 = state_33051__$1;
(statearr_33058_33116[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33052 === (24))){
var inst_33025 = (state_33051[(9)]);
var inst_33002 = (state_33051[(10)]);
var inst_33011 = (state_33051[(11)]);
var inst_33025__$1 = inst_33002.call(null,inst_33011);
var state_33051__$1 = (function (){var statearr_33059 = state_33051;
(statearr_33059[(9)] = inst_33025__$1);

return statearr_33059;
})();
if(cljs.core.truth_(inst_33025__$1)){
var statearr_33060_33117 = state_33051__$1;
(statearr_33060_33117[(1)] = (29));

} else {
var statearr_33061_33118 = state_33051__$1;
(statearr_33061_33118[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33052 === (4))){
var inst_32969 = (state_33051[(2)]);
var state_33051__$1 = state_33051;
if(cljs.core.truth_(inst_32969)){
var statearr_33062_33119 = state_33051__$1;
(statearr_33062_33119[(1)] = (8));

} else {
var statearr_33063_33120 = state_33051__$1;
(statearr_33063_33120[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33052 === (15))){
var inst_32996 = (state_33051[(2)]);
var state_33051__$1 = state_33051;
if(cljs.core.truth_(inst_32996)){
var statearr_33064_33121 = state_33051__$1;
(statearr_33064_33121[(1)] = (19));

} else {
var statearr_33065_33122 = state_33051__$1;
(statearr_33065_33122[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33052 === (21))){
var inst_33001 = (state_33051[(12)]);
var inst_33001__$1 = (state_33051[(2)]);
var inst_33002 = cljs.core.get.call(null,inst_33001__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33003 = cljs.core.get.call(null,inst_33001__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33004 = cljs.core.get.call(null,inst_33001__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33051__$1 = (function (){var statearr_33066 = state_33051;
(statearr_33066[(13)] = inst_33003);

(statearr_33066[(10)] = inst_33002);

(statearr_33066[(12)] = inst_33001__$1);

return statearr_33066;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_33051__$1,(22),inst_33004);
} else {
if((state_val_33052 === (31))){
var inst_33033 = (state_33051[(2)]);
var state_33051__$1 = state_33051;
if(cljs.core.truth_(inst_33033)){
var statearr_33067_33123 = state_33051__$1;
(statearr_33067_33123[(1)] = (32));

} else {
var statearr_33068_33124 = state_33051__$1;
(statearr_33068_33124[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33052 === (32))){
var inst_33010 = (state_33051[(14)]);
var state_33051__$1 = state_33051;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33051__$1,(35),out,inst_33010);
} else {
if((state_val_33052 === (33))){
var inst_33001 = (state_33051[(12)]);
var inst_32978 = inst_33001;
var state_33051__$1 = (function (){var statearr_33069 = state_33051;
(statearr_33069[(7)] = inst_32978);

return statearr_33069;
})();
var statearr_33070_33125 = state_33051__$1;
(statearr_33070_33125[(2)] = null);

(statearr_33070_33125[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33052 === (13))){
var inst_32978 = (state_33051[(7)]);
var inst_32985 = inst_32978.cljs$lang$protocol_mask$partition0$;
var inst_32986 = (inst_32985 & (64));
var inst_32987 = inst_32978.cljs$core$ISeq$;
var inst_32988 = (cljs.core.PROTOCOL_SENTINEL === inst_32987);
var inst_32989 = ((inst_32986) || (inst_32988));
var state_33051__$1 = state_33051;
if(cljs.core.truth_(inst_32989)){
var statearr_33071_33126 = state_33051__$1;
(statearr_33071_33126[(1)] = (16));

} else {
var statearr_33072_33127 = state_33051__$1;
(statearr_33072_33127[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33052 === (22))){
var inst_33010 = (state_33051[(14)]);
var inst_33011 = (state_33051[(11)]);
var inst_33009 = (state_33051[(2)]);
var inst_33010__$1 = cljs.core.nth.call(null,inst_33009,(0),null);
var inst_33011__$1 = cljs.core.nth.call(null,inst_33009,(1),null);
var inst_33012 = (inst_33010__$1 == null);
var inst_33013 = cljs.core._EQ_.call(null,inst_33011__$1,change);
var inst_33014 = ((inst_33012) || (inst_33013));
var state_33051__$1 = (function (){var statearr_33073 = state_33051;
(statearr_33073[(14)] = inst_33010__$1);

(statearr_33073[(11)] = inst_33011__$1);

return statearr_33073;
})();
if(cljs.core.truth_(inst_33014)){
var statearr_33074_33128 = state_33051__$1;
(statearr_33074_33128[(1)] = (23));

} else {
var statearr_33075_33129 = state_33051__$1;
(statearr_33075_33129[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33052 === (36))){
var inst_33001 = (state_33051[(12)]);
var inst_32978 = inst_33001;
var state_33051__$1 = (function (){var statearr_33076 = state_33051;
(statearr_33076[(7)] = inst_32978);

return statearr_33076;
})();
var statearr_33077_33130 = state_33051__$1;
(statearr_33077_33130[(2)] = null);

(statearr_33077_33130[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33052 === (29))){
var inst_33025 = (state_33051[(9)]);
var state_33051__$1 = state_33051;
var statearr_33078_33131 = state_33051__$1;
(statearr_33078_33131[(2)] = inst_33025);

(statearr_33078_33131[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33052 === (6))){
var state_33051__$1 = state_33051;
var statearr_33079_33132 = state_33051__$1;
(statearr_33079_33132[(2)] = false);

(statearr_33079_33132[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33052 === (28))){
var inst_33021 = (state_33051[(2)]);
var inst_33022 = calc_state.call(null);
var inst_32978 = inst_33022;
var state_33051__$1 = (function (){var statearr_33080 = state_33051;
(statearr_33080[(7)] = inst_32978);

(statearr_33080[(15)] = inst_33021);

return statearr_33080;
})();
var statearr_33081_33133 = state_33051__$1;
(statearr_33081_33133[(2)] = null);

(statearr_33081_33133[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33052 === (25))){
var inst_33047 = (state_33051[(2)]);
var state_33051__$1 = state_33051;
var statearr_33082_33134 = state_33051__$1;
(statearr_33082_33134[(2)] = inst_33047);

(statearr_33082_33134[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33052 === (34))){
var inst_33045 = (state_33051[(2)]);
var state_33051__$1 = state_33051;
var statearr_33083_33135 = state_33051__$1;
(statearr_33083_33135[(2)] = inst_33045);

(statearr_33083_33135[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33052 === (17))){
var state_33051__$1 = state_33051;
var statearr_33084_33136 = state_33051__$1;
(statearr_33084_33136[(2)] = false);

(statearr_33084_33136[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33052 === (3))){
var state_33051__$1 = state_33051;
var statearr_33085_33137 = state_33051__$1;
(statearr_33085_33137[(2)] = false);

(statearr_33085_33137[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33052 === (12))){
var inst_33049 = (state_33051[(2)]);
var state_33051__$1 = state_33051;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33051__$1,inst_33049);
} else {
if((state_val_33052 === (2))){
var inst_32953 = (state_33051[(8)]);
var inst_32958 = inst_32953.cljs$lang$protocol_mask$partition0$;
var inst_32959 = (inst_32958 & (64));
var inst_32960 = inst_32953.cljs$core$ISeq$;
var inst_32961 = (cljs.core.PROTOCOL_SENTINEL === inst_32960);
var inst_32962 = ((inst_32959) || (inst_32961));
var state_33051__$1 = state_33051;
if(cljs.core.truth_(inst_32962)){
var statearr_33086_33138 = state_33051__$1;
(statearr_33086_33138[(1)] = (5));

} else {
var statearr_33087_33139 = state_33051__$1;
(statearr_33087_33139[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33052 === (23))){
var inst_33010 = (state_33051[(14)]);
var inst_33016 = (inst_33010 == null);
var state_33051__$1 = state_33051;
if(cljs.core.truth_(inst_33016)){
var statearr_33088_33140 = state_33051__$1;
(statearr_33088_33140[(1)] = (26));

} else {
var statearr_33089_33141 = state_33051__$1;
(statearr_33089_33141[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33052 === (35))){
var inst_33036 = (state_33051[(2)]);
var state_33051__$1 = state_33051;
if(cljs.core.truth_(inst_33036)){
var statearr_33090_33142 = state_33051__$1;
(statearr_33090_33142[(1)] = (36));

} else {
var statearr_33091_33143 = state_33051__$1;
(statearr_33091_33143[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33052 === (19))){
var inst_32978 = (state_33051[(7)]);
var inst_32998 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32978);
var state_33051__$1 = state_33051;
var statearr_33092_33144 = state_33051__$1;
(statearr_33092_33144[(2)] = inst_32998);

(statearr_33092_33144[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33052 === (11))){
var inst_32978 = (state_33051[(7)]);
var inst_32982 = (inst_32978 == null);
var inst_32983 = cljs.core.not.call(null,inst_32982);
var state_33051__$1 = state_33051;
if(inst_32983){
var statearr_33093_33145 = state_33051__$1;
(statearr_33093_33145[(1)] = (13));

} else {
var statearr_33094_33146 = state_33051__$1;
(statearr_33094_33146[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33052 === (9))){
var inst_32953 = (state_33051[(8)]);
var state_33051__$1 = state_33051;
var statearr_33095_33147 = state_33051__$1;
(statearr_33095_33147[(2)] = inst_32953);

(statearr_33095_33147[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33052 === (5))){
var state_33051__$1 = state_33051;
var statearr_33096_33148 = state_33051__$1;
(statearr_33096_33148[(2)] = true);

(statearr_33096_33148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33052 === (14))){
var state_33051__$1 = state_33051;
var statearr_33097_33149 = state_33051__$1;
(statearr_33097_33149[(2)] = false);

(statearr_33097_33149[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33052 === (26))){
var inst_33011 = (state_33051[(11)]);
var inst_33018 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_33011);
var state_33051__$1 = state_33051;
var statearr_33098_33150 = state_33051__$1;
(statearr_33098_33150[(2)] = inst_33018);

(statearr_33098_33150[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33052 === (16))){
var state_33051__$1 = state_33051;
var statearr_33099_33151 = state_33051__$1;
(statearr_33099_33151[(2)] = true);

(statearr_33099_33151[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33052 === (38))){
var inst_33041 = (state_33051[(2)]);
var state_33051__$1 = state_33051;
var statearr_33100_33152 = state_33051__$1;
(statearr_33100_33152[(2)] = inst_33041);

(statearr_33100_33152[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33052 === (30))){
var inst_33003 = (state_33051[(13)]);
var inst_33002 = (state_33051[(10)]);
var inst_33011 = (state_33051[(11)]);
var inst_33028 = cljs.core.empty_QMARK_.call(null,inst_33002);
var inst_33029 = inst_33003.call(null,inst_33011);
var inst_33030 = cljs.core.not.call(null,inst_33029);
var inst_33031 = ((inst_33028) && (inst_33030));
var state_33051__$1 = state_33051;
var statearr_33101_33153 = state_33051__$1;
(statearr_33101_33153[(2)] = inst_33031);

(statearr_33101_33153[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33052 === (10))){
var inst_32953 = (state_33051[(8)]);
var inst_32974 = (state_33051[(2)]);
var inst_32975 = cljs.core.get.call(null,inst_32974,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32976 = cljs.core.get.call(null,inst_32974,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32977 = cljs.core.get.call(null,inst_32974,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32978 = inst_32953;
var state_33051__$1 = (function (){var statearr_33102 = state_33051;
(statearr_33102[(16)] = inst_32976);

(statearr_33102[(17)] = inst_32977);

(statearr_33102[(7)] = inst_32978);

(statearr_33102[(18)] = inst_32975);

return statearr_33102;
})();
var statearr_33103_33154 = state_33051__$1;
(statearr_33103_33154[(2)] = null);

(statearr_33103_33154[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33052 === (18))){
var inst_32993 = (state_33051[(2)]);
var state_33051__$1 = state_33051;
var statearr_33104_33155 = state_33051__$1;
(statearr_33104_33155[(2)] = inst_32993);

(statearr_33104_33155[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33052 === (37))){
var state_33051__$1 = state_33051;
var statearr_33105_33156 = state_33051__$1;
(statearr_33105_33156[(2)] = null);

(statearr_33105_33156[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33052 === (8))){
var inst_32953 = (state_33051[(8)]);
var inst_32971 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32953);
var state_33051__$1 = state_33051;
var statearr_33106_33157 = state_33051__$1;
(statearr_33106_33157[(2)] = inst_32971);

(statearr_33106_33157[(1)] = (10));


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
});})(c__32052__auto___33111,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__31957__auto__,c__32052__auto___33111,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__31958__auto__ = null;
var cljs$core$async$mix_$_state_machine__31958__auto____0 = (function (){
var statearr_33107 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33107[(0)] = cljs$core$async$mix_$_state_machine__31958__auto__);

(statearr_33107[(1)] = (1));

return statearr_33107;
});
var cljs$core$async$mix_$_state_machine__31958__auto____1 = (function (state_33051){
while(true){
var ret_value__31959__auto__ = (function (){try{while(true){
var result__31960__auto__ = switch__31957__auto__.call(null,state_33051);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31960__auto__;
}
break;
}
}catch (e33108){if((e33108 instanceof Object)){
var ex__31961__auto__ = e33108;
var statearr_33109_33158 = state_33051;
(statearr_33109_33158[(5)] = ex__31961__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33051);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33108;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33159 = state_33051;
state_33051 = G__33159;
continue;
} else {
return ret_value__31959__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__31958__auto__ = function(state_33051){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__31958__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__31958__auto____1.call(this,state_33051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__31958__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__31958__auto____0;
cljs$core$async$mix_$_state_machine__31958__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__31958__auto____1;
return cljs$core$async$mix_$_state_machine__31958__auto__;
})()
;})(switch__31957__auto__,c__32052__auto___33111,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__32054__auto__ = (function (){var statearr_33110 = f__32053__auto__.call(null);
(statearr_33110[(6)] = c__32052__auto___33111);

return statearr_33110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32054__auto__);
});})(c__32052__auto___33111,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4348__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33161 = arguments.length;
switch (G__33161) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__33165 = arguments.length;
switch (G__33165) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4047__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4047__auto__,mults){
return (function (p1__33163_SHARP_){
if(cljs.core.truth_(p1__33163_SHARP_.call(null,topic))){
return p1__33163_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__33163_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33166 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33166 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33167){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33167 = meta33167;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33166.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33168,meta33167__$1){
var self__ = this;
var _33168__$1 = this;
return (new cljs.core.async.t_cljs$core$async33166(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33167__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33166.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33168){
var self__ = this;
var _33168__$1 = this;
return self__.meta33167;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33166.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33166.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33166.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33166.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33166.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33166.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33166.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33166.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33167","meta33167",668392753,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33166.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33166.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33166";

cljs.core.async.t_cljs$core$async33166.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async33166");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33166.
 */
cljs.core.async.__GT_t_cljs$core$async33166 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async33166(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33167){
return (new cljs.core.async.t_cljs$core$async33166(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33167));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async33166(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32052__auto___33286 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32052__auto___33286,mults,ensure_mult,p){
return (function (){
var f__32053__auto__ = (function (){var switch__31957__auto__ = ((function (c__32052__auto___33286,mults,ensure_mult,p){
return (function (state_33240){
var state_val_33241 = (state_33240[(1)]);
if((state_val_33241 === (7))){
var inst_33236 = (state_33240[(2)]);
var state_33240__$1 = state_33240;
var statearr_33242_33287 = state_33240__$1;
(statearr_33242_33287[(2)] = inst_33236);

(statearr_33242_33287[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33241 === (20))){
var state_33240__$1 = state_33240;
var statearr_33243_33288 = state_33240__$1;
(statearr_33243_33288[(2)] = null);

(statearr_33243_33288[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33241 === (1))){
var state_33240__$1 = state_33240;
var statearr_33244_33289 = state_33240__$1;
(statearr_33244_33289[(2)] = null);

(statearr_33244_33289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33241 === (24))){
var inst_33219 = (state_33240[(7)]);
var inst_33228 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_33219);
var state_33240__$1 = state_33240;
var statearr_33245_33290 = state_33240__$1;
(statearr_33245_33290[(2)] = inst_33228);

(statearr_33245_33290[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33241 === (4))){
var inst_33171 = (state_33240[(8)]);
var inst_33171__$1 = (state_33240[(2)]);
var inst_33172 = (inst_33171__$1 == null);
var state_33240__$1 = (function (){var statearr_33246 = state_33240;
(statearr_33246[(8)] = inst_33171__$1);

return statearr_33246;
})();
if(cljs.core.truth_(inst_33172)){
var statearr_33247_33291 = state_33240__$1;
(statearr_33247_33291[(1)] = (5));

} else {
var statearr_33248_33292 = state_33240__$1;
(statearr_33248_33292[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33241 === (15))){
var inst_33213 = (state_33240[(2)]);
var state_33240__$1 = state_33240;
var statearr_33249_33293 = state_33240__$1;
(statearr_33249_33293[(2)] = inst_33213);

(statearr_33249_33293[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33241 === (21))){
var inst_33233 = (state_33240[(2)]);
var state_33240__$1 = (function (){var statearr_33250 = state_33240;
(statearr_33250[(9)] = inst_33233);

return statearr_33250;
})();
var statearr_33251_33294 = state_33240__$1;
(statearr_33251_33294[(2)] = null);

(statearr_33251_33294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33241 === (13))){
var inst_33195 = (state_33240[(10)]);
var inst_33197 = cljs.core.chunked_seq_QMARK_.call(null,inst_33195);
var state_33240__$1 = state_33240;
if(inst_33197){
var statearr_33252_33295 = state_33240__$1;
(statearr_33252_33295[(1)] = (16));

} else {
var statearr_33253_33296 = state_33240__$1;
(statearr_33253_33296[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33241 === (22))){
var inst_33225 = (state_33240[(2)]);
var state_33240__$1 = state_33240;
if(cljs.core.truth_(inst_33225)){
var statearr_33254_33297 = state_33240__$1;
(statearr_33254_33297[(1)] = (23));

} else {
var statearr_33255_33298 = state_33240__$1;
(statearr_33255_33298[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33241 === (6))){
var inst_33221 = (state_33240[(11)]);
var inst_33171 = (state_33240[(8)]);
var inst_33219 = (state_33240[(7)]);
var inst_33219__$1 = topic_fn.call(null,inst_33171);
var inst_33220 = cljs.core.deref.call(null,mults);
var inst_33221__$1 = cljs.core.get.call(null,inst_33220,inst_33219__$1);
var state_33240__$1 = (function (){var statearr_33256 = state_33240;
(statearr_33256[(11)] = inst_33221__$1);

(statearr_33256[(7)] = inst_33219__$1);

return statearr_33256;
})();
if(cljs.core.truth_(inst_33221__$1)){
var statearr_33257_33299 = state_33240__$1;
(statearr_33257_33299[(1)] = (19));

} else {
var statearr_33258_33300 = state_33240__$1;
(statearr_33258_33300[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33241 === (25))){
var inst_33230 = (state_33240[(2)]);
var state_33240__$1 = state_33240;
var statearr_33259_33301 = state_33240__$1;
(statearr_33259_33301[(2)] = inst_33230);

(statearr_33259_33301[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33241 === (17))){
var inst_33195 = (state_33240[(10)]);
var inst_33204 = cljs.core.first.call(null,inst_33195);
var inst_33205 = cljs.core.async.muxch_STAR_.call(null,inst_33204);
var inst_33206 = cljs.core.async.close_BANG_.call(null,inst_33205);
var inst_33207 = cljs.core.next.call(null,inst_33195);
var inst_33181 = inst_33207;
var inst_33182 = null;
var inst_33183 = (0);
var inst_33184 = (0);
var state_33240__$1 = (function (){var statearr_33260 = state_33240;
(statearr_33260[(12)] = inst_33183);

(statearr_33260[(13)] = inst_33182);

(statearr_33260[(14)] = inst_33181);

(statearr_33260[(15)] = inst_33184);

(statearr_33260[(16)] = inst_33206);

return statearr_33260;
})();
var statearr_33261_33302 = state_33240__$1;
(statearr_33261_33302[(2)] = null);

(statearr_33261_33302[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33241 === (3))){
var inst_33238 = (state_33240[(2)]);
var state_33240__$1 = state_33240;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33240__$1,inst_33238);
} else {
if((state_val_33241 === (12))){
var inst_33215 = (state_33240[(2)]);
var state_33240__$1 = state_33240;
var statearr_33262_33303 = state_33240__$1;
(statearr_33262_33303[(2)] = inst_33215);

(statearr_33262_33303[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33241 === (2))){
var state_33240__$1 = state_33240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33240__$1,(4),ch);
} else {
if((state_val_33241 === (23))){
var state_33240__$1 = state_33240;
var statearr_33263_33304 = state_33240__$1;
(statearr_33263_33304[(2)] = null);

(statearr_33263_33304[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33241 === (19))){
var inst_33221 = (state_33240[(11)]);
var inst_33171 = (state_33240[(8)]);
var inst_33223 = cljs.core.async.muxch_STAR_.call(null,inst_33221);
var state_33240__$1 = state_33240;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33240__$1,(22),inst_33223,inst_33171);
} else {
if((state_val_33241 === (11))){
var inst_33181 = (state_33240[(14)]);
var inst_33195 = (state_33240[(10)]);
var inst_33195__$1 = cljs.core.seq.call(null,inst_33181);
var state_33240__$1 = (function (){var statearr_33264 = state_33240;
(statearr_33264[(10)] = inst_33195__$1);

return statearr_33264;
})();
if(inst_33195__$1){
var statearr_33265_33305 = state_33240__$1;
(statearr_33265_33305[(1)] = (13));

} else {
var statearr_33266_33306 = state_33240__$1;
(statearr_33266_33306[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33241 === (9))){
var inst_33217 = (state_33240[(2)]);
var state_33240__$1 = state_33240;
var statearr_33267_33307 = state_33240__$1;
(statearr_33267_33307[(2)] = inst_33217);

(statearr_33267_33307[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33241 === (5))){
var inst_33178 = cljs.core.deref.call(null,mults);
var inst_33179 = cljs.core.vals.call(null,inst_33178);
var inst_33180 = cljs.core.seq.call(null,inst_33179);
var inst_33181 = inst_33180;
var inst_33182 = null;
var inst_33183 = (0);
var inst_33184 = (0);
var state_33240__$1 = (function (){var statearr_33268 = state_33240;
(statearr_33268[(12)] = inst_33183);

(statearr_33268[(13)] = inst_33182);

(statearr_33268[(14)] = inst_33181);

(statearr_33268[(15)] = inst_33184);

return statearr_33268;
})();
var statearr_33269_33308 = state_33240__$1;
(statearr_33269_33308[(2)] = null);

(statearr_33269_33308[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33241 === (14))){
var state_33240__$1 = state_33240;
var statearr_33273_33309 = state_33240__$1;
(statearr_33273_33309[(2)] = null);

(statearr_33273_33309[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33241 === (16))){
var inst_33195 = (state_33240[(10)]);
var inst_33199 = cljs.core.chunk_first.call(null,inst_33195);
var inst_33200 = cljs.core.chunk_rest.call(null,inst_33195);
var inst_33201 = cljs.core.count.call(null,inst_33199);
var inst_33181 = inst_33200;
var inst_33182 = inst_33199;
var inst_33183 = inst_33201;
var inst_33184 = (0);
var state_33240__$1 = (function (){var statearr_33274 = state_33240;
(statearr_33274[(12)] = inst_33183);

(statearr_33274[(13)] = inst_33182);

(statearr_33274[(14)] = inst_33181);

(statearr_33274[(15)] = inst_33184);

return statearr_33274;
})();
var statearr_33275_33310 = state_33240__$1;
(statearr_33275_33310[(2)] = null);

(statearr_33275_33310[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33241 === (10))){
var inst_33183 = (state_33240[(12)]);
var inst_33182 = (state_33240[(13)]);
var inst_33181 = (state_33240[(14)]);
var inst_33184 = (state_33240[(15)]);
var inst_33189 = cljs.core._nth.call(null,inst_33182,inst_33184);
var inst_33190 = cljs.core.async.muxch_STAR_.call(null,inst_33189);
var inst_33191 = cljs.core.async.close_BANG_.call(null,inst_33190);
var inst_33192 = (inst_33184 + (1));
var tmp33270 = inst_33183;
var tmp33271 = inst_33182;
var tmp33272 = inst_33181;
var inst_33181__$1 = tmp33272;
var inst_33182__$1 = tmp33271;
var inst_33183__$1 = tmp33270;
var inst_33184__$1 = inst_33192;
var state_33240__$1 = (function (){var statearr_33276 = state_33240;
(statearr_33276[(12)] = inst_33183__$1);

(statearr_33276[(13)] = inst_33182__$1);

(statearr_33276[(14)] = inst_33181__$1);

(statearr_33276[(17)] = inst_33191);

(statearr_33276[(15)] = inst_33184__$1);

return statearr_33276;
})();
var statearr_33277_33311 = state_33240__$1;
(statearr_33277_33311[(2)] = null);

(statearr_33277_33311[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33241 === (18))){
var inst_33210 = (state_33240[(2)]);
var state_33240__$1 = state_33240;
var statearr_33278_33312 = state_33240__$1;
(statearr_33278_33312[(2)] = inst_33210);

(statearr_33278_33312[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33241 === (8))){
var inst_33183 = (state_33240[(12)]);
var inst_33184 = (state_33240[(15)]);
var inst_33186 = (inst_33184 < inst_33183);
var inst_33187 = inst_33186;
var state_33240__$1 = state_33240;
if(cljs.core.truth_(inst_33187)){
var statearr_33279_33313 = state_33240__$1;
(statearr_33279_33313[(1)] = (10));

} else {
var statearr_33280_33314 = state_33240__$1;
(statearr_33280_33314[(1)] = (11));

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
});})(c__32052__auto___33286,mults,ensure_mult,p))
;
return ((function (switch__31957__auto__,c__32052__auto___33286,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__31958__auto__ = null;
var cljs$core$async$state_machine__31958__auto____0 = (function (){
var statearr_33281 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33281[(0)] = cljs$core$async$state_machine__31958__auto__);

(statearr_33281[(1)] = (1));

return statearr_33281;
});
var cljs$core$async$state_machine__31958__auto____1 = (function (state_33240){
while(true){
var ret_value__31959__auto__ = (function (){try{while(true){
var result__31960__auto__ = switch__31957__auto__.call(null,state_33240);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31960__auto__;
}
break;
}
}catch (e33282){if((e33282 instanceof Object)){
var ex__31961__auto__ = e33282;
var statearr_33283_33315 = state_33240;
(statearr_33283_33315[(5)] = ex__31961__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33240);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33282;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33316 = state_33240;
state_33240 = G__33316;
continue;
} else {
return ret_value__31959__auto__;
}
break;
}
});
cljs$core$async$state_machine__31958__auto__ = function(state_33240){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31958__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31958__auto____1.call(this,state_33240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31958__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31958__auto____0;
cljs$core$async$state_machine__31958__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31958__auto____1;
return cljs$core$async$state_machine__31958__auto__;
})()
;})(switch__31957__auto__,c__32052__auto___33286,mults,ensure_mult,p))
})();
var state__32054__auto__ = (function (){var statearr_33284 = f__32053__auto__.call(null);
(statearr_33284[(6)] = c__32052__auto___33286);

return statearr_33284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32054__auto__);
});})(c__32052__auto___33286,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__33318 = arguments.length;
switch (G__33318) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__33321 = arguments.length;
switch (G__33321) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__33324 = arguments.length;
switch (G__33324) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__32052__auto___33391 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32052__auto___33391,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__32053__auto__ = (function (){var switch__31957__auto__ = ((function (c__32052__auto___33391,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_33363){
var state_val_33364 = (state_33363[(1)]);
if((state_val_33364 === (7))){
var state_33363__$1 = state_33363;
var statearr_33365_33392 = state_33363__$1;
(statearr_33365_33392[(2)] = null);

(statearr_33365_33392[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33364 === (1))){
var state_33363__$1 = state_33363;
var statearr_33366_33393 = state_33363__$1;
(statearr_33366_33393[(2)] = null);

(statearr_33366_33393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33364 === (4))){
var inst_33327 = (state_33363[(7)]);
var inst_33329 = (inst_33327 < cnt);
var state_33363__$1 = state_33363;
if(cljs.core.truth_(inst_33329)){
var statearr_33367_33394 = state_33363__$1;
(statearr_33367_33394[(1)] = (6));

} else {
var statearr_33368_33395 = state_33363__$1;
(statearr_33368_33395[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33364 === (15))){
var inst_33359 = (state_33363[(2)]);
var state_33363__$1 = state_33363;
var statearr_33369_33396 = state_33363__$1;
(statearr_33369_33396[(2)] = inst_33359);

(statearr_33369_33396[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33364 === (13))){
var inst_33352 = cljs.core.async.close_BANG_.call(null,out);
var state_33363__$1 = state_33363;
var statearr_33370_33397 = state_33363__$1;
(statearr_33370_33397[(2)] = inst_33352);

(statearr_33370_33397[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33364 === (6))){
var state_33363__$1 = state_33363;
var statearr_33371_33398 = state_33363__$1;
(statearr_33371_33398[(2)] = null);

(statearr_33371_33398[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33364 === (3))){
var inst_33361 = (state_33363[(2)]);
var state_33363__$1 = state_33363;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33363__$1,inst_33361);
} else {
if((state_val_33364 === (12))){
var inst_33349 = (state_33363[(8)]);
var inst_33349__$1 = (state_33363[(2)]);
var inst_33350 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33349__$1);
var state_33363__$1 = (function (){var statearr_33372 = state_33363;
(statearr_33372[(8)] = inst_33349__$1);

return statearr_33372;
})();
if(cljs.core.truth_(inst_33350)){
var statearr_33373_33399 = state_33363__$1;
(statearr_33373_33399[(1)] = (13));

} else {
var statearr_33374_33400 = state_33363__$1;
(statearr_33374_33400[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33364 === (2))){
var inst_33326 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_33327 = (0);
var state_33363__$1 = (function (){var statearr_33375 = state_33363;
(statearr_33375[(7)] = inst_33327);

(statearr_33375[(9)] = inst_33326);

return statearr_33375;
})();
var statearr_33376_33401 = state_33363__$1;
(statearr_33376_33401[(2)] = null);

(statearr_33376_33401[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33364 === (11))){
var inst_33327 = (state_33363[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33363,(10),Object,null,(9));
var inst_33336 = chs__$1.call(null,inst_33327);
var inst_33337 = done.call(null,inst_33327);
var inst_33338 = cljs.core.async.take_BANG_.call(null,inst_33336,inst_33337);
var state_33363__$1 = state_33363;
var statearr_33377_33402 = state_33363__$1;
(statearr_33377_33402[(2)] = inst_33338);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33363__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33364 === (9))){
var inst_33327 = (state_33363[(7)]);
var inst_33340 = (state_33363[(2)]);
var inst_33341 = (inst_33327 + (1));
var inst_33327__$1 = inst_33341;
var state_33363__$1 = (function (){var statearr_33378 = state_33363;
(statearr_33378[(7)] = inst_33327__$1);

(statearr_33378[(10)] = inst_33340);

return statearr_33378;
})();
var statearr_33379_33403 = state_33363__$1;
(statearr_33379_33403[(2)] = null);

(statearr_33379_33403[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33364 === (5))){
var inst_33347 = (state_33363[(2)]);
var state_33363__$1 = (function (){var statearr_33380 = state_33363;
(statearr_33380[(11)] = inst_33347);

return statearr_33380;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33363__$1,(12),dchan);
} else {
if((state_val_33364 === (14))){
var inst_33349 = (state_33363[(8)]);
var inst_33354 = cljs.core.apply.call(null,f,inst_33349);
var state_33363__$1 = state_33363;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33363__$1,(16),out,inst_33354);
} else {
if((state_val_33364 === (16))){
var inst_33356 = (state_33363[(2)]);
var state_33363__$1 = (function (){var statearr_33381 = state_33363;
(statearr_33381[(12)] = inst_33356);

return statearr_33381;
})();
var statearr_33382_33404 = state_33363__$1;
(statearr_33382_33404[(2)] = null);

(statearr_33382_33404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33364 === (10))){
var inst_33331 = (state_33363[(2)]);
var inst_33332 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_33363__$1 = (function (){var statearr_33383 = state_33363;
(statearr_33383[(13)] = inst_33331);

return statearr_33383;
})();
var statearr_33384_33405 = state_33363__$1;
(statearr_33384_33405[(2)] = inst_33332);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33363__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33364 === (8))){
var inst_33345 = (state_33363[(2)]);
var state_33363__$1 = state_33363;
var statearr_33385_33406 = state_33363__$1;
(statearr_33385_33406[(2)] = inst_33345);

(statearr_33385_33406[(1)] = (5));


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
});})(c__32052__auto___33391,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__31957__auto__,c__32052__auto___33391,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__31958__auto__ = null;
var cljs$core$async$state_machine__31958__auto____0 = (function (){
var statearr_33386 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33386[(0)] = cljs$core$async$state_machine__31958__auto__);

(statearr_33386[(1)] = (1));

return statearr_33386;
});
var cljs$core$async$state_machine__31958__auto____1 = (function (state_33363){
while(true){
var ret_value__31959__auto__ = (function (){try{while(true){
var result__31960__auto__ = switch__31957__auto__.call(null,state_33363);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31960__auto__;
}
break;
}
}catch (e33387){if((e33387 instanceof Object)){
var ex__31961__auto__ = e33387;
var statearr_33388_33407 = state_33363;
(statearr_33388_33407[(5)] = ex__31961__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33363);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33408 = state_33363;
state_33363 = G__33408;
continue;
} else {
return ret_value__31959__auto__;
}
break;
}
});
cljs$core$async$state_machine__31958__auto__ = function(state_33363){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31958__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31958__auto____1.call(this,state_33363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31958__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31958__auto____0;
cljs$core$async$state_machine__31958__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31958__auto____1;
return cljs$core$async$state_machine__31958__auto__;
})()
;})(switch__31957__auto__,c__32052__auto___33391,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__32054__auto__ = (function (){var statearr_33389 = f__32053__auto__.call(null);
(statearr_33389[(6)] = c__32052__auto___33391);

return statearr_33389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32054__auto__);
});})(c__32052__auto___33391,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__33411 = arguments.length;
switch (G__33411) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32052__auto___33465 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32052__auto___33465,out){
return (function (){
var f__32053__auto__ = (function (){var switch__31957__auto__ = ((function (c__32052__auto___33465,out){
return (function (state_33443){
var state_val_33444 = (state_33443[(1)]);
if((state_val_33444 === (7))){
var inst_33422 = (state_33443[(7)]);
var inst_33423 = (state_33443[(8)]);
var inst_33422__$1 = (state_33443[(2)]);
var inst_33423__$1 = cljs.core.nth.call(null,inst_33422__$1,(0),null);
var inst_33424 = cljs.core.nth.call(null,inst_33422__$1,(1),null);
var inst_33425 = (inst_33423__$1 == null);
var state_33443__$1 = (function (){var statearr_33445 = state_33443;
(statearr_33445[(7)] = inst_33422__$1);

(statearr_33445[(9)] = inst_33424);

(statearr_33445[(8)] = inst_33423__$1);

return statearr_33445;
})();
if(cljs.core.truth_(inst_33425)){
var statearr_33446_33466 = state_33443__$1;
(statearr_33446_33466[(1)] = (8));

} else {
var statearr_33447_33467 = state_33443__$1;
(statearr_33447_33467[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (1))){
var inst_33412 = cljs.core.vec.call(null,chs);
var inst_33413 = inst_33412;
var state_33443__$1 = (function (){var statearr_33448 = state_33443;
(statearr_33448[(10)] = inst_33413);

return statearr_33448;
})();
var statearr_33449_33468 = state_33443__$1;
(statearr_33449_33468[(2)] = null);

(statearr_33449_33468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (4))){
var inst_33413 = (state_33443[(10)]);
var state_33443__$1 = state_33443;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33443__$1,(7),inst_33413);
} else {
if((state_val_33444 === (6))){
var inst_33439 = (state_33443[(2)]);
var state_33443__$1 = state_33443;
var statearr_33450_33469 = state_33443__$1;
(statearr_33450_33469[(2)] = inst_33439);

(statearr_33450_33469[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (3))){
var inst_33441 = (state_33443[(2)]);
var state_33443__$1 = state_33443;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33443__$1,inst_33441);
} else {
if((state_val_33444 === (2))){
var inst_33413 = (state_33443[(10)]);
var inst_33415 = cljs.core.count.call(null,inst_33413);
var inst_33416 = (inst_33415 > (0));
var state_33443__$1 = state_33443;
if(cljs.core.truth_(inst_33416)){
var statearr_33452_33470 = state_33443__$1;
(statearr_33452_33470[(1)] = (4));

} else {
var statearr_33453_33471 = state_33443__$1;
(statearr_33453_33471[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (11))){
var inst_33413 = (state_33443[(10)]);
var inst_33432 = (state_33443[(2)]);
var tmp33451 = inst_33413;
var inst_33413__$1 = tmp33451;
var state_33443__$1 = (function (){var statearr_33454 = state_33443;
(statearr_33454[(10)] = inst_33413__$1);

(statearr_33454[(11)] = inst_33432);

return statearr_33454;
})();
var statearr_33455_33472 = state_33443__$1;
(statearr_33455_33472[(2)] = null);

(statearr_33455_33472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (9))){
var inst_33423 = (state_33443[(8)]);
var state_33443__$1 = state_33443;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33443__$1,(11),out,inst_33423);
} else {
if((state_val_33444 === (5))){
var inst_33437 = cljs.core.async.close_BANG_.call(null,out);
var state_33443__$1 = state_33443;
var statearr_33456_33473 = state_33443__$1;
(statearr_33456_33473[(2)] = inst_33437);

(statearr_33456_33473[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (10))){
var inst_33435 = (state_33443[(2)]);
var state_33443__$1 = state_33443;
var statearr_33457_33474 = state_33443__$1;
(statearr_33457_33474[(2)] = inst_33435);

(statearr_33457_33474[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (8))){
var inst_33413 = (state_33443[(10)]);
var inst_33422 = (state_33443[(7)]);
var inst_33424 = (state_33443[(9)]);
var inst_33423 = (state_33443[(8)]);
var inst_33427 = (function (){var cs = inst_33413;
var vec__33418 = inst_33422;
var v = inst_33423;
var c = inst_33424;
return ((function (cs,vec__33418,v,c,inst_33413,inst_33422,inst_33424,inst_33423,state_val_33444,c__32052__auto___33465,out){
return (function (p1__33409_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__33409_SHARP_);
});
;})(cs,vec__33418,v,c,inst_33413,inst_33422,inst_33424,inst_33423,state_val_33444,c__32052__auto___33465,out))
})();
var inst_33428 = cljs.core.filterv.call(null,inst_33427,inst_33413);
var inst_33413__$1 = inst_33428;
var state_33443__$1 = (function (){var statearr_33458 = state_33443;
(statearr_33458[(10)] = inst_33413__$1);

return statearr_33458;
})();
var statearr_33459_33475 = state_33443__$1;
(statearr_33459_33475[(2)] = null);

(statearr_33459_33475[(1)] = (2));


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
});})(c__32052__auto___33465,out))
;
return ((function (switch__31957__auto__,c__32052__auto___33465,out){
return (function() {
var cljs$core$async$state_machine__31958__auto__ = null;
var cljs$core$async$state_machine__31958__auto____0 = (function (){
var statearr_33460 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33460[(0)] = cljs$core$async$state_machine__31958__auto__);

(statearr_33460[(1)] = (1));

return statearr_33460;
});
var cljs$core$async$state_machine__31958__auto____1 = (function (state_33443){
while(true){
var ret_value__31959__auto__ = (function (){try{while(true){
var result__31960__auto__ = switch__31957__auto__.call(null,state_33443);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31960__auto__;
}
break;
}
}catch (e33461){if((e33461 instanceof Object)){
var ex__31961__auto__ = e33461;
var statearr_33462_33476 = state_33443;
(statearr_33462_33476[(5)] = ex__31961__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33443);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33461;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33477 = state_33443;
state_33443 = G__33477;
continue;
} else {
return ret_value__31959__auto__;
}
break;
}
});
cljs$core$async$state_machine__31958__auto__ = function(state_33443){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31958__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31958__auto____1.call(this,state_33443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31958__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31958__auto____0;
cljs$core$async$state_machine__31958__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31958__auto____1;
return cljs$core$async$state_machine__31958__auto__;
})()
;})(switch__31957__auto__,c__32052__auto___33465,out))
})();
var state__32054__auto__ = (function (){var statearr_33463 = f__32053__auto__.call(null);
(statearr_33463[(6)] = c__32052__auto___33465);

return statearr_33463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32054__auto__);
});})(c__32052__auto___33465,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__33479 = arguments.length;
switch (G__33479) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32052__auto___33524 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32052__auto___33524,out){
return (function (){
var f__32053__auto__ = (function (){var switch__31957__auto__ = ((function (c__32052__auto___33524,out){
return (function (state_33503){
var state_val_33504 = (state_33503[(1)]);
if((state_val_33504 === (7))){
var inst_33485 = (state_33503[(7)]);
var inst_33485__$1 = (state_33503[(2)]);
var inst_33486 = (inst_33485__$1 == null);
var inst_33487 = cljs.core.not.call(null,inst_33486);
var state_33503__$1 = (function (){var statearr_33505 = state_33503;
(statearr_33505[(7)] = inst_33485__$1);

return statearr_33505;
})();
if(inst_33487){
var statearr_33506_33525 = state_33503__$1;
(statearr_33506_33525[(1)] = (8));

} else {
var statearr_33507_33526 = state_33503__$1;
(statearr_33507_33526[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33504 === (1))){
var inst_33480 = (0);
var state_33503__$1 = (function (){var statearr_33508 = state_33503;
(statearr_33508[(8)] = inst_33480);

return statearr_33508;
})();
var statearr_33509_33527 = state_33503__$1;
(statearr_33509_33527[(2)] = null);

(statearr_33509_33527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33504 === (4))){
var state_33503__$1 = state_33503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33503__$1,(7),ch);
} else {
if((state_val_33504 === (6))){
var inst_33498 = (state_33503[(2)]);
var state_33503__$1 = state_33503;
var statearr_33510_33528 = state_33503__$1;
(statearr_33510_33528[(2)] = inst_33498);

(statearr_33510_33528[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33504 === (3))){
var inst_33500 = (state_33503[(2)]);
var inst_33501 = cljs.core.async.close_BANG_.call(null,out);
var state_33503__$1 = (function (){var statearr_33511 = state_33503;
(statearr_33511[(9)] = inst_33500);

return statearr_33511;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33503__$1,inst_33501);
} else {
if((state_val_33504 === (2))){
var inst_33480 = (state_33503[(8)]);
var inst_33482 = (inst_33480 < n);
var state_33503__$1 = state_33503;
if(cljs.core.truth_(inst_33482)){
var statearr_33512_33529 = state_33503__$1;
(statearr_33512_33529[(1)] = (4));

} else {
var statearr_33513_33530 = state_33503__$1;
(statearr_33513_33530[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33504 === (11))){
var inst_33480 = (state_33503[(8)]);
var inst_33490 = (state_33503[(2)]);
var inst_33491 = (inst_33480 + (1));
var inst_33480__$1 = inst_33491;
var state_33503__$1 = (function (){var statearr_33514 = state_33503;
(statearr_33514[(8)] = inst_33480__$1);

(statearr_33514[(10)] = inst_33490);

return statearr_33514;
})();
var statearr_33515_33531 = state_33503__$1;
(statearr_33515_33531[(2)] = null);

(statearr_33515_33531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33504 === (9))){
var state_33503__$1 = state_33503;
var statearr_33516_33532 = state_33503__$1;
(statearr_33516_33532[(2)] = null);

(statearr_33516_33532[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33504 === (5))){
var state_33503__$1 = state_33503;
var statearr_33517_33533 = state_33503__$1;
(statearr_33517_33533[(2)] = null);

(statearr_33517_33533[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33504 === (10))){
var inst_33495 = (state_33503[(2)]);
var state_33503__$1 = state_33503;
var statearr_33518_33534 = state_33503__$1;
(statearr_33518_33534[(2)] = inst_33495);

(statearr_33518_33534[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33504 === (8))){
var inst_33485 = (state_33503[(7)]);
var state_33503__$1 = state_33503;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33503__$1,(11),out,inst_33485);
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
});})(c__32052__auto___33524,out))
;
return ((function (switch__31957__auto__,c__32052__auto___33524,out){
return (function() {
var cljs$core$async$state_machine__31958__auto__ = null;
var cljs$core$async$state_machine__31958__auto____0 = (function (){
var statearr_33519 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33519[(0)] = cljs$core$async$state_machine__31958__auto__);

(statearr_33519[(1)] = (1));

return statearr_33519;
});
var cljs$core$async$state_machine__31958__auto____1 = (function (state_33503){
while(true){
var ret_value__31959__auto__ = (function (){try{while(true){
var result__31960__auto__ = switch__31957__auto__.call(null,state_33503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31960__auto__;
}
break;
}
}catch (e33520){if((e33520 instanceof Object)){
var ex__31961__auto__ = e33520;
var statearr_33521_33535 = state_33503;
(statearr_33521_33535[(5)] = ex__31961__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33520;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33536 = state_33503;
state_33503 = G__33536;
continue;
} else {
return ret_value__31959__auto__;
}
break;
}
});
cljs$core$async$state_machine__31958__auto__ = function(state_33503){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31958__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31958__auto____1.call(this,state_33503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31958__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31958__auto____0;
cljs$core$async$state_machine__31958__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31958__auto____1;
return cljs$core$async$state_machine__31958__auto__;
})()
;})(switch__31957__auto__,c__32052__auto___33524,out))
})();
var state__32054__auto__ = (function (){var statearr_33522 = f__32053__auto__.call(null);
(statearr_33522[(6)] = c__32052__auto___33524);

return statearr_33522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32054__auto__);
});})(c__32052__auto___33524,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33538 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33538 = (function (f,ch,meta33539){
this.f = f;
this.ch = ch;
this.meta33539 = meta33539;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33538.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33540,meta33539__$1){
var self__ = this;
var _33540__$1 = this;
return (new cljs.core.async.t_cljs$core$async33538(self__.f,self__.ch,meta33539__$1));
});

cljs.core.async.t_cljs$core$async33538.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33540){
var self__ = this;
var _33540__$1 = this;
return self__.meta33539;
});

cljs.core.async.t_cljs$core$async33538.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33538.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33538.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33538.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33538.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33541 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33541 = (function (f,ch,meta33539,_,fn1,meta33542){
this.f = f;
this.ch = ch;
this.meta33539 = meta33539;
this._ = _;
this.fn1 = fn1;
this.meta33542 = meta33542;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33541.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_33543,meta33542__$1){
var self__ = this;
var _33543__$1 = this;
return (new cljs.core.async.t_cljs$core$async33541(self__.f,self__.ch,self__.meta33539,self__._,self__.fn1,meta33542__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async33541.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_33543){
var self__ = this;
var _33543__$1 = this;
return self__.meta33542;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33541.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33541.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33541.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33541.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__33537_SHARP_){
return f1.call(null,(((p1__33537_SHARP_ == null))?null:self__.f.call(null,p1__33537_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async33541.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33539","meta33539",-2130794877,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33538","cljs.core.async/t_cljs$core$async33538",-291546667,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33542","meta33542",346955620,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33541.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33541.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33541";

cljs.core.async.t_cljs$core$async33541.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async33541");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33541.
 */
cljs.core.async.__GT_t_cljs$core$async33541 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33541(f__$1,ch__$1,meta33539__$1,___$2,fn1__$1,meta33542){
return (new cljs.core.async.t_cljs$core$async33541(f__$1,ch__$1,meta33539__$1,___$2,fn1__$1,meta33542));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async33541(self__.f,self__.ch,self__.meta33539,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4036__auto__ = ret;
if(cljs.core.truth_(and__4036__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4036__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async33538.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33538.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async33538.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33539","meta33539",-2130794877,null)], null);
});

cljs.core.async.t_cljs$core$async33538.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33538.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33538";

cljs.core.async.t_cljs$core$async33538.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async33538");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33538.
 */
cljs.core.async.__GT_t_cljs$core$async33538 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33538(f__$1,ch__$1,meta33539){
return (new cljs.core.async.t_cljs$core$async33538(f__$1,ch__$1,meta33539));
});

}

return (new cljs.core.async.t_cljs$core$async33538(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33544 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33544 = (function (f,ch,meta33545){
this.f = f;
this.ch = ch;
this.meta33545 = meta33545;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33544.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33546,meta33545__$1){
var self__ = this;
var _33546__$1 = this;
return (new cljs.core.async.t_cljs$core$async33544(self__.f,self__.ch,meta33545__$1));
});

cljs.core.async.t_cljs$core$async33544.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33546){
var self__ = this;
var _33546__$1 = this;
return self__.meta33545;
});

cljs.core.async.t_cljs$core$async33544.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33544.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33544.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33544.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33544.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33544.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async33544.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33545","meta33545",-743872468,null)], null);
});

cljs.core.async.t_cljs$core$async33544.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33544.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33544";

cljs.core.async.t_cljs$core$async33544.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async33544");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33544.
 */
cljs.core.async.__GT_t_cljs$core$async33544 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33544(f__$1,ch__$1,meta33545){
return (new cljs.core.async.t_cljs$core$async33544(f__$1,ch__$1,meta33545));
});

}

return (new cljs.core.async.t_cljs$core$async33544(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33547 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33547 = (function (p,ch,meta33548){
this.p = p;
this.ch = ch;
this.meta33548 = meta33548;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33547.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33549,meta33548__$1){
var self__ = this;
var _33549__$1 = this;
return (new cljs.core.async.t_cljs$core$async33547(self__.p,self__.ch,meta33548__$1));
});

cljs.core.async.t_cljs$core$async33547.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33549){
var self__ = this;
var _33549__$1 = this;
return self__.meta33548;
});

cljs.core.async.t_cljs$core$async33547.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33547.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33547.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33547.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33547.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33547.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33547.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async33547.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33548","meta33548",34259451,null)], null);
});

cljs.core.async.t_cljs$core$async33547.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33547.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33547";

cljs.core.async.t_cljs$core$async33547.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async33547");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33547.
 */
cljs.core.async.__GT_t_cljs$core$async33547 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33547(p__$1,ch__$1,meta33548){
return (new cljs.core.async.t_cljs$core$async33547(p__$1,ch__$1,meta33548));
});

}

return (new cljs.core.async.t_cljs$core$async33547(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__33551 = arguments.length;
switch (G__33551) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32052__auto___33591 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32052__auto___33591,out){
return (function (){
var f__32053__auto__ = (function (){var switch__31957__auto__ = ((function (c__32052__auto___33591,out){
return (function (state_33572){
var state_val_33573 = (state_33572[(1)]);
if((state_val_33573 === (7))){
var inst_33568 = (state_33572[(2)]);
var state_33572__$1 = state_33572;
var statearr_33574_33592 = state_33572__$1;
(statearr_33574_33592[(2)] = inst_33568);

(statearr_33574_33592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33573 === (1))){
var state_33572__$1 = state_33572;
var statearr_33575_33593 = state_33572__$1;
(statearr_33575_33593[(2)] = null);

(statearr_33575_33593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33573 === (4))){
var inst_33554 = (state_33572[(7)]);
var inst_33554__$1 = (state_33572[(2)]);
var inst_33555 = (inst_33554__$1 == null);
var state_33572__$1 = (function (){var statearr_33576 = state_33572;
(statearr_33576[(7)] = inst_33554__$1);

return statearr_33576;
})();
if(cljs.core.truth_(inst_33555)){
var statearr_33577_33594 = state_33572__$1;
(statearr_33577_33594[(1)] = (5));

} else {
var statearr_33578_33595 = state_33572__$1;
(statearr_33578_33595[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33573 === (6))){
var inst_33554 = (state_33572[(7)]);
var inst_33559 = p.call(null,inst_33554);
var state_33572__$1 = state_33572;
if(cljs.core.truth_(inst_33559)){
var statearr_33579_33596 = state_33572__$1;
(statearr_33579_33596[(1)] = (8));

} else {
var statearr_33580_33597 = state_33572__$1;
(statearr_33580_33597[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33573 === (3))){
var inst_33570 = (state_33572[(2)]);
var state_33572__$1 = state_33572;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33572__$1,inst_33570);
} else {
if((state_val_33573 === (2))){
var state_33572__$1 = state_33572;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33572__$1,(4),ch);
} else {
if((state_val_33573 === (11))){
var inst_33562 = (state_33572[(2)]);
var state_33572__$1 = state_33572;
var statearr_33581_33598 = state_33572__$1;
(statearr_33581_33598[(2)] = inst_33562);

(statearr_33581_33598[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33573 === (9))){
var state_33572__$1 = state_33572;
var statearr_33582_33599 = state_33572__$1;
(statearr_33582_33599[(2)] = null);

(statearr_33582_33599[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33573 === (5))){
var inst_33557 = cljs.core.async.close_BANG_.call(null,out);
var state_33572__$1 = state_33572;
var statearr_33583_33600 = state_33572__$1;
(statearr_33583_33600[(2)] = inst_33557);

(statearr_33583_33600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33573 === (10))){
var inst_33565 = (state_33572[(2)]);
var state_33572__$1 = (function (){var statearr_33584 = state_33572;
(statearr_33584[(8)] = inst_33565);

return statearr_33584;
})();
var statearr_33585_33601 = state_33572__$1;
(statearr_33585_33601[(2)] = null);

(statearr_33585_33601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33573 === (8))){
var inst_33554 = (state_33572[(7)]);
var state_33572__$1 = state_33572;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33572__$1,(11),out,inst_33554);
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
});})(c__32052__auto___33591,out))
;
return ((function (switch__31957__auto__,c__32052__auto___33591,out){
return (function() {
var cljs$core$async$state_machine__31958__auto__ = null;
var cljs$core$async$state_machine__31958__auto____0 = (function (){
var statearr_33586 = [null,null,null,null,null,null,null,null,null];
(statearr_33586[(0)] = cljs$core$async$state_machine__31958__auto__);

(statearr_33586[(1)] = (1));

return statearr_33586;
});
var cljs$core$async$state_machine__31958__auto____1 = (function (state_33572){
while(true){
var ret_value__31959__auto__ = (function (){try{while(true){
var result__31960__auto__ = switch__31957__auto__.call(null,state_33572);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31960__auto__;
}
break;
}
}catch (e33587){if((e33587 instanceof Object)){
var ex__31961__auto__ = e33587;
var statearr_33588_33602 = state_33572;
(statearr_33588_33602[(5)] = ex__31961__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33572);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33587;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33603 = state_33572;
state_33572 = G__33603;
continue;
} else {
return ret_value__31959__auto__;
}
break;
}
});
cljs$core$async$state_machine__31958__auto__ = function(state_33572){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31958__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31958__auto____1.call(this,state_33572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31958__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31958__auto____0;
cljs$core$async$state_machine__31958__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31958__auto____1;
return cljs$core$async$state_machine__31958__auto__;
})()
;})(switch__31957__auto__,c__32052__auto___33591,out))
})();
var state__32054__auto__ = (function (){var statearr_33589 = f__32053__auto__.call(null);
(statearr_33589[(6)] = c__32052__auto___33591);

return statearr_33589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32054__auto__);
});})(c__32052__auto___33591,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33605 = arguments.length;
switch (G__33605) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__32052__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32052__auto__){
return (function (){
var f__32053__auto__ = (function (){var switch__31957__auto__ = ((function (c__32052__auto__){
return (function (state_33668){
var state_val_33669 = (state_33668[(1)]);
if((state_val_33669 === (7))){
var inst_33664 = (state_33668[(2)]);
var state_33668__$1 = state_33668;
var statearr_33670_33708 = state_33668__$1;
(statearr_33670_33708[(2)] = inst_33664);

(statearr_33670_33708[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33669 === (20))){
var inst_33634 = (state_33668[(7)]);
var inst_33645 = (state_33668[(2)]);
var inst_33646 = cljs.core.next.call(null,inst_33634);
var inst_33620 = inst_33646;
var inst_33621 = null;
var inst_33622 = (0);
var inst_33623 = (0);
var state_33668__$1 = (function (){var statearr_33671 = state_33668;
(statearr_33671[(8)] = inst_33622);

(statearr_33671[(9)] = inst_33645);

(statearr_33671[(10)] = inst_33620);

(statearr_33671[(11)] = inst_33623);

(statearr_33671[(12)] = inst_33621);

return statearr_33671;
})();
var statearr_33672_33709 = state_33668__$1;
(statearr_33672_33709[(2)] = null);

(statearr_33672_33709[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33669 === (1))){
var state_33668__$1 = state_33668;
var statearr_33673_33710 = state_33668__$1;
(statearr_33673_33710[(2)] = null);

(statearr_33673_33710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33669 === (4))){
var inst_33609 = (state_33668[(13)]);
var inst_33609__$1 = (state_33668[(2)]);
var inst_33610 = (inst_33609__$1 == null);
var state_33668__$1 = (function (){var statearr_33674 = state_33668;
(statearr_33674[(13)] = inst_33609__$1);

return statearr_33674;
})();
if(cljs.core.truth_(inst_33610)){
var statearr_33675_33711 = state_33668__$1;
(statearr_33675_33711[(1)] = (5));

} else {
var statearr_33676_33712 = state_33668__$1;
(statearr_33676_33712[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33669 === (15))){
var state_33668__$1 = state_33668;
var statearr_33680_33713 = state_33668__$1;
(statearr_33680_33713[(2)] = null);

(statearr_33680_33713[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33669 === (21))){
var state_33668__$1 = state_33668;
var statearr_33681_33714 = state_33668__$1;
(statearr_33681_33714[(2)] = null);

(statearr_33681_33714[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33669 === (13))){
var inst_33622 = (state_33668[(8)]);
var inst_33620 = (state_33668[(10)]);
var inst_33623 = (state_33668[(11)]);
var inst_33621 = (state_33668[(12)]);
var inst_33630 = (state_33668[(2)]);
var inst_33631 = (inst_33623 + (1));
var tmp33677 = inst_33622;
var tmp33678 = inst_33620;
var tmp33679 = inst_33621;
var inst_33620__$1 = tmp33678;
var inst_33621__$1 = tmp33679;
var inst_33622__$1 = tmp33677;
var inst_33623__$1 = inst_33631;
var state_33668__$1 = (function (){var statearr_33682 = state_33668;
(statearr_33682[(8)] = inst_33622__$1);

(statearr_33682[(10)] = inst_33620__$1);

(statearr_33682[(11)] = inst_33623__$1);

(statearr_33682[(14)] = inst_33630);

(statearr_33682[(12)] = inst_33621__$1);

return statearr_33682;
})();
var statearr_33683_33715 = state_33668__$1;
(statearr_33683_33715[(2)] = null);

(statearr_33683_33715[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33669 === (22))){
var state_33668__$1 = state_33668;
var statearr_33684_33716 = state_33668__$1;
(statearr_33684_33716[(2)] = null);

(statearr_33684_33716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33669 === (6))){
var inst_33609 = (state_33668[(13)]);
var inst_33618 = f.call(null,inst_33609);
var inst_33619 = cljs.core.seq.call(null,inst_33618);
var inst_33620 = inst_33619;
var inst_33621 = null;
var inst_33622 = (0);
var inst_33623 = (0);
var state_33668__$1 = (function (){var statearr_33685 = state_33668;
(statearr_33685[(8)] = inst_33622);

(statearr_33685[(10)] = inst_33620);

(statearr_33685[(11)] = inst_33623);

(statearr_33685[(12)] = inst_33621);

return statearr_33685;
})();
var statearr_33686_33717 = state_33668__$1;
(statearr_33686_33717[(2)] = null);

(statearr_33686_33717[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33669 === (17))){
var inst_33634 = (state_33668[(7)]);
var inst_33638 = cljs.core.chunk_first.call(null,inst_33634);
var inst_33639 = cljs.core.chunk_rest.call(null,inst_33634);
var inst_33640 = cljs.core.count.call(null,inst_33638);
var inst_33620 = inst_33639;
var inst_33621 = inst_33638;
var inst_33622 = inst_33640;
var inst_33623 = (0);
var state_33668__$1 = (function (){var statearr_33687 = state_33668;
(statearr_33687[(8)] = inst_33622);

(statearr_33687[(10)] = inst_33620);

(statearr_33687[(11)] = inst_33623);

(statearr_33687[(12)] = inst_33621);

return statearr_33687;
})();
var statearr_33688_33718 = state_33668__$1;
(statearr_33688_33718[(2)] = null);

(statearr_33688_33718[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33669 === (3))){
var inst_33666 = (state_33668[(2)]);
var state_33668__$1 = state_33668;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33668__$1,inst_33666);
} else {
if((state_val_33669 === (12))){
var inst_33654 = (state_33668[(2)]);
var state_33668__$1 = state_33668;
var statearr_33689_33719 = state_33668__$1;
(statearr_33689_33719[(2)] = inst_33654);

(statearr_33689_33719[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33669 === (2))){
var state_33668__$1 = state_33668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33668__$1,(4),in$);
} else {
if((state_val_33669 === (23))){
var inst_33662 = (state_33668[(2)]);
var state_33668__$1 = state_33668;
var statearr_33690_33720 = state_33668__$1;
(statearr_33690_33720[(2)] = inst_33662);

(statearr_33690_33720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33669 === (19))){
var inst_33649 = (state_33668[(2)]);
var state_33668__$1 = state_33668;
var statearr_33691_33721 = state_33668__$1;
(statearr_33691_33721[(2)] = inst_33649);

(statearr_33691_33721[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33669 === (11))){
var inst_33620 = (state_33668[(10)]);
var inst_33634 = (state_33668[(7)]);
var inst_33634__$1 = cljs.core.seq.call(null,inst_33620);
var state_33668__$1 = (function (){var statearr_33692 = state_33668;
(statearr_33692[(7)] = inst_33634__$1);

return statearr_33692;
})();
if(inst_33634__$1){
var statearr_33693_33722 = state_33668__$1;
(statearr_33693_33722[(1)] = (14));

} else {
var statearr_33694_33723 = state_33668__$1;
(statearr_33694_33723[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33669 === (9))){
var inst_33656 = (state_33668[(2)]);
var inst_33657 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_33668__$1 = (function (){var statearr_33695 = state_33668;
(statearr_33695[(15)] = inst_33656);

return statearr_33695;
})();
if(cljs.core.truth_(inst_33657)){
var statearr_33696_33724 = state_33668__$1;
(statearr_33696_33724[(1)] = (21));

} else {
var statearr_33697_33725 = state_33668__$1;
(statearr_33697_33725[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33669 === (5))){
var inst_33612 = cljs.core.async.close_BANG_.call(null,out);
var state_33668__$1 = state_33668;
var statearr_33698_33726 = state_33668__$1;
(statearr_33698_33726[(2)] = inst_33612);

(statearr_33698_33726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33669 === (14))){
var inst_33634 = (state_33668[(7)]);
var inst_33636 = cljs.core.chunked_seq_QMARK_.call(null,inst_33634);
var state_33668__$1 = state_33668;
if(inst_33636){
var statearr_33699_33727 = state_33668__$1;
(statearr_33699_33727[(1)] = (17));

} else {
var statearr_33700_33728 = state_33668__$1;
(statearr_33700_33728[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33669 === (16))){
var inst_33652 = (state_33668[(2)]);
var state_33668__$1 = state_33668;
var statearr_33701_33729 = state_33668__$1;
(statearr_33701_33729[(2)] = inst_33652);

(statearr_33701_33729[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33669 === (10))){
var inst_33623 = (state_33668[(11)]);
var inst_33621 = (state_33668[(12)]);
var inst_33628 = cljs.core._nth.call(null,inst_33621,inst_33623);
var state_33668__$1 = state_33668;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33668__$1,(13),out,inst_33628);
} else {
if((state_val_33669 === (18))){
var inst_33634 = (state_33668[(7)]);
var inst_33643 = cljs.core.first.call(null,inst_33634);
var state_33668__$1 = state_33668;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33668__$1,(20),out,inst_33643);
} else {
if((state_val_33669 === (8))){
var inst_33622 = (state_33668[(8)]);
var inst_33623 = (state_33668[(11)]);
var inst_33625 = (inst_33623 < inst_33622);
var inst_33626 = inst_33625;
var state_33668__$1 = state_33668;
if(cljs.core.truth_(inst_33626)){
var statearr_33702_33730 = state_33668__$1;
(statearr_33702_33730[(1)] = (10));

} else {
var statearr_33703_33731 = state_33668__$1;
(statearr_33703_33731[(1)] = (11));

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
});})(c__32052__auto__))
;
return ((function (switch__31957__auto__,c__32052__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__31958__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__31958__auto____0 = (function (){
var statearr_33704 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33704[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__31958__auto__);

(statearr_33704[(1)] = (1));

return statearr_33704;
});
var cljs$core$async$mapcat_STAR__$_state_machine__31958__auto____1 = (function (state_33668){
while(true){
var ret_value__31959__auto__ = (function (){try{while(true){
var result__31960__auto__ = switch__31957__auto__.call(null,state_33668);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31960__auto__;
}
break;
}
}catch (e33705){if((e33705 instanceof Object)){
var ex__31961__auto__ = e33705;
var statearr_33706_33732 = state_33668;
(statearr_33706_33732[(5)] = ex__31961__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33705;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33733 = state_33668;
state_33668 = G__33733;
continue;
} else {
return ret_value__31959__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__31958__auto__ = function(state_33668){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__31958__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__31958__auto____1.call(this,state_33668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__31958__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__31958__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__31958__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__31958__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__31958__auto__;
})()
;})(switch__31957__auto__,c__32052__auto__))
})();
var state__32054__auto__ = (function (){var statearr_33707 = f__32053__auto__.call(null);
(statearr_33707[(6)] = c__32052__auto__);

return statearr_33707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32054__auto__);
});})(c__32052__auto__))
);

return c__32052__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33735 = arguments.length;
switch (G__33735) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__33738 = arguments.length;
switch (G__33738) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__33741 = arguments.length;
switch (G__33741) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32052__auto___33788 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32052__auto___33788,out){
return (function (){
var f__32053__auto__ = (function (){var switch__31957__auto__ = ((function (c__32052__auto___33788,out){
return (function (state_33765){
var state_val_33766 = (state_33765[(1)]);
if((state_val_33766 === (7))){
var inst_33760 = (state_33765[(2)]);
var state_33765__$1 = state_33765;
var statearr_33767_33789 = state_33765__$1;
(statearr_33767_33789[(2)] = inst_33760);

(statearr_33767_33789[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33766 === (1))){
var inst_33742 = null;
var state_33765__$1 = (function (){var statearr_33768 = state_33765;
(statearr_33768[(7)] = inst_33742);

return statearr_33768;
})();
var statearr_33769_33790 = state_33765__$1;
(statearr_33769_33790[(2)] = null);

(statearr_33769_33790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33766 === (4))){
var inst_33745 = (state_33765[(8)]);
var inst_33745__$1 = (state_33765[(2)]);
var inst_33746 = (inst_33745__$1 == null);
var inst_33747 = cljs.core.not.call(null,inst_33746);
var state_33765__$1 = (function (){var statearr_33770 = state_33765;
(statearr_33770[(8)] = inst_33745__$1);

return statearr_33770;
})();
if(inst_33747){
var statearr_33771_33791 = state_33765__$1;
(statearr_33771_33791[(1)] = (5));

} else {
var statearr_33772_33792 = state_33765__$1;
(statearr_33772_33792[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33766 === (6))){
var state_33765__$1 = state_33765;
var statearr_33773_33793 = state_33765__$1;
(statearr_33773_33793[(2)] = null);

(statearr_33773_33793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33766 === (3))){
var inst_33762 = (state_33765[(2)]);
var inst_33763 = cljs.core.async.close_BANG_.call(null,out);
var state_33765__$1 = (function (){var statearr_33774 = state_33765;
(statearr_33774[(9)] = inst_33762);

return statearr_33774;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33765__$1,inst_33763);
} else {
if((state_val_33766 === (2))){
var state_33765__$1 = state_33765;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33765__$1,(4),ch);
} else {
if((state_val_33766 === (11))){
var inst_33745 = (state_33765[(8)]);
var inst_33754 = (state_33765[(2)]);
var inst_33742 = inst_33745;
var state_33765__$1 = (function (){var statearr_33775 = state_33765;
(statearr_33775[(10)] = inst_33754);

(statearr_33775[(7)] = inst_33742);

return statearr_33775;
})();
var statearr_33776_33794 = state_33765__$1;
(statearr_33776_33794[(2)] = null);

(statearr_33776_33794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33766 === (9))){
var inst_33745 = (state_33765[(8)]);
var state_33765__$1 = state_33765;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33765__$1,(11),out,inst_33745);
} else {
if((state_val_33766 === (5))){
var inst_33745 = (state_33765[(8)]);
var inst_33742 = (state_33765[(7)]);
var inst_33749 = cljs.core._EQ_.call(null,inst_33745,inst_33742);
var state_33765__$1 = state_33765;
if(inst_33749){
var statearr_33778_33795 = state_33765__$1;
(statearr_33778_33795[(1)] = (8));

} else {
var statearr_33779_33796 = state_33765__$1;
(statearr_33779_33796[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33766 === (10))){
var inst_33757 = (state_33765[(2)]);
var state_33765__$1 = state_33765;
var statearr_33780_33797 = state_33765__$1;
(statearr_33780_33797[(2)] = inst_33757);

(statearr_33780_33797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33766 === (8))){
var inst_33742 = (state_33765[(7)]);
var tmp33777 = inst_33742;
var inst_33742__$1 = tmp33777;
var state_33765__$1 = (function (){var statearr_33781 = state_33765;
(statearr_33781[(7)] = inst_33742__$1);

return statearr_33781;
})();
var statearr_33782_33798 = state_33765__$1;
(statearr_33782_33798[(2)] = null);

(statearr_33782_33798[(1)] = (2));


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
});})(c__32052__auto___33788,out))
;
return ((function (switch__31957__auto__,c__32052__auto___33788,out){
return (function() {
var cljs$core$async$state_machine__31958__auto__ = null;
var cljs$core$async$state_machine__31958__auto____0 = (function (){
var statearr_33783 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33783[(0)] = cljs$core$async$state_machine__31958__auto__);

(statearr_33783[(1)] = (1));

return statearr_33783;
});
var cljs$core$async$state_machine__31958__auto____1 = (function (state_33765){
while(true){
var ret_value__31959__auto__ = (function (){try{while(true){
var result__31960__auto__ = switch__31957__auto__.call(null,state_33765);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31960__auto__;
}
break;
}
}catch (e33784){if((e33784 instanceof Object)){
var ex__31961__auto__ = e33784;
var statearr_33785_33799 = state_33765;
(statearr_33785_33799[(5)] = ex__31961__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33784;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33800 = state_33765;
state_33765 = G__33800;
continue;
} else {
return ret_value__31959__auto__;
}
break;
}
});
cljs$core$async$state_machine__31958__auto__ = function(state_33765){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31958__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31958__auto____1.call(this,state_33765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31958__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31958__auto____0;
cljs$core$async$state_machine__31958__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31958__auto____1;
return cljs$core$async$state_machine__31958__auto__;
})()
;})(switch__31957__auto__,c__32052__auto___33788,out))
})();
var state__32054__auto__ = (function (){var statearr_33786 = f__32053__auto__.call(null);
(statearr_33786[(6)] = c__32052__auto___33788);

return statearr_33786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32054__auto__);
});})(c__32052__auto___33788,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33802 = arguments.length;
switch (G__33802) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32052__auto___33868 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32052__auto___33868,out){
return (function (){
var f__32053__auto__ = (function (){var switch__31957__auto__ = ((function (c__32052__auto___33868,out){
return (function (state_33840){
var state_val_33841 = (state_33840[(1)]);
if((state_val_33841 === (7))){
var inst_33836 = (state_33840[(2)]);
var state_33840__$1 = state_33840;
var statearr_33842_33869 = state_33840__$1;
(statearr_33842_33869[(2)] = inst_33836);

(statearr_33842_33869[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (1))){
var inst_33803 = (new Array(n));
var inst_33804 = inst_33803;
var inst_33805 = (0);
var state_33840__$1 = (function (){var statearr_33843 = state_33840;
(statearr_33843[(7)] = inst_33805);

(statearr_33843[(8)] = inst_33804);

return statearr_33843;
})();
var statearr_33844_33870 = state_33840__$1;
(statearr_33844_33870[(2)] = null);

(statearr_33844_33870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (4))){
var inst_33808 = (state_33840[(9)]);
var inst_33808__$1 = (state_33840[(2)]);
var inst_33809 = (inst_33808__$1 == null);
var inst_33810 = cljs.core.not.call(null,inst_33809);
var state_33840__$1 = (function (){var statearr_33845 = state_33840;
(statearr_33845[(9)] = inst_33808__$1);

return statearr_33845;
})();
if(inst_33810){
var statearr_33846_33871 = state_33840__$1;
(statearr_33846_33871[(1)] = (5));

} else {
var statearr_33847_33872 = state_33840__$1;
(statearr_33847_33872[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (15))){
var inst_33830 = (state_33840[(2)]);
var state_33840__$1 = state_33840;
var statearr_33848_33873 = state_33840__$1;
(statearr_33848_33873[(2)] = inst_33830);

(statearr_33848_33873[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (13))){
var state_33840__$1 = state_33840;
var statearr_33849_33874 = state_33840__$1;
(statearr_33849_33874[(2)] = null);

(statearr_33849_33874[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (6))){
var inst_33805 = (state_33840[(7)]);
var inst_33826 = (inst_33805 > (0));
var state_33840__$1 = state_33840;
if(cljs.core.truth_(inst_33826)){
var statearr_33850_33875 = state_33840__$1;
(statearr_33850_33875[(1)] = (12));

} else {
var statearr_33851_33876 = state_33840__$1;
(statearr_33851_33876[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (3))){
var inst_33838 = (state_33840[(2)]);
var state_33840__$1 = state_33840;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33840__$1,inst_33838);
} else {
if((state_val_33841 === (12))){
var inst_33804 = (state_33840[(8)]);
var inst_33828 = cljs.core.vec.call(null,inst_33804);
var state_33840__$1 = state_33840;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33840__$1,(15),out,inst_33828);
} else {
if((state_val_33841 === (2))){
var state_33840__$1 = state_33840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33840__$1,(4),ch);
} else {
if((state_val_33841 === (11))){
var inst_33820 = (state_33840[(2)]);
var inst_33821 = (new Array(n));
var inst_33804 = inst_33821;
var inst_33805 = (0);
var state_33840__$1 = (function (){var statearr_33852 = state_33840;
(statearr_33852[(10)] = inst_33820);

(statearr_33852[(7)] = inst_33805);

(statearr_33852[(8)] = inst_33804);

return statearr_33852;
})();
var statearr_33853_33877 = state_33840__$1;
(statearr_33853_33877[(2)] = null);

(statearr_33853_33877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (9))){
var inst_33804 = (state_33840[(8)]);
var inst_33818 = cljs.core.vec.call(null,inst_33804);
var state_33840__$1 = state_33840;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33840__$1,(11),out,inst_33818);
} else {
if((state_val_33841 === (5))){
var inst_33805 = (state_33840[(7)]);
var inst_33813 = (state_33840[(11)]);
var inst_33808 = (state_33840[(9)]);
var inst_33804 = (state_33840[(8)]);
var inst_33812 = (inst_33804[inst_33805] = inst_33808);
var inst_33813__$1 = (inst_33805 + (1));
var inst_33814 = (inst_33813__$1 < n);
var state_33840__$1 = (function (){var statearr_33854 = state_33840;
(statearr_33854[(11)] = inst_33813__$1);

(statearr_33854[(12)] = inst_33812);

return statearr_33854;
})();
if(cljs.core.truth_(inst_33814)){
var statearr_33855_33878 = state_33840__$1;
(statearr_33855_33878[(1)] = (8));

} else {
var statearr_33856_33879 = state_33840__$1;
(statearr_33856_33879[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (14))){
var inst_33833 = (state_33840[(2)]);
var inst_33834 = cljs.core.async.close_BANG_.call(null,out);
var state_33840__$1 = (function (){var statearr_33858 = state_33840;
(statearr_33858[(13)] = inst_33833);

return statearr_33858;
})();
var statearr_33859_33880 = state_33840__$1;
(statearr_33859_33880[(2)] = inst_33834);

(statearr_33859_33880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (10))){
var inst_33824 = (state_33840[(2)]);
var state_33840__$1 = state_33840;
var statearr_33860_33881 = state_33840__$1;
(statearr_33860_33881[(2)] = inst_33824);

(statearr_33860_33881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (8))){
var inst_33813 = (state_33840[(11)]);
var inst_33804 = (state_33840[(8)]);
var tmp33857 = inst_33804;
var inst_33804__$1 = tmp33857;
var inst_33805 = inst_33813;
var state_33840__$1 = (function (){var statearr_33861 = state_33840;
(statearr_33861[(7)] = inst_33805);

(statearr_33861[(8)] = inst_33804__$1);

return statearr_33861;
})();
var statearr_33862_33882 = state_33840__$1;
(statearr_33862_33882[(2)] = null);

(statearr_33862_33882[(1)] = (2));


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
});})(c__32052__auto___33868,out))
;
return ((function (switch__31957__auto__,c__32052__auto___33868,out){
return (function() {
var cljs$core$async$state_machine__31958__auto__ = null;
var cljs$core$async$state_machine__31958__auto____0 = (function (){
var statearr_33863 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33863[(0)] = cljs$core$async$state_machine__31958__auto__);

(statearr_33863[(1)] = (1));

return statearr_33863;
});
var cljs$core$async$state_machine__31958__auto____1 = (function (state_33840){
while(true){
var ret_value__31959__auto__ = (function (){try{while(true){
var result__31960__auto__ = switch__31957__auto__.call(null,state_33840);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31960__auto__;
}
break;
}
}catch (e33864){if((e33864 instanceof Object)){
var ex__31961__auto__ = e33864;
var statearr_33865_33883 = state_33840;
(statearr_33865_33883[(5)] = ex__31961__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33840);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33884 = state_33840;
state_33840 = G__33884;
continue;
} else {
return ret_value__31959__auto__;
}
break;
}
});
cljs$core$async$state_machine__31958__auto__ = function(state_33840){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31958__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31958__auto____1.call(this,state_33840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31958__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31958__auto____0;
cljs$core$async$state_machine__31958__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31958__auto____1;
return cljs$core$async$state_machine__31958__auto__;
})()
;})(switch__31957__auto__,c__32052__auto___33868,out))
})();
var state__32054__auto__ = (function (){var statearr_33866 = f__32053__auto__.call(null);
(statearr_33866[(6)] = c__32052__auto___33868);

return statearr_33866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32054__auto__);
});})(c__32052__auto___33868,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33886 = arguments.length;
switch (G__33886) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32052__auto___33956 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32052__auto___33956,out){
return (function (){
var f__32053__auto__ = (function (){var switch__31957__auto__ = ((function (c__32052__auto___33956,out){
return (function (state_33928){
var state_val_33929 = (state_33928[(1)]);
if((state_val_33929 === (7))){
var inst_33924 = (state_33928[(2)]);
var state_33928__$1 = state_33928;
var statearr_33930_33957 = state_33928__$1;
(statearr_33930_33957[(2)] = inst_33924);

(statearr_33930_33957[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33929 === (1))){
var inst_33887 = [];
var inst_33888 = inst_33887;
var inst_33889 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33928__$1 = (function (){var statearr_33931 = state_33928;
(statearr_33931[(7)] = inst_33888);

(statearr_33931[(8)] = inst_33889);

return statearr_33931;
})();
var statearr_33932_33958 = state_33928__$1;
(statearr_33932_33958[(2)] = null);

(statearr_33932_33958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33929 === (4))){
var inst_33892 = (state_33928[(9)]);
var inst_33892__$1 = (state_33928[(2)]);
var inst_33893 = (inst_33892__$1 == null);
var inst_33894 = cljs.core.not.call(null,inst_33893);
var state_33928__$1 = (function (){var statearr_33933 = state_33928;
(statearr_33933[(9)] = inst_33892__$1);

return statearr_33933;
})();
if(inst_33894){
var statearr_33934_33959 = state_33928__$1;
(statearr_33934_33959[(1)] = (5));

} else {
var statearr_33935_33960 = state_33928__$1;
(statearr_33935_33960[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33929 === (15))){
var inst_33918 = (state_33928[(2)]);
var state_33928__$1 = state_33928;
var statearr_33936_33961 = state_33928__$1;
(statearr_33936_33961[(2)] = inst_33918);

(statearr_33936_33961[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33929 === (13))){
var state_33928__$1 = state_33928;
var statearr_33937_33962 = state_33928__$1;
(statearr_33937_33962[(2)] = null);

(statearr_33937_33962[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33929 === (6))){
var inst_33888 = (state_33928[(7)]);
var inst_33913 = inst_33888.length;
var inst_33914 = (inst_33913 > (0));
var state_33928__$1 = state_33928;
if(cljs.core.truth_(inst_33914)){
var statearr_33938_33963 = state_33928__$1;
(statearr_33938_33963[(1)] = (12));

} else {
var statearr_33939_33964 = state_33928__$1;
(statearr_33939_33964[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33929 === (3))){
var inst_33926 = (state_33928[(2)]);
var state_33928__$1 = state_33928;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33928__$1,inst_33926);
} else {
if((state_val_33929 === (12))){
var inst_33888 = (state_33928[(7)]);
var inst_33916 = cljs.core.vec.call(null,inst_33888);
var state_33928__$1 = state_33928;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33928__$1,(15),out,inst_33916);
} else {
if((state_val_33929 === (2))){
var state_33928__$1 = state_33928;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33928__$1,(4),ch);
} else {
if((state_val_33929 === (11))){
var inst_33892 = (state_33928[(9)]);
var inst_33896 = (state_33928[(10)]);
var inst_33906 = (state_33928[(2)]);
var inst_33907 = [];
var inst_33908 = inst_33907.push(inst_33892);
var inst_33888 = inst_33907;
var inst_33889 = inst_33896;
var state_33928__$1 = (function (){var statearr_33940 = state_33928;
(statearr_33940[(7)] = inst_33888);

(statearr_33940[(8)] = inst_33889);

(statearr_33940[(11)] = inst_33908);

(statearr_33940[(12)] = inst_33906);

return statearr_33940;
})();
var statearr_33941_33965 = state_33928__$1;
(statearr_33941_33965[(2)] = null);

(statearr_33941_33965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33929 === (9))){
var inst_33888 = (state_33928[(7)]);
var inst_33904 = cljs.core.vec.call(null,inst_33888);
var state_33928__$1 = state_33928;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33928__$1,(11),out,inst_33904);
} else {
if((state_val_33929 === (5))){
var inst_33892 = (state_33928[(9)]);
var inst_33889 = (state_33928[(8)]);
var inst_33896 = (state_33928[(10)]);
var inst_33896__$1 = f.call(null,inst_33892);
var inst_33897 = cljs.core._EQ_.call(null,inst_33896__$1,inst_33889);
var inst_33898 = cljs.core.keyword_identical_QMARK_.call(null,inst_33889,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33899 = ((inst_33897) || (inst_33898));
var state_33928__$1 = (function (){var statearr_33942 = state_33928;
(statearr_33942[(10)] = inst_33896__$1);

return statearr_33942;
})();
if(cljs.core.truth_(inst_33899)){
var statearr_33943_33966 = state_33928__$1;
(statearr_33943_33966[(1)] = (8));

} else {
var statearr_33944_33967 = state_33928__$1;
(statearr_33944_33967[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33929 === (14))){
var inst_33921 = (state_33928[(2)]);
var inst_33922 = cljs.core.async.close_BANG_.call(null,out);
var state_33928__$1 = (function (){var statearr_33946 = state_33928;
(statearr_33946[(13)] = inst_33921);

return statearr_33946;
})();
var statearr_33947_33968 = state_33928__$1;
(statearr_33947_33968[(2)] = inst_33922);

(statearr_33947_33968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33929 === (10))){
var inst_33911 = (state_33928[(2)]);
var state_33928__$1 = state_33928;
var statearr_33948_33969 = state_33928__$1;
(statearr_33948_33969[(2)] = inst_33911);

(statearr_33948_33969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33929 === (8))){
var inst_33892 = (state_33928[(9)]);
var inst_33888 = (state_33928[(7)]);
var inst_33896 = (state_33928[(10)]);
var inst_33901 = inst_33888.push(inst_33892);
var tmp33945 = inst_33888;
var inst_33888__$1 = tmp33945;
var inst_33889 = inst_33896;
var state_33928__$1 = (function (){var statearr_33949 = state_33928;
(statearr_33949[(14)] = inst_33901);

(statearr_33949[(7)] = inst_33888__$1);

(statearr_33949[(8)] = inst_33889);

return statearr_33949;
})();
var statearr_33950_33970 = state_33928__$1;
(statearr_33950_33970[(2)] = null);

(statearr_33950_33970[(1)] = (2));


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
});})(c__32052__auto___33956,out))
;
return ((function (switch__31957__auto__,c__32052__auto___33956,out){
return (function() {
var cljs$core$async$state_machine__31958__auto__ = null;
var cljs$core$async$state_machine__31958__auto____0 = (function (){
var statearr_33951 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33951[(0)] = cljs$core$async$state_machine__31958__auto__);

(statearr_33951[(1)] = (1));

return statearr_33951;
});
var cljs$core$async$state_machine__31958__auto____1 = (function (state_33928){
while(true){
var ret_value__31959__auto__ = (function (){try{while(true){
var result__31960__auto__ = switch__31957__auto__.call(null,state_33928);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31960__auto__;
}
break;
}
}catch (e33952){if((e33952 instanceof Object)){
var ex__31961__auto__ = e33952;
var statearr_33953_33971 = state_33928;
(statearr_33953_33971[(5)] = ex__31961__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33928);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33972 = state_33928;
state_33928 = G__33972;
continue;
} else {
return ret_value__31959__auto__;
}
break;
}
});
cljs$core$async$state_machine__31958__auto__ = function(state_33928){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31958__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31958__auto____1.call(this,state_33928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31958__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31958__auto____0;
cljs$core$async$state_machine__31958__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31958__auto____1;
return cljs$core$async$state_machine__31958__auto__;
})()
;})(switch__31957__auto__,c__32052__auto___33956,out))
})();
var state__32054__auto__ = (function (){var statearr_33954 = f__32053__auto__.call(null);
(statearr_33954[(6)] = c__32052__auto___33956);

return statearr_33954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32054__auto__);
});})(c__32052__auto___33956,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1710956800774
