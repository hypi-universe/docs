"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9038],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,g=d["".concat(c,".").concat(u)]||d[u]||h[u]||r;return n?i.createElement(g,o(o({ref:t},p),{},{components:n})):i.createElement(g,o({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},34654:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var i=n(87462),a=n(63366),r=(n(67294),n(3905)),o=["components"],l={id:"widget-action-chip",title:"Action Chip Widget",sidebar_label:"Action Chip",slug:"/widget-action-chip"},c=void 0,s={unversionedId:"widget-action-chip",id:"widget-action-chip",title:"Action Chip Widget",description:"Action-chip-Widget",source:"@site/content/widget-action-chip.md",sourceDirName:".",slug:"/widget-action-chip",permalink:"/docs/widget-action-chip",editUrl:"https://github.com/hypi-universe/docs/edit/master/content/widget-action-chip.md",tags:[],version:"current",frontMatter:{id:"widget-action-chip",title:"Action Chip Widget",sidebar_label:"Action Chip",slug:"/widget-action-chip"},sidebar:"docs",previous:{title:"Text",permalink:"/docs/widget-text"},next:{title:"Back Button",permalink:"/docs/widget-back-button"}},p=[{value:"Use Cases",id:"use-cases",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2}],h={toc:p};function d(e){var t=e.components,l=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Action-chip-Widget",src:n(52421).Z,width:"1903",height:"897"})),(0,r.kt)("p",null,"Action chip triggers an action related to primary content or shows progress and confirmation. It holds an Avatar and Text. Showing Avatar on the front is optional. Drag the Avtaar widget from the widgets panel to the right hand side Properties panel. You may also replace the Text child widget with any other widget or remove the Text widget."),(0,r.kt)("h2",{id:"use-cases"},"Use Cases"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Display after primary content (below a card or at the bottom of the screen)"),(0,r.kt)("li",{parentName:"ul"},"Change the Text of the child widgets from the Properties panel."),(0,r.kt)("li",{parentName:"ul"},"Handle OnPressed event from the Logic section to implement an action.")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Background color sets the background of the action chip. "),(0,r.kt)("li",{parentName:"ul"},"Disabled color sets the disabled appearance of the action chip."),(0,r.kt)("li",{parentName:"ul"},"Shadow of the chip gets shadow color."),(0,r.kt)("li",{parentName:"ul"},"When the elevation is greater than zero, then the action chip surface gets a tint to look like it is lifting off the rest of the screen. This",(0,r.kt)("a",{parentName:"li",href:"https://m3.material.io/styles/color/the-color-system/color-roles#8d13949e-aafc-47bc-81e1-a4daf8cba548"}," tint color "),"gets applied on top of the normal color. You can choose your own ",(0,r.kt)("a",{parentName:"li",href:"https://api.flutter.dev/flutter/material/Material/surfaceTintColor.html"},"Surface Tint")," color.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Action-chip-Widget",src:n(20610).Z,width:"516",height:"247"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Set the Font of the text by choosing an option from the menu. The menu appears after clicking on ",(0,r.kt)("strong",{parentName:"li"},"Font")," from the Typography section. Fonts available in Google Fonts Library are enlisted in the Font Menu."),(0,r.kt)("li",{parentName:"ul"},"Set the ",(0,r.kt)("strong",{parentName:"li"},"Font size")," by providing values in pixels."),(0,r.kt)("li",{parentName:"ul"},"Change the ",(0,r.kt)("strong",{parentName:"li"},"Thickness")," of the Text using ",(0,r.kt)("strong",{parentName:"li"},"Weight")," option."),(0,r.kt)("li",{parentName:"ul"},"Change the ",(0,r.kt)("strong",{parentName:"li"},"Letter spacing")," to create space between two letters. Change the ",(0,r.kt)("strong",{parentName:"li"},"Word Spacing")," to create space between two words."),(0,r.kt)("li",{parentName:"ul"},"Set the ",(0,r.kt)("strong",{parentName:"li"},"Height of the Text Widget")," by providing values in pixels."),(0,r.kt)("li",{parentName:"ul"},"Set the ",(0,r.kt)("strong",{parentName:"li"},"Text Color")," and ",(0,r.kt)("strong",{parentName:"li"},"Background color")," of the Text."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Decorate")," the text with the ",(0,r.kt)("inlineCode",{parentName:"li"},"Underline"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Overline"),", or ",(0,r.kt)("inlineCode",{parentName:"li"},"Strikethrough")," line. The line's ",(0,r.kt)("inlineCode",{parentName:"li"},"color")," can be changed. The ",(0,r.kt)("inlineCode",{parentName:"li"},"Thickness")," of the line can be changed by providing values in the edit box. Setting the style to ",(0,r.kt)("inlineCode",{parentName:"li"},"None")," reverts the changes.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Action-chip-Widget",src:n(28264).Z,width:"514",height:"576"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The elevation gives raised appearance to the Button. The value has to be given in Pixels. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Elevation for the pressed state can also be given in Pixels.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If the Autofocus is set to true, the Button will get initial focus. If there are many widgets on the screen, the Button will have focus by default. If a user presses Enter, then the Button will get pressed. If the Button doesn't have Autofocus, then any other widget will get the initial focus.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If the content overflows the widget boundary, then there are the following ways to clip it."))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Anti Alias - It clips the edges to have a smoother look. "),(0,r.kt)("li",{parentName:"ol"},"Anti Alias with Save Layer - It clips with anti-aliasing and saves the Layer immediately following the clip. This process is slower than Anti Aliasing and is rarely used."),(0,r.kt)("li",{parentName:"ol"},"Hard Edge - This is the fastest clipping with low fidelity. No anti-aliasing, or smoothening of edges applied.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Action-chip-Widget",src:n(68431).Z,width:"507",height:"223"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Provide ",(0,r.kt)("strong",{parentName:"li"},"Padding")," values to create space between the child widget and the outer border of the Button. You can also provide Label padding values to provide padding around the label."),(0,r.kt)("li",{parentName:"ul"})))}d.isMDXComponent=!0},52421:function(e,t,n){t.Z=n.p+"assets/images/Widget-Action-Chip-1-7566db09407fae93a72fa4750c6bdf9d.png"},20610:function(e,t,n){t.Z=n.p+"assets/images/Widget-Action-Chip-2-56ace545b8d0ec25c8e35c94aebeed5b.png"},28264:function(e,t,n){t.Z=n.p+"assets/images/Widget-Action-Chip-3-ae7e33cd58cf1168f64626bd1e9ef441.png"},68431:function(e,t,n){t.Z=n.p+"assets/images/Widget-Action-Chip-4-9c24d90cec896f8a6fc20658398c121c.png"}}]);