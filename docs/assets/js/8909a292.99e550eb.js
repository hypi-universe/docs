"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9093],{3905:function(e,t,i){i.d(t,{Zo:function(){return u},kt:function(){return g}});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function c(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?c(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)i=c[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)i=c[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var a=n.createContext({}),l=function(e){var t=n.useContext(a),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},u=function(e){var t=l(e.components);return n.createElement(a.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(i),g=r,p=d["".concat(a,".").concat(g)]||d[g]||h[g]||c;return i?n.createElement(p,o(o({ref:t},u),{},{components:i})):n.createElement(p,o({ref:t},u))}));function g(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=i.length,o=new Array(c);o[0]=d;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<c;l++)o[l]=i[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},47256:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return s},contentTitle:function(){return a},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=i(87462),r=i(63366),c=(i(67294),i(3905)),o=["components"],s={id:"widget-intrinsic-height",title:"Intrinsic Height",sidebar_label:"Intrinsic Height",slug:"/widget-intrinsic-height"},a=void 0,l={unversionedId:"widget-intrinsic-height",id:"widget-intrinsic-height",title:"Intrinsic Height",description:"Intrinsic Height",source:"@site/content/widget-intrinsic-height.md",sourceDirName:".",slug:"/widget-intrinsic-height",permalink:"/docs/widget-intrinsic-height",editUrl:"https://github.com/hypi-universe/docs/edit/master/content/widget-intrinsic-height.md",tags:[],version:"current",frontMatter:{id:"widget-intrinsic-height",title:"Intrinsic Height",sidebar_label:"Intrinsic Height",slug:"/widget-intrinsic-height"},sidebar:"docs",previous:{title:"Ignore Pointer",permalink:"/docs/widget-ignore-pointer"},next:{title:"Intrinsic Width",permalink:"/docs/widget-intrinsic-width"}},u=[{value:"Overview",id:"overview",children:[],level:2},{value:"Use Cases",id:"use-cases",children:[],level:2}],h={toc:u};function d(e){var t=e.components,s=(0,r.Z)(e,o);return(0,c.kt)("wrapper",(0,n.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"Intrinsic Height",src:i(48134).Z,width:"1903",height:"879"})),(0,c.kt)("h2",{id:"overview"},"Overview"),(0,c.kt)("p",null,"The Intrinsic Height Layout widget sizes its child to the child's maximum intrinsic height.\nWhen unlimited height is available (like Column widget), the child widget like a Button can expand infinitely. With Intrinsic height, the child widget sizes itself to a more reasonable height."),(0,c.kt)("h2",{id:"use-cases"},"Use Cases"),(0,c.kt)("p",null,"This widget is helpful if the accessible height is limitless, but you need to stop the child width to its intrinsic height."))}d.isMDXComponent=!0},48134:function(e,t,i){t.Z=i.p+"assets/images/Widget-Intrinsic-Height-1-a96a6af9a49fa7efe13e6991d1baff32.png"}}]);