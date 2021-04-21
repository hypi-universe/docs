(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{116:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(8),i=(a(0),a(159)),s=a(163),l=a(164),o={id:"apigateway",title:"API gateway",sidebar_label:"API gateway",slug:"/apigateway"},p={unversionedId:"apigateway",id:"apigateway",isDocsHomePage:!1,title:"API gateway",description:"Hypi's API gateway acts as a middleware that simplifies the integration of your app with other services.",source:"@site/content/apigateway.md",slug:"/apigateway",permalink:"/docs/apigateway",editUrl:"https://github.com/hypi-universe/docs/edit/master/content/apigateway.md",version:"current",sidebar_label:"API gateway",sidebar:"docs",previous:{title:"Authorisation",permalink:"/docs/authorisation"},next:{title:"Aggregation",permalink:"/docs/aggregation"}},c=[{value:"Using the API gateway",id:"using-the-api-gateway",children:[]},{value:"@http directive",id:"http-directive",children:[]},{value:"Variables",id:"variables",children:[]},{value:"Utilities",id:"utilities",children:[]},{value:"RequestTemplate",id:"requesttemplate",children:[]},{value:"InlineHttpRequestTemplate",id:"inlinehttprequesttemplate",children:[]},{value:"Example",id:"example",children:[]}],b={toc:c};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Hypi's API gateway acts as a middleware that simplifies the integration of your app with other services."),Object(i.b)("p",null,"Importantly, by using the Hypi gateway, you can integrate external services with your Hypi app as if they were a part of the platform."),Object(i.b)("p",null,"Hypi's features such as ",Object(i.b)("a",{parentName:"p",href:"/docs/authorisation"},"authorisation"),", ",Object(i.b)("a",{parentName:"p",href:"/docs/workflow"},"workflows")," etc. can all be mixed with gateway functions."),Object(i.b)("h3",{id:"using-the-api-gateway"},"Using the API gateway"),Object(i.b)("p",null,"API gateway is a part of App-core. It is available to use by default. "),Object(i.b)("h3",{id:"http-directive"},"@http directive"),Object(i.b)("p",null,"Hypi's API gateway is centered around a directive, namely ",Object(i.b)("inlineCode",{parentName:"p"},"@http"),". To integrate an API you add the directive to a query or mutation function in your app's schema."),Object(i.b)("p",null,"Once you have added the directive to a function, it can be treated like any other function in Hypi. Instead of getting its data from the Hypi platform or serverless function, it will get its data from the HTTP service you've configured it to."),Object(i.b)("h4",{id:"definition-and-parameters"},"Definition and parameters"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"directive @http(  method: HttpMethod! = GET,  url: String!,  headers: String,  requestTemplate: String,  inline: InlineHttpRequestTemplate, saveAs: String) on FIELD_DEFINITION\n")),Object(i.b)("p",null,"HTTP query gets configured with the following parameters."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"th"},"Parameter")),Object(i.b)("th",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"th"},"Description")),Object(i.b)("th",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"th"},"Example")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},"method")),Object(i.b)("td",{parentName:"tr",align:null},"One of the available HTTP methods"),Object(i.b)("td",{parentName:"tr",align:null},"GET, PUT, POST, DELETE, PATCH, OPTIONS, HEAD, TRACE")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},"url")),Object(i.b)("td",{parentName:"tr",align:null},"The URL template to make the request"),Object(i.b)("td",{parentName:"tr",align:null},"URL to make request to")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},"headers")),Object(i.b)("td",{parentName:"tr",align:null},'The string formatted JSON object which sets the headers sent in the HTTP request. A JSON object where ALL entries MUST be strings or convertible to strings (basically numbers) #e.g. {"a": "v1", "b": 2}'),Object(i.b)("td",{parentName:"tr",align:null},'{"Authorization":"Bearer ${settings.apiToken}"}')),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},"requestTemplate")),Object(i.b)("td",{parentName:"tr",align:null},"The name of the request template which defines how the request body and response should be handled"),Object(i.b)("td",{parentName:"tr",align:null})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},"inline")),Object(i.b)("td",{parentName:"tr",align:null},"Provides the body of RequestTemplate and ResponseTemplate"),Object(i.b)("td",{parentName:"tr",align:null})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},"saveAs")),Object(i.b)("td",{parentName:"tr",align:null},"If present, the HTTP response will be stored in Hypi as the given type. The type must exist in the current instance"),Object(i.b)("td",{parentName:"tr",align:null})))),Object(i.b)("p",null,"A sample URL could be as follows:\n",Object(i.b)("a",{parentName:"p",href:"https://api.my-domain.com/users?$%7Bsettings.userId%7D&includeAge=$%7Bvars.includeAge%7D"},"https://api.my-domain.com/users?${settings.userId}&includeAge=${vars.includeAge}")),Object(i.b)("p",null,"Here query parameters could be passed using variables 'vars' and 'settings'. Utilities like JSON and MAP are available to use in all the templates like Groovy or Velocity."),Object(i.b)("h3",{id:"variables"},"Variables"),Object(i.b)("p",null,'Each argument is a valid Velocity template meaning you can use dynamic parameters. The following may be referenced:  "vars", "settings","response".'),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"vars")," refers to any arguments on the field the directive is applied to.   ",Object(i.b)("inlineCode",{parentName:"li"},"${vars.firstName}")," refers to the firstName argument of the field. So, pass on the variables through 'vars'."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"settings")," refers to any instance settings provided in the app. You may save specific settings in the form of Environment Variable. And then use it in the HTTP request. ",Object(i.b)("inlineCode",{parentName:"li"},"${settings.APITOKEN")," refers to environment variable settings ",Object(i.b)("inlineCode",{parentName:"li"},"APITOKEN")," ."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"response")," refers to the response of the http request that is available in ",Object(i.b)("inlineCode",{parentName:"li"},"responseTemplate"),". It contains the entire response of the http request. You may tailor it as required.")),Object(i.b)("h3",{id:"utilities"},"Utilities"),Object(i.b)("p",null,"JSON and Map utilities are available for use in all templates."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"JsonNode JSON.parseJSON(String)"),Object(i.b)("li",{parentName:"ul"},"Map<String, Object>; JSON.parse(String)")),Object(i.b)("p",null,"Map is the standard Java Map interface containing static util methods e.g. Map.of(...)\nJsonNode is a class used to represent JSON values by the ",Object(i.b)("a",{parentName:"p",href:"https://www.baeldung.com/jackson"},"Jackson JSON library"),"."),Object(i.b)("h3",{id:"requesttemplate"},"RequestTemplate"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"RequestTemplate")," data type defines the templates that should be applied to a given HTTP request. It contains the name of the request and formats of the request and response. Sometimes the url has a specific request format. You may match that format using the RequestTemplate. Similarly, you may tailor the response received using ",Object(i.b)("inlineCode",{parentName:"p"},"ResponseTemplate"),". "),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"RequestTemplate")," can be referenced by name using the parameter ",Object(i.b)("inlineCode",{parentName:"p"},"requestTemplate"),"\nYou may create an object of RequestTemplate in the GraphQL editor and then execute HTTP request or you may specify the RequestTemplate inline in the Schema using the parameter ",Object(i.b)("inlineCode",{parentName:"p"},"inline"),". "),Object(i.b)("p",null,"We will look at both these use-cases in the ",Object(i.b)("a",{parentName:"p",href:"#example"},"Example"),". Please note you may run the HTTP request without this template if there is no specific requirement."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"type RequestTemplate{\n    name:String!\n    request:String\n    response:String\n}\n")),Object(i.b)("h3",{id:"inlinehttprequesttemplate"},"InlineHttpRequestTemplate"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"InlineHttpRequestTemplate")," data type can be used to provide the body of the ",Object(i.b)("inlineCode",{parentName:"p"},"requestTemplate")," instead of referencing a request template by name. If the structure is static, variable ",Object(i.b)("inlineCode",{parentName:"p"},"inline")," can be used which has ",Object(i.b)("inlineCode",{parentName:"p"},"InlineHttpRequestTemplate")," data type."),Object(i.b)("p",null,"You may tailor the response received by processing ",Object(i.b)("inlineCode",{parentName:"p"},"responseTemplate")," string."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"input InlineHttpRequestTemplate {  \n  requestTemplate: String  \n  responseTemplate: String  \n}\n")),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'inline: {\n    requestTemplate: """{"to": "${vars.email}","notification" : \n    {"title" : "$vars.title", "body": "$vars.body"}}""", \n    responseTemplate: """..."""}\n}\n')),Object(i.b)("h3",{id:"example"},"Example"),Object(i.b)("p",null,"Let's use directive ",Object(i.b)("inlineCode",{parentName:"p"},"@http")," and send an HTTP request to the website ",Object(i.b)("a",{parentName:"p",href:"https://httpbin.org"},"https://httpbin.org"),". It echos the HTTP request back as a response."),Object(i.b)("h4",{id:"use-case1"},"Use-Case:1"),Object(i.b)("p",null,"In this use-case, we will define ",Object(i.b)("inlineCode",{parentName:"p"},"requestTemplate")," and ",Object(i.b)("inlineCode",{parentName:"p"},"responseTemplate"),"  using ",Object(i.b)("inlineCode",{parentName:"p"},"inline")," variable. "),Object(i.b)("p",null,"Here is the schema for the HTTP request.  It sends the http POST request to the url containing the username and email-id using ",Object(i.b)("inlineCode",{parentName:"p"},"setEmail")," function. "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'type Mutation {\n   # {emailid: "value emailid", user: "value user"}\n setEmail(emailid: String, user: String): Json @http(\n    \n    method: POST,\n    url: "https://httpbin.org/post?user=$vars.user&emailid=$vars.emailid",\n    headers: """{"Content-Type": "application/json", \n             "Authorization": "${settings.APITOKEN}"}"""\n    inline: {\n      requestTemplate: """{"email": "${vars.emailid}"}""",\n//#Notice the use of .textValue() method-this gets the string value without quotes\n      responseTemplate: """{"value": "$!{response.json.email.textValue()}"}"""\n//#OR - the below - notice there is no quote around the variable \n//#Hypi uses the Java Jackson JSON library which will automatically include quotes like this "<value here>"\n      #responseTemplate: """{"value": $!{response.json.email}}"""\n    },\n    saveAs: "Email"    \n  )\n}\n')),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"requestTemplate")," has the ",Object(i.b)("inlineCode",{parentName:"p"},"$vars.emailid")," field that holds the input email id to be sent across. The ",Object(i.b)("inlineCode",{parentName:"p"},"responseTemplate")," extracts the echoed email value from the",Object(i.b)("inlineCode",{parentName:"p"},"json")," field of the response and saves it in the ",Object(i.b)("inlineCode",{parentName:"p"},"value")," field of the ",Object(i.b)("inlineCode",{parentName:"p"},"Email")," data type. Notice the use of APITOKEN environment variable. The value of this field has to be set at runtime and the same gets sent over in the HTTP request header."),Object(i.b)("p",null,"Let's run the http request now by executing the ",Object(i.b)("inlineCode",{parentName:"p"},"setEmail")," function. The response gets saved in the ",Object(i.b)("inlineCode",{parentName:"p"},"Email")," object."),Object(i.b)(s.a,{defaultValue:"query",values:[{label:"GraphQL Query",value:"query"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"query",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'mutation{\n  setEmail(emailid: "test1@abc.com", user: "abc3")\n}\n'))),Object(i.b)(l.a,{value:"response",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "setEmail": {\n      "value": "test1@abc.com"\n    }\n  }\n}\n')))),Object(i.b)("p",null,"You may cross-check the response in the ",Object(i.b)("inlineCode",{parentName:"p"},"Email")," object by using the ",Object(i.b)("a",{parentName:"p",href:"/docs/read-data"},"find")," function."),Object(i.b)("h4",{id:"use-case2"},"Use-Case:2"),Object(i.b)("p",null,"In this use-case, we will create the RequestTemplate object in the GraphQL editor and format the request. Let's create requestTemplate - ",Object(i.b)("inlineCode",{parentName:"p"},"httpbin-post"),". "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'mutation{  \n  upsert(values:{  \n    RequestTemplate:[  \n      {  \n        name:"httpbin-post",  \n        request: """{"id": "${vars.emailid}"}"""  \n      }  \n    ]  \n  }){  \n    id  \n  }  \n}\n')),Object(i.b)("p",null,"Here is the schema for the HTTP request.  Here we are using ",Object(i.b)("inlineCode",{parentName:"p"},"requestTemplate")," parameter instead of ",Object(i.b)("inlineCode",{parentName:"p"},"inline"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'type HttpBinResponse2 {\n  args: Json\n  data: String\n  headers: Json\n  files: Json\n  form: Json\n  json: Json\n  origin: String\n  url: String\n}\n\ntype Mutation {\n setEmail(emailid: String, user: String): Json @http(\n    method: POST,\n    headers: """{"Content-Type": "application/json"}"""\n    url: "https://httpbin.org/post?user=$vars.user&emailid=$vars.emailid",\n    requestTemplate: "httpbin-post",\n    saveAs: "HttpBinResponse2"    \n  )\n}\n')),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"$vars.emailid")," holds the input email id to be sent across. The same has been used in the requestTemplate -",Object(i.b)("inlineCode",{parentName:"p"},"httpbin-post"),". So only ",Object(i.b)("inlineCode",{parentName:"p"},"emailid")," will be echoed back and not the user string as we have omitted it in the requestTemplate. ",Object(i.b)("inlineCode",{parentName:"p"},"HttpBinResponse2")," is the data type that holds the response of the website to the http request. "),Object(i.b)("p",null,"Let's run the HTTP request now by executing the ",Object(i.b)("inlineCode",{parentName:"p"},"setEmail")," function. The response gets saved in the ",Object(i.b)("inlineCode",{parentName:"p"},"HttpBinResponse2")," object. Notice the ",Object(i.b)("inlineCode",{parentName:"p"},"headers")," setting echoed in the response."),Object(i.b)(s.a,{defaultValue:"query",values:[{label:"GraphQL Query",value:"query"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"query",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'mutation{\n  setEmail(emailid: "example@http.com", user: "abc3")\n}\n'))),Object(i.b)(l.a,{value:"response",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'{\n  "data": {\n    "setEmail": {\n      "args": {\n        "emailid": "example@http.com",\n        "user": "abc3"\n      },\n      "data": "{\\"id\\": \\"example@http.com\\"}",\n      "files": {},\n      "form": {},\n      "headers": {\n        "Content-Length": "26",\n        "Content-Type": "application/json",\n        "Host": "httpbin.org",\n        "User-Agent": "Apache-HttpAsyncClient/4.1.4 (Java/11.0.10)",\n        "X-Amzn-Trace-Id": "Root=1-607fc4ba-32fdf04c146a3f453474be30"\n      },\n      "json": {\n        "id": "example@http.com"\n      },\n      "origin": "51.210.125.224",\n      "url": "https://httpbin.org/post?user=abc3&emailid=example%40http.com"\n    }\n  }\n}\n')))),Object(i.b)("p",null,"You may cross-check the response in the ",Object(i.b)("inlineCode",{parentName:"p"},"HttpBinResponse2")," object by using the ",Object(i.b)("inlineCode",{parentName:"p"},"find")," function."))}u.isMDXComponent=!0},159:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),c=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},b=function(e){var t=c(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),b=c(a),m=n,d=b["".concat(s,".").concat(m)]||b[m]||u[m]||i;return a?r.a.createElement(d,l(l({ref:t},p),{},{components:a})):r.a.createElement(d,l({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var p=2;p<i;p++)s[p]=a[p];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},160:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},161:function(e,t,a){"use strict";var n=a(0),r=a(162);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},162:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},163:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(161),s=a(160),l=a(57),o=a.n(l);var p=37,c=39;t.a=function(e){var t=e.lazy,a=e.block,l=e.defaultValue,b=e.values,u=e.groupId,m=e.className,d=Object(i.a)(),h=d.tabGroupChoices,O=d.setTabGroupChoices,j=Object(n.useState)(l),g=j[0],f=j[1],v=n.Children.toArray(e.children),y=[];if(null!=u){var N=h[u];null!=N&&N!==g&&b.some((function(e){return e.value===N}))&&f(N)}var T=function(e){var t=e.target,a=y.indexOf(t),n=v[a].props.value;f(n),null!=u&&(O(u,n),setTimeout((function(){var e,a,n,r,i,s,l,p;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,i=e.right,s=window,l=s.innerHeight,p=s.innerWidth,a>=0&&i<=p&&r<=l&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o.a.tabItemActive),setTimeout((function(){return t.classList.remove(o.a.tabItemActive)}),2e3))}),150))},w=function(e){var t,a;switch(e.keyCode){case c:var n=y.indexOf(e.target)+1;a=y[n]||y[0];break;case p:var r=y.indexOf(e.target)-1;a=y[r]||y[y.length-1]}null===(t=a)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":a},m)},b.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:Object(s.a)("tabs__item",o.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:w,onFocus:T,onClick:T},a)}))),t?Object(n.cloneElement)(v.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},164:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.children,a=e.hidden,n=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}}}]);