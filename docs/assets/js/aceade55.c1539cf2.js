"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8927],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),h=i,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||r;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1835:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],p={id:"hypi-cli-react",title:"Use Hypi in a ReactJS Project",sidebar_label:"ReactJS",slug:"/lowcode/hypi-cli-react"},l=void 0,s={unversionedId:"lowcode/hypi-cli-react",id:"lowcode/hypi-cli-react",title:"Use Hypi in a ReactJS Project",description:"In this guide, we will access Hypi APIs from the React Typescript project using the Hypi CLI.",source:"@site/content/lowcode/hypi-cli-react.md",sourceDirName:"lowcode",slug:"/lowcode/hypi-cli-react",permalink:"/docs/lowcode/hypi-cli-react",editUrl:"https://github.com/hypi-universe/docs/edit/master/content/lowcode/hypi-cli-react.md",tags:[],version:"current",frontMatter:{id:"hypi-cli-react",title:"Use Hypi in a ReactJS Project",sidebar_label:"ReactJS",slug:"/lowcode/hypi-cli-react"},sidebar:"docs",previous:{title:"Flutter",permalink:"/docs/lowcode/hypi-cli-flutter"},next:{title:"Angular",permalink:"/docs/lowcode/hypi-cli-angular"}},c=[{value:"Create React Typescript App",id:"create-react-typescript-app",children:[],level:3},{value:"Login",id:"login",children:[],level:3},{value:"Hypi Init",id:"hypi-init",children:[],level:3},{value:"Schema Edit",id:"schema-edit",children:[],level:3},{value:"Hypi Sync",id:"hypi-sync",children:[],level:3},{value:"Hypi Generate",id:"hypi-generate",children:[],level:3},{value:"Using GraphQL hooks",id:"using-graphql-hooks",children:[],level:3},{value:"Authentication using Apollo Client",id:"authentication-using-apollo-client",children:[],level:3}],u={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this guide, we will access Hypi APIs from the React Typescript project using the Hypi CLI."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Prerequisites"),": Knowledge of application development using ReactJS. Development set up for ReactJS."),(0,r.kt)("h3",{id:"create-react-typescript-app"},"Create React Typescript App"),(0,r.kt)("p",null,"You may create a sample React Typescript app using the following command. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npx create-react-app my-app --template typescript`  \n")),(0,r.kt)("p",null,"or use an example from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hypi-universe/hypi-cli-react-example"},"here")," "),(0,r.kt)("p",null,"In this example, we will use the apollo client as the graphql client. Add the following dependencies to ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"@apollo/client": "^3.3.16",\n"graphql": "^15.5.0",\n')),(0,r.kt)("p",null,"Let's start using Hypi CLI now."),(0,r.kt)("h3",{id:"login"},"Login"),(0,r.kt)("p",null,"On the command line, go to your ReactJS application folder. Login to your Hypi account using ",(0,r.kt)("a",{parentName:"p",href:"/docs/lowcode/hypi-cli-intro#hypi-login"},"hypi login")," command. After successful login, the user config file will be placed in ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.config/hypi/config.json")," . In case of Windows, the file will be created in ",(0,r.kt)("inlineCode",{parentName:"p"},"\\Users\\user\\AppData\\Local")),(0,r.kt)("p",null,"Here, are the contents of the file. It makes the connection between Hypi and ReactJS app."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "api_domain": "https://api.hypi.app",\n  "fn_domain": "https://fn.hypi.app",\n  "sessionExpires": 1657276287,\n  "sessionToken": "Auth-Token",\n  "domain": "professionally.apps.hypi.app"\n}\n')),(0,r.kt)("h3",{id:"hypi-init"},"Hypi Init"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"hypi init")," command to initialize a new hypi App and Instance in your ReactJS project folder."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    USAGE\n      $ hypi init [WEBSITE] [NAME] [LABEL] [DOMAIN]\n    \n    OPTIONS\n      -h, --help           show CLI help\n      -i, --have_instance\n    \n    EXAMPLES\n      $ hypi init -i\n      $ hypi init --have_instance\n      $ hypi init\n")),(0,r.kt)("p",null,"Go to your ReactJS project folder on the command line and run ",(0,r.kt)("inlineCode",{parentName:"p"},"hypi init")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},">hypi init\nThis command will walk you through creating app.yaml and instance.yaml files.\n? Do you have a Hypi instance created at https://hypi.app that you\u2019d like to use? No\n? App name?  ReactJSApp\n? App label?  ReactJSApp\n? Website?  https://hypi.app/apps\n? Domain(Optional)?\nInit done successfully, Now write your schema then run the hypi sync command to generate your app's API\n")),(0,r.kt)("p",null,"This creates a  ",(0,r.kt)("inlineCode",{parentName:"p"},".hypi")," folder in your ReactJS project folder. Within ",(0,r.kt)("inlineCode",{parentName:"p"},".hypi"),", three files are created. ",(0,r.kt)("inlineCode",{parentName:"p"},"app.yaml"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"instance.yaml")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"schema.graphql"),". The files app.yaml and instance.yaml has Hypi ",(0,r.kt)("inlineCode",{parentName:"p"},"App and Instance")," details. "),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You should write your schema inside ",(0,r.kt)("inlineCode",{parentName:"p"},"schema.graphql")," file."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"app.yaml\n========\nwebsite: https://hypi.app/apps\nname: ReactJSApp\nlabel: ReactJSApp\nreleases:\n  - name: latest\n    schema:\n      types: schema.graphql\n    status: PUBLISHED\n    notes: latest version\n    hypi:\n      id: 01F8EMYY0935THH0GX40K7QESY\nhypi:\n  id: 01F8EMYY01YDD2HB0WH8E1AZJW\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"instance.yaml\n=============\ndomain: engulfs.apps.hypi.app\nrelease:\n  name: latest\n  hypi:\n    id: 01F8EMYY0935THH0GX40K7QESY\nhypi:\n  id: 01F8EMZ1PN1ANAS1C15K6DD63H\n")),(0,r.kt)("p",null,"The new app gets created on the Hypi account. If an existing domain is not provided then a new domain also gets created."),(0,r.kt)("p",null,"If you want to use an existing domain on the Hypi website instead of creating a new one, you may provide that domain that as well."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"hypi init\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"This command will walk you through creating app.yaml and instance.yaml files.\n? Do you have a Hypi instance created at https://hypi.app that you\u2019d like to use? Yes\n? Please enter a valid domain engulfs.apps.hypi.app\nInit done successfully, Now write your schema then run the hypi sync command to generate your app's API\n")),(0,r.kt)("p",null,"In this case, the existing schema will get imported. "),(0,r.kt)("h3",{id:"schema-edit"},"Schema Edit"),(0,r.kt)("p",null,"You may edit the schema in the ",(0,r.kt)("inlineCode",{parentName:"p"},"schema.graphql"),"\nLet's edit the schema, to add the data types. Here, we are adding Product data type."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"type Product {\n    hypi: Hypi\n    title: String!\n    description: String!\n    price: Float\n}\n")),(0,r.kt)("h3",{id:"hypi-sync"},"Hypi Sync"),(0,r.kt)("p",null,"The next step is to sync the edited local schema and get the full schema of Hypi.\nUse the ",(0,r.kt)("inlineCode",{parentName:"p"},"hypi sync")," command for that."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    USAGE\n      $ hypi sync \n    \n    OPTIONS\n      -h, --help  show CLI help\n    \n    EXAMPLE\n      $ hypi sync\n")),(0,r.kt)("p",null,"Now run ",(0,r.kt)("inlineCode",{parentName:"p"},"hypi sync")," to generate full schema file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"hypi sync\nApp created with id : 01F8EMYY01YDD2HB0WH8E1AZJW\nInstance created with id : 01F8EMZ1PN1ANAS1C15K6DD63H\nupdateAppYamlFile done\nupdateInstanceYamlFile done\nIntrospection done\nSync Process... done\nThe file was succesfully generated!\n")),(0,r.kt)("p",null,"After syncing, ",(0,r.kt)("inlineCode",{parentName:"p"},"generated-schema.graphql")," file gets generated in the ",(0,r.kt)("inlineCode",{parentName:"p"},".hypi")," folder that has full hypi schema."),(0,r.kt)("h3",{id:"hypi-generate"},"Hypi Generate"),(0,r.kt)("p",null,"Now, you need to generate graphql ReactJS code to use Hypi APIs within the ReactJS typescript project. "),(0,r.kt)("p",null,"Inside ",(0,r.kt)("inlineCode",{parentName:"p"},"src/graphql")," folder, add files related to GraphQl queries and mutations."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Here is the sample Product Query file to find all data : ",(0,r.kt)("inlineCode",{parentName:"li"},"src/graphql/products.graphql"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"query products($arcql: String!) {\n    find(type: Product, arcql: $arcql) {\n        edges {\n            node {\n               ...ProductFields\n            }\n        }\n    }\n}\n\nfragment ProductFields on Product {\n   hypi {\n        id\n    }\n    title\n    description\n}    \n")),(0,r.kt)("p",null,"You may replace the type ",(0,r.kt)("inlineCode",{parentName:"p"},"Product")," with your own data type and fields like ",(0,r.kt)("inlineCode",{parentName:"p"},"title/description")," with your own fields."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Now, add Products Mutation: ",(0,r.kt)("inlineCode",{parentName:"li"},"src/graphql/products-mutation.graphql"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mutation upsert($values:HypiUpsertInputUnion!) {\n  upsert(values:$values)\n    {\n        id\n    }\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You may also retrieve a single product using ",(0,r.kt)("inlineCode",{parentName:"li"},"get")," query. Add ",(0,r.kt)("inlineCode",{parentName:"li"},"get")," query:  `src/graphql/get-product.graphql")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"query getProduct($id: String!) {\n    get(type: Product, id: $id) {\n           ...ProductFields\n    }\n}\n\nfragment ProductFields on Product {\n   hypi {\n        id\n    }\n    title\n    description\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add delete mutation: ",(0,r.kt)("inlineCode",{parentName:"li"},"src/graphql/delete-product.graphql"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mutation delete(\n$arcql: String!\n$clearArrayReferences: Boolean = false) {\n  delete(type: Product, arcql: $arcql, clearArrayReferences: $clearArrayReferences)\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"After adding the graphql queries and mutations, use the ",(0,r.kt)("inlineCode",{parentName:"li"},"generate")," command to generate the Reactjs graphql code so that you can use Hypi APIs within your project.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"USAGE\n  $ hypi generate [PLATFORM]\n\nOPTIONS\n  -h, --help                              show CLI help\n  -p, --platform=flutter|reactjs|angular\n\nEXAMPLES\n  $ hypi generate angular\n  $ hypi generate -p=angular\n  $ hypi generate --platform=angular\n\n")),(0,r.kt)("p",null,"After running the command, ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql.ts")," files get created in the ",(0,r.kt)("inlineCode",{parentName:"p"},"\\src\\generated")," folder. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"hypi generate reactjs\nGenerate Process... done\nThe file was succesfully generated!\n")),(0,r.kt)("p",null,"Inside ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql.ts")," file, you will find hooks for the query and the mutation to be used inside your typescript components."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export function useProductsQuery(baseOptions: Apollo.QueryHookOptions<ProductsQuery, ProductsQueryVariables>) {\n        const options = {...defaultOptions, ...baseOptions}\n        return Apollo.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);\n        }\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export function useUpsertMutation(baseOptions?: Apollo.MutationHookOptions<UpsertMutation, UpsertMutationVariables>) {\n        const options = {...defaultOptions, ...baseOptions}\n        return Apollo.useMutation<UpsertMutation, UpsertMutationVariables>(UpsertDocument, options);\n      }\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export function useDeleteMutation(baseOptions?: Apollo.MutationHookOptions<DeleteMutation, DeleteMutationVariables>) {\n        const options = {...defaultOptions, ...baseOptions}\n        return Apollo.useMutation<DeleteMutation, DeleteMutationVariables>(DeleteDocument, options);\n      }\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export function useGetProductQuery(baseOptions: Apollo.QueryHookOptions<GetProductQuery, GetProductQueryVariables>) {\n        const options = {...defaultOptions, ...baseOptions}\n        return Apollo.useQuery<GetProductQuery, GetProductQueryVariables>(GetProductDocument, options);\n      }\n")),(0,r.kt)("p",null,"Now, you are ready to create your React TypeScript application using Hypi APIs!"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"To use various Hypi APIs like CRUD, you will have to write the related graphql queries in ","*",".graphl files inside  ",(0,r.kt)("inlineCode",{parentName:"p"},"src/graphql")," folder. Please check various APIs ",(0,r.kt)("a",{parentName:"p",href:"https://docs.hypi.app/docs/api-references"},"here"),"."))),(0,r.kt)("h3",{id:"using-graphql-hooks"},"Using GraphQL hooks"),(0,r.kt)("p",null,"Inside src/components, add ",(0,r.kt)("inlineCode",{parentName:"p"},"Product")," or your own data type component. Add ",(0,r.kt)("inlineCode",{parentName:"p"},"ProductList.js")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"AddProduc.js")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"EditProduct.js"),"files. These files will access the graphql queries and mutations using the hooks."),(0,r.kt)("p",null,"Let's try to understand the usage of hooks in the ProductList component."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"First, we import the hooks from graphql.ts file.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import\xa0{\xa0useUpsertMutation\xa0}\xa0from'../../generated/graphql'\nimport\xa0{\xa0useUpsertMutation,\xa0useGetProductQuery\xa0}\xa0from'../../generated/graphql'\nimport\xa0{\xa0useProductsQuery,\xa0useDeleteMutation\xa0}\xa0from'../../generated/graphql'\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Here, you may declare the GraphQL query hook and provide the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.hypi.app/docs/arcql"},"arcql statements")," under variables.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const { loading, error, data } = useProductsQuery({\n    variables: { arcql: '*' },\n});\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Declare the GraphQL mutation hook.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const\xa0[upsertMutation,\xa0{\xa0upsertData,\xa0upsertLoading,\xa0upsertError\xa0}]\xa0=\xa0useUpsertMutation()\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Declare Delete mutation hook.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const handleRemove = (event, id) => {\n    deleteMutation({\n      variables: {\n        arcql: "hypi.id = \'" + id + "\'"\n      }\n    })\n    window.location.reload();\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Declare Get Query hook.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"  const { loading, error, data } = useGetProductQuery({\n    variables: { id: id },\n  });\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Retrieve the data from the ",(0,r.kt)("inlineCode",{parentName:"li"},"Product")," data type. Delete the product on click event.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const productsOutput = data.find.edges.length === 0 ?\n    <div>\n      <p>No products found</p>\n    </div>\n    : data.find.edges.map((product, index) => {\n      return (\n        <div key={product.node.hypi.id}>\n          <li key={index} >\n            {product.node.title}\n          </li>\n          <button type="button" className={"btn"} onClick={(event) => handleRemove(event, product.node.hypi.id)}>\n            Remove\n          </button>\n          <Link\n            to={"/products/" + product.node.hypi.id}\n            className="badge badge-warning">\n            <button type="button" className={"btn"}>\n              Edit\n            </button>\n          </Link>\n        </div>\n      )\n    })\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Insert data using the mutation. Data from the ",(0,r.kt)("inlineCode",{parentName:"li"},"productForm")," gets inserted into the Product table.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const submitProductHandler = (event) => {\n    event.preventDefault()\n    //call the mutation to send data\n    upsertMutation({\n      variables: {\n        values: {\n          Product: {\n            hypi: {\n              id: productForm.id\n            },\n            title: productForm.title,\n            description: productForm.description\n          }\n        }\n      }\n    })\n    setRedirectToReferrer(true)\n  }\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Inside your main ",(0,r.kt)("inlineCode",{parentName:"li"},"App.js")," file, you may access the ProductList.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'<div className="container mt-3">\n        <Switch>\n          <Route exact path={["/", "/products"]} component={ProductList} />\n          <Route exact path="/add" component={AddProduct} />\n          <Route path="/products/:id" component={EditProduct} />\n        </Switch>\n      </div>\n')),(0,r.kt)("h3",{id:"authentication-using-apollo-client"},"Authentication using Apollo Client"),(0,r.kt)("p",null,"To make an HTTP connection to Hypi Endpoint, we use Apollo client. Following code demonstrates how to make this connection. Replace Hypi Authorization Token (Auth-Token) and hypi domain. This code has been added in the ",(0,r.kt)("inlineCode",{parentName:"p"},"apollo-client.js")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import {\n  ApolloClient,\n  InMemoryCache,\n  ApolloLink,\n  HttpLink,\n} from \"@apollo/client\";\n\nimport config from '../config'\n\nconst httpLink = new HttpLink({ uri: config.default_api_domain + \"/graphql\" });\n\nconst authMiddleware = () =>\n  new ApolloLink((operation, forward) => {\n    // add the authorization to the headers\n    const authToken = config.token\n    const domain = config.domain\n\n    operation.setContext({\n      headers: {\n        Authorization: `Bearer ${authToken}`,\n        'hypi-domain': `${domain}`\n      },\n    });\n    return forward(operation);\n  });\n\nexport const apolloClient = new ApolloClient({\n  link: authMiddleware().concat(httpLink),\n  cache: new InMemoryCache(),\n});\n")),(0,r.kt)("p",null,"Run the application using ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run start")," command. To run the application ",(0,r.kt)("inlineCode",{parentName:"p"},"react-scripts")," is needed.  You may check the setting in ",(0,r.kt)("inlineCode",{parentName:"p"},"packag.json")," file. If the script is not installed, you may install it using ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install react-scripts --save")," command."),(0,r.kt)("p",null,"This is the simplest way to use Hypi GraphQL queries and Mutations inside React TypeScript application!"))}d.isMDXComponent=!0}}]);