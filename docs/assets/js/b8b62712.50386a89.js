(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8479],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},395:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=["components"],l={id:"ui-gql-playground",title:"GraphQL Playground",sidebar_label:"GraphQL Playground",slug:"/ui-gql-playground"},s=void 0,c={unversionedId:"ui-gql-playground",id:"ui-gql-playground",isDocsHomePage:!1,title:"GraphQL Playground",description:"1. On the Hypi platform, you can execute various GraphQL methods with GraphQL playground. Click on API Instances. Select the instance from the list of instances. Select Playground tab.",source:"@site/content/ui-gql-playground.md",sourceDirName:".",slug:"/ui-gql-playground",permalink:"/docs/ui-gql-playground",editUrl:"https://github.com/hypi-universe/docs/edit/master/content/ui-gql-playground.md",version:"current",frontMatter:{id:"ui-gql-playground",title:"GraphQL Playground",sidebar_label:"GraphQL Playground",slug:"/ui-gql-playground"},sidebar:"docs",previous:{title:"GraphQL configuration of an Instance",permalink:"/docs/ui-gql-config"},next:{title:"Data Migration",permalink:"/docs/ui-data-migration"}},u=[],p={toc:u};function d(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"On the Hypi platform, you can execute various GraphQL methods with ",(0,i.kt)("inlineCode",{parentName:"li"},"GraphQL playground"),". Click on ",(0,i.kt)("inlineCode",{parentName:"li"},"API Instances"),". Select the instance from the list of instances. Select ",(0,i.kt)("inlineCode",{parentName:"li"},"Playground")," tab.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"GQLPlay",src:n(5868).Z})),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"A sample FindAccount query is always present in the starting tab. Click on the ",(0,i.kt)("inlineCode",{parentName:"li"},"+")," button to add a new tab to execute a method.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"GQLPlay",src:n(2568).Z})),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Note that ",(0,i.kt)("inlineCode",{parentName:"li"},"HTTP request headers")," get automatically added. The same request headers are present in the ",(0,i.kt)("a",{parentName:"li",href:"/docs/ui-instance-api-config"},"API configurations")," of the instance.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"GQLPlay",src:n(3746).Z})),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Write the method. Enter input data under the ",(0,i.kt)("inlineCode",{parentName:"li"},"QUERY VARIABLES")," tab. Hit the ",(0,i.kt)("inlineCode",{parentName:"li"},"blue play button")," to execute the method. You will get the response on the right-hand side box.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"GQLPlay",src:n(8800).Z})),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"You can check the history of executed methods (APIs) by clicking the ",(0,i.kt)("inlineCode",{parentName:"li"},"History")," button.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"GQLPlay",src:n(1612).Z})),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"Select the method and click the ",(0,i.kt)("inlineCode",{parentName:"li"},"Use")," button to again insert the method in a tab on GraphQL Playground.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"GQLPlay",src:n(9495).Z})),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},"You may correct the improperly formatted code with ",(0,i.kt)("inlineCode",{parentName:"li"},"Prettify")," button")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"GQLPlay",src:n(4422).Z})),(0,i.kt)("ol",{start:8},(0,i.kt)("li",{parentName:"ol"},"The brackets get aligned properly with ",(0,i.kt)("inlineCode",{parentName:"li"},"Prettify"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"GQLPlay",src:n(6972).Z})),(0,i.kt)("ol",{start:9},(0,i.kt)("li",{parentName:"ol"},"You may see the endpoint in a box to make an HTTP request. You may refresh the instance by clicking refresh symbol in front of it. Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Copy CURL")," to copy the HTTP request.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"GQLPlay",src:n(8149).Z})),(0,i.kt)("p",null,"Paste the copied ",(0,i.kt)("inlineCode",{parentName:"p"},"CURL")," to verify the request."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'curl \'https://api.alpha.hypi.dev/graphql\' -H \'Accept-Encoding: gzip, deflate, br\' -H \'Content-Type: application/json\' -H \'Accept: application/json\' -H \'Connection: keep-alive\' -H \'DNT: 1\' -H \'Origin: https://alpha.hypi.dev\' -H \'Authorization: <Auth Key>\' -H \'hypi-domain: ignorant.apps.hypi.app\' --data-binary \'{"query":"mutation Upsert($values: HypiUpsertInputUnion!) {\\n  upsert(values: $values) {\\n    id\\n  }\\n}\\n","variables":{"values":{"Author":[{"name":"Dan Brown","age":56,"booklist":[{"title":"Da Vinci Code","publication":"abc","available":true}]}]}}}\' --compressed\n')))}d.isMDXComponent=!0},5868:function(e,t,n){"use strict";t.Z=n.p+"assets/images/UI-GQL-Play-1-dab7f0f5ad80f1e33f52fa9fd6662af5.PNG"},2568:function(e,t,n){"use strict";t.Z=n.p+"assets/images/UI-GQL-Play-2-c5dac0ea08ecf0a1f003dced27b02b90.PNG"},3746:function(e,t,n){"use strict";t.Z=n.p+"assets/images/UI-GQL-Play-3-964da4cc92550d042ab68a627df0922a.PNG"},8800:function(e,t,n){"use strict";t.Z=n.p+"assets/images/UI-GQL-Play-4-5e843577e328bc6a10ce9eea3218a2a3.PNG"},1612:function(e,t,n){"use strict";t.Z=n.p+"assets/images/UI-GQL-Play-5-b91df0ffc54f718af7a73510bd2e3d7d.PNG"},9495:function(e,t,n){"use strict";t.Z=n.p+"assets/images/UI-GQL-Play-6-8135f347a1324bdeeb70a259afcba038.PNG"},4422:function(e,t,n){"use strict";t.Z=n.p+"assets/images/UI-GQL-Play-7-581e7998df8b017db780a2a87ebf19a2.PNG"},6972:function(e,t,n){"use strict";t.Z=n.p+"assets/images/UI-GQL-Play-8-fe3258641b35eb42d896b00df5922e93.PNG"},8149:function(e,t,n){"use strict";t.Z=n.p+"assets/images/UI-GQL-Play-9-48ce9b64150950549e83cfd527ac42c6.PNG"}}]);