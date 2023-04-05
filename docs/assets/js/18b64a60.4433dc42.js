"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8135],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),h=r,g=c["".concat(s,".").concat(h)]||c[h]||p[h]||i;return n?o.createElement(g,a(a({ref:t},d),{},{components:n})):o.createElement(g,a({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},72081:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return c}});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),a=["components"],l={id:"widget-elevated-button",title:"Elevated Button Widget",sidebar_label:"Elevated Button",slug:"/widget-elevated-button"},s=void 0,u={unversionedId:"widget-elevated-button",id:"widget-elevated-button",title:"Elevated Button Widget",description:"Widget Elevated Button",source:"@site/content/widget-elevated-button.md",sourceDirName:".",slug:"/widget-elevated-button",permalink:"/docs/widget-elevated-button",editUrl:"https://github.com/hypi-universe/docs/edit/master/content/widget-elevated-button.md",tags:[],version:"current",frontMatter:{id:"widget-elevated-button",title:"Elevated Button Widget",sidebar_label:"Elevated Button",slug:"/widget-elevated-button"},sidebar:"docs",previous:{title:"Close Button",permalink:"/docs/widget-close-button"},next:{title:"Outlined Button",permalink:"/docs/widget-outlined-button"}},d=[{value:"Overview",id:"overview",children:[],level:2},{value:"Use Cases",id:"use-cases",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2}],p={toc:d};function c(e){var t=e.components,l=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Widget Elevated Button",src:n(38461).Z,width:"1915",height:"886"})),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"An Elevated Button provides raised appearance to the Button. It has an Elevated Button as a parent widget with one child Text widget to provide the label to the Button. Change the properties of both these widgets by selecting them from the left-hand side navigation panel."),(0,i.kt)("h2",{id:"use-cases"},"Use Cases"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Elevated button is used when other elements on the screen are generally flat. "),(0,i.kt)("li",{parentName:"ul"},"The elevated style of the button captures the user's attention."),(0,i.kt)("li",{parentName:"ul"},"For different states of the Button, the button style can be customized."),(0,i.kt)("li",{parentName:"ul"},"For overflow of the Text, the clipping property is available.")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Button text properties can be customized with the Text widget properties.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Widget Elevated Button",src:n(34609).Z,width:"496",height:"526"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"There are five states of the Button for which appearance can be customized. The states are default state, mouse hovering, focus state, pressed state, and disabled state. The appearance of the button can be customized using the following colors.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Background color sets the background of the button. "),(0,i.kt)("li",{parentName:"ol"},"Foreground color sets the child widget color on the button. "),(0,i.kt)("li",{parentName:"ol"},"When the mouse gets hovered over the Button, it gets an overlay color. "),(0,i.kt)("li",{parentName:"ol"},"Shadow of the button gets shadow color.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The elevation gives raised appearance to the Button. The value has to be given in Pixels.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If the Autofocus is set to true, the Button will get initial focus. If there are many widgets on the screen, the Button will have focus by default. If a user presses Enter, then the Button will get pressed. If the Button doesn't have Autofocus, then any other widget will get the initial focus.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If the content overflows the widget boundary, then there are following ways to clip it."))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Anti Alias - It clips the edges to have a smoother look. "),(0,i.kt)("li",{parentName:"ol"},"Anti Alias with Save Layer - It clips with anti-aliasing and saves the Layer immediately following the clip. This process is slower than Anti Aliasing and is rarely used."),(0,i.kt)("li",{parentName:"ol"},"Hard Edge - This is the fastest clipping with low fidelity. No anti-aliasing, or smoothening of edges applied.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Widget Elevated Button",src:n(50026).Z,width:"478",height:"627"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Change the ",(0,i.kt)("strong",{parentName:"p"},"Size")," of the Button by providing ",(0,i.kt)("strong",{parentName:"p"},"width and height"),". The values can be provided in terms of pixels.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Provide ",(0,i.kt)("strong",{parentName:"p"},"Padding")," values to create space between the child widget and the outer border of the Button. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The Alignment",(0,i.kt)("strong",{parentName:"p"}," places the widget at a certain position inside the parent widget boundaries. The Position can be "),"Bottom Center, Bottom Left, Bottom Right, Center, Center Left, Center Right, Top Left, Top Right, Top Center**, etc. Choose the child widget position inside the button appropriately."))))}c.isMDXComponent=!0},38461:function(e,t,n){t.Z=n.p+"assets/images/Widget-Elevated-Button-1-3db98fcb751a6e9dc9179e09745c6010.png"},34609:function(e,t,n){t.Z=n.p+"assets/images/Widget-Elevated-Button-2-e3416713d825bf845f6e87d8428e73e4.png"},50026:function(e,t,n){t.Z=n.p+"assets/images/Widget-Elevated-Button-3-619b62cd53dbdeb01b37bcc783afd433.png"}}]);