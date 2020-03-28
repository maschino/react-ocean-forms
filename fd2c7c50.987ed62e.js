(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{291:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return u})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return s}));var a=t(1),o=t(9),r=(t(0),t(301)),l={title:"Form",sidebar_label:"Form"},u={id:"components/react-ocean-forms/Form",title:"Form",description:"## Examples",source:"@site/docs/components/react-ocean-forms/Form.md",permalink:"/react-ocean-forms/docs/components/react-ocean-forms/Form",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/components/react-ocean-forms/Form.md",sidebar_label:"Form",sidebar:"docs",previous:{title:"Getting started",permalink:"/react-ocean-forms/docs/introduction/getting_started"},next:{title:"FieldGroup",permalink:"/react-ocean-forms/docs/components/react-ocean-forms/FieldGroup"}},i=[{value:"Examples",id:"examples",children:[{value:"Simple form",id:"simple-form",children:[]},{value:"Default values",id:"default-values",children:[]},{value:"Values",id:"values",children:[]},{value:"Disabled form",id:"disabled-form",children:[]},{value:"Plaintext form",id:"plaintext-form",children:[]},{value:"Form-wide validation",id:"form-wide-validation",children:[]}]},{value:"API Reference",id:"api-reference",children:[]}],m={rightToc:i};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},m,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"examples"},"Examples"),Object(r.b)("h3",{id:"simple-form"},"Simple form"),Object(r.b)("p",null,"Showcase of a simple form"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'import { Form, Input } from \'react-ocean-forms\';\n\nfunction Example() {\n  // Submit callback, here you\'d make your api calls\n  const handleSubmit = (values) => {\n    console.log(\'onSubmit, values: \' + JSON.stringify(values));\n  };\n\n  // Reset callback, can be useful in some cases for cleanup\n  const handleReset = () => {\n    console.log(\'onReset\');\n  };\n\n  return (\n    <Form className="demo" onSubmit={handleSubmit} onReset={handleReset}>\n      <Input name="myInput" label="Example input" />\n      <button type="submit">Submit</button>\n      <button type="reset">Reset</button>\n    </Form>\n  );\n}\n\n<Example />;\n')),Object(r.b)("h3",{id:"default-values"},"Default values"),Object(r.b)("p",null,"Provide the form with default values that should be displayed on load. Note how the default value won't update the Field, if the user changed the input. However, on form reset the default value will be used again."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'import React, { useState } from \'react\';\nimport { Form, Input } from \'react-ocean-forms\';\n\nfunction Example() {\n  const [defaultValues, setDefaultValues] = useState({ myInput: \'default value\' });\n\n  // Submit callback, here you\'d make your api calls\n  const handleSubmit = (values) => {\n    console.log(\'onSubmit, values: \' + JSON.stringify(values));\n  };\n\n  const randomizeDefaultValues = () => {\n    setDefaultValues({\n      myInput: `default ${Math.floor(Math.random() * 100)}`,\n    });\n  };\n\n  return (\n    <Form className="demo" onSubmit={handleSubmit} defaultValues={defaultValues}>\n      <Input name="myInput" label="Example input" />\n\n      <p className="mt-4">Current default value: {defaultValues.myInput}</p>\n\n      <button type="submit">Submit</button>\n      <button type="reset">Reset</button>\n      <button type="button" onClick={randomizeDefaultValues} className="ml-1">\n        Update default values\n      </button>\n    </Form>\n  );\n}\n\n<Example />;\n')),Object(r.b)("h3",{id:"values"},"Values"),Object(r.b)("p",null,"Override the values of the form fields. Changing those values will override the Field value, even if the user changed it."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'import React, { useState } from \'react\';\nimport { Form, Input } from \'react-ocean-forms\';\n\nfunction Example() {\n  const [values, setValues] = useState({ myInput: \'demo value\' });\n\n  // Submit callback, here you\'d make your api calls\n  const handleSubmit = (values) => {\n    console.log(\'onSubmit, values: \' + JSON.stringify(values));\n  };\n\n  const randomizeValues = () => {\n    setValues({\n      myInput: `demo ${Math.floor(Math.random() * 100)}`,\n    });\n  };\n\n  return (\n    <Form className="demo" onSubmit={handleSubmit} values={values}>\n      <Input name="myInput" label="Example input" />\n\n      <button type="submit">Submit</button>\n      <button type="reset">Reset</button>\n      <button type="button" onClick={randomizeValues} className="ml-1">\n        Update values\n      </button>\n    </Form>\n  );\n}\n\n<Example />;\n')),Object(r.b)("h3",{id:"disabled-form"},"Disabled form"),Object(r.b)("p",null,"Setting the disabled prop will disable all form fields."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'import { Form, Input } from \'react-ocean-forms\';\n\nfunction Example() {\n  // Submit callback, here you\'d make your api calls\n  const handleSubmit = (values) => {\n    console.log(\'onSubmit, values: \' + JSON.stringify(values));\n  };\n\n  return (\n    <Form className="demo" onSubmit={handleSubmit} disabled>\n      <Input name="myInput" label="Example input 1" />\n      <Input name="myInput2" label="Example input 2" />\n      <button type="submit">Submit</button>\n    </Form>\n  );\n}\n\n<Example />;\n')),Object(r.b)("h3",{id:"plaintext-form"},"Plaintext form"),Object(r.b)("p",null,"Setting the plaintext prop will show all form fields in a text-only mode."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'import { Form, Input } from \'react-ocean-forms\';\n\nfunction Example({ logMessage }) {\n  const defaultValues = {\n    myInput: \'default value 1\',\n    myInput2: \'default value 2\',\n  };\n\n  return (\n    <Form className="demo" defaultValues={defaultValues} plaintext>\n      <Input name="myInput" label="Example input 1" />\n      <Input name="myInput2" label="Example input 2" />\n    </Form>\n  );\n}\n\n<Example />;\n')),Object(r.b)("h3",{id:"form-wide-validation"},"Form-wide validation"),Object(r.b)("p",null,"Use a form-wide validation function before submit. Notice that the onSubmit callback is not invoked if you type 'bad' into the input."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'import { Form, Input, ValidationSummary } from \'react-ocean-forms\';\n\nfunction Example() {\n  // Submit callback, here you\'d make your api calls\n  const handleSubmit = (values) => {\n    console.log(\'onSubmit, values: \' + JSON.stringify(values));\n  };\n\n  // Reset callback, can be useful in some cases for cleanup\n  const handleReset = () => {\n    console.log(\'onReset\');\n  };\n\n  // Form wide validation function\n  const handleValidate = (values) => {\n    if (values.demoInput === \'bad\') {\n      return {\n        demoInput: \'Invalid input!\',\n      };\n    }\n\n    return null;\n  };\n\n  return (\n    <Form\n      className="demo"\n      onSubmit={handleSubmit}\n      onReset={handleReset}\n      onValidate={handleValidate}\n    >\n      <ValidationSummary id="summary" />\n\n      <Input name="demoInput" label="Example input" />\n\n      <button type="submit">Submit</button>\n      <button type="reset">Reset</button>\n    </Form>\n  );\n}\n\n<Example />;\n')),Object(r.b)("h2",{id:"api-reference"},"API Reference"),Object(r.b)("p",null,"See ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../../api/react-ocean-forms/modules/form#const-form"}),"Form API reference")," and ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../../api/react-ocean-forms/interfaces/form.iformprops"}),"prop types"),"."))}s.isMDXComponent=!0},301:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return d}));var a=t(0),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m=o.a.createContext({}),s=function(e){var n=o.a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):u({},n,{},e)),t},c=function(e){var n=s(e.components);return o.a.createElement(m.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=s(t),b=a,d=c["".concat(l,".").concat(b)]||c[b]||p[b]||r;return t?o.a.createElement(d,u({ref:n},m,{components:t})):o.a.createElement(d,u({ref:n},m))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=b;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var m=2;m<r;m++)l[m]=t[m];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);