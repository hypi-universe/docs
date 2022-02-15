"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[564],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),s=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(t),m=r,k=c["".concat(u,".").concat(m)]||c[m]||d[m]||o;return t?a.createElement(k,l(l({ref:n},p),{},{components:t})):a.createElement(k,l({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=c;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},1332:function(e,n,t){var a=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},8515:function(e,n,t){t.d(n,{Z:function(){return p}});var a=t(7462),r=t(7294),o=t(2389),l=t(5394),i=t(6010),u="tabItem_tAz6";function s(e){var n,t,o,s=e.lazy,p=e.block,d=e.defaultValue,c=e.values,m=e.groupId,k=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=c?c:f.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),b=(0,l.lx)(h,(function(e,n){return e.value===n.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(n=null!=d?d:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(o=f[0])?void 0:o.props.value;if(null!==y&&!h.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,l.UB)(),g=v.tabGroupChoices,N=v.setTabGroupChoices,T=(0,r.useState)(y),w=T[0],j=T[1],B=[],I=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var A=g[m];null!=A&&A!==w&&h.some((function(e){return e.value===A}))&&j(A)}var D=function(e){var n=e.currentTarget,t=B.indexOf(n),a=h[t].value;a!==w&&(I(n),j(a),null!=m&&N(m,a))},O=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=B.indexOf(e.currentTarget)+1;t=B[a]||B[0];break;case"ArrowLeft":var r=B.indexOf(e.currentTarget)-1;t=B[r]||B[B.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},k)},h.map((function(e){var n=e.value,t=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,key:n,ref:function(e){return B.push(e)},onKeyDown:O,onFocus:D,onClick:D},o,{className:(0,i.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":w===n})}),null!=t?t:n)}))),s?(0,r.cloneElement)(f.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==w})}))))}function p(e){var n=(0,o.Z)();return r.createElement(s,(0,a.Z)({key:String(n)},e))}},2909:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return c},default:function(){return k}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),l=t(8515),i=t(1332),u=["components"],s={id:"references",title:"Creating and removing one-to-one and one-to-many references",sidebar_label:"References",slug:"/lowcode/references"},p=void 0,d={unversionedId:"lowcode/references",id:"lowcode/references",title:"Creating and removing one-to-one and one-to-many references",description:"Hypi can provide one-to-one or one-to-many references for tables.",source:"@site/content/lowcode/references.md",sourceDirName:"lowcode",slug:"/lowcode/references",permalink:"/docs/lowcode/references",editUrl:"https://github.com/hypi-universe/docs/edit/master/content/lowcode/references.md",tags:[],version:"current",frontMatter:{id:"references",title:"Creating and removing one-to-one and one-to-many references",sidebar_label:"References",slug:"/lowcode/references"},sidebar:"docs",previous:{title:"ArcQL filtering",permalink:"/docs/lowcode/arcql"},next:{title:"Authorisation",permalink:"/docs/lowcode/authorisation"}},c=[{value:"Examples",id:"examples",children:[{value:"One-to-One Reference",id:"one-to-one-reference",children:[],level:3},{value:"One-to-Many Reference:",id:"one-to-many-reference",children:[],level:3}],level:2}],m={toc:c};function k(e){var n=e.components,t=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Hypi can provide ",(0,o.kt)("inlineCode",{parentName:"p"},"one-to-one")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"one-to-many")," references for tables."),(0,o.kt)("p",null,"Let\u2019s say you want to connect Table A to Table B through one common field \u2018C\u2019. So, table A has this field C of type B. This is the one-to-one reference. If field C is an array or list of type B, it is a one-to-many kind of reference."),(0,o.kt)("p",null,"For creating a reference, Hypi has the built-in function ",(0,o.kt)("inlineCode",{parentName:"p"},"link"),". The references can be removed using the ",(0,o.kt)("inlineCode",{parentName:"p"},"unlink")," function."),(0,o.kt)("p",null,"Let\u2019s check the signatures of link and unlink functions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"link(\n    from:HypiMutationType!\n    to:HypiMutationType!\n    via:String!\n    whereFromID:String!\n    andToID:String!\n):Boolean!\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"unlink(\n    from:HypiMutationType!\n    to:HypiMutationType!\n    via:String!\n    whereFromID:String!\n    andToID:String!\n):Boolean!\n")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Parameter")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Description")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Example")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"from")),(0,o.kt)("td",{parentName:"tr",align:null},"The data type from where reference needs to be created"),(0,o.kt)("td",{parentName:"tr",align:null},"from: \u2018Author\u2019")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"to")),(0,o.kt)("td",{parentName:"tr",align:null},"The data type to be referred"),(0,o.kt)("td",{parentName:"tr",align:null},"to: \u2018Book\u2019")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"via")),(0,o.kt)("td",{parentName:"tr",align:null},"The field of object \u2018to\u2019 in the object \u2018from\u2019"),(0,o.kt)("td",{parentName:"tr",align:null},"Booklist")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"whereFromID")),(0,o.kt)("td",{parentName:"tr",align:null},"Hypi ID of the Object of type \u2018from\u2019 that needs an entry of object \u2018to\u2019"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2018Author1\u2019")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"andToID")),(0,o.kt)("td",{parentName:"tr",align:null},"Hypi ID of the Object of type \u2018to\u2019 that needs to be entered into the object of type \u2018from\u2019"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2018Book1\u2019")))),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"To go through examples, we will need below schema."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"type Book {\n    title:\xa0String\n    authorid:\xa0Int\n    price:\xa0Float\n}\n\ntype Author\xa0{\n    name:\xa0String\n    age:\xa0Int\n    bestbook:\xa0Book\n    booklist:\xa0[Book!]\n}\n")),(0,o.kt)("p",null,"Here, the field ",(0,o.kt)("inlineCode",{parentName:"p"},"bestbook")," will be used to generate ",(0,o.kt)("inlineCode",{parentName:"p"},"one-to-one reference")," between table ",(0,o.kt)("inlineCode",{parentName:"p"},"Author")," and table ",(0,o.kt)("inlineCode",{parentName:"p"},"Book"),". Also, the field ",(0,o.kt)("inlineCode",{parentName:"p"},"booklist")," will be used to generate ",(0,o.kt)("inlineCode",{parentName:"p"},"one-to-many")," kind of references."),(0,o.kt)("p",null,"Let\u2019s add data in the table Author and table Book as follows."),(0,o.kt)(l.Z,{defaultValue:"query",values:[{label:"GraphQL Query",value:"query"},{label:"Input Data",value:"data"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"query",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"\nmutation Upsert($values: HypiUpsertInputUnion!) {\n  upsert(values: $values) {\n    id\n  }\n}\n"))),(0,o.kt)(i.Z,{value:"data",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'#Author Table\n{\n  "data": {\n    "find": {\n      "edges": [\n        {\n          "node": {\n            "name": "Dan Brown",\n            "age": 56,\n            "bestbook": {\n              "title": "Inferno",\n              "authorid": 1\n            },\n            "booklist": [\n              {\n                "title": "Da Vinci Code",\n                "authorid": 1\n              },\n              {\n                "title": "The Last Symbol",\n                "authorid": 1\n              }\n            ]\n          },\n          "cursor": "Author1"\n        }\n      ]\n    }\n  }\n}\n\n#Book Table\n\n{\n  "values": {\n    "Book": [\n      {\n        "hypi": {"id": "Book1"},\n        "title":  "Inferno",\n        "authorid": 1\n      }       \n    ]\n  }\n}      \n')))),(0,o.kt)("h3",{id:"one-to-one-reference"},"One-to-One Reference"),(0,o.kt)("p",null,"If you want to enter ",(0,o.kt)("inlineCode",{parentName:"p"},"Book1")," as the bestbook of Author1, you may link Author1 with Book1 via field ",(0,o.kt)("inlineCode",{parentName:"p"},"bestbook"),"."),(0,o.kt)(l.Z,{defaultValue:"query",values:[{label:"GraphQL Query",value:"query"},{label:"Response",value:"response"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"query",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'mutation {\n    link(from:Author,to:Book,\n    via:"bestbook",whereFromID:"Author1",andToID:"Book1")\n}\n'))),(0,o.kt)(i.Z,{value:"response",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "link": true\n  }\n}\n')))),(0,o.kt)("p",null,"Linking the tables results in the insertion of data from Book1 into the field Bestbook of Author1. Now, retrieve data of Author using find function and verify."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "find": {\n      "edges": [\n        {\n          "node": {\n            "name": "Dan Brown",\n            "age": 56,\n            //Book1 Inserted\n            "bestbook": {\n              "title": "Inferno",\n              "authorid": 1\n            },\n            "booklist": [\n              {\n                "title": "Da Vinci Code",\n                "authorid": 1\n              },\n              {\n                "title": "The Last Symbol",\n                "authorid": 1\n              }\n            ]\n          },\n          "cursor": "Author1"\n        }\n      ]\n    }\n  }\n}\n')),(0,o.kt)("p",null,"You may remove the reference using the unlink function."),(0,o.kt)(l.Z,{defaultValue:"query",values:[{label:"GraphQL Query",value:"query"},{label:"Response",value:"response"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"query",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'mutation{\n    unlink(from:Author,to:Book,\n    via:"bestbook",whereFromID:"Author1",andToID:"Book1")\n}\n'))),(0,o.kt)(i.Z,{value:"response",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "unlink": true\n  }\n}\n')))),(0,o.kt)("p",null,"This results in the setting of the value of bestbook as null. Book1 data remains as it is. But the object simply gets removed from the field bestbook of object Author1."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "find": {\n      "edges": [\n        {\n          "node": {\n            "name": "Dan Brown",\n            "age": 56,\n             //Book1 entry removed\n            "bestbook": null,\n            "booklist": [\n              {\n                "title": "Da Vinci Code",\n                "authorid": 1\n              },\n              {\n                "title": "The Last Symbol",\n                "authorid": 1\n              },\n              {\n                "title": "Inferno",\n                "authorid": 1\n              }\n            ]\n          },\n          "cursor": "Author1"\n        }\n      ]\n    }\n  }\n}\n')),(0,o.kt)("h3",{id:"one-to-many-reference"},"One-to-Many Reference:"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"link")," function works on an array as well. You may link to the booklist field from the Author1 object to Book1. So an entry of Book1 gets added into the booklist array of Author1."),(0,o.kt)(l.Z,{defaultValue:"query",values:[{label:"GraphQL Query",value:"query"},{label:"Response",value:"response"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"query",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'mutation{\n    link(from:Author,to:Book,\n    via:"booklist",whereFromID:"Author1",andToID:"Book1")\n}\n'))),(0,o.kt)(i.Z,{value:"response",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "link": true\n  }\n}\n')))),(0,o.kt)("p",null,"You may retrieve data from Author1 using find function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "find": {\n      "edges": [\n        {\n          "node": {\n            "name": "Dan Brown",\n            "age": 56,\n            "bestbook": null,\n            "booklist": [\n              {\n                "title": "Da Vinci Code",\n                "authorid": 1\n              },\n              {\n                "title": "The Last Symbol",\n                "authorid": 1\n              },\n                //Book1 inserted in the array\n              {\n                "title": "Inferno",\n                "authorid": 1\n              }\n            ]\n          },\n          "cursor": "Author1"\n        }\n      ]\n    }\n  }\n}\n')),(0,o.kt)("p",null,"Unlinking the reference would simply remove the entry Book1 from the booklist. The Book1 object would not get deleted from the platform. But its entry would be removed from the array. "),(0,o.kt)(l.Z,{defaultValue:"query",values:[{label:"GraphQL Query",value:"query"},{label:"Response",value:"response"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"query",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'mutation{\n    unlink(from:Author,to:Book,\n    via:"booklist",whereFromID:"Author1",andToID:"Author1Book1")\n}\n'))),(0,o.kt)(i.Z,{value:"response",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "unlink": true\n  }\n}\n')))),(0,o.kt)("p",null,"Retrieve Author1 data to get following result."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "values": {\n    "Author": [\n      {\n        "hypi": {"id": "Author1"},\n        "name": "Dan Brown",\n        "age": 56,\n        "booklist":[\n          {\n            "hypi": {"id": "Author1Book1"},\n            "title": "Da Vinci Code",\n            "price": 12.99,\n            "authorid": 1\n          },\n          {\n            "hypi": {"id": "Author1Book2"},\n            "title": "The Last Symbol",\n            "price": 10,\n            "authorid": 1\n          }          \n        ] \n      }       \n    ]\n  }\n}      \n\n')),(0,o.kt)("p",null,"Using link and unlink function you may add or remove objects from the array of objects."))}k.isMDXComponent=!0}}]);