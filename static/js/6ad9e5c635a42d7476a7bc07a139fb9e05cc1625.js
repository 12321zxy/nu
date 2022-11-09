"require"in window&&require("discourse/lib/theme-settings-store").registerSettings(5,{Hamburger_links:"Privacidade,/privacy,f"}),"define"in window&&define("discourse/theme-5/initializers/theme-field-18-common-html-script-1",["exports","discourse/lib/plugin-api"],(function(e,i){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const t=require("discourse/lib/theme-settings-store").getObjectForTheme(5)
var r={name:"theme-field-18-common-html-script-1",after:"inject-objects",initialize(){(0,i.withPluginApi)("0.8.18",(e=>{(t.Hamburger_links||"").split("|").forEach((i=>{let[t,r,s,n]=(i||"").split(","),a="custom-hamburger-link ".concat(t.replace(/\s+/g,"-").toLowerCase())
s="f"===s?"footerLinks":"generalLinks",n="blank"===n?"_blank":"",e.decorateWidget("hamburger-menu:".concat(s),(()=>({href:r,rawLabel:t,className:a,attributes:{target:n}})))}))}))}}
e.default=r}))

//# sourceMappingURL=6ad9e5c635a42d7476a7bc07a139fb9e05cc1625.map?__ws=comunidade.nubank.com.br
