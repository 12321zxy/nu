(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[19],{"01NQ":function(e,t){e.exports=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight((function(e,t){return t(e)}),e)}}},"4ysm":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(e){return function(t){t.preventDefault(),window.location.href=e}}},"6z0O":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a}));var r=n("UHNZ"),i=Object(r.a)("FIELD_FILLED"),o=Object(r.a)("FORM_SUBMITTED"),a=Object(r.a)("SHORT_FORM_SUBMITTED");Object(r.a)("PROGRESSIVE_DISCLOSURE_SUBMITTED"),Object(r.a)("PROGRESSIVE_DISCLOSURE_NEXT_FIELD")},"8+MO":function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u}));var r=n("zjfJ"),i=n("zygG"),o=n("+ST/"),a=n("Xskg");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l=function(e){return a.b[e]},u=function(e,t){return Object.entries(e).reduce((function(e,n){var a=Object(i.a)(n,2),c=a[0],l=a[1];return Object(o.isType)("object",l)?s(s({},e),{},Object(r.a)({},c,s(s({},l),{},{errorMsg:t({id:l.errorMsg})}))):s(s({},e),{},Object(r.a)({},c,t({id:l})))}),{})}},"8Pvc":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("QMqX"),i=n("ERkP"),o=n("IeIk"),a=n("3v8f"),c=n("blh4"),s=n("8HIL"),l=n("V0VH"),u=n("iY3x");function p(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}n("PdLh"),n("j/s1"),n("41F8"),n("lgfb"),n("uIIz"),n("Zzc8"),n("veNL"),n("+ST/"),n("HZt4"),n("P6bS"),n("wUAy"),n("VRT8"),n("xIsn"),n("dXku"),n("Qg07"),n("C+fP"),n("VNLi"),n("R+r0"),n("blkX"),n("ph8j"),n("xam2"),n("wQqz"),n("cbIG"),n("JPJE"),n("HIPp"),n("1gKc");var d,f,O,b,m,g=p(i),y={top:"translate3d(0, -100%, 0)",right:"translate3d(100%, 0, 0)",bottom:"translate3d(0, 100%, 0)"},j=c.styled.div(d||(d=c.taggedTemplateLiteral(["\n  background: ",";\n  position: fixed;\n  right: 0;\n  top: 0;\n  height: 100%;\n  max-width: 100%;\n  width: ",";\n  will-change: transform;\n  z-index: 4000;\n  transition: 300ms;\n  overflow-x: hidden;\n  transform: ",";\n\n  ","\n"])),l.nuDSColor("white"),(function(e){return e.width}),(function(e){return e.open?"translate3d(0, 0, 0)":y[e.direction]}),s.tablet768(f||(f=c.taggedTemplateLiteral(["\n    transform: ",";\n  "])),(function(e){return e.open?"translate3d(0, 0, 0)":y[e.desktopDirection]})));j.propTypes={desktopDirection:o.PropTypes.string.isRequired,direction:o.PropTypes.string.isRequired,open:o.PropTypes.bool.isRequired,width:o.PropTypes.string.isRequired},j.displayName="DrawerContainer";var h=c.styled.div(m||(m=c.taggedTemplateLiteral(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 3000;\n  overflow: hidden;\n\n  ",";\n\n  transform: translate3d(0, 0, 0);\n  background: ",";\n  transition: opacity 50ms ease-out 0s, transform 50ms ease-in-out 0s;\n"])),(function(e){return e.open?c.css(O||(O=c.taggedTemplateLiteral(["\n      opacity: 1;\n      pointer-events: auto;\n    "]))):c.css(b||(b=c.taggedTemplateLiteral(["\n    opacity: 0;\n    pointer-events: none;\n  "])))}),l.nuDSColor("black","defaultT70"));h.propTypes={open:o.PropTypes.bool.isRequired},h.displayName="BodyOverlay";var v,P,C=i.createContext({hideCloseButton:!1,toggleCloseButton:function(){}});var E=c.styled.header(P||(P=c.taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  width: 100%;\n  background: ",";\n  padding: 1rem;\n  flex-shrink: 0;\n\n  & > button {\n    height: 3rem;\n  }\n\n ","\n"])),l.nuDSColor("white"),(function(e){if(e.hideCloseButton)return c.css(v||(v=c.taggedTemplateLiteral(["\n    & > button {\n      display: none;\n    }\n  "])))}));E.propTypes={hideCloseButton:o.PropTypes.bool.isRequired},E.displayName="DrawerHeaderWrapper";var T=function(e){var t=e.children,n=e.className,r=i.useContext(C);return g.default.createElement(E,{className:n,hideCloseButton:r.hideCloseButton},t)};T.defaultProps={className:void 0},T.propTypes={children:o.PropTypes.node.isRequired,className:o.PropTypes.string};var w,S=function(e){var t=e.onClick,n=e.title,r=i.useRef(null);return i.useEffect((function(){r&&r.current&&r.current.focus()}),[]),g.default.createElement(u.default,{ref:r,variant:"basic",styleVariant:"primary",onClick:t,iconProps:{name:"x",title:n}})};S.defaultProps={title:"Close"},S.propTypes={onClick:o.PropTypes.func.isRequired,title:o.PropTypes.string};var N=c.styled.div(w||(w=c.taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  height: 100%;\n"])));N.displayName="DrawerContentWrapper";var R=function(e){var t=e.children,n=e.className;return g.default.createElement(N,{className:n},t)};R.defaultProps={className:void 0},R.propTypes={children:o.PropTypes.node.isRequired,className:o.PropTypes.string};var x=i.forwardRef((function(e,t){var n=e.open,o=e.onClose,c=e.children,s=e.direction,l=e.desktopDirection,u=e.id,p=e.lockScroll,d=e.width,f=e.className,O=i.useContext(C),b=i.useState(O.hideCloseButton),m=r.slicedToArray(b,2),y=m[0],v=m[1];i.useEffect((function(){var e,t=(e=o,function(t){27===t.keyCode&&e()});return n&&window.addEventListener("keydown",t,!1),function(){window.removeEventListener("keydown",t,!1)}}),[n,o]);var P=i.useCallback((function(e){"dialog"===e.target.getAttribute("role")&&o()}),[o]);return g.default.createElement(C.Provider,{value:{hideCloseButton:y,toggleCloseButton:function(){v(!y)}}},g.default.createElement(h,{ref:t,className:f,role:"dialog",onClick:P,open:n},g.default.createElement(j,{open:n,direction:s,desktopDirection:l,id:u,width:d},n&&c({DrawerHeader:T,DrawerCloseButton:S,DrawerContent:R}))),g.default.createElement(a.default,{lockScroll:p,open:n}))}));x.defaultProps={className:void 0,direction:"right",desktopDirection:"right",lockScroll:!0,width:"30rem"},x.propTypes={children:o.PropTypes.func.isRequired,className:o.PropTypes.string,desktopDirection:o.PropTypes.oneOf(["top","right","bottom"]),direction:o.PropTypes.oneOf(["top","right","bottom"]),id:o.PropTypes.string.isRequired,lockScroll:o.PropTypes.bool,onClose:o.PropTypes.func.isRequired,open:o.PropTypes.bool.isRequired,width:o.PropTypes.string},t.ESCAPE_KEY_CODE=27,t.default=x},COo4:function(e,t,n){"use strict";var r=n("fGyu");t.a=function(e,t){if(t<1)throw new Error("".concat(t," is not a valid partitionSize"));return e.reduce((function(e,n,i){var o=e[e.length-1];return i%t===0?[].concat(Object(r.a)(e),[[n]]):[].concat(Object(r.a)(e.slice(0,-1)),[[].concat(Object(r.a)(o),[n])])}),[])}},FN3h:function(e,t,n){"use strict";var r=n("17x9"),i=n.n(r),o=n("j/s1"),a=n("AEx+"),c=n.n(a),s=n("8HIL"),l={xs:{heading2:{fontSize:1.75,lineHeight:1.16},heading4:{fontSize:1.25,lineHeight:1.25}},md:{heading2:{fontSize:3,lineHeight:1.16},heading4:{fontSize:1.5,lineHeight:1.32}}},u={purple:"138, 5, 190",white:"255, 255, 255"},p=function(e,t){return Object(o.keyframes)(["to{background-position:300% 0,",";}"],Array.from(Array(e).keys()).map((function(e){return"0 calc(".concat(e," * 1em + ").concat(t/2,"px + 0.1em + ").concat(e," * ").concat(t,"px)")})).join(", "))},d=function(e){var t=e.fontSize,n=void 0===t?1:t,r=e.lineHeight,i=void 0===r?1.16:r,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"purple",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4,s=Math.floor(16*n*(i-1)),l=u[a];return Object(o.css)(["width:100%;height:calc(1em * "," + ","px * ",");font-size:","rem;margin-bottom:","px;background-image:linear-gradient( 100deg,rgba(",",0) 20%,rgba(",",0.5) 50%,rgba(",",0) 70% ),",";background-repeat:no-repeat;background-size:25% 300%,70% 0.8em,100% 0.8em,100% 0.8em,80% 0.8em;background-position:0,",";animation:"," 1s linear infinite;"],c,s,c,n,s,l,l,l,Array.from(Array(c).keys()).map((function(){return"linear-gradient(#ddd 0.8em, transparent 0)"})).join(", "),Array.from(Array(c).keys()).map((function(e){return"0 calc(".concat(e," * 1em + ").concat(s/2,"px + 0.1em + ").concat(e," * ").concat(s,"px)")})).join(", "),p(c,s))},f=Object(o.default)(c.a).withConfig({displayName:"SkeletonForTypography",componentId:"in8y7q-0"})(["",""],(function(e){var t,n;return Object(s.breakpointsMedia)({xs:d(l.xs[e.$variant],e.$highlightColor,(null===(t=e.$lines)||void 0===t?void 0:t.xs)||e.$lines),md:d(l.md[e.$variant],e.$highlightColor,(null===(n=e.$lines)||void 0===n?void 0:n.md)||e.$lines)})}));f.propTypes={highlightColor:i.a.string};t.a=f},PvvV:function(e,t,n){"use strict";var r=n("zjfJ"),i=(n("ERkP"),n("pEv3")),o=n("bCbD"),a=n("hNT8"),c=n.n(a),s=n("8Pvc"),l=n.n(s),u=n("AEx+"),p=n.n(u),d=n("FN3h"),f=n("jg1C"),O=function(){return Object(f.jsx)(p.a,{padding:"8x",children:Object(f.jsx)(d.a,{$variant:"heading2",$lines:4,$highlightColor:"white",marginBottom:{xs:"3x",lg:"2x"},maxWidth:"80%"})})},b=c()((function(){return Promise.all([n.e(6),n.e(7),n.e(8),n.e(13),n.e(103)]).then(n.bind(null,"87UH"))}),{ssr:!1,loading:O,loadableGenerated:{webpack:function(){return["87UH"]},modules:["../patterns/ProspectRegistrationDrawer/ProspectRegistrationDrawer.js -> patterns/CompanyProspectRegistrationForm/CompanyProspectRegistrationForm"]}});function m(e){var t=e.permanent,n=Object(o.b)(),r=n.isDrawerOpen,i=n.closeDrawer,a=function(e){(e||!e&&!t)&&i()};return Object(f.jsx)(l.a,{id:"prospect-registration-drawer",direction:"bottom",open:r,onClose:a,children:function(e){var t=e.DrawerHeader,n=e.DrawerCloseButton,i=e.DrawerContent;return Object(f.jsxs)(i,{children:[Object(f.jsx)(t,{children:Object(f.jsx)(n,{onClick:function(){a(!0)}})}),r&&Object(f.jsx)(b,{})]})}})}m.defaultProps={permanent:!1};var g=m;function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(e){return function(t){return Object(f.jsxs)(o.a,{prospectTypeKey:i.a,children:[Object(f.jsx)(e,j({},t)),Object(f.jsx)(g,{permanent:!0})]})}}},QL4c:function(e,t,n){"use strict";n.d(t,"b",(function(){return h}));var r=n("zjfJ"),i=n("zygG"),o=(n("ERkP"),n("sbnS")),a=n.n(o),c=n("vpUC"),s=n.n(c),l=n("01NQ"),u=n.n(l),p=n("+UJI"),d=n("xBdO"),f=n("8rrz"),O=n("jg1C");function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var m=["xs","sm","md","lg","xl"],g=a.a.breakpoints,y=function(e){return function(e){return!!e.match(/https?:\/\//)}(e)?e:Object(f.a)(e,"webp")},j=function(e){var t=e.src,n=e.srcSet;if(t)return Object(O.jsx)(s.a,{children:Object(O.jsx)("link",{rel:"preload",as:"image",href:y(t)})});var o=m.filter((function(e){return!!n[e]})),a=o.reduce((function(e,t,n){var r=[],i=g[o[n+1]];return r.push("(min-width:".concat(g[t],"px)")),i&&r.push("(max-width:".concat(i-.1,"px)")),e[t]=r.join(" and "),e}),{}),c=o.reduce((function(e,t){var r=n[t];if("string"===typeof r)e.push({href:y(r),media:a[t]});else{var o=Object.entries(r).map((function(e){var t=Object(i.a)(e,2),n=t[0],r=t[1];return"".concat(y(r)," ").concat(n)}));e.push({imagesrcset:o.join(","),media:a[t]})}return e}),[]);return Object(O.jsx)(s.a,{children:c.map((function(e){return Object(O.jsx)("link",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({rel:"preload",as:"image"},e),e.media)}))})};t.a=j;var h=u()(d.b,p.b);j.defaultProps={src:void 0,srcSet:void 0}},WiRQ:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("zjfJ");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var a={imageMobile:"xs",imageTablet:"md",imageDesktop:"lg"};function c(e){return Object.entries(e[0]).reduce((function(e,t){var n,i=a[t[0]],c=null===(n=t[1])||void 0===n?void 0:n.url;return void 0===c?e:o(o({},e),{},Object(r.a)({},i,{"1x":c,"2x":c,"3x":c}))}),{})}},Xskg:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i}));var r={prospectType:"COMMON.APPLICATION.ERROR_MESSAGES.PROSPECT_TYPE",name:"COMMON.APPLICATION.ERROR_MESSAGES.NAME",cpf:"COMMON.APPLICATION.ERROR_MESSAGES.CPF",cnpj:"COMMON.APPLICATION.ERROR_MESSAGES.CNPJ",phone:"COMMON.APPLICATION.ERROR_MESSAGES.PHONE",email:"COMMON.APPLICATION.ERROR_MESSAGES.EMAIL",emailConfirmation:"COMMON.APPLICATION.ERROR_MESSAGES.EMAIL_CONFIRMATION",accepted:"COMMON.APPLICATION.ERROR_MESSAGES.PRIVACY_POLICY",generic:"COMMON.APPLICATION.ERROR_MESSAGES.GENERIC"},i={email:{label:"COMMON.APPLICATION.LABEL.EMAIL",type:"email",validations:{required:r.email,email:r.email}},emailConfirmation:{type:"email",label:"COMMON.APPLICATION.LABEL.EMAIL_CONFIRMATION",validations:{required:r.email,email:r.email,equalsTo:{errorMsg:r.emailConfirmation,params:{target:"email"}}}},name:{type:"text",label:"COMMON.APPLICATION.LABEL.NAME",validations:{required:r.name,personName:r.name}},cpf:{type:"tel",label:"COMMON.APPLICATION.LABEL.CPF",validations:{required:r.cpf,cpf:r.cpf}},cnpj:{type:"tel",label:"COMMON.APPLICATION.LABEL.CNPJ",validations:{required:r.cnpj,cnpj:r.cnpj}},phone:{type:"tel",label:"COMMON.APPLICATION.LABEL.PHONE",validations:{required:r.phone,phone:r.phone}}}},hdzV:function(e,t,n){"use strict";var r=n("17x9"),i=n.n(r),o=n("j/s1").default.div.withConfig({displayName:"style__SafeAnchorOffset",componentId:"chnne5-0"})(["display:block;position:relative;visibility:hidden;top:",";"],(function(e){return e.offsetTop}));o.defaultProps={offsetTop:"-6.25rem"},o.propTypes={id:i.a.string.isRequired,offsetTop:i.a.string};t.a=o},ieOr:function(e,t,n){"use strict";var r=n("zjfJ"),i=n("ERkP"),o=n.n(i),a=n("dDsW"),c=n("iY3x"),s=n.n(c),l=n("2F3a"),u=n.n(l),p=n("C+fP"),d=n.n(p),f=n("DzHN"),O=n("pEv3"),b=n("6z0O"),m=n("bCbD"),g=n("8+MO"),y=n("j/s1"),j=n("V0VH"),h=n("8HIL"),v=y.default.div.withConfig({displayName:"Form__FormContent",componentId:"sc-1j9cy3k-0"})(["position:relative;padding:1.5rem;border-radius:1rem;background-color:",";max-width:20.625rem;margin:auto;",""],Object(j.nuDSColor)("white"),Object(h.breakpointsMedia)({md:Object(y.css)(["margin-right:0;"])}));v.displayName="FormContent";var P=n("jg1C");function C(e){var t=e.formSubmitButtonLabel,n=e.formTitle,i=e.initialField,o=e.prospectTypeKey,c=Object(a.a)().formatMessage,l=Object(m.b)().openDrawer,p=i.toUpperCase(),y=Object(g.a)(i),j=Object(O.j)(o),h=function(e){e.target.value&&Object(b.a)({prospectType:j.type,field:"".concat(i,"_short")})};return Object(P.jsx)(P.Fragment,{children:Object(P.jsx)(f.a,{children:Object(P.jsx)(f.a.Step,{noValidate:!0,onSubmit:function(e){var t=e.values,n=e.setSubmitting;Object(b.c)({prospectType:j.type}),l({initialField:i,initialFieldValue:t[i]}),n(!1)},initialValues:Object(r.a)({},i,""),enableReinitialize:!0,children:function(e){var r=e.isDisabled,o=e.isSubmitting;return Object(P.jsxs)(v,{id:"short-form",children:[Object(P.jsx)(d.a,{tag:"h3",variant:"heading4",color:"black.default",marginBottom:"8x",intlKey:n}),Object(P.jsx)(u.a,{id:"field-".concat(i),name:i,type:y.type,label:c({id:"COMMON.APPLICATION.LONG_LABEL.".concat(p)}),syncValidations:Object(g.b)(y.validations,c),onBlur:h}),Object(P.jsx)(s.a,{type:"submit",variant:"contained",styleVariant:"primary",extended:!0,disabled:r||o,intlKey:t,iconProps:{name:"arrow-right"}})]})}})})})}C.defaultProps={formTitle:"SHORT_FORM.MULTI_PRODUCT.FORM_TITLE",formSubmitButtonLabel:"COMMON.WIDGET.SHORT_FORM.CONTINUE_BUTTON",initialField:"cpf",prospectTypeKey:O.f};t.a=o.a.memo(C)},sbnS:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n("8HIL");var r=n("HZt4");n("41F8"),n("PdLh"),n("blh4"),n("j/s1"),n("ERkP"),n("lgfb"),n("uIIz"),n("Zzc8"),n("veNL"),n("P6bS"),n("wUAy"),n("VRT8"),t.default=r.nuDSTheme,t.gutter=r.gutter,t.margin=r.margin,t.typography=r.typography,t.zIndexes=r.zIndexes},tlX3:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("zygG"),i=n("ERkP"),o=n("iK9c"),a={intersectionOptions:{triggerOnce:!1,threshold:.1}};function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.a,n=Object(i.useState)(!1),c=n[0],s=n[1],l=t(e),u=Object(r.a)(l,3),p=u[0],d=u[1],f=u[2];return Object(i.useEffect)((function(){s(Boolean(!d&&f))}),[d,f]),[p,c,f]}}}]);
//# sourceMappingURL=8b428a8f8b491e19df25c6b2ee95b45618cd1a81.0c4de2358c798625d4b0.js.map