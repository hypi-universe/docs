(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{150:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(8),o=(a(0),a(159)),i=a(163),l=a(164),b={id:"webhooks",title:"Webhooks",sidebar_label:"Webhooks",slug:"/webhooks"},s={unversionedId:"webhooks",id:"webhooks",isDocsHomePage:!1,title:"Webhooks",description:"Webhooks provide a way for external APIs to notify you when some event has occurred in their system. That is a typical use case for this API.",source:"@site/content/webhook.md",slug:"/webhooks",permalink:"/docs/webhooks",editUrl:"https://github.com/hypi-universe/docs/edit/master/content/webhook.md",version:"current",sidebar_label:"Webhooks",sidebar:"docs",previous:{title:"Triggers",permalink:"/docs/triggers"},next:{title:"Serverless Function",permalink:"/docs/serverlessfunction"}},c=[{value:"Example",id:"example",children:[]}],p={toc:c};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Webhooks")," provide a way for external APIs to notify you when some event has occurred in their system. That is a typical use case for this API."),Object(o.b)("p",null,"These APIs are generally not secure. Different providers have different mechanisms for proving to you that the request is genuinely from them. Hypi provides you access to all the data sent in the request, this enables you to perform verification as you see fit."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"webhook")," can handle events of any type like payment failure, notification for a new post on the blog, reporting of an issue in the system, etc. And the response to the event could be an automated email or storing the data in the database. The response can be customized based upon the status code sent through the ",Object(o.b)("inlineCode",{parentName:"p"},"HTTP request"),"."),Object(o.b)("p",null,"Let's say a payment system wants to notify the failure of Payments. So, the payment system sends an automated message or ",Object(o.b)("inlineCode",{parentName:"p"},"payload")," to the App Instance through an HTTP POST. A function defined in the App Schema process the webhook request. It parses the payload and extracts the data from it. The payload type is usually JSON. But some providers may send XML or URL encoded form data."),Object(o.b)("p",null,"If the data of the payload has an ",Object(o.b)("inlineCode",{parentName:"p"},"email ID")," of the customer whose payment failed, a ",Object(o.b)("a",{parentName:"p",href:"/docs/triggers"},"trigger")," can be invoked to send an email to him automatically."),Object(o.b)("p",null,"Let\u2019s define a function ",Object(o.b)("inlineCode",{parentName:"p"},"myInlineFn")," in the schema that processes a ",Object(o.b)("inlineCode",{parentName:"p"},"webhook")," request. "),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"For the webhook to correct properly, the signature of the function processing webhook request must be ",Object(o.b)("inlineCode",{parentName:"p"},"(payload: WebhookPayload): WebhookResponse")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},'type Query {\n  myInlineFn(payload: WebhookPayload): \n    WebhookResponse @tan(type:Groovy, inline: """\n    return [\n      "status": 200,\n      "headers": payload.headers,\n      "body": payload.url.host + ":" + \n              payload.url.port + payload.url.path + "?" \n              + payload.url.queryParams + "<>" + payload.body\n    ]\n  """)\n}\n')),Object(o.b)("p",null,"Let's go through the data types related to Webhook."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"type WebhookPayload\xa0{\n    url:\xa0URLInput!\n    headers:\xa0Json!\n    body:\xa0String\n}\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Webhookpayload")," data type stores the data of a payload. A payload has url string along with a header and body."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Parameter"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},"url")),Object(o.b)("td",{parentName:"tr",align:null},"URLInput"),Object(o.b)("td",{parentName:"tr",align:null},"Input URL provided by the payload")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},"headers")),Object(o.b)("td",{parentName:"tr",align:null},"JSON"),Object(o.b)("td",{parentName:"tr",align:null},"Header of the Payload HTTP request/response")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},"body")),Object(o.b)("td",{parentName:"tr",align:null},"String"),Object(o.b)("td",{parentName:"tr",align:null},"Data Attached to Payload")))),Object(o.b)("p",null,"Input url contains url information like ",Object(o.b)("inlineCode",{parentName:"p"},"url path"),", ",Object(o.b)("inlineCode",{parentName:"p"},"query parameters"),", ",Object(o.b)("inlineCode",{parentName:"p"},"port"),", ",Object(o.b)("inlineCode",{parentName:"p"},"host"),", etc."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"type WebhookResponse\xa0{\n    status:\xa0Int\n    headers:\xa0Json\n    body:\xa0Json\n}\n")),Object(o.b)("p",null,"If the query or mutation functions in the Webhook definition (myInlineFn) returns this then it controls what the server responds with. For example, the GraphQL function can return a 301 or 302 ",Object(o.b)("inlineCode",{parentName:"p"},"status")," and a Location header to an external URL to cause a redirect. If ",Object(o.b)("inlineCode",{parentName:"p"},"status")," 200 gets returned, it indicates the success of the event. You may extract the ",Object(o.b)("inlineCode",{parentName:"p"},"status")," by parsing the input HTTP POST request."),Object(o.b)("p",null,"You can design the ",Object(o.b)("inlineCode",{parentName:"p"},"myInlineFn")," as per the requirements. It takes the shape of  ",Object(o.b)("a",{parentName:"p",href:"/docs/user-defined-function"},"User Defined Function"),". But as stated above, its signature remains the same. In the current function defined in the schema, it returns HTTP request status as 200 and it separates the payload header and body. The URL input parameters of the payload get attached to the payload body forming a response string."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"type Webhook\xa0{\n    name:\xa0String\n    as:\xa0Account\n    query:\xa0GraphQLRef!\n}\n")),Object(o.b)("p",null,"Webhook type is defined in Hypi as above. A webhook object needs to be created in an instance to send/receive a webhook HTTP request/response through an endpoint. The parameters of the Webhook type are as follows."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Parameters"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},"name")),Object(o.b)("td",{parentName:"tr",align:null},"String"),Object(o.b)("td",{parentName:"tr",align:null},"The name of the webhook. It is referenced in the URL by this name. If missing the webhook is only addressable by ID")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},"as")),Object(o.b)("td",{parentName:"tr",align:null},"Account"),Object(o.b)("td",{parentName:"tr",align:null},"Defaults to the account creating the Webhook. Hypi will generate an authorization token automatically for the account when the webhook is triggered.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},"query")),Object(o.b)("td",{parentName:"tr",align:null},"GraphQLRef"),Object(o.b)("td",{parentName:"tr",align:null},"This refers to a GraphQL function to process webhook requests. The function can trigger a workflow or operate on the payload itself.")))),Object(o.b)("p",null,"Let\u2019s check GraphQLRef\xa0type as well"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"type GraphQLRef\xa0{\n    type:\xa0OpType!\n    field:\xa0String!\n    selection:\xa0String\n}\n")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Parameters"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"type"),Object(o.b)("td",{parentName:"tr",align:null},"OpType"),Object(o.b)("td",{parentName:"tr",align:null},"Query/Mutation/Subscription")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"field"),Object(o.b)("td",{parentName:"tr",align:null},"String"),Object(o.b)("td",{parentName:"tr",align:null},"The name of the function that processes the webhook request.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"selection"),Object(o.b)("td",{parentName:"tr",align:null},"String"),Object(o.b)("td",{parentName:"tr",align:null},"If present this is a set of GraphQL fields that will be selected from the results of the function that is referenced.")))),Object(o.b)("p",null,"A simple webhook example looks like this."),Object(o.b)(i.a,{defaultValue:"query",values:[{label:"GraphQL Query",value:"query"},{label:"Input Data",value:"data"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"query",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"mutation Upsert($values: HypiUpsertInputUnion!) {\n  upsert(values: $values) {\n    id\n  }\n}\n"))),Object(o.b)(l.a,{value:"data",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},'{\n  "values": {\n    "Webhook": [\n             {\n              "hypi": {\n              "id": "wid"\n              },\n             "name": "wh1",\n            "query": {\n            "type": "Query",\n            "field": "myInlineFn"\n            }\n          }\n       ]\n    }\n}\n')))),Object(o.b)("p",null,"Once a Webhook is created, it can be called by making an HTTP request to:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"[",Object(o.b)("a",{parentName:"li",href:"https://api.hypi.app/webhook/%7Bdomain%7D/%7Bwebhookname%7D%5C%5D(#)"},"https://api.hypi.app/webhook/{domain}/{webhookname}\\](#)"))),Object(o.b)("p",null,"where ",Object(o.b)("inlineCode",{parentName:"p"},"{domain}")," is the instance domain for your app and ",Object(o.b)("inlineCode",{parentName:"p"},"{webhook name}")," is the name of the webhook to be executed. In the example on this page, the name is ",Object(o.b)("inlineCode",{parentName:"p"},"wh1"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Ex:"),"  ",Object(o.b)("a",{parentName:"p",href:"#"},"https://api.hypi.app/webhook/incineration.apps.hypi.app/wh1")))}u.isMDXComponent=!0},159:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),c=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),p=c(a),d=n,m=p["".concat(i,".").concat(d)]||p[d]||u[d]||o;return a?r.a.createElement(m,l(l({ref:t},s),{},{components:a})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},160:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},161:function(e,t,a){"use strict";var n=a(0),r=a(162);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},162:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},163:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(161),i=a(160),l=a(57),b=a.n(l);var s=37,c=39;t.a=function(e){var t=e.lazy,a=e.block,l=e.defaultValue,p=e.values,u=e.groupId,d=e.className,m=Object(o.a)(),h=m.tabGroupChoices,y=m.setTabGroupChoices,f=Object(n.useState)(l),O=f[0],j=f[1],g=n.Children.toArray(e.children),N=[];if(null!=u){var v=h[u];null!=v&&v!==O&&p.some((function(e){return e.value===v}))&&j(v)}var w=function(e){var t=e.target,a=N.indexOf(t),n=g[a].props.value;j(n),null!=u&&(y(u,n),setTimeout((function(){var e,a,n,r,o,i,l,s;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,o=e.right,i=window,l=i.innerHeight,s=i.innerWidth,a>=0&&o<=s&&r<=l&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(b.a.tabItemActive),setTimeout((function(){return t.classList.remove(b.a.tabItemActive)}),2e3))}),150))},k=function(e){var t,a;switch(e.keyCode){case c:var n=N.indexOf(e.target)+1;a=N[n]||N[0];break;case s:var r=N.indexOf(e.target)-1;a=N[r]||N[N.length-1]}null===(t=a)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":a},d)},p.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,className:Object(i.a)("tabs__item",b.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:k,onFocus:w,onClick:w},a)}))),t?Object(n.cloneElement)(g.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},164:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.children,a=e.hidden,n=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}}}]);