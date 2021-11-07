(()=>{var t={"./node_modules/es6-promise/dist/es6-promise.js":function(t,e,n){var r=n("./node_modules/process/browser.js");
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.8+1e68dce6
 */t.exports=function(){"use strict";function t(t){var e=typeof t;return null!==t&&("object"===e||"function"===e)}function e(t){return"function"==typeof t}var o=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},i=0,s=void 0,u=void 0,c=function(t,e){b[i]=t,b[i+1]=e,2===(i+=2)&&(u?u(T):A())};function a(t){u=t}function f(t){c=t}var l="undefined"!=typeof window?window:void 0,h=l||{},v=h.MutationObserver||h.WebKitMutationObserver,d="undefined"==typeof self&&void 0!==r&&"[object process]"==={}.toString.call(r),p="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function m(){return function(){return r.nextTick(T)}}function y(){return void 0!==s?function(){s(T)}:g()}function _(){var t=0,e=new v(T),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}function w(){var t=new MessageChannel;return t.port1.onmessage=T,function(){return t.port2.postMessage(0)}}function g(){var t=setTimeout;return function(){return t(T,1)}}var b=new Array(1e3);function T(){for(var t=0;t<i;t+=2)(0,b[t])(b[t+1]),b[t]=void 0,b[t+1]=void 0;i=0}function j(){try{var t=Function("return this")().require("vertx");return s=t.runOnLoop||t.runOnContext,y()}catch(t){return g()}}var A=void 0;function E(t,e){var n=this,r=new this.constructor(P);void 0===r[k]&&Q(r);var o=n._state;if(o){var i=arguments[o-1];c((function(){return G(o,r,i,n._result)}))}else W(n,r,t,e);return r}function S(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(P);return D(n,t),n}A=d?m():v?_():p?w():void 0===l?j():g();var k=Math.random().toString(36).substring(2);function P(){}var x=void 0,O=1,M=2;function C(){return new TypeError("You cannot resolve a promise with itself")}function L(){return new TypeError("A promises callback cannot return that same promise.")}function q(t,e,n,r){try{t.call(e,n,r)}catch(t){return t}}function F(t,e,n){c((function(t){var r=!1,o=q(n,e,(function(n){r||(r=!0,e!==n?D(t,n):N(t,n))}),(function(e){r||(r=!0,U(t,e))}),"Settle: "+(t._label||" unknown promise"));!r&&o&&(r=!0,U(t,o))}),t)}function Y(t,e){e._state===O?N(t,e._result):e._state===M?U(t,e._result):W(e,void 0,(function(e){return D(t,e)}),(function(e){return U(t,e)}))}function z(t,n,r){n.constructor===t.constructor&&r===E&&n.constructor.resolve===S?Y(t,n):void 0===r?N(t,n):e(r)?F(t,n,r):N(t,n)}function D(e,n){if(e===n)U(e,C());else if(t(n)){var r=void 0;try{r=n.then}catch(t){return void U(e,t)}z(e,n,r)}else N(e,n)}function K(t){t._onerror&&t._onerror(t._result),B(t)}function N(t,e){t._state===x&&(t._result=e,t._state=O,0!==t._subscribers.length&&c(B,t))}function U(t,e){t._state===x&&(t._state=M,t._result=e,c(K,t))}function W(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+O]=n,o[i+M]=r,0===i&&t._state&&c(B,t)}function B(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,o=void 0,i=t._result,s=0;s<e.length;s+=3)r=e[s],o=e[s+n],r?G(n,r,o,i):o(i);t._subscribers.length=0}}function G(t,n,r,o){var i=e(r),s=void 0,u=void 0,c=!0;if(i){try{s=r(o)}catch(t){c=!1,u=t}if(n===s)return void U(n,L())}else s=o;n._state!==x||(i&&c?D(n,s):!1===c?U(n,u):t===O?N(n,s):t===M&&U(n,s))}function H(t,e){try{e((function(e){D(t,e)}),(function(e){U(t,e)}))}catch(e){U(t,e)}}var I=0;function J(){return I++}function Q(t){t[k]=I++,t._state=void 0,t._result=void 0,t._subscribers=[]}function R(){return new Error("Array Methods must be provided an Array")}var V=function(){function t(t,e){this._instanceConstructor=t,this.promise=new t(P),this.promise[k]||Q(this.promise),o(e)?(this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?N(this.promise,this._result):(this.length=this.length||0,this._enumerate(e),0===this._remaining&&N(this.promise,this._result))):U(this.promise,R())}return t.prototype._enumerate=function(t){for(var e=0;this._state===x&&e<t.length;e++)this._eachEntry(t[e],e)},t.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===S){var o=void 0,i=void 0,s=!1;try{o=t.then}catch(t){s=!0,i=t}if(o===E&&t._state!==x)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===nt){var u=new n(P);s?U(u,i):z(u,t,o),this._willSettleAt(u,e)}else this._willSettleAt(new n((function(e){return e(t)})),e)}else this._willSettleAt(r(t),e)},t.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===x&&(this._remaining--,t===M?U(r,n):this._result[e]=n),0===this._remaining&&N(r,this._result)},t.prototype._willSettleAt=function(t,e){var n=this;W(t,void 0,(function(t){return n._settledAt(O,e,t)}),(function(t){return n._settledAt(M,e,t)}))},t}();function X(t){return new V(this,t).promise}function Z(t){var e=this;return o(t)?new e((function(n,r){for(var o=t.length,i=0;i<o;i++)e.resolve(t[i]).then(n,r)})):new e((function(t,e){return e(new TypeError("You must pass an array to race."))}))}function $(t){var e=new this(P);return U(e,t),e}function tt(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function et(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}var nt=function(){function t(e){this[k]=J(),this._result=this._state=void 0,this._subscribers=[],P!==e&&("function"!=typeof e&&tt(),this instanceof t?H(this,e):et())}return t.prototype.catch=function(t){return this.then(null,t)},t.prototype.finally=function(t){var n=this,r=n.constructor;return e(t)?n.then((function(e){return r.resolve(t()).then((function(){return e}))}),(function(e){return r.resolve(t()).then((function(){throw e}))})):n.then(t,t)},t}();function rt(){var t=void 0;if(void 0!==n.g)t=n.g;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var r=null;try{r=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===r&&!e.cast)return}t.Promise=nt}return nt.prototype.then=E,nt.all=X,nt.race=Z,nt.resolve=S,nt.reject=$,nt._setScheduler=a,nt._setAsap=f,nt._asap=c,nt.polyfill=rt,nt.Promise=nt,nt}()},"./node_modules/process/browser.js":t=>{var e,n,r=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function s(t){if(e===setTimeout)return setTimeout(t,0);if((e===o||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(n){try{return e.call(null,t,0)}catch(n){return e.call(this,t,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:o}catch(t){e=o}try{n="function"==typeof clearTimeout?clearTimeout:i}catch(t){n=i}}();var u,c=[],a=!1,f=-1;function l(){a&&u&&(a=!1,u.length?c=u.concat(c):f=-1,c.length&&h())}function h(){if(!a){var t=s(l);a=!0;for(var e=c.length;e;){for(u=c,c=[];++f<e;)u&&u[f].run();f=-1,e=c.length}u=null,a=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function v(t,e){this.fun=t,this.array=e}function d(){}r.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];c.push(new v(t,e)),1!==c.length||a||s(h)},v.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=d,r.addListener=d,r.once=d,r.off=d,r.removeListener=d,r.removeAllListeners=d,r.emit=d,r.prependListener=d,r.prependOnceListener=d,r.listeners=function(t){return[]},r.binding=function(t){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(t){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},"./node_modules/trezor-link/lib/defered.js":(t,e,n)=>{"use strict";var r=n("./node_modules/es6-promise/dist/es6-promise.js").Promise;Object.defineProperty(e,"__esModule",{value:!0}),e.create=function(){var t=function(t){},e=function(t){},n=new r((function(n,r){t=n,e=r})),o=n.then((function(){throw new Error("Promise is always rejecting")}));return o.catch((function(){})),{resolve:t,reject:e,promise:n,rejectingPromise:o}},e.resolveTimeoutPromise=function(t,e){return new r((function(n){setTimeout((function(){n(e)}),t)}))},e.rejectTimeoutPromise=function(t,e){return new r((function(n,r){setTimeout((function(){r(e)}),t)}))}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}();(()=>{"use strict";var t=n("./node_modules/es6-promise/dist/es6-promise.js").Promise;var e=n("./node_modules/trezor-link/lib/defered.js");"undefined"!=typeof onconnect&&(onconnect=function(t){var e=t.ports[0];e.onmessage=function(t){l(t.data,e)}});var r={},o={},i=null,s=t.resolve();function u(){var t=(0,e.create)();i=t,setTimeout((function(){return t.reject(new Error("Timed out"))}),1e4)}function c(t){null!=i&&i.resolve(t)}function a(){return null==i?t.reject(new Error("???")):i.promise}function f(t){var e=s.then((function(){return t()}));s=e.catch((function(){}))}function l(e,n){var i=e.id,s=e.message;if("acquire-intent"===s.type){var l=s.path,m=s.previous,y=s.debug;f((function(){return function(e,n,i,s,c){var f=!1,l=i?o:r,h=i?r:o,v=l[e];f=null==v?null!=n:n!==v;return f?(p({type:"wrong-previous-session"},s,c),t.resolve()):(u(),p({type:"other-session",otherSession:h[e]},s,c),a().then((function(t){if(t.good){var n=(++d).toString();i&&(n="debug"+n),l[e]=n,p({type:"session-number",number:n},t.id,c)}else p({type:"ok"},t.id,c)})))}(l,m,y,i,n)}))}if("acquire-done"===s.type&&function(t){c({good:!0,id:t})}(i),"acquire-failed"===s.type&&function(t){c({good:!1,id:t})}(i),"get-sessions"===s.type&&f((function(){return v(i,n)})),"get-sessions-and-disconnect"===s.type){var _=s.devices;f((function(){return v(i,n,_)}))}if("release-onclose"===s.type){var w=s.session;f((function(){return function(e){var n=null;if(Object.keys(r).forEach((function(t){r[t]===e&&(n=t)})),null==n)return t.resolve();var i=n;return delete r[i],delete o[i],t.resolve()}(w)}))}if("release-intent"===s.type){var g=s.session,b=s.debug;f((function(){return function(e,n,i,s){var c=null,f=n?o:r,l=n?r:o;if(Object.keys(f).forEach((function(t){f[t]===e&&(c=t)})),null==c)return p({type:"double-release"},i,s),t.resolve();var h=c,v=l[h];return u(),p({type:"path",path:h,otherSession:v},i,s),a().then((function(t){delete f[h],p({type:"ok"},t.id,s)}))}(g,b,i,n)}))}"release-done"===s.type&&h(i),"enumerate-intent"===s.type&&f((function(){return function(t,e){return u(),p({type:"ok"},t,e),a().then((function(t){p({type:"ok"},t.id,e)}))}(i,n)})),"enumerate-done"===s.type&&h(i)}function h(t){c({id:t})}function v(e,n,i){if(null!=i){var s={};i.forEach((function(t){s[t.path]=!0})),Object.keys(r).forEach((function(t){r[t]||delete r[t]})),Object.keys(o).forEach((function(t){o[t]||delete o[t]}))}return p({type:"sessions",debugSessions:o,normalSessions:r},e,n),t.resolve()}var d=0;function p(t,e,n){n.postMessage({id:e,message:t})}})()})();