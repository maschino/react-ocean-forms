(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{188:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return p}));var n=a(1),r=a(9),i=(a(0),a(296)),l={id:"validationsummary.ivalidationsummaryprops",title:"IValidationSummaryProps",sidebar_label:"IValidationSummaryProps"},c={id:"api/react-ocean-forms/interfaces/validationsummary.ivalidationsummaryprops",title:"IValidationSummaryProps",description:"Properties for the ValidationSummary",source:"@site/docs/api/react-ocean-forms/interfaces/validationsummary.ivalidationsummaryprops.md",permalink:"/react-ocean-forms/docs/api/react-ocean-forms/interfaces/validationsummary.ivalidationsummaryprops",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/react-ocean-forms/interfaces/validationsummary.ivalidationsummaryprops.md",sidebar_label:"IValidationSummaryProps",sidebar:"docs",previous:{title:"IInputProps",permalink:"/react-ocean-forms/docs/api/react-ocean-forms/interfaces/input.iinputprops"},next:{title:"IMessageValues",permalink:"/react-ocean-forms/docs/api/react-ocean-forms/interfaces/stringformatter.imessagevalues"}},o=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"<code>Optional</code> disableFocusOnSubmit",id:"optional-disablefocusonsubmit",children:[]},{value:"id",id:"id",children:[]},{value:"<code>Optional</code> title",id:"optional-title",children:[]}]},{value:"Methods",id:"methods",children:[{value:"<code>Optional</code> render",id:"optional-render",children:[]},{value:"<code>Optional</code> renderFieldError",id:"optional-renderfielderror",children:[]}]}],b={rightToc:o};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Properties for the ValidationSummary"),Object(i.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"IValidationSummaryProps"))),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("h3",{id:"optional-disablefocusonsubmit"},Object(i.b)("inlineCode",{parentName:"h3"},"Optional")," disableFocusOnSubmit"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"disableFocusOnSubmit"),"? : ",Object(i.b)("em",{parentName:"p"},"undefined | false | true")),Object(i.b)("p",null,"If set to true the validation summary will stop automatically scrolling\nto itself when the user clicks on a submit button and the form is invalid."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"default"))," false"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"id"},"id"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"id"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Id of this input. Will be used as the unique identifier of the div.\n",Object(i.b)("strong",{parentName:"p"},"Must be unique form wide!")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"optional-title"},Object(i.b)("inlineCode",{parentName:"h3"},"Optional")," title"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"title"),"? : ",Object(i.b)("em",{parentName:"p"},"undefined | string")),Object(i.b)("p",null,"Message that will be used as the title, wrapped in a h4."),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"optional-render"},Object(i.b)("inlineCode",{parentName:"h3"},"Optional")," render"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"render"),"(",Object(i.b)("inlineCode",{parentName:"p"},"children"),": React.ReactNode): ",Object(i.b)("em",{parentName:"p"},"ReactElement | null")),Object(i.b)("p",null,"Optional function that can be used to customize the ValidationSummary rendering.\nNote: This function will only be called when there are errors to be displayed."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Parameters:")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"children")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"React.ReactNode"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Validation summary content (header + rendered field errors)")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"ReactElement | null")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"optional-renderfielderror"},Object(i.b)("inlineCode",{parentName:"h3"},"Optional")," renderFieldError"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"renderFieldError"),"(",Object(i.b)("inlineCode",{parentName:"p"},"id"),": string, ",Object(i.b)("inlineCode",{parentName:"p"},"fieldName"),": string, ",Object(i.b)("inlineCode",{parentName:"p"},"errors"),": React.ReactNode, ",Object(i.b)("inlineCode",{parentName:"p"},"linkCallback"),": React.MouseEventHandler): ",Object(i.b)("em",{parentName:"p"},"React.ReactNode")),Object(i.b)("p",null,"Optional function that can be used to customize the output of each error."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Parameters:")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"id")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Id of the failing field")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"fieldName")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Display name of the failing field")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"errors")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"React.ReactNode"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Object / Array of objects with the rendered error messages")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"linkCallback")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"React.MouseEventHandler"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Function that should be called on click, will focus on the input element.")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"React.ReactNode")))}p.isMDXComponent=!0},296:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return s}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},d=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,s=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return a?r.a.createElement(s,c({ref:t},b,{components:a})):r.a.createElement(s,c({ref:t},b))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var b=2;b<i;b++)l[b]=a[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);