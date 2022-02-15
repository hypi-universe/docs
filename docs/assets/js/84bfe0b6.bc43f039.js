"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4822],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return g}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),g=i,h=u["".concat(c,".").concat(g)]||u[g]||p[g]||r;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4757:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],l={id:"designer-logic",title:"Logic",sidebar_label:"Logic",slug:"/designer-logic"},c=void 0,s={unversionedId:"designer-logic",id:"designer-logic",title:"Logic",description:"Logic facilitates the transfer of data from one widget to another.",source:"@site/content/designer-logic.md",sourceDirName:".",slug:"/designer-logic",permalink:"/docs/designer-logic",editUrl:"https://github.com/hypi-universe/docs/edit/master/content/designer-logic.md",tags:[],version:"current",frontMatter:{id:"designer-logic",title:"Logic",sidebar_label:"Logic",slug:"/designer-logic"},sidebar:"docs",previous:{title:"List",permalink:"/docs/widget-list-view"},next:{title:"Output and Attribute Binding",permalink:"/docs/logic-output-binding"}},d=[{value:"Screen Variable",id:"screen-variable",children:[],level:4},{value:"App Variable",id:"app-variable",children:[],level:4},{value:"Device Variable",id:"device-variable",children:[],level:4},{value:"Static Variable",id:"static-variable",children:[],level:4}],p={toc:d};function u(e){var t=e.components,l=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Logic facilitates the transfer of data from one widget to another. ")),(0,r.kt)("p",null,"Suppose you have a dropdown with a list of items. With the help of Logic, a text on another widget can be changed with the selection of a list item from the dropdown."),(0,r.kt)("p",null,"There are two steps to bind the two widgets together.\n.\n",(0,r.kt)("a",{parentName:"p",href:"/docs/logic-output-binding"},(0,r.kt)("strong",{parentName:"a"},"Output and Attribute Binding")),"\nOutput and Attribute Binding stores the attribute value from a widget in a variable on the occurrence of an event on the same or another widget. "),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/logic-input-binding"},(0,r.kt)("strong",{parentName:"a"},"InputBinding")," "),"\nInput Binding uses the variable to set the property of a widget."),(0,r.kt)("p",null,"You can store the data in four types of ",(0,r.kt)("strong",{parentName:"p"},"variables"),"."),(0,r.kt)("h4",{id:"screen-variable"},"Screen Variable"),(0,r.kt)("p",null,"The scope of this variable is limited to the selected screen only. So, data can be transferred from one widget to another on the same screen. Interchange of data on different screens is not allowed."),(0,r.kt)("h4",{id:"app-variable"},"App Variable"),(0,r.kt)("p",null,"Data can be stored on the application level using the App variable. Hence, data can be transferred from one screen to another. However, when the application gets closed, the value stored in this variable gets deleted as well."),(0,r.kt)("h4",{id:"device-variable"},"Device Variable"),(0,r.kt)("p",null,"The scope of this variable is on the device level. Even if the application gets closed, the value of this variable remains unchanged as the variable data gets saved on the device."),(0,r.kt)("h4",{id:"static-variable"},"Static Variable"),(0,r.kt)("p",null,"Static variables store hardcoded values like API URLs, static text, etc. Most of the time, you know these values at the time of development. They remain immutable and don't change with user interactions."),(0,r.kt)("p",null,"Static variables store the resource data uploaded through Assets. The system automatically assigns a static variable for each asset.  Assets can be referenced through the static variables."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"How to add Logic?"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Select ",(0,r.kt)("inlineCode",{parentName:"li"},"Logic")," on the top right corner and the Logic screen appears. You can see the list of variables on the left side.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Logic",src:n(144).Z,width:"1918",height:"670"})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"How to change Logic Screen size?"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can minimize or maximize the Logic screen.")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"How to add Static Variables?"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("inlineCode",{parentName:"li"},"%")," to add static variables. Provide Name, Type, and Default value. Static variables can be of type ",(0,r.kt)("inlineCode",{parentName:"li"},"text"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"bool"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"int"),", and ",(0,r.kt)("inlineCode",{parentName:"li"}," double"),". ")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Logic",src:n(8982).Z,width:"1402",height:"714"})),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"How to add Output and Input Bindings?"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("inlineCode",{parentName:"li"},"+")," to add variable. Again click ",(0,r.kt)("inlineCode",{parentName:"li"},"+")," to add bindings. Add ",(0,r.kt)("a",{parentName:"li",href:"/docs/logic-output-binding"},"Output Binding")," through ",(0,r.kt)("inlineCode",{parentName:"li"},"Outputs")," and ",(0,r.kt)("a",{parentName:"li",href:"/docs/logic-input-binding"},"Input Bindings")," through ",(0,r.kt)("inlineCode",{parentName:"li"},"Listener"),". ")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Logic",src:n(6059).Z,width:"1591",height:"640"})),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"How to change Variable type?"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click Screen State, App State, and Device State icons to change the variable type.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Logic",src:n(516).Z,width:"1458",height:"523"})))}u.isMDXComponent=!0},144:function(e,t,n){t.Z=n.p+"assets/images/Logic-Overview-1-a9a7f137d7904c8015d20dab62067d58.PNG"},8982:function(e,t,n){t.Z=n.p+"assets/images/Logic-Overview-2-9897cb8952f70f9e226abf404dba8f25.PNG"},6059:function(e,t,n){t.Z=n.p+"assets/images/Logic-Overview-3-12f1f971881b5a0a92515946bd0bf23d.PNG"},516:function(e,t,n){t.Z=n.p+"assets/images/Logic-Overview-4-77e025981a5d09c7c15a5b813638827f.PNG"}}]);