"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7085],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),g=i,f=p["".concat(l,".").concat(g)]||p[g]||u[g]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var d=2;d<o;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9149:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],s={id:"designer-widgets",title:"Widgets",sidebar_label:"Widgets",slug:"/designer-widgets"},l=void 0,d={unversionedId:"designer-widgets",id:"designer-widgets",title:"Widgets",description:"Widget is an important element of interaction on the User Interface. You can use widgets like Buttons, Text, Icons, Lists, Dropdowns to customize the screen.",source:"@site/content/designer-widgets.md",sourceDirName:".",slug:"/designer-widgets",permalink:"/docs/designer-widgets",editUrl:"https://github.com/hypi-universe/docs/edit/master/content/designer-widgets.md",tags:[],version:"current",frontMatter:{id:"designer-widgets",title:"Widgets",sidebar_label:"Widgets",slug:"/designer-widgets"},sidebar:"docs",previous:{title:"Components",permalink:"/docs/designer-components"},next:{title:"Assets",permalink:"/docs/designer-assets"}},c=[{value:"Widgets",id:"widgets",children:[],level:4}],u={toc:c};function p(e){var t=e.components,s=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Widget is an important element of interaction on the User Interface. You can use widgets like Buttons, Text, Icons, Lists, Dropdowns to customize the screen. "),(0,o.kt)("h4",{id:"widgets"},"Widgets"),(0,o.kt)("p",null,"The widget either displays the data or carries out the required functionality. You can place widgets on the screen with drag and drop. Hypi Tink supports different kinds of widgets. You can find the exhaustive list ",(0,o.kt)("a",{parentName:"p",href:"/docs/widget-groups"},"here"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"How to add Widget?"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Go to ",(0,o.kt)("inlineCode",{parentName:"li"},"Widgets")," and select the widget that you want to place on the screen. Drag and drop the widget on the screen."),(0,o.kt)("li",{parentName:"ul"},"You can also search the widgets through the search bar.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Designer-Screen",src:n(1093).Z,width:"442",height:"523"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"How to change Widget Size?"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Widgets are arranged in a hierarchy. So, Screen is a parent of Column, Column is a parent of many other widgets, and so on.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The size of the widget depends on the parent widget or on the widget itself. For example, the Container widget or the SizedBox widget directly takes width/height.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Some widgets will take up only the space they need and some will try to fill out their parent widgets. Check ",(0,o.kt)("a",{parentName:"p",href:"/docs/widget-layout"},"Layout")," widgets for the sizing and positioning of the widgets on the screens."))),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"How to change Widget Properties?"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Select the widget and you can find the Widget Properties on the right-hand side Properties panel. Provide appropriate values. You can select the widget directly or through Navigator.")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"How to place Widgets on the screen as per the user interface design?"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Take a look at different kinds of ",(0,o.kt)("a",{parentName:"li",href:"/docs/widget-layout"},"Layout"),".  Divide screen elements into different Layouts and place the widgets on those Layouts."),(0,o.kt)("li",{parentName:"ul"},"Refer to these ",(0,o.kt)("a",{parentName:"li",href:"#"},"tutorials")," on different types of Screens.")))}p.isMDXComponent=!0},1093:function(e,t,n){t.Z=n.p+"assets/images/Designer-Widgets-1-d22358f306e80366687f08019e585771.PNG"}}]);