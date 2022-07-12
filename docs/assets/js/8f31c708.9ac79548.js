"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2824],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),h=l(a),m=r,k=h["".concat(s,".").concat(m)]||h[m]||u[m]||i;return a?n.createElement(k,o(o({ref:t},c),{},{components:a})):n.createElement(k,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},8744:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return h}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],p={id:"openwhisk-github",title:"Using the GitHub Package",sidebar_label:"GitHub Package",slug:"/lowcode/openwhisk-github"},s=void 0,l={unversionedId:"lowcode/openwhisk-github",id:"lowcode/openwhisk-github",title:"Using the GitHub Package",description:"The /whisk.system/github package offers a convenient way to use the GitHub APIs.",source:"@site/content/lowcode/openwhisk-github.md",sourceDirName:"lowcode",slug:"/lowcode/openwhisk-github",permalink:"/docs/lowcode/openwhisk-github",editUrl:"https://github.com/hypi-universe/docs/edit/master/content/lowcode/openwhisk-github.md",tags:[],version:"current",frontMatter:{id:"openwhisk-github",title:"Using the GitHub Package",sidebar_label:"GitHub Package",slug:"/lowcode/openwhisk-github"},sidebar:"docs",previous:{title:"WebSocket Package",permalink:"/docs/lowcode/openwhisk-websocket"},next:{title:"JavaScript actions",permalink:"/docs/lowcode/actions-nodejs"}},c=[{value:"Firing a trigger event with GitHub activity",id:"firing-a-trigger-event-with-github-activity",children:[],level:3}],u={toc:c};function h(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"/whisk.system/github")," package offers a convenient way to use the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.github.com/"},"GitHub APIs"),"."),(0,i.kt)("p",null,"The package includes the following feed:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Entity"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/whisk.system/github")),(0,i.kt)("td",{parentName:"tr",align:null},"package"),(0,i.kt)("td",{parentName:"tr",align:null},"username, repository, accessToken"),(0,i.kt)("td",{parentName:"tr",align:null},"Interact with the GitHub API")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/whisk.system/github/webhook")),(0,i.kt)("td",{parentName:"tr",align:null},"feed"),(0,i.kt)("td",{parentName:"tr",align:null},"events, username, repository, accessToken"),(0,i.kt)("td",{parentName:"tr",align:null},"Fire trigger events on GitHub activity")))),(0,i.kt)("p",null,"Creating a package binding with the ",(0,i.kt)("inlineCode",{parentName:"p"},"username"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"repository"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"accessToken")," values is suggested.  With binding, you don't need to specify the values each time that you use the feed in the package."),(0,i.kt)("h3",{id:"firing-a-trigger-event-with-github-activity"},"Firing a trigger event with GitHub activity"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"/whisk.system/github/webhook")," feed configures a service to fire a trigger when there is activity in a specified GitHub repository. The parameters are as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"username"),": The user name of the GitHub repository."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"repository"),": The GitHub repository."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"accessToken"),": Your GitHub personal access token."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"events"),": The ",(0,i.kt)("a",{parentName:"li",href:"https://developer.github.com/v3/activity/events/types/"},"GitHub event type")," of interest."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"baseUrl"),": The GitHub api endpoint. Default value is '",(0,i.kt)("a",{parentName:"li",href:"https://api.github.com'"},"https://api.github.com'"),".")),(0,i.kt)("p",null,"The following is an example of creating a trigger that will be fired each time that there is a new commit to a GitHub repository."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Generate a GitHub ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/settings/tokens"},"personal access token"),".")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Important")," ",(0,i.kt)("em",{parentName:"li"},"When ",(0,i.kt)("a",{parentName:"em",href:"https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line"},"creating your personal access token"),", be sure to select the following ",(0,i.kt)("strong",{parentName:"em"},"scopes"),":"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"repo"),": ",(0,i.kt)("strong",{parentName:"li"},"repo:status")," to allow access to commit status."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"admin:repo_hook"),": ",(0,i.kt)("strong",{parentName:"li"},"write:repo_hook")," to allow the feed action to create your webhook."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Warning")," ",(0,i.kt)("em",{parentName:"li"},"Make sure that you don't have any webhooks already defined for your repository or they may be overwritten."))),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a package binding that is configured for your GitHub repository and with the personal access token created in step 1."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"hypi wsk package bind /whisk.system/github myGit \\\n  --param baseUrl https://github.myenterprise.com/api/v3 \\\n  --param username myGitUser \\\n  --param repository myGitRepo \\\n  --param accessToken aaaaa1111a1a1a1a1a111111aaaaaa1111aa1a1a\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a trigger for the GitHub ",(0,i.kt)("inlineCode",{parentName:"p"},"push")," event type by using your ",(0,i.kt)("inlineCode",{parentName:"p"},"myGit/webhook")," feed."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"hypi wsk trigger create myGitTrigger --feed myGit/webhook --param events push\n")))),(0,i.kt)("p",null,"A commit to the GitHub repository by using a ",(0,i.kt)("inlineCode",{parentName:"p"},"git push")," causes the trigger to be fired by the webhook. If there is a rule that matches the trigger, then the associated action will be invoked."),(0,i.kt)("p",null,"The action receives the GitHub webhook payload as an input parameter. Each GitHub webhook event has a similar JSON schema, but is a unique payload object that is determined by its event type."),(0,i.kt)("p",null,"For more information about the payload content, see the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.github.com/v3/activity/events/types/"},"GitHub events and payload")," API documentation."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Large portions of this page is copied from the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/openwhisk/tree/master/docs"},"Apache OpenWhisk documentation")," on August 5th 2021 - where there have been customisations to match Hypi's deployment this has been noted. Apache OpenWhisk and the Apache name are the property of the Apache Foundation and licensed under the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/openwhisk/blob/master/LICENSE.txt"},"Apache V2 license")," ."))))}h.isMDXComponent=!0}}]);