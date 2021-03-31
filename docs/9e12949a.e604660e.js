(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{105:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(135)),i={id:"graphql",title:"GraphQL",sidebar_label:"GraphQL",slug:"/graphql"},c={unversionedId:"graphql",id:"graphql",isDocsHomePage:!1,title:"GraphQL",description:"GraphQL is a syntax that represents how to request data and is generally used to load data from a server to a client. The GraphQL data query language is:",source:"@site/content/graphql.md",slug:"/graphql",permalink:"/docs/graphql",editUrl:"https://github.com/hypi-universe/docs/edit/master/content/graphql.md",version:"current",sidebar_label:"GraphQL",sidebar:"docs",previous:{title:"Hypi + Angular",permalink:"/docs/hypi-angular"},next:{title:"GraphQL Introduction",permalink:"/docs/gql-introduction"}},l=[],s={toc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"GraphQL is ",Object(o.b)("strong",{parentName:"p"},"a syntax that represents how to request data")," and is generally used to load data from a server to a client. The GraphQL data query language is:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"A Specification"),", that determines the validity of the schema on the API server. The schema defines the validity of client calls.\n"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Strongly typed"),", all GraphQL query corresponds to a particular type, and each type describes an available set of fields. Furthermore, GraphQL provides descriptive error messages before performing a query.\n"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Introspective"),", allows a client to ask the server for details about the schema.\n"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Hierarchical"),", the shape of a GraphQL query mirrors the shape of the",Object(o.b)("inlineCode",{parentName:"li"},"JSON"),"data it returns. Query and receive only the data you specify in a single round trip.\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The purpose of GraphQL is to decrease the load on the server. Users can make a single call to fetch the required data rather than to construct multiple REST requests. The key idea is to ",Object(o.b)("inlineCode",{parentName:"p"},"POST"),' a "query" to an HTTP endpoint, instead of hitting different HTTP endpoints for various resources. It makes fetching client\'s data from their backend APIs convenient.')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"GraphQL")," is now considered one of the most modern ways of building and querying APIs."))}p.isMDXComponent=!0},135:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),b=n,f=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return r?a.a.createElement(f,c(c({ref:t},s),{},{components:r})):a.a.createElement(f,c({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);