(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{257:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(1),a=r(9),o=(r(0),r(307)),i={id:"withfield.ifieldcomponentprops",title:"IFieldComponentProps",sidebar_label:"IFieldComponentProps"},c={id:"api/react-ocean-forms/interfaces/withfield.ifieldcomponentprops",title:"IFieldComponentProps",description:"Props for the input component of a Field",source:"@site/docs/api/react-ocean-forms/interfaces/withfield.ifieldcomponentprops.md",permalink:"/react-ocean-forms/docs/api/react-ocean-forms/interfaces/withfield.ifieldcomponentprops",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/react-ocean-forms/interfaces/withfield.ifieldcomponentprops.md",sidebar_label:"IFieldComponentProps",sidebar:"docs",previous:{title:"IFieldErrorObject",permalink:"/react-ocean-forms/docs/api/react-ocean-forms/interfaces/validators.ifielderrorobject"},next:{title:"IFormContextProps",permalink:"/react-ocean-forms/docs/api/react-ocean-forms/interfaces/withform.iformcontextprops"}},p=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"field",id:"field",children:[]},{value:"label",id:"label",children:[]},{value:"meta",id:"meta",children:[]}]}],l={rightToc:p};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Props for the input component of a Field"),Object(o.b)("h2",{id:"type-parameters"},"Type parameters"),Object(o.b)("p",null,"\u25aa ",Object(o.b)("strong",{parentName:"p"},"TFieldValue")),Object(o.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"IFieldComponentProps")),Object(o.b)("p",{parentName:"li"},"\u21b3 ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/react-ocean-forms/docs/api/react-ocean-forms/interfaces/fieldline.ifieldlineprops"}),"IFieldLineProps")))),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("h3",{id:"field"},"field"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"field"),": ",Object(o.b)("em",{parentName:"p"},Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"/react-ocean-forms/docs/api/react-ocean-forms/interfaces/usefield.ifieldcomponentfieldprops"}),"IFieldComponentFieldProps"),"\u2039TFieldValue\u203a")),Object(o.b)("p",null,"Props for the actual html input, designed\nto be passed as-is"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"label"},"label"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"label"),": ",Object(o.b)("em",{parentName:"p"},"string")),Object(o.b)("p",null,"Label (string or message id)"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"meta"},"meta"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"meta"),": ",Object(o.b)("em",{parentName:"p"},Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"/react-ocean-forms/docs/api/react-ocean-forms/interfaces/usefield.ifieldcomponentmeta"}),"IFieldComponentMeta"))),Object(o.b)("p",null,"Meta informations about the field state"))}s.isMDXComponent=!0},307:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},b=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=s(r),d=n,m=b["".concat(i,".").concat(d)]||b[d]||f[d]||o;return r?a.a.createElement(m,c({ref:t},l,{components:r})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);