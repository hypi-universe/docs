"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5185],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),u=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(d.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=u(n),g=i,f=p["".concat(d,".").concat(g)]||p[g]||l[g]||o;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=p;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4483:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),s=["components"],a={id:"widget-groups",title:"Widget Groups",sidebar_label:"Widget Groups",slug:"/widget-groups"},d=void 0,u={unversionedId:"widget-groups",id:"widget-groups",title:"Widget Groups",description:"Hypi Tink divides Widgets into different groups. Let's check these groups.",source:"@site/content/widget-groups.md",sourceDirName:".",slug:"/widget-groups",permalink:"/docs/widget-groups",editUrl:"https://github.com/hypi-universe/docs/edit/master/content/widget-groups.md",tags:[],version:"current",frontMatter:{id:"widget-groups",title:"Widget Groups",sidebar_label:"Widget Groups",slug:"/widget-groups"},sidebar:"docs",previous:{title:"Assets",permalink:"/docs/designer-assets"},next:{title:"Basic Widgets",permalink:"/docs/widget-basic"}},c=[{value:"Basic",id:"basic",children:[],level:4},{value:"Layout",id:"layout",children:[],level:4},{value:"Buttons",id:"buttons",children:[],level:4},{value:"List",id:"list",children:[],level:4},{value:"Forms",id:"forms",children:[],level:4},{value:"Advance",id:"advance",children:[],level:4},{value:"Other",id:"other",children:[],level:4}],l={toc:c};function p(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Hypi Tink divides Widgets into different groups. Let's check these groups."),(0,o.kt)("h4",{id:"basic"},"Basic"),(0,o.kt)("p",null,"With ",(0,o.kt)("a",{parentName:"p",href:"/docs/widget-basic"},"Basic widgets"),", you can build simple as well as complex user interfaces. You need to know these widgets to build any application. It includes common widgets like Text, Icon, Button, etc."),(0,o.kt)("h4",{id:"layout"},"Layout"),(0,o.kt)("p",null," A widget can be created using one or more ",(0,o.kt)("em",{parentName:"p"},"other")," widgets. To compose multiple widgets into a single widget, Hypi Tink provides ",(0,o.kt)("a",{parentName:"p",href:"/docs/widget-layout"},"Layout")," widgets."),(0,o.kt)("p",null," Widgets can be visible or invisible.  Visible widgets like Text, Icon, Button can be aligned, constrained, arranged using invisible widgets with Layout features like rows, columns, and grids. Layout widgets provide shape and size to the basic widgets. "),(0,o.kt)("h4",{id:"buttons"},"Buttons"),(0,o.kt)("p",null,"Buttons are important widgets. They provide the user an opportunity to interact with the App and carry out certain functions. Most Apps display different kinds of buttons varying in styles and actions."),(0,o.kt)("h4",{id:"list"},"List"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/widget-list-view"},"List")," widgets show different items from a list in various formats. You may have a List View showing different items one after another in a row or column. Or you can have a grid view showing list items in a grid format."),(0,o.kt)("h4",{id:"forms"},"Forms"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/widget-forms"},"Form")," widgets are interactive widgets that process user inputs. To build behaviours like Google Forms, you can use form widgets."),(0,o.kt)("h4",{id:"advance"},"Advance"),(0,o.kt)("p",null,"These are ",(0,o.kt)("a",{parentName:"p",href:"/docs/widget-advance"},"advanced widgets")," with unique and advanced functions."),(0,o.kt)("h4",{id:"other"},"Other"),(0,o.kt)("p",null,"Widgets that do not fit into the above categories are included as ",(0,o.kt)("inlineCode",{parentName:"p"},"Other")," widgets."))}p.isMDXComponent=!0}}]);