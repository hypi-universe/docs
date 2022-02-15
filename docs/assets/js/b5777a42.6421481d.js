"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[871],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return h}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(t),h=r,m=c["".concat(p,".").concat(h)]||c[h]||d[h]||i;return t?a.createElement(m,l(l({ref:n},u),{},{components:t})):a.createElement(m,l({ref:n},u))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},1332:function(e,n,t){var a=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},8515:function(e,n,t){t.d(n,{Z:function(){return u}});var a=t(7462),r=t(7294),i=t(2389),l=t(5394),o=t(6010),p="tabItem_tAz6";function s(e){var n,t,i,s=e.lazy,u=e.block,d=e.defaultValue,c=e.values,h=e.groupId,m=e.className,y=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=c?c:y.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),v=(0,l.lx)(k,(function(e,n){return e.value===n.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===d?d:null!=(n=null!=d?d:null==(t=y.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(i=y[0])?void 0:i.props.value;if(null!==f&&!k.some((function(e){return e.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,l.UB)(),T=g.tabGroupChoices,b=g.setTabGroupChoices,N=(0,r.useState)(f),w=N[0],q=N[1],A=[],C=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var E=T[h];null!=E&&E!==w&&k.some((function(e){return e.value===E}))&&q(E)}var R=function(e){var n=e.currentTarget,t=A.indexOf(n),a=k[t].value;a!==w&&(C(n),q(a),null!=h&&b(h,a))},D=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=A.indexOf(e.currentTarget)+1;t=A[a]||A[0];break;case"ArrowLeft":var r=A.indexOf(e.currentTarget)-1;t=A[r]||A[A.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":u},m)},k.map((function(e){var n=e.value,t=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,key:n,ref:function(e){return A.push(e)},onKeyDown:D,onFocus:R,onClick:R},i,{className:(0,o.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":w===n})}),null!=t?t:n)}))),s?(0,r.cloneElement)(y.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},y.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==w})}))))}function u(e){var n=(0,i.Z)();return r.createElement(s,(0,a.Z)({key:String(n)},e))}},1412:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return c},default:function(){return m}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),l=t(8515),o=t(1332),p=["components"],s={id:"rest-apis",title:"RESTful APIs",sidebar_label:"RESTful APIs",slug:"/lowcode/rest-apis"},u=void 0,d={unversionedId:"lowcode/rest-apis",id:"lowcode/rest-apis",title:"RESTful APIs",description:"Hypi platform provides APIs with multiple flavors that suit different developers' tastes. The RESTful APIs are no different and at the same time, they were redesigned to abide by the HATEOS code of conduct for better semantics and easier interpretation.",source:"@site/content/lowcode/rest-apis.md",sourceDirName:"lowcode",slug:"/lowcode/rest-apis",permalink:"/docs/lowcode/rest-apis",editUrl:"https://github.com/hypi-universe/docs/edit/master/content/lowcode/rest-apis.md",tags:[],version:"current",frontMatter:{id:"rest-apis",title:"RESTful APIs",sidebar_label:"RESTful APIs",slug:"/lowcode/rest-apis"},sidebar:"docs",previous:{title:"File Upload",permalink:"/docs/lowcode/fileupload"},next:{title:"OAuth2 Login",permalink:"/docs/lowcode/oauth2login"}},c=[{value:"Authentication",id:"authentication",children:[{value:"GET",id:"get",children:[{value:"Login with Username",id:"login-with-username",children:[],level:4},{value:"Login with Email",id:"login-with-email",children:[],level:4}],level:3},{value:"POST",id:"post",children:[{value:"Login with Username",id:"login-with-username-1",children:[],level:4},{value:"Login with Email",id:"login-with-email-1",children:[],level:4}],level:3}],level:2},{value:"CRUD Operations",id:"crud-operations",children:[{value:"Create Data with POST",id:"create-data-with-post",children:[],level:3},{value:"Update data with PUT",id:"update-data-with-put",children:[],level:3},{value:"Read data with GET using an ID",id:"read-data-with-get-using-an-id",children:[],level:3},{value:"Read data with ArcQL Filter",id:"read-data-with-arcql-filter",children:[],level:3},{value:"DELETE Data using an ID",id:"delete-data-using-an-id",children:[],level:3},{value:"DELETE data using ArcQL filter",id:"delete-data-using-arcql-filter",children:[],level:3}],level:2},{value:"GraphQL/ArcQL Functions",id:"graphqlarcql-functions",children:[{value:"Create Data",id:"create-data",children:[],level:4},{value:"Update Data",id:"update-data",children:[],level:4},{value:"Read Data",id:"read-data",children:[{value:"Find",id:"find",children:[],level:5}],level:4}],level:2}],h={toc:c};function m(e){var n=e.components,t=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Hypi platform provides APIs with multiple flavors that suit different developers' tastes. The RESTful APIs are no different and at the same time, they were redesigned to abide by the ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/HATEOAS"},"HATEOS")," code of conduct for better semantics and easier interpretation."),(0,i.kt)("p",null,"REST APIs conform to the constraints of the ",(0,i.kt)("strong",{parentName:"p"},"REST")," architectural style and allows for interaction with RESTful web services. The endpoint  ",(0,i.kt)("inlineCode",{parentName:"p"},"https://api.hypi.app/rest")," allows you to use standard REST-like requests to execute queries against your instance."),(0,i.kt)("p",null,"Restful APIs include Authentication or CRUD functions like ",(0,i.kt)("inlineCode",{parentName:"p"},"login")," ,",(0,i.kt)("inlineCode",{parentName:"p"},"upsert"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"delete"),",",(0,i.kt)("inlineCode",{parentName:"p"},"find")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"get"),"."),(0,i.kt)("p",null,"There could be multiple ways to execute these functions. It allows Hypi developers to take advantage of the flexibility and tuning the APIs to their awesome applications."),(0,i.kt)("p",null,"Let's work with the ",(0,i.kt)("inlineCode",{parentName:"p"},"Author")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Book")," schema again to execute Restful APIs."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"type\xa0Author\xa0{\n    name:\xa0String\n    age:\xa0Int\n    bestbook:\xa0Book\n    booklist:\xa0[Book!]\n}\n\ntype\xa0Book\xa0{\n    title:\xa0String\n    authorid:\xa0Int\n    price:\xa0Float\n}\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Headers for all the RESTful APIs include App Instance Domain as ",(0,i.kt)("inlineCode",{parentName:"p"},"hypi-domain")," and  ",(0,i.kt)("inlineCode",{parentName:"p"},"application/json")," as ",(0,i.kt)("inlineCode",{parentName:"p"},"content-type"),"."),(0,i.kt)("p",{parentName:"div"},"For CRUD operations, an authorization header is required with ",(0,i.kt)("inlineCode",{parentName:"p"},"Authorization Token")," from the instance."))),(0,i.kt)("h2",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"Users can login either by a username or an email. Logins can be triggered either by ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"POST"),". It provides an either/or alternative. You may choose the one that suits your need. The end result would be the same."),(0,i.kt)("h3",{id:"get"},"GET"),(0,i.kt)("h4",{id:"login-with-username"},"Login with Username"),(0,i.kt)("p",null,"The first is the login using the username method. Username and Password are provided in the URL as query parameters."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"rest/v1/fn/query/login?username=x&password=y&type=query")),(0,i.kt)("p",null,"Note: Replace x and y with actual username and password."),(0,i.kt)(l.Z,{defaultValue:"query",values:[{label:"Request",value:"query"},{label:"Response",value:"response"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"query",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"$ curl --location --request GET \n    '/rest/v1/fn/query/login?username=x&password=y&type=query' \\\n  --header 'hypi-domain: whipcord.apps.hypi.app' \\\n  --header 'content-type: application/json'\n"))),(0,i.kt)(o.Z,{value:"response",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "login": {\n      "hypi": null,\n      "sessionToken": "eyJhb ...",\n      "sessionExpires": 1598888479,\n      "errorCode": null,\n      "errorMsg": null\n    }\n  }\n}\n')))),(0,i.kt)("h4",{id:"login-with-email"},"Login with Email"),(0,i.kt)("p",null,"The second is the login using the email method. Email and Password are provided in the URL as query parameters."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"/rest/v1/fn/query/loginByEmail?email=x&password=y&type=query")),(0,i.kt)("p",null,"Replace x and y with actual email and password."),(0,i.kt)(l.Z,{defaultValue:"query",values:[{label:"Request",value:"query"},{label:"Response",value:"response"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"query",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"$ curl --location --request GET \n    '/rest/v1/fn/query/loginByEmail?email=x&password=y&type=query' \\\n  --header 'hypi-domain: whipcord.apps.hypi.app' \\\n  --header 'content-type: application/json'\n"))),(0,i.kt)(o.Z,{value:"response",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "loginByEmail": {\n      "hypi": null,\n      "sessionToken": "eyJhb ...",\n      "sessionExpires": 1598888597,\n      "errorCode": null,\n      "errorMsg": null\n    }\n  }\n}\n')))),(0,i.kt)("h3",{id:"post"},"POST"),(0,i.kt)("p",null,"Authentication can also be performed using the POST method."),(0,i.kt)("h4",{id:"login-with-username-1"},"Login with Username"),(0,i.kt)("p",null,"The first is the login using the username method. The username and password are provided as input data."),(0,i.kt)(l.Z,{defaultValue:"query",values:[{label:"Request",value:"query"},{label:"Response",value:"response"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"query",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"$ curl --location --request POST '/rest/v1/login' \\\n  --header 'hypi-domain: whipcord.apps.hypi.app' \\\n  --header 'content-type: application/json' \\\n  --data-raw '{\n      \"username\": \"x\",\n      \"password\": \"y\"\n  }'\n"))),(0,i.kt)(o.Z,{value:"response",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "login": {\n      "hypi": null,\n      "sessionToken": "eyJhb ...",\n      "sessionExpires": 1598888836,\n      "errorCode": null,\n      "errorMsg": null\n    }\n  }\n}\n')))),(0,i.kt)("h4",{id:"login-with-email-1"},"Login with Email"),(0,i.kt)("p",null,"The second is again the login using the email method."),(0,i.kt)(l.Z,{defaultValue:"query",values:[{label:"Request",value:"query"},{label:"Response",value:"response"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"query",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"$ curl --location --request POST '/rest/v1/login' \\\n    --header 'hypi-domain: whipcord.apps.hypi.app' \\\n  --header 'content-type: application/json' \\\n  --data-raw '{\n      \"email\": \"x\",\n      \"password\": \"y\"\n  }'\n"))),(0,i.kt)(o.Z,{value:"response",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "loginByEmail": {\n      "hypi": null,\n      "sessionToken": "eyJhb ...",\n      "sessionExpires": 1598888914,\n      "errorCode": null,\n      "errorMsg": null\n    }\n  }\n}\n')))),(0,i.kt)("h2",{id:"crud-operations"},"CRUD Operations"),(0,i.kt)("p",null,"The four basic CRUD operations ",(0,i.kt)("strong",{parentName:"p"},"C"),"reate, ",(0,i.kt)("strong",{parentName:"p"},"R"),"ead, ",(0,i.kt)("strong",{parentName:"p"},"U"),"pdate, and ",(0,i.kt)("strong",{parentName:"p"},"D"),"elete can be performed using the semantics of ",(0,i.kt)("strong",{parentName:"p"},"P"),"ost, ",(0,i.kt)("strong",{parentName:"p"},"G"),"et, ",(0,i.kt)("strong",{parentName:"p"},"P"),"ut, and ",(0,i.kt)("strong",{parentName:"p"},"D"),"elete HTTP methods. "),(0,i.kt)("p",null,"The main REST APIs endpoint is ",(0,i.kt)("inlineCode",{parentName:"p"},"https://api.hypi.app/rest/v1")),(0,i.kt)("p",null,"The APIs endpoint can be mapped to resources using the /{aggregate} or /{aggregate}/{identifier} for both GET and DELETE methods.  ",(0,i.kt)("inlineCode",{parentName:"p"},"{aggregate}")," is the GraphQL type name from your app's schema and ",(0,i.kt)("inlineCode",{parentName:"p"},"{identifier}")," is the ID of the object of the GraphQL type."),(0,i.kt)("p",null,"E.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"https://api.hypi.app/Author/Author1")),(0,i.kt)("p",null,"POST and PUT will capture the identifiers from the GraphQL request body to avoid redundancy. "),(0,i.kt)("p",null,"The RESTful APIs explained herein allow the same functionality as the CRUD operations explained under ",(0,i.kt)("a",{parentName:"p",href:"/docs/lowcode/crud"},"Hypi Platform CRUD Documentation")),(0,i.kt)("h3",{id:"create-data-with-post"},"Create Data with POST"),(0,i.kt)("p",null,"To create a resource, send a POST request to the ",(0,i.kt)("inlineCode",{parentName:"p"},"/rest/v1")," endpoint with the body containing the resource signature as defined by the GraphQL types. The body (--data-raw) contains the data to be inserted in the Author table. The format of the input data is the same as normal ",(0,i.kt)("a",{parentName:"p",href:"/docs/lowcode/create-data"},"Create")," operation."),(0,i.kt)(l.Z,{defaultValue:"query",values:[{label:"Request",value:"query"},{label:"Response",value:"response"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"query",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'$ curl --location --request POST \'/rest/v1\' \\\n  --header \'authorization: eyJhb ...\' \\\n  --header \'hypi-domain: whipcord.apps.hypi.app\' \\\n  --header \'content-type: application/json\' \\\n  --data-raw \'{\n        "values": {\n        "Author": [\n          {\n            "hypi": {"id": "Author1"},\n            "name": "Dan Brown",\n            "age": 56,\n            "booklist":[\n              {\n                "hypi": {"id": "Author1Book1"},\n                "title": "Da Vinci Code",\n                "price": 12.99,\n                "authorid": 1\n              },\n              {\n                "hypi": {"id": "Author1Book2"},\n                "title": "The Last Symbol",\n                "price": 10,\n                "authorid": 1\n              }\n            ] \n          },\n          {\n            "hypi": {"id": "Author2"},\n            "name": "Paulo Coelho",\n            "age": 70,\n            "booklist":[\n              {\n                "hypi": {"id": "Author2Book1"},\n                "title": "Alchemist",\n                "price": 5.99,\n                 "authorid": 2\n              }\n\n            ] \n          }     \n        ]\n      }\n    }  \n  }\'\n'))),(0,i.kt)(o.Z,{value:"response",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": {\n        "upsert": [\n            {\n                "__typename": "Hypi",\n                "id": "Author1",\n                "impl": null,\n                "created": "2021-04-15T04:04:06Z",\n                "updated": "2021-04-15T04:04:06Z",\n                "trashed": null,\n                "createdBy": "01F2GA50NFXHMYCBDNYFJK1V7R",\n                "instanceId": "01F3826NNRNXSDPVBMTMD47SCK"\n            },\n            {\n                "__typename": "Hypi",\n                "id": "Author2",\n                "impl": null,\n                "created": "2021-04-15T04:04:06Z",\n                "updated": "2021-04-15T04:04:06Z",\n                "trashed": null,\n                "createdBy": "01F2GA50NFXHMYCBDNYFJK1V7R",\n                "instanceId": "01F3826NNRNXSDPVBMTMD47SCK"\n            }\n        ]\n    }\n} \n')))),(0,i.kt)("h3",{id:"update-data-with-put"},"Update data with PUT"),(0,i.kt)("p",null,"To make an ",(0,i.kt)("a",{parentName:"p",href:"/docs/lowcode/update-data"},"update request"),", the same endpoint and the payload can be used.  However, the HTTP method should be ",(0,i.kt)("inlineCode",{parentName:"p"},"PUT"),". "),(0,i.kt)(l.Z,{defaultValue:"query",values:[{label:"Request",value:"query"},{label:"Response",value:"response"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"query",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'$ curl --location --request PUT \'/rest/v1\' \\\n  --header \'authorization: eyJhb ...\' \\\n  --header \'hypi-domain: whipcord.apps.hypi.app\' \\\n  --header \'content-type: application/json\' \\\n  --data-raw \'{\n     {\n      "values": {\n        "Author": [\n          {\n            "hypi": {"id": "Author3"},\n            "name": "Sudha Murti",\n            "age": 70,\n            "booklist":[\n              {\n                "hypi": {"id": "Author3Book1"},\n                "title": "Wise and Otherwise",\n                "price": 3.99,\n                "authorid": 3\n              },\n              {\n                "hypi": {"id": "Author3Book2"},\n                "title": "How I taught my GrandMother to Read",\n                "price": 2.99,\n                "authorid": 3\n              }\n            ] \n          }\n\n        ]\n      }\n    }    \n  }\'\n'))),(0,i.kt)(o.Z,{value:"response",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": {\n        "upsert": [\n            {\n                "__typename": "Hypi",\n                "id": "Author3",\n                "impl": null,\n                "created": "2021-04-15T04:11:57Z",\n                "updated": "2021-04-15T04:11:57Z",\n                "trashed": null,\n                "createdBy": "01F2GA50NFXHMYCBDNYFJK1V7R",\n                "instanceId": "01F3826NNRNXSDPVBMTMD47SCK"\n            }\n        ]\n    }\n}\n')))),(0,i.kt)("h3",{id:"read-data-with-get-using-an-id"},"Read data with GET using an ID"),(0,i.kt)("p",null,"In order to access a resource with a particular hypi ID, the endpoint  ",(0,i.kt)("inlineCode",{parentName:"p"},"/rest/v1")," is appended with ",(0,i.kt)("inlineCode",{parentName:"p"},"{aggregate}/{identifier}"),"  where  ",(0,i.kt)("inlineCode",{parentName:"p"},"{aggregate}")," is the GraphQL type name from your app's schema and ",(0,i.kt)("inlineCode",{parentName:"p"},"{identifier}")," is the ID of the object to get. HTTP method should be GET."),(0,i.kt)("p",null,"E.g. GET /rest/v1/Author/Author3. "),(0,i.kt)("p",null,"This will ",(0,i.kt)("a",{parentName:"p",href:"/docs/lowcode/read-data#get"},"retrieve the data")," from Author3 object. "),(0,i.kt)(l.Z,{defaultValue:"query",values:[{label:"Request",value:"query"},{label:"Response",value:"response"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"query",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"$ curl --location --request GET '/rest/v1/Author/Author3' \\\n  --header 'authorization: eyJhb ...' \\\n  --header 'hypi-domain: whipcord.apps.hypi.app' \\\n  --header 'content-type: application/json'\n"))),(0,i.kt)(o.Z,{value:"response",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": {\n             "hypi": {\n                "__typename": "Hypi",\n                "id": "Author3",\n                "impl": null,\n                "created": "2021-04-15T04:11:57Z",\n                "updated": "2021-04-15T04:11:57Z",\n                "trashed": null,\n                "createdBy": "01F2GA50NFXHMYCBDNYFJK1V7R",\n                "instanceId": "01F3826NNRNXSDPVBMTMD47SCK"\n            },\n            "name": "Sudha Murti",\n            "age": 70,\n            "bestbook": null,\n            "booklist": [\n                {\n                    "__typename": "Book",\n                    "hypi": {\n                        "__typename": "Hypi",\n                        "id": "Author3Book1",\n                        "impl": null,\n                        "created": "2021-04-15T04:11:57Z",\n                        "updated": "2021-04-15T04:11:57Z",\n                        "trashed": null,\n                        "createdBy": "01F2GA50NFXHMYCBDNYFJK1V7R",\n                        "instanceId": "01F3826NNRNXSDPVBMTMD47SCK"\n                    },\n                    "title": "Wise and Otherwise",\n                    "authorid": 3,\n                    "price": 3.99\n                },\n                {\n                    "__typename": "Book",\n                    "hypi": {\n                        "__typename": "Hypi",\n                        "id": "Author3Book2",\n                        "impl": null,\n                        "created": "2021-04-15T04:11:57Z",\n                        "updated": "2021-04-15T04:11:57Z",\n                        "trashed": null,\n                        "createdBy": "01F2GA50NFXHMYCBDNYFJK1V7R",\n                        "instanceId": "01F3826NNRNXSDPVBMTMD47SCK"\n                    },\n                    "title": "How I taught my GrandMother to Read",\n                    "authorid": 3,\n                    "price": 2.99\n                }\n            ]\n        }\n    }\n}\n')))),(0,i.kt)("h3",{id:"read-data-with-arcql-filter"},"Read data with ArcQL Filter"),(0,i.kt)("p",null,"GraphQL ",(0,i.kt)("inlineCode",{parentName:"p"},"find")," method can be used to access a resource. Append the endpoint /rest/v1 with {aggregate} and pass on the arcql statement as query parameter."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The ArcQL parameter accepts any valid filter supported by ",(0,i.kt)("a",{parentName:"p",href:"/docs/lowcode/arcql"},"ArcQL"),". "))),(0,i.kt)("p",null,"In the below example, ",(0,i.kt)("inlineCode",{parentName:"p"},"arcql=title='Wise and Otherwise")," is an arcql filter to retrieve the details of a book with the title ",(0,i.kt)("inlineCode",{parentName:"p"},"Wise and Otherwise"),"."),(0,i.kt)(l.Z,{defaultValue:"query",values:[{label:"Request",value:"query"},{label:"Response",value:"response"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"query",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"$ curl --location \n  --request GET \"/rest/v1/Book?arcql=title='Wise and Otherwise'\" \\\n  --header 'authorization: eyJhb ...' \\\n  --header 'hypi-domain: whipcord.apps.hypi.app' \\\n  --header 'content-type: application/json'\n"))),(0,i.kt)(o.Z,{value:"response",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": {\n        "find": {\n            "edges": [\n                {\n                    "cursor": "Author3Book1",\n                    "node": {\n                        "__typename": "Book",\n                        "hypi": {\n                            "__typename": "Hypi",\n                            "id": "Author3Book1",\n                            "impl": null,\n                            "created": "2021-04-15T04:11:57Z",\n                            "updated": "2021-04-15T04:11:57Z",\n                            "trashed": null,\n                            "createdBy": "01F2GA50NFXHMYCBDNYFJK1V7R",\n                            "instanceId": "01F3826NNRNXSDPVBMTMD47SCK"\n                        },\n                        "title": "Wise and Otherwise",\n                        "authorid": 3,\n                        "price": 3.99\n                    }\n                }\n            ],\n            "pageInfo": {\n                "hasPreviousPage": false,\n                "hasNextPage": false,\n                "startCursor": "FIRST",\n                "endCursor": "LAST",\n                "pageLimit": 25,\n                "previousOffsets": [],\n                "nextOffsets": []\n            }\n        }\n    }\n}\n')))),(0,i.kt)("h3",{id:"delete-data-using-an-id"},"DELETE Data using an ID"),(0,i.kt)("p",null,"In order to delete a resource, enter {aggregate}/{identifier} as explained earlier. HTTP method should be DELETE."),(0,i.kt)("p",null,"As Author and Book tables are linked with one-to-many references, you will not be able to delete data without unlinking the references. Hence, pass on ",(0,i.kt)("inlineCode",{parentName:"p"},"clearArrayReferences=true")," in the query parameter. "),(0,i.kt)("p",null,"Check more about Delete function ",(0,i.kt)("a",{parentName:"p",href:"/docs/lowcode/delete-data#delete"},"here"),"."),(0,i.kt)(l.Z,{defaultValue:"query",values:[{label:"Request",value:"query"},{label:"Response",value:"response"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"query",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"$ curl --location \n  --request DELETE '/rest/v1/Author/Author1?clearArrayReferences=true' \\\n  --header 'authorization: eyJhb ...' \\\n  --header 'hypi-domain: whipcord.apps.hypi.app' \\\n  --header 'content-type: application/json'\n"))),(0,i.kt)(o.Z,{value:"response",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "delete": 1\n  }\n}\n')))),(0,i.kt)("h3",{id:"delete-data-using-arcql-filter"},"DELETE data using ArcQL filter"),(0,i.kt)("p",null,"Delete functionality can also be implemeted using ArcQL filter. The arcql query is passed as a query parameter. (",(0,i.kt)("inlineCode",{parentName:"p"},"arcql=hypi.id='Author2Book1'"),") .  "),(0,i.kt)(l.Z,{defaultValue:"query",values:[{label:"Request",value:"query"},{label:"Response",value:"response"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"query",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"$ curl --location --request DELETE \n  \"/rest/v1/Book?clearArrayReferences=true&arcql=hypi.id='Author2Book1'\" \\\n  --header 'authorization: eyJhb ...' \\\n  --header 'hypi-domain: whipcord.apps.hypi.app' \\\n  --header 'content-type: application/json'\n"))),(0,i.kt)(o.Z,{value:"response",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "delete": 1\n  }\n}\n')))),(0,i.kt)("h2",{id:"graphqlarcql-functions"},"GraphQL/ArcQL Functions"),(0,i.kt)("p",null,"Any arbitrary GraphQL function like ",(0,i.kt)("inlineCode",{parentName:"p"},"upsert"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"find"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"delete")," can be triggered using the following endpoint."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Endpoints: ",(0,i.kt)("inlineCode",{parentName:"li"},"/rest/v1/fn/{root}/{fn}")),(0,i.kt)("li",{parentName:"ul"},"Replace {root} with either of ",(0,i.kt)("inlineCode",{parentName:"li"},"query")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"mutation")),(0,i.kt)("li",{parentName:"ul"},"Replace {fn} with any GraphQL function such as get, find, login, or your own GraphQL function that you defined in your app's schema.")),(0,i.kt)("h4",{id:"create-data"},"Create Data"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"POST")," can be used to create resources on the server. This is equivalent to calling the Hypi ",(0,i.kt)("inlineCode",{parentName:"p"},"upsert")," function in GraphQL. Use the endpoint ",(0,i.kt)("inlineCode",{parentName:"p"},"/rest/v1/fn/mutation/upsert")," to create an object."),(0,i.kt)(l.Z,{defaultValue:"query",values:[{label:"Request",value:"query"},{label:"Response",value:"response"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"query",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'$ curl --location --request POST \'/rest/v1/fn/mutation/upsert\' \\\n  --header \'authorization: eyJhb ...\' \\\n  --header \'hypi-domain: whipcord.apps.hypi.app\' \\\n  --header \'content-type: application/json\' \\\n  --data-raw \'{\n     {\n      "values": {\n        "Author": [\n          {\n            "hypi": {"id": "Author4"},\n            "name": "P G Wodehouse"\n          }       \n        ]\n      }\n    }   \n  }\'\n'))),(0,i.kt)(o.Z,{value:"response",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": {\n        "upsert": [\n            {\n                "__typename": "Hypi",\n                "id": "Author4",\n                "impl": null,\n                "created": "2021-04-15T05:13:27Z",\n                "updated": "2021-04-15T05:13:27Z",\n                "trashed": null,\n                "createdBy": "01F2GA50NFXHMYCBDNYFJK1V7R",\n                "instanceId": "01F3826NNRNXSDPVBMTMD47SCK"\n            }\n        ]\n    }\n}\n')))),(0,i.kt)("h4",{id:"update-data"},"Update Data"),(0,i.kt)("p",null,"Similar to ",(0,i.kt)("inlineCode",{parentName:"p"},"POST"),",",(0,i.kt)("inlineCode",{parentName:"p"},"PUT")," is used to update/modify existing resources. It is the same thing with the ",(0,i.kt)("inlineCode",{parentName:"p"},"upsert")," function that is also used to modify the resource. Hence, the endpoint remains the same."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"/rest/v1/fn/mutation/upsert")),(0,i.kt)(l.Z,{defaultValue:"query",values:[{label:"Request",value:"query"},{label:"Response",value:"response"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"query",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'$ curl --location --request PUT \'/rest/v1/fn/mutation/upsert\' \\\n  --header \'authorization: eyJhb ...\' \\\n  --header \'hypi-domain: latest.store.hypi.hypi.hypi.app\' \\\n  --header \'content-type: application/json\' \\\n  --data-raw \'{\n      {\n          "values": {\n            "Author": [\n              {\n                "hypi": {"id": "Author5"},\n                "name": "Enid Blyton"\n\n              }       \n            ]\n          }\n       }\n   }\'\n'))),(0,i.kt)(o.Z,{value:"response",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": {\n        "upsert": [\n            {\n                "__typename": "Hypi",\n                "id": "Author5",\n                "impl": null,\n                "created": "2021-04-15T05:14:48Z",\n                "updated": "2021-04-15T05:14:48Z",\n                "trashed": null,\n                "createdBy": "01F2GA50NFXHMYCBDNYFJK1V7R",\n                "instanceId": "01F3826NNRNXSDPVBMTMD47SCK"\n            }\n        ]\n    }\n}\n')))),(0,i.kt)("h4",{id:"read-data"},"Read Data"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"R"),"ead requests discussed above can be rephrased as arbitrary GraphQL functions by using ",(0,i.kt)("inlineCode",{parentName:"p"},"query/get")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"query/find"),"."),(0,i.kt)("h5",{id:"find"},"Find"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")," , ",(0,i.kt)("inlineCode",{parentName:"p"},"PUT")," , ",(0,i.kt)("inlineCode",{parentName:"p"},"POST"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"DELETE")," methods above are all semantics to make the API more familiar and inline with existing common practice.  Data can be retrieved using the the ",(0,i.kt)("inlineCode",{parentName:"p"},"find")," function passing the ",(0,i.kt)("inlineCode",{parentName:"p"},"aggregate")," to the ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," query parameter.  An arcql query can also be appended to it. Two query parameters can be separated using '&'. "),(0,i.kt)("p",null,"E.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"/rest/v1/fn/query/find?type=Author&arcql=hypi.id='Author5'")),(0,i.kt)("p",null,"Unlike the ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")," function, this returns a list of objects matching the filter provided."),(0,i.kt)(l.Z,{defaultValue:"query",values:[{label:"Request",value:"query"},{label:"Response",value:"response"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"query",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"$ curl --location \n  --request GET \"/rest/v1/fn/query/find?type=Author&arcql=hypi.id='Author5'\" \\\n  --header 'authorization: eyJhb ...' \\\n  --header 'hypi-domain: latest.store.hypi.hypi.hypi.app' \\\n  --header 'content-type: application/json'\n"))),(0,i.kt)(o.Z,{value:"response",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": {\n        "find": {\n            "edges": [\n                {\n                    "cursor": "Author5",\n                    "node": {\n                        "__typename": "Author",\n                        "hypi": {\n                            "__typename": "Hypi",\n                            "id": "Author5",\n                            "impl": null,\n                            "created": "2021-04-15T05:14:48Z",\n                            "updated": "2021-04-15T05:14:48Z",\n                            "trashed": null,\n                            "createdBy": "01F2GA50NFXHMYCBDNYFJK1V7R",\n                            "instanceId": "01F3826NNRNXSDPVBMTMD47SCK"\n                        },\n                        "name": "Enid Blyton",\n                        "age": null,\n                        "bestbook": null,\n                        "booklist": null\n                    }\n                }\n            ],\n            "pageInfo": {\n                "hasPreviousPage": false,\n                "hasNextPage": false,\n                "startCursor": "FIRST",\n                "endCursor": "LAST",\n                "pageLimit": 25,\n                "previousOffsets": [],\n                "nextOffsets": []\n            }\n        }\n    }\n}    \n')))),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Above sample examples of RESTful APIs can be tested with Postman. Do check out hypi collection of above examples by clicking button below. "),(0,i.kt)("p",null,"Note:  You need to provide actual instance domain name and authorization token to run the queries in Postman. "),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://god.gw.postman.com/run-collection/15379828-1ebf55dd-f582-4b03-a10d-4dd70e3f6898?action=collection%2Ffork&collection-url=entityId%3D15379828-1ebf55dd-f582-4b03-a10d-4dd70e3f6898%26entityType%3Dcollection%26workspaceId%3Da1cfb46b-0624-4367-8c08-d41c6cf700f0"},(0,i.kt)("img",{parentName:"a",src:"https://run.pstmn.io/button.svg",alt:"Run in Postman"}))))}m.isMDXComponent=!0}}]);