"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8457],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},451:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={id:"scalars",title:"Scalars",sidebar_label:"Scalars",slug:"/lowcode/scalars"},s=void 0,p={unversionedId:"lowcode/scalars",id:"lowcode/scalars",title:"Scalars",description:"A GraphQL object type has a name and cont",source:"@site/content/lowcode/scalars.md",sourceDirName:"lowcode",slug:"/lowcode/scalars",permalink:"/docs/lowcode/scalars",editUrl:"https://github.com/hypi-universe/docs/edit/master/content/lowcode/scalars.md",tags:[],version:"current",frontMatter:{id:"scalars",title:"Scalars",sidebar_label:"Scalars",slug:"/lowcode/scalars"},sidebar:"docs",previous:{title:"Authentication",permalink:"/docs/lowcode/authentication"},next:{title:"Magic Hypi Object",permalink:"/docs/lowcode/magic-hypi-object"}},c=[{value:"Built-in scalars",id:"built-in-scalars",children:[{value:"Int",id:"int",children:[],level:3},{value:"Float",id:"float",children:[],level:3},{value:"String",id:"string",children:[],level:3},{value:"Boolean",id:"boolean",children:[],level:3},{value:"ID",id:"id",children:[],level:3}],level:2},{value:"Custom Scalars",id:"custom-scalars",children:[{value:"UUID",id:"uuid",children:[],level:3},{value:"Json",id:"json",children:[],level:3},{value:"DateTime",id:"datetime",children:[],level:3},{value:"Any",id:"any",children:[],level:3}],level:2}],d={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A GraphQL object type has a name and cont\nains fields. But at some point, those fields have to resolve to some concrete data. That's where the scalar types come in: they represent the leaves of the query."),(0,i.kt)("p",null,"In the following query, the ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"appearsIn")," fields will resolve to scalar types:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"{\n hero {\n         name\n         appearsIn\n     }\n }\n")),(0,i.kt)("p",null,"Scalar types represent primitive leaf values in a GraphQL type system. GraphQL responses take the form of a hierarchical tree; the leaves of this tree are typically GraphQL Scalar types (but may also be Enum types or\xa0null\xa0values)."),(0,i.kt)("p",null,"Please note that the scalar fields don't have any sub-fields - they are the leaves of the query."),(0,i.kt)("h2",{id:"built-in-scalars"},"Built-in scalars"),(0,i.kt)("p",null,"GraphQL comes with a set of default built-in scalar types out of the box. Hypi also supports these scalar types."),(0,i.kt)("h3",{id:"int"},"Int"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Int")," scalar type represents ",(0,i.kt)("inlineCode",{parentName:"p"},"signed 32\u2010bit numeric non-fractional value"),". The response field that supports the 32-bit integer or a number type should use this format."),(0,i.kt)("h3",{id:"float"},"Float"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Float")," scalar type represents a ",(0,i.kt)("inlineCode",{parentName:"p"},"signed double-precision finite floating-point value")," as specified by\xa0",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/IEEE_754"},"IEEE 754"),"."),(0,i.kt)("h3",{id:"string"},"String"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"String")," data type represents a ",(0,i.kt)("inlineCode",{parentName:"p"},"UTF\u20108 character sequence"),". It is a free-form human-readable text. How the string is encoded to UTF-8 internally is left to the service implementation."),(0,i.kt)("h3",{id:"boolean"},"Boolean"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Boolean")," type represents ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," or  ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("h3",{id:"id"},"ID"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ID")," scalar type represents a ",(0,i.kt)("inlineCode",{parentName:"p"},"unique identifier"),", often used to refetch an object or as the key for a cache. ID is serialized as String, but it is not intended to be human-readable."),(0,i.kt)("p",null,"ID could represent, from small auto-increment numbers to large 128-bit random numbers, to base64 encoded values, or string values of a format like\xa0GUID. "),(0,i.kt)("h2",{id:"custom-scalars"},"Custom Scalars"),(0,i.kt)("p",null,"Hypi supports custom scalar types in addition to the built-in scalars."),(0,i.kt)("h3",{id:"uuid"},"UUID"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"UUID")," represents a scalar serialized as a string conforming to ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Universally_unique_identifier"},"RFC 4122"),". When querying a field of type\xa0UUID, you can then rely on the ability to parse the result with an RFC 4122 compliant parser."),(0,i.kt)("h3",{id:"json"},"Json"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"JSON")," (JavaScript Object Notation) is a lightweight format for storing and transporting data. Hypi supports declaring JSON data type for a field. Json type accepts only Json values while entering input or returning a value."),(0,i.kt)("h3",{id:"datetime"},"DateTime"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"DateTime")," represents valid ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/ISO_8601"},"ISO 8601")," date time value.",(0,i.kt)("inlineCode",{parentName:"p"},"DateTime")," type accepts only valid ISO 8601 date-time values while entering input or returning a value."),(0,i.kt)("p",null,"DateTime scalar supports following ISO 8601 date-time notations."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Date/Time"),(0,i.kt)("th",{parentName:"tr",align:null},"Format"),(0,i.kt)("th",{parentName:"tr",align:null},"Example"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Date"),(0,i.kt)("td",{parentName:"tr",align:null},"yyyy-mm-dd"),(0,i.kt)("td",{parentName:"tr",align:null},"2008-09-15")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Datetime"),(0,i.kt)("td",{parentName:"tr",align:null},"yyyy-mm-ddThh:mm:ss.ffffff"),(0,i.kt)("td",{parentName:"tr",align:null},"2008-09-15T15:53:00")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"UTC zone"),(0,i.kt)("td",{parentName:"tr",align:null},"yyyy-mm-ddThh:mm:ss.nnnnnn+","-","hh:mm"),(0,i.kt)("td",{parentName:"tr",align:null},"2008-09-15T15:53:00+05:00")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Date Time in UTC"),(0,i.kt)("td",{parentName:"tr",align:null},"yyyy-mm-ddThh:mm:ssZ"),(0,i.kt)("td",{parentName:"tr",align:null},"2021-05-10T02:43:42Z")))),(0,i.kt)("h3",{id:"any"},"Any"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Any")," represents any possible value without any specific format. Use of this data type is highly discouraged. This data type must be serialized to String and it is internally stored as\nString. No queries or operations are possible on it. It can be used in extremely rare cases where the existing type system makes something impossible."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Hypi CRUD APIs do not support ",(0,i.kt)("a",{parentName:"p",href:"http://spec.graphql.org/draft/#sec-Unions"},"Unions"),". \xa0But they can be used in custom serverless functions which do not depend on Hypi\u2019s CRUD APIs"))))}u.isMDXComponent=!0}}]);