(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{122:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(8),o=(r(0),r(163)),i={id:"graphql",title:"GraphQL Overview",sidebar_label:"GraphQL Overview",slug:"/graphql"},c={unversionedId:"graphql",id:"graphql",isDocsHomePage:!1,title:"GraphQL Overview",description:"GraphQL is a syntax that represents how to request data and is generally used to load data from a server to a client. The GraphQL data query language is:",source:"@site/content/graphql.md",slug:"/graphql",permalink:"/docs/graphql",editUrl:"https://github.com/hypi-universe/docs/edit/master/content/graphql.md",version:"current",sidebar_label:"GraphQL Overview",sidebar:"docs",previous:{title:"Use Serverless Function",permalink:"/docs/use-serverless"},next:{title:"GraphQL Introduction",permalink:"/docs/gql-introduction"}},s=[],l={toc:s};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"GraphQL is ",Object(o.b)("strong",{parentName:"p"},"a syntax that represents how to request data")," and is generally used to load data from a server to a client. The GraphQL data query language is:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"A Specification"),", that determines the validity of the schema on the API server. The schema defines the validity of client calls.\n"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Strongly typed"),", all GraphQL query corresponds to a particular type, and each type describes an available set of fields. Furthermore, GraphQL provides descriptive error messages before performing a query.\n"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Introspective"),", allows a client to ask the server for details about the schema.\n"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Hierarchical"),", the shape of a GraphQL query mirrors the shape of the ",Object(o.b)("inlineCode",{parentName:"li"},"JSON")," data it returns. Query and receive only the data you specify in a single round trip.\n")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"The purpose of GraphQL is to decrease the load on the server. Users can make a single call to fetch the required data rather than to construct multiple REST requests. The key idea is to ",Object(o.b)("inlineCode",{parentName:"p"},"POST"),' a "query" to an HTTP endpoint, instead of hitting different HTTP endpoints for various resources. It makes fetching client\'s data from their backend APIs convenient.'))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"GraphQL"),"  is now considered one of the most modern ways of building and querying APIs."))}p.isMDXComponent=!0},163:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),b=n,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return r?a.a.createElement(m,c(c({ref:t},l),{},{components:r})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);