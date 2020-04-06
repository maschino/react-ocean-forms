(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{183:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return c})),r.d(n,"metadata",(function(){return i})),r.d(n,"rightToc",(function(){return p})),r.d(n,"default",(function(){return u}));var t=r(1),o=r(9),a=(r(0),r(307)),c={title:"FieldGroup",sidebar_label:"FieldGroup"},i={id:"components/react-ocean-forms/FieldGroup",title:"FieldGroup",description:"## Examples",source:"@site/docs/components/react-ocean-forms/FieldGroup.md",permalink:"/react-ocean-forms/docs/components/react-ocean-forms/FieldGroup",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/components/react-ocean-forms/FieldGroup.md",sidebar_label:"FieldGroup",sidebar:"docs",previous:{title:"Form",permalink:"/react-ocean-forms/docs/components/react-ocean-forms/Form"},next:{title:"ValidationSummary",permalink:"/react-ocean-forms/docs/components/react-ocean-forms/ValidationSummary"}},p=[{value:"Examples",id:"examples",children:[{value:"Simple field group",id:"simple-field-group",children:[]}]},{value:"API Reference",id:"api-reference",children:[]}],l={rightToc:p};function u(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},l,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"examples"},"Examples"),Object(a.b)("h3",{id:"simple-field-group"},"Simple field group"),Object(a.b)("p",null,"Showcase of a simple field group"),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx"}),'import { Form, FieldGroup, Input } from \'react-ocean-forms\';\n\nfunction Example() {\n  // Submit callback, here you\'d make your api calls\n  const handleSubmit = (values) => {\n    console.log(\'onSubmit, values: \' + JSON.stringify(values));\n  };\n\n  // Notice how a field group creates a sub object\n  const defaultValues = {\n    myGroup: {\n      myInput1: \'input 1\',\n      myInput2: \'input 2\',\n    },\n  };\n\n  return (\n    <Form className="demo" onSubmit={handleSubmit} defaultValues={defaultValues}>\n      <FieldGroup\n        name="myGroup"\n        label="Example group"\n        render={() => {\n          return (\n            <React.Fragment>\n              <Input name="myInput1" label="Example input" />\n              <Input name="myInput2" label="Example input 2" />\n            </React.Fragment>\n          );\n        }}\n      />\n      <button type="submit">Submit</button>\n    </Form>\n  );\n}\n\n<Example />;\n')),Object(a.b)("h2",{id:"api-reference"},"API Reference"),Object(a.b)("p",null,"See ",Object(a.b)("a",Object(t.a)({parentName:"p"},{href:"../../api/react-ocean-forms/modules/fieldgroup#const-fieldgroup"}),"FieldGroup API reference")," and ",Object(a.b)("a",Object(t.a)({parentName:"p"},{href:"../../api/react-ocean-forms/interfaces/fieldgroup.ifieldgroupprops"}),"prop types"),"."))}u.isMDXComponent=!0},307:function(e,n,r){"use strict";r.d(n,"a",(function(){return m})),r.d(n,"b",(function(){return d}));var t=r(0),o=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var n=o.a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i({},n,{},e)),r},m=function(e){var n=u(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=Object(t.forwardRef)((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=u(r),f=t,d=m["".concat(c,".").concat(f)]||m[f]||s[f]||a;return r?o.a.createElement(d,i({ref:n},l,{components:r})):o.a.createElement(d,i({ref:n},l))}));function d(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:t,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);