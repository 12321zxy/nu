;
(self.AMP=self.AMP||[]).push({m:1,v:"2210272257000",n:"amp-anim",ev:"0.1",l:!0,f:function(t,n){(()=>{var{isArray:n}=Array,{hasOwnProperty:e,toString:i}=Object.prototype;function r(t){return(t.ownerDocument||t).defaultView}function o(t,n,e={}){const{needsRootBounds:i,rootMargin:r,threshold:o}=e,s=function(t){return t.parent&&t.parent!=t}(n)&&(i||r)?n.document:void 0;return new n.IntersectionObserver(t,{threshold:o,root:s,rootMargin:r})}var s,l=new WeakMap,c=new WeakMap;function u(t){const n=new Set;for(let e=t.length-1;e>=0;e--){const i=t[e],{target:r}=i;if(n.has(r))continue;n.add(r);const o=c.get(r);if(o)for(let t=0;t<o.length;t++)(0,o[t])(i)}}function a(t,e,i,r){const o=n(s=t)?s:[s];var s;for(const t of o){const n=e.getAttribute(t);null!==n?i.setAttribute(t,n):r&&i.removeAttribute(t)}}var f=["Webkit","webkit","Moz","moz","ms","O","o"];function h(t,n,e,i,r){const o=function(t,n,e){if(n.startsWith("--"))return n;s||(s=Object.create(null));let i=s[n];if(!i||e){if(i=n,void 0===t[n]){const e=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(n),r=function(t,n){for(let e=0;e<f.length;e++){const i=f[e]+n;if(void 0!==t[i])return i}return""}(t,e);void 0!==t[r]&&(i=r)}e||(s[n]=i)}return i}(t.style,n,r);if(!o)return;const l=i?e+i:e;t.style.setProperty(function(t){const n=t.replace(/[A-Z]/g,(t=>"-"+t.toLowerCase()));return f.some((t=>n.startsWith(t+"-")))?`-${n}`:n}(o),l)}function A(t,n){void 0===n&&(n=t.hasAttribute("hidden")),n?t.removeAttribute("hidden"):t.setAttribute("hidden","")}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null},self.__AMP_LOG;var d=["alt","aria-label","aria-describedby","aria-labelledby"],b=["src","srcset"],m="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",p=class extends t.BaseElement{constructor(t){super(t),this.Ce=null,this.tj=null}isLayoutSupported(t){return function(t){return"fixed"==t||"fixed-height"==t||"responsive"==t||"fill"==t||"flex-item"==t||"fluid"==t||"intrinsic"==t}(t)}buildCallback(){var t,n,e;this.Ce=new Image,this.Ce.setAttribute("decoding","async"),a(d,this.element,this.Ce),(t=this.Ce).classList.add("i-amphtml-fill-content"),t.classList.add("i-amphtml-replaced-content"),n=this.element,e=this.Ce,n.hasAttribute("object-fit")&&h(e,"object-fit",n.getAttribute("object-fit")),n.hasAttribute("object-position")&&h(e,"object-position",n.getAttribute("object-position")),"img"==this.element.getAttribute("role")&&(this.element.removeAttribute("role"),this.user().error("AMP-ANIM","Setting role=img on amp-anim elements breaks screen readers. Please just set alt or ARIA attributes, they will be correctly propagated for the underlying <img> element.")),A(this.Ce,!this.getPlaceholder()),this.element.appendChild(this.Ce)}isRelayoutNeeded(){return!0}layoutCallback(){const t=this.Ce;return a(b,this.element,t,!0),function(t){if(!t.hasAttribute("src")&&"srcset"in t==0){const n=t.getAttribute("srcset")||"",e=/\S+/.exec(n);if(null==e)return;const i=e[0];t.setAttribute("src",i)}}(t),this.loadPromise(t).then((()=>{this.tj=function(t,n,e){const i=r(t);let s=l.get(i);s||l.set(i,s=o(u,i));let a=c.get(t);return a||(a=[],c.set(t,a)),a.push(n),s.observe(t),()=>{!function(t,n){const e=c.get(t);if(!e)return;if(!function(t,n){const e=t.indexOf(n);return-1!=e&&(t.splice(e,1),!0)}(e,n))return;if(e.length)return;const i=r(t),o=l.get(i);null==o||o.unobserve(t),c.delete(t)}(t,n)}}(this.element,(({isIntersecting:t})=>this.nj(t)))}))}firstLayoutCompleted(){}unlayoutCallback(){var t;return null===(t=this.tj)||void 0===t||t.call(this),this.tj=null,this.nj(!1),this.Ce.src=m,this.Ce.srcset=m,!0}nj(t){this.togglePlaceholder(!t),A(this.Ce,t)}};t.registerElement("amp-anim",p)})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-anim-0.1.mjs.map