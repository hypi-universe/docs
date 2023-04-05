"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5002],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(a),m=r,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||l;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},21332:function(e,t,a){var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},8515:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(87462),r=a(67294),l=a(72389),o=a(35394),i=a(86010),s="tabItem_tAz6";function u(e){var t,a,l,u=e.lazy,d=e.block,p=e.defaultValue,c=e.values,m=e.groupId,h=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=c?c:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,o.lx)(k,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===p?p:null!=(t=null!=p?p:null==(a=f.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(l=f[0])?void 0:l.props.value;if(null!==v&&!k.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,o.UB)(),N=b.tabGroupChoices,g=b.setTabGroupChoices,w=(0,r.useState)(v),T=w[0],j=w[1],q=[],x=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var C=N[m];null!=C&&C!==T&&k.some((function(e){return e.value===C}))&&j(C)}var R=function(e){var t=e.currentTarget,a=q.indexOf(t),n=k[a].value;n!==T&&(x(t),j(n),null!=m&&g(m,n))},I=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=q.indexOf(e.currentTarget)+1;a=q[n]||q[0];break;case"ArrowLeft":var r=q.indexOf(e.currentTarget)-1;a=q[r]||q[q.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},h)},k.map((function(e){var t=e.value,a=e.label,l=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return q.push(e)},onKeyDown:I,onFocus:R,onClick:R},l,{className:(0,i.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=a?a:t)}))),u?(0,r.cloneElement)(f.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function d(e){var t=(0,l.Z)();return r.createElement(u,(0,n.Z)({key:String(t)},e))}},27783:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return u},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return c},default:function(){return h}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),o=a(8515),i=a(21332),s=["components"],u={id:"deletedata",title:"Delete Data",sidebar_label:"Delete Data",slug:"/lowcode/delete-data"},d=void 0,p={unversionedId:"lowcode/deletedata",id:"lowcode/deletedata",title:"Delete Data",description:"The hypi platform supports two types of deletions. The first one is a Soft Delete that does not actually delete data but \u2018marks\u2019 it as deleted. Use the trash function to perform a soft delete. You may reverse the soft delete to restore data.",source:"@site/content/lowcode/deletedata.md",sourceDirName:"lowcode",slug:"/lowcode/delete-data",permalink:"/docs/lowcode/delete-data",editUrl:"https://github.com/hypi-universe/docs/edit/master/content/lowcode/deletedata.md",tags:[],version:"current",frontMatter:{id:"deletedata",title:"Delete Data",sidebar_label:"Delete Data",slug:"/lowcode/delete-data"},sidebar:"docs",previous:{title:"Read Data",permalink:"/docs/lowcode/read-data"},next:{title:"ArcQL filtering",permalink:"/docs/lowcode/arcql"}},c=[{value:"trash",id:"trash",children:[],level:2},{value:"untrash",id:"untrash",children:[],level:2},{value:"delete",id:"delete",children:[],level:2},{value:"deleteScalars",id:"deletescalars",children:[],level:2}],m={toc:c};function h(e){var t=e.components,a=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The hypi platform supports two types of deletions. The first one is a ",(0,l.kt)("strong",{parentName:"p"},"Soft Delete")," that does not actually delete data but \u2018marks\u2019 it as deleted. Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"trash")," function to perform a soft delete. You may reverse the soft delete to restore data."),(0,l.kt)("p",null,"The second type of delete is irreversible. The data is permanently deleted from the system and cannot be undone. Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"delete")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"deleteScalars")," functions to delete data permanently."),(0,l.kt)("p",null,"So, there are four functions related to deletion."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Let's check them out!")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#trash"},"trash")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#untrash"},"untrash")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#delete"},"delete")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#deletescalars"},"deleteScalars"))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"trash"},"trash"),(0,l.kt)("p",null,'In some cases, you want your data to \u2018appear\u2019 deleted. But you may restore it if required. Take an example of an email application. There is often a "recycle" or "trash" folder. By using the\xa0',(0,l.kt)("inlineCode",{parentName:"p"},"trash"),"\xa0function, you can put unwanted data in Trash."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"trash(type: HypiMutationType!, arcql: String!): Int!\n")),(0,l.kt)("p",null,"The function returns the number of records that were marked as trash."),(0,l.kt)(o.Z,{defaultValue:"query",values:[{label:"GraphQL Query",value:"query"},{label:"Response",value:"response"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"query",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mutation {\n  trash(type: Author, \n  arcql: \"hypi.id = '01F0DN278W6NMQFRW4TVRCA52V'\")\n}\n"))),(0,l.kt)(i.Z,{value:"response",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "trash": 1\n  }\n}\n')))),(0,l.kt)("p",null,"If you use the\xa0\u2018get\u2019\xa0or\xa0\u2018find\u2019\xa0queries now, the result will not display the trashed object by default. You must set the\xa0\u2018includeTrashed\u2019\xa0parameter to\xa0\u2018true\u2019\xa0to get the object."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"untrash"},"untrash"),(0,l.kt)("p",null,"The opposite of the\xa0trash\xa0function is\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"untrash"),". Use this function to remove the marker from the data that was previously marked as trash."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"untrash(type: HypiMutationType!, arcql: String!): Int!\n")),(0,l.kt)("p",null,"The function returns the number of records that were marked untrashed."),(0,l.kt)(o.Z,{defaultValue:"query",values:[{label:"GraphQL Query",value:"query"},{label:"Response",value:"response"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"query",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mutation {\n  untrash(\n  type: Author, arcql: \"hypi.id = '01F0DN278W6NMQFRW4TVRCA52V'\")\n}\n"))),(0,l.kt)(i.Z,{value:"response",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "untrash": 1\n  }\n}\n')))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"delete"},"delete"),(0,l.kt)("p",null,"If you want to delete data permanently, use the\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"delete"),"\xa0function."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\ndelete(type: HypiMutationType!, arcql: String!,clearArrayReferences:Boolean=false): Int!\n\n")),(0,l.kt)("p",null,"The function returns the number of records that were marked deleted. You may delete the records using the ArcQL query. The ",(0,l.kt)("inlineCode",{parentName:"p"},"arcql")," parameter takes the query. Maximum 25 records will be deleted in one request."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"clearArrayReferences")," parameter is used to implement deletion of the array fields with one-to-many references. (See ",(0,l.kt)("a",{parentName:"p",href:"/docs/lowcode/references"},"References"),".)"),(0,l.kt)("p",null,"Hypi supports \u201clightweight\u201d ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Referential_integrity"},"Referential\xa0Integrity")," on array fields. The referential integrity check can be forcibly disabled by setting the ",(0,l.kt)("inlineCode",{parentName:"p"},"clearArrayReferences")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," when deleting objects. The default is set to 'false' which means if there are existing references to an object, you cannot delete it. But setting ",(0,l.kt)("inlineCode",{parentName:"p"},"clearArrayReferences")," to true removes the references by unlinking the referenced objects and then deletes the object specified by 'arcql' query."),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Setting ",(0,l.kt)("inlineCode",{parentName:"p"},"clearArrayReferences")," to true only removes references to data in array fields as the name implies and it does not delete the referenced objects in the array. Only the object specified by the 'arcql' field will get deleted."))),(0,l.kt)("p",null,"Let's look at the example from our ",(0,l.kt)("inlineCode",{parentName:"p"},"Author")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Book")," data types now. If you try to delete data from Book table without setting ",(0,l.kt)("inlineCode",{parentName:"p"},"clearArrayReferences")," values, it would result in an error. As the references exist between Author and Book tables through the 'booklist' field, the Book records cannot be deleted without removing the references."),(0,l.kt)(o.Z,{defaultValue:"query",values:[{label:"GraphQL Query",value:"query"},{label:"Response",value:"response"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"query",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mutation {\n  delete(type: Book, arcql: \"hypi.id = '01F2X8203XKRFR7G62T6SP1MW4'\")\n}\n"))),(0,l.kt)(i.Z,{value:"response",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": null,\n  "errors": [\n    {\n      "message": "There are at least 1 references to the data being deleted. A sample of references found is included.",\n      "extensions": {}\n    },\n    {\n      "message": "Author.booklist links to Book. Use unlink to remove the reference before deleting",\n      "extensions": {}\n    },\n    {\n      "message": "Cannot return null for non-nullable type: \'Int\' within parent \'Mutation\' (/delete)",\n      "path": [\n        "delete"\n      ]\n    }\n  ]\n}\n')))),(0,l.kt)("p",null,"Setting parameter ",(0,l.kt)("inlineCode",{parentName:"p"},"clearArrayReferences")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," will remove the object. "),(0,l.kt)(o.Z,{defaultValue:"query",values:[{label:"GraphQL Query",value:"query"},{label:"Response",value:"response"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"query",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mutation {\n  delete(type: Book, arcql: \"hypi.id = '01F2X8203XKRFR7G62T6SP1MW4'\",\n  clearArrayReferences:true)\n}\n"))),(0,l.kt)(i.Z,{value:"response",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "delete": 1\n  }\n}\n')))),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("inlineCode",{parentName:"p"},"clearArrayReferences")," can lead to an inconsistent state if your app re-uses object IDs. Hypi never re-use an object ID but if you specify your IDs manually make sure not to re-use them. Otherwise using ",(0,l.kt)("inlineCode",{parentName:"p"},"clearArrayReferences")," and then using an ID that was deleted will result in the new object reappearing on non-array fields but pointing to the new data. This is because ",(0,l.kt)("inlineCode",{parentName:"p"},"clearArrayReferences")," only removes references to data in array fields as the name implies."))),(0,l.kt)("p",null,"Please note that you may remove the references using the ",(0,l.kt)("a",{parentName:"p",href:"/docs/lowcode/references"},"unlink")," function and then delete the object without setting ",(0,l.kt)("inlineCode",{parentName:"p"},"clearArrayReferences")," field.  You may not set ",(0,l.kt)("inlineCode",{parentName:"p"},"clearArrayReferences")," if you are deleting objects that do not deal with an object- array or have one-to-many references."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"deletescalars"},"deleteScalars"),(0,l.kt)("p",null,"Array fields in Hypi are not stored directly with the other scalar fields in an object. This allows you to add an unlimited number of items to an array field. So, if you want to delete data permanently from a scalar array, use the ",(0,l.kt)("inlineCode",{parentName:"p"},"deleteScalars")," function."),(0,l.kt)("p",null,"If there is an array that references another type, note that deleteScalars will not delete scalar data from that array. \u2018link\u2019 function is used for that purpose."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"deleteScalars(\n    type:\xa0HypiMutationType!\n    field:\xa0String!\n    values:\xa0[String!]!\n    arcql:\xa0String!\n):\xa0Int!\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Parameter")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Description")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Example")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"type")),(0,l.kt)("td",{parentName:"tr",align:null},"The type (table) to delete scalar array values from"),(0,l.kt)("td",{parentName:"tr",align:null},"Message, Author")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"field")),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the array field"),(0,l.kt)("td",{parentName:"tr",align:null},"Number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"values")),(0,l.kt)("td",{parentName:"tr",align:null},"The values to be deleted"),(0,l.kt)("td",{parentName:"tr",align:null},"[","2,5,6","]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"arcql")),(0,l.kt)("td",{parentName:"tr",align:null},"The id of the object to delete values from"),(0,l.kt)("td",{parentName:"tr",align:null},"arcql: \"hypi.id=  '01F0FW9XYQWQNNEDYV3S5P2WGQ'\"")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Consider the data type \u2018Question\u2019 which holds question-answer keys for a test.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"type Question\xa0{\n    hypi:\xa0Hypi\n    question:\xa0[Int!]\n    answer:\xa0[String!]\xa0\xa0\n}\n")),(0,l.kt)("p",null," The below example shows the use of the \u2018deleteScalars\u2019 function to delete data from scalar arrays. In the example, from an \u2018ans\u2019 field from Question, string values (\u201cb\u201d and \u201cc\u201d) are deleted. The function returns the number of records affected by the deletion."),(0,l.kt)("p",null,"Frame arcql query to select the object and get an id. In the example, hypi id has been hardcoded."),(0,l.kt)(o.Z,{defaultValue:"query",values:[{label:"GraphQL Query",value:"query"},{label:"Response",value:"response"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"query",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'mutation{\n  deleteScalars(\n    type:Question,\n    field:"ans",\n    values:["b","c"],\n    arcql:"hypi.id =\'01F0FW9XYQWQNNEDYV3S5P2WGQ\'"\n  )\n}\n'))),(0,l.kt)(i.Z,{value:"response",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "deleteScalars": 2\n  }\n}\n')))),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Read More...")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://hypi.dev/t/how-to-put-unwanted-data-in-the-trash/110"},"How to put unwanted data in the trash")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://hypi.dev/t/how-to-restore-the-data-marked-as-trash/109"},"How to restore the data marked as trash")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://hypi.dev/t/how-to-hide-or-unhide-trashed-object-from-the-find-query-result/108"},"How to hide or unhide trashed object from the find query result")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://hypi.dev/t/how-to-delete-unwanted-data-permanently/107"},"How to delete unwanted data permanently")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://hypi.dev/t/how-to-delete-the-objects-with-references/105"},"How to delete the objects with references")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://hypi.dev/t/how-to-delete-the-data-from-scalar-arrays/104"},"How to delete the data from scalar arrays"))))))}h.isMDXComponent=!0}}]);