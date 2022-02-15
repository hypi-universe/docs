"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[738],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:r,l[1]=u;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1332:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},8515:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7462),r=n(7294),o=n(2389),l=n(5394),u=n(6010),i="tabItem_tAz6";function s(e){var t,n,o,s=e.lazy,c=e.block,d=e.defaultValue,p=e.values,m=e.groupId,f=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=p?p:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,l.lx)(b,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(t=null!=d?d:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=v[0])?void 0:o.props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,l.UB)(),k=g.tabGroupChoices,w=g.setTabGroupChoices,N=(0,r.useState)(y),O=N[0],T=N[1],C=[],j=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var D=k[m];null!=D&&D!==O&&b.some((function(e){return e.value===D}))&&T(D)}var E=function(e){var t=e.currentTarget,n=C.indexOf(t),a=b[n].value;a!==O&&(j(t),T(a),null!=m&&w(m,a))},x=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=C.indexOf(e.currentTarget)+1;n=C[a]||C[0];break;case"ArrowLeft":var r=C.indexOf(e.currentTarget)-1;n=C[r]||C[C.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":c},f)},b.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return C.push(e)},onKeyDown:x,onFocus:E,onClick:E},o,{className:(0,u.Z)("tabs__item",i,null==o?void 0:o.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),s?(0,r.cloneElement)(v.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function c(e){var t=(0,o.Z)();return r.createElement(s,(0,a.Z)({key:String(t)},e))}},8854:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return f}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=n(8515),u=n(1332),i=["components"],s={id:"createdata",title:"Create Data",sidebar_label:"Create Data",slug:"/lowcode/create-data"},c=void 0,d={unversionedId:"lowcode/createdata",id:"lowcode/createdata",title:"Create Data",description:"\u201cCreate\u201d functions as a mutation to insert data in the table. After creating an instance, you may want to add data to it. Just one function does the job of inserting and updating data, i.e. upsert.",source:"@site/content/lowcode/createdata.md",sourceDirName:"lowcode",slug:"/lowcode/create-data",permalink:"/docs/lowcode/create-data",editUrl:"https://github.com/hypi-universe/docs/edit/master/content/lowcode/createdata.md",tags:[],version:"current",frontMatter:{id:"createdata",title:"Create Data",sidebar_label:"Create Data",slug:"/lowcode/create-data"},sidebar:"docs",previous:{title:"CRUD APIs",permalink:"/docs/lowcode/crud"},next:{title:"Update Data",permalink:"/docs/lowcode/update-data"}},p=[],m={toc:p};function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u201cCreate\u201d functions as a mutation to insert data in the table. After creating an instance, you may want to add data to it. Just one function does the job of inserting and updating data, i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"upsert"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"upsert (values: HypiUpsertUnion!) : [Hypi!] !\n")),(0,o.kt)("p",null,"Notice the argument \u2018values\u2019 is plural because it allows you to create or update multiple values in a single request."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Let\u2019s go through an example. ")),(0,o.kt)("p",null,"You may use the below example to insert data into an instance (Information related to Authors)\nRun ",(0,o.kt)("inlineCode",{parentName:"p"},"upsert")," GraphQL mutation in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/lowcode/ui-gql-playground"},"GraphQL Playground")," query section. Provide input data values in ",(0,o.kt)("inlineCode",{parentName:"p"},"Query variables")," section. "),(0,o.kt)("p",null,"The result can be seen in response section. ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," value from the magic hypi object gets returned, when the data gets added to the tables successfully. You can see that data goes to ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," root as shown in the response. "),(0,o.kt)(l.Z,{defaultValue:"query",values:[{label:"GraphQL Query",value:"query"},{label:"Input Data",value:"data"},{label:"Response",value:"response"}],mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"query",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"  mutation Upsert($values: HypiUpsertInputUnion!) {\n    upsert(values: $values) {\n      id\n    }\n  }\n"))),(0,o.kt)(u.Z,{value:"data",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'  {\n    "values": {\n      "Author": [\n      {\n          "name": "Dan Brown",\n          "age": 56,\n          "booklist": [\n            {\n              "title": "Da Vinci Code",\n              "publication": "abc",\n              "available": true\n            },\n            {\n              "title": "The Last Symbol",\n              "publication": "pqr",\n              "available": false\n            }\n          ]\n      },\n      {\n        "name": "Paulo Coelho",\n        "age": 70,\n        "booklist": [\n            {\n              "title": "Alchemist"\n            }         \n          ]\n        }     \n      ]\n    }\n  }\n\n'))),(0,o.kt)(u.Z,{value:"response",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'  {\n    "data": {\n      "upsert": [\n        {\n          "id": "01F0DVHM26HHWS8X8X3NBRSAV6"\n        },\n        {\n          "id": "01F0DVHM2AZCGM0JSR9QRNBWZY"\n        }\n      ]\n    }\n  }\n\n')))),(0,o.kt)("p",null,"For each object i.e. author, an id gets attached automatically. In the above example, we have passed hard-coded data in the form of a query variable. While passing on the data from User Interface, you may pass the data in the form of JSON. Just add JSON data into the variable \u2018values\u2019."))}f.isMDXComponent=!0}}]);