(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2250],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,v=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(v,s(s({ref:t},c),{},{components:n})):r.createElement(v,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var u=2;u<i;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},5064:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(7294),a=n(9443);var i=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(6010),o="tabItem_1uMI",l="tabItemActive_2DSg";var u=37,c=39;var p=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,p=e.values,d=e.groupId,m=e.className,v=i(),f=v.tabGroupChoices,h=v.setTabGroupChoices,k=(0,r.useState)(a),y=k[0],g=k[1],b=r.Children.toArray(e.children),N=[];if(null!=d){var w=f[d];null!=w&&w!==y&&p.some((function(e){return e.value===w}))&&g(w)}var O=function(e){var t=e.currentTarget,n=N.indexOf(t),r=p[n].value;g(r),null!=d&&(h(d,r),setTimeout((function(){var e,n,r,a,i,s,o,u;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,i=e.right,s=window,o=s.innerHeight,u=s.innerWidth,n>=0&&i<=u&&a<=o&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},T=function(e){var t,n;switch(e.keyCode){case c:var r=N.indexOf(e.target)+1;n=N[r]||N[0];break;case u:var a=N.indexOf(e.target)-1;n=N[a]||N[N.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,s.Z)("tabs__item",o,{"tabs__item--active":y===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:T,onFocus:O,onClick:O},n)}))),t?(0,r.cloneElement)(b.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},9443:function(e,t,n){"use strict";var r=(0,n(7294).createContext)(void 0);t.Z=r},6269:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return v}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),s=n(5064),o=n(8215),l=["components"],u={id:"use-serverless",title:"Use Serverless Function",sidebar_label:"Use Serverless Function",slug:"/use-serverless"},c=void 0,p={unversionedId:"use-serverless",id:"use-serverless",isDocsHomePage:!1,title:"Use Serverless Function",description:"OpenWhisk requires a JSON object as output. Hence, serverless function cannot return arrays. It must return an object at the top level which can have arrays inside it.",source:"@site/content/use-serverless.md",sourceDirName:".",slug:"/use-serverless",permalink:"/docs/use-serverless",editUrl:"https://github.com/hypi-universe/docs/edit/master/content/use-serverless.md",version:"current",frontMatter:{id:"use-serverless",title:"Use Serverless Function",sidebar_label:"Use Serverless Function",slug:"/use-serverless"},sidebar:"docs",previous:{title:"Create Serverless Function",permalink:"/docs/create-serverless"},next:{title:"OpenWhisk Actions",permalink:"/docs/openwhisk-actions"}},d=[{value:"@tan Directive",id:"tan-directive",children:[]},{value:"Use Serverless Function",id:"use-serverless-function",children:[]}],m={toc:d};function v(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"OpenWhisk requires a JSON object as output. Hence, serverless function cannot return arrays. It must return an object at the top level which can have arrays inside it."))),(0,i.kt)("p",null,"After the creation of the serverless function on the Hypi namespace, now is the time to use it!"),(0,i.kt)("p",null,"Before you start using the serverless function, you need to define a GraphQL type (Query/Mutation) in the schema like this."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'type Query{\n    f1(a: Int,b: String): Json @tan(type:OpenWhisk, name:"hithere")\n}\n')),(0,i.kt)("p",null,"Here, function ",(0,i.kt)("inlineCode",{parentName:"p"},"f1"),"  has been defined with input parameters ",(0,i.kt)("inlineCode",{parentName:"p"},"a")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"b"),"and it returns a JSON value. It uses @tan directive to access serverless function ",(0,i.kt)("inlineCode",{parentName:"p"},"hithere")," (Check ",(0,i.kt)("a",{parentName:"p",href:"/docs/create-serverless"},"this")," guide on how to create serverless function)."),(0,i.kt)("h3",{id:"tan-directive"},"@tan Directive"),(0,i.kt)("p",null,"@tan directive has the following structure. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"directive @tan(\n  type: TanType!\n  name: String\n  inline: String\n  saveAs: String\n) on FIELD_DEFINITION\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Parameter")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Description")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Example")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"type")),(0,i.kt)("td",{parentName:"tr",align:null},"OpenWhisk type is used for serverless functions. Groovy/Velocity type is used with User Defined Functions"),(0,i.kt)("td",{parentName:"tr",align:null},"Groovy/Velocity/OpenWhisk")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"name")),(0,i.kt)("td",{parentName:"tr",align:null},"The name of the serverless function in the docker image OR if it is a script, the script's name.Required IFF the \"inline\" parameter isn't provided."),(0,i.kt)("td",{parentName:"tr",align:null},"hithere")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"inline")),(0,i.kt)("td",{parentName:"tr",align:null},"Instead of the name of an existing function, short scripts can be provided inline with this field. If name is provided, this is ignored. If this is not provided, name MUST be present. The value of this field is the contents of the script in one of the supported tan script types."),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"saveAs")),(0,i.kt)("td",{parentName:"tr",align:null},"If present, the result of the function will be stored in Hypi as the given type. The type must exist in the current instance."),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h3",{id:"use-serverless-function"},"Use Serverless Function"),(0,i.kt)("p",null,"It is now time to run the function and pass some real values and obtain the results. Use a query like this."),(0,i.kt)(s.Z,{defaultValue:"query",values:[{label:"GraphQL Query",value:"query"},{label:"Response",value:"response"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"query",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'{\n  f1(a:1,b:"abc")\n}\n'))),(0,i.kt)(o.Z,{value:"response",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "f1": {\n      "args": {\n        "a": 1,\n        "b": "abc"\n      },\n      "hello": "world"\n    }\n  }\n}\n')))))}v.isMDXComponent=!0},6010:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);