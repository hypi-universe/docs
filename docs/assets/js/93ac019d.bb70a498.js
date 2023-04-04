"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2916],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),g=r,m=u["".concat(s,".").concat(g)]||u[g]||d[g]||a;return n?i.createElement(m,o(o({ref:t},p),{},{components:n})):i.createElement(m,o({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8266:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),o=["components"],l={id:"widget-text",title:"Text Widget",sidebar_label:"Text",slug:"/widget-text"},s=void 0,c={unversionedId:"widget-text",id:"widget-text",title:"Text Widget",description:"Text-Widget",source:"@site/content/widget-text.md",sourceDirName:".",slug:"/widget-text",permalink:"/docs/widget-text",editUrl:"https://github.com/hypi-universe/docs/edit/master/content/widget-text.md",tags:[],version:"current",frontMatter:{id:"widget-text",title:"Text Widget",sidebar_label:"Text",slug:"/widget-text"}},p=[{value:"Overview",id:"overview",children:[],level:2},{value:"Use Cases",id:"use-cases",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2}],d={toc:p};function u(e){var t=e.components,l=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Text-Widget",src:n(5894).Z,width:"1914",height:"910"})),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Text is an important basic widget that is visible and common. It can be a child widget of other visible widgets like Button, Circle Avatar, etc. Properties of the Text content can be changed to provide a different visual appearance. Customize Text Properties like Value, Font, Weight, Size, Alignment, Color, etc to design the visual appearance."),(0,a.kt)("h2",{id:"use-cases"},"Use Cases"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Display the text content in your application with this widget."),(0,a.kt)("li",{parentName:"ul"},"Text can be displayed in single line or multiple lines"),(0,a.kt)("li",{parentName:"ul"},"The text content within this widget is a static text that can only be changed at runtime using the Logic bindings. For example, at the click of a Button widget, the Text changes from ",(0,a.kt)("inlineCode",{parentName:"li"},"Yes")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"No"),"."),(0,a.kt)("li",{parentName:"ul"},"The user cannot edit the Text from this widget. To allow users to edit the text, use the ",(0,a.kt)("a",{parentName:"li",href:"#"},"Text Field")," widget.")),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Set the ",(0,a.kt)("strong",{parentName:"li"},"Value")," of the Text content.  The below image displays the Text widget value as ",(0,a.kt)("inlineCode",{parentName:"li"},"Hello Tink"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image not found: /img/Widget-Text-2.png",src:n(1516).Z,title:"Image not found: /img/Widget-Text-2.png",width:"1312",height:"427"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Set the Font of the text by choosing an option from the menu. The menu appears after clicking on ",(0,a.kt)("strong",{parentName:"li"},"Font")," from the Typography section. Fonts available in Google Fonts Library are enlisted in the Font Menu."),(0,a.kt)("li",{parentName:"ul"},"Set the ",(0,a.kt)("strong",{parentName:"li"},"Font size")," by providing values in pixels."),(0,a.kt)("li",{parentName:"ul"},"Change the ",(0,a.kt)("strong",{parentName:"li"},"Thickness")," of the Text using ",(0,a.kt)("strong",{parentName:"li"},"Weight")," option.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Text-Widget",src:n(1917).Z,width:"1282",height:"817"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Change the ",(0,a.kt)("strong",{parentName:"li"},"Letter spacing")," to create space between two letters. Change the ",(0,a.kt)("strong",{parentName:"li"},"Word Spacing")," to create space between two words. Green space indicates Letter Spacing and Blue Space indicates word spacing in the below image.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Text-Widget",src:n(366).Z,width:"1131",height:"553"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Set the ",(0,a.kt)("strong",{parentName:"li"},"Height of the Text Widget")," by providing values in pixels."),(0,a.kt)("li",{parentName:"ul"},"Set the ",(0,a.kt)("strong",{parentName:"li"},"Text Alignment")," - ",(0,a.kt)("inlineCode",{parentName:"li"},"Left"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Right"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Center"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Justify"),"."),(0,a.kt)("li",{parentName:"ul"},"Set the ",(0,a.kt)("strong",{parentName:"li"},"Text Color")," and ",(0,a.kt)("strong",{parentName:"li"},"Background color")," of the Text."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Decorate")," the text with the ",(0,a.kt)("inlineCode",{parentName:"li"},"Underline"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Overline"),", or ",(0,a.kt)("inlineCode",{parentName:"li"},"Strikethrough")," line. The line's ",(0,a.kt)("inlineCode",{parentName:"li"},"color")," can be changed. The ",(0,a.kt)("inlineCode",{parentName:"li"},"Thickness")," of the line can be changed by providing values in the edit box. Setting the style to ",(0,a.kt)("inlineCode",{parentName:"li"},"None")," reverts the changes.")))}u.isMDXComponent=!0},5894:function(e,t,n){t.Z=n.p+"assets/images/Widget-Text-1-2494129df0475aad819705ef1f037563.png"},1516:function(e,t,n){t.Z=n.p+"assets/images/Widget-Text-2-edaa48dd48a0cc0cfc8b6e22000f51fa.png"},1917:function(e,t,n){t.Z=n.p+"assets/images/Widget-Text-3-c049967b035bc63180c3d5aa5d50ebf7.png"},366:function(e,t,n){t.Z=n.p+"assets/images/Widget-Text-4-ac5edca25888d4d085443160037fc194.png"}}]);