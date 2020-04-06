(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{168:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(1),a=r(9),o=(r(0),r(307)),c={id:"formtext",title:"FormText",sidebar_label:"FormText"},i={id:"api/react-ocean-forms/modules/formtext",title:"FormText",description:"Copyright (c) 2018-present, Umweltbundesamt GmbH",source:"@site/docs/api/react-ocean-forms/modules/formtext.md",permalink:"/react-ocean-forms/docs/api/react-ocean-forms/modules/formtext",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/react-ocean-forms/modules/formtext.md",sidebar_label:"FormText",sidebar:"docs",previous:{title:"FormContext",permalink:"/react-ocean-forms/docs/api/react-ocean-forms/modules/formcontext"},next:{title:"Input",permalink:"/react-ocean-forms/docs/api/react-ocean-forms/modules/input"}},l=[{value:"Index",id:"index",children:[{value:"Interfaces",id:"interfaces",children:[]},{value:"Functions",id:"functions",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"<code>Const</code> FormText",id:"const-formtext",children:[]}]}],b={rightToc:l};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Copyright (c) 2018-present, Umweltbundesamt GmbH"),Object(o.b)("p",null,"This source code is licensed under the MIT license found in the\nLICENSE file in the root directory of this source tree."),Object(o.b)("h2",{id:"index"},"Index"),Object(o.b)("h3",{id:"interfaces"},"Interfaces"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/react-ocean-forms/docs/api/react-ocean-forms/interfaces/formtext.iformtextprops"}),"IFormTextProps"))),Object(o.b)("h3",{id:"functions"},"Functions"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/react-ocean-forms/docs/api/react-ocean-forms/modules/formtext#const-formtext"}),"FormText"))),Object(o.b)("h2",{id:"functions-1"},"Functions"),Object(o.b)("h3",{id:"const-formtext"},Object(o.b)("inlineCode",{parentName:"h3"},"Const")," FormText"),Object(o.b)("p",null,"\u25b8 ",Object(o.b)("strong",{parentName:"p"},"FormText"),"(",Object(o.b)("inlineCode",{parentName:"p"},"__namedParameters"),": object): ",Object(o.b)("em",{parentName:"p"},"null | Element\u2039\u203a")),Object(o.b)("p",null,"Wrapper for text output. It will use the Form.stringFormatter function to\noutput the message passed through the props. Best practice for custom input\ncomponent development is to pass every text output through the stringFormatter.\nThis enables the user of the form to add the react-ocean-forms-react-intl package\nand get i18n support out of the box."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameters:")),Object(o.b)("p",null,"\u25aa ",Object(o.b)("strong",{parentName:"p"},"__namedParameters"),": ",Object(o.b)("em",{parentName:"p"},"object")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"text")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"null ","|"," string")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"values")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"undefined ","|"," ",Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/react-ocean-forms/docs/api/react-ocean-forms/interfaces/stringformatter.imessagevalues"}),"IMessageValues"))))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," ",Object(o.b)("em",{parentName:"p"},"null | Element\u2039\u203a")))}s.isMDXComponent=!0},307:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},p=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(r),m=n,d=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return r?a.a.createElement(d,i({ref:t},b,{components:r})):a.a.createElement(d,i({ref:t},b))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var b=2;b<o;b++)c[b]=r[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);