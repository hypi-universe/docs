"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6924],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),s=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(r),h=a,m=p["".concat(d,".").concat(h)]||p[h]||u[h]||i;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},33555:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],l={id:"widget-card",title:"Card Widget",sidebar_label:"Card",slug:"/widget-card"},d=void 0,s={unversionedId:"widget-card",id:"widget-card",title:"Card Widget",description:"Text-Card",source:"@site/content/widget-card.md",sourceDirName:".",slug:"/widget-card",permalink:"/docs/widget-card",editUrl:"https://github.com/hypi-universe/docs/edit/master/content/widget-card.md",tags:[],version:"current",frontMatter:{id:"widget-card",title:"Card Widget",sidebar_label:"Card",slug:"/widget-card"},sidebar:"docs",previous:{title:"Aspect Ratio",permalink:"/docs/widget-aspect-ratio"},next:{title:"Divider",permalink:"/docs/widget-divider"}},c=[{value:"Overview",id:"overview",children:[],level:2},{value:"Use Cases",id:"use-cases",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2}],u={toc:c};function p(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Text-Card",src:r(94554).Z,width:"1887",height:"880"})),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"A Card is a layout panel with slightly rounded corners and an elevation shadow. It is used to represent some related information, for example, an album, a geographical location, a meal, contact details, etc. You can design a Card by placing required child widgets into it. E.g. A Row with Text and Icon widgets."),(0,i.kt)("h2",{id:"use-cases"},"Use Cases"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Important information can be displayed on the Card and the User may or may not take action on it."),(0,i.kt)("li",{parentName:"ul"},"Card's elevation, border, and background color can be adjusted to provide the desired appearance.")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Text-Card",src:r(80024).Z,width:"478",height:"697"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Elevation gives raised appearance to the widget. Provide Elevation for the Card in Pixels.")),(0,i.kt)("p",null,"Following are the border properties that can be set."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Set the ",(0,i.kt)("inlineCode",{parentName:"li"},"Width")," of the border with the ",(0,i.kt)("inlineCode",{parentName:"li"},"Stroke Align")," value. StrokeAlign value ranges from -1.0 to 1.0. A value of -1.0 indicates a border inside the edge while 1.0 indicates an outside border. A value of 0 sets the center of the border on the edge of the widget."),(0,i.kt)("li",{parentName:"ul"},"You may choose to make the border width ",(0,i.kt)("inlineCode",{parentName:"li"},"solid")," or apply a ",(0,i.kt)("inlineCode",{parentName:"li"},"none")," value."),(0,i.kt)("li",{parentName:"ul"},"You can make corners of the border rounded. Set ",(0,i.kt)("inlineCode",{parentName:"li"},"Bottom Left"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Bottom Right"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Top Left"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"Top Right")," radius values. ",(0,i.kt)("inlineCode",{parentName:"li"},"X")," values indicate horizontal axis values while ",(0,i.kt)("inlineCode",{parentName:"li"},"Y")," values indicate vertical axis values. Just play around with the values to check how it works.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Text-Card",src:r(34765).Z,width:"466",height:"241"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Color sets the background of the Card. "),(0,i.kt)("li",{parentName:"ul"},"Shadow of the Card gets shadow color."),(0,i.kt)("li",{parentName:"ul"},"When the elevation is greater than zero, then the Card surface gets a tint to look like it is lifting off the rest of the screen. This",(0,i.kt)("a",{parentName:"li",href:"https://m3.material.io/styles/color/the-color-system/color-roles#8d13949e-aafc-47bc-81e1-a4daf8cba548"}," tint color "),"gets applied on top of the normal color. You can choose your own ",(0,i.kt)("a",{parentName:"li",href:"https://api.flutter.dev/flutter/material/Material/surfaceTintColor.html"},"Surface Tint")," color."),(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"Border on Foreground")," to true, if you need to show a border around the Card."),(0,i.kt)("li",{parentName:"ul"},"If the content overflows the widget boundary, then there are following ways to clip it.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Anti Alias - It clips the edges to have a smoother look. "),(0,i.kt)("li",{parentName:"ol"},"Anti Alias with Save Layer - It clips with anti-aliasing and saves the Layer immediately following the clip. This process is slower than Anti Aliasing and is rarely used."),(0,i.kt)("li",{parentName:"ol"},"Hard Edge - This is the fastest clipping with low fidelity. No anti-aliasing, or smoothening of edges applied.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If this widget represents a single semantic container, set ",(0,i.kt)("inlineCode",{parentName:"li"},"Semantic Container")," to true. If ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),", it is a collection of individual semantic nodes.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Provide ",(0,i.kt)("inlineCode",{parentName:"li"},"Margin")," values to create empty space around the Card. Margin can be provided on ",(0,i.kt)("strong",{parentName:"li"},"all sides or top, left, bottom, and right")," edges.")))}p.isMDXComponent=!0},94554:function(e,t,r){t.Z=r.p+"assets/images/Widget-Card-1-207d9489fe4b67e6fa311b6471126039.png"},80024:function(e,t,r){t.Z=r.p+"assets/images/Widget-Card-2-3662d7a08767e68c225db6909ef79aa2.png"},34765:function(e,t,r){t.Z=r.p+"assets/images/Widget-Card-3-065d76634b1311b15e40b5ca28502b0d.png"}}]);