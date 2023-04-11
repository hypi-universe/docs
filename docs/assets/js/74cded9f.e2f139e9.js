"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1555],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return g}});var i=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,i,n=function(e,r){if(null==e)return{};var t,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var d=i.createContext({}),p=function(e){var r=i.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=p(e.components);return i.createElement(d.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return i.createElement(i.Fragment,{},r)}},u=i.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),g=n,f=u["".concat(d,".").concat(g)]||u[g]||c[g]||a;return t?i.createElement(f,o(o({ref:r},s),{},{components:t})):i.createElement(f,o({ref:r},s))}));function g(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,o=new Array(a);o[0]=u;var l={};for(var d in r)hasOwnProperty.call(r,d)&&(l[d]=r[d]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<a;p++)o[p]=t[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},98337:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var i=t(87462),n=t(63366),a=(t(67294),t(3905)),o=["components"],l={id:"widget-grid-paper",title:"Grid Paper",sidebar_label:"Grid Paper",slug:"/widget-grid-paper"},d=void 0,p={unversionedId:"widget-grid-paper",id:"widget-grid-paper",title:"Grid Paper",description:"Grid Paper Widget",source:"@site/content/widget-grid-paper.md",sourceDirName:".",slug:"/widget-grid-paper",permalink:"/docs/widget-grid-paper",editUrl:"https://github.com/hypi-universe/docs/edit/master/content/widget-grid-paper.md",tags:[],version:"current",frontMatter:{id:"widget-grid-paper",title:"Grid Paper",sidebar_label:"Grid Paper",slug:"/widget-grid-paper"},sidebar:"docs",previous:{title:"Fractionally Sized Box",permalink:"/docs/widget-fractionally-sized-box"},next:{title:"Grid Tile",permalink:"/docs/widget-grid-tile"}},s=[{value:"Overview",id:"overview",children:[],level:2},{value:"Use Cases",id:"use-cases",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2}],c={toc:s};function u(e){var r=e.components,l=(0,n.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},c,l,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Grid Paper Widget",src:t(33175).Z,width:"1897",height:"879"})),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Grid Paper widget draws a rectilinear grid of lines one pixel wide. The Grid's origin is at the top left corner of the child widget. The grid is always drawn on the child widget."),(0,a.kt)("h2",{id:"use-cases"},"Use Cases"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Visualize your layout using Gridlines."),(0,a.kt)("li",{parentName:"ul"},"Draw Grid over other Layout widgets like Stack or Container.")),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Set the ",(0,a.kt)("inlineCode",{parentName:"li"},"Color")," of the grid lines."),(0,a.kt)("li",{parentName:"ul"},"An ",(0,a.kt)("inlineCode",{parentName:"li"},"interval")," is the distance between the primary lines in the grid, in logical pixels. Usually given 100 logical pixels."),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("inlineCode",{parentName:"li"},"Division")," is the number of major divisions within each primary grid cell."),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("inlineCode",{parentName:"li"},"Sub Division")," is the number of minor divisions within each major division including the major division itself."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"interval")," = 100.0, ",(0,a.kt)("inlineCode",{parentName:"li"},"divisions")," = 2, and ",(0,a.kt)("inlineCode",{parentName:"li"},"subdivisions")," = 5 creates a widget that draws a rectilinear grid of 1-pixel-wide lines.")))}u.isMDXComponent=!0},33175:function(e,r,t){r.Z=t.p+"assets/images/Widget-GridPaper-1-682f5f7d399679d1904b212eba6172d3.png"}}]);