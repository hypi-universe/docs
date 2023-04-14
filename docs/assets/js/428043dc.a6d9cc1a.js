"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6629],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return y}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(r),y=i,f=p["".concat(s,".").concat(y)]||p[y]||u[y]||o;return r?n.createElement(f,a(a({ref:t},d),{},{components:r})):n.createElement(f,a({ref:t},d))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},47213:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),a=["components"],l={id:"widget-list-body",title:"List Body",sidebar_label:"List Body",slug:"/widget-list-body"},s=void 0,c={unversionedId:"widget-list-body",id:"widget-list-body",title:"List Body",description:"List Body",source:"@site/content/widget-list-body.md",sourceDirName:".",slug:"/widget-list-body",permalink:"/docs/widget-list-body",editUrl:"https://github.com/hypi-universe/docs/edit/master/content/widget-list-body.md",tags:[],version:"current",frontMatter:{id:"widget-list-body",title:"List Body",sidebar_label:"List Body",slug:"/widget-list-body"},sidebar:"docs",previous:{title:"License Page",permalink:"/docs/widget-license-page"},next:{title:"Navigation Bar",permalink:"/docs/widget-navigation-bar"}},d=[{value:"Overview",id:"overview",children:[],level:2},{value:"Use Cases",id:"use-cases",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2}],u={toc:d};function p(e){var t=e.components,l=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"List Body",src:r(29734).Z,width:"1908",height:"877"})),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"List Body arranges its child widgets sequentially along a given axis, i.e. horizontal or vertical."),(0,o.kt)("h2",{id:"use-cases"},"Use Cases"),(0,o.kt)("p",null,"This widget is rarely used directly. Consider using ListView or Column to arrange child widgets."),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Set Main Axis as ",(0,o.kt)("inlineCode",{parentName:"li"},"Horizontal")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"Vertical"),"."),(0,o.kt)("li",{parentName:"ul"},"Set the order of the children as ",(0,o.kt)("inlineCode",{parentName:"li"},"Reverse")," by choosing ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),". This way child widgets will automatically get arranged in reverse order.")))}p.isMDXComponent=!0},29734:function(e,t,r){t.Z=r.p+"assets/images/Widget-List-Body-1-597034dbf2be0f961698b95dd9ce8ba8.png"}}]);