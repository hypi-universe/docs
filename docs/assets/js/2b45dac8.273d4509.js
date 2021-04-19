(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{159:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,h=u["".concat(o,".").concat(d)]||u[d]||b[d]||r;return n?i.a.createElement(h,s(s({ref:t},c),{},{components:n})):i.a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(8),r=(n(0),n(159)),o={id:"api-references",title:"Overview",sidebar_label:"Overview",slug:"/api-references"},s={unversionedId:"api-references",id:"api-references",isDocsHomePage:!1,title:"Overview",description:"Hypi's platform tries to include the features most modern applications need to get going quickly. Some of the features of Hypi include the following.",source:"@site/content/api-references.md",slug:"/api-references",permalink:"/docs/api-references",editUrl:"https://github.com/hypi-universe/docs/edit/master/content/api-references.md",version:"current",sidebar_label:"Overview",sidebar:"docs",previous:{title:"Hypi FAQs",permalink:"/docs/faq"},next:{title:"API Set-Up",permalink:"/docs/apisetup"}},l=[{value:"CRUD",id:"crud",children:[]},{value:"App dependencies",id:"app-dependencies",children:[]},{value:"Environment variables",id:"environment-variables",children:[]},{value:"Workflow",id:"workflow",children:[]},{value:"Webhooks",id:"webhooks",children:[]},{value:"Triggers",id:"triggers",children:[]},{value:"User defined functions",id:"user-defined-functions",children:[]},{value:"Serverless functions",id:"serverless-functions",children:[]},{value:"Authorisation and Permission policies",id:"authorisation-and-permission-policies",children:[]},{value:"Maths API",id:"maths-api",children:[]},{value:"Aggregations API",id:"aggregations-api",children:[]}],c={toc:l};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Hypi's platform tries to include the features most modern applications need to get going quickly. Some of the features of Hypi include the following. "),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"#crud"},"CRUD")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"#app-dependencies"},"App dependencies")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"#environment-variables"},"Environment variables")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"#workflow"},"Workflow")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"#webhooks"},"Webhooks")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"#triggers"},"Triggers")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"#user-defined-functions"},"User defined functions")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"#serverless-functions"},"Serverless functions")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"#authorisation-and-permission-policies"},"Authorisation and Permission policies")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"#maths-api"},"Maths API")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"#aggregations-api"},"Aggregations API"))),Object(r.b)("h2",{id:"crud"},"CRUD"),Object(r.b)("p",null,"CRUD is the acronym commonly used for Create, Read, Update and Delete. With Hypi, a CRUD API is automatically generated from your app's schema.  It enables you to start working with your app's APIs quickly."),Object(r.b)("p",null,'It goes a little further by including the ability to "trash" data i.e. perform a soft delete. The data will not be returned unless explicitly requested. However, data will not get deleted from the database. You can later untrash or permanently delete the data.'),Object(r.b)("p",null,"See  ",Object(r.b)("a",{parentName:"p",href:"/docs/crud"},"CRUD documentation")," for more information."),Object(r.b)("h2",{id:"app-dependencies"},"App dependencies"),Object(r.b)("p",null,"Hypi tries to promote the DRY principle and general separatation of concerns by providing you with the ability to split an app into smaller re-usable parts."),Object(r.b)("p",null,"In doing so, a single app's schema and other code can be simpler to maintain and manage. This is achieved by providing the ability for any app to be used as a dependency of another app."),Object(r.b)("p",null,"Imagine creating an app like Twitter. You could break this into multiple smaller apps. For e.g. one for timeline, one for searches, one for media lookup (where the image/video of a link is fetched and embedded in a Tweet)."),Object(r.b)("p",null,"How you choose to break your app down into modular parts is up to you, Hypi provides the facilities that make it possible and then gets out of the way."),Object(r.b)("p",null,"See ",Object(r.b)("a",{parentName:"p",href:"/docs/ui-add-dependencies"},"App dependencies")),Object(r.b)("h2",{id:"environment-variables"},"Environment variables"),Object(r.b)("p",null,"Many applications require settings at run time which change depending on some criteria specific to the app or its users/environment. When you create a release, Hypi let's you define one or more fields which can be populated when an instance of the app is created. These become accessible at runtime."),Object(r.b)("p",null,"See ",Object(r.b)("a",{parentName:"p",href:"/docs/ui-add-environment-var"},"Environment variables")),Object(r.b)("h2",{id:"workflow"},"Workflow"),Object(r.b)("p",null,"Workflow is a way of letting your app orchestrate the execution of multiple functions in response to a single event."),Object(r.b)("p",null,"Imagine you were building a web app for a completely automated Pizza service.\nWhen a user places an order for a Pizza, you want to do a few things:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Accept the order"),Object(r.b)("li",{parentName:"ol"},"Start the oven"),Object(r.b)("li",{parentName:"ol"},"Put the ingredients in the oven"),Object(r.b)("li",{parentName:"ol"},"Package the prepared pizza"),Object(r.b)("li",{parentName:"ol"},"Hand the Pizza over to the delivery driver")),Object(r.b)("p",null,"You could write one function which dispatches all of these one at a time. This case is simple enough."),Object(r.b)("p",null,"What happens if you need to parallelise some parts of this?\nOr execute some parts synchronously but others asynchronously?"),Object(r.b)("p",null,"The code will become more and more complex. Instead of taking on this complexity, you could use Hypi's workflows."),Object(r.b)("p",null,"A workflow let's you define the order of execution of one or more functions as well as provide facilities for parallel execution of some functions and scheduling some to be executed later. It also let's you conditionally execute any step of the workflow and much more."),Object(r.b)("p",null,"See ",Object(r.b)("a",{parentName:"p",href:"/docs/workflow"},"Workflow")),Object(r.b)("h2",{id:"webhooks"},"Webhooks"),Object(r.b)("p",null,"Many cloud services provide a mechanism to report ocurrence of certain events in their system.\nOne of those mechanisms is called a Webhook. This is where the service will let you specify a URL that they will send a HTTP request to."),Object(r.b)("p",null,"Hypi's Webhooks let you define URLs which can be called by external services.\nIn response, you can call a user defined function, a serverless function, execute triggers and more."),Object(r.b)("p",null,"See ",Object(r.b)("a",{parentName:"p",href:"/docs/webhooks"},"Webhooks")),Object(r.b)("h2",{id:"triggers"},"Triggers"),Object(r.b)("p",null,"Hypi triggers are a mechanism for automatically executing a function before or after another function.\nIf you're familiar with triggers in databases, it's the same concept."),Object(r.b)("p",null,"Let's say you have an app which defined a function called ",Object(r.b)("inlineCode",{parentName:"p"},"startProcess")," and you depend on another app which has a function called ",Object(r.b)("inlineCode",{parentName:"p"},"afterProcessStarted"),"."),Object(r.b)("p",null,"You can use a ",Object(r.b)("inlineCode",{parentName:"p"},"@trigger")," to execute the ",Object(r.b)("inlineCode",{parentName:"p"},"afterProcessStarted")," function when ",Object(r.b)("inlineCode",{parentName:"p"},"startProcess")," is called."),Object(r.b)("p",null,"The function used can be defined anywhere, either in the current app or in a dependency."),Object(r.b)("p",null,"See ",Object(r.b)("a",{parentName:"p",href:"/docs/triggers"},"Triggers")),Object(r.b)("h2",{id:"user-defined-functions"},"User defined functions"),Object(r.b)("p",null,"User defined functions (UDF) are a lightweight way of executing custom code in the Hypi platform.\nThey are considered lightweight compared to serverless functions because they are evaluated on the same server where the calling code is executed."),Object(r.b)("p",null,"Currently two languages are supported for UDFs:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Groovy")," - the entire Groovy syntax is available making it quick, easy and performant to add custom behaviour to your app."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Velocity")," - the velocity template language is used in places where you want to output text which executes some dynamic behaviour. For example, you could use this to customise the body of an email, using velocity templating to substitute the receiver's name from a variable etc.")),Object(r.b)("p",null,"See ",Object(r.b)("a",{parentName:"p",href:"/docs/user-defined-function"},"User Defined Functions")),Object(r.b)("h2",{id:"serverless-functions"},"Serverless functions"),Object(r.b)("p",null,"Serverless functions are a modern approach to application development."),Object(r.b)("p",null,"Just as all the features in Hypi described so far allows you to get work done without worrying about things like servers or execution environment, so too do serverless functions."),Object(r.b)("p",null,"Serverless functions in Hypi let's you write any custom code you want, wrap it in a Docker container and then use it in your Hypi app as if it was defined by the Hypi platform itself."),Object(r.b)("p",null,"See ",Object(r.b)("a",{parentName:"p",href:"/docs/serverlessfunction"},"Serverless functions")),Object(r.b)("h2",{id:"authorisation-and-permission-policies"},"Authorisation and Permission policies"),Object(r.b)("p",null,"Many applications require their users to have certain permissions before they can perform a given action.\nHypi has built in support for extensive permission and authorisation control."),Object(r.b)("p",null,"You can define a Type, Scope or Resource based permission which use different autorisation policies to control who can perform an action...or when."),Object(r.b)("p",null,"See ",Object(r.b)("a",{parentName:"p",href:"/docs/authorisation"},"Authorisation")),Object(r.b)("h2",{id:"maths-api"},"Maths API"),Object(r.b)("p",null,"In many database systems it is possible to ask the system to perform some basic mathemetical operations on an existing field/column. This is also possible with Hypi by using the maths API."),Object(r.b)("p",null,"Maths APIs exist because in a high throughput system getting a value, performing math operations on the client and then updating the value on the server can be error prone."),Object(r.b)("p",null,"What happens if two requests update the value having performed their own math operations client side?"),Object(r.b)("p",null,"Hypi lets you avoid this conflict by providing an explicit API for executing mathematical operations on numeric fields."),Object(r.b)("p",null,"See ",Object(r.b)("a",{parentName:"p",href:"/docs/maths-api"},"Maths API")),Object(r.b)("h2",{id:"aggregations-api"},"Aggregations API"),Object(r.b)("p",null,'It\'s often the case that you may want to count or group data in your app. You may want to ask things like, "How many of this thing exist?".'),Object(r.b)("p",null,"Use cases for this:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"How many users do i have in my app?"),Object(r.b)("li",{parentName:"ul"},"How many users exist in each department?"),Object(r.b)("li",{parentName:"ul"},"How many users registered in the last 30 days?")),Object(r.b)("p",null,"These are some examples of questions that the aggregations API can be used to answer."),Object(r.b)("p",null,"See ",Object(r.b)("a",{parentName:"p",href:"/docs/aggregation"},"Aggregations API")))}p.isMDXComponent=!0}}]);