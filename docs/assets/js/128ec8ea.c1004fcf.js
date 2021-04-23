(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{181:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),u=a,m=b["".concat(c,".").concat(u)]||b[u]||d[u]||r;return n?o.a.createElement(m,i(i({ref:t},s),{},{components:n})):o.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<r;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(8),r=(n(0),n(181)),c={id:"actions-dotnet",title:".NET actions",sidebar_label:".NET actions",slug:"/actions-dotnet"},i={unversionedId:"actions-dotnet",id:"actions-dotnet",isDocsHomePage:!1,title:".NET actions",description:"The following sections guide you through creating and invoking a single .NET Core action.",source:"@site/content/actions-dotnet.md",slug:"/actions-dotnet",permalink:"/docs/actions-dotnet",editUrl:"https://github.com/hypi-universe/docs/edit/master/content/actions-dotnet.md",version:"current",sidebar_label:".NET actions",sidebar:"docs",previous:{title:"Rust actions",permalink:"/docs/actions-rust"},next:{title:"Docker actions",permalink:"/docs/actions-docker"}},l=[{value:"Create the .NET Core Action",id:"create-the-net-core-action",children:[]},{value:"Invoke the .NET Core Action",id:"invoke-the-net-core-action",children:[]}],s={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The following sections guide you through creating and invoking a single .NET Core action."),Object(r.b)("p",null,"In order to compile, test and archive .NET Core projects, you must have the ",Object(r.b)("a",{parentName:"p",href:"https://www.microsoft.com/net/download"},".NET Core SDK")," installed locally and the environment variable ",Object(r.b)("inlineCode",{parentName:"p"},"DOTNET_HOME")," set to the location where the ",Object(r.b)("inlineCode",{parentName:"p"},"dotnet")," executable can be found."),Object(r.b)("p",null,"A .NET Core action is a .NET Core class library with a method called ",Object(r.b)("inlineCode",{parentName:"p"},"Main")," that has the exact signature as follows:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-csharp"},"public Newtonsoft.Json.Linq.JObject Main(Newtonsoft.Json.Linq.JObject);\n")),Object(r.b)("p",null,"For example, create a C# project called ",Object(r.b)("inlineCode",{parentName:"p"},"Apache.OpenWhisk.Example.Dotnet"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'dotnet new classlib -n Apache.OpenWhisk.Example.Dotnet -lang "C#"\ncd Apache.OpenWhisk.Example.Dotnet\n')),Object(r.b)("p",null,"Install the ",Object(r.b)("a",{parentName:"p",href:"https://www.newtonsoft.com/json"},"Newtonsoft.Json")," NuGet package as follows:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"dotnet add package Newtonsoft.Json -v 12.0.1\n")),Object(r.b)("p",null,"Now create a file called ",Object(r.b)("inlineCode",{parentName:"p"},"Hello.cs")," with the following content:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing Newtonsoft.Json.Linq;\n\nnamespace Apache.OpenWhisk.Example.Dotnet\n{\n    public class Hello\n    {\n        public JObject Main(JObject args)\n        {\n            string name = "stranger";\n            if (args.ContainsKey("name")) {\n                name = args["name"].ToString();\n            }\n            JObject message = new JObject();\n            message.Add("greeting", new JValue($"Hello, {name}!"));\n            return (message);\n        }\n    }\n}\n')),Object(r.b)("p",null,"Publish the project as follows:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"dotnet publish -c Release -o out\n")),Object(r.b)("p",null,"Zip the published files as follows:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"cd out\nzip -r -0 helloDotNet.zip *\n")),Object(r.b)("h3",{id:"create-the-net-core-action"},"Create the .NET Core Action"),Object(r.b)("p",null,"You need to specify the name of the function handler using ",Object(r.b)("inlineCode",{parentName:"p"},"--main")," argument.\nThe value for ",Object(r.b)("inlineCode",{parentName:"p"},"main")," needs to be in the following format:\n",Object(r.b)("inlineCode",{parentName:"p"},"{Assembly}::{Class Full Name}::{Method}"),", e.q.,\n",Object(r.b)("inlineCode",{parentName:"p"},"Apache.OpenWhisk.Example.Dotnet::Apache.OpenWhisk.Example.Dotnet.Hello::Main")),Object(r.b)("p",null,"To use on a deployment of OpenWhisk that contains the runtime as a kind:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"wsk action update helloDotNet helloDotNet.zip --main Apache.OpenWhisk.Example.Dotnet::Apache.OpenWhisk.Example.Dotnet.Hello::Main --kind dotnet:2.2\n")),Object(r.b)("h3",{id:"invoke-the-net-core-action"},"Invoke the .NET Core Action"),Object(r.b)("p",null,"Action invocation is the same for .NET Core actions as it is for Swift and JavaScript actions:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"wsk action invoke --result helloDotNet --param name World\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'  {\n      "greeting": "Hello World!"\n  }\n')),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Large portions of this page is copied from the Apache OpenWhisk documentation in ",Object(r.b)("a",{parentName:"p",href:"https://github.com/apache/openwhisk/tree/master/docs"},"https://github.com/apache/openwhisk/tree/master/docs")," on April 23rd 2021 - where there have been customisations to match Hypi's deployment this has been noted. Apache OpenWhisk and the Apache name are the property of the Apache Foundation and licensed under the ",Object(r.b)("a",{parentName:"p",href:"https://github.com/apache/openwhisk/blob/master/LICENSE.txt"},"Apache V2 license")," ."))))}p.isMDXComponent=!0}}]);