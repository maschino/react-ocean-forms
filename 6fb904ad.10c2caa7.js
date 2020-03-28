(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{204:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(1),a=r(9),i=(r(0),r(296)),o={id:"usevalidation.ivalidationargs",title:"IValidationArgs",sidebar_label:"IValidationArgs"},c={id:"api/react-ocean-forms/interfaces/usevalidation.ivalidationargs",title:"IValidationArgs",description:"Arguments for the validate method",source:"@site/docs/api/react-ocean-forms/interfaces/usevalidation.ivalidationargs.md",permalink:"/react-ocean-forms/docs/api/react-ocean-forms/interfaces/usevalidation.ivalidationargs",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/react-ocean-forms/interfaces/usevalidation.ivalidationargs.md",sidebar_label:"IValidationArgs",sidebar:"docs",previous:{title:"IUseValidationResult",permalink:"/react-ocean-forms/docs/api/react-ocean-forms/interfaces/usevalidation.iusevalidationresult"},next:{title:"IValidationState",permalink:"/react-ocean-forms/docs/api/react-ocean-forms/interfaces/usevalidation.ivalidationstate"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"checkAsync",id:"checkasync",children:[]},{value:"immediateAsync",id:"immediateasync",children:[]}]}],s={rightToc:l};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Arguments for the validate method"),Object(i.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"IValidationArgs"))),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("h3",{id:"checkasync"},"checkAsync"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"checkAsync"),": ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"True, if the async validators should\nbe triggered as well, otherwise only\nthe sync validators are triggered"),Object(i.b)("p",null,"Default: true"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"immediateasync"},"immediateAsync"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"immediateAsync"),": ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"True, if the async validators should\nbe triggered without any delay"),Object(i.b)("p",null,"Default: false"))}u.isMDXComponent=!0},296:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},d=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(r),b=n,f=d["".concat(o,".").concat(b)]||d[b]||p[b]||i;return r?a.a.createElement(f,c({ref:t},s,{components:r})):a.a.createElement(f,c({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);