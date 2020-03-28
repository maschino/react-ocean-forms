(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return m})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(1),o=n(9),a=(n(0),n(301)),c={title:"FormButton",sidebar_label:"FormButton"},m={id:"components/react-ocean-forms/FormButton",title:"FormButton",description:"## Examples",source:"@site/docs/components/react-ocean-forms/FormButton.md",permalink:"/react-ocean-forms/docs/components/react-ocean-forms/FormButton",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/components/react-ocean-forms/FormButton.md",sidebar_label:"FormButton",sidebar:"docs",previous:{title:"Input",permalink:"/react-ocean-forms/docs/components/react-ocean-forms/Input"},next:{title:"FormText",permalink:"/react-ocean-forms/docs/components/react-ocean-forms/FormText"}},u=[{value:"Examples",id:"examples",children:[{value:"FormButton",id:"formbutton",children:[]},{value:"Submit args",id:"submit-args",children:[]},{value:"Disabled form",id:"disabled-form",children:[]}]},{value:"API Reference",id:"api-reference",children:[]}],i={rightToc:u};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"examples"},"Examples"),Object(a.b)("h3",{id:"formbutton"},"FormButton"),Object(a.b)("p",null,"Showcase of the form button"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'import { Form, Input, FormButton } from \'react-ocean-forms\';\n\nfunction asyncValidator(value) {\n  return new Promise(function (resolve) {\n    setTimeout(() => {\n      if (value === \'\') {\n        resolve(\'Invalid input\');\n      } else {\n        resolve();\n      }\n    }, 1000);\n  });\n}\n\nfunction Example() {\n  return (\n    <Form className="demo">\n      <Input name="input" label="Sample input" asyncValidators={[asyncValidator]} />\n\n      <FormButton type="submit">Submit</FormButton>\n      <FormButton type="reset">Reset</FormButton>\n    </Form>\n  );\n}\n\n<Example />;\n')),Object(a.b)("h3",{id:"submit-args"},"Submit args"),Object(a.b)("p",null,"Arguments to the form.onSubmit handler can be passed this way"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'import { Form, Input, FormButton } from \'react-ocean-forms\';\n\nfunction Example() {\n  const handleSubmit = (values, submitArgs) => {\n    console.log(\n      \'onSubmit, values: \' + JSON.stringify(values) + \', submitArgs: \' + JSON.stringify(submitArgs)\n    );\n  };\n\n  return (\n    <Form className="demo" onSubmit={handleSubmit}>\n      <Input name="input" label="Sample input" />\n\n      <FormButton type="submit" submitArgs={{ foo: \'bar\' }}>\n        Submit\n      </FormButton>\n      <FormButton type="reset">Reset</FormButton>\n    </Form>\n  );\n}\n\n<Example />;\n')),Object(a.b)("h3",{id:"disabled-form"},"Disabled form"),Object(a.b)("p",null,"FormButtons are disabled if the form is disabled too"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'import { Form, Input, FormButton } from \'react-ocean-forms\';\n\nfunction Example() {\n  return (\n    <Form className="demo" disabled>\n      <Input name="input" label="Sample input" />\n\n      <FormButton type="submit">Submit</FormButton>\n      <FormButton type="reset">Reset</FormButton>\n    </Form>\n  );\n}\n\n<Example />;\n')),Object(a.b)("h2",{id:"api-reference"},"API Reference"),Object(a.b)("p",null,"See ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"../../api/react-ocean-forms/modules/formbutton#const-formbutton"}),"FormButton API reference")," and ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"../../api/react-ocean-forms/interfaces/formbutton.iformbuttonprops"}),"prop types"),"."))}s.isMDXComponent=!0},301:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=o.a.createContext({}),s=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):m({},t,{},e)),n},l=function(e){var t=s(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),l=s(n),b=r,f=l["".concat(c,".").concat(b)]||l[b]||p[b]||a;return n?o.a.createElement(f,m({ref:t},i,{components:n})):o.a.createElement(f,m({ref:t},i))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var m={};for(var u in t)hasOwnProperty.call(t,u)&&(m[u]=t[u]);m.originalType=e,m.mdxType="string"==typeof e?e:r,c[1]=m;for(var i=2;i<a;i++)c[i]=n[i];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);