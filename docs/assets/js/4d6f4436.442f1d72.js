(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2352],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,h=m["".concat(d,".").concat(c)]||m[c]||u[c]||i;return n?a.createElement(h,l(l({ref:t},s),{},{components:n})):a.createElement(h,l({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5064:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var a=n(7294),r=n(9443);var i=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(6010),o="tabItem_1uMI",d="tabItemActive_2DSg";var p=37,s=39;var u=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,u=e.values,m=e.groupId,c=e.className,h=i(),f=h.tabGroupChoices,k=h.setTabGroupChoices,g=(0,a.useState)(r),N=g[0],b=g[1],y=a.Children.toArray(e.children),v=[];if(null!=m){var w=f[m];null!=w&&w!==N&&u.some((function(e){return e.value===w}))&&b(w)}var T=function(e){var t=e.currentTarget,n=v.indexOf(t),a=u[n].value;b(a),null!=m&&(k(m,a),setTimeout((function(){var e,n,a,r,i,l,o,p;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,l=window,o=l.innerHeight,p=l.innerWidth,n>=0&&i<=p&&r<=o&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(d),setTimeout((function(){return t.classList.remove(d)}),2e3))}),150))},C=function(e){var t,n;switch(e.keyCode){case s:var a=v.indexOf(e.target)+1;n=v[a]||v[0];break;case p:var r=v.indexOf(e.target)-1;n=v[r]||v[v.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},c)},u.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":N===t}),key:t,ref:function(e){return v.push(e)},onKeyDown:C,onFocus:T,onClick:T},n)}))),t?(0,a.cloneElement)(y.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}},9443:function(e,t,n){"use strict";var a=(0,n(7294).createContext)(void 0);t.Z=a},6788:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return m},default:function(){return h}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),l=n(5064),o=n(8215),d=["components"],p={id:"readdata",title:"Read Data",sidebar_label:"Read Data",slug:"/read-data"},s=void 0,u={unversionedId:"readdata",id:"readdata",isDocsHomePage:!1,title:"Read Data",description:"Read the inserted data by using query functions. get and find are the two functions that return the data. If you need a single record, use the get function. For getting multiple records, use the find function.",source:"@site/content/readdata.md",sourceDirName:".",slug:"/read-data",permalink:"/docs/read-data",editUrl:"https://github.com/hypi-universe/docs/edit/master/content/readdata.md",version:"current",frontMatter:{id:"readdata",title:"Read Data",sidebar_label:"Read Data",slug:"/read-data"},sidebar:"docs",previous:{title:"Update Data",permalink:"/docs/update-data"},next:{title:"Delete Data",permalink:"/docs/delete-data"}},m=[{value:"Get",id:"get",children:[]},{value:"Find",id:"find",children:[{value:"Pagination",id:"pagination",children:[]}]}],c={toc:m};function h(e){var t=e.components,n=(0,r.Z)(e,d);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Read the inserted data by using query functions. ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"find")," are the two functions that return the data. If you need a single record, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," function. For getting multiple records, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"find")," function."),(0,i.kt)("h2",{id:"get"},"Get"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," function returns a single record using the \u2018id\u2019 of an object. You may use the \u2018id\u2019 received after creating the record. The ",(0,i.kt)("a",{parentName:"p",href:"/docs/magic-hypi-object"},"magic hypi object")," also contains the \u2018id\u2019 of the object (",(0,i.kt)("inlineCode",{parentName:"p"},"hypi.id"),")."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"get(type:\xa0HypiMutationType!, id:\xa0String!):\xa0HypiRootAggregate\n")),(0,i.kt)("p",null,"Let\u2019s pass the ",(0,i.kt)("inlineCode",{parentName:"p"},"Author")," data type as an argument to fetch the data. Get the records in the fields like name, booklist, hypi id, created date, updated date. You can get titles and availability of books from the array booklist. You may use the fields from which you want to fetch the data."),(0,i.kt)(l.Z,{defaultValue:"query",values:[{label:"GraphQL Query",value:"query"},{label:"Response",value:"response"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"query",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'{\n  get(type: Author, id: "01F0DVHM26HHWS8X8X3NBRSAV6"){\n    ... on Author {\n      hypi{\n        id\n        created\n        updated\n      }\n      name\n      booklist{\n        title\n        available\n      }\n    }\n  }\n}\n'))),(0,i.kt)(o.Z,{value:"response",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "get": {\n      "hypi": {\n        "id": "01F0DVHM26HHWS8X8X3NBRSAV6"\n      },\n      "name": "Dan Brown",\n      "booklist": [\n        {\n          "title": "Da Vinci Code",\n          "available": true\n        },\n        {\n          "title": "The Last Symbol",\n          "available": false\n        },\n        {\n          "title": "Inferno",\n          "available": true\n        }\n      ]\n    }\n  }\n}\n')))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"find"},"Find"),(0,i.kt)("p",null,"The second approach to getting data out of an instance is by using the",(0,i.kt)("inlineCode",{parentName:"p"},"find"),"\xa0\nfunction. Unlike the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"get"),"\xa0function, this returns a list of objects matching the arcql filter provided."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"find(\n    type:\xa0HypiMutationType!\n    arcql:\xa0String!\n    first:\xa0Int\n    after:\xa0String\n    last:\xa0Int\n    before:\xa0String\n    includeTrashed:\xa0Boolean\n):\xa0HypiFilterConnection!\n")),(0,i.kt)("p",null,"This function has many parameters. Let\u2019s look at this table to understand them."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Parameter")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Description")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Example")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"type")),(0,i.kt)("td",{parentName:"tr",align:null},"The type (table) to find data from"),(0,i.kt)("td",{parentName:"tr",align:null},"Message, Author")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"arcql")),(0,i.kt)("td",{parentName:"tr",align:null},"Query to filter the data"),(0,i.kt)("td",{parentName:"tr",align:null},"arcql: \"hypi.id= '01F0FW9XYQWQNNEDYV3S5P2WGQ'\"")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"first")),(0,i.kt)("td",{parentName:"tr",align:null},"Limit the number of records in the              results. Used with the \u2018after\u2019 parameter."),(0,i.kt)("td",{parentName:"tr",align:null},"12")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"after")),(0,i.kt)("td",{parentName:"tr",align:null},"Return records after an object with this ID"),(0,i.kt)("td",{parentName:"tr",align:null},"\u201c01F0FW9XYQWQNNEDYV3S5P2WGQ\u201d")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"last")),(0,i.kt)("td",{parentName:"tr",align:null},"Limit the number of records in the              results. Used with the \u2018before\u2019 parameter."),(0,i.kt)("td",{parentName:"tr",align:null},"6")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"before")),(0,i.kt)("td",{parentName:"tr",align:null},"Return records before an object with this ID"),(0,i.kt)("td",{parentName:"tr",align:null},"\u201c01F0FW9XYQWQNNEDYV3S5P2WGQ\u201d")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"page")),(0,i.kt)("td",{parentName:"tr",align:null},"The page number to be returned"),(0,i.kt)("td",{parentName:"tr",align:null},"3")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"includeTrashed")),(0,i.kt)("td",{parentName:"tr",align:null},"Display Trashed objects in the                     record. \u2018false\u2019 by default"),(0,i.kt)("td",{parentName:"tr",align:null},"False")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u2018first\u2019 and \u2018after\u2019 parameters work together. \u2018last\u2019 and \u2018before\u2019 work together.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u2018first\u2019 and \u2018last\u2019 are the limits i.e. the max results to return (up to 25)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u2018before\u2019 and \u2018after\u2019 are the ID of objects to return results before or after.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If \u2018before\u2019 is set, then results matching the arcql query are returned before this id")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If \u2018after\u2019 is set, then results matching the arcql query are returned after this id")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u2018includeTrashed\u2019 is false by default. \u2018find\u2019 does not return the objects which were trashed using the \u2018trash\u2019 function. But if you set this parameter to true or use the untrash method then \u2018find\u2019 returns those objects.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"'page' number works with the ",(0,i.kt)("inlineCode",{parentName:"p"},"first")," parameter. If this parameter is specified, then the records get divided into pages. Each page has the number of rows specified by the ",(0,i.kt)("inlineCode",{parentName:"p"},"first")," parameter. "))),(0,i.kt)("p",null,"Let\u2019s check the below example. Records from an ",(0,i.kt)("inlineCode",{parentName:"p"},"Author")," object are received using the ",(0,i.kt)("inlineCode",{parentName:"p"},"find")," function. Records of Hypi IDs, updated date, name of the authors, and count of books are returned."),(0,i.kt)(l.Z,{defaultValue:"query",values:[{label:"GraphQL Query",value:"query"},{label:"Response",value:"response"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"query",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"{  \n   find (\n        type: Author, \n        arcql: \"hypi.id = '01F0DVHM2AZCGM0JSR9QRNBWZY'\"\n   ) \n   {\n    edges {\n      cursor\n      node {\n        ... on Author {\n          hypi {\n            id\n            updated\n          }\n          name\n          count\n        }\n      }\n    }\n  }\n}\n"))),(0,i.kt)(o.Z,{value:"response",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "find": {\n      "edges": [\n        {\n          "cursor": "01F0DVHM2AZCGM0JSR9QRNBWZY",\n          "node": {\n            "hypi": {\n              "id": "01F0DVHM2AZCGM0JSR9QRNBWZY",\n              "updated": "2021-03-10T10:58:59Z"\n            },\n            "name": "Paulo Coelho",\n            "count": 30\n          }\n        }\n      ]\n    }\n  }\n}\n')))),(0,i.kt)("h3",{id:"pagination"},"Pagination"),(0,i.kt)("p",null,"Let's see how the pagination works while retrieving the records.  A ",(0,i.kt)("inlineCode",{parentName:"p"},"page")," has a specific number of rows (",(0,i.kt)("inlineCode",{parentName:"p"},"first"),"). The total number of records get divided by the number of rows to get the number of pages. If the ",(0,i.kt)("inlineCode",{parentName:"p"},"page")," parameter has the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," (integer), the ",(0,i.kt)("inlineCode",{parentName:"p"},"nth")," page gets displayed in the result of  the ",(0,i.kt)("inlineCode",{parentName:"p"},"find")," function."),(0,i.kt)("p",null,"Suppose the ",(0,i.kt)("inlineCode",{parentName:"p"},"book")," object has the following records. The ",(0,i.kt)("inlineCode",{parentName:"p"},"after")," parameter has the ",(0,i.kt)("inlineCode",{parentName:"p"},"hypi.id")," value of the book alchemist. The pagination starts after the Alchemist record.  Let's say each page has two books (",(0,i.kt)("inlineCode",{parentName:"p"},"first")," parameter). So, the remaining records after Alchemist get divided into two records each. The table shows the page number of each record."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Book")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Page No")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"The Last Symbol"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Alchemist ( ",(0,i.kt)("strong",{parentName:"td"},"after")," Parameter)"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"In the wonderland of Investment"),(0,i.kt)("td",{parentName:"tr",align:null},"1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Ikigai"),(0,i.kt)("td",{parentName:"tr",align:null},"1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Outlook"),(0,i.kt)("td",{parentName:"tr",align:null},"2")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Blink"),(0,i.kt)("td",{parentName:"tr",align:null},"2")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"History of nearly everything"),(0,i.kt)("td",{parentName:"tr",align:null},"3")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Sapiens"),(0,i.kt)("td",{parentName:"tr",align:null},"3")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Hamlet"),(0,i.kt)("td",{parentName:"tr",align:null},"4")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Merchant of Venice"),(0,i.kt)("td",{parentName:"tr",align:null},"4")))),(0,i.kt)("p",null," Let's retrieve ",(0,i.kt)("inlineCode",{parentName:"p"},"page")," ",(0,i.kt)("strong",{parentName:"p"},"3")," after the alchemist record. Here is the query."),(0,i.kt)(l.Z,{defaultValue:"query",values:[{label:"GraphQL Query",value:"query"},{label:"Response",value:"response"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"query",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'{\n  find(type: Book, arcql: "*", first: 2, after:"01F6EFAYAX79ZG3Q13WGXKDAR5", page:3) {\n    edges {\n      node {\n        ... on Book {\n         title\n          \n        }\n      }\n      cursor\n    }\n  }\n}\n'))),(0,i.kt)(o.Z,{value:"response",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "find": {\n      "edges": [\n        {\n          "node": {\n            "title": "History of nearly everything"\n          },\n          "cursor": "01F6EFAYBSDNHTHVQRGJRDJPPK"\n        },\n        {\n          "node": {\n            "title": "Sapiens"\n          },\n          "cursor": "01F6EFAYBXQPRTJFB1K5QE29SM"\n        }\n      ]\n    }\n  }\n}\n')))),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"after")," parameter has not been specified, the pagination begins from the first record."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"page")," parameter doesn't work with the ",(0,i.kt)("inlineCode",{parentName:"p"},"before")," parameter."))))}h.isMDXComponent=!0},6010:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);