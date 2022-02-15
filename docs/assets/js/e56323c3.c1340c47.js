"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7097],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(n),d=i,h=f["".concat(c,".").concat(d)]||f[d]||p[d]||r;return n?o.createElement(h,a(a({ref:t},u),{},{components:n})):o.createElement(h,a({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<r;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7304:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return f}});var o=n(7462),i=n(3366),r=(n(7294),n(3905)),a=["components"],l={id:"ui-gql-config",title:"GraphQL configuration of an Instance",sidebar_label:"GraphQL configuration of an Instance",slug:"/lowcode/ui-gql-config"},c=void 0,s={unversionedId:"lowcode/ui-gql-config",id:"lowcode/ui-gql-config",title:"GraphQL configuration of an Instance",description:"1. Go to the API Instances tab. Select an Instance from the list. Select the Settings to check the GraphQL configurations.",source:"@site/content/lowcode/ui-gql-config.md",sourceDirName:"lowcode",slug:"/lowcode/ui-gql-config",permalink:"/docs/lowcode/ui-gql-config",editUrl:"https://github.com/hypi-universe/docs/edit/master/content/lowcode/ui-gql-config.md",tags:[],version:"current",frontMatter:{id:"ui-gql-config",title:"GraphQL configuration of an Instance",sidebar_label:"GraphQL configuration of an Instance",slug:"/lowcode/ui-gql-config"},sidebar:"docs",previous:{title:"API configurations of an Instance",permalink:"/docs/lowcode/ui-instance-api-config"},next:{title:"GraphQL Playground",permalink:"/docs/lowcode/ui-gql-playground"}},u=[],p={toc:u};function f(e){var t=e.components,l=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to the ",(0,r.kt)("inlineCode",{parentName:"li"},"API Instances")," tab. Select an Instance from the list. Select the ",(0,r.kt)("inlineCode",{parentName:"li"},"Settings")," to check the GraphQL configurations.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"GQLConfig",src:n(6054).Z,width:"1844",height:"834"})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"You can note the following settings under GraphQL configurations.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"An ",(0,r.kt)("inlineCode",{parentName:"p"},"endpoint")," is a unique URL that represents an object or collection of objects within the Hypi domain. You will point your HTTP client at this endpoint to interact with Hypi data resources.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Websocket URL allows you to subscribe to updates on an instance via ",(0,r.kt)("inlineCode",{parentName:"p"},"WebSockets"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"HTTP request headers")," contain information about the request context so that the server can tailor the response. Hypi HTTP request header has two fields,\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"hypi-domain"),", and\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Authorization"),"."))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hypi-domain"),": The domain name of the instance to make API requests to"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Authorization"),": A valid token obtained from running a login query")),(0,r.kt)("p",null,"Check more about these fields ",(0,r.kt)("a",{parentName:"p",href:"/docs/lowcode/apisetup"},"here"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"GQLConfig",src:n(7463).Z,width:"1843",height:"473"})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Below the HTTP request header, you can find the ",(0,r.kt)("inlineCode",{parentName:"li"},"Methods")," (APIs) available under Hypi. Click on the inverted triangle button to get the list. A pop-up menu will be opened.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"GQLConfig",src:n(3987).Z,width:"1561",height:"690"})),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Select the method from the list to get details about the Method.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"GQLConfig",src:n(4091).Z,width:"229",height:"554"})),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"On the UI, you get the ",(0,r.kt)("inlineCode",{parentName:"li"},"input parameters")," for the method to execute. Below that ",(0,r.kt)("inlineCode",{parentName:"li"},"Response fields")," are also enlisted.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"GQLConfig",src:n(3709).Z,width:"1546",height:"443"})))}f.isMDXComponent=!0},6054:function(e,t,n){t.Z=n.p+"assets/images/UI-GraphQLConfig-1-d979dc83acecdac21a758b140abac6d9.PNG"},7463:function(e,t,n){t.Z=n.p+"assets/images/UI-GraphQLConfig-2-0c08a533e0d66bdef905f51609de7b2a.PNG"},3987:function(e,t,n){t.Z=n.p+"assets/images/UI-GraphQLConfig-3-13d74b85bd73757843791a73e72a35f1.PNG"},4091:function(e,t,n){t.Z=n.p+"assets/images/UI-GraphQLConfig-4-c0ba279f75eb8676d2ba026b87af819d.PNG"},3709:function(e,t,n){t.Z=n.p+"assets/images/UI-GraphQLConfig-5-c894c0201906d28a1d24f649abf3f5d9.PNG"}}]);