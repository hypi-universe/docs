"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6961],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),g=i,f=d["".concat(c,".").concat(g)]||d[g]||p[g]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},90786:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],l={id:"widget-ignore-pointer",title:"Ignore Pointer",sidebar_label:"Ignore Pointer",slug:"/widget-ignore-pointer"},c=void 0,s={unversionedId:"widget-ignore-pointer",id:"widget-ignore-pointer",title:"Ignore Pointer",description:"Ignore Pointer",source:"@site/content/widget-ignore-pointer.md",sourceDirName:".",slug:"/widget-ignore-pointer",permalink:"/docs/widget-ignore-pointer",editUrl:"https://github.com/hypi-universe/docs/edit/master/content/widget-ignore-pointer.md",tags:[],version:"current",frontMatter:{id:"widget-ignore-pointer",title:"Ignore Pointer",sidebar_label:"Ignore Pointer",slug:"/widget-ignore-pointer"},sidebar:"docs",previous:{title:"Grid Tile Bar",permalink:"/docs/widget-grid-tile-bar"},next:{title:"Intrinsic Height",permalink:"/docs/widget-intrinsic-height"}},u=[{value:"Use Cases",id:"use-cases",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2}],p={toc:u};function d(e){var t=e.components,l=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Ignore Pointer",src:n(50525).Z,width:"1918",height:"873"})),(0,o.kt)("p",null,"Ignore Pointer is a widget that remains invisible during hit testing."),(0,o.kt)("p",null,"For clicks of the mouse button, no event takes place. The widget ignores the movements of the pointer. It is unlike the disabled state, where the child widget may be painted in a different color. During hit testing with a mouse, it still consumes space and paints its child as usual."),(0,o.kt)("h2",{id:"use-cases"},"Use Cases"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The Ignore Pointer prevents accidental interactions with the parts of the UI.")),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Drag the child widget from the widgets panel to the right-hand side Properties panel."),(0,o.kt)("li",{parentName:"ul"},"Set ",(0,o.kt)("inlineCode",{parentName:"li"},"Ignoring")," to true to make the child widget invisible during hit testing.")))}d.isMDXComponent=!0},50525:function(e,t,n){t.Z=n.p+"assets/images/Widget-Ignore-Pointer-76fc3b1abff05906fe2d5ed4949424e7.png"}}]);