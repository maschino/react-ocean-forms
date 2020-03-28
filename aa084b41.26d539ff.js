(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{236:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return m}));var n=r(1),o=r(9),a=(r(0),r(296)),c={id:"withform",title:"withForm",sidebar_label:"withForm"},i={id:"api/react-ocean-forms/modules/withform",title:"withForm",description:"Copyright (c) 2018-present, Umweltbundesamt GmbH",source:"@site/docs/api/react-ocean-forms/modules/withform.md",permalink:"/react-ocean-forms/docs/api/react-ocean-forms/modules/withform",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/react-ocean-forms/modules/withform.md",sidebar_label:"withForm",sidebar:"docs",previous:{title:"withField",permalink:"/react-ocean-forms/docs/api/react-ocean-forms/modules/withfield"},next:{title:"IFieldErrorProps",permalink:"/react-ocean-forms/docs/api/react-ocean-forms/interfaces/fielderror.ifielderrorprops"}},p=[{value:"Index",id:"index",children:[{value:"Interfaces",id:"interfaces",children:[]},{value:"Functions",id:"functions",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"<code>Const</code> withForm",id:"const-withform",children:[]}]}],b={rightToc:p};function m(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Copyright (c) 2018-present, Umweltbundesamt GmbH"),Object(a.b)("p",null,"This source code is licensed under the MIT license found in the\nLICENSE file in the root directory of this source tree."),Object(a.b)("h2",{id:"index"},"Index"),Object(a.b)("h3",{id:"interfaces"},"Interfaces"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/react-ocean-forms/docs/api/react-ocean-forms/interfaces/withform.iformcontextprops"}),"IFormContextProps"))),Object(a.b)("h3",{id:"functions"},"Functions"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/react-ocean-forms/docs/api/react-ocean-forms/modules/withform#const-withform"}),"withForm"))),Object(a.b)("h2",{id:"functions-1"},"Functions"),Object(a.b)("h3",{id:"const-withform"},Object(a.b)("inlineCode",{parentName:"h3"},"Const")," withForm"),Object(a.b)("p",null,"\u25b8 ",Object(a.b)("strong",{parentName:"p"},"withForm"),"<",Object(a.b)("strong",{parentName:"p"},"TComp"),", ",Object(a.b)("strong",{parentName:"p"},"TProps"),">(",Object(a.b)("inlineCode",{parentName:"p"},"Component"),": TComp): ",Object(a.b)("em",{parentName:"p"},"React.ComponentType\u2039FormComponentProps\u2039TComp\u203a\u203a")),Object(a.b)("p",null,"High order component for consuming the form context"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"deprecated"))," Deprecated in favour of ",Object(a.b)("inlineCode",{parentName:"p"},"useFormContext")," hook"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Type parameters:")),Object(a.b)("p",null,"\u25aa ",Object(a.b)("strong",{parentName:"p"},"TComp"),": ",Object(a.b)("em",{parentName:"p"},"React.ComponentType\u2039TProps\u203a")),Object(a.b)("p",null,"\u25aa ",Object(a.b)("strong",{parentName:"p"},"TProps"),": ",Object(a.b)("em",{parentName:"p"},Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"/react-ocean-forms/docs/api/react-ocean-forms/interfaces/withform.iformcontextprops"}),"IFormContextProps"))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Parameters:")),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"Component")),Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"TComp")))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Returns:")," ",Object(a.b)("em",{parentName:"p"},"React.ComponentType\u2039FormComponentProps\u2039TComp\u203a\u203a")))}m.isMDXComponent=!0},296:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var b=o.a.createContext({}),m=function(e){var t=o.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},l=function(e){var t=m(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),l=m(r),u=n,f=l["".concat(c,".").concat(u)]||l[u]||s[u]||a;return r?o.a.createElement(f,i({ref:t},b,{components:r})):o.a.createElement(f,i({ref:t},b))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var b=2;b<a;b++)c[b]=r[b];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);