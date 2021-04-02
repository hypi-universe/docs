(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{107:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(8),o=(t(0),t(138)),s={id:"serverlessfunction",title:"Serverless Function",sidebar_label:"Serverless Function",slug:"/serverlessfunction"},i={unversionedId:"serverlessfunction",id:"serverlessfunction",isDocsHomePage:!1,title:"Serverless Function",description:"Serverless technology are a means of adding custom behaviour without having to worry too much about infrastructure, deployment or maintenance. Serverless functions are single purpose, programmatic funcions that are hosted by cloud computing platforms. You may access serverless functions from Hypi platform. You need to have a docker image of the function created on the platform like OpenFaaS.",source:"@site/content/serverlessfunction.md",slug:"/serverlessfunction",permalink:"/docs/serverlessfunction",editUrl:"https://github.com/hypi-universe/docs/edit/master/content/serverlessfunction.md",version:"current",sidebar_label:"Serverless Function",sidebar:"docs",previous:{title:"Web Hooks",permalink:"/docs/webhooks"},next:{title:"File Upload",permalink:"/docs/fileupload"}},l=[{value:"Create an App",id:"create-an-app",children:[]},{value:"Get App ID",id:"get-app-id",children:[]},{value:"Create Serverless",id:"create-serverless",children:[]},{value:"Define tan directive",id:"define-tan-directive",children:[]},{value:"Trigger Function",id:"trigger-function",children:[]}],c={toc:l};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Serverless technology are a means of adding custom behaviour without having to worry too much about infrastructure, deployment or maintenance. Serverless functions are single purpose, programmatic funcions that are hosted by cloud computing platforms. You may access serverless functions from Hypi platform. You need to have a docker image of the function created on the platform like OpenFaaS.  "),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"How to setup and use a serverless?")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#create-an-app"},"Create an App")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#get-app-id"},"Get App ID")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#create-serverless"},"Create Serverless")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#define-tan-directive"},"Define tan directive")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#trigger-function"},"Trigger Function"))),Object(o.b)("h3",{id:"create-an-app"},"Create an App"),Object(o.b)("p",null,"App is the basic building block of Hypi platform. Check more about App ",Object(o.b)("a",{parentName:"p",href:"#"},"here"),". Create an App using ",Object(o.b)("a",{parentName:"p",href:"#"},"this")," guide."),Object(o.b)("h3",{id:"get-app-id"},"Get App ID"),Object(o.b)("p",null,"Run the following GraphQL query to retrieve the App ID available as ",Object(o.b)("inlineCode",{parentName:"p"},"hypi.id"),". Note that the query returns multiple apps in your realm, so pick the one related the App that you have just created in the previous step."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},'{\n  find(type: App, arcql:"*"){\n    edges{\n      node{\n        ... on App {\n          name\n          releases{\n            hypi {\n              id\n            }\n            name\n          }\n        }\n      }\n      cursor\n    }\n  }\n}\n')),Object(o.b)("h3",{id:"create-serverless"},"Create Serverless"),Object(o.b)("p",null,"At this point, you are ready to create the Serverless function. In order to create a serverless you should already have a containerized image ready to deploy available either in a public or a private docker registry."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"mutation upsert($values:HypiUpsertInputUnion!) {\n  upsert(values:$values){\n    id\n  }\n}\n")),Object(o.b)("p",null,"Under the query variables, you can supply the actual parameters. Note that the parameters are a typical JSON payload. The values supplied here are for illustrative purposes only, and you need to edit them to match your use case."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "values": {\n    "App": {\n      "name": "test-serverless",\n      "hypi": {\n        "id": "01EJX6A9VWTV3EMDKRMW9G757X"\n      },\n      "releases": [\n        {\n          "name": "initial",\n          "hypi": {\n            "id": "01EJX6BHM5YDNX30DWTNWJB5DH"\n          },\n          "serverless": {\n            "hypi": {\n              "impl": "OpenFaaSFn"\n            },\n            "image": "functions/alpine:latest",\n            "name": "echo-app",\n            "credentials": {\n              "server": "hub.docker.com",\n              "username": "example",\n              "password": "example"\n          }\n        }\n      ]\n    }\n  }\n}\n')),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Verify that the serverless was created")),Object(o.b)("p",null,"In order to double check that the serverless was created successfully, then run the following GraphQL query and make sure that the serverless name exists in the retrieved list."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  find(type: App, arcql:"*"){\n    edges{\n      node{\n        ... on App {\n          name\n          releases{\n            name\n            serverless{\n              ... on OpenFaaSFn{\n                name\n                image\n                credentials {\n                  server\n                  username\n                  password\n                }\n              }\n            }\n          }\n        }\n      }\n      cursor\n    }\n  }\n}\n')),Object(o.b)("h3",{id:"define-tan-directive"},"Define tan directive"),Object(o.b)("p",null,"Before you start using the serverless function, you need to define a GraphQL query type that provides the parameters of the function. Here is an example definition."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},'type Query {\n    f1(a:String!, b: Int!, c:Boolean!):EchoType @tan(type:OpenFaaS, name:"echoit", handler:"cat")\n}\ntype EchoType {\n        a: String\n        b: Int\n        c: Boolean\n}\n')),Object(o.b)("p",null,"This has just defined a @tan function that accepts 3 parameters of types String, Integer, and Boolean. It returns a JSON object. The @tan directive has a few options; type, name, handler, and saveAs. They are explained below:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"type:")," instructs the system on which serverless backend to use, currently OpenFaaS is available as well as inline scripts written in Groovy or Velocity."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"name:"),' the name field should match the name provided under the GraphQL "serverless" object.'),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"handler:"),' is the script/entrypoint to execute inside the container. For example, "python main.py -env=prod" or "go run quickstart.go" ... etc.'),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"saveAs:"),' instructs the Hypi platform to persist the result of the serverless function call as a GraphQL type in the database. For example, saveAs: "ServerlessResponse".')),Object(o.b)("p",null,'Observe here how the @tan directive is instructed to return payload of user-defined type "EchoType". Thus, any user-defined type can be returned.'),Object(o.b)("h3",{id:"trigger-function"},"Trigger Function"),Object(o.b)("p",null,"It is now time to run the function and pass some real values and obtain the results. Using a query like this:"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Request")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},'query{\n    f1(a:"Hello, @tan", b:2329, c:true) {\n        a\n        b\n        c\n    }\n}\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Response")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "f1": {\n      "a": "Hello, @tan",\n      "b": 2329,\n      "c": true\n    }\n  }\n}\n')))}p.isMDXComponent=!0},138:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),p=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,m=u["".concat(s,".").concat(d)]||u[d]||b[d]||o;return t?a.a.createElement(m,i(i({ref:n},c),{},{components:t})):a.a.createElement(m,i({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);