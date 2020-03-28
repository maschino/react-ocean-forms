(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{160:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return m})),n.d(t,"default",(function(){return l}));var r=n(1),a=n(9),o=(n(0),n(301)),c={title:"ValidationSummary",sidebar_label:"ValidationSummary"},i={id:"components/react-ocean-forms/ValidationSummary",title:"ValidationSummary",description:"## Examples",source:"@site/docs/components/react-ocean-forms/ValidationSummary.md",permalink:"/react-ocean-forms/docs/components/react-ocean-forms/ValidationSummary",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/components/react-ocean-forms/ValidationSummary.md",sidebar_label:"ValidationSummary",sidebar:"docs",previous:{title:"FieldGroup",permalink:"/react-ocean-forms/docs/components/react-ocean-forms/FieldGroup"},next:{title:"Input",permalink:"/react-ocean-forms/docs/components/react-ocean-forms/Input"}},m=[{value:"Examples",id:"examples",children:[{value:"Showcase",id:"showcase",children:[]}]},{value:"API Reference",id:"api-reference",children:[]}],u={rightToc:m};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("h3",{id:"showcase"},"Showcase"),Object(o.b)("p",null,"Showcase of the validation summary. Click on submit to display the summary."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'import { Form, Input, ValidationSummary, validators } from \'react-ocean-forms\';\n\nfunction Example({ logMessage }) {\n  return (\n    <Form className="demo">\n      <ValidationSummary id="summary" />\n\n      <Input name="input1" label="Example input 1" validators={[validators.required]} />\n\n      <Input name="input2" label="Example input 2" validators={[validators.required]} />\n\n      <button type="submit">Submit</button>\n      <button type="reset">Reset</button>\n    </Form>\n  );\n}\n\n<Example />;\n')),Object(o.b)("h2",{id:"api-reference"},"API Reference"),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../../api/react-ocean-forms/modules/validationsummary#const-validationsummary"}),"ValidationSummary API reference")," and ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../../api/react-ocean-forms/interfaces/validationsummary.ivalidationsummaryprops"}),"prop types"),"."))}l.isMDXComponent=!0},301:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=m(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,f=p["".concat(c,".").concat(d)]||p[d]||s[d]||o;return n?a.a.createElement(f,i({ref:t},u,{components:n})):a.a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);