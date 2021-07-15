(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5638],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),h=l(t),d=i,m=h["".concat(p,".").concat(d)]||h[d]||u[d]||o;return t?r.createElement(m,s(s({ref:n},c),{},{components:t})):r.createElement(m,s({ref:n},c))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=h;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var l=2;l<o;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},5062:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return h}});var r=t(2122),i=t(9756),o=(t(7294),t(3905)),s=["components"],a={id:"openwhisk-cli",title:"OpenWhisk CLI",sidebar_label:"OpenWhisk CLI",slug:"/openwhisk-cli"},p=void 0,l={unversionedId:"openwhisk-cli",id:"openwhisk-cli",isDocsHomePage:!1,title:"OpenWhisk CLI",description:"What is OpenWhisk",source:"@site/content/openwhisk-cli.md",sourceDirName:".",slug:"/openwhisk-cli",permalink:"/docs/openwhisk-cli",editUrl:"https://github.com/hypi-universe/docs/edit/master/content/openwhisk-cli.md",version:"current",frontMatter:{id:"openwhisk-cli",title:"OpenWhisk CLI",sidebar_label:"OpenWhisk CLI",slug:"/openwhisk-cli"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/serverless"},next:{title:"Create Serverless Function",permalink:"/docs/create-serverless"}},c=[{value:"What is OpenWhisk",id:"what-is-openwhisk",children:[]},{value:"Install OpenWhisk CLI",id:"install-openwhisk-cli",children:[]},{value:"Configure OpenWhisk",id:"configure-openwhisk",children:[]}],u={toc:c};function h(e){var n=e.components,t=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"what-is-openwhisk"},"What is OpenWhisk"),(0,o.kt)("p",null,"Apache OpenWhisk is an open-source, a serverless platform that executes custom functions. It manages the infrastructure, servers, and scaling using Docker containers. As per its programming model, Developers write functional logic called Actions, in any supported programming language. These actions can be dynamically scheduled and run in response to Triggers from external sources called Feeds or from HTTP requests."),(0,o.kt)("p",null,"OpenWhisk supports a growing set of Programming languages. It has REST API-based Command Line Interface (CLI) to support the deployment of actions."),(0,o.kt)("h3",{id:"install-openwhisk-cli"},"Install OpenWhisk CLI"),(0,o.kt)("p",null,"Install OpenWhisk CLI (wsk) for your Operating system as per the instructions given in the below link."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://openwhisk.apache.org/documentation.html#wsk-cli"},"https://openwhisk.apache.org/documentation.html#wsk-cli")),(0,o.kt)("p",null,"Make sure to set PATH environmental variable pointing towards wsk binary file. Verify the installation using the following command. You may get the list of available commands."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"wsk --help\n")),(0,o.kt)("h3",{id:"configure-openwhisk"},"Configure OpenWhisk"),(0,o.kt)("p",null,"Before using OpenWhisk, you must configure it to point towards Hypi's API endpoint and provide associated authentication credentials."),(0,o.kt)("h5",{id:"wsk-property-set"},"wsk property set"),(0,o.kt)("p",null,"Run the follwing command to set Hypi Instance Domain as OpenWhisk Host."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'wsk property set --apihost "https://fn.hypi.app" --auth "<InstanceDomain\\>:<Auth_Key>"\n')),(0,o.kt)("p",null,"Here \\<InstanceDomain",">","  is App Instance Domain, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"proudest.apps.hypi.app")," and \\<Auth_Key> is the Authorization token of that domain."),(0,o.kt)("p",null,"API endpoint to implement serverless functionality with Hypi is ",(0,o.kt)("inlineCode",{parentName:"p"},"https://fn.hypi.app")))}h.isMDXComponent=!0}}]);