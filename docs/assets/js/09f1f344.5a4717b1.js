(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{159:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return n?r.a.createElement(m,s(s({ref:t},l),{},{components:n})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},160:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},161:function(e,t,n){"use strict";var a=n(0),r=n(162);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},162:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},163:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(161),i=n(160),s=n(57),c=n.n(s);var l=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,s=e.defaultValue,p=e.values,b=e.groupId,d=e.className,m=Object(o.a)(),h=m.tabGroupChoices,f=m.setTabGroupChoices,y=Object(a.useState)(s),g=y[0],v=y[1],O=a.Children.toArray(e.children),j=[];if(null!=b){var w=h[b];null!=w&&w!==g&&p.some((function(e){return e.value===w}))&&v(w)}var T=function(e){var t=e.target,n=j.indexOf(t),a=O[n].props.value;v(a),null!=b&&(f(b,a),setTimeout((function(){var e,n,a,r,o,i,s,l;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,i=window,s=i.innerHeight,l=i.innerWidth,n>=0&&o<=l&&r<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c.a.tabItemActive),setTimeout((function(){return t.classList.remove(c.a.tabItemActive)}),2e3))}),150))},N=function(e){var t,n;switch(e.keyCode){case u:var a=j.indexOf(e.target)+1;n=j[a]||j[0];break;case l:var r=j.indexOf(e.target)-1;n=j[r]||j[j.length-1]}null===(t=n)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},d)},p.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return j.push(e)},onKeyDown:N,onFocus:T,onClick:T},n)}))),t?Object(a.cloneElement)(O.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},164:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(8),o=(n(0),n(159)),i=n(163),s=n(164),c={id:"authentication",title:"Authentication",sidebar_label:"Authentication",slug:"/authentication"},l={unversionedId:"authentication",id:"authentication",isDocsHomePage:!1,title:"Authentication",description:"Authentication involves verifying the identification of a user. The credentials of the user are matched against the credentials in the database. Users are generally identified with a user id or an email.",source:"@site/content/authentication.md",slug:"/authentication",permalink:"/docs/authentication",editUrl:"https://github.com/hypi-universe/docs/edit/master/content/authentication.md",version:"current",sidebar_label:"Authentication",sidebar:"docs",previous:{title:"API Set-Up",permalink:"/docs/apisetup"},next:{title:"Magic Hypi Object",permalink:"/docs/magic-hypi-object"}},u=[{value:"createAccount",id:"createaccount",children:[]},{value:"login",id:"login",children:[]},{value:"loginByEmail:",id:"loginbyemail",children:[]}],p={toc:u};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Authentication involves verifying the identification of a user. The credentials of the user are matched against the credentials in the database. Users are generally identified with a user id or an email."),Object(o.b)("p",null,"Authentication is important. It keeps the resources secure from unauthenticated users. The resources may include networks, databases, websites, and other applications. "),Object(o.b)("p",null,"Hypi provides authentication functions to its users. The functions are easy-to-use. You can ",Object(o.b)("a",{parentName:"p",href:"#createaccount"},"create a password-protected account")," with a user name or an email. You can ",Object(o.b)("a",{parentName:"p",href:"#login"},"log in to the account")," with saved credentials."),Object(o.b)("h2",{id:"createaccount"},"createAccount"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"createAccount")," is a mutation that creates a new user account. You need to provide the credentials of the user. It generates a new user account. This account can be used to login and perform various actions."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"createAccount(value:\xa0AccountInput!):\xa0Hypi\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Account")," is a data type (table) which holds the information of an account."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"type Account {\n    hypi: Hypi\n    verified: Boolean\n    enabled: Boolean\n    username: String!\n    password: Password!\n    owner: Person\n    emails(...): [Email!]\n    phones(...): [Phone!]\n    groups(...): [Group!]\n    roles(...): [Role!]\n    attempts(...): [LoginAttempt!]\n    remoteLogins(...): [RemoteLogin!]\n}\n")),Object(o.b)("p",null,"You may pass on parameters to the Account object to store Account information. E.g. username, password, emails, phone contacts, group details, role details. Hypi also stores the login attempts in this table. The Person type (owner parameter) stores the information of the user like name, address, date of birth, gender, etc. It also keeps the information whether the user has been authenticated in the Boolean fields ",Object(o.b)("inlineCode",{parentName:"p"},"verified")," and ",Object(o.b)("inlineCode",{parentName:"p"},"enabled"),"."),Object(o.b)("p",null,"Create a user account as shown in the below example. You may pass more parameters as required. The  function returns the account id, the date of creation, and created by information from the created Account object."),Object(o.b)(i.a,{defaultValue:"query",values:[{label:"GraphQL Query",value:"query"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"query",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'mutation {\n createAccount(\n     value: {\n         username: "test-hypi@hypi.io"\n         password: { value: "test-hypi@hypi.io" }\n         emails: [{ value: "test-hypi@hypi.io" }]\n     }\n     ) {\n         id\n         created\n         createdBy\n     }\n}\n'))),Object(o.b)(s.a,{value:"response",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "createAccount": {\n      "id": "01F0R0BJ9XGDHS2GGM7YY4Y7M1",\n      "created": "2021-03-14T09:16:28Z",\n      "createdBy": "01F008Z07AZ6T263GWMCG7CCWZ"\n    }\n  }\n}\n')))),Object(o.b)("h2",{id:"login"},"login"),Object(o.b)("p",null,"Users may log in using the ",Object(o.b)("inlineCode",{parentName:"p"},"login")," function."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"login(username:String!,password:String!):\xa0AccessToken\n")),Object(o.b)("p",null," It takes a username and password as inputs. Successful login generates session token. The user has to use the session token to perform various actions. This function also returns the session expiry time. If any error comes during login, you may also get an error code and error message."),Object(o.b)(i.a,{defaultValue:"query",values:[{label:"GraphQL Query",value:"query"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"query",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},'{\n    login(\n        username: "test-hypi@hypi.io", \n        password: "test-hypi@hypi.io"\n    ) {\n        sessionToken\n        sessionExpires\n        errorCode\n        errorMsg\n    }\n}\n'))),Object(o.b)(s.a,{value:"response",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n     "data": {\n     "login": {\n         "sessionToken": "<test.login-token>",\n         "sessionExpires": 1618305724,\n         "errorCode": null,\n         "errorMsg": null\n     }\n   }\n}\n')))),Object(o.b)("h2",{id:"loginbyemail"},"loginByEmail:"),Object(o.b)("p",null,"Users may log in using the ",Object(o.b)("inlineCode",{parentName:"p"},"loginByEmail")," function. This function takes email-id and password as inputs. It also generates session-token and provides error code and error message if any."),Object(o.b)(i.a,{defaultValue:"query",values:[{label:"GraphQL Query",value:"query"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"query",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},'{\n    loginByEmail(email: "test-hypi@hypi.io", password: "test-hypi@hypi.io") {\n        sessionToken\n        sessionExpires\n        errorCode\n        errorMsg\n    }\n}\n'))),Object(o.b)(s.a,{value:"response",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n     "data": {\n     "loginByEmail": {\n         "sessionToken": "test.login-token",\n         "sessionExpires": 1618306063,\n         "errorCode": null,\n         "errorMsg": null\n     }\n   }\n}\n')))))}b.isMDXComponent=!0}}]);