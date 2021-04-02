(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{132:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(3),o=n(8),r=(n(0),n(140)),i={id:"webhooks",title:"Web Hooks",sidebar_label:"Web Hooks",slug:"/webhooks"},s={unversionedId:"webhooks",id:"webhooks",isDocsHomePage:!1,title:"Web Hooks",description:"Webhooks provide a way for external APIs to notify you when some event has occured in their system. That is a typical usecase for this API.",source:"@site/content/webhook.md",slug:"/webhooks",permalink:"/docs/webhooks",editUrl:"https://github.com/hypi-universe/docs/edit/master/content/webhook.md",version:"current",sidebar_label:"Web Hooks",sidebar:"docs",previous:{title:"Triggers",permalink:"/docs/triggers"},next:{title:"Serverless Function",permalink:"/docs/serverlessfunction"}},c=[{value:"Defined types",id:"defined-types",children:[]},{value:"Example",id:"example",children:[]}],l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},p=l("Tabs"),b=l("TabItem"),u={toc:c};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Webhooks provide a way for external APIs to notify you when some event has occured in their system. That is a typical usecase for this API."),Object(r.b)("p",null,"These APIs are generally not secure. Different providers have different mechanisms for proving to you that the request is genuinely from them. Hypi provides you access to all the data sent in the request, this enables you to perform verification as you see fit."),Object(r.b)("p",null,"On this page, the following schema is used:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'type Query {\n  myInlineFn(payload: WebhookPayload): \n    WebhookResponse @tan(type:Groovy, inline: """\n    return [\n      "status": 200,\n      "headers": payload.headers,\n      "body": payload.url.host + ":" + \n              payload.url.port + payload.url.path + "?" \n              + payload.url.queryParams + "<>" + payload.body\n    ]\n  """)\n}\n')),Object(r.b)("h3",{id:"defined-types"},"Defined types"),Object(r.b)("p",null,"A function must be defined which will process the Webhook request. Hypi defines both the argument and response type that this function must use."),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"The function signature MUST be ",Object(r.b)("inlineCode",{parentName:"p"},"(payload: WebhookPayload): WebhookResponse")," for the webhook to work correctly."))),Object(r.b)("h3",{id:"example"},"Example"),Object(r.b)("p",null,"A simple webhook example looks like this:"),Object(r.b)(p,{defaultValue:"query",values:[{label:"GraphQL Query",value:"query"},{label:"Input Data",value:"data"}],mdxType:"Tabs"},Object(r.b)(b,{value:"query",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},"mutation Upsert($values: HypiUpsertInputUnion!) {\n  upsert(values: $values) {\n    id\n  }\n}\n"))),Object(r.b)(b,{value:"data",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "values": {\n    "Webhook": [\n             {\n              "hypi": {\n              "id": "wid"\n              },\n             "name": "wh1",\n            "query": {\n            "type": "Query",\n            "field": "myInlineFn"\n            }\n          }\n       ]\n    }\n}\n')))),Object(r.b)("p",null,"Once a Webhook is created, it can be called by making a request to:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://api.hypi.app/webhook/domain/webhookname"},"https://api.hypi.app/webhook/{domain}/{webhookname}"))),Object(r.b)("p",null,"where ",Object(r.b)("inlineCode",{parentName:"p"},"{domain}")," is the instance domain for you app and ",Object(r.b)("inlineCode",{parentName:"p"},"{webhook name}")," is the name of the webhook to be executed. In the example on this page, the name is ",Object(r.b)("inlineCode",{parentName:"p"},"wh1"),"."))}d.isMDXComponent=!0},140:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||r;return n?o.a.createElement(m,s(s({ref:t},l),{},{components:n})):o.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);