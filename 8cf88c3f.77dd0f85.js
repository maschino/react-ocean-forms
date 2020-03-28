(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{221:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(1),r=n(9),l=(n(0),n(296)),o={id:"form.iformprops",title:"IFormProps",sidebar_label:"IFormProps"},i={id:"api/react-ocean-forms/interfaces/form.iformprops",title:"IFormProps",description:"Props for the Form component",source:"@site/docs/api/react-ocean-forms/interfaces/form.iformprops.md",permalink:"/react-ocean-forms/docs/api/react-ocean-forms/interfaces/form.iformprops",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/react-ocean-forms/interfaces/form.iformprops.md",sidebar_label:"IFormProps",sidebar:"docs",previous:{title:"IFieldLineProps",permalink:"/react-ocean-forms/docs/api/react-ocean-forms/interfaces/fieldline.ifieldlineprops"},next:{title:"IFormButtonProps",permalink:"/react-ocean-forms/docs/api/react-ocean-forms/interfaces/formbutton.iformbuttonprops"}},b=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"<code>Optional</code> asyncValidateOnChange",id:"optional-asyncvalidateonchange",children:[]},{value:"<code>Optional</code> asyncValidationWait",id:"optional-asyncvalidationwait",children:[]},{value:"<code>Optional</code> busy",id:"optional-busy",children:[]},{value:"<code>Optional</code> className",id:"optional-classname",children:[]},{value:"<code>Optional</code> defaultValues",id:"optional-defaultvalues",children:[]},{value:"<code>Optional</code> disabled",id:"optional-disabled",children:[]},{value:"<code>Optional</code> formatString",id:"optional-formatstring",children:[]},{value:"<code>Optional</code> plaintext",id:"optional-plaintext",children:[]},{value:"<code>Optional</code> resetOnSubmit",id:"optional-resetonsubmit",children:[]},{value:"<code>Optional</code> values",id:"optional-values",children:[]}]},{value:"Methods",id:"methods",children:[{value:"<code>Optional</code> onReset",id:"optional-onreset",children:[]},{value:"<code>Optional</code> onSubmit",id:"optional-onsubmit",children:[]},{value:"<code>Optional</code> onValidate",id:"optional-onvalidate",children:[]}]}],c={rightToc:b};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Props for the Form component"),Object(l.b)("h2",{id:"type-parameters"},"Type parameters"),Object(l.b)("p",null,"\u25aa ",Object(l.b)("strong",{parentName:"p"},"TFieldValues")),Object(l.b)("p",null,"\u25aa ",Object(l.b)("strong",{parentName:"p"},"TSubmitArgs")),Object(l.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"IFormProps"))),Object(l.b)("h2",{id:"properties"},"Properties"),Object(l.b)("h3",{id:"optional-asyncvalidateonchange"},Object(l.b)("inlineCode",{parentName:"h3"},"Optional")," asyncValidateOnChange"),Object(l.b)("p",null,"\u2022 ",Object(l.b)("strong",{parentName:"p"},"asyncValidateOnChange"),"? : ",Object(l.b)("em",{parentName:"p"},"undefined | false | true")),Object(l.b)("p",null,"If set to true the form will trigger asynchronous validation on\nFields whenever they change (e.g. on key press). Default behaviour\nis that the fields will only async validate when they loose focus.\nCan be overriden per field."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"default"))," false"),Object(l.b)("hr",null),Object(l.b)("h3",{id:"optional-asyncvalidationwait"},Object(l.b)("inlineCode",{parentName:"h3"},"Optional")," asyncValidationWait"),Object(l.b)("p",null,"\u2022 ",Object(l.b)("strong",{parentName:"p"},"asyncValidationWait"),"? : ",Object(l.b)("em",{parentName:"p"},"undefined | number")),Object(l.b)("p",null,"Configures the wait time before the async validators will be called.\nPer default the form will call the async validators only 400ms after\nthe last value change. Can be overriden per field."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"default"))," 400"),Object(l.b)("hr",null),Object(l.b)("h3",{id:"optional-busy"},Object(l.b)("inlineCode",{parentName:"h3"},"Optional")," busy"),Object(l.b)("p",null,"\u2022 ",Object(l.b)("strong",{parentName:"p"},"busy"),"? : ",Object(l.b)("em",{parentName:"p"},"undefined | true")),Object(l.b)("p",null,"If set to true, the form will be forced into a busy state and thus disabling\nany form buttons."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"default"))," false"),Object(l.b)("hr",null),Object(l.b)("h3",{id:"optional-classname"},Object(l.b)("inlineCode",{parentName:"h3"},"Optional")," className"),Object(l.b)("p",null,"\u2022 ",Object(l.b)("strong",{parentName:"p"},"className"),"? : ",Object(l.b)("em",{parentName:"p"},"undefined | string")),Object(l.b)("p",null,"Sets the className of the html form."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"optional-defaultvalues"},Object(l.b)("inlineCode",{parentName:"h3"},"Optional")," defaultValues"),Object(l.b)("p",null,"\u2022 ",Object(l.b)("strong",{parentName:"p"},"defaultValues"),"? : ",Object(l.b)("em",{parentName:"p"},"Partial\u2039TFieldValues\u203a")),Object(l.b)("p",null,"Contains the default values of the form. Those values will be\nput into the according fields when the form initializes. Those\nvalues will be put into the according fields when the form initializes."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"optional-disabled"},Object(l.b)("inlineCode",{parentName:"h3"},"Optional")," disabled"),Object(l.b)("p",null,"\u2022 ",Object(l.b)("strong",{parentName:"p"},"disabled"),"? : ",Object(l.b)("em",{parentName:"p"},"undefined | false | true")),Object(l.b)("p",null,"If set to true the form will disable all Fields and FormButtons."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"default"))," false"),Object(l.b)("hr",null),Object(l.b)("h3",{id:"optional-formatstring"},Object(l.b)("inlineCode",{parentName:"h3"},"Optional")," formatString"),Object(l.b)("p",null,"\u2022 ",Object(l.b)("strong",{parentName:"p"},"formatString"),"? : ",Object(l.b)("em",{parentName:"p"},Object(l.b)("a",Object(a.a)({parentName:"em"},{href:"/react-ocean-forms/docs/api/react-ocean-forms/modules/stringformatter#tstringformatter"}),"TSTringFormatter"))),Object(l.b)("p",null,"If set every text output will be put through this function.\nPer default an internal implementation is used."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"optional-plaintext"},Object(l.b)("inlineCode",{parentName:"h3"},"Optional")," plaintext"),Object(l.b)("p",null,"\u2022 ",Object(l.b)("strong",{parentName:"p"},"plaintext"),"? : ",Object(l.b)("em",{parentName:"p"},"undefined | false | true")),Object(l.b)("p",null,"If set to true, all the fields will display only text instead of an\ninput element. This is useful to re-use Fields in a check page."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"default"))," false"),Object(l.b)("hr",null),Object(l.b)("h3",{id:"optional-resetonsubmit"},Object(l.b)("inlineCode",{parentName:"h3"},"Optional")," resetOnSubmit"),Object(l.b)("p",null,"\u2022 ",Object(l.b)("strong",{parentName:"p"},"resetOnSubmit"),"? : ",Object(l.b)("em",{parentName:"p"},"undefined | false | true")),Object(l.b)("p",null,"If set to true, all fields will be reset on an successful form submit"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"default"))," false"),Object(l.b)("hr",null),Object(l.b)("h3",{id:"optional-values"},Object(l.b)("inlineCode",{parentName:"h3"},"Optional")," values"),Object(l.b)("p",null,"\u2022 ",Object(l.b)("strong",{parentName:"p"},"values"),"? : ",Object(l.b)("em",{parentName:"p"},"Partial\u2039TFieldValues\u203a")),Object(l.b)("p",null,"Contains the values of the form. Changing this property will\nupdate all Field values, overwriting their default values but also\nany value the user put in."),Object(l.b)("h2",{id:"methods"},"Methods"),Object(l.b)("h3",{id:"optional-onreset"},Object(l.b)("inlineCode",{parentName:"h3"},"Optional")," onReset"),Object(l.b)("p",null,"\u25b8 ",Object(l.b)("strong",{parentName:"p"},"onReset"),"(): ",Object(l.b)("em",{parentName:"p"},"void")),Object(l.b)("p",null,"Triggered when the form has been resetted by the user."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Returns:")," ",Object(l.b)("em",{parentName:"p"},"void")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"optional-onsubmit"},Object(l.b)("inlineCode",{parentName:"h3"},"Optional")," onSubmit"),Object(l.b)("p",null,"\u25b8 ",Object(l.b)("strong",{parentName:"p"},"onSubmit"),"(",Object(l.b)("inlineCode",{parentName:"p"},"values"),": TFieldValues, ",Object(l.b)("inlineCode",{parentName:"p"},"submitArgs?"),": TSubmitArgs): ",Object(l.b)("em",{parentName:"p"},"Promise\u2039void\u203a | void")),Object(l.b)("p",null,"Triggered when the form has been validated successfully and is ready to be submitted.\nIf the passed function is an async function / returns a promise, then the form context\nwill stay in a busy state until the function resolves."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"values")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"TFieldValues"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Contains the form values. The name of the fields are used as property names for the values object. FieldGroups result in a nested object. ",Object(l.b)("br",null))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"submitArgs?")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"TSubmitArgs"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"By default undefined. Can be set by FormButton or any other manual way of calling the submit method of the form context.")))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Returns:")," ",Object(l.b)("em",{parentName:"p"},"Promise\u2039void\u203a | void")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"optional-onvalidate"},Object(l.b)("inlineCode",{parentName:"h3"},"Optional")," onValidate"),Object(l.b)("p",null,"\u25b8 ",Object(l.b)("strong",{parentName:"p"},"onValidate"),"(",Object(l.b)("inlineCode",{parentName:"p"},"values"),": TFieldValues): ",Object(l.b)("em",{parentName:"p"},Object(l.b)("a",Object(a.a)({parentName:"em"},{href:"/react-ocean-forms/docs/api/react-ocean-forms/modules/form#tformvalidationresult"}),"TFormValidationResult"))),Object(l.b)("p",null,"Triggered after all field validations have been successfull. Provides the current\nvalues end expects an error object with the field names as properties and the errors\ninside those properties."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"returns:"))," should return null if the values are valid, otherwise an error object."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"values")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"TFieldValues"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Contains the form values. The name of the fields are used as property names for the values object. FieldGroups result in a nested object.")))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Returns:")," ",Object(l.b)("em",{parentName:"p"},Object(l.b)("a",Object(a.a)({parentName:"em"},{href:"/react-ocean-forms/docs/api/react-ocean-forms/modules/form#tformvalidationresult"}),"TFormValidationResult"))))}p.isMDXComponent=!0},296:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},s=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,m=s["".concat(o,".").concat(d)]||s[d]||u[d]||l;return n?r.a.createElement(m,i({ref:t},c,{components:n})):r.a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);