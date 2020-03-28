(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{186:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(9),o=(n(0),n(296)),c={id:"useformeventlistener",title:"useFormEventListener",sidebar_label:"useFormEventListener"},i={id:"api/react-ocean-forms/modules/useformeventlistener",title:"useFormEventListener",description:"Copyright (c) 2018-present, Umweltbundesamt GmbH",source:"@site/docs/api/react-ocean-forms/modules/useformeventlistener.md",permalink:"/react-ocean-forms/docs/api/react-ocean-forms/modules/useformeventlistener",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/react-ocean-forms/modules/useformeventlistener.md",sidebar_label:"useFormEventListener",sidebar:"docs",previous:{title:"useFormContext",permalink:"/react-ocean-forms/docs/api/react-ocean-forms/modules/useformcontext"},next:{title:"useFormText",permalink:"/react-ocean-forms/docs/api/react-ocean-forms/modules/useformtext"}},l=[{value:"Index",id:"index",children:[{value:"Functions",id:"functions",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"useFormEventListener",id:"useformeventlistener",children:[]}]}],s={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Copyright (c) 2018-present, Umweltbundesamt GmbH"),Object(o.b)("p",null,"This source code is licensed under the MIT license found in the\nLICENSE file in the root directory of this source tree."),Object(o.b)("h2",{id:"index"},"Index"),Object(o.b)("h3",{id:"functions"},"Functions"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/react-ocean-forms/docs/api/react-ocean-forms/modules/useformeventlistener#useformeventlistener"}),"useFormEventListener"))),Object(o.b)("h2",{id:"functions-1"},"Functions"),Object(o.b)("h3",{id:"useformeventlistener"},"useFormEventListener"),Object(o.b)("p",null,"\u25b8 ",Object(o.b)("strong",{parentName:"p"},"useFormEventListener"),"(",Object(o.b)("inlineCode",{parentName:"p"},"id"),": string, ",Object(o.b)("inlineCode",{parentName:"p"},"callback"),": TFormEventListener): ",Object(o.b)("em",{parentName:"p"},"void")),Object(o.b)("p",null,"Hook for registering listeners for form events. Will\nautomatically unregister the listener on unmount."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameters:")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"id")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Unique listener id")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"callback")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"TFormEventListener"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Callback @see TFormEventListener")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," ",Object(o.b)("em",{parentName:"p"},"void")))}u.isMDXComponent=!0},296:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),p=r,d=b["".concat(c,".").concat(p)]||b[p]||m[p]||o;return n?a.a.createElement(d,i({ref:t},s,{components:n})):a.a.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);