(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(8),l=(n(0),n(159)),i=n(163),o=n(164),p={id:"fileupload",title:"File Upload",sidebar_label:"File Upload",slug:"/fileupload"},c={unversionedId:"fileupload",id:"fileupload",isDocsHomePage:!1,title:"File Upload",description:"Many applications need to upload the file to the backend. Hypi provides a simple API to do so!",source:"@site/content/fileupload.md",slug:"/fileupload",permalink:"/docs/fileupload",editUrl:"https://github.com/hypi-universe/docs/edit/master/content/fileupload.md",version:"current",sidebar_label:"File Upload",sidebar:"docs",previous:{title:"Serverless Function",permalink:"/docs/serverlessfunction"},next:{title:"RESTful APIs",permalink:"/docs/rest-apis"}},b=[{value:"Upload endpoint",id:"upload-endpoint",children:[]},{value:"Download endpoint",id:"download-endpoint",children:[]},{value:"curl upload example",id:"curl-upload-example",children:[]},{value:"curl download example",id:"curl-download-example",children:[]}],u={toc:b};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Many applications need to upload the file to the backend. Hypi provides a simple API to do so!"),Object(l.b)("p",null,"Hypi\u2019s core App has a type definition called ",Object(l.b)("inlineCode",{parentName:"p"},"File"),". A file can be uploaded using an endpoint. Once it is uploaded an object of ",Object(l.b)("inlineCode",{parentName:"p"},"File")," type gets created. The information about the file gets extracted and stored as a ",Object(l.b)("inlineCode",{parentName:"p"},"File")," object. The definition includes metadata about the file, the URL to download it, and more. You may place these file objects within your data model. For example, profile picture of a user with his personal information."),Object(l.b)("p",null,"The file can be downloaded from the URL given in the object using an authorization token. Anonymous users cannot download the file. To allow access to other users, ",Object(l.b)("a",{parentName:"p",href:"/docs/authorisation"},"permission")," can be granted to download the file."),Object(l.b)("p",null,"With this preliminary information, let\u2019s get inside the ",Object(l.b)("inlineCode",{parentName:"p"},"File")," type definition."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"type File\xa0{\n    name:\xa0String!\n    directory:\xa0String!\n    path:\xa0String!\n    isDirectory:\xa0Boolean!\n    status:\xa0FileStatus\n    url:\xa0URL\n    type:\xa0String\n    size:\xa0Long\n    extension:\xa0String\n    isStared:\xa0Boolean\n    isSharable:\xa0Boolean\n    content:\xa0String\n    children(...):\xa0[File!]\n}\n")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"th"},"Parameter")),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"th"},"Type")),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"th"},"Description")))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"td"},"name")),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"Name of the file")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"td"},"directory")),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"The name of the directory")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"td"},"path")),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"The path of the file")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"td"},"isDirectory")),Object(l.b)("td",{parentName:"tr",align:null},"Boolean"),Object(l.b)("td",{parentName:"tr",align:null},"If the file has to be uploaded in a virtual file system like Google Drive/Dropbox, this field is set to true")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"td"},"status")),Object(l.b)("td",{parentName:"tr",align:null},"FileStatus"),Object(l.b)("td",{parentName:"tr",align:null},"Status of file upload")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"td"},"url")),Object(l.b)("td",{parentName:"tr",align:null},"URL"),Object(l.b)("td",{parentName:"tr",align:null},"URL to download file")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"td"},"type")),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"Media type")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"td"},"size")),Object(l.b)("td",{parentName:"tr",align:null},"Long"),Object(l.b)("td",{parentName:"tr",align:null},"Size of the file in Bytes")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"td"},"extension")),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"Extension of the file (.txt,.jpg, etc)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"td"},"isStared")),Object(l.b)("td",{parentName:"tr",align:null},"Boolean"),Object(l.b)("td",{parentName:"tr",align:null},"For the virtual file system, the file can be set to Starred status")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"td"},"isSharable")),Object(l.b)("td",{parentName:"tr",align:null},"Boolean"),Object(l.b)("td",{parentName:"tr",align:null},"File sharing status")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"td"},"content")),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"For the virtual file system upload, the content of the file would be set to a String value. Otherwise, the content would be null.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"td"},"children")),Object(l.b)("td",{parentName:"tr",align:null},"File"),Object(l.b)("td",{parentName:"tr",align:null},"For the virtual file system, the directory can have sub-files")))),Object(l.b)("h3",{id:"upload-endpoint"},"Upload endpoint"),Object(l.b)("p",null,"To upload a file (any file can be uploaded, image, pdf, etc), use the following endpoint"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"POST /upload/**")),Object(l.b)("p",null,"Note the ",Object(l.b)("inlineCode",{parentName:"p"},"**"),", if you use a path like ",Object(l.b)("inlineCode",{parentName:"p"},"/upload/my/path"),", then the ",Object(l.b)("inlineCode",{parentName:"p"},"File")," object will have a directory value of ",Object(l.b)("inlineCode",{parentName:"p"},"/my/path"),".  If you have many files to upload, you may put all of them in one directory."),Object(l.b)("h2",{id:"download-endpoint"},"Download endpoint"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"GET /file/<path>.ext")),Object(l.b)("p",null,"To download a file uploaded to the platform, the above URL pattern should be used."),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"<path>")," is by default the ",Object(l.b)("inlineCode",{parentName:"p"},"ID")," of the ",Object(l.b)("inlineCode",{parentName:"p"},"File")," object. The ",Object(l.b)("inlineCode",{parentName:"p"},".ext")," is the original extension of the file e.g. ",Object(l.b)("inlineCode",{parentName:"p"},".txt"),". You may copy the value from ",Object(l.b)("inlineCode",{parentName:"p"},"path")," field of ",Object(l.b)("inlineCode",{parentName:"p"},"File")," object."),Object(l.b)("h2",{id:"curl-upload-example"},"curl upload example"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'auth=\'<hypi-auth-token>\'\ncurl -v https://api.hypi.app/upload/ -H "Accept: application/json" -H "Authorization: $auth" -H "hypi-domain: <instance-domain>" -F 0=@/path/to/file.txt\n')),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"The response of the upload is JSON"),Object(l.b)("li",{parentName:"ul"},"The ",Object(l.b)("inlineCode",{parentName:"li"},"Authorization")," header is required"),Object(l.b)("li",{parentName:"ul"},"The ",Object(l.b)("inlineCode",{parentName:"li"},"hypi-domain")," header is required (like other API requests)"),Object(l.b)("li",{parentName:"ul"},"You may copy the authorization token and hypi instance domain from ",Object(l.b)("a",{parentName:"li",href:"/docs/ui-gql-config"},"GraphQL configuration of the instance"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"@")," is the root directory of the file to be uploaded.")),Object(l.b)("p",null,"In the following example of curl request, we are uploading logo.png file to Hypi domain. ",Object(l.b)("inlineCode",{parentName:"p"},"incineration.apps.hypi.app")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'curl -v https://api.hypi.app/upload/ -H "Accept: application/json" -H "Authorization: <auth-token>" -H "hypi-domain: incineration.apps.hypi.app" -F 0=@static/img/logo.png\n')),Object(l.b)("p",null,"The URL Path could be ",Object(l.b)("inlineCode",{parentName:"p"},"https://api.hypi.app/upload/mydir")," if you want to upload the file under ",Object(l.b)("inlineCode",{parentName:"p"},"mydir")," directory."),Object(l.b)("p",null,"After executing curl command, let's retrieve the details of the file object."),Object(l.b)(i.a,{defaultValue:"query",values:[{label:"GraphQL Query",value:"query"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(l.b)(o.a,{value:"query",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},'{\n  find(type: File, arcql: "*") {\n    edges {\n      node {\n        ... on File {\n          hypi {\n            id\n          }\n          name\n          directory\n          path\n          isDirectory\n          status\n          status\n          url {\n            path //Path to download file\n          }\n          type\n          size\n          extension\n          isStared\n          isSharable\n          content\n        }\n      }\n      cursor\n    }\n  }\n}\n'))),Object(l.b)(o.a,{value:"response",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},'{\n  "data": {\n    "find": {\n      "edges": [\n        {\n          "node": {\n            "hypi": {\n              "id": "01F35ZCSYBHTQ4JBWZ1KFXTDZR"\n            },\n            "name": "logo.png",\n            "directory": "/",\n            "path": "/logo.png",\n            "isDirectory": false,\n            "status": "UPLOADED",\n            "url": {\n              "path": "/file/01F322XSV13R9VAGJXW351PVBT-01F35ZCSYBHTQ4JBWZ1KFXTDZR.png"\n            },\n            "type": "image/png",\n            "size": 13759,\n            "extension": "png",\n            "isStared": null,\n            "isSharable": null,\n            "content": null\n          },\n          "cursor": "01F35ZCSYBHTQ4JBWZ1KFXTDZR"\n        }\n      ]\n    }\n  }\n}\n')))),Object(l.b)("h2",{id:"curl-download-example"},"curl download example"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'curl -v https://api.hypi.app/file/<id>.ext -H "Authorization: $auth"\n')),Object(l.b)("p",null,"Let's download the file that we uploaded earllier. "),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'curl -v https://api.hypi.app/file/01F322XSV13R9VAGJXW351PVBT-01F35ZCSYBHTQ4JBWZ1KFXTDZR.png -H "Authorization: <auth-token>" --output filedownload.png  \n')),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"--ouput filedownload.png")," would redirect the data from the file to an output file."),Object(l.b)("p",null,"In this example, we provide an authorisation token. This is because files are private to the account which created it by default. To give access to other users or allow anonymous download, a permission must be created with appropriate policies."),Object(l.b)("p",null,"For example, to give the anonymous users access (no token required), use an ",Object(l.b)("inlineCode",{parentName:"p"},"AccountPolicy")," to grant the ",Object(l.b)("inlineCode",{parentName:"p"},"anonymous")," user account read access."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},'mutation {\n  upsert(\n    values: {\n      Permission: [\n        {\n          name: "Grant access to anonymous user"\n          decisionStrategy: Unanimous\n          type: "File"\n          resource: "01F35ZCSYBHTQ4JBWZ1KFXTDZR"\n          scopes: ["*"]\n          operationType: Query\n          operations: ["find"]\n          #includeAllAccounts: true, //wildcard so all accounts can access\n          policies: [\n            {\n              hypi: { impl: "AccountPolicy" }\n              name: "Grant user anonymous access to my file"\n              logic: Positive\n              accounts: [{ hypi: { id: "anonymous" } }]\n            }\n          ]\n        }\n      ]\n    }\n  ) {\n    id\n  }\n}\n')),Object(l.b)("p",null,"Note:  ",Object(l.b)("inlineCode",{parentName:"p"},"resource")," field has the hypi id of the file uploaded."),Object(l.b)("p",null,"In this example we explicitly give anonymous users access to the file uploaded. This could also have been done by giving access to_all_accounts in the app instance by setting ",Object(l.b)("inlineCode",{parentName:"p"},"includeAllAccounts")," to true."),Object(l.b)("p",null,"Due to the permission above, the curl request can now be made without any authorisation headers."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"curl -v https://api.hypi.app/file/<id>.ext")),Object(l.b)("p",null,"Now you can download the file without the hassle of providing authorization token."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"curl -v https://api.hypi.app/file/01F322XSV13R9VAGJXW351PVBT-01F35ZCSYBHTQ4JBWZ1KFXTDZR.png --output file.png\n")))}d.isMDXComponent=!0},159:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=b(n),s=a,m=u["".concat(i,".").concat(s)]||u[s]||d[s]||l;return n?r.a.createElement(m,o(o({ref:t},c),{},{components:n})):r.a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},160:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},161:function(e,t,n){"use strict";var a=n(0),r=n(162);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},162:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},163:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(161),i=n(160),o=n(57),p=n.n(o);var c=37,b=39;t.a=function(e){var t=e.lazy,n=e.block,o=e.defaultValue,u=e.values,d=e.groupId,s=e.className,m=Object(l.a)(),h=m.tabGroupChoices,f=m.setTabGroupChoices,O=Object(a.useState)(o),j=O[0],g=O[1],y=a.Children.toArray(e.children),N=[];if(null!=d){var v=h[d];null!=v&&v!==j&&u.some((function(e){return e.value===v}))&&g(v)}var w=function(e){var t=e.target,n=N.indexOf(t),a=y[n].props.value;g(a),null!=d&&(f(d,a),setTimeout((function(){var e,n,a,r,l,i,o,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,l=e.right,i=window,o=i.innerHeight,c=i.innerWidth,n>=0&&l<=c&&r<=o&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(p.a.tabItemActive),setTimeout((function(){return t.classList.remove(p.a.tabItemActive)}),2e3))}),150))},T=function(e){var t,n;switch(e.keyCode){case b:var a=N.indexOf(e.target)+1;n=N[a]||N[0];break;case c:var r=N.indexOf(e.target)-1;n=N[r]||N[N.length-1]}null===(t=n)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},s)},u.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,className:Object(i.a)("tabs__item",p.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:T,onFocus:w,onClick:w},n)}))),t?Object(a.cloneElement)(y.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},164:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}}}]);