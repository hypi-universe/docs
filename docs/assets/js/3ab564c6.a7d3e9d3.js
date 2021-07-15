(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4527],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(r),d=i,m=f["".concat(u,".").concat(d)]||f[d]||p[d]||o;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3065:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return f}});var n=r(2122),i=r(9756),o=(r(7294),r(3905)),a=["components"],l={id:"tutorials",title:"Tutorials Overview",sidebar_label:"Tutorials Overview",slug:"/tutorials"},u=void 0,c={unversionedId:"tutorials",id:"tutorials",isDocsHomePage:!1,title:"Tutorials Overview",description:"Tutorials are written to guide you to achieve a specific task with the Hypi platform.",source:"@site/content/tutorials.md",sourceDirName:".",slug:"/tutorials",permalink:"/docs/tutorials",editUrl:"https://github.com/hypi-universe/docs/edit/master/content/tutorials.md",version:"current",frontMatter:{id:"tutorials",title:"Tutorials Overview",sidebar_label:"Tutorials Overview",slug:"/tutorials"},sidebar:"docs",previous:{title:"Hypi + Angular",permalink:"/docs/hypi-angular"},next:{title:"Hypi GraphQL CRUD Tutorial",permalink:"/docs/gql-crud-tutorial"}},s=[],p={toc:s};function f(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Tutorials are written to guide you to achieve a specific task with the Hypi platform."),(0,o.kt)("p",null,"Do check out below tutorials to understand basic functionalities provided by Hypi..."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/gql-crud-tutorial"},"Hypi GraphQL CRUD Tutorial")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/time-series-aggregations"},"Timeseries Aggregations with Date Granularity"))),(0,o.kt)("p",null,"Each tutorial is generally self-contained.  Feel free to navigate and explore more!"))}f.isMDXComponent=!0}}]);