;
(self.AMP=self.AMP||[]).push({m:0,v:"2210272257000",n:"amp-base-carousel",ev:"0.1",l:!0,f:function(t,i){!function(){var i;function n(t,i){return(n=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t})(t,i)}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,i){if(i&&("object"===r(i)||"function"==typeof i))return i;if(void 0!==i)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function e(t){return t?Array.prototype.slice.call(t):[]}Array.isArray;var a,h=Object.prototype;function u(t,i,n,s,r,o,e,a,h,u,l){return t}function l(t,i){return t.replace(/^|,/g,"$&".concat(i," "))}h.hasOwnProperty,h.toString;var c,f=!0,m=!0;function v(t,i){for(var n=t.length,s=0;s<n;s++)i(t[s],s)}function p(t,i,n){var s=t.hasAttribute(i),r=void 0!==n?n:!s;return r!==s&&(r?t.setAttribute(i,""):t.removeAttribute(i)),r}function d(t){var i=t.ownerDocument||t;return c&&c.ownerDocument===i||(c=i.createElement("div")),b}function b(t){return function(t,i){u(1===i.length),t.innerHTML=i[0];var n=t.firstElementChild;return u(n),u(!n.nextElementSibling),t.removeChild(n),n}(c,t)}function w(t,i,n){var s=0,r=0,o=null;function e(){s=0;var a,h=n-(t.Date.now()-r);h>0?s=t.setTimeout(e,h):(a=o,o=null,i.apply(null,a))}return function(){r=t.Date.now();for(var i=arguments.length,a=new Array(i),h=0;h<i;h++)a[h]=arguments[h];o=a,s||(s=t.setTimeout(e,n))}}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var x=self.__AMP_LOG;function g(t,i,n,s,r,o,e,a,h,u,l){return t}function y(t,i){return S(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),i)}function k(t){return t.nodeType?(n=t,i=(n.ownerDocument||n).defaultView,y(i,"ampdoc")).getAmpDoc(t):t;var i,n}function M(t){var i=k(t);return i.isSingleDoc()?i.win:i}function S(t,i){g(z(t,i));var n=function(t){var i=t.__AMP_SERVICES;return i||(i=t.__AMP_SERVICES={}),i}(t)[i];return n.obj||(g(n.ctor),g(n.context),n.obj=new n.ctor(n.context),g(n.obj),n.context=null,n.resolve&&n.resolve(n.obj)),n.obj}function z(t,i){var n=t.__AMP_SERVICES&&t.__AMP_SERVICES[i];return!(!n||!n.ctor)}var N,j=function(t){return function(t,i){return S(M(k(t)),"owners")}(t)};function E(t,i,n,s){var r=t,o=n,e=function(t){try{return o(t)}catch(t){var i,n;throw null===(i=(n=self).__AMP_REPORT_ERROR)||void 0===i||i.call(n,t),t}},a=function(){if(void 0!==N)return N;N=!1;try{var t={get capture(){return N=!0,!1}};self.addEventListener("test-options",null,t),self.removeEventListener("test-options",null,t)}catch(t){}return N}(),h=!(null==s||!s.capture);return r.addEventListener(i,e,a?s:h),function(){null==r||r.removeEventListener(i,e,a?s:h),o=null,r=null,e=null}}function O(t,i,n,s){var r={detail:n};if(Object.assign(r,s),"function"==typeof t.CustomEvent)return new t.CustomEvent(i,r);var o=t.document.createEvent("CustomEvent");return o.initCustomEvent(i,!!r.bubbles,!!r.cancelable,n),o}function R(t,i,n,s){return E(t,i,n,s)}function A(t){return t.detail}function L(t,i,n,s){var r=n,o=E(t,i,(function(t){try{r(t)}finally{r=null,o()}}),s);return o}var C,I=["Webkit","webkit","Moz","moz","ms","O","o"];function _(t){var i=t.replace(/[A-Z]/g,(function(t){return"-"+t.toLowerCase()}));return I.some((function(t){return i.startsWith(t+"-")}))?"-".concat(i):i}function P(t,i,n){if(W(i))return i;var s;C||(s=Object.create(null),C=s);var r=C[i];if(!r||n){if(r=i,void 0===t[i]){var o=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(i),e=function(t,i){for(var n=0;n<I.length;n++){var s=I[n]+i;if(void 0!==t[s])return s}return""}(t,o);void 0!==t[e]&&(r=e)}n||(C[i]=r)}return r}function B(t,i){var n=t.style;for(var s in i)n.setProperty(_(P(n,s)),String(i[s]),"important")}function T(t,i,n,s,r){var o=P(t.style,i,r);if(o){var e=s?n+s:n;t.style.setProperty(_(o),e)}}function W(t){return t.startsWith("--")}function U(t,i){return t>0&&i>0?t%i:(t%i+i)%i}function Z(t,i,n){return u(i<=n),Math.min(Math.max(t,i),n)}var V="amp-carousel:indexchange",$="amp-carousel:scrollstart",D="amp-carousel:scrollpositionchange",F=function(){function t(t){var i=this,n=t.advanceable,s=t.element,r=t.scrollContainer,o=t.win;this.t=o,this.M4=r,this.S4=n,this.z4=0,this.N4=!1,this.j4=1,this.E4=1e3,this.O4=!1,this.R4=!1,this.A4=null,this.L4=Number.POSITIVE_INFINITY,this.tr=s.getAmpDoc(),this.C4(this.E4),this.M4.addEventListener("scroll",(function(){return i.I4()}),!0),R(this.M4,"touchstart",(function(){return i._4()}),{capture:!0,passive:!0}),R(s,V,(function(t){i.P4(t)}))}var i=t.prototype;return i.stop=function(){this.R4=!0},i.pause=function(){this.O4=!0},i.resume=function(){this.O4=!1,this.B4()},i.updateAutoAdvance=function(t){this.N4=t,this.B4()},i.updateAutoAdvanceCount=function(t){this.j4=t,this.B4()},i.updateAutoAdvanceInterval=function(t){this.E4=Math.max(t,1e3),this.C4(this.E4),this.B4()},i.updateMaxAdvances=function(t){this.L4=t},i.C4=function(t){var i=this,n=w(this.t,(function(){n==i.A4&&i.T4()}),t);this.A4=n},i._4=function(){var t=this;this.pause(),L(window,"touchend",(function(){t.resume()}),{capture:!0,passive:!0})},i.W4=function(){return this.N4&&this.tr.isVisible()&&!this.O4&&!this.R4&&this.z4<this.L4},i.I4=function(){this.B4()},i.P4=function(t){var i=A(t).actionSource;i&&4!==i&&this.stop()},i.T4=function(){this.W4()&&(this.S4.advance(this.j4,{actionSource:4,allowWrap:!0}),this.z4+=this.j4)},i.B4=function(){this.W4()&&this.A4()},t}(),H=function(){function t(t){var i=this,n=t.element,s=t.runMutate,r=t.scrollContainer,o=t.stoppable,e=t.win;this.t=e,this.M4=r,this.U4=s,this.Z4=[],this.V4=1,this.D4=!1,this.F4=!1,this.es=0,n.addEventListener("focus",(function(){o.stop()}),!0),n.addEventListener(V,(function(t){i.H4(t)}))}var i=t.prototype;return i.updateMixedLength=function(t){this.D4=t},i.updateUi=function(){var t=this;this.F4||(this.F4=!0,this.U4((function(){t.F4=!1,t.Q4(),t.X4()})))},i.updateSlides=function(t){this.Z4=t,this.updateUi()},i.updateVisibleCount=function(t){this.V4=t,this.updateUi()},i.q4=function(){return this.D4||this.V4>=2},i.Q4=function(){this.q4()?(this.M4.removeAttribute("aria-live"),this.M4.setAttribute("role","list"),this.Z4.forEach((function(t){t.setAttribute("role","listitem")}))):(this.M4.setAttribute("aria-live","polite"),this.M4.removeAttribute("role"),this.Z4.forEach((function(t){t.removeAttribute("role")})))},i.X4=function(){var t=this;this.Z4.forEach((function(i,n){var s=!t.q4()&&n!==t.es;i.setAttribute("aria-hidden",s)}))},i.H4=function(t){var i=this,n=A(t).index;this.es=n,this.U4((function(){i.X4()}))},t}(),Q="start";function X(t,i){var n=i.getBoundingClientRect(),s=n.bottom,r=n.height,o=n.left,e=n.right,a=n.top,h=n.width;return{start:0==t?o:a,end:0==t?e:s,length:0==t?h:r}}function q(t,i){var n=X(t,i),s=n.end;return(n.start+s)/2}function G(t,i){return X(t,i).start}function J(t,i,n){return i==Q?G(t,n):q(t,n)}function K(t,i,n){T(i,0==t?"width":"height","".concat(n,"px"))}function Y(t,i,n){var s=X(t,i),r=s.end;return s.start<=n&&n<r}function tt(t,i,n,s){return(J(t,i,s)-J(t,i,n))/X(t,s).length}function it(t,i,n){!function(t,i,n){0==t?i.scrollLeft=n:i.scrollTop=n}(t,i,function(t,i){return 0==t?i.scrollLeft:i.scrollTop}(t,i)+n)}var nt="i-amphtml-carousel-spacer";function st(t,i){var n=function(t,i,n){var s=P(t.style,"scrollBehavior",void 0);if(s)return W(s)?t.style.getPropertyValue(s):t.style[s]}(t);T(t,"scrollBehavior","auto"),i(),T(t,"scrollBehavior",n)}function rt(t){return t.reduce((function(t,i){return t+i}),0)}var ot=function(){function t(t){var i=this,n=t.element,s=t.initialIndex,r=t.runMutate,o=t.scrollContainer,e=t.win;this.t=e,this.U4=r,this.Gn=n,this.M4=o,this.N4=new F({win:e,element:n,scrollContainer:o,advanceable:this}),this.G4=new H({win:e,element:n,scrollContainer:o,runMutate:r,stoppable:this.N4}),this.J4=w(e,(function(){return i.K4()}),200),this.Y4=1,this.t6=Number.POSITIVE_INFINITY,this.D4=!1,this.Z4=[],this.i6=!0,this.F4=!1,this.n6=[],this.s6=[],this.r6=[],this.o6=[],this.e6=!1,this.a6=!1,this.h6=0,this.u6=null,this.l6=NaN,this.c6=!1,this.f6=!1,this.m6=void 0,this.v6=Q,this.p6=0,this.d6=!0,this.b6=!0,this.QL=s||0,this.dd=!1,this.PV=!0,this.w6=1,this.V4=1,this.M4.addEventListener("scroll",(function(){return i.I4()}),!0),this.M4.addEventListener("scrollend",(function(){return i.x6()}),!0),R(this.M4,"touchstart",(function(){return i._4()}),{capture:!0,passive:!0}),R(this.M4,"wheel",(function(){return i.g6()}),{capture:!0,passive:!0})}var i=t.prototype;return i.next=function(t){this.advance(this.Y4,{actionSource:t})},i.prev=function(t){this.advance(-this.Y4,{actionSource:t})},i.advance=function(t){var i,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=this.QL,r=this.u6,o=this.Z4,e=n.actionSource,a=n.allowWrap,h=void 0!==a&&a,u=null!==r?r:s,l=u+t,c=o.length-1,f=0===u,m=u===c,v=l<0,p=l>c,d=t>0&&this.y6(u)&&this.y6(l);i=this.isLooping()?U(l,c+1):h?d?0:v&&f||p&&!m?c:v&&!f||p&&m?0:l:d?u:Z(l,0,c),this.goToSlide(i,{actionSource:e})},i.pauseLayout=function(){this.e6=!0,this.N4.pause()},i.resumeLayout=function(){this.e6=!1,this.updateUi(),this.N4.resume()},i.getCurrentIndex=function(){return this.QL},i.getVisibleCount=function(){return this.V4},i.isLooping=function(){return this.dd&&this.Z4.length/this.V4>=3},i.goToSlide=function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=i.actionSource,s=i.smoothScroll,r=void 0===s||s;t<0||t>this.Z4.length-1||isNaN(t)||t!==this.QL&&(this.c6||this.k6()||(this.a6=!1,this.u6=t,this.m6=n,this.M6(this.Z4[t],{smoothScroll:r})))},i.updateAdvanceCount=function(t){this.Y4=t},i.updateAlignment=function(t){this.v6="start"===t?Q:"center",this.updateUi()},i.updateAutoAdvance=function(t){this.N4.updateAutoAdvance(t)},i.updateAutoAdvanceCount=function(t){this.N4.updateAutoAdvanceCount(t)},i.updateAutoAdvanceInterval=function(t){this.N4.updateAutoAdvanceInterval(t)},i.updateAutoAdvanceLoops=function(t){this.t6=t,this.updateUi()},i.updateForwards=function(t){this.d6=t,this.updateUi()},i.updateHideScrollbar=function(t){this.b6=t,this.updateUi()},i.updateHorizontal=function(t){this.p6=t?0:1,this.updateUi()},i.updateLoop=function(t){this.dd=t,this.updateUi()},i.updateMixedLength=function(t){this.D4=t,this.G4.updateMixedLength(t),this.updateUi()},i.updateSlides=function(t){var i=t.length;if(i)this.Z4=t,this.QL=this.isLooping()?U(this.QL,i):Z(this.QL,0,i-1)||0,this.G4.updateSlides(t),this.updateUi();else{var n=this.Gn.tagName.toUpperCase();(x.dev||(x.dev=function(t,i){throw new Error("failed to call initLogConstructor")}())).warn(n,"No slides were found.")}},i.updateSnap=function(t){this.PV=t,this.updateUi()},i.updateSnapBy=function(t){this.w6=Math.max(1,t),this.updateUi()},i.updateUserScrollable=function(t){this.i6=t,this.updateUi()},i.updateUi=function(){var t=this;this.F4||this.e6||(this.F4=!0,this.U4((function(){t.F4=!1,t.M4.setAttribute("mixed-length",t.D4),t.M4.setAttribute("user-scrollable",t.i6),t.M4.setAttribute("hide-scrollbar",t.b6),t.M4.setAttribute("horizontal",0===t.p6),t.M4.setAttribute("loop",t.isLooping()),t.M4.setAttribute("snap",t.PV),B(t.M4,{"--visible-count":t.V4}),t.Z4.length&&(t.N4.updateMaxAdvances(t.t6*t.Z4.length-1),t.S6(),t.z6(),t.N6(),t.K4(!0))})))},i.updateVisibleCount=function(t){this.V4=Math.max(1,t),this.G4.updateVisibleCount(t),this.updateUi()},i.j6=function(t,i){this.l6!==t&&(this.l6=t,this.Gn.dispatchEvent(O(this.t,V,{"index":t,"total":this.Z4.length,"actionSource":i,"slides":this.Z4},{bubbles:!0})))},i.E6=function(t,i){this.QL=t,this.h6=i,this.Gn.dispatchEvent(O(this.t,"amp-carousel:offsetchange",{"index":t,"total":this.Z4.length,"offset":this.d6?-i:i,"slides":this.Z4},{bubbles:!0}))},i.notifyScrollStart=function(){this.Gn.dispatchEvent(O(this.t,$,null))},i.O6=function(){this.Gn.dispatchEvent(O(this.t,D,null))},i._4=function(){var t=this;this.c6=!0,this.m6=3,this.u6=null,this.a6=!1,L(window,"touchend",(function(){t.c6=!1,t.J4()}),{capture:!0,passive:!0})},i.g6=function(){this.m6=2,this.u6=null,this.a6=!1},i.I4=function(){this.a6?this.a6=!1:(this.f6=!0,this.R6(),this.notifyScrollStart(),this.J4())},i.x6=function(){null===this.u6&&this.K4()},i.k6=function(){return this.f6&&(3===this.m6||2===this.m6)},i.A6=function(t,i,n){var s=i*n*(this.d6?1:-1);!function(t,i,n){var s=0==t?n:0,r=0==t?0:n;T(i,"transform","translate(".concat(s,"px, ").concat(r,"px)")),B(i,{"--content-transform":"translate(".concat(s,"px, ").concat(r,"px)")})}(this.p6,t,s),t._revolutions=i},i.L6=function(t){var i=this;this.Z4.forEach((function(n){i.A6(n,0,t)}))},i.C6=function(){var t=this;return this.Z4.map((function(i){return X(t.p6,i).length}))},i.isAtEnd=function(){return!this.isLooping()&&this.I6()},i.isAtStart=function(){return!this.isLooping()&&this._6()},i.I6=function(){var t=this.M4,i=t.getBoundingClientRect().width*(this.d6?1:-1),n=this.d6?Math.ceil(i):Math.floor(i),s=t.scrollLeft+n,r=t.scrollWidth;return this.d6?s>=r:s<=-r},i._6=function(){var t=this.M4.scrollLeft;return this.d6?t<=0:t>=0},i.P6=function(t){for(var i=[],n=0;n<t;n++){var s=document.createElement("div");s.className=nt,i.push(s)}return i},i.S6=function(){var t=this,i=this.p6,n=this.Z4,s=this.C6(),r=rt(s),o=this.isLooping()?n.length:0;this.n6.forEach((function(i){t.M4.removeChild(i)})),this.n6=this.P6(o),this.n6.forEach((function(r,o){K(i,r,s[o]),t.M4.insertBefore(r,n[0])})),this.s6.forEach((function(i){t.M4.removeChild(i)})),this.s6=this.P6(o),this.s6.forEach((function(n,o){K(i,n,s[o]),t.A6(n,-1,r),t.M4.appendChild(n)})),this.r6.forEach((function(i){t.M4.removeChild(i)})),this.r6=this.P6(o),this.r6.forEach((function(n,o){K(i,n,s[o]),t.A6(n,-1,r),t.M4.appendChild(n)})),this.o6=this.n6.concat(this.s6,this.r6)},i.z6=function(){var t=this,i=this.Z4.length,n=this.v6===Q,s=1===U(this.V4,2),r=n||s?"0%":"50%";v(this.M4.children,(function(n,s){var o=U(s,i),e=0===U(o,t.w6);!n.classList.contains(nt)&&t.isLooping()||function(t,i){for(var n in i)T(t,n,i[n])}(n,{"scroll-snap-align":e?t.v6:"none","scroll-snap-coordinate":e?r:"none"})}))},i.N6=function(){var t=this.r6,i=this.n6,n=this.QL,s=this.Z4,r=Math.max(0,s.length-n-1),o=Math.max(0,n-1);i.forEach((function(t,o){var e,a,h,u=(e=n,a=o,h=i.length,(e===a?h:U(e-a,h))>s.length-1);t.hidden=u||o<s.length-r})),t.forEach((function(i,r){var e,a,h,u=(e=n,a=r,h=t.length,(e===a?h:U(a-e,h))>s.length-1);i.hidden=u||r>o}))},i.R6=function(){var t=this,i=this.v6,n=this.o6,s=this.p6,r=this.QL,o=this.M4,e=this.Z4,a=rt(this.C6()),h=!!n.length,u=h?n:e,l=function(t,i,n,s,r){var o=J(t,i,n);if(Y(t,s[r],o))return r;for(var e=1;e<=s.length/2;e++){var a=U(r+e,s.length),h=U(r-e,s.length);if(Y(t,s[a],o))return a;if(Y(t,s[h],o))return h}}(s,i,o,u,h?r+e.length:r);if(void 0!==l){var c=u[l],f=l%e.length,m=tt(s,i,o,c);this.E6(f,m),f!==r&&this.U4((function(){t.B6(a)}))}},i.K4=function(){var t=this,i=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=this.m6;if(!this.c6&&(this.m6=void 0,this.f6=!1,this.U4((function(){t.O6()})),this.l6!==this.QL||null!==this.u6||i)){null!==this.u6&&(this.QL=this.u6,this.u6=null,this.h6=0);var s=rt(this.C6());this.U4((function(){t.j6(t.QL,n),t.E6(t.QL,t.h6),t.L6(s),t.N6(),t.B6(s),t.T6()}))}},i.T6=function(){var t=this.v6,i=this.p6,n=this.h6,s=this.QL,r=this.M4,o=this.Z4[s],e=(tt(i,t,r,o)-n)*X(i,o).length;e&&(this.a6=!0,st(r,(function(){it(i,r,e)})))},i.M6=function(t,i){var n=this;(i.smoothScroll?function(t,i){return i()}:st)(this.M4,(function(){!function(t,i,n,s){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,o=i==Q,e=X(t,s).length,a=o?G(t,s):q(t,s),h=o?G(t,n):q(t,n);it(t,n,a-h-r*e)}(n.p6,n.v6,n.M4,t)}))},i.W6=function(t,i,n){for(var s=this.QL,r=this.l6,o=this.Z4,e=o[s]._revolutions||0,a=n?1:-1,h=1;h<=i;h++){var u=U(s+h*a,o.length);if(u===r&&s!==r)break;var l=o[u],c=u>s!==n?e+a:e;this.A6(l,c,t)}},i.B6=function(t){if(this.isLooping()){var i=this.v6,n=this.Z4,s=this.V4,r=i===Q?s-1:0,o=(n.length-1-r)/2,e=(n.length-1+r)/2;this.W6(t,Math.round(o),!1),this.W6(t,Math.round(e),!0)}},i.y6=function(t){var i=this.v6,n=this.Z4,s=this.V4,r=i===Q?s:s/2;return t>=n.length-r},t}(),et="__AMP_CAROUSEL_NEAR_VIEWPORT",at="__AMP_CAROUSEL_IN_VIEWPORT",ht=function(){function t(t){var i=t.ampElement,n=t.intersectionElement,s=t.intersectionThreshold,r=void 0===s?.01:s,o=t.nearbyMarginInPercent,e=void 0===o?100:o,a=t.viewportIntersectionThreshold,h=void 0===a?r:a,u=t.viewportIntersectionCallback,l=void 0===u?function(){}:u;this.U6=i,this.ML=j(i.element),this.Z6=n,this.V6=r,this.D6=e,this.F6=h,this.H6=l,this.Q6=!1,this.ZB=[],this.X6=null,this.q6=null,this.Ed=null,this.G6=!1}var i=t.prototype;return i.setQueueChanges=function(t){this.Q6=t},i.J6=function(t,i){i?this.ML.scheduleLayout(this.U6.element,t):this.ML.scheduleUnlayout(this.U6.element,t)},i.K6=function(t,i){this.H6(t,i)},i.Hc=function(){var t=this;if(!(this.X6&&this.q6&&this.Ed)){var i=this.U6.win;this.X6=new i.IntersectionObserver((function(i){return t.Y6(i)}),{root:this.Z6,rootMargin:"".concat(this.D6,"%"),threshold:this.V6}),this.q6=new i.IntersectionObserver((function(i){return t.t5(i)}),{root:this.Z6,rootMargin:"".concat(this.D6+10,"%"),threshold:this.V6}),this.Ed=new i.IntersectionObserver((function(i){return t.i5(i)}),{root:this.Z6,rootMargin:"0%",threshold:this.F6})}},i.Y6=function(t){t.filter((function(t){return t.isIntersecting})).forEach((function(t){t.target[et]=0})),this.Q6||this.n5()},i.t5=function(t){t.filter((function(t){return!t.isIntersecting})).forEach((function(t){t.target[et]=1})),this.Q6||this.s5()},i.i5=function(t){t.forEach((function(t){var i=t.isIntersecting;t.target[at]=i?0:1})),this.Q6||this.r5()},i.flushChanges=function(){this.n5(),this.s5(),this.r5()},i.n5=function(){for(var t=0;t<this.ZB.length;t++){var i=this.ZB[t];0==i[et]&&(this.J6(i,!0),i[et]=null)}},i.s5=function(){for(var t=0;t<this.ZB.length;t++){var i=this.ZB[t];1==i[et]&&(this.J6(i,!1),i[et]=null)}},i.r5=function(){for(var t=0;t<this.ZB.length;t++){var i=this.ZB[t];0==i[at]?(this.J6(i,!0),this.K6(i,!0)):1==i[at]&&this.K6(i,!1),i[at]=null}},i.o5=function(t){if("IntersectionObserver"in this.U6.win){if(this.Hc(),!t)return this.X6.disconnect(),this.q6.disconnect(),void this.Ed.disconnect();for(var i=0;i<this.ZB.length;i++)this.X6.observe(this.ZB[i]),this.q6.observe(this.ZB[i]),this.Ed.observe(this.ZB[i])}},i.updateChildren=function(t){if(this.ZB=t,"IntersectionObserver"in this.U6.win){for(var i=0;i<this.ZB.length;i++)this.ML.setOwner(this.ZB[i],this.U6.element);this.o5(!1),this.o5(this.G6)}},i.wasLaidOut=function(){this.G6=!0,this.o5(this.G6)},i.wasUnlaidOut=function(){this.G6=!1,this.o5(this.G6);for(var t=0;t<this.ZB.length;t++)this.J6(this.ZB[t],!1),this.K6(this.ZB[t],!1)},t}();function ut(t){return t.split(",").map((function(t){var i=/[a-z0-9.]+$/.exec(t);if(i){var n=i.index,s=t.slice(n),r=t.slice(0,n).trim();return{mediaQueryList:window.matchMedia(r),value:s}}})).filter(Boolean)}function lt(t){for(var i=0;i<t.length;i++){var n=t[i],s=n.mediaQueryList,r=n.value;if(s.matches)return r}return""}var ct=function(){function t(t){this.$N=t,this.e5={},this.a5={}}var i=t.prototype;return i.updateAttribute=function(t,i){var n=this;if(this.$N[t]){var s=this.a5[t];s&&this.h5(s,null);var r=ut(i),o=function(){n.u5(t,lt(r))};this.h5(r,o),o(),this.a5[t]=r}},i.u5=function(t,i){if(this.e5[t]!==i){var n=this.$N[t];n&&n(i),this.e5[t]=i}},i.h5=function(t,i){t.forEach((function(t){t.mediaQueryList.onchange=i}))},t}(),ft=["<div class=i-amphtml-carousel-content><div class=i-amphtml-carousel-scroll tabindex=-1></div><div class=i-amphtml-base-carousel-arrows><div class=i-amphtml-base-carousel-arrow-prev-slot></div><div class=i-amphtml-base-carousel-arrow-next-slot></div></div></div>"],mt=['<button class=i-amphtml-base-carousel-arrow aria-label="Next item in carousel"><div class=i-amphtml-base-carousel-arrow-frosting></div><div class=i-amphtml-base-carousel-arrow-backdrop></div><div class=i-amphtml-base-carousel-arrow-background></div><svg class=i-amphtml-base-carousel-arrow-icon viewBox="0 0 24 24"><path d="M10,7.4 L14.6,12 L10,16.6" fill=none stroke-width=2px stroke-linejoin=round stroke-linecap=round></path></svg></button>'],vt=['<button class=i-amphtml-base-carousel-arrow aria-label="Previous item in carousel"><div class=i-amphtml-base-carousel-arrow-frosting></div><div class=i-amphtml-base-carousel-arrow-backdrop></div><div class=i-amphtml-base-carousel-arrow-background></div><svg class=i-amphtml-base-carousel-arrow-icon viewBox="0 0 24 24"><path d="M14,7.4 L9.4,12 L14,16.6" fill=none stroke-width=2px stroke-linejoin=round stroke-linecap=round></path></svg></button>'],pt=function(t){!function(t,i){if("function"!=typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(i&&i.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),i&&n(t,i)}(b,t);var r,h,c=(r=b,h=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,i=s(r);if(h){var n=s(this).constructor;t=Reflect.construct(i,arguments,n)}else t=i.apply(this,arguments);return o(this,t)});function b(t){var i,n;return(i=c.call(this,t)).l5=i.c5(),i.SY=(n=i.win,y(n,"platform")).isIos(),i.M4=null,i.YZ=null,i.Z4=[],i.f5=null,i.m5=null,i.v5=!1,i.Ye=null,i.p5=null,i.pd=2,i}b.prerenderAllowed=function(){return!0};var w=b.prototype;return w.c5=function(){var t=this;return new ct({"advance-count":function(i){t.YZ.updateAdvanceCount(Number(i)||0)},"auto-advance":function(i){t.YZ.updateAutoAdvance("true"===i)},"auto-advance-count":function(i){t.YZ.updateAutoAdvanceCount(Number(i)||0)},"auto-advance-interval":function(i){t.YZ.updateAutoAdvanceInterval(Number(i)||0)},"auto-advance-loops":function(i){t.YZ.updateAutoAdvanceLoops(Number(i)||0)},"controls":function(i){t.d5(i)},"dir":function(i){t.YZ.updateForwards("rtl"!=i)},"horizontal":function(i){t.YZ.updateHorizontal("true"===i)},"loop":function(i){t.YZ.updateLoop("true"===i||""===i)},"mixed-length":function(i){t.YZ.updateMixedLength("true"===i)},"slide":function(i){t.YZ.goToSlide(Number(i))},"snap":function(i){t.YZ.updateSnap("true"===i)},"snap-align":function(i){t.YZ.updateAlignment(i)},"snap-by":function(i){t.YZ.updateSnapBy(Number(i)||0)},"visible-count":function(i){t.YZ.updateVisibleCount(Number(i)||0)}})},w.isLayoutSupported=function(t){return function(t){return"fixed"==t||"fixed-height"==t||"responsive"==t||"fill"==t||"flex-item"==t||"fluid"==t||"intrinsic"==t}(t)},w.buildCallback=function(){var t,i,n,s=this;this.Ye=(t=this.element,i="action",z(n=M(k(t)),i)?S(n,i):null),this.b5(),this.YZ=new ot({win:this.win,element:this.element,scrollContainer:this.M4,initialIndex:this.w5(),runMutate:function(t){return s.mutateElement(t)}}),e(this.element.attributes).forEach((function(t){s.x5(t.name,t.value)})),this.YZ.updateSlides(this.Z4),this.g5(),this.y5(),this.aA(),this.k5()},w.isRelayoutNeeded=function(){return!0},w.pauseCallback=function(){this.YZ.pauseLayout()},w.resumeCallback=function(){this.YZ.resumeLayout()},w.layoutCallback=function(){return this.YZ.updateUi(),this.p5.wasLaidOut(),i||(i=Promise.resolve(void 0))},w.unlayoutCallback=function(){return this.p5.wasUnlaidOut(),!0},w.mutatedAttributesCallback=function(t){for(var i in t)this.x5(i,String(t[i]))},w.getSlides=function(){return this.Z4},w.goToSlide=function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=i.actionSource,s=i.smoothScroll,r=void 0!==s&&s;this.YZ.goToSlide(t,{smoothScroll:r,actionSource:n})},w.interactionNext=function(){this.YZ.next(0)},w.interactionPrev=function(){this.YZ.prev(0)},w.b5=function(){var t,i,n=this,s=this.element;e(s.children).forEach((function(s){var r=s.getAttribute("slot");"prev-arrow"===r?t=s:"next-arrow"===r?i=s:"I-AMPHTML-SIZER"!==s.tagName&&n.Z4.push(s)})),s.appendChild(this.M5()),this.M4=s.querySelector(".i-amphtml-carousel-scroll"),this.m5=this.element.querySelector(".i-amphtml-base-carousel-arrow-prev-slot"),this.f5=this.element.querySelector(".i-amphtml-base-carousel-arrow-next-slot"),this.Z4.forEach((function(t){t.classList.add("i-amphtml-carousel-slotted"),n.M4.appendChild(t)})),this.m5.appendChild(t||this.S5()),this.f5.appendChild(i||this.z5())},w.M5=function(){return d(this.element)(ft)},w.z5=function(){return d(this.element)(mt)},w.S5=function(){return d(this.element)(vt)},w.N5=function(t){return t>=2?0:1},w.g5=function(){var t=this,i=j(this.element);this.p5=new ht({ampElement:this,intersectionElement:this.M4,nearbyMarginInPercent:this.SY?200:100,viewportIntersectionCallback:function(n,s){s?i.scheduleResume(t.element,n):i.schedulePause(t.element,n)}}),this.p5.setQueueChanges(this.SY);var n=this.Z4.map((function(t){return"amp-inline-gallery-slide"===t.localName?e((i=t,n="> :not([slot])",(void 0!==a?a:a=function(t){try{var i=t.ownerDocument,n=i.createElement("div"),s=i.createElement("div");return n.appendChild(s),n.querySelector(":scope div")===s}catch(t){return!1}}(i))?i.querySelectorAll(l(n,":scope")):function(t,i){var n=t.classList,s="i-amphtml-scoped";n.add(s);var r=l("> :not([slot])",".".concat(s)),o=t.querySelectorAll(r);return n.remove(s),o}(i))):t;var i,n})).reduce((function(t,i){return t.concat(i)}),[]);this.p5.updateChildren(n)},w.y5=function(){var t=this;this.registerAction("prev",(function(i){var n=i.trust;t.YZ.prev(t.N5(n))}),1),this.registerAction("next",(function(i){var n=i.trust;t.YZ.next(t.N5(n))}),1),this.registerAction("goToSlide",(function(i){var n,s=i.args,r=i.trust;t.YZ.goToSlide(Number(null!==(n=s.index)&&void 0!==n?n:-1),{actionSource:t.N5(r)})}),1)},w.aA=function(){var t=this;this.element.addEventListener(V,(function(i){t.H4(i)})),this.element.addEventListener($,(function(){t.j5()})),this.element.addEventListener(D,(function(){t.E5()})),this.element.addEventListener("goToSlide",(function(i){var n=A(i);t.YZ.goToSlide(n.index)})),this.element.addEventListener("keydown",(function(i){t.O5(i)})),this.m5.addEventListener("click",(function(i){i.target!=i.currentTarget&&t.YZ.prev(0)})),this.f5.addEventListener("click",(function(i){i.target!=i.currentTarget&&t.YZ.next(0)}))},w.R5=function(){return 1===this.pd||0!==this.pd&&this.v5},w.d5=function(t){switch(t){case"always":this.pd=0;break;case"never":this.pd=1;break;default:this.pd=2}this.k5()},w.k5=function(){var t=this,i=this.YZ.getCurrentIndex(),n=this.YZ.isLooping(),s=this.YZ.getVisibleCount(),r=this.YZ.isAtEnd(),o=this.YZ.isAtStart();v(this.m5.children,(function(t){p(t,"disabled",!n&&0===i||o)})),v(this.f5.children,(function(o){p(o,"disabled",!n&&i>=t.Z4.length-s||r)})),p(this.element,"i-amphtml-base-carousel-hide-buttons",this.R5())},w.j5=function(){this.p5.setQueueChanges(this.SY)},w.E5=function(){this.p5.flushChanges(),this.p5.setQueueChanges(!1),this.k5()},w.O5=function(t){var i="ArrowRight"===t.key,n="ArrowLeft"===t.key;if(i||n){var s,r="rtl"==((s=g(this.element.ownerDocument)).body.getAttribute("dir")||s.documentElement.getAttribute("dir")||"ltr");i&&!r||n&&r?this.YZ.next():this.YZ.prev(),t.preventDefault()}},w.w5=function(){var t=this.element.getAttribute("slide")||"0";return Number(lt(ut(t)))},w.A5=function(t){return 2===t||3===t||0===t},w.H4=function(t){var i=A(t),n=i.index,s=i.actionSource,r={"index":n},o="slideChange",e=this.A5(s)?3:1,a=O(this.win,"slidescroll.".concat(o),r);this.Ye.trigger(this.element,o,a,e),function(t,i,n,s){var r=n||{};u(t.ownerDocument);var o=t.ownerDocument.createEvent("Event");o.data=r;var e=f,a=m;o.initEvent("slideChange",e,a),t.dispatchEvent(o)}(this.element,0,r),this.v5=this.v5||3===s,this.k5()},w.x5=function(t,i){this.l5.updateAttribute(t,i)},w.goCallback=function(t){1===t?this.interactionNext():this.interactionPrev()},b}(t.BaseElement);t.registerElement("amp-base-carousel",pt,".i-amphtml-carousel-content{position:absolute;top:0;left:0;bottom:0;right:0}.i-amphtml-carousel-scroll{display:-ms-flexbox;display:flex;width:100%;height:100%;-ms-flex-align:center;align-items:center;outline:none;scroll-behavior:smooth;-webkit-overflow-scrolling:touch!important;--visible-count:1}.i-amphtml-carousel-scroll[hide-scrollbar=true]{scrollbar-width:none}.i-amphtml-carousel-scroll[hide-scrollbar=true]::-webkit-scrollbar{display:none;box-sizing:content-box!important}.i-amphtml-carousel-scroll[horizontal=true]{-ms-flex-direction:row;flex-direction:row;scroll-snap-type-x:mandatory;scroll-snap-type:x mandatory;padding-bottom:20px!important;overflow-y:hidden}.i-amphtml-carousel-scroll[horizontal=false]{-ms-flex-direction:column;flex-direction:column;scroll-snap-type-y:mandatory;scroll-snap-type:y mandatory;padding-right:20px!important;overflow-x:hidden}.i-amphtml-carousel-scroll[snap=false]{scroll-snap-type:none}.i-amphtml-carousel-scroll[user-scrollable=false]{overflow:hidden}.i-amphtml-carousel-spacer{visibility:hidden;z-index:-1}.i-amphtml-carousel-slotted,.i-amphtml-carousel-spacer{box-sizing:border-box!important;margin:0!important;-ms-flex-negative:0!important;flex-shrink:0!important;width:100%;height:100%;scroll-snap-stop:always}.i-amphtml-carousel-scroll[horizontal=true][mixed-length=false]>.i-amphtml-carousel-slotted,.i-amphtml-carousel-scroll[horizontal=true][mixed-length=false]>.i-amphtml-carousel-spacer{width:calc(100%/var(--visible-count))!important;min-width:auto!important;max-width:none!important}.i-amphtml-carousel-scroll[horizontal=false][mixed-length=false]>.i-amphtml-carousel-slotted,.i-amphtml-carousel-scroll[horizontal=false][mixed-length=false]>.i-amphtml-carousel-spacer{height:calc(100%/var(--visible-count))!important;min-height:auto!important;max-height:none!important}.i-amphtml-carousel-scroll[horizontal=true][snap=true][mixed-length=true]>.i-amphtml-carousel-slotted,.i-amphtml-carousel-scroll[horizontal=true][snap=true][mixed-length=true]>.i-amphtml-carousel-spacer{max-width:100%!important}.i-amphtml-carousel-scroll[horizontal=false][snap=true][mixed-length=true]>.i-amphtml-carousel-slotted,.i-amphtml-carousel-scroll[horizontal=false][snap=true][mixed-length=true]>.i-amphtml-carousel-spacer{max-height:100%!important}.i-amphtml-carousel-scroll>.i-amphtml-carousel-slotted{will-change:transform}amp-base-carousel{display:block;overflow:hidden}.i-amphtml-base-carousel-arrows{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;pointer-events:none}.i-amphtml-base-carousel-arrow-next-slot,.i-amphtml-base-carousel-arrow-prev-slot{position:relative;z-index:1;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.i-amphtml-base-carousel-arrow-next-slot>*,.i-amphtml-base-carousel-arrow-prev-slot>*{pointer-events:all}amp-base-carousel[dir=rtl] .i-amphtml-base-carousel-arrow-next-slot,amp-base-carousel[dir=rtl] .i-amphtml-base-carousel-arrow-prev-slot{transform:scaleX(-1)}amp-base-carousel .i-amphtml-carousel-scroll[loop=false]+.i-amphtml-base-carousel-arrows>.i-amphtml-base-carousel-arrow-next-slot>[disabled],amp-base-carousel .i-amphtml-carousel-scroll[loop=false]+.i-amphtml-base-carousel-arrows>.i-amphtml-base-carousel-arrow-prev-slot>[disabled],amp-base-carousel[i-amphtml-base-carousel-hide-buttons] .i-amphtml-base-carousel-arrow-next-slot>*,amp-base-carousel[i-amphtml-base-carousel-hide-buttons] .i-amphtml-base-carousel-arrow-prev-slot>*{opacity:0;pointer-events:none}.i-amphtml-base-carousel-arrow-backdrop,.i-amphtml-base-carousel-arrow-background,.i-amphtml-base-carousel-arrow-frosting{position:absolute;top:0;left:0;width:100%;height:100%;border-radius:50%}.i-amphtml-base-carousel-arrow-frosting{-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px)}.i-amphtml-base-carousel-arrow-backdrop{-webkit-backdrop-filter:blur(12px) invert(1) grayscale(0.6) brightness(0.8);backdrop-filter:blur(12px) invert(1) grayscale(0.6) brightness(0.8);opacity:0.5}.i-amphtml-base-carousel-arrow-background{background-color:rgba(0,0,0,0.3);box-shadow:inset 0 0 0px 1px rgba(0,0,0,0.08),0 1px 4px 1px rgba(0,0,0,0.2);transition:background-color 200ms}@media (hover:hover){.i-amphtml-base-carousel-arrow:hover .i-amphtml-base-carousel-arrow-background{background-color:hsla(0,0%,100%,0.8)}}.i-amphtml-base-carousel-arrow:active .i-amphtml-base-carousel-arrow-background{background-color:#fff;transition-duration:0ms}.i-amphtml-base-carousel-arrow{position:relative;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;width:36px;height:36px;padding:0;margin:12px;background-color:transparent;border:none;outline:none;stroke:#fff;transition:stroke 200ms}@media (hover:hover){.i-amphtml-base-carousel-arrow:hover{stroke:#222}}.i-amphtml-base-carousel-arrow:active{stroke:#222;transition-duration:0ms}.i-amphtml-base-carousel-arrow-icon{position:relative;z-index:1;width:24px;height:24px}.i-amphtml-base-carousel-arrow-background,.i-amphtml-base-carousel-arrow-icon{transform:translateZ(1px)}amp-base-carousel .i-amphtml-carousel-slotted>.i-amphtml-replaced-content{-o-object-fit:contain;object-fit:contain}\n/*# sourceURL=/extensions/amp-base-carousel/0.1/amp-base-carousel.css*/")}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-base-carousel-0.1.js.map