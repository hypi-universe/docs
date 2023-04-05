"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2334],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},21332:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},8515:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(87462),r=n(67294),i=n(72389),o=n(35394),s=n(86010),l="tabItem_tAz6";function c(e){var t,n,i,c=e.lazy,p=e.block,u=e.defaultValue,d=e.values,m=e.groupId,h=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=d?d:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,o.lx)(g,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===u?u:null!=(t=null!=u?u:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=k[0])?void 0:i.props.value;if(null!==N&&!g.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,o.UB)(),v=y.tabGroupChoices,b=y.setTabGroupChoices,w=(0,r.useState)(N),T=w[0],A=w[1],C=[],S=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var R=v[m];null!=R&&R!==T&&g.some((function(e){return e.value===R}))&&A(R)}var j=function(e){var t=e.currentTarget,n=C.indexOf(t),a=g[n].value;a!==T&&(S(t),A(a),null!=m&&b(m,a))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=C.indexOf(e.currentTarget)+1;n=C[a]||C[0];break;case"ArrowLeft":var r=C.indexOf(e.currentTarget)-1;n=C[r]||C[C.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":p},h)},g.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return C.push(e)},onKeyDown:P,onFocus:j,onClick:j},i,{className:(0,s.Z)("tabs__item",l,null==i?void 0:i.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),c?(0,r.cloneElement)(k.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function p(e){var t=(0,i.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},37194:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return d},default:function(){return h}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=n(8515),s=n(21332),l=["components"],c={id:"authorisation",title:"Authorisation",sidebar_label:"Authorisation",slug:"/lowcode/authorisation"},p=void 0,u={unversionedId:"lowcode/authorisation",id:"lowcode/authorisation",title:"Authorisation",description:"Authorisation\xa0is the process of specifying access/ rights/ privileges to various resources. It provides information security and computer security to systems. Of course, we can control the access to users as well. The authorisation process decides whether access should be given or denied.",source:"@site/content/lowcode/authorisation.md",sourceDirName:"lowcode",slug:"/lowcode/authorisation",permalink:"/docs/lowcode/authorisation",editUrl:"https://github.com/hypi-universe/docs/edit/master/content/lowcode/authorisation.md",tags:[],version:"current",frontMatter:{id:"authorisation",title:"Authorisation",sidebar_label:"Authorisation",slug:"/lowcode/authorisation"},sidebar:"docs",previous:{title:"References",permalink:"/docs/lowcode/references"},next:{title:"Realtime database",permalink:"/docs/lowcode/realtime-db"}},d=[{value:"Subject",id:"subject",children:[],level:4},{value:"Object",id:"object",children:[],level:4},{value:"Hypi&#39;s Authorisation System",id:"hypis-authorisation-system",children:[{value:"Update, Delete, Trash, Link and Unlink of a resource",id:"update-delete-trash-link-and-unlink-of-a-resource",children:[],level:3},{value:"Searching for resources",id:"searching-for-resources",children:[],level:3},{value:"Implicit Access Rights",id:"implicit-access-rights",children:[],level:3}],level:2},{value:"AccessRight",id:"accessright",children:[{value:"Resource Based Permission (RBP)",id:"resource-based-permission-rbp",children:[],level:3},{value:"Scope Based Permission (SBP)",id:"scope-based-permission-sbp",children:[],level:3},{value:"Add members using <code>membersSourceId</code>",id:"add-members-using-memberssourceid",children:[],level:3},{value:"Check Access Rights",id:"check-access-rights",children:[],level:3},{value:"Delete Access Rights",id:"delete-access-rights",children:[],level:3}],level:2}],m={toc:d};function h(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Authorization"},"Authorisation"),"\xa0is the process of specifying access/ rights/ privileges to various resources. It provides information security and computer security to systems. Of course, we can control the access to users as well. The authorisation process decides whether access should be given or denied."),(0,i.kt)("p",null,"Authorisation differs from ",(0,i.kt)("a",{parentName:"p",href:"/docs/lowcode/authentication"},"Authentication"),". Authentication verifies the identity of a user. In authorisation, a user or an application gets permission to access a resource. The ",(0,i.kt)("inlineCode",{parentName:"p"},"AccessRight")," object can control access by specifying the resource and the actions allowed on it."),(0,i.kt)("p",null,"Classic authorisation models consist of a triple; a ",(0,i.kt)("a",{parentName:"p",href:"#subject"},"subject"),", an ",(0,i.kt)("a",{parentName:"p",href:"#object"},"object"),", and an ",(0,i.kt)("inlineCode",{parentName:"p"},"action"),". Hypi adopts this triple with few enhancements."),(0,i.kt)("p",null,"Hypi's authorisation model is similar to ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/User-Managed_Access"},"User\xa0Managed Access Control"),"\xa0/UMA. But it is not a compliant implementation of the same."),(0,i.kt)("p",null,"Check out the concepts involved in the authorisation."),(0,i.kt)("h4",{id:"subject"},"Subject"),(0,i.kt)("p",null,"A subject is an entity trying to perform an action like query or mutation or gain access to a resource."),(0,i.kt)("h4",{id:"object"},"Object"),(0,i.kt)("p",null,"An object or a resource is the thing being protected. In Hypi, two primary things can be protected."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Resource\xa0- any object that exists on the Hypi platform"),(0,i.kt)("li",{parentName:"ul"},"Scope\xa0- Any GraphQL field of any type OR any arbitrary Uniform Resource Identifier")),(0,i.kt)("h2",{id:"hypis-authorisation-system"},"Hypi's Authorisation System"),(0,i.kt)("p",null,"By default, permission is denied to everything and everyone. When a user registers on the platform,  default permissions are granted to him. "),(0,i.kt)("p",null,"Access Rights can be granted by the ",(0,i.kt)("inlineCode",{parentName:"p"},"system-admin")," ",(0,i.kt)("a",{parentName:"p",href:"/docs/lowcode/core#account"},"Account "),"to the users of an instance or domain. A user can also grant other users access to his own data in the same ",(0,i.kt)("inlineCode",{parentName:"p"},"AppInstance"),"."),(0,i.kt)("p",null,"Rights include permission to view or modify a resource/data. The rights are based upon various operations the subject wants to perform on the object."),(0,i.kt)("h3",{id:"update-delete-trash-link-and-unlink-of-a-resource"},"Update, Delete, Trash, Link and Unlink of a resource"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/lowcode/crud"},"Mutation")," rights may be granted to the subject. It includes update, delete, trash, link, and unlink permissions. All of these functions operate on existing resources. ",(0,i.kt)("inlineCode",{parentName:"p"},"AccessRight")," object generates an authorisation request for mutations."),(0,i.kt)("h3",{id:"searching-for-resources"},"Searching for resources"),(0,i.kt)("p",null,"The platform uses\xa0",(0,i.kt)("a",{parentName:"p",href:"/docs/lowcode/arcql"},"ArcQL"),"\xa0query language for finding data. All requests to get data, no matter how trivial the query, goes through ArcQL. During a search, resources that match are further filtered down to only those that the subject is allowed to see. So, only certain types of records a subject can access through a query. For example, a password is a resource that is not accessible to any subject except the user."),(0,i.kt)("h3",{id:"implicit-access-rights"},"Implicit Access Rights"),(0,i.kt)("p",null,"If no\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Access Right"),"\xa0is given explicitly, the platform acts as if one is implicitly created for the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Account"),"\xa0which created the object. So, the creator of an object has complete access to all its resources by default - no one else does."),(0,i.kt)("h2",{id:"accessright"},"AccessRight"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"AccessRight")," encapsulates the object involved in the authorisation. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"type AccessRight {\n  resource: String!\n  resourceType: String!\n  fields: String\n  operationType: String!\n  operation: String!\n  startDate: DateTime\n  endDate: DateTime\n  permissionType: AccessRightType!\n  approved: Boolean\n  membersSourceType: String\n  membersSourceField: String\n  members: [Account!]\n}\n")),(0,i.kt)("p",null,"Let's check the parameters."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"members")),(0,i.kt)("td",{parentName:"tr",align:null},"Account"),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("inlineCode",{parentName:"td"},"hypi.id")," of the Accounts to grant access rights to. This is an array with ",(0,i.kt)("inlineCode",{parentName:"td"},"hypi.id"),"s  of the Accounts.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"membersSourceType")),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"If specified, this data type holds the list of members that the access right applies to.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"membersSourceField")),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"A field in the ",(0,i.kt)("inlineCode",{parentName:"td"},"membersSourceType")," data type. The field consists of an array of Account objects that this AccessRight applies to.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"membersSourceId")),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("inlineCode",{parentName:"td"},"hypi.id")," of the object of ",(0,i.kt)("inlineCode",{parentName:"td"},"membersSourceType"),". The object has the list of Accounts to grant access rights to.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"approved")),(0,i.kt)("td",{parentName:"tr",align:null},"Bool"),(0,i.kt)("td",{parentName:"tr",align:null},"Set ",(0,i.kt)("inlineCode",{parentName:"td"},"true")," to grant the access. Set ",(0,i.kt)("inlineCode",{parentName:"td"},"false")," to deny the access")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"permissionType")),(0,i.kt)("td",{parentName:"tr",align:null},"AccessRightType"),(0,i.kt)("td",{parentName:"tr",align:null},"Set to RBP for resource based permission                                        SBP for scope based permission")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"startDate")),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Start date for access rights grant (Optional)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"endDate")),(0,i.kt)("td",{parentName:"tr",align:null},"DateTime"),(0,i.kt)("td",{parentName:"tr",align:null},"End date for access rights grant (Optional)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"operationType")),(0,i.kt)("td",{parentName:"tr",align:null},"OpType"),(0,i.kt)("td",{parentName:"tr",align:null},"Query, Mutation, or Subscription")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"operation")),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Operation or method associated with operationType e.g. ",(0,i.kt)("inlineCode",{parentName:"td"},"find")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"get")," for Query type and  ",(0,i.kt)("inlineCode",{parentName:"td"},"upsert"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"delete")," for Mutation type")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"resourceType")),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"The type of an object that the access right gets applied to. This field is required only if permissionType is RBP.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"resource")),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("inlineCode",{parentName:"td"},"hypi.id")," of the resource to provide the grant. This field is required only if permissionType is RBP.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"resourceOwnerId")),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"This field determines which account's resource AccessRight gives access to. If the user CREATING the AccessRight is NOT a system admin, then this is automatically set to the account ID of the user making the request. If the user is a system admin, then the system admin can set this to any user's account ID.")))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"IMPORTANT")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"operation"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"operationType")," , ",(0,i.kt)("inlineCode",{parentName:"p"},"resource")," , ",(0,i.kt)("inlineCode",{parentName:"p"},"resourceType")," fields support wild card (",(0,i.kt)("inlineCode",{parentName:"p"},"*"),")"))),(0,i.kt)("h3",{id:"resource-based-permission-rbp"},"Resource Based Permission (RBP)"),(0,i.kt)("p",null,"Resource based permision (RBP) is an access right that protects data in a resource. "),(0,i.kt)("p",null,"The below example demonstrates how to create an Access Right for a resource.\nIt creates an access to a user account to execute ",(0,i.kt)("a",{parentName:"p",href:"https://docs.hypi.app/docs/lowcode/read-data#get"},"get")," query for the object of type ",(0,i.kt)("inlineCode",{parentName:"p"},"Book"),". "),(0,i.kt)(o.Z,{defaultValue:"query",values:[{label:"GraphQL Query",value:"query"},{label:"Response",value:"response"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"query",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'mutation {\n  upsert(\n    values: {\n      AccessRight: [\n        {\n          resource: "01FX0GXS7DCAQ6RV2R0ZAYTW34"\n          resourceType: "Book"\n          operationType: "Query"\n          operation: "get"\n          permissionType: RBP\n          approved: true\n          members: { hypi: { id: "01FX0GS3N002781PK421EETAT8" } }\n        }\n      ]\n    }\n  ) {\n    id\n  }\n}\n'))),(0,i.kt)(s.Z,{value:"response",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "upsert": [\n      {\n        "id": "01FYNPB3SYTAVA0J76VJP2ZB2H"\n      }\n    ]\n  }\n}\n')))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"After successfully granting the Access Right, member user can see/retrieve data from the ",(0,i.kt)("inlineCode",{parentName:"li"},"Book")," object. (",(0,i.kt)("inlineCode",{parentName:"li"},"hypi.id")," of the Book object is given in the ",(0,i.kt)("inlineCode",{parentName:"li"},"resource")," field). "),(0,i.kt)("li",{parentName:"ul"},"You can provide access to multiple users by providing ",(0,i.kt)("inlineCode",{parentName:"li"},"hypi.id")," s of the users in the ",(0,i.kt)("inlineCode",{parentName:"li"},"members")," field.   "),(0,i.kt)("li",{parentName:"ul"},"You can use wild card ",(0,i.kt)("inlineCode",{parentName:"li"},"*")," to provide acces to all users. Use ",(0,i.kt)("inlineCode",{parentName:"li"},'{ hypi: { id: "*" } }')," in the members field to provide access to all users."),(0,i.kt)("li",{parentName:"ul"},"If you use ",(0,i.kt)("inlineCode",{parentName:"li"},"*")," in the resource field, it means that access has been granted to all the objects of the ",(0,i.kt)("inlineCode",{parentName:"li"},"Book")," type that are owned by the user creating the ",(0,i.kt)("inlineCode",{parentName:"li"},"AccessRight"),". That is to say, a wildcard on a resource can grant access to all my resources but not to the resources of other users."),(0,i.kt)("li",{parentName:"ul"},"If multiple ",(0,i.kt)("inlineCode",{parentName:"li"},"AccessRight")," objects are created, they must all evaluate as ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," and if at least one evaluates to ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),", then access will be denied.")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"TIP")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"To test if the ",(0,i.kt)("inlineCode",{parentName:"p"},"AccessRight")," is working, ",(0,i.kt)("a",{parentName:"p",href:"/docs/lowcode/authentication#login"},"login")," the member user. A new ",(0,i.kt)("inlineCode",{parentName:"p"},"Authorization Token")," will get generated. Using the new token, retrieve the data from the resource using the ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," query."))),(0,i.kt)("h3",{id:"scope-based-permission-sbp"},"Scope Based Permission (SBP)"),(0,i.kt)("p",null,"Scope Based permission(SBP) is an access right that protects a method e.g. Query.find. When you create a SBP, the resource Id is ignored. "),(0,i.kt)("p",null,"The below example creates Scope Based Permission to a user account to execute ",(0,i.kt)("inlineCode",{parentName:"p"},"upsert")," mutation on ",(0,i.kt)("inlineCode",{parentName:"p"},"Book")," objects. It means user can create or update objects of Book type. "),(0,i.kt)(o.Z,{defaultValue:"query",values:[{label:"GraphQL Query",value:"query"},{label:"Response",value:"response"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"query",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'mutation {\n  upsert(\n    values: {\n      AccessRight: [\n        {\n          resource:"*"\n          resourceType:"Book"\n          operationType: "Mutation"\n          operation: "upsert"\n          permissionType: SBP\n          approved: true\n          members: { hypi: { id: "01FVWJQQN0WW87S5AZZ2RZMYHE" } }\n        }\n      ]\n    }\n  ) {\n    id\n  }\n}\n'))),(0,i.kt)(s.Z,{value:"response",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "upsert": [\n      {\n        "id": "01FYNPB3SYTAVA0J76VJP2ZB2H"\n      }\n    ]\n  }\n}\n')))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"IMPORTANT")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Only a system admin can create scope based permissions. By default, the user that created the Hypi instance is the only system admin."))),(0,i.kt)("h3",{id:"add-members-using-memberssourceid"},"Add members using ",(0,i.kt)("inlineCode",{parentName:"h3"},"membersSourceId")),(0,i.kt)("p",null,"Instead of using the ",(0,i.kt)("inlineCode",{parentName:"p"},"members")," field, you can add members to the ",(0,i.kt)("inlineCode",{parentName:"p"},"AccessRight")," object using ",(0,i.kt)("inlineCode",{parentName:"p"},"membersSourceId"),". "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create a new data type (with any name) and add any field with the ","[Account!]"," type. The data type could be an already existing one.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"type Team {\n  # ... other fields\n  colleagues: [Account!]\n  # ... other fields\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add members to the ",(0,i.kt)("inlineCode",{parentName:"li"},"Team")," type using ",(0,i.kt)("inlineCode",{parentName:"li"},"upsert"),".  ",(0,i.kt)("inlineCode",{parentName:"li"},"membersSourceId")," is the ",(0,i.kt)("inlineCode",{parentName:"li"},"hypi.id")," of the created ",(0,i.kt)("inlineCode",{parentName:"li"},"Team")," object.")),(0,i.kt)(o.Z,{defaultValue:"query",values:[{label:"GraphQL Query",value:"query"},{label:"Response",value:"response"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"query",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'mutation {\n  upsert(\n    values: {\n      Team: [\n        {\n          colleagues: [\n            { hypi: { id: "01G6QCNETWAZ33X6877ZW81MFC" } }\n            { hypi: { id: "01G6QCP8D2E2XJMBD4CVQJ3CQ3" } }\n          ]\n        }\n      ]\n    }\n  ) {\n    id\n  }\n}\n'))),(0,i.kt)(s.Z,{value:"response",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "data": {\n    "upsert": [\n      {\n        "id": "01G6QD0ZKSZXPX31W0XT1JG1EJ"\n      }\n    ]\n  }\n}\n')))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create an access right using ",(0,i.kt)("inlineCode",{parentName:"li"},"membersSourceId"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"membersSourceType"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"membersSourceField"),". ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'mutation {\n  upsert(\n    values: {\n      AccessRight: [\n        {\n          resource: "01G6QD42MPA3HDQG5H866W64PQ"\n          resourceType: "Book"\n          operationType: "Query"\n          operation: "get"\n          permissionType: RBP\n          approved: true\n          membersSourceType: "Team",\n          membersSourceField: "colleagues"\n          membersSourceId: "01G6QD0ZKSZXPX31W0XT1JG1EJ"\n        }\n      ]\n    }\n  ) {\n    id\n  }\n}\n')),(0,i.kt)("p",null,"An access right will be automatically granted to ",(0,i.kt)("inlineCode",{parentName:"p"},"membersSourceField")," Account members. If you add a new member to this field, the member account will also get instantaneous access to the resource."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To add new ",(0,i.kt)("inlineCode",{parentName:"li"},"colleagues")," to the ",(0,i.kt)("inlineCode",{parentName:"li"},"Tam"),", you can link the ",(0,i.kt)("inlineCode",{parentName:"li"},"membersSourceType")," with member Accounts using the ",(0,i.kt)("inlineCode",{parentName:"li"},"link")," function. ")),(0,i.kt)(o.Z,{defaultValue:"query",values:[{label:"GraphQL Query",value:"query"},{label:"Response",value:"response"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"query",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'mutation {\n  link(\n    from: Team\n    to: Account\n    via: "colleagues"\n    whereFromID: "01G6QD0ZKSZXPX31W0XT1JG1EJ"\n    andToID: "01G6QCP8D2E2XJMBD4CVQJ3CQ3"\n  )\n}\n'))),(0,i.kt)(s.Z,{value:"response",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "data": {\n    "link": true\n  }\n}\n')))),(0,i.kt)("p",null,"Please note that for the above option to work properly, the user performing the Mutation.link should be the system admin or member of an AccessRight allowing him to link to the other account."),(0,i.kt)("h3",{id:"check-access-rights"},"Check Access Rights"),(0,i.kt)("p",null,"You may check if the user has permission to access an object's details. Use ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"find")," function to get details of ",(0,i.kt)("inlineCode",{parentName:"p"},"AccessRight")," object."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  get(type: AccessRight, id: "01FVWTKBBZ21JYDPXJHA7H5SVY") {\n    ... on AccessRight {\n      resource\n      resourceType\n      operation\n      operationType\n      permissionType\n      approved\n      members {\n        hypi {\n          id\n        }\n        username\n      }\n    }\n  }\n}\n')),(0,i.kt)("h3",{id:"delete-access-rights"},"Delete Access Rights"),(0,i.kt)("p",null,"System admin can remove all the access rights.  Some cases do not require the default permissions. Hence, the system admin must first create the access right he needs (MUST do this first or he'll lose access) and then delete the old access rights he doesn't need."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mutation {\n  delete(type: AccessRight, arcql: \"hypi.id = '01F2X8203XKRFR7G62T6SP1MW4'\",\n  clearArrayReferences:true)\n}\n")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Delete the Access Rights granted to other users one by one. Don't remove all the Access Rights using wildcard (*)."))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Read More...")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://hypi.dev/t/how-to-create-resource-based-permissions/223"},"How to create Resource Based Permissions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://hypi.dev/t/how-to-create-scope-based-permissions/226"},"How to create Scope Based Permissions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://hypi.dev/t/how-to-provide-access-rights-to-different-users/235"},"How to provide Access Rights to different users")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://hypi.dev/t/how-to-provide-access-rights-to-different-users-part-2/237"},"How to provide access rights to different users (Part 2)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://hypi.dev/t/how-to-grant-access-rights-to-a-room-for-exchange-of-messages-among-users/246"},"How to grant access rights to a Room for exchange of Messages among Users"))))))}h.isMDXComponent=!0}}]);