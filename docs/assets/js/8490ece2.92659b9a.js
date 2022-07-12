"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9517],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),f=i,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4955:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],l={id:"widget-list-view",title:"List",sidebar_label:"List",slug:"/widget-list-view"},c=void 0,s={unversionedId:"widget-list-view",id:"widget-list-view",title:"List",description:"ListView",source:"@site/content/widget-list-view.md",sourceDirName:".",slug:"/widget-list-view",permalink:"/docs/widget-list-view",editUrl:"https://github.com/hypi-universe/docs/edit/master/content/widget-list-view.md",tags:[],version:"current",frontMatter:{id:"widget-list-view",title:"List",sidebar_label:"List",slug:"/widget-list-view"},sidebar:"docs",previous:{title:"Advance",permalink:"/docs/widget-advance"},next:{title:"Common",permalink:"/docs/widget-properties"}},u=[{value:"ListView",id:"listview",children:[],level:2}],d={toc:u};function p(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"listview"},"ListView"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Scrollable list of widgets arranged in a vertical or horizontal direction"),(0,o.kt)("li",{parentName:"ul"},"Puts children alongside in the scroll direction"),(0,o.kt)("li",{parentName:"ul"},"You can scroll direction as horizontal or vertical"),(0,o.kt)("li",{parentName:"ul"},"Provide List height  and padding for the border in pixels"),(0,o.kt)("li",{parentName:"ul"},"You may add Containers as child widgets to adjust whitespaces between children."),(0,o.kt)("li",{parentName:"ul"},"With ShrinkWrap property set to true, ListView occupies the space as much as needed by the child widgets.")))}p.isMDXComponent=!0}}]);