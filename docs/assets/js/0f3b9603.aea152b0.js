"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3913],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(h,i(i({ref:t},s),{},{components:r})):n.createElement(h,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8316:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={id:"widget-advance",title:"Advance",sidebar_label:"Advance",slug:"/widget-advance"},c=void 0,p={unversionedId:"widget-advance",id:"widget-advance",title:"Advance",description:"App Bar",source:"@site/content/widget-advance.md",sourceDirName:".",slug:"/widget-advance",permalink:"/docs/widget-advance",editUrl:"https://github.com/hypi-universe/docs/edit/master/content/widget-advance.md",tags:[],version:"current",frontMatter:{id:"widget-advance",title:"Advance",sidebar_label:"Advance",slug:"/widget-advance"},sidebar:"docs",previous:{title:"Forms",permalink:"/docs/widget-forms"},next:{title:"Column",permalink:"/docs/widget-column"}},s=[{value:"App Bar",id:"app-bar",children:[],level:2},{value:"Bottom App Bar",id:"bottom-app-bar",children:[],level:2},{value:"Circular Progress Indicator",id:"circular-progress-indicator",children:[],level:2},{value:"Linear Progress Indicator",id:"linear-progress-indicator",children:[],level:2},{value:"Action Chip",id:"action-chip",children:[],level:2}],d={toc:s};function u(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"app-bar"},"App Bar"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Consists of a toolbar and other widgets like Icon, Title, etc."),(0,o.kt)("li",{parentName:"ul"},"It has a single row with a fixed height."),(0,o.kt)("li",{parentName:"ul"},"Create an App Bar in a Tink Component. App Bar size can be set by changing the size of the component."),(0,o.kt)("li",{parentName:"ul"},"Rename the component as ",(0,o.kt)("inlineCode",{parentName:"li"},"App Bar")," or any other suitable name."),(0,o.kt)("li",{parentName:"ul"},"The App Bar should be the base layout widget of the Component. "),(0,o.kt)("li",{parentName:"ul"},"It is necessary to use App Bar in the form of a component. You cannot drag and drop the App Bar to the Screen."),(0,o.kt)("li",{parentName:"ul"},"You may add a leading icon to the App Bar and choose the icons from Tink's icon collection."),(0,o.kt)("li",{parentName:"ul"},"You may add Centre Title and provide the title by choosing the Text from the Navigator."),(0,o.kt)("li",{parentName:"ul"},"Enable Appbar from the ",(0,o.kt)("a",{parentName:"li",href:"/docs/designer-screens#3-how-to-change-screen-properties"},"Tink Screen Properties"),". Choose created ",(0,o.kt)("inlineCode",{parentName:"li"},"App Bar")," from the drop down menu. App Bar gets automatically added to the topmost part of the screen.")),(0,o.kt)("h2",{id:"bottom-app-bar"},"Bottom App Bar"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add Bottom App Bar at the bottom of the screen. "),(0,o.kt)("li",{parentName:"ul"},"Similar to App Bar, it also consists of a toolbar and other widgets like Icon, Title, etc."),(0,o.kt)("li",{parentName:"ul"},"Drag and drop the Bottom App Bar widget to the screen. Customize the appearance by changing its properties."),(0,o.kt)("li",{parentName:"ul"},"You may also add Bottom App Bar in the form of a component."),(0,o.kt)("li",{parentName:"ul"},"Enable ",(0,o.kt)("inlineCode",{parentName:"li"},"Bottom Navbar")," from the ",(0,o.kt)("a",{parentName:"li",href:"/docs/designer-screens#3-how-to-change-screen-properties"},"Tink Screen Properties"),". Choose a component as a bottom bar from the drop down menu. Bottom App Bar gets automatically added to the bottom of the screen.")),(0,o.kt)("h2",{id:"circular-progress-indicator"},"Circular Progress Indicator"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Spins to indicate that the application is busy."),(0,o.kt)("li",{parentName:"ul"},"Progress is circular and indeterminate. It means the progress is being made without any indicator of how much progress remains.")),(0,o.kt)("h2",{id:"linear-progress-indicator"},"Linear Progress Indicator"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Indicates that the application is busy by showing progress along the line."),(0,o.kt)("li",{parentName:"ul"},"Progess is linear and inderterminate. It means the progress is being made without any indicator of how much progress remains.")),(0,o.kt)("h2",{id:"action-chip"},"Action Chip"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Triggers an action related to primary content or shows progress and confirmation."),(0,o.kt)("li",{parentName:"ul"},"Display after primary content (below a card or at the bottom of the screen)"),(0,o.kt)("li",{parentName:"ul"},"Holds an Avatar and Text. Showing Avatar on the front is optional."),(0,o.kt)("li",{parentName:"ul"},"Change the Text of the child widgets from the Properties panel."),(0,o.kt)("li",{parentName:"ul"},"Handle OnPressed event from the Logic section to implement an action.")))}u.isMDXComponent=!0}}]);