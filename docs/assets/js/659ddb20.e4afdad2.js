"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8580],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return t?a.createElement(h,i(i({ref:n},c),{},{components:t})):a.createElement(h,i({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1332:function(e,n,t){var a=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},8515:function(e,n,t){t.d(n,{Z:function(){return c}});var a=t(7462),r=t(7294),o=t(2389),i=t(5394),l=t(6010),s="tabItem_tAz6";function u(e){var n,t,o,u=e.lazy,c=e.block,p=e.defaultValue,d=e.values,m=e.groupId,h=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:f.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),y=(0,i.lx)(v,(function(e,n){return e.value===n.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(n=null!=p?p:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(o=f[0])?void 0:o.props.value;if(null!==g&&!v.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,i.UB)(),k=b.tabGroupChoices,w=b.setTabGroupChoices,T=(0,r.useState)(g),N=T[0],E=T[1],x=[],O=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var j=k[m];null!=j&&j!==N&&v.some((function(e){return e.value===j}))&&E(j)}var A=function(e){var n=e.currentTarget,t=x.indexOf(n),a=v[t].value;a!==N&&(O(n),E(a),null!=m&&w(m,a))},C=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.currentTarget)+1;t=x[a]||x[0];break;case"ArrowLeft":var r=x.indexOf(e.currentTarget)-1;t=x[r]||x[x.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},h)},v.map((function(e){var n=e.value,t=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,key:n,ref:function(e){return x.push(e)},onKeyDown:C,onFocus:A,onClick:A},o,{className:(0,l.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":N===n})}),null!=t?t:n)}))),u?(0,r.cloneElement)(f.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==N})}))))}function c(e){var n=(0,o.Z)();return r.createElement(u,(0,a.Z)({key:String(n)},e))}},127:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return h}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),i=t(8515),l=t(1332),s=["components"],u={id:"authentication",title:"Authentication",sidebar_label:"Authentication",slug:"/lowcode/authentication"},c=void 0,p={unversionedId:"lowcode/authentication",id:"lowcode/authentication",title:"Authentication",description:"Authentication involves verifying the identification of a user. The credentials of the user are matched against the credentials in the database. Users are generally identified with a user id or an email.",source:"@site/content/lowcode/authentication.md",sourceDirName:"lowcode",slug:"/lowcode/authentication",permalink:"/docs/lowcode/authentication",editUrl:"https://github.com/hypi-universe/docs/edit/master/content/lowcode/authentication.md",tags:[],version:"current",frontMatter:{id:"authentication",title:"Authentication",sidebar_label:"Authentication",slug:"/lowcode/authentication"},sidebar:"docs",previous:{title:"API Set-Up",permalink:"/docs/lowcode/apisetup"},next:{title:"Scalars",permalink:"/docs/lowcode/scalars"}},d=[{value:"createAccount",id:"createaccount",children:[],level:2},{value:"login",id:"login",children:[],level:2},{value:"loginByEmail:",id:"loginbyemail",children:[],level:2}],m={toc:d};function h(e){var n=e.components,t=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Authentication involves verifying the identification of a user. The credentials of the user are matched against the credentials in the database. Users are generally identified with a user id or an email."),(0,o.kt)("p",null,"Authentication is important. It keeps the resources secure from unauthenticated users. The resources may include networks, databases, websites, and other applications. "),(0,o.kt)("p",null,"Hypi provides authentication functions to its users. The functions are easy-to-use. You can ",(0,o.kt)("a",{parentName:"p",href:"#createaccount"},"create a password-protected account")," with a user name or an email. You can ",(0,o.kt)("a",{parentName:"p",href:"#login"},"log in to the account")," with saved credentials."),(0,o.kt)("h2",{id:"createaccount"},"createAccount"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"createAccount")," is a mutation that creates a new user account. You need to provide the credentials of the user. It generates a new user account. This account can be used to login and perform various actions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"createAccount(value:\xa0AccountInput!):\xa0Hypi\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Account")," is a data type (table) which holds the information of an account."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"type Account {\n    hypi: Hypi\n    verified: Boolean\n    enabled: Boolean\n    username: String!\n    password: Password!\n    owner: Person\n    emails(...): [Email!]\n    phones(...): [Phone!]\n    groups(...): [Group!]\n    roles(...): [Role!]\n    attempts(...): [LoginAttempt!]\n    remoteLogins(...): [RemoteLogin!]\n}\n")),(0,o.kt)("p",null,"You may pass on parameters to the Account object to store Account information. E.g. username, password, emails, phone contacts, group details, role details. Hypi also stores the login attempts in this table. The Person type (owner parameter) stores the information of the user like name, address, date of birth, gender, etc. It also keeps the information whether the user has been authenticated in the Boolean fields ",(0,o.kt)("inlineCode",{parentName:"p"},"verified")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"enabled"),"."),(0,o.kt)("p",null,"Create a user account as shown in the below example. You may pass more parameters as required. The  function returns the account id, the date of creation, and created by information from the created Account object."),(0,o.kt)(i.Z,{defaultValue:"query",values:[{label:"GraphQL Query",value:"query"},{label:"Response",value:"response"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"query",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'mutation {\n createAccount(\n     value: {\n         username: "test-hypi@hypi.io"\n         password: { value: "test-hypi@hypi.io" }\n         emails: [{ value: "test-hypi@hypi.io" }]\n     }\n     ) {\n         id\n         created\n         createdBy\n     }\n}\n'))),(0,o.kt)(l.Z,{value:"response",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "createAccount": {\n      "id": "01F0R0BJ9XGDHS2GGM7YY4Y7M1",\n      "created": "2021-03-14T09:16:28Z",\n      "createdBy": "01F008Z07AZ6T263GWMCG7CCWZ"\n    }\n  }\n}\n')))),(0,o.kt)("h2",{id:"login"},"login"),(0,o.kt)("p",null,"Users may log in using the ",(0,o.kt)("inlineCode",{parentName:"p"},"login")," function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"login(username:String!,password:String!):\xa0AccessToken\n")),(0,o.kt)("p",null," It takes a username and password as inputs. Successful login generates session token. The user has to use the session token to perform various actions. This function also returns the session expiry time. If any error comes during login, you may also get an error code and error message."),(0,o.kt)(i.Z,{defaultValue:"query",values:[{label:"GraphQL Query",value:"query"},{label:"Response",value:"response"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"query",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'{\n    login(\n        username: "test-hypi@hypi.io", \n        password: "test-hypi@hypi.io"\n    ) {\n        sessionToken\n        sessionExpires\n        errorCode\n        errorMsg\n    }\n}\n'))),(0,o.kt)(l.Z,{value:"response",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n     "data": {\n     "login": {\n         "sessionToken": "<test.login-token>",\n         "sessionExpires": 1618305724,\n         "errorCode": null,\n         "errorMsg": null\n     }\n   }\n}\n')))),(0,o.kt)("h2",{id:"loginbyemail"},"loginByEmail:"),(0,o.kt)("p",null,"Users may log in using the ",(0,o.kt)("inlineCode",{parentName:"p"},"loginByEmail")," function. This function takes email-id and password as inputs. It also generates session-token and provides error code and error message if any."),(0,o.kt)(i.Z,{defaultValue:"query",values:[{label:"GraphQL Query",value:"query"},{label:"Response",value:"response"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"query",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'{\n    loginByEmail(email: "test-hypi@hypi.io", password: "test-hypi@hypi.io") {\n        sessionToken\n        sessionExpires\n        errorCode\n        errorMsg\n    }\n}\n'))),(0,o.kt)(l.Z,{value:"response",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n     "data": {\n     "loginByEmail": {\n         "sessionToken": "test.login-token",\n         "sessionExpires": 1618306063,\n         "errorCode": null,\n         "errorMsg": null\n     }\n   }\n}\n')))))}h.isMDXComponent=!0}}]);