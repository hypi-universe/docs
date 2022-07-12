"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4283],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var i=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=u(n),p=l,m=h["".concat(s,".").concat(p)]||h[p]||d[p]||a;return n?i.createElement(m,r(r({ref:t},c),{},{components:n})):i.createElement(m,r({ref:t},c))}));function p(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,r=new Array(a);r[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var u=2;u<a;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1094:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return h}});var i=n(7462),l=n(3366),a=(n(7294),n(3905)),r=["components"],o={id:"widget-forms",title:"Forms",sidebar_label:"Forms",slug:"/widget-forms"},s=void 0,u={unversionedId:"widget-forms",id:"widget-forms",title:"Forms",description:"Form widgets are interactive widgets that process user inputs.",source:"@site/content/widget-forms.md",sourceDirName:".",slug:"/widget-forms",permalink:"/docs/widget-forms",editUrl:"https://github.com/hypi-universe/docs/edit/master/content/widget-forms.md",tags:[],version:"current",frontMatter:{id:"widget-forms",title:"Forms",sidebar_label:"Forms",slug:"/widget-forms"},sidebar:"docs",previous:{title:"Layout Widgets",permalink:"/docs/widget-layout"},next:{title:"Advance",permalink:"/docs/widget-advance"}},c=[{value:"Checkbox",id:"checkbox",children:[],level:2},{value:"Checkbox List Tile",id:"checkbox-list-tile",children:[],level:2},{value:"Elevated Button",id:"elevated-button",children:[],level:2},{value:"Icon Button",id:"icon-button",children:[],level:2},{value:"Popup Menu Button",id:"popup-menu-button",children:[],level:2},{value:"Radio",id:"radio",children:[],level:2},{value:"Radio List Tile",id:"radio-list-tile",children:[],level:2},{value:"Slider",id:"slider",children:[],level:2},{value:"Range Slider",id:"range-slider",children:[],level:2},{value:"Switch",id:"switch",children:[],level:2},{value:"Text Field",id:"text-field",children:[],level:2}],d={toc:c};function h(e){var t=e.components,n=(0,l.Z)(e,r);return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Form widgets are interactive widgets that process user inputs. "),(0,a.kt)("p",null,"Various events get triggered when the states of the form widgets change. For example, when Switch gets toggled, the OnChanged event gets triggered. And the state of the Switch changes from ON to OFF or vice versa. In the ",(0,a.kt)("a",{parentName:"p",href:"/docs/designer-logic"},"Logic")," section, you can select a widget and store the state value in a Variable."),(0,a.kt)("h2",{id:"checkbox"},"Checkbox"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Allows selection from the multiple options"),(0,a.kt)("li",{parentName:"ul"},"When a user clicks on the checkbox, the state or value of the checkbox changes. The widget calls the OnChanged event and the checkbox gets rebuilt with the new value."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"value")," of the checkbox can be true or false. true represents selection and false represents unselection.")),(0,a.kt)("h2",{id:"checkbox-list-tile"},"Checkbox List Tile"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This widget has a list with a single row and fixed height."),(0,a.kt)("li",{parentName:"ul"},"It usually holds text, leading icon, and trailing checkbox. "),(0,a.kt)("li",{parentName:"ul"},"Text includes title and subtitle. The leading icon has Circle Avatar and the trailing has a checkbox. You can choose the widgets on the Checkbox List Tile from these. However, the checkbox is not optional."),(0,a.kt)("li",{parentName:"ul"},"Checkbox List Tile can be used within a Card. It helps to change the color of the tile. "),(0,a.kt)("li",{parentName:"ul"},"Multiple Checkbox List tiles can be placed in a List View.")),(0,a.kt)("h2",{id:"elevated-button"},"Elevated Button"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Elevated button is also the ",(0,a.kt)("a",{parentName:"li",href:"/docs/widget-basic"},"Basic")," widget. But most forms have this button to submit user responses."),(0,a.kt)("li",{parentName:"ul"},"Use when other elements on the screen are generally flat. "),(0,a.kt)("li",{parentName:"ul"},"The elevated style of the button captures the user's attention.")),(0,a.kt)("h2",{id:"icon-button"},"Icon Button"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This is a button with an icon placed on its front."),(0,a.kt)("li",{parentName:"ul"},"Choose from hundreds of images from Hypi's Tink's icon collection to place on the icon button widget. "),(0,a.kt)("li",{parentName:"ul"},"It is an interactive button and triggers the OnPressed event when the button is clicked.")),(0,a.kt)("h2",{id:"popup-menu-button"},"Popup Menu Button"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Displays a menu when pressed."),(0,a.kt)("li",{parentName:"ul"},"After selection of an item from the menu list, the menu disappears."),(0,a.kt)("li",{parentName:"ul"},"OnSelected event gets triggered when a menu item is selected."),(0,a.kt)("li",{parentName:"ul"},"The selected menu item value is the value passed to OnSelected.")),(0,a.kt)("h2",{id:"radio"},"Radio"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Allows selection from the multiple options. "),(0,a.kt)("li",{parentName:"ul"},"Radio buttons are grouped together."),(0,a.kt)("li",{parentName:"ul"},"When a user clicks on the radio button, the state or value of the radio button changes. The widget calls the OnChanged event and the radio button gets rebuilt with the new value."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"value")," of the radio button can be true or false. ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," represents selection and ",(0,a.kt)("inlineCode",{parentName:"li"},"false")," represents unselection.")),(0,a.kt)("h2",{id:"radio-list-tile"},"Radio List Tile"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This widget has a list with a single row and fixed height."),(0,a.kt)("li",{parentName:"ul"},"It usually holds text, leading radio, and trailing icon. "),(0,a.kt)("li",{parentName:"ul"},"Text includes title and subtitle. The trailing icon has Circle Avatar and the leading has a radio. You can choose the widgets on the Radio List Tile from these. However, Radio is not optional."),(0,a.kt)("li",{parentName:"ul"},"Radio List Tile can be used within a Card. It helps to change the color of the tile. "),(0,a.kt)("li",{parentName:"ul"},"Multiple Radio List tiles can be placed in a List View.")),(0,a.kt)("h2",{id:"slider"},"Slider"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Select from a range of values by moving the slider thumb."),(0,a.kt)("li",{parentName:"ul"},"Set minimum and maximum values in the properties panel."),(0,a.kt)("li",{parentName:"ul"},"When the slider moves, the slider value gets updated continuously."),(0,a.kt)("li",{parentName:"ul"},"When a user clicks on the slider, the state or value of the slider changes. The widget calls the OnChanged event and the slider gets rebuilt with the new value.")),(0,a.kt)("h2",{id:"range-slider"},"Range Slider"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Select a range from a range of values by moving the slider thumbs."),(0,a.kt)("li",{parentName:"ul"},"Set minimum and maximum values in the properties panel."),(0,a.kt)("li",{parentName:"ul"},"When the first slider thumb moves, the start value of the range gets updated."),(0,a.kt)("li",{parentName:"ul"},"When the second slider thumb moves, the end value of the range gets updated."),(0,a.kt)("li",{parentName:"ul"},"When a user clicks on the range slider, the state or value of the slider changes. The widget calls the OnChanged event and the range slider gets rebuilt with the new value.")),(0,a.kt)("h2",{id:"switch"},"Switch"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Toggles the ON/OFF state of a single setting."),(0,a.kt)("li",{parentName:"ul"},"When a user clicks on the toggle, the state or value of the switch changes. The widget calls the OnChanged event and the Switch gets rebuilt with the new value."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"value")," of the switch can be true or false. true represents ON state and false represents OFF state."),(0,a.kt)("li",{parentName:"ul"},"Change the appearance of the Switch by choosing colors for its elements from the properties panel.")),(0,a.kt)("h2",{id:"text-field"},"Text Field"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Enter the text in this widget using hardware or an onscreen keyboard."),(0,a.kt)("li",{parentName:"ul"},"Use to accept and process user inputs.")))}h.isMDXComponent=!0}}]);