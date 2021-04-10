(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{123:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(8),i=(n(0),n(159)),o=n(163),l=n(164),s={id:"password-reminder",title:"Password Reminder",sidebar_label:"Password Reminder",slug:"/password-reminder"},c={unversionedId:"password-reminder",id:"password-reminder",isDocsHomePage:!1,title:"Password Reminder",description:"Sometimes users forget the password for applications. Hence, applications need to provide the password reminder utility to their users. Hypi facilitates password reminder functionality to its client.",source:"@site/content/password-reminder.md",slug:"/password-reminder",permalink:"/docs/password-reminder",editUrl:"https://github.com/hypi-universe/docs/edit/master/content/password-reminder.md",version:"current",sidebar_label:"Password Reminder",sidebar:"docs",previous:{title:"OAuth2 Login",permalink:"/docs/oauth2login"},next:{title:"GraphQL Overview",permalink:"/docs/graphql"}},p=[{value:"Example",id:"example",children:[]}],d={toc:p};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Sometimes users forget the password for applications. Hence, applications need to provide the password reminder utility to their users. Hypi facilitates password reminder functionality to its client."),Object(i.b)("p",null,"Client applications can reset Account\u2019s password using Hypi. Hypi has an in-built PasswordReminder\xa0data type. Create a PasswordReminder object and a verification code will be sent to the user\u2019s email id. In turn, Hypi will accept the new password and the verification code in the form of JSON through an endpoint. And the account password will get reset."),Object(i.b)("p",null,"Let\u2019s look at the PasswordReminder structure."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"type PasswordReminder\xa0{\n    valid:\xa0Boolean\n    code:\xa0String\n    to:\xa0Email!\n    from:\xa0String\n    subject:\xa0String\n    htmlMessage:\xa0String\n    plainTextMessage:\xa0String\n}\n")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"th"},"Parameter")),Object(i.b)("th",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"th"},"Description")),Object(i.b)("th",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"th"},"Example")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},"valid")),Object(i.b)("td",{parentName:"tr",align:null},"The valid field is \u2018true\u2019 when the object is created. It becomes \u2018false\u2019 after the password reset."),Object(i.b)("td",{parentName:"tr",align:null},"True")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},"code")),Object(i.b)("td",{parentName:"tr",align:null},"The verification \u2018code\u2019 is included in the email sent. Generated by the server. No need to provide the value"),Object(i.b)("td",{parentName:"tr",align:null},"01F21B593SD5VKJQYWS8N38H1F")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},"to")),Object(i.b)("td",{parentName:"tr",align:null},"The email account of the user"),Object(i.b)("td",{parentName:"tr",align:null},"Email data type")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},"from")),Object(i.b)("td",{parentName:"tr",align:null},"The email from which the email will be sent to the user. You MUST have a Hypi email app configured to send email from this address. (Optional field)"),Object(i.b)("td",{parentName:"tr",align:null},"Valid email id")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},"subject")),Object(i.b)("td",{parentName:"tr",align:null},'The subject of the email, this is a velocity template - Hypi provides a default such as "Please verify your email to ',"<","realm",">",'"'),Object(i.b)("td",{parentName:"tr",align:null},"\u201cChange Password\u201d")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},"htmlMessage")),Object(i.b)("td",{parentName:"tr",align:null},"The HTML contents of the email. This is a Velocity template that will be rendered before being sent."),Object(i.b)("td",{parentName:"tr",align:null},"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},"plainTextMessage")),Object(i.b)("td",{parentName:"tr",align:null},"A plain text version of the email"),Object(i.b)("td",{parentName:"tr",align:null},"-")))),Object(i.b)("h3",{id:"example"},"Example"),Object(i.b)("p",null,"Create a passwordReminder object with required values such as email id, subject, etc. Other fields are optional. A valid passwordReminder object will get created and the verification code gets generated. \xa0The generated code in the\xa0",Object(i.b)("inlineCode",{parentName:"p"},"code"),"\xa0field can be referenced using $!{parent.code} in the\xa0",Object(i.b)("inlineCode",{parentName:"p"},"htmlMessage"),"\xa0or\xa0",Object(i.b)("inlineCode",{parentName:"p"},"plainTextMessage"),"\xa0fields."),Object(i.b)(o.a,{defaultValue:"query",values:[{label:"GraphQL Query",value:"query"},{label:"Input Data",value:"data"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"query",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"mutation Upsert($values: HypiUpsertInputUnion!) {\n  upsert(values: $values) {\n    id\n  }\n}\n"))),Object(i.b)(l.a,{value:"data",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n\n    "values": {\n    "PasswordReminder": [\n        {\n          "to" : {\n            "value": "abc@gmail.com",\n            "type": "work"\n          },\n          "subject": "Change Password",     \n        }\n     ]\n  }\n}\n'))),Object(i.b)(l.a,{value:"response",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "upsert": [\n      {\n        "id": "01F276EH3XM47XWG97HP4XS02H"\n      }\n    ]\n  }\n}\n')))),Object(i.b)("p",null,"Verify the PasswordReminder object details and check the email in the \u2018to\u2019 field for the verification code."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Email:")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Hi,"),Object(i.b)("p",{parentName:"div"},"Your password reset code is 01F21B593SD5VKJQYWS8N38H1F."))),Object(i.b)("p",null,"In the HTML / Plain message, you should also provide a link to a URL where the user can enter their new password."),Object(i.b)("p",null,"Include the code in this URL e.g.\n",Object(i.b)("inlineCode",{parentName:"p"},"https://my-app.com/reset-password?code=$!{parent.code}"),"."),Object(i.b)("p",null,"When the user gets to this page, you will have the password reset code in the URL query string. Get this code from the URL and when the user enters the new password, make a POST request to the Hypi API as follows."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"POST  <hypi-domain>/email/reset/\\<domain\\>")),Object(i.b)("p",null,"Here \\<domain",">"," is app instance domain and hypi domain is ",Object(i.b)("a",{parentName:"p",href:"#"},"https://api.hypi.app"),"."),Object(i.b)("p",null,"E.g.  ",Object(i.b)("a",{parentName:"p",href:"#"},"https://api.hypi.app/email/reset/scalability.apps.hypi.app")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"scalability.apps.hypi.app")," is the instance domain on Hypi."),Object(i.b)("p",null,"In the body of the request send a JSON like this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n    "code": "\\<the-code-from-the-URL>", \n    "password": "\\<the-user\'s-new-password>"\n}\n')),Object(i.b)("p",null,"Send curl Query to reset password:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'curl --data-raw \'{"code":"01F21B593SD5VKJQYWS8N38H1F","password":"cool"}\' --header \u201ccontent-type:application/json\u201d https://api.hypi.app/email/reset/scalability.apps.hypi.app\n')),Object(i.b)("p",null,"Hypi will change the user's password and return ",Object(i.b)("inlineCode",{parentName:"p"},"HTTP status 200"),"."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"passwordReminder")," object becomes invalid with this."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "find": {\n      "edges": [\n        {\n          "node": {\n            "code": "01F21B593SD5VKJQYWS8N38H1F",\n            "valid": false,\n            "htmlMessage": "  Hi ,<br />\\n Your password reset code is .\\n  "\n          },\n          "cursor": "01F21B59239BT23Z6MA7QQ43FH"\n        }\n      ]\n    }\n  }\n}\n')))}b.isMDXComponent=!0},159:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,m=d["".concat(o,".").concat(u)]||d[u]||b[u]||i;return n?r.a.createElement(m,l(l({ref:t},c),{},{components:n})):r.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},160:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},161:function(e,t,n){"use strict";var a=n(0),r=n(162);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},162:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},163:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(161),o=n(160),l=n(57),s=n.n(l);var c=37,p=39;t.a=function(e){var t=e.lazy,n=e.block,l=e.defaultValue,d=e.values,b=e.groupId,u=e.className,m=Object(i.a)(),h=m.tabGroupChoices,O=m.setTabGroupChoices,j=Object(a.useState)(l),f=j[0],g=j[1],v=a.Children.toArray(e.children),y=[];if(null!=b){var w=h[b];null!=w&&w!==f&&d.some((function(e){return e.value===w}))&&g(w)}var N=function(e){var t=e.target,n=y.indexOf(t),a=v[n].props.value;g(a),null!=b&&(O(b,a),setTimeout((function(){var e,n,a,r,i,o,l,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,o=window,l=o.innerHeight,c=o.innerWidth,n>=0&&i<=c&&r<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s.a.tabItemActive),setTimeout((function(){return t.classList.remove(s.a.tabItemActive)}),2e3))}),150))},T=function(e){var t,n;switch(e.keyCode){case p:var a=y.indexOf(e.target)+1;n=y[a]||y[0];break;case c:var r=y.indexOf(e.target)-1;n=y[r]||y[y.length-1]}null===(t=n)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},u)},d.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,className:Object(o.a)("tabs__item",s.a.tabItem,{"tabs__item--active":f===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:T,onFocus:N,onClick:N},n)}))),t?Object(a.cloneElement)(v.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},164:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}}}]);