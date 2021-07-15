(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2909],{3905:function(e,a,t){"use strict";t.d(a,{Zo:function(){return c},kt:function(){return d}});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),l=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=l(e.components);return n.createElement(p.Provider,{value:a},e.children)},k={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(t),d=r,u=m["".concat(p,".").concat(d)]||m[d]||k[d]||i;return t?n.createElement(u,o(o({ref:a},c),{},{components:t})):n.createElement(u,o({ref:a},c))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var p in a)hasOwnProperty.call(a,p)&&(s[p]=a[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5200:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var n=t(2122),r=t(9756),i=(t(7294),t(3905)),o=["components"],s={id:"openwhisk-packages",title:"Packages",sidebar_label:"Packages",slug:"/openwhisk-packages"},p=void 0,l={unversionedId:"openwhisk-packages",id:"openwhisk-packages",isDocsHomePage:!1,title:"Packages",description:"In OpenWhisk, you can use packages to bundle together a set of related actions, and share them with others.",source:"@site/content/openwhisk-packages.md",sourceDirName:".",slug:"/openwhisk-packages",permalink:"/docs/openwhisk-packages",editUrl:"https://github.com/hypi-universe/docs/edit/master/content/openwhisk-packages.md",version:"current",frontMatter:{id:"openwhisk-packages",title:"Packages",sidebar_label:"Packages",slug:"/openwhisk-packages"},sidebar:"docs",previous:{title:"Conductors",permalink:"/docs/openwhisk-conductors"},next:{title:"Web Actions",permalink:"/docs/openwhisk-webactions"}},c=[{value:"Browsing packages",id:"browsing-packages",children:[]},{value:"Invoking actions in a package",id:"invoking-actions-in-a-package",children:[]},{value:"Creating and using package bindings",id:"creating-and-using-package-bindings",children:[]},{value:"Creating and using trigger feeds",id:"creating-and-using-trigger-feeds",children:[]},{value:"Creating a package",id:"creating-a-package",children:[]},{value:"Sharing a package",id:"sharing-a-package",children:[]}],k={toc:c};function m(e){var a=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},k,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In OpenWhisk, you can use packages to bundle together a set of related actions, and share them with others."),(0,i.kt)("p",null,"A package can include ",(0,i.kt)("em",{parentName:"p"},"actions")," and ",(0,i.kt)("em",{parentName:"p"},"feeds"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An action is a piece of code that runs on OpenWhisk. For example, the Cloudant package includes actions to read and write records to a Cloudant database."),(0,i.kt)("li",{parentName:"ul"},"A feed is used to configure an external event source to fire trigger events. For example, the Alarm package includes a feed that can fire a trigger at a specified frequency.")),(0,i.kt)("p",null,"Every OpenWhisk entity, including packages, belongs in a ",(0,i.kt)("em",{parentName:"p"},"namespace"),", and the fully qualified name of an entity is ",(0,i.kt)("inlineCode",{parentName:"p"},"/namespaceName[/packageName]/entityName"),"."),(0,i.kt)("p",null,"The following sections describe how to browse packages and use the triggers and feeds in them. In addition, if you are interested in contributing your own packages to the catalog, read the sections on creating and sharing packages."),(0,i.kt)("h3",{id:"browsing-packages"},"Browsing packages"),(0,i.kt)("p",null,"Several packages are registered with OpenWhisk. You can get a list of packages in a namespace, list the entities in a package, and get a description of the individual entities in a package."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Get a list of packages in the ",(0,i.kt)("inlineCode",{parentName:"li"},"/whisk.system")," namespace.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"wsk package list /whisk.system\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"packages\n/whisk.system/cloudant                                                 shared\n/whisk.system/alarms                                                   shared\n/whisk.system/watson                                                   shared\n/whisk.system/websocket                                                shared\n/whisk.system/weather                                                  shared\n/whisk.system/system                                                   shared\n/whisk.system/utils                                                    shared\n/whisk.system/slack                                                    shared\n/whisk.system/samples                                                  shared\n/whisk.system/github                                                   shared\n/whisk.system/pushnotifications                                        shared\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Get a list of entities in the ",(0,i.kt)("inlineCode",{parentName:"li"},"/whisk.system/cloudant")," package.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"wsk package get --summary /whisk.system/cloudant\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"package /whisk.system/cloudant: Cloudant database service\n (parameters: *apihost, *dbname, *host, overwrite, *password, *username)\naction /whisk.system/cloudant/read: Read document from database\n (parameters: dbname, id, params)\naction /whisk.system/cloudant/write: Write document in database\n (parameters: dbname, doc)\nfeed   /whisk.system/cloudant/changes: Database change feed\n (parameters: dbname, filter, query_params)\n...\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note"),": Parameters listed under the package with a prefix ",(0,i.kt)("inlineCode",{parentName:"p"},"*")," are predefined, bound parameters. Parameters without a ",(0,i.kt)("inlineCode",{parentName:"p"},"*")," are those listed under the ",(0,i.kt)("a",{parentName:"p",href:"/docs/openwhisk-annotations"},"annotations")," for each entity. Furthermore, any parameters with the prefix ",(0,i.kt)("inlineCode",{parentName:"p"},"**")," are finalized bound parameters. This means that they are immutable, and cannot be changed by the user. Any entity listed under a package inherits specific bound parameters from the package. To view the list of known parameters of an entity belonging to a package, you will need to run a ",(0,i.kt)("inlineCode",{parentName:"p"},"get --summary")," of the individual entity."),(0,i.kt)("p",null,"This output shows that the Cloudant package provides the actions ",(0,i.kt)("inlineCode",{parentName:"p"},"read")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"write"),", and the trigger feed called ",(0,i.kt)("inlineCode",{parentName:"p"},"changes"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"changes")," feed causes triggers to be fired when documents are added to the specified Cloudant database."),(0,i.kt)("p",null,"The Cloudant package also defines the parameters ",(0,i.kt)("inlineCode",{parentName:"p"},"username"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"password"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"host"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"dbname"),". These parameters must be specified for the actions and feeds to be meaningful. The parameters allow the actions to operate on a specific Cloudant account, for example."),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Get a description of the ",(0,i.kt)("inlineCode",{parentName:"li"},"/whisk.system/cloudant/read")," action.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"wsk action get --summary /whisk.system/cloudant/read\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"action /whisk.system/cloudant/read: Read document from database\n (parameters: *apihost, *dbname, *host, *id, params, *password, *username)\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"NOTE"),": Notice that the parameters listed for the action ",(0,i.kt)("inlineCode",{parentName:"p"},"read")," were expanded upon from the action summary compared to the package summary above. To see the official bound parameters for actions and triggers listed under packages, run an individual get summary for the particular entity."),(0,i.kt)("p",null,"This output shows that the Cloudant ",(0,i.kt)("inlineCode",{parentName:"p"},"read")," action lists eight parameters, seven of which are predefined. These include the database and document ID to retrieve."),(0,i.kt)("h3",{id:"invoking-actions-in-a-package"},"Invoking actions in a package"),(0,i.kt)("p",null,"You can invoke actions in a package, just as with other actions. The next few steps show how to invoke the ",(0,i.kt)("inlineCode",{parentName:"p"},"greeting")," action in the ",(0,i.kt)("inlineCode",{parentName:"p"},"/whisk.system/samples")," package with different parameters."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Get a description of the ",(0,i.kt)("inlineCode",{parentName:"li"},"/whisk.system/samples/greeting")," action.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"wsk action get --summary /whisk.system/samples/greeting\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"action /whisk.system/samples/greeting: Returns a friendly greeting\n (parameters: name, place)\n")),(0,i.kt)("p",null,"Notice that the ",(0,i.kt)("inlineCode",{parentName:"p"},"greeting")," action takes two parameters: ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"place"),"."),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Invoke the action without any parameters.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"wsk action invoke --result /whisk.system/samples/greeting\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "payload": "Hello, stranger from somewhere!"\n}\n')),(0,i.kt)("p",null,"The output is a generic message because no parameters were specified."),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Invoke the action with parameters.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"wsk action invoke --result /whisk.system/samples/greeting --param name Mork --param place Ork\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "payload": "Hello, Mork from Ork!"\n}\n')),(0,i.kt)("p",null,"Notice that the output uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"place")," parameters that were passed to the action."),(0,i.kt)("h3",{id:"creating-and-using-package-bindings"},"Creating and using package bindings"),(0,i.kt)("p",null,"Although you can use the entities in a package directly, you might find yourself passing the same parameters to the action every time. You can avoid this by binding to a package and specifying default parameters. These parameters are inherited by the actions in the package."),(0,i.kt)("p",null,"For example, in the ",(0,i.kt)("inlineCode",{parentName:"p"},"/whisk.system/cloudant")," package, you can set default ",(0,i.kt)("inlineCode",{parentName:"p"},"username"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"password"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"dbname")," values in a package binding and these values are automatically passed to any actions in the package."),(0,i.kt)("p",null,"In the following simple example, you bind to the ",(0,i.kt)("inlineCode",{parentName:"p"},"/whisk.system/samples")," package."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Bind to the ",(0,i.kt)("inlineCode",{parentName:"li"},"/whisk.system/samples")," package and set a default ",(0,i.kt)("inlineCode",{parentName:"li"},"place")," parameter value.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"wsk package bind /whisk.system/samples valhallaSamples --param place Valhalla\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ok: created binding valhallaSamples\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Get a description of the package binding.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"wsk package get --summary valhallaSamples\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"package /namespace/valhallaSamples: Returns a result based on parameter place\n (parameters: *place)\naction /namespace/valhallaSamples/helloWorld: Demonstrates logging facilities\n  (parameters: payload)\naction /namespace/valhallaSamples/greeting: Returns a friendly greeting\n  (parameters: name, place)\naction /namespace/valhallaSamples/curl: Curl a host url\n  (parameters: payload)\naction /namespace/valhallaSamples/wordCount: Count words in a string\n  (parameters: payload)\n")),(0,i.kt)("p",null,"Notice that all the actions in the ",(0,i.kt)("inlineCode",{parentName:"p"},"/whisk.system/samples")," package are available in the ",(0,i.kt)("inlineCode",{parentName:"p"},"valhallaSamples")," package binding."),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Invoke an action in the package binding.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"wsk action invoke --result valhallaSamples/greeting --param name Odin\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "payload": "Hello, Odin from Valhalla!"\n}\n')),(0,i.kt)("p",null,"Notice from the result that the action inherits the ",(0,i.kt)("inlineCode",{parentName:"p"},"place")," parameter you set when you created the ",(0,i.kt)("inlineCode",{parentName:"p"},"valhallaSamples")," package binding."),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Invoke an action and overwrite the default parameter value.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"wsk action invoke --result valhallaSamples/greeting --param name Odin --param place Asgard\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "payload": "Hello, Odin from Asgard!"\n}\n')),(0,i.kt)("p",null,"Notice that the ",(0,i.kt)("inlineCode",{parentName:"p"},"place")," parameter value that is specified with the action invocation overwrites the default value set in the ",(0,i.kt)("inlineCode",{parentName:"p"},"valhallaSamples")," package binding."),(0,i.kt)("h3",{id:"creating-and-using-trigger-feeds"},"Creating and using trigger feeds"),(0,i.kt)("p",null,"Feeds offer a convenient way to configure an external event source to fire these events to a OpenWhisk trigger. This example shows how to use a feed in the Alarms package to fire a trigger every second, and how to use a rule to invoke an action every second."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Get a description of the feed in the ",(0,i.kt)("inlineCode",{parentName:"li"},"/whisk.system/alarms")," package.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"wsk package get --summary /whisk.system/alarms\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"package /whisk.system/alarms: Alarms and periodic utility\n (parameters: *apihost, *cron, *trigger_payload)\nfeed   /whisk.system/alarms/alarm: Fire trigger when alarm occurs\n  (parameters: none defined)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"wsk action get --summary /whisk.system/alarms/alarm\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"action /whisk.system/alarms/alarm: Fire trigger when alarm occurs\n (parameters: *apihost, *cron, *trigger_payload)\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"/whisk.system/alarms/alarm")," feed takes two parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cron"),": A crontab specification of when to fire the trigger."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"trigger_payload"),": The payload parameter value to set in each trigger event."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"apihost"),": The API host endpoint that will be receiving the feed.")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Create a trigger that fires every eight seconds.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'wsk trigger create everyEightSeconds --feed /whisk.system/alarms/alarm -p cron "*/8 * * * * *" -p trigger_payload "{\\"name\\":\\"Mork\\", \\"place\\":\\"Ork\\"}"\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ok: created trigger feed everyEightSeconds\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Create a 'hello.js' file with the following action code.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"function main(params) {\n  return {payload:  'Hello, ' + params.name + ' from ' + params.place};\n}\n")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Make sure that the action exists.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"wsk action update hello hello.js\n")),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Create a rule that invokes the ",(0,i.kt)("inlineCode",{parentName:"li"},"hello")," action every time the ",(0,i.kt)("inlineCode",{parentName:"li"},"everyEightSeconds")," trigger fires.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"wsk rule create myRule everyEightSeconds hello\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ok: created rule myRule\n")),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"Check that the action is being invoked by polling for activation logs.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"wsk activation poll\n")),(0,i.kt)("p",null,"You should see activations every eight seconds for the trigger, the rule, and the action. The action receives the parameters ",(0,i.kt)("inlineCode",{parentName:"p"},'{"name":"Mork", "place":"Ork"}')," on every invocation."),(0,i.kt)("h3",{id:"creating-a-package"},"Creating a package"),(0,i.kt)("p",null,"A package is used to organize a set of related actions and feeds.\nIt also allows for parameters to be shared across all entities in the package."),(0,i.kt)("p",null,"To create a custom package with a simple action in it, try the following example:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'Create a package called "custom".')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"wsk package create custom\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ok: created package custom\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Get a summary of the package.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"wsk package get --summary custom\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"package /myNamespace/custom\n (parameters: none defined)\n")),(0,i.kt)("p",null,"Notice that the package is empty."),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Create a file called ",(0,i.kt)("inlineCode",{parentName:"li"},"identity.js")," that contains the following action code. This action returns all input parameters.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"function main(args) { return args; }\n")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Create an ",(0,i.kt)("inlineCode",{parentName:"li"},"identity")," action in the ",(0,i.kt)("inlineCode",{parentName:"li"},"custom")," package.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"wsk action create custom/identity identity.js\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ok: created action custom/identity\n")),(0,i.kt)("p",null,"Creating an action in a package requires that you prefix the action name with a package name. Package nesting is not allowed. A package can contain only actions and can't contain another package."),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Get a summary of the package again.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"wsk package get --summary custom\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"package /myNamespace/custom\n(parameters: none defined)\naction /myNamespace/custom/identity\n(parameters: none defined)\n")),(0,i.kt)("p",null,"You can see the ",(0,i.kt)("inlineCode",{parentName:"p"},"custom/identity")," action in your namespace now."),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"Invoke the action in the package.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"wsk action invoke --result custom/identity\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"{}\n")),(0,i.kt)("p",null,"You can set default parameters for all the entities in a package. You do this by setting package-level parameters that are inherited by all actions in the package. To see how this works, try the following example:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Update the ",(0,i.kt)("inlineCode",{parentName:"li"},"custom")," package with two parameters: ",(0,i.kt)("inlineCode",{parentName:"li"},"city")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"country"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"wsk package update custom --param city Austin --param country USA\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ok: updated package custom\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Display the parameters in the package and action, and see how the ",(0,i.kt)("inlineCode",{parentName:"li"},"identity")," action in the package inherits parameters from the package.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"wsk package get custom\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'ok: got package custom\n...\n"parameters": [\n  {\n      "key": "city",\n      "value": "Austin"\n  },\n  {\n      "key": "country",\n      "value": "USA"\n  }\n]\n...\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"wsk action get custom/identity\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'ok: got action custom/identity\n...\n"parameters": [\n  {\n      "key": "city",\n      "value": "Austin"\n  },\n  {\n      "key": "country",\n      "value": "USA"\n  }\n]\n...\n')),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Invoke the identity action without any parameters to verify that the action indeed inherits the parameters.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"wsk action invoke --result custom/identity\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "city": "Austin",\n  "country": "USA"\n}\n')),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Invoke the identity action with some parameters. Invocation parameters are merged with the package parameters; the invocation parameters override the package parameters.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"wsk action invoke --result custom/identity --param city Dallas --param state Texas\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "city": "Dallas",\n  "country": "USA",\n  "state": "Texas"\n}\n')),(0,i.kt)("h3",{id:"sharing-a-package"},"Sharing a package"),(0,i.kt)("p",null,"After the actions and feeds that comprise a package are debugged and tested, the package can be shared with all OpenWhisk users. Sharing the package makes it possible for the users to bind the package, invoke actions in the package, and author OpenWhisk rules and sequence actions."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Share the package with all users:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"wsk package update custom --shared yes\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ok: updated package custom\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Display the ",(0,i.kt)("inlineCode",{parentName:"li"},"publish")," property of the package to verify that it is now true.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"wsk package get custom\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'ok: got package custom\n...\n"publish": true,\n...\n')),(0,i.kt)("p",null,"Others can now use your ",(0,i.kt)("inlineCode",{parentName:"p"},"custom")," package, including binding to the package or directly invoking an action in it. Other users must know the fully qualified names of the package to bind it or invoke actions in it. Actions and feeds within a shared package are ",(0,i.kt)("em",{parentName:"p"},"public"),". If the package is private, then all of its contents are also private."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Get a description of the package to show the fully qualified names of the package and action.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"wsk package get --summary custom\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"package /myNamespace/custom: Returns a result based on parameters city and country\n (parameters: *city, *country)\naction /myNamespace/custom/identity\n (parameters: none defined)\n")),(0,i.kt)("p",null,"In the previous example, you're working with the ",(0,i.kt)("inlineCode",{parentName:"p"},"myNamespace")," namespace, and this namespace appears in the fully qualified name."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Large portions of this page is copied from the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/openwhisk/tree/master/docs"},"Apache OpenWhisk documentation")," on April 23rd 2021 - where there have been customisations to match Hypi's deployment this has been noted. Apache OpenWhisk and the Apache name are the property of the Apache Foundation and licensed under the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/openwhisk/blob/master/LICENSE.txt"},"Apache V2 license")," ."))))}m.isMDXComponent=!0}}]);