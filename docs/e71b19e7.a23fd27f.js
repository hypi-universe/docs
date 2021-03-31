(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{126:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),l=(a(0),a(135)),i={id:"gql-schema-types",title:"GraphQL Schema and Types",sidebar_label:"GraphQL Schema and Types",slug:"/gql-schema-types"},o={unversionedId:"gql-schema-types",id:"gql-schema-types",isDocsHomePage:!1,title:"GraphQL Schema and Types",description:"On this page, you'll learn all you need to know about the GraphQL type system and how it describes what data can be queried. Since GraphQL can be used with any backend framework or programming language, we'll stay away from implementation-specific details and talk only about the concepts.",source:"@site/content/gql-schema-types.md",slug:"/gql-schema-types",permalink:"/docs/gql-schema-types",editUrl:"https://github.com/hypi-universe/docs/edit/master/content/gql-schema-types.md",version:"current",sidebar_label:"GraphQL Schema and Types",sidebar:"docs",previous:{title:"GraphQL Interfaces",permalink:"/docs/gql-interfaces"},next:{title:"Hypi GraphQL CRUD Tutorial",permalink:"/docs/gql-crud-tutorial"}},s=[{value:"Type system",id:"type-system",children:[]},{value:"Type language",id:"type-language",children:[]},{value:"Object types and fields",id:"object-types-and-fields",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"The Query and Mutation types",id:"the-query-and-mutation-types",children:[]},{value:"Scalar types",id:"scalar-types",children:[]},{value:"Enumeration types",id:"enumeration-types",children:[]},{value:"Lists and Non-Null",id:"lists-and-non-null",children:[]}],c={toc:s};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"On this page, you'll learn all you need to know about the GraphQL type system and how it describes what data can be queried. Since GraphQL can be used with any backend framework or programming language, we'll stay away from implementation-specific details and talk only about the concepts."),Object(l.b)("h3",{id:"type-system"},"Type system"),Object(l.b)("p",null,"If you've seen a GraphQL query before, you know that the GraphQL query language is basically about selecting fields on objects. So, for example, in the following query:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},'query getMyTodos($arcql:String) {\n   todos(arcql:$arcql) {\n     hypi {\n        id\n        created\n      }\n     description\n     completed\n   }\n}\n # Variables\n{\n    "arcql": "* SORT hypi.updated DESC"\n}\n')),Object(l.b)("p",null,"Result:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n   "data": {\n     "todos": [\n       {\n          "hypi": {\n           "id": "c94144ec-52aa-4337-9d8b-15fa8ec5c979"\n           "created": "2019-11-02T15:45:16Z"\n           }\n          "description": "Buy milk for the office",\n          "completed":"false",\n       },\n       ]\n     }\n}\n')),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},'We start with a special "root" object'),Object(l.b)("li",{parentName:"ul"},"We select the hero field on that"),Object(l.b)("li",{parentName:"ul"},"For the object returned by hero, we select the name and appearsIn fields")),Object(l.b)("p",null,"Because the shape of a GraphQL query closely matches the result, you can predict what the query will return without knowing that much about the server. But it's useful to have an exact description of the data we can ask for - what fields can we select? What kinds of objects might they return? What fields are available on those sub-objects? That's where the schema comes in."),Object(l.b)("p",null,"Every GraphQL service defines a set of types which completely describe the set of possible data you can query on that service. Then, when queries come in, they are validated and executed against that schema."),Object(l.b)("h3",{id:"type-language"},"Type language"),Object(l.b)("p",null,"GraphQL services can be written in any language. Since we can't rely on a specific programming language syntax, like JavaScript, to talk about GraphQL schemas, we'll define our own simple language. We'll use the \"GraphQL schema language\" - it's similar to the query language, and allows us to talk about GraphQL schemas in a language-agnostic way."),Object(l.b)("h3",{id:"object-types-and-fields"},"Object types and fields"),Object(l.b)("p",null,"The most basic components of a GraphQL schema are object types, which just represent a kind of object you can fetch from your service, and what fields it has. In the GraphQL schema language, we might represent it like this:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"type Character \n{  \n    name: String!  \n    appearsIn: [Episode!]!\n}\n")),Object(l.b)("p",null,"The language is pretty readable, but let's go over it so that we can have a shared vocabulary:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"Character")," is a GraphQL Object Type, meaning it's a type with some fields. Most of the types in your schema will be object types")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"name")," and ",Object(l.b)("inlineCode",{parentName:"p"},"appearsIn")," are fields on the ",Object(l.b)("inlineCode",{parentName:"p"},"Character")," type. That means that ",Object(l.b)("inlineCode",{parentName:"p"},"name")," and ",Object(l.b)("inlineCode",{parentName:"p"},"appearsIn")," are the only fields that can appear in any part of a GraphQL query that operates on the ",Object(l.b)("inlineCode",{parentName:"p"},"Character")," type.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"String")," is one of the built-in scalar types - these are types that resolve to a single scalar object, and can't have sub-selections in the query. We'll go over scalar types more later.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"String!")," means that the field is non-nullable, meaning that the GraphQL service promises to always give you a value when you query this field. In the type language, we'll represent those with an exclamation mark.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"[Episode!]!")," represents an array of Episode objects. Since it is also non-nullable, you can always expect an array (with zero or more items) when you query the appearsIn field. And since Episode! is also non-nullable, you can always expect every item of the array to be an Episode object."))),Object(l.b)("p",null,"Now you know what a GraphQL object type looks like, and how to read the basics of the GraphQL type language."),Object(l.b)("h3",{id:"arguments"},"Arguments"),Object(l.b)("p",null,"Every field on a GraphQL object type can have zero or more arguments, for example the length field below:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"type Starship {  \n    id: ID!  \n    name: String!  \n    length(unit: LengthUnit = METER): Float\n}\n")),Object(l.b)("p",null,"All arguments are named. Unlike languages like JavaScript and Python where functions take a list of ordered arguments, all arguments in GraphQL are passed by name specifically. In this case, the length field has one defined argument, unit."),Object(l.b)("p",null,"Arguments can be either required or optional. When an argument is optional, we can define a default value - if the unit argument is not passed, it will be set to METER by default."),Object(l.b)("h3",{id:"the-query-and-mutation-types"},"The Query and Mutation types"),Object(l.b)("p",null,"Most types in your schema will just be normal object types, but there are two types that are special within a schema:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"schema {  \n    query: Query  \n    mutation: Mutation\n}\n")),Object(l.b)("p",null,"Every GraphQL service has a query type and may or may not have a mutation type. These types are the same as a regular object type, but they are special because they define the entry point of every GraphQL query. So if you see a query that looks like:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},'query {\n    hero {\n      name\n    }\n    droid(id: "2000") {\n      name\n    }\n}\n')),Object(l.b)("p",null,"Result:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "hero": {\n      "name": "R2-D2"\n    },\n    "droid": {\n      "name": "C-3PO"\n    }\n  }\n}\n')),Object(l.b)("p",null,"That means that the GraphQL service needs to have a Query type with hero and droid fields"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"type Query {\n  hero(episode: Episode): Character\n  droid(id: ID!): Droid\n}\n")),Object(l.b)("p",null,"Mutations work in a similar way - you define fields on the Mutation type, and those are available as the root mutation fields you can call in your query."),Object(l.b)("p",null,'It\'s important to remember that other than the special status of being the "entry point" into the schema, the',Object(l.b)("inlineCode",{parentName:"p"},"Query"),"and",Object(l.b)("inlineCode",{parentName:"p"},"Mutation"),"types are the same as any other GraphQL object type, and their fields work exactly the same way."),Object(l.b)("h3",{id:"scalar-types"},"Scalar types"),Object(l.b)("p",null,"A GraphQL object type has a name and fields, but at some point those fields have to resolve to some concrete data. That's where the scalar types come in: they represent the leaves of the query."),Object(l.b)("p",null,"In the following query, the name and appearsIn fields will resolve to scalar types:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"  {\n    hero {\n      name\n      appearsIn\n    }\n  }\n")),Object(l.b)("p",null,"Result:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{{\n   "data": {\n     "hero": {\n       "name": "R2-D2",\n       "appearsIn": [\n         "NEWHOPE",\n         "EMPIRE",\n         "JEDI"\n       ]\n     }\n   }\n }\n')),Object(l.b)("p",null,"We know this because those fields don't have any sub-fields - they are the leaves of the query."),Object(l.b)("p",null,"GraphQL comes with a set of default scalar types out of the box:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Int"),": A signed 32\u2010bit integer."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Float"),": A signed double-precision floating-point value."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"String"),": A UTF\u20108 character sequence."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Boolean"),": ","`","true","`"," or ","`","false","`"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"ID"),": The ID scalar type represents a unique identifier, often used to refetch an object or as the key for a cache. The ID type is serialized in the same way as a String; however, defining it as an ","`","ID","`"," signifies that it is not intended to be human\u2010readable.")),Object(l.b)("p",null,"In most GraphQL service implementations, there is also a way to specify custom scalar types. For example, we could define a Date type:"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"scalar Date")),Object(l.b)("p",null,"Then it's up to our implementation to define how that type should be serialized, deserialized, and validated. For example, you could specify that the Date type should always be serialized into an integer timestamp, and your client should know to expect that format for any date fields."),Object(l.b)("h3",{id:"enumeration-types"},"Enumeration types"),Object(l.b)("p",null,"Also called Enums, enumeration types are a special kind of scalar that is restricted to a particular set of allowed values. This allows you to:"),Object(l.b)("p",null,"Validate that any arguments of this type are one of the allowed values Communicate through the type system that a field will always be one of a finite set of values Here's what an enum definition might look like in the GraphQL schema language:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"enum Episode {  \n    NEWHOPE  \n    EMPIRE  \n    JEDI\n}\n")),Object(l.b)("p",null,"This means that wherever we use the type",Object(l.b)("inlineCode",{parentName:"p"},"Episode"),"in our schema, we expect it to be exactly one of",Object(l.b)("inlineCode",{parentName:"p"},"NEWHOPE"),",",Object(l.b)("inlineCode",{parentName:"p"},"EMPIRE"),", or",Object(l.b)("inlineCode",{parentName:"p"},"JEDI"),"."),Object(l.b)("p",null,"Note that GraphQL service implementations in various languages will have their own language-specific way to deal with enums. In languages that support enums as a first-class citizen, the implementation might take advantage of that; in a language like JavaScript with no enum support, these values might be internally mapped to a set of integers. However, these details don't leak out to the client, which can operate entirely in terms of the string names of the enum values."),Object(l.b)("h3",{id:"lists-and-non-null"},"Lists and Non-Null"),Object(l.b)("p",null,"Object types, scalars, and enums are the only kinds of types you can define in GraphQL. But when you use the types in other parts of the schema, or in your query variable declarations, you can apply additional type modifiers that affect validation of those values. Let's look at an example:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"type Character {\n  name: String!\n  appearsIn: [Episode]!\n}\n")),Object(l.b)("p",null,"Here, we're using a String type and marking it as Non-Null by adding an exclamation mark, ! after the type name. This means that our server always expects to return a non-null value for this field, and if it ends up getting a null value that will actually trigger a GraphQL execution error, letting the client know that something has gone wrong."),Object(l.b)("p",null,"The Non-Null type modifier can also be used when defining arguments for a field, which will cause the GraphQL server to return a validation error if a null value is passed as that argument, whether in the GraphQL string or in the variables."))}p.isMDXComponent=!0},135:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),b=n,d=u["".concat(i,".").concat(b)]||u[b]||h[b]||l;return a?r.a.createElement(d,o(o({ref:t},c),{},{components:a})):r.a.createElement(d,o({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);