;
(self.AMP=self.AMP||[]).push({m:0,v:"2210272257000",n:"amp-web-push",ev:"0.1",l:!0,f:function(t,n){!function(){function n(t,i){return(n=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,i)}function i(t,i){if("function"!=typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(i&&i.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),i&&n(t,i)}function e(t){return(e=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,n){if(n&&("object"===r(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function u(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,r=e(t);if(n){var u=e(this).constructor;i=Reflect.construct(r,arguments,u)}else i=r.apply(this,arguments);return o(this,i)}}Array.isArray;var s=Object.prototype;function c(t){var n=Object.create(null);return t&&Object.assign(n,t),n}s.hasOwnProperty,s.toString;var a=/(\0)|^(-)$|([\x01-\x1f\x7f]|^-?[0-9])|([\x80-\uffff0-9a-zA-Z_-]+)|[^]/g;function f(t,n,i,e,r){return r||(n?"�":e?t.slice(0,-1)+"\\"+t.slice(-1).charCodeAt(0).toString(16)+" ":"\\"+t)}function h(t){return String(t).replace(a,f)}var l=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function v(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";try{return decodeURIComponent(t)}catch(t){return n}}function d(t){var n,i=c();if(!t)return i;for(;n=l.exec(t);){var e=v(n[1],n[1]),r=n[2]?v(n[2].replace(/\+/g," "),n[2]):"";i[e]=r}return i}function p(t){var n=(t||self).location;return d(n.originalHash||n.hash)}var m="";function w(t){var n=t||self;return n.__AMP_MODE?n.__AMP_MODE:n.__AMP_MODE=function(t){return{localDev:!1,development:g(t,p(t)),esm:!1,test:!1,rtvVersion:b(t),ssrReady:!1}}(n)}function b(t){var n;return m||(m=(null===(n=t.AMP_CONFIG)||void 0===n?void 0:n.v)||"01".concat("2210272257000")),m}function g(t,n){var i=n||p(t);return["1","actions","amp","amp4ads","amp4email"].includes(i.development)||!!t.AMP_DEV_MODE}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var y=self.__AMP_LOG;function E(t,n){throw new Error("failed to call initLogConstructor")}function R(t){return y.user||(y.user=O()),function(t,n){return n&&n.ownerDocument.defaultView!=t}(y.user.win,t)?y.userForEmbed||(y.userForEmbed=O()):y.user}function O(t){return E()}function S(){return y.dev||(y.dev=E())}function I(t,n,i,e,r,o,u,s,c,a,f){return t}var P="amp-web-push",k=P,_=P+"-service",x=P+"-widget",A="granted",T="denied",M="default";function U(t,n){for(var i=0;i<n.length;i++){var e=n[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function C(t,n,i){return n&&U(t.prototype,n),i&&U(t,i),t}function j(t,n){t.insertBefore(n,t.firstChild)}var L=function(){var t=this;this.promise=new Promise((function(n,i){t.resolve=n,t.reject=i}))};function N(t,n){I(function(t,n){var i=t.__AMP_SERVICES&&t.__AMP_SERVICES[n];return!(!i||!i.ctor)}(t,n));var i=D(t)[n];return i.obj||(I(i.ctor),I(i.context),i.obj=new i.ctor(i.context),I(i.obj),i.context=null,i.resolve&&i.resolve(i.obj)),i.obj}function D(t){var n=t.__AMP_SERVICES;return n||(n=t.__AMP_SERVICES={}),n}var W,F=function(t){i(e,t);var n=u(e);function e(t){return n.call(this,t)}var r=e.prototype;return r.isLayoutSupported=function(t){return"fixed"==t},r.buildCallback=function(){this.element.classList.add("amp-invisible")},e}(t.BaseElement),V="subscribed",G="unsubscribed",K="blocked";function H(t){return t.data}function q(t,n,i,e){var r=i,o=function(t,n,i,e){var r=t,o=i,u=function(t){try{return o(t)}catch(t){var n,i;throw null===(n=(i=self).__AMP_REPORT_ERROR)||void 0===n||n.call(i,t),t}},s=function(){if(void 0!==W)return W;W=!1;try{var t={get capture(){return W=!0,!1}};self.addEventListener("test-options",null,t),self.removeEventListener("test-options",null,t)}catch(t){}return W}(),c=!(null==e||!e.capture);return r.addEventListener(n,u,s?e:c),function(){null==r||r.removeEventListener(n,u,s?e:c),o=null,r=null,u=null}}(t,n,(function(t){try{r(t)}finally{r=null,o()}}),e);return o}function z(t){return"AUDIO"===t.tagName||"VIDEO"===t.tagName}var B,Q,Y=function(){function t(t,n){this.tr=t,this.Ti=n,this.Pht=null,this.Yi=new Promise((function(){}))}var n=t.prototype;return n.load=function(){var t=this;return this.tr.whenReady().then((function(){var n,i;return t.Pht=t.tr.win.document.createElement("iframe"),n=t.Pht,void 0===(i=!1)&&(i=n.hasAttribute("hidden")),i?n.removeAttribute("hidden"):n.setAttribute("hidden",""),t.Pht.sandbox="allow-same-origin allow-scripts",t.Pht.src=t.Ti,t.tr.getBody().appendChild(t.Pht),t.Yi=function(t){var n,i;if(function(t){return!!(t.complete||"complete"==t.readyState||z(t)&&t.readyState>0||t.document&&"complete"==t.document.readyState)}(t))return Promise.resolve(t);var e=z(t);return e&&t.__AMP_MEDIA_LOAD_FAILURE_SRC===t.currentSrc?Promise.reject(t):new Promise((function(r,o){if(n=e?q(t,"loadedmetadata",r,{capture:!0}):q(t,"load",r),t.tagName){var u=t;if(e&&!t.hasAttribute("src")&&!(u=function(t,n){for(var i=t.lastElementChild;i;i=i.previousElementSibling)if(n(i))return i;return null}(t,(function(t){return"SOURCE"===t.tagName}))))return o(new Error("Media has no source."));i=q(u,"error",o)}})).then((function(){return i&&i(),t}),(function(){n&&n(),function(t){z(t)&&(t.__AMP_MEDIA_LOAD_FAILURE_SRC=t.currentSrc||!0);var n=t;throw n&&n.src&&(n=n.src),R().createError("Failed to load:",n)}(t)}))}(t.Pht),t.whenReady()}))},n.getDomElement=function(){return this.Pht},n.whenReady=function(){return this.Yi},t}(),J=function(){function t(t){this.Wt=t,this.Kt=0,this.Qt=0,this.Xt=c()}var n=t.prototype;return n.has=function(t){return!!this.Xt[t]},n.get=function(t){var n=this.Xt[t];if(n)return n.access=++this.Qt,n.payload},n.put=function(t,n){this.has(t)||this.Kt++,this.Xt[t]={payload:n,access:this.Qt},this.Yt()},n.Yt=function(){if(!(this.Kt<=this.Wt)){var t,n=this.Xt,i=this.Qt+1;for(var e in n){var r=n[e].access;r<i&&(i=r,t=e)}void 0!==t&&(delete n[t],this.Kt--)}},t}();function Z(t,n){return B||(B=self.document.createElement("a"),Q=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new J(100))),function(t,n,i){if(i&&i.has(n))return i.get(n);t.href=n,t.protocol||(t.href=t.href);var e,r={href:t.href,protocol:t.protocol,host:t.host,hostname:t.hostname,port:"0"==t.port?"":t.port,pathname:t.pathname,search:t.search,hash:t.hash,origin:null};"/"!==r.pathname[0]&&(r.pathname="/"+r.pathname),("http:"==r.protocol&&80==r.port||"https:"==r.protocol&&443==r.port)&&(r.port="",r.host=r.hostname),e=t.origin&&"null"!=t.origin?t.origin:"data:"!=r.protocol&&r.host?r.protocol+"//"+r.host:r.href,r.origin=e;var o=r;return i&&i.put(n,o),o}(B,t,n?null:Q)}new Set(["c","v","a","ad"]);var $=function(){function t(t){t||(t={debug:!1,windowContext:window}),this.zt={},this.nv={},this.tv=t.debug,this.rv=!1,this.ev=!1,this.ue=!1,this.iv=null,this.ov=null,this.sv=null,this.uv=null,this.av=null,this.fv=t.windowContext||window}var n=t.prototype;return n.listen=function(n){var i=this;return new Promise((function(t,e){i.ue?e(new Error("Already connected.")):i.rv?e(new Error("Already listening for connections.")):Array.isArray(n)?(i.sv=i.cv.bind(i,n,t,e),i.fv.addEventListener("message",i.sv),i.tv&&S().fine(P,"Listening for a connection message...")):e(new Error("allowedOrigins should be a string array of allowed origins to accept messages from. Got:",n))})).then((function(){i.send(t.Topics.CONNECT_HANDSHAKE,null),i.ue=!0}))},n.qa=function(t,n){for(var i=Z(t).origin,e=0;e<n.length;e++)if(Z(n[e]).origin===i)return!0;return!1},n.cv=function(n,i,e,r){var o=H(r),u=r.origin,s=r.ports;this.tv&&S().fine(P,"Window message for listen() connection received:",o),this.qa(u,n)?o&&o.topic===t.Topics.CONNECT_HANDSHAKE?(S().fine(P,"Received expected connection handshake message:",o),this.fv.removeEventListener("message",this.sv),this.ov=s[0],this.av=this.lv.bind(this),this.ov.addEventListener("message",this.av,!1),this.ov.start(),i()):S().fine(P,"Discarding connection message because it did not contain our expected handshake:",o):S().fine(P,"Discarding connection message from ".concat(u," ")+"because it isn't an allowed origin:",o," (allowed  origins are)",n)},n.connect=function(n,i){var e=this;return new Promise((function(r,o){n||o(new Error("Provide a valid Window context to connect to.")),i||o(new Error("Provide an expected origin for the remote Window or provide the wildcard *.")),e.ue?o(new Error("Already connected.")):e.ev?o(new Error("Already connecting.")):(e.iv=new MessageChannel,e.ov=e.iv.port1,e.uv=e.hv.bind(e,e.ov,i,r),e.ov.addEventListener("message",e.uv),e.ov.start(),n.postMessage({topic:t.Topics.CONNECT_HANDSHAKE},"*"===i?"*":Z(i).origin,[e.iv.port2]),S().fine(P,"Opening channel to ".concat(i,"...")))}))},n.hv=function(t,n,i){this.ue=!0,this.tv&&S().fine(P,"Messenger channel to ".concat(n," established.")),t.removeEventListener("message",this.uv),this.av=this.lv.bind(this),t.addEventListener("message",this.av,!1),i()},n.lv=function(t){var n=H(t);if(this.zt[n.id]&&n.isReply){var i=this.zt[n.id];delete this.zt[n.id];var e=i.promiseResolver;i.message=n.data,this.tv&&S().fine(P,"Received reply for topic '%s': %s",n.topic,n.data),e([n.data,this.vv.bind(this,n.id,i.topic)])}else{var r=this.nv[n.topic];if(!r)return;this.tv&&S().fine(P,"Received new message for "+"topic '".concat(n.topic,"': ").concat(n.data));for(var o=0;o<r.length;o++)(0,r[o])(n.data,this.vv.bind(this,n.id,n.topic))}},n.on=function(t,n){this.nv[t]?this.nv[t].push(n):this.nv[t]=[n]},n.off=function(t,n){if(n){var i=this.nv[t].indexOf(n);-1!==i&&this.nv[t].splice(i,1)}else this.nv[t]&&delete this.nv[t]},n.vv=function(t,n,i){var e=this,r={id:t,topic:n,data:i,isReply:!0};return this.ov.postMessage(r),new Promise((function(t){e.zt[r.id]={message:i,topic:n,promiseResolver:t}}))},n.send=function(t,n){var i=this,e={id:crypto.getRandomValues(new Uint8Array(10)).join(""),topic:t,data:n};return this.tv&&S().fine(P,"Sending %s: %s",t,n),this.ov.postMessage(e),new Promise((function(r){i.zt[e.id]={message:n,topic:t,promiseResolver:r}}))},C(t,null,[{key:"Topics",get:function(){return{CONNECT_HANDSHAKE:"topic-connect-handshake",NOTIFICATION_PERMISSION_STATE:"topic-notification-permission-state",SERVICE_WORKER_STATE:"topic-service-worker-state",SERVICE_WORKER_REGISTRATION:"topic-service-worker-registration",SERVICE_WORKER_QUERY:"topic-service-worker-query",STORAGE_GET:"topic-storage-get"}}}]),t}(),X="amp-web-push-widget.amp-invisible{visibility:hidden}\n/*# sourceURL=/extensions/amp-web-push/0.1/amp-web-push.css*/";function tt(t,n,i){if(n[i])return n[i];var e=t.querySelector("style[".concat(i,"], link[").concat(i,"]"));return e?(n[i]=e,e):null}function nt(t,n){for(var i=t.styleSheets,e=0;e<i.length;e++)if(i[e].ownerNode==n)return!0;return!1}function it(t){return n=_,function(t,n){var i=function(t,n){var i=D(t)[n];return i?i.promise?i.promise:(N(t,n),i.promise=Promise.resolve(i.obj)):null}(t,n);if(i)return i;var e,r,o,u,s=D(t);return s[n]=(r=(e=new L).promise,o=e.reject,u=e.resolve,r.catch((function(){})),{obj:null,promise:r,resolve:u,reject:o,context:null,ctor:null}),s[n].promise}((o=(i=t).nodeType?(r=i,e=(r.ownerDocument||r).defaultView,function(t,n){return N(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),"ampdoc")}(e)).getAmpDoc(i):i).isSingleDoc()?o.win:o,n);var n,i,e,r,o}var et=function(){function t(t){this.ampdoc=t,function(t,n,i,e,r){var o=t.getHeadNode(),u=function(t,n,i,e){var r=t.__AMP_CSS_SM;r||(r=t.__AMP_CSS_SM=c());var o="amp-extension=".concat(e);if(o){var u=tt(t,r,o);if(u)return"STYLE"==u.tagName&&u.textContent!==n&&(u.textContent=n),u}var s=(t.ownerDocument||t).createElement("style");s.textContent=n;return s.setAttribute("amp-extension",e),function(t,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(i){var e=i.nextSibling;t.insertBefore(n,e)}else j(t,n)}(t,s,tt(t,r,"amp-runtime")),o&&(r[o]=s),s}(o,function(t,n){var i=t.__AMP_CSS_TR;return i?i(n):n}(o,"amp-web-push-widget.amp-invisible{visibility:hidden}\n/*# sourceURL=/extensions/amp-web-push/0.1/amp-web-push.css*/"),0,"amp-web-push");if(i){var s=t.getRootNode();if(nt(s,u))return u;var a=setInterval((function(){nt(s,u)&&clearInterval(a)}),4)}}(t,0,(function(){})),this.$N={"helper-iframe-url":null,"permission-dialog-url":null,"service-worker-url":null,debug:null},this.tv=w().development,this.tb=null,this.Wht=null,this.Fht=new $({debug:this.tv}),this.Vht=null}var n=t.prototype;return n.start=function(t){var n=this;if(S().fine(P,"amp-web-push extension starting up."),!this.environmentSupportsWebPush())return R().warn(P,"Web push is not supported."),Promise.reject("Web push is not supported");this.initializeConfig(t);var i=this.installHelperFrame();return i.then((function(){return S().fine(P,"Helper frame ".concat(n.$N["helper-iframe-url"]," ")+"DOM loaded. Connecting to the frame via postMessage()..."),n.Fht.connect(n.tb.getDomElement().contentWindow,Z(n.$N["helper-iframe-url"]).origin)})).then((function(){if(!n.isContinuingSubscriptionFromRedirect())return n.updateWidgetVisibilities();n.Ght()})),i},n.initializeConfig=function(t){this.$N=t,this.$N},n.installHelperFrame=function(){var t=-1!==this.$N["helper-iframe-url"].indexOf("?")?"&":"?",n="".concat(this.$N["helper-iframe-url"]).concat(t)+"parentOrigin=".concat(this.ampdoc.win.location.origin);return this.tb=new Y(this.ampdoc,n),this.tb.load()},n.isContinuingSubscriptionFromRedirect=function(){return-1!==(this.ampdoc.win.testLocation||this.ampdoc.win.location).search.indexOf(t.PERMISSION_POPUP_URL_FRAGMENT)},n.removePermissionPopupUrlFragmentFromUrl=function(n){return n.replace("?".concat(t.PERMISSION_POPUP_URL_FRAGMENT),"").replace("&".concat(t.PERMISSION_POPUP_URL_FRAGMENT),"")},n.Kht=function(t,n){var i=this;return this.tb.whenReady().then((function(){return i.Fht.send(t,n)})).then((function(i){var e=i[0];if(e.success)return e.result;throw new Error("AMP page helper iframe query topic ".concat(t," ")+"and message ".concat(n," failed with: ").concat(e.error))}))},n.Hht=function(t,n){return this.Kht($.Topics.SERVICE_WORKER_QUERY,{topic:t,payload:n})},n.queryNotificationPermission=function(){return this.Kht($.Topics.NOTIFICATION_PERMISSION_STATE,null)},n.qht=function(){return this.Kht($.Topics.SERVICE_WORKER_STATE,null)},n.registerServiceWorker=function(){var t=this.$N["service-worker-url"],n=this.$N["service-worker-scope"];return this.Kht($.Topics.SERVICE_WORKER_REGISTRATION,{workerUrl:t,registrationOptions:n?{scope:n}:{}})},n.querySubscriptionStateRemotely=function(){return this.Hht("amp-web-push-subscription-state",null)},n.subscribeForPushRemotely=function(){return this.Hht("amp-web-push-subscribe",null)},n.unsubscribeFromPushRemotely=function(){return this.Hht("amp-web-push-unsubscribe",null)},n.isServiceWorkerActivated=function(){var t=this,n=this;return this.qht().then((function(i){var e=!0===i.isControllingFrame,r=t.isUrlSimilarForQueryParams(i.url,n.$N["service-worker-url"]),o="activated"===i.state;return e&&r&&o}))},n.isUrlSimilarForQueryParams=function(t,n){var i=Z(t),e=d(i.search),r=Z(n),o=d(r.search);for(var u in e)if(o[u]!==e[u])return!1;return i.origin===r.origin&&i.pathname===r.pathname},n.setWidgetVisibilities=function(t,n){for(var i=this.ampdoc.getRootNode().querySelectorAll("".concat(h(x),"[visibility=").concat(h(t),"]")),e="amp-invisible",r=0;r<i.length;r++){var o=i[r];n?o.classList.remove(e):o.classList.add(e)}},n.zht=function(t){return this.ampdoc.getRootNode().querySelectorAll("".concat(h(x),"[visibility=").concat(h(t),"]")).length>0},n.Bht=function(t){if("boolean"==typeof t)return 1},n.Qht=function(){var t=this;return this.queryNotificationPermission().then((function(n){t.Wht=n}))},n.updateWidgetVisibilities=function(){var t=this;return this.Qht().then((function(){return t.Yht($.Topics.STORAGE_GET)})).then((function(n){return!0===n?t.Jht("amp-web-push-notification-permission"):Promise.resolve(M)})).then((function(n){if(n!==T)return t.isServiceWorkerActivated().then((function(n){n?t.Zht():t.$ht()}));t.zht(K)?t.Xht():t.$ht()}))},n.Zht=function(){var n,i=this;return(n=this.ampdoc.win,N(n,"timer")).timeoutPromise(5e3,this.querySubscriptionStateRemotely().then((function(n){if(i.Bht(n)!==t.AMP_VERSION_INITIAL)throw R().createError("The controlling service worker replied to amp-web-push with an unexpected value.");n?(i.setWidgetVisibilities(G,!1),i.setWidgetVisibilities(V,!0),i.setWidgetVisibilities(K,!1)):i.$ht()})),"The controlling service worker does not support amp-web-push.")},n.$ht=function(){this.setWidgetVisibilities(G,!0),this.setWidgetVisibilities(V,!1),this.setWidgetVisibilities(K,!1)},n.Xht=function(){this.setWidgetVisibilities(G,!1),this.setWidgetVisibilities(V,!1),this.setWidgetVisibilities(K,!0)},n.subscribe=function(t){var n=this,i=[];return i.push(this.registerServiceWorker()),i.push(new Promise((function(i){if(n.Wht===A)return n.tvt().then((function(){i()}));var e=n.openPopupOrRedirect();n.nvt(e,t),n.Vht=new $({debug:n.tv}),n.Vht.listen([n.$N["permission-dialog-url"]]),n.onPermissionDialogInteracted().then((function(t){return n.handlePermissionDialogInteraction(t)})).then((function(){i()}))}))),Promise.all(i)},n.nvt=function(t,n){var i=this;if(t&&!t.closed)var e=this.ampdoc.win.setInterval((function(){t.closed&&(n(),i.ampdoc.win.clearInterval(e))}),500)},n.handlePermissionDialogInteraction=function(t){var n=t[0],i=t[1];switch(n){case T:case M:return i({closeFrame:!0}),this.updateWidgetVisibilities();case A:i({closeFrame:!0}),this.tvt();break;default:throw new Error("Unexpected permission value:",n)}},n.tvt=function(){var t=this;return this.subscribeForPushRemotely().then((function(){return t.updateWidgetVisibilities()}))},n.unsubscribe=function(){var t=this;return this.unsubscribeFromPushRemotely().then((function(){return t.updateWidgetVisibilities()}))},n.Yht=function(t){return this.Kht($.Topics.NOTIFICATION_PERMISSION_STATE,{isQueryTopicSupported:t})},n.Jht=function(t){return this.Kht($.Topics.STORAGE_GET,{key:t})},n.onPermissionDialogInteracted=function(){var t=this;return new Promise((function(n){t.Vht.on($.Topics.NOTIFICATION_PERMISSION_STATE,(function(t,i){n([t,i])}))}))},t.ivt=function(){var t=Math.floor(Math.min(700,.9*screen.width)),n=Math.floor(Math.min(450,.9*screen.height));return{w:t,h:n,x:Math.floor((screen.width-t)/2),y:Math.floor((screen.height-n)/2)}},n.openPopupOrRedirect=function(){var n=-1!==this.ampdoc.win.location.href.indexOf("?")?"&":"?",i=this.ampdoc.win.location.href+n+t.PERMISSION_POPUP_URL_FRAGMENT,e=-1!==this.$N["permission-dialog-url"].indexOf("?")?"&":"?",r=this.$N["permission-dialog-url"]+e+"return=".concat(encodeURIComponent(i)),o=t.ivt(),u="height=".concat(o.h,",width=").concat(o.w,",left=").concat(o.x,",top=").concat(o.y),s="".concat(u,",resizable=yes,scrollbars=yes");return function(t,n,i,e){var r,o,u;try{r=t.open(n,i,e)}catch(t){S().error("DOM","Failed to open url on target: ",i,t)}return!r&&("number"!=typeof u&&(u=0),u+"noopener".length>(o=e||"").length||-1===o.indexOf("noopener",u))&&(r=t.open(n,"_top")),r}(this.ampdoc.win,r,"_blank",s)},n.Ght=function(){var t=this;this.ampdoc.win.history.replaceState(null,"",this.removePermissionPopupUrlFragmentFromUrl(this.ampdoc.win.location.href)),this.queryNotificationPermission().then((function(n){switch(n){case T:case M:return t.updateWidgetVisibilities();case A:t.tvt();break;default:throw new Error("Unexpected permission value",n)}}))},n.environmentSupportsWebPush=function(){return this.evt()&&this.rvt()},n.evt=function(){return void 0!==this.ampdoc.win.Notification&&void 0!==this.ampdoc.win.navigator.serviceWorker&&void 0!==this.ampdoc.win.PushManager},n.rvt=function(){return"https:"===this.ampdoc.win.location.protocol||"localhost"===this.ampdoc.win.location.hostname||"127.0.0.1"===this.ampdoc.win.location.hostname||w().development||!1},C(t,null,[{key:"PERMISSION_POPUP_URL_FRAGMENT",get:function(){return"amp-web-push-subscribing=yes"}},{key:"AMP_VERSION_INITIAL",get:function(){return 1}}]),t}(),rt={HELPER_FRAME_URL:"helper-iframe-url",PERMISSION_DIALOG_URL:"permission-dialog-url",SERVICE_WORKER_URL:"service-worker-url",SERVICE_WORKER_SCOPE:"service-worker-scope"},ot=function(t){i(e,t);var n=u(e);function e(t){return n.call(this,t)}var r=e.prototype;return r.validate=function(){this.ovt(),this.uvt();var t,n,i={"helper-iframe-url":null,"permission-dialog-url":null,"service-worker-url":null,"service-worker-scope":null};for(var e in rt){var r=rt[e];t=this.element.getAttribute(r)||"service-worker-scope"===r,n="The ".concat(r," attribute is required for <").concat(k,">"),void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,R().assert(t,n,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined),i[r]=this.element.getAttribute(r)}if(!this.svt(i["helper-iframe-url"]))throw R().createError("<".concat(k,"> must have a valid ")+"helper-iframe-url attribute. It should begin with the https:// protocol and point to the provided lightweight template page provided for AMP messaging.");if(!this.svt(i["permission-dialog-url"]))throw R().createError("<".concat(k,"> must have a valid ")+"permission-dialog-url attribute. It should begin with the https:// protocol and point to the provided template page for showing the permission prompt.");if("https:"!==Z(i["service-worker-url"]).protocol)throw R().createError("<".concat(k,"> must have a valid ")+"service-worker-url attribute. It should begin with the https:// protocol and point to the service worker JavaScript file to be installed.");if(Z(i["service-worker-url"]).origin!==Z(i["permission-dialog-url"]).origin||Z(i["permission-dialog-url"]).origin!==Z(i["helper-iframe-url"]).origin)throw R().createError("<".concat(k,"> URL attributes ")+"service-worker-url, permission-dialog-url, and helper-iframe-url must all share the same origin.")},r.parseConfig=function(){var t={};for(var n in rt){var i=rt[n];t[i]=this.element.getAttribute(i)}return t},r.buildCallback=function(){this.validate();var t=this.parseConfig();it(this.element).then((function(n){n.start(t).catch((function(){}))})),this.registerAction("subscribe",this.cvt.bind(this)),this.registerAction("unsubscribe",this.avt.bind(this))},r.ovt=function(){if(this.element.getAttribute("id")!==P)throw R().createError("<".concat(k,"> must have an id ")+"attribute with value '"+P+"'.")},r.uvt=function(){if(this.getAmpDoc().getRootNode().querySelectorAll("#".concat(h(k))).length>1)throw R().createError("Only one <".concat(k,"> element may exist on a page."))},r.cvt=function(t){var n=this,i=t.event.target;this.fvt(i,!0),it(this.element).then((function(t){t.subscribe((function(){n.fvt(i,!1)})).then((function(){n.fvt(i,!1)}))}))},r.fvt=function(t,n){t.disabled=n},r.avt=function(t){var n=this,i=t.event.target;this.fvt(i,!0),it(this.element).then((function(t){t.unsubscribe().then((function(){n.fvt(i,!1)}))}))},r.svt=function(t){try{var n=Z(t),i=n.pathname.length>1;return"https:"===n.protocol&&i}catch(t){return!1}},e}(t.BaseElement);t.registerServiceForDoc(_,et),t.registerElement(k,ot),t.registerElement(x,F,X)}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-web-push-0.1.js.map