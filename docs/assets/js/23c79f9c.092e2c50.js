(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{138:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=s(n),u=a,m=b["".concat(o,".").concat(u)]||b[u]||d[u]||i;return n?r.a.createElement(m,p(p({ref:t},c),{},{components:n})):r.a.createElement(m,p({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(8),i=(n(0),n(138)),o={id:"overview",title:"Overview",sidebar_label:"Overview",slug:"/overview"},p={unversionedId:"overview",id:"overview",isDocsHomePage:!1,title:"Overview",description:"There are certain concepts which are backbone of Hypi. It is better to know them. Let's take an overview of these concepts.",source:"@site/content/overview.md",slug:"/overview",permalink:"/docs/overview",editUrl:"https://github.com/hypi-universe/docs/edit/master/content/overview.md",version:"current",sidebar_label:"Overview",sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"Get Started",permalink:"/docs/get-started"}},l=[{value:"App",id:"app",children:[]},{value:"Release",id:"release",children:[]},{value:"Schema",id:"schema",children:[]},{value:"Dependencies",id:"dependencies",children:[]},{value:"Environment Settings",id:"environment-settings",children:[]},{value:"Instance",id:"instance",children:[]}],c={toc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"There are certain concepts which are backbone of Hypi. It is better to know them. Let's take an overview of these concepts. "),Object(i.b)("h2",{id:"app"},"App"),Object(i.b)("p",null,"Hypi ",Object(i.b)("inlineCode",{parentName:"p"},"App")," is the building block that you will deploy in your application. It covers all the functionalities you want to carry out using Hypi. Hence, the concept of ",Object(i.b)("inlineCode",{parentName:"p"},"App")," is the heart of Hypi."),Object(i.b)("p",null,"The App encapsulates a collection of data structures and serverless functions. You may also add other resources that your app may need to serve its purpose. It will have data models written in ",Object(i.b)("inlineCode",{parentName:"p"},"GraphQL"),". Serverless functions may be written in ",Object(i.b)("inlineCode",{parentName:"p"},"JavaScript"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Go"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Java"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Kotlin"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Node.js"),", ",Object(i.b)("inlineCode",{parentName:"p"},"PHP"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Python"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Ruby"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Scala & Shell"),". Hypi App is compatible with most programming languages."),Object(i.b)("p",null,"An app is a way to implement group-related behavior and add resources. It is quite similar to a micro-service that handles its own data and functionalities. You may have more than one App in your product to implement different modules."),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"#"},"Create An App")),Object(i.b)("p",null,"Let's look deep inside the Hypi 'App'. It consists of the below components."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"#release"},"Release"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"#schema"},"Schema"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"#dependencies"},"Dependencies"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"#environment-settings"},"Environment Settings"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"#instance"},"Instance")))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"release"},"Release"),Object(i.b)("p",null,"A Release represents a version of your app. You may create independent releases for different stages of the Software Development Life Cycle."),Object(i.b)("p",null,"Let\u2019s say you have releases ",Object(i.b)("inlineCode",{parentName:"p"},"alpha"),", ",Object(i.b)("inlineCode",{parentName:"p"},"rc-1"),", ",Object(i.b)("inlineCode",{parentName:"p"},"prod-1"),". The ",Object(i.b)("inlineCode",{parentName:"p"},"alpha")," release is for development, ",Object(i.b)("inlineCode",{parentName:"p"},"rc-1")," for release candidate, and ",Object(i.b)("inlineCode",{parentName:"p"},"prod-1")," for production release. An App will have different releases under its belt."),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"#"},"Create a Release")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"schema"},"Schema"),Object(i.b)("p",null,"Schema is the way of defining a data model using Graph QL. It is linked to a particular Release. You need to identify the structured data needed to build the application. Generate tables/objects to define data models and add them to the schema."),Object(i.b)("p",null,"Have a robust schema that caters to the functionalities of the backend services of your App. Everything about your app's APIs is controlled with the schema."),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://blog.logrocket.com/simplifying-the-graphql-data-model/"},"https://blog.logrocket.com/simplifying-the-graphql-data-model/")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"#"},"Model A Schema")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"dependencies"},"Dependencies"),Object(i.b)("p",null,"A Hypi App may have a functional dependency on one or more apps. Borrow the functionalities from other apps using the Dependencies feature. When you add an app as a dependency, your Hypi app will inherit its behavior."),Object(i.b)("p",null,"Hypi promotes the ",Object(i.b)("inlineCode",{parentName:"p"},"DRY")," (Don\u2019t Repeat Yourself) principle. Do we like to write the same code again and again? So, build small reusable apps that have dependencies on each other."),Object(i.b)("p",null,"Imagine creating an app like Twitter. You could break this into multiple smaller apps, e.g. one for timeline, one for searches, one for media lookup (where the image/video of a link is fetched and embedded in a Tweet). This way, we can identify small modular parts."),Object(i.b)("p",null,"After identifying modular parts, it is up to you how to utilize them. Hypi lets you configure the dependency and avoids the repetition of software patterns."),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"#"},"Add Dependencies")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"environment-settings"},"Environment Settings"),Object(i.b)("p",null,"Environment Settings let you define variables in your system that describe the environment. These are mostly key-value pairs to define configuration options for the App. Many applications require settings at run time which change depending on some criteria specific to the app or its users/environment. Environment Variables let you configure these settings."),Object(i.b)("p",null,"Apart from built-in variables, Hypi allows you to add variables for different environments. You may have one variable set to one value for the development machine and another value set for the production environment."),Object(i.b)("p",null,"Within each release, you can define one or more variables and later populate values for those variables for each instance\xa0that you create. These variables are then accessible at runtime."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"th"},"Environment Variable")),Object(i.b)("th",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"th"},"Description")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"DB","_","USER","_","NAME"),Object(i.b)("td",{parentName:"tr",align:null},"User Name for logging in to different machines")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"DB_PWD"),Object(i.b)("td",{parentName:"tr",align:null},"Password for the machine")))),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://www.ge.com/digital/documentation/historian/version23/r_public_rest_apis_env_variables.html"},"https://www.ge.com/digital/documentation/historian/version23/r","_","public","_","rest","_","apis","_","env_variables.html")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"#"},"Add Environment Settings")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"instance"},"Instance"),Object(i.b)("p",null,"An instance is an isolated copy of your app. Isolated copy means data created in one instance is not accessible by default from another instance. Only someone with permission can grant access between instances. Check here about the ",Object(i.b)("a",{parentName:"p",href:"#"},"permissions"),"."),Object(i.b)("p",null,"Data stored in the database at a particular time is called an instance of a database. Think of an app as a template and an instance as a deployed version of that template. A release may have one or more instances."),Object(i.b)("p",null,"Every instance gets a domain. Hypi generates one by default. But, you are free to create a new domain, e.g. ",Object(i.b)("a",{parentName:"p",href:"#"},Object(i.b)("em",{parentName:"a"},"abc.apps.hypi.app")),". A domain has a unique set of values attributed to various data fields."),Object(i.b)("p",null,"Check more about ",Object(i.b)("a",{parentName:"p",href:"/docs/apisetup"},"Domains")," provided by Hypi."),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"#"},"Add Instance")))}s.isMDXComponent=!0}}]);