(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{156:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(8),i=(a(0),a(190)),c={id:"ui-gql-playground",title:"GraphQL Playground",sidebar_label:"GraphQL Playground",slug:"/ui-gql-playground"},o={unversionedId:"ui-gql-playground",id:"ui-gql-playground",isDocsHomePage:!1,title:"GraphQL Playground",description:"1. On the Hypi platform, you can execute various GraphQL methods with GraphQL playground. Click on Instances. Select the instance from the list of instances. Click on API Console. Select GraphQL Playground tab.",source:"@site/content/ui-gql-playground.md",slug:"/ui-gql-playground",permalink:"/docs/ui-gql-playground",editUrl:"https://github.com/hypi-universe/docs/edit/master/content/ui-gql-playground.md",version:"current",sidebar_label:"GraphQL Playground",sidebar:"docs",previous:{title:"GraphQL configuration of an Instance",permalink:"/docs/ui-gql-config"},next:{title:"Data Migration",permalink:"/docs/ui-data-migration"}},l=[],s={toc:l};function u(e){var t=e.components,c=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,c,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"On the Hypi platform, you can execute various GraphQL methods with ",Object(i.b)("inlineCode",{parentName:"li"},"GraphQL playground"),". Click on ",Object(i.b)("inlineCode",{parentName:"li"},"Instances"),". Select the instance from the list of instances. Click on ",Object(i.b)("inlineCode",{parentName:"li"},"API Console"),". Select ",Object(i.b)("inlineCode",{parentName:"li"},"GraphQL Playground")," tab.")),Object(i.b)("p",null,Object(i.b)("img",{alt:"GQLPlay",src:a(336).default})),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"A sample FindAccount query is always present in the starting tab. Click on the ",Object(i.b)("inlineCode",{parentName:"li"},"+")," button to add a new tab to execute a method.")),Object(i.b)("p",null,Object(i.b)("img",{alt:"GQLPlay",src:a(337).default})),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"Note that ",Object(i.b)("inlineCode",{parentName:"li"},"HTTP request headers")," get automatically added. The same request headers are present in the ",Object(i.b)("a",{parentName:"li",href:"/docs/ui-instance-api-config"},"API configurations")," of the instance.")),Object(i.b)("p",null,Object(i.b)("img",{alt:"GQLPlay",src:a(338).default})),Object(i.b)("ol",{start:4},Object(i.b)("li",{parentName:"ol"},"Write the method. Enter input data under the ",Object(i.b)("inlineCode",{parentName:"li"},"QUERY VARIABLES")," tab. Hit the ",Object(i.b)("inlineCode",{parentName:"li"},"blue play button")," to execute the method. You will get the response on the right-hand side box.")),Object(i.b)("p",null,Object(i.b)("img",{alt:"GQLPlay",src:a(339).default})),Object(i.b)("ol",{start:5},Object(i.b)("li",{parentName:"ol"},"You can check the history of executed methods (APIs) by clicking the ",Object(i.b)("inlineCode",{parentName:"li"},"History")," button.")),Object(i.b)("p",null,Object(i.b)("img",{alt:"GQLPlay",src:a(340).default})),Object(i.b)("ol",{start:6},Object(i.b)("li",{parentName:"ol"},"Select the method and click the ",Object(i.b)("inlineCode",{parentName:"li"},"Use")," button to again insert the method in a tab on GraphQL Playground.")),Object(i.b)("p",null,Object(i.b)("img",{alt:"GQLPlay",src:a(341).default})),Object(i.b)("ol",{start:7},Object(i.b)("li",{parentName:"ol"},"You may correct the improperly formatted code with ",Object(i.b)("inlineCode",{parentName:"li"},"Prettify")," button")),Object(i.b)("p",null,Object(i.b)("img",{alt:"GQLPlay",src:a(342).default})),Object(i.b)("ol",{start:8},Object(i.b)("li",{parentName:"ol"},"The brackets get aligned properly with ",Object(i.b)("inlineCode",{parentName:"li"},"Prettify"),".")),Object(i.b)("p",null,Object(i.b)("img",{alt:"GQLPlay",src:a(343).default})),Object(i.b)("ol",{start:9},Object(i.b)("li",{parentName:"ol"},"You may see the endpoint in a box to make an HTTP request. You may refresh the instance by clicking refresh symbol in front of it. Click ",Object(i.b)("inlineCode",{parentName:"li"},"Copy CURL")," to copy the HTTP request.")),Object(i.b)("p",null,Object(i.b)("img",{alt:"GQLPlay",src:a(344).default})),Object(i.b)("p",null,"Paste the copied ",Object(i.b)("inlineCode",{parentName:"p"},"CURL")," to verify the request."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"curl 'https://api.hypi.app/graphql' -H 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1' -H 'Origin: https://hypi.app' -H 'Authorization: authorization-token' -H 'hypi-domain: teeming.apps.hypi.app' --data-binary '{\"query\":\"mutation Upsert($values: HypiUpsertInputUnion!) {\\n upsert(values: $values) {\\n id\\n }\\n}\\n\",\"variables\":{\"values\":{\"Table1\":[{\"email_info\":{\"value\":\"abc.gmail.com\"}}\\]}}}' --compressed\n")))}u.isMDXComponent=!0},190:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return f}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(a),d=n,f=p["".concat(c,".").concat(d)]||p[d]||b[d]||i;return a?r.a.createElement(f,o(o({ref:t},s),{},{components:a})):r.a.createElement(f,o({ref:t},s))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var s=2;s<i;s++)c[s]=a[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},336:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/UI-GQL-Play-1-88349c8f851c1342651fbb2f00ccc66e.PNG"},337:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/UI-GQL-Play-2-745fa22c6686c3067a22568a7f7d4114.PNG"},338:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/UI-GQL-Play-3-c96ddfc89a7af9fcf960c1a3f1a68e52.PNG"},339:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/UI-GQL-Play-4-812ed56c1edb6e79d125ae7d6a83cc23.PNG"},340:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/UI-GQL-Play-5-9deb711c6dc1744d383ed16c5a6e33fb.PNG"},341:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/UI-GQL-Play-6-f53fe6906e5d8511588bbc9b6dfd51be.PNG"},342:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/UI-GQL-Play-7-10f281e6e5cc36a8a7fe5b7970cc38b3.PNG"},343:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/UI-GQL-Play-8-2a5c173300682569df42f069f255aedf.PNG"},344:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/UI-GQL-Play-9-f0e8425c145a168c25d6105fb391cc72.PNG"}}]);