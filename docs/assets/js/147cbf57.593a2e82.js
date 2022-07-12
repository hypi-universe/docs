"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9098],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),u=o,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},213:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],c={id:"actions-java",title:"Java actions",sidebar_label:"Java actions",slug:"/lowcode/actions-java"},s=void 0,l={unversionedId:"lowcode/actions-java",id:"lowcode/actions-java",title:"Java actions",description:"OpenWhisk requires a JSON object as output. Hence, serverless function cannot return arrays. It must return an object at the top level which can have arrays inside it.",source:"@site/content/lowcode/actions-java.md",sourceDirName:"lowcode",slug:"/lowcode/actions-java",permalink:"/docs/lowcode/actions-java",editUrl:"https://github.com/hypi-universe/docs/edit/master/content/lowcode/actions-java.md",tags:[],version:"current",frontMatter:{id:"actions-java",title:"Java actions",sidebar_label:"Java actions",slug:"/lowcode/actions-java"},sidebar:"docs",previous:{title:"Python actions",permalink:"/docs/lowcode/actions-python"},next:{title:"Swift actions",permalink:"/docs/lowcode/actions-swift"}},p=[],m={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"OpenWhisk requires a JSON object as output. Hence, serverless function cannot return arrays. It must return an object at the top level which can have arrays inside it."))),(0,r.kt)("p",null,"The process of creating Java actions is similar to that of ",(0,r.kt)("a",{parentName:"p",href:"/docs/lowcode/openwhisk-actions#the-basics"},"other actions"),".\nThe following sections guide you through creating and invoking a single Java action, and demonstrate how to bundle multiple files and third party dependencies."),(0,r.kt)("p",null,"In order to compile, test and archive Java files, you must have a ",(0,r.kt)("a",{parentName:"p",href:"http://www.oracle.com/technetwork/java/javase/downloads/index.html"},"JDK 8")," installed locally."),(0,r.kt)("p",null,"A Java action is a Java program with a method called ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," that has the exact signature as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public static com.google.gson.JsonObject main(com.google.gson.JsonObject);\n")),(0,r.kt)("p",null,"For example, create a Java file called ",(0,r.kt)("inlineCode",{parentName:"p"},"Hello.java")," with the following content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import com.google.gson.JsonObject;\n\npublic class Hello {\n    public static JsonObject main(JsonObject args) {\n        String name = "stranger";\n        if (args.has("name"))\n            name = args.getAsJsonPrimitive("name").getAsString();\n        JsonObject response = new JsonObject();\n        response.addProperty("greeting", "Hello " + name + "!");\n        return response;\n    }\n}\n')),(0,r.kt)("p",null,"Then, compile ",(0,r.kt)("inlineCode",{parentName:"p"},"Hello.java")," into a JAR file ",(0,r.kt)("inlineCode",{parentName:"p"},"hello.jar")," as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"javac Hello.java\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"jar cvf hello.jar Hello.class\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/google/gson"},"google-gson")," must exist in your Java CLASSPATH when compiling the Java file."),(0,r.kt)("p",null,"You can create a OpenWhisk action called ",(0,r.kt)("inlineCode",{parentName:"p"},"helloJava")," from this JAR file as\nfollows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"hypi wsk action create helloJava hello.jar --main Hello\n")),(0,r.kt)("p",null,"When you use the command line and a ",(0,r.kt)("inlineCode",{parentName:"p"},".jar")," source file, you do not need tospecify that you are creating a Java action; the tool determines that from the file extension."),(0,r.kt)("p",null,"You need to specify the name of the main class using ",(0,r.kt)("inlineCode",{parentName:"p"},"--main"),". An eligible main class is one that implements a static ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," method as described above. If the class is not in the default package, use the Java fully-qualified class name, e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"--main com.example.MyMain"),"."),(0,r.kt)("p",null,"If needed you can also customize the method name of your Java action. This\ncan be done by specifying the Java fully-qualified method name of your action,\ne.q., ",(0,r.kt)("inlineCode",{parentName:"p"},"--main com.example.MyMain#methodName")),(0,r.kt)("p",null,"Action invocation is the same for Java actions as it is for Swift and JavaScript actions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"hypi wsk action invoke --result helloJava --param name World\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'  {\n      "greeting": "Hello World!"\n  }\n')),(0,r.kt)("p",null,"Find out more about parameters in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/lowcode/openwhisk-parameters"},"Working with parameters")," section."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Large portions of this page is copied from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/openwhisk/tree/master/docs"},"Apache OpenWhisk documentation")," on April 23rd 2021 - where there have been customisations to match Hypi's deployment this has been noted. Apache OpenWhisk and the Apache name are the property of the Apache Foundation and licensed under the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/openwhisk/blob/master/LICENSE.txt"},"Apache V2 license")," ."))))}d.isMDXComponent=!0}}]);