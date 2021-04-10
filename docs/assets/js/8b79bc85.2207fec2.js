(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{115:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(8),i=(a(0),a(159)),o={id:"apigateway",title:"API gateway",sidebar_label:"API gateway",slug:"/apigateway"},l={unversionedId:"apigateway",id:"apigateway",isDocsHomePage:!1,title:"API gateway",description:"Hypi's API gateway acts as a middleware that simplifies the integration of your app with other services.",source:"@site/content/apigateway.md",slug:"/apigateway",permalink:"/docs/apigateway",editUrl:"https://github.com/hypi-universe/docs/edit/master/content/apigateway.md",version:"current",sidebar_label:"API gateway",sidebar:"docs",previous:{title:"Authorisation",permalink:"/docs/authorisation"},next:{title:"Aggregation",permalink:"/docs/aggregation"}},s=[{value:"Using the API gateway",id:"using-the-api-gateway",children:[]},{value:"@http directive",id:"http-directive",children:[]},{value:"Variables",id:"variables",children:[]},{value:"Utilities",id:"utilities",children:[]},{value:"Example",id:"example",children:[]}],c={toc:s};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Hypi's API gateway acts as a middleware that simplifies the integration of your app with other services."),Object(i.b)("p",null,"Importantly, by using the Hypi gateway, you can integrate external services with your Hypi app as if they were a part of the platform."),Object(i.b)("p",null,"Hypi's features such as ",Object(i.b)("a",{parentName:"p",href:"/docs/authorisation"},"authorisation"),", ",Object(i.b)("a",{parentName:"p",href:"/docs/workflow"},"workflows")," etc can all be mixed with gateway functions."),Object(i.b)("h3",{id:"using-the-api-gateway"},"Using the API gateway"),Object(i.b)("p",null,"To use the API gateway, you must add a dependency ",Object(i.b)("inlineCode",{parentName:"p"},"gateway")," to the App . As a reminder, a dependency is referenced by the app name, realm and release. Check more about ",Object(i.b)("a",{parentName:"p",href:"/docs/overview"},"dependencies")," here. "),Object(i.b)("h3",{id:"http-directive"},"@http directive"),Object(i.b)("p",null,"Hypi's API gateway is centered around a directive, namely ",Object(i.b)("inlineCode",{parentName:"p"},"@http"),". To integrate an API you add the directive to a query or mutation function in your app's schema."),Object(i.b)("p",null,"Once you have added the directive to a function, it can be treated like any other function in Hypi. Instead of getting its data from the Hypi platform or serverless function, it will get its data from the HTTP service you've configured it to."),Object(i.b)("h4",{id:"definition-and-parameters"},"Definition and parameters"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"directive @http(  method: HttpMethod! = GET,  url: String!,  headers: String,  requestTemplate: String,  saveAs: String) on FIELD_DEFINITION\n")),Object(i.b)("p",null,"When applied causes the value of the field it is applied to to be resolved using an HTTP query configured with the given parameters"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Parameter"),Object(i.b)("th",{parentName:"tr",align:null},"Description"),Object(i.b)("th",{parentName:"tr",align:null},"Example"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},"method")),Object(i.b)("td",{parentName:"tr",align:null},"One of the available HTTP methods"),Object(i.b)("td",{parentName:"tr",align:null},"GET, PUT, POST, DELETE, PATCH, OPTIONS, HEAD, TRACE")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},"url")),Object(i.b)("td",{parentName:"tr",align:null},"The URL template to use to make the request"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"https://api.my-domain.com/users/$%7Bsettings.userId%7D?includeAge=$%7Bvars.includeAge%7D"},"https://api.my-domain.com/users/${settings.userId}?includeAge=${vars.includeAge}"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},"headers")),Object(i.b)("td",{parentName:"tr",align:null},'The string formatted JSON object which sets the headers sent in the HTTP request. A JSON object where ALL entries MUST be strings or convertible to strings (basically numbers) #e.g. {"a": "v1", "b": 2}'),Object(i.b)("td",{parentName:"tr",align:null},'{"Authorization":"Bearer ${settings.apiToken}"}')),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},"requestTemplate")),Object(i.b)("td",{parentName:"tr",align:null},"The name of the request template which defines how the request body and response should be handled"),Object(i.b)("td",{parentName:"tr",align:null})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},"saveAs")),Object(i.b)("td",{parentName:"tr",align:null},"If present, the HTTP response will be stored in Hypi as the given type. The type must exist in the current instance"),Object(i.b)("td",{parentName:"tr",align:null})))),Object(i.b)("h3",{id:"variables"},"Variables"),Object(i.b)("p",null,'Each argument is a valid Velocity template meaning you can use dynamic parameters. The following may be referenced "vars", "settings".'),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"vars")," refers to any arguments on the field the directive is applied to.   ",Object(i.b)("inlineCode",{parentName:"li"},"${vars.firstName}")," refers to the firstName argument of the field"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"settings")," refers to any instance settings provided in the app")),Object(i.b)("h3",{id:"utilities"},"Utilities"),Object(i.b)("p",null,"JSON and Map utilities are available for use in all templates."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"JsonNode JSON.parseJSON(String)"),Object(i.b)("li",{parentName:"ul"},"Map<String, Object>; JSON.parse(String)")),Object(i.b)("p",null,"Map is the standard Java Map interface containing static util methods e.g. Map.of(...) JsonNode is a class used to represent JSON values by the Jackson JSON library."),Object(i.b)("h3",{id:"example"},"Example"),Object(i.b)("p",null,"In the Hypi schema editor (or via the API), you may annotate any query or mutation with this directive."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'type Query {\n getUser(includeAge: Boolean): User @http(\n    url: "https://api.my-domain.com/users/${settings.userId} includeAge=${vars.includeAge}",\n    headers: """{"Authorization":"Bearer ${settings.apiToken}"}"""\n  )\n}\n')),Object(i.b)("p",null,"You can then call this function via HTTP or GraphQL in your app. Note here that the response from the API must match the structure of the ",Object(i.b)("inlineCode",{parentName:"p"},"User")," object you specified as the return type."),Object(i.b)("p",null,"If you're making a request to an API which doesn't directly match your type i.e. ",Object(i.b)("inlineCode",{parentName:"p"},"User")," in this case, you can use the ",Object(i.b)("inlineCode",{parentName:"p"},"requestTemplate")," parameter.  It transforms the API response by extracting fields from it and constructs an object which matches your declared return type."))}p.isMDXComponent=!0},159:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},b=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(a),d=n,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||i;return a?r.a.createElement(m,l(l({ref:t},c),{},{components:a})):r.a.createElement(m,l({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);