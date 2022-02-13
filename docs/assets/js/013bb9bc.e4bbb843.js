(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1772],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return m}});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=o.createContext({}),s=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=s(e.components);return o.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return t?o.createElement(h,r(r({ref:n},c),{},{components:t})):o.createElement(h,r({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<i;s++)r[s]=t[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9382:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var o=t(2122),a=t(9756),i=(t(7294),t(3905)),r=["components"],l={id:"actions-go",title:"Go actions",sidebar_label:"Go actions",slug:"/actions-go"},p=void 0,s={unversionedId:"actions-go",id:"actions-go",isDocsHomePage:!1,title:"Go actions",description:"OpenWhisk requires a JSON object as output. Hence, serverless function cannot return arrays. It must return an object at the top level which can have arrays inside it.",source:"@site/content/actions-go.md",sourceDirName:".",slug:"/actions-go",permalink:"/docs/actions-go",editUrl:"https://github.com/hypi-universe/docs/edit/master/content/actions-go.md",version:"current",frontMatter:{id:"actions-go",title:"Go actions",sidebar_label:"Go actions",slug:"/actions-go"},sidebar:"docs",previous:{title:"Swift actions",permalink:"/docs/actions-swift"},next:{title:"PHP actions",permalink:"/docs/actions-php"}},c=[{value:"Entry Point",id:"entry-point",children:[]},{value:"Signature",id:"signature",children:[]},{value:"Deployment",id:"deployment",children:[]},{value:"Using packages and vendor folder",id:"using-packages-and-vendor-folder",children:[]},{value:"Precompiling Go Sources Offline",id:"precompiling-go-sources-offline",children:[]}],u={toc:c};function d(e){var n=e.components,t=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"OpenWhisk requires a JSON object as output. Hence, serverless function cannot return arrays. It must return an object at the top level which can have arrays inside it."))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"action-golang-v1.11")," runtime can execute actions written in the Go programming language in OpenWhisk, either as precompiled binary or compiling sources on the fly."),(0,i.kt)("h3",{id:"entry-point"},"Entry Point"),(0,i.kt)("p",null,"The source code of an action is one or more Go source files. The entry point of the action is a function, placed in the ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," package. The default name for the main function is ",(0,i.kt)("inlineCode",{parentName:"p"},"Main"),", but you can change it to any name you want using the ",(0,i.kt)("inlineCode",{parentName:"p"},"--main")," switch in ",(0,i.kt)("inlineCode",{parentName:"p"},"wsk"),". The name is however always capitalized. The function must have a specific signature, as described next."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"NOTE")," The runtime does ",(0,i.kt)("em",{parentName:"p"},"not")," support different packages from ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," for the entry point. If you specify ",(0,i.kt)("inlineCode",{parentName:"p"},"hello.main")," the runtime will try to use ",(0,i.kt)("inlineCode",{parentName:"p"},"Hello.main"),", that will be almost certainly incorrect. You can however have other packages in your sources, as described below."),(0,i.kt)("h3",{id:"signature"},"Signature"),(0,i.kt)("p",null,"The expected signature for a ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," function is:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"func Main(event map[string]interface{}) map[string]interface{}")),(0,i.kt)("p",null,"So a very simple single file ",(0,i.kt)("inlineCode",{parentName:"p"},"hello.go")," action would be:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "log"\n\n// Main is the function implementing the action\nfunc Main(obj map[string]interface{}) map[string]interface{} {\n  // do your work\n  name, ok := obj["name"].(string)\n  if !ok {\n    name = "world"\n  }\n  msg := make(map[string]interface{})\n  msg["message"] = "Hello, " + name + "!"\n  // log in stdout or in stderr\n  log.Printf("name=%s\\n", name)\n  // encode the result back in json\n  return msg\n}\n')),(0,i.kt)("p",null,"You can deploy it with just:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"wsk action create hello-go hello.go\n")),(0,i.kt)("p",null,"You can also have multiple source files in an action, packages and vendor folders."),(0,i.kt)("h3",{id:"deployment"},"Deployment"),(0,i.kt)("p",null,"The runtime ",(0,i.kt)("inlineCode",{parentName:"p"},"action-golang-v1.11")," accepts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"executable binaries in Linux ELF executable compiled for the AMD64 architecture"),(0,i.kt)("li",{parentName:"ul"},"zip files containing a binary executable named ",(0,i.kt)("inlineCode",{parentName:"li"},"exec")," at the top level, again a Linux ELF executable compiled for the AMD64 architecture"),(0,i.kt)("li",{parentName:"ul"},"a single source file in Go, that will be compiled"),(0,i.kt)("li",{parentName:"ul"},"a zip file not containing in the top level a binary file ",(0,i.kt)("inlineCode",{parentName:"li"},"exec"),", it will be interpreted as a collection of source files in Go, and compiled")),(0,i.kt)("p",null,"You can create a binary in the correct format on any Go platform cross-compiling with ",(0,i.kt)("inlineCode",{parentName:"p"},"GOOS=Linux")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"GOARCH=amd64"),". However it is recommended you use the compiler embedded in the Docker image for this purpose using the precompilation feature, as described below."),(0,i.kt)("h3",{id:"using-packages-and-vendor-folder"},"Using packages and vendor folder"),(0,i.kt)("p",null,"When you deploy a zip file, you can:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"have all your functions in the ",(0,i.kt)("inlineCode",{parentName:"li"},"main")," package"),(0,i.kt)("li",{parentName:"ul"},"have some functions placed in some packages, like ",(0,i.kt)("inlineCode",{parentName:"li"},"hello")),(0,i.kt)("li",{parentName:"ul"},"have some third party dependencies you want to include in your sources")),(0,i.kt)("p",null,"If all your functions are in the main package, just place all your sources in the top level of your zip file."),(0,i.kt)("h4",{id:"use-a-package-folder"},"Use a package folder"),(0,i.kt)("p",null,"If some functions belongs to a package, like ",(0,i.kt)("inlineCode",{parentName:"p"},"hello/"),", you need to be careful with the layout of your sources, especially if you use editors like ",(0,i.kt)("a",{parentName:"p",href:"#vscode"},"VcCode"),", and make. The layout recommended is the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"golang-main-package/\n- Makefile\n- src/\n   - main.go\n   - main_test.go\n   - hello/\n       - hello.go\n       - hello_test.go\n")),(0,i.kt)("p",null,"For running tests, editing without errors with package resolution, you need to use a ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," folder, place the sources that belongs to the main package in the ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," and place sources of your package in the ",(0,i.kt)("inlineCode",{parentName:"p"},"src/hello")," folder."),(0,i.kt)("p",null,"You should import it your subpackage with ",(0,i.kt)("inlineCode",{parentName:"p"},'import "hello"'),".\nNote this means if you want to compile locally you have to set your ",(0,i.kt)("inlineCode",{parentName:"p"},"GOPATH")," to parent of your ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," directory. If you use VSCode, you need to enable the ",(0,i.kt)("inlineCode",{parentName:"p"},"go.inferGopath")," option."),(0,i.kt)("p",null,"When you send the sources, you will have to zip the content of the ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," folder, ",(0,i.kt)("em",{parentName:"p"},"not")," the main directory. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd src\nzip -r ../hello.zip *\ncd ..\nwsk action create hellozip hello.zip --kind go:1.11\n")),(0,i.kt)("h4",{id:"using-vendor-folders"},"Using vendor folders"),(0,i.kt)("p",null,"When you need to use third party libraries, the runtime does not download them from Internet when compiling. You have to provide them,  downloading and placing them using the ",(0,i.kt)("inlineCode",{parentName:"p"},"vendor")," folder mechanism. We are going to show here how to use the vendor folder with the ",(0,i.kt)("inlineCode",{parentName:"p"},"dep")," tool."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"NOTE")," the ",(0,i.kt)("inlineCode",{parentName:"p"},"vendor")," folder does not work at the top level, you have to use a ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," folder and a package folder to have also the ",(0,i.kt)("inlineCode",{parentName:"p"},"vendor")," folder. If you want use the vendor folder for the ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," package, you can do it but instead of placing files that belongs to the ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," package in the top-level, you have to place in a subfolder named ",(0,i.kt)("inlineCode",{parentName:"p"},"main"),"."),(0,i.kt)("p",null,"For example consider you have in the file ",(0,i.kt)("inlineCode",{parentName:"p"},"src/hello/hello.go")," the import:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'import "github.com/sirupsen/logrus"\n')),(0,i.kt)("p",null,"To create a vendor folder, you need to"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"install the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/golang/dep"},"dep")," tool"),(0,i.kt)("li",{parentName:"ul"},"cd to the ",(0,i.kt)("inlineCode",{parentName:"li"},"src/hello")," folder (",(0,i.kt)("em",{parentName:"li"},"not")," the ",(0,i.kt)("inlineCode",{parentName:"li"},"src")," folder)"),(0,i.kt)("li",{parentName:"ul"},"run ",(0,i.kt)("inlineCode",{parentName:"li"},"DEPPROJECTROOT=$(realpath $PWD/../..) dep init")," the first time")),(0,i.kt)("p",null,"The tool will detect the used libraries and create 2 manifest files ",(0,i.kt)("inlineCode",{parentName:"p"},"Gopkg.lock")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Gopkg.toml"),". If already have the manifest files, you just need ",(0,i.kt)("inlineCode",{parentName:"p"},"dep ensure")," to create and populate the ",(0,i.kt)("inlineCode",{parentName:"p"},"vendor")," folder."),(0,i.kt)("p",null,"The layout will be something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"golang-hello-vendor\n- Makefile\n- src/\n    - hello.go\n    - hello/\n      - Gopkg.lock\n      - Gopkg.toml\n         - hello.go\n         - hello_test.go\n         - vendor/\n            - github.com/...\n            - golang.org/...\n")),(0,i.kt)("p",null,"Note you do not need to store the ",(0,i.kt)("inlineCode",{parentName:"p"},"vendor")," folder in the version control system as it can be regenerated, you only the manifest files. However, you need to include the entire vendor folder when you deploy the action in source format for compilation by the runtime."),(0,i.kt)("p",null,"If you need to use vendor folder in the main package, you need to create a directory ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," and place all the source code that would normally go in the top level, in the ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," folder instead.  A vendor folder in the top level ",(0,i.kt)("em",{parentName:"p"},"does not work"),"."),(0,i.kt)("a",{name:"precompile"}),(0,i.kt)("h3",{id:"precompiling-go-sources-offline"},"Precompiling Go Sources Offline"),(0,i.kt)("p",null,"Compiling sources on the image can take some time when the images is initialized. You can speed up precompiling the sources using the image ",(0,i.kt)("inlineCode",{parentName:"p"},"action-golang-v1.11")," as an offline compiler. You need ",(0,i.kt)("inlineCode",{parentName:"p"},"docker")," for doing that."),(0,i.kt)("p",null,"The images accepts a ",(0,i.kt)("inlineCode",{parentName:"p"},"-compile <main>")," flag, and expects you provide sources in standard input. It will then compile them, emit the binary in standard output and errors in stderr. The output is always a zip file containing an executable."),(0,i.kt)("p",null,"If you have a single source maybe in file ",(0,i.kt)("inlineCode",{parentName:"p"},"main.go"),", with a function named ",(0,i.kt)("inlineCode",{parentName:"p"},"Main")," just do this:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"docker run openwhisk/action-golang-v1.11 -compile main <main.go >main.zip")),(0,i.kt)("p",null,"If you have multiple sources in current directory, even with a subfolder with sources, you can compile it all with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd src\nzip -r ../src.zip *\ncd ..\ndocker -i run openwhisk/action-golang-v1.11 -compile main <src.zip >exec.zip\n")),(0,i.kt)("p",null,"Note that the output is always a zip file in  Linux AMD64 format so the executable can be run only inside a Docker Linux container."),(0,i.kt)("p",null,"Here a ",(0,i.kt)("inlineCode",{parentName:"p"},"Makefile")," is helpful. Check the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/openwhisk-runtime-go/tree/master/examples"},"examples")," for a collection of tested Makefiles. The  generated executable is suitable to be deployed in OpenWhisk, so you can do:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"wsk action create my-action exec.zip --kind go:1.11")),(0,i.kt)("p",null,"You can also use just the ",(0,i.kt)("inlineCode",{parentName:"p"},"openwhisk/actionloop")," as runtime, it is smaller."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'<a name="vscode">\n')),(0,i.kt)("h4",{id:"using-vscode"},"Using VsCode"),(0,i.kt)("p",null,"If you are using ",(0,i.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"VsCode")," as your Go development environment with the ",(0,i.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode.Go"},"VsCode Go")," support, without errors and with completion working you need to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"enable the option ",(0,i.kt)("inlineCode",{parentName:"li"},"go.inferGopath")),(0,i.kt)("li",{parentName:"ul"},"place all your sources in a ",(0,i.kt)("inlineCode",{parentName:"li"},"src")," folder"),(0,i.kt)("li",{parentName:"ul"},"either to open the ",(0,i.kt)("inlineCode",{parentName:"li"},"src")," folder as the top level source or add it as a folder in the workspace (it is not enough just have it as a subfolder)"),(0,i.kt)("li",{parentName:"ul"},"create a ",(0,i.kt)("inlineCode",{parentName:"li"},"dummy.go"),' an empty main - it will not be used but it will shut up "',(0,i.kt)("inlineCode",{parentName:"li"},"main.main"),' missing error detection"')),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Large portions of this page is copied from the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/openwhisk/tree/master/docs"},"Apache OpenWhisk documentation")," on April 23rd 2021 - where there have been customisations to match Hypi's deployment this has been noted. Apache OpenWhisk and the Apache name are the property of the Apache Foundation and licensed under the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/openwhisk/blob/master/LICENSE.txt"},"Apache V2 license")," ."))))}d.isMDXComponent=!0}}]);