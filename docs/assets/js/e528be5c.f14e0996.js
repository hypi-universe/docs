"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6808],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(f,i(i({ref:t},s),{},{components:n})):a.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},64156:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"widget-scaffold",title:"Scaffold",sidebar_label:"Scaffold",slug:"/widget-scaffold"},p=void 0,c={unversionedId:"widget-scaffold",id:"widget-scaffold",title:"Scaffold",description:"Scaffold",source:"@site/content/widget-scaffold.md",sourceDirName:".",slug:"/widget-scaffold",permalink:"/docs/widget-scaffold",editUrl:"https://github.com/hypi-universe/docs/edit/master/content/widget-scaffold.md",tags:[],version:"current",frontMatter:{id:"widget-scaffold",title:"Scaffold",sidebar_label:"Scaffold",slug:"/widget-scaffold"},sidebar:"docs",previous:{title:"Navigation Bar",permalink:"/docs/widget-navigation-bar"},next:{title:"Vertical Divider",permalink:"/docs/widget-vertical-divider"}},s=[{value:"Properties",id:"properties",children:[],level:3}],d={toc:s};function u(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Scaffold",src:n(15592).Z,width:"1906",height:"895"})),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Scaffold")," provides a basic layout structure for the screens. It is the foundation of every screen. When you add a new screen, Scaffold widgets gets automatically added. It occupies the entire space on the screen. It has multiple places where you can place widgets.  It may consist of an App Bar, Drawer, Body, Bottom Navigation Bar, Floating Action Button, etc."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"body")," is the primary content of the Scaffold where you normally put most widgets. It is not a list to accommodate multiple widgets. Instead, you must put a single widget like Column, which itself then accepts multiple widgets.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"appBar")," is a horizontal bar placed at the top of many apps.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Drawer")," is where you often see the three little lines on the top left corner of an app. When you click it, it then shows a menu that appears over the app. Thus Drawer swipes from left to right.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Some apps have the ",(0,o.kt)("inlineCode",{parentName:"p"},"Floating action button")," e.g. a plus button at the bottom center or bottom right of the screen. It always floats on top of everything.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Bottom Navigation Bar")," is like a menu at the bottom of the screen with destination widgets. We can add Text, and multiple icons in the bar.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Persistent Footer Buttons")," are displayed at the bottom of the scaffold. They are placed just above the Bottom Navigation Bar but below the body."))),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"persistent footer alignment")," property aligns the persistent footer buttons.",(0,o.kt)("inlineCode",{parentName:"li"},"start")," parameter is the distance in the horizontal direction and the ",(0,o.kt)("inlineCode",{parentName:"li"},"y")," parameter is the distance in the vertical direction. The Alignment Position can be ",(0,o.kt)("strong",{parentName:"li"},"Bottom Center, Bottom Start, Bottom End, Center, Center Start, Center End, Top Center, Top Start, Top End"),", etc."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Drawer enable open drag gesture")," determines if the drawer can be opened with a drag gesture on mobile. On desktops, the drawers are not draggable. By default, the value is true."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Drawer Scrim color")," is the color to use for the scrim that obscures primary content while a drawer is open."),(0,o.kt)("li",{parentName:"ul"},"Drag the Widgets from the widgets panel to the ",(0,o.kt)("inlineCode",{parentName:"li"},"End")," section or ",(0,o.kt)("inlineCode",{parentName:"li"},"Drawer")," section to create the Drawer menu."),(0,o.kt)("li",{parentName:"ul"},"Select the ",(0,o.kt)("inlineCode",{parentName:"li"},"Background")," color and ",(0,o.kt)("inlineCode",{parentName:"li"},"Drawer color"),"."),(0,o.kt)("li",{parentName:"ul"},"Drag the App Bar widget to the ",(0,o.kt)("inlineCode",{parentName:"li"},"App")," section to create App Bar."),(0,o.kt)("li",{parentName:"ul"},"Set ",(0,o.kt)("inlineCode",{parentName:"li"},"Restoration ID")," to save and restore the state of the Scaffold."),(0,o.kt)("li",{parentName:"ul"},"Check ",(0,o.kt)("inlineCode",{parentName:"li"},"Drag Start Behaviour")," ",(0,o.kt)("a",{parentName:"li",href:"https://api.flutter.dev/flutter/material/Scaffold/drawerDragStartBehavior.html"},"here"),"."),(0,o.kt)("li",{parentName:"ul"},"Drag the Bottom Navigation Bar widget or any other widget to the ",(0,o.kt)("inlineCode",{parentName:"li"},"Bottom")," section to create Bottom Navigation Bar."),(0,o.kt)("li",{parentName:"ul"},"Drag any Layout widget that accepts multiple widgets to the ",(0,o.kt)("inlineCode",{parentName:"li"},"Body")," section."),(0,o.kt)("li",{parentName:"ul"},"Drag the Action Chip button to the ",(0,o.kt)("inlineCode",{parentName:"li"},"Floating")," section to create a Floating action button."),(0,o.kt)("li",{parentName:"ul"},"Select the ",(0,o.kt)("inlineCode",{parentName:"li"},"Floating Action Button Location")," from the drop-down."),(0,o.kt)("li",{parentName:"ul"},"Drag the Action Chip button to the ",(0,o.kt)("inlineCode",{parentName:"li"},"Persistent")," section to create a Persistent Footer button."),(0,o.kt)("li",{parentName:"ul"},"Set ",(0,o.kt)("inlineCode",{parentName:"li"},"Extend Body")," to true or false. If it is true and the Persistent Footer button or Bottom Navigation Bar is displayed, then the body extends to the bottom of the scaffold. Otherwise, it extends only to the top of the Persistent Footer button or Bottom Navigation Bar."),(0,o.kt)("li",{parentName:"ul"},"Set ",(0,o.kt)("inlineCode",{parentName:"li"},"Primary")," to true if the scaffold is being displayed at the top of the screen.")))}u.isMDXComponent=!0},15592:function(e,t,n){t.Z=n.p+"assets/images/Widget-Scaffold-1-e89f6aca2aaa4e62176f520aa4f6757f.png"}}]);