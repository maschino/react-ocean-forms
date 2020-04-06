(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{293:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var r=a(1),n=a(9),i=(a(0),a(307)),o={id:"usevalidation.ibasicvalidationstate",title:"IBasicValidationState",sidebar_label:"IBasicValidationState"},c={id:"api/react-ocean-forms/interfaces/usevalidation.ibasicvalidationstate",title:"IBasicValidationState",description:"## Hierarchy",source:"@site/docs/api/react-ocean-forms/interfaces/usevalidation.ibasicvalidationstate.md",permalink:"/react-ocean-forms/docs/api/react-ocean-forms/interfaces/usevalidation.ibasicvalidationstate",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/react-ocean-forms/interfaces/usevalidation.ibasicvalidationstate.md",sidebar_label:"IBasicValidationState",sidebar:"docs",previous:{title:"IValueMeta",permalink:"/react-ocean-forms/docs/api/react-ocean-forms/interfaces/usefield.ivaluemeta"},next:{title:"IUseValidationArgs",permalink:"/react-ocean-forms/docs/api/react-ocean-forms/interfaces/usevalidation.iusevalidationargs"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"error",id:"error",children:[]},{value:"isValidating",id:"isvalidating",children:[]},{value:"valid",id:"valid",children:[]}]}],s={rightToc:l};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"IBasicValidationState")),Object(i.b)("p",{parentName:"li"},"\u21b3 ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/react-ocean-forms/docs/api/react-ocean-forms/interfaces/usevalidation.ivalidationstate"}),"IValidationState")))),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("h3",{id:"error"},"error"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"error"),": ",Object(i.b)("em",{parentName:"p"},Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"/react-ocean-forms/docs/api/react-ocean-forms/modules/validators#tfielderrors"}),"TFieldErrors"))),Object(i.b)("p",null,"Contains any errors if available"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"isvalidating"},"isValidating"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"isValidating"),": ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"True, if the field is currently validating\n(asynchronous validation running in background)"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"valid"},"valid"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"valid"),": ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"True, if all validators report a valid state"))}p.isMDXComponent=!0},307:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return f}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),p=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},b=function(e){var t=p(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(a),u=r,f=b["".concat(o,".").concat(u)]||b[u]||d[u]||i;return a?n.a.createElement(f,c({ref:t},s,{components:a})):n.a.createElement(f,c({ref:t},s))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=a[s];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);