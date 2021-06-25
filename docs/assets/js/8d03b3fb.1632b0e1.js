(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{133:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return u})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(8),i=(t(0),t(190)),o=t(194),c=t(195),l={id:"triggers",title:"Triggers",sidebar_label:"Triggers",slug:"/triggers"},u={unversionedId:"triggers",id:"triggers",isDocsHomePage:!1,title:"Triggers",description:"In many databases and some other systems, it is possible to define a trigger that is executed before or after an event has happened. A trigger is used to maintain the integrity of the data. Or it can be used to automate a response to any event. For example, sending a welcome email when a new customer adds to the database, validating the data before creating an entry, etc.",source:"@site/content/triggers.md",slug:"/triggers",permalink:"/docs/triggers",editUrl:"https://github.com/hypi-universe/docs/edit/master/content/triggers.md",version:"current",sidebar_label:"Triggers",sidebar:"docs",previous:{title:"Workflow",permalink:"/docs/workflow"},next:{title:"Webhooks",permalink:"/docs/webhooks"}},s=[{value:"Example",id:"example",children:[]},{value:"Function overriding",id:"function-overriding",children:[]}],b={toc:s};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In many databases and some other systems, it is possible to define a trigger that is executed before or after an event has happened. A trigger is used to maintain the integrity of the data. Or it can be used to automate a response to any event. For example, sending a welcome email when a new customer adds to the database, validating the data before creating an entry, etc."),Object(i.b)("p",null,"In Hypi, triggers are supported with both a ",Object(i.b)("inlineCode",{parentName:"p"},"before")," and ",Object(i.b)("inlineCode",{parentName:"p"},"after")," semantics by adding the ",Object(i.b)("inlineCode",{parentName:"p"},"@trigger")," directive to a function."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"before")," function gets executed before the function being called. It can be used for validation or calling other services. If it fails, it prevents the execution of the function being called."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"after")," function gets executed after the called function. It cannot affect the results of the function being called. It can be used to notify another service of an operation being compelted."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Important points to remember")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Triggers can break existing functions if you decide to completely replace the output. You may override the existing functions using Trigger.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"A trigger's ",Object(i.b)("inlineCode",{parentName:"p"},"before")," function is executed synchronously. i.e. it will complete before the function it is attached to.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"A trigger's ",Object(i.b)("inlineCode",{parentName:"p"},"after")," function is executed asynchronously. i.e. the function it is attached to will return before the trigger is completed.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"If a trigger's ",Object(i.b)("inlineCode",{parentName:"p"},"before")," function returns false, the function it is attached to will not be executed, nor will the ",Object(i.b)("inlineCode",{parentName:"p"},"after")," function."))),Object(i.b)("p",null,"Let\u2019s go through the below schema to create a trigger and before/after functions:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'type AfterResult {\n    check: String\n}\n\ntype Query {\n  # Before/After function\n  truereturn:Boolean @tan(type:Groovy, inline: "return true")\n  # Trigger Function 1    \n  functiontrigger1:String @tan(type:Groovy, \n    inline: "return \'Trigger Successful!\'") @trigger(config: {\n    before: {type: Query, field: "truereturn"},  \n    after: {type: Query,field: "truereturn"}\n  })\n  # Trigger Function 2    \n  functiontrigger2(trigname:String):String @tan(type:Groovy, \n  inline: "return \'Trigger Successful\'") @trigger(config: {\n    before: {type: Mutation, field: "falsereturn"},\n  })\n  # Trigger Function 3    \n  functiontrigger3(trigname:String):String @tan(type:Groovy, \n  inline: "return \'Trigger Successful\'") @trigger(config: {\n    before: {type: Query, field: "truereturn"},\n    after: {type: Mutation,field: "falsereturn"}\n  })\n}\n\ntype Mutation {\n  #Before/After function  \n  falsereturn(trigname:String):Boolean @tan(type:Groovy, inline:"""\n    gql(\\"""\n    mutation {\n        upsert(values: {\n            AfterResult: {\n                check: "\'$trigname\' Failed"\n            }\n        }\n        ) {\n            id\n        }\n    }\n    \\""")     \n    return false\n    """)  \n}\n')),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("p",null,"In the above schema, three functions are declared to which trigger is attached using the @trigger directive. (functiontrigger1,functiontrigger2,functiontrigger3). ",Object(i.b)("inlineCode",{parentName:"p"},"truereturn")," and ",Object(i.b)("inlineCode",{parentName:"p"},"falsereturn")," functions work as before/after functions. Trigger functions and before/after functions are implemented just like User Defined Functions."),Object(i.b)("p",null,"For functiontrigger1, before and after functions return \u2018true\u2019. For functiontrigger2, before function fails. And for functiontrigger3 before function returns true, but after function fails."),Object(i.b)("p",null,"Let\u2019s execute the functions!"),Object(i.b)(o.a,{defaultValue:"query",values:[{label:"GraphQL Query",value:"query"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"query",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'query {\n  functiontrigger1\n  functiontrigger2(trigname:"Before Function")\n  functiontrigger3(trigname:"After Function")\n}\n'))),Object(i.b)(c.a,{value:"response",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'{\n  "data": {\n    "functiontrigger1": "Trigger Successful!",\n    "functiontrigger2": null,\n    "functiontrigger3": "Trigger Successful"\n  },\n  "errors": [\n    {\n      "message": "Exception while fetching data (/functiontrigger2) : io.hypi.arc.os.gql.HypiGraphQLException: Pre-condition given by Mutation.falsereturn failed",\n      "locations": [\n        {\n          "line": 3,\n          "column": 3\n        }\n      ],\n      "path": [\n        "functiontrigger2"\n      ]\n    }\n  ]\n}\n\n')))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"functiontrigger1")," is successfully executed as ",Object(i.b)("inlineCode",{parentName:"p"},"before")," function ( ",Object(i.b)("inlineCode",{parentName:"p"},"truereturn")," ) returns true. ",Object(i.b)("inlineCode",{parentName:"p"},"After")," function ( ",Object(i.b)("inlineCode",{parentName:"p"},"truereturn")," ) also returns true.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"functiontrigger2")," fails as before functions ( ",Object(i.b)("inlineCode",{parentName:"p"},"falsereturn")," ) fails.  You can see the error message here ",Object(i.b)("inlineCode",{parentName:"p"},"Pre-condition given by Mutation.falsereturn failed"),".  As ",Object(i.b)("inlineCode",{parentName:"p"},"before")," function returns false, the function does not get executed.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"functiontrigger3")," is successfully executed as ",Object(i.b)("inlineCode",{parentName:"p"},"before")," function ( ",Object(i.b)("inlineCode",{parentName:"p"},"truereturn")," ) returns true. However, ",Object(i.b)("inlineCode",{parentName:"p"},"after")," function returns false. But this does not affect the execution of the trigger function ",Object(i.b)("inlineCode",{parentName:"p"},"functiontrigger3"),"."))),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"AfterResult")," object holds the name of the function (before/after) which failed. Let's verify the objects using find function."),Object(i.b)(o.a,{defaultValue:"query",values:[{label:"GraphQL Query",value:"query"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"query",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'{\n  find(type: AfterResult, arcql: "*") {\n    edges {\n      node {\n        ... on AfterResult {\n          check\n        }\n      }\n      cursor\n    }\n  }\n}\n'))),Object(i.b)(c.a,{value:"response",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "find": {\n      "edges": [\n        {\n          "node": {\n            "check": "\'Before Function\' Failed"\n          },\n          "cursor": "01F2RCK09MKCG58W2W54CMCQK2"\n        },\n        {\n          "node": {\n            "check": "\'After Function\' Failed"\n          },\n          "cursor": "01F2RCK0D17HV9JSE79KPG4JXJ"\n        }\n      ]\n    }\n  }\n}\n')))),Object(i.b)("p",null,"You can see that 'Before Function' of ",Object(i.b)("inlineCode",{parentName:"p"},"functiontrigger2")," got executed and it returned false. Hence the Trigger was unsuccessful. "),Object(i.b)("p",null,"'After Function'  of  ",Object(i.b)("inlineCode",{parentName:"p"},"functiontrigger3")," failed. It indicates that After function got executed and failed but still Trigger was successful."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"We have added ",Object(i.b)("inlineCode",{parentName:"p"},"AfterResult")," just for demonstration puropse. It indicates how After/Before function can be implemented."))),Object(i.b)("h2",{id:"function-overriding"},"Function overriding"),Object(i.b)("p",null,"The in-built function of Hypi can be overriden using Trigger. Function overriding is allowed so long as all parameters of the new function exactly match the original parameters. This can be used to arbitrarily allow or deny access to a functionality depending upon the event to be handled by your App."),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Care must be taken when overriding functions. ",Object(i.b)("inlineCode",{parentName:"p"},"upsert")," for example is used everywhere - breaking it will cause many things to fail."))),Object(i.b)("p",null,"Let's override built-in ",Object(i.b)("inlineCode",{parentName:"p"},"upsert")," function using ",Object(i.b)("inlineCode",{parentName:"p"},"@trigger")," .  You may allow or disallow insertion of data by overriding this function. Please check below schema. "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'type Query {\n  allow(values: HypiUpsertInputUnion!)\n      :Boolean @tan(type:Groovy,inline: "return true")\n  disallow(values: HypiUpsertInputUnion!)\n      :Boolean @tan(type:Groovy, inline: "return false")\n}\n\ntype Mutation {\n  after(values: HypiUpsertInputUnion!)\n      : Boolean @tan(type: Groovy, inline: """\n        gql(\'\'\'\n        mutation Create($values: HypiUpsertInputUnion!){\n            upsert(values: $values) {\n                hypi{id}\n            }\n        }\'\'\', new java.util.LinkedHashMap())\n        return true\n      """)\n  upsert(values: HypiUpsertInputUnion!):[Hypi!] @trigger(config: {\n    before:{type: Query, field: "allow"},\n    after:{type: Mutation, field: "after"}\n  })\n}\n')),Object(i.b)("p",null,"If you insert the data, the upsert function works as before. The data gets added into the object successfully. However, if you set ",Object(i.b)("inlineCode",{parentName:"p"},"before")," function to ",Object(i.b)("inlineCode",{parentName:"p"},"disallow"),", the insertion of data fails as the disallow function returns false."),Object(i.b)(o.a,{defaultValue:"query",values:[{label:"GraphQL Query",value:"query"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"query",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'mutation {\n  upsert(values: { \n    Email: { value: "abc@xyz.com" } }\n  ) {\n    id\n  }\n}\n'))),Object(i.b)(c.a,{value:"response",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'{\n  "data": {\n    "upsert": null\n  },\n  "errors": [\n    {\n      "message": "Exception while fetching data (/upsert) : io.hypi.arc.os.gql.HypiGraphQLException: Pre-condition given by Query.disallow failed",\n      "locations": [\n        {\n          "line": 2,\n          "column": 3\n        }\n      ],\n      "path": [\n        "upsert"\n      ]\n    }\n  ]\n}\n')))))}p.isMDXComponent=!0},190:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),s=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=s(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=s(t),f=r,d=b["".concat(o,".").concat(f)]||b[f]||p[f]||i;return t?a.a.createElement(d,c(c({ref:n},u),{},{components:t})):a.a.createElement(d,c({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<i;u++)o[u]=t[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},191:function(e,n,t){"use strict";function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}n.a=function(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}},192:function(e,n,t){"use strict";var r=t(0),a=t(193);n.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},193:function(e,n,t){"use strict";var r=t(0),a=Object(r.createContext)(void 0);n.a=a},194:function(e,n,t){"use strict";var r=t(0),a=t.n(r),i=t(192),o=t(191),c=t(57),l=t.n(c);var u=37,s=39;n.a=function(e){var n=e.lazy,t=e.block,c=e.defaultValue,b=e.values,p=e.groupId,f=e.className,d=Object(i.a)(),g=d.tabGroupChoices,m=d.setTabGroupChoices,h=Object(r.useState)(c),v=h[0],y=h[1],O=r.Children.toArray(e.children),j=[];if(null!=p){var N=g[p];null!=N&&N!==v&&b.some((function(e){return e.value===N}))&&y(N)}var w=function(e){var n=e.target,t=j.indexOf(n),r=O[t].props.value;y(r),null!=p&&(m(p,r),setTimeout((function(){var e,t,r,a,i,o,c,u;(e=n.getBoundingClientRect(),t=e.top,r=e.left,a=e.bottom,i=e.right,o=window,c=o.innerHeight,u=o.innerWidth,t>=0&&i<=u&&a<=c&&r>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(l.a.tabItemActive),setTimeout((function(){return n.classList.remove(l.a.tabItemActive)}),2e3))}),150))},x=function(e){var n,t;switch(e.keyCode){case s:var r=j.indexOf(e.target)+1;t=j[r]||j[0];break;case u:var a=j.indexOf(e.target)-1;t=j[a]||j[j.length-1]}null===(n=t)||void 0===n||n.focus()};return a.a.createElement("div",{className:"tabs-container"},a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t},f)},b.map((function(e){var n=e.value,t=e.label;return a.a.createElement("li",{role:"tab",tabIndex:v===n?0:-1,"aria-selected":v===n,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":v===n}),key:n,ref:function(e){return j.push(e)},onKeyDown:x,onFocus:w,onClick:w},t)}))),n?Object(r.cloneElement)(O.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,n){return Object(r.cloneElement)(e,{key:n,hidden:e.props.value!==v})}))))}},195:function(e,n,t){"use strict";var r=t(0),a=t.n(r);n.a=function(e){var n=e.children,t=e.hidden,r=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}}}]);