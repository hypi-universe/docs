(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var a=n(3),i=n(8),r=(n(0),n(190)),l=n(194),s=n(195),o={id:"hypi-directives",title:"Hypi Directives",sidebar_label:"Hypi Directives",slug:"/hypi-directives"},c={unversionedId:"hypi-directives",id:"hypi-directives",isDocsHomePage:!1,title:"Hypi Directives",description:"A directive allows you to customise the behaviour of your data model. Hypi's built-in directives allow you to tell Hypi how to interact with your fields. For example, if you want to have some customisation like checking the lengths of String or Array fields or applying past and future date settings, you may do so using the directives provided by Hypi.",source:"@site/content/hypi-directives.md",slug:"/hypi-directives",permalink:"/docs/hypi-directives",editUrl:"https://github.com/hypi-universe/docs/edit/master/content/hypi-directives.md",version:"current",sidebar_label:"Hypi Directives",sidebar:"docs",previous:{title:"Maths APIs",permalink:"/docs/maths-api"},next:{title:"User Defined Functions",permalink:"/docs/user-defined-function"}},p=[{value:"What is a directive",id:"what-is-a-directive",children:[]},{value:"Built-in directives",id:"built-in-directives",children:[{value:"@length",id:"length",children:[]},{value:"@notEmpty",id:"notempty",children:[]},{value:"@unique",id:"unique",children:[]},{value:"@past",id:"past",children:[]},{value:"@future",id:"future",children:[]},{value:"@pattern",id:"pattern",children:[]},{value:"@email",id:"email",children:[]},{value:"@computed",id:"computed",children:[]},{value:"@noinput / @nomath / @noagg / @notable",id:"noinput--nomath--noagg--notable",children:[]},{value:"@http",id:"http",children:[]},{value:"@tan",id:"tan",children:[]},{value:"@indices",id:"indices",children:[]},{value:"@secret",id:"secret",children:[]},{value:"@deprecated",id:"deprecated",children:[]},{value:"@skip",id:"skip",children:[]},{value:"@include",id:"include",children:[]},{value:"@specifiedBy",id:"specifiedby",children:[]}]}],d={toc:p};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"A ",Object(r.b)("inlineCode",{parentName:"p"},"directive")," allows you to customise the behaviour of your data model. Hypi's built-in directives allow you to tell Hypi how to interact with your fields. For example, if you want to have some customisation like checking the lengths of String or Array fields or applying past and future date settings, you may do so using the directives provided by Hypi."),Object(r.b)("h2",{id:"what-is-a-directive"},"What is a directive"),Object(r.b)("p",null,"An ",Object(r.b)("inlineCode",{parentName:"p"},"@")," character followed by a series of characters identifies a directive. It is optionally followed by a list of named arguments, which can appear after almost any form of syntax in the GraphQL query or schema languages."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"strl: String @length(min: 1, max: 5)")),Object(r.b)("p",null,"Here, @length is the directive applied on the string field strl. ",Object(r.b)("inlineCode",{parentName:"p"},"min")," and ",Object(r.b)("inlineCode",{parentName:"p"},"max")," are the arguments that set the conditions to execute the directive."),Object(r.b)("p",null,"Below is the schema built using some of the built-in directives."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'type Message {    \n    #@length directive\n    strl: String @length(min: 3, max: 5)\n    strl1: String @length(min: 1, max: 5)\n    strl2: String @length(min: 1, max: 5)\n    args: [String] @length(min: 1, max: 5)\n    #@notEmpty directive\n    notEmpty: String @notEmpty \n    #@uniqueVal directive\n    uniqueVal: String @unique\n    #@past and @future directive\n    past: DateTime @past\n    future: DateTime @future\n    #@pattern directive\n    pattern: String @pattern(regex: ["^test.*$"])\n    pattern1: String @pattern(regex: ["^test.*$", "^pass.*$"], \n              allMustMatch: true)\n    pattern2: String @pattern(regex: ["^test.*$", "^pass.*$"], \n              allMustMatch: false)\n    #@email directive\n    email: String @email\n    email1: String @email\n    email2: String @email\n    #@indices directive\n    type CheckIndex @indices(sets:[  \n        #hypi:idx:name: index_name\n        ["name"],\n        #hypi:idx:name: index_age_id\n        ["age","id"]               \n    ]){\n        name: String      \n        age: Int\n        id: Int\n    }\n    #@secret directive\n    sha: String @secret(hash: SHA3) #adslkjkjwdksjcfjskdjh\n    bcrypt: String @secret(hash: BCRYPT) #lkdfjfeijewkllkjwekjf\n     #hello world => dlfjdlkjfejlsldkjfkldnmksjklfjkewjnfk\n     #dlfjdlkjfejlsldkjfkldnmksjklfjkewjnfk => hello world\n    pkcs5: String @secret(hash: PKCS5)\n\n}\n\ntype Post {\n  #@computed directive\n  title: String\n  postCreated: DateTime @computed(query: "hypi.id = \'${self.hypi.id}\'", \n               type: "Post", postQueryFn: "res[0].hypi.created")\n  augmentedTitle: String @computed(postQueryFn: \n               """self.title + " computed" """)\n  date: DateTime @computed(postQueryFn:\n               "import java.time.ZonedDateTime; return ZonedDateTime.now()")\n  combine: String @computed(postQueryFn: \n               """self.hypi.id + ":" + self.title """)\n}\n\n#Directives to stop generation of tables\ntype AWithNoDirs @noagg @notable @noinput @nomath {\n    f1: String\n}\n')),Object(r.b)("h2",{id:"built-in-directives"},"Built-in directives"),Object(r.b)("p",null,"Let\u2019s look at Hypi's built-in directives one by one. You may refer to the schema above for reference. The examples given for using the directives are self-explanatory. You may disable a directive by adding #\nin front of it."),Object(r.b)("h3",{id:"length"},"@length"),Object(r.b)("p",null,"This directive is valid on String, Object and, Array fields. You may check if the string length or array length matches the range. You may also check if the object's list of non-null fields matches the range. But it doesn\u2019t validate existing data. It just validates the length. It returns an error if the string length or an array length goes beyond specified limits."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"strl:\xa0String@length(min:\xa03,\xa0max:\xa05)")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"A whitespace also gets added as an additional character while calculating the length of the string."))),Object(r.b)(l.a,{defaultValue:"query",values:[{label:"GraphQL Query",value:"query"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(r.b)(s.a,{value:"query",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'mutation {\n  upsert(\n    values: {\n      Message: {\n        strl: "12"\n        strl1: "123456"\n        strl2: " "\n        args: ["1", "2", "3", "4", "5", "6"]\n      }\n    }\n  ) {\n    id\n  }\n}\n'))),Object(r.b)(s.a,{value:"response",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'{\n  "data": {\n    "upsert": [\n      {\n        "id": "01F324CHF82B7F7EE89PMEBS3S"\n      }\n    ]\n  },\n  "errors": [\n    {\n      "message": "\'Message.strl\' requires at least 3, but is 2",\n      "extensions": {}\n    },\n    {\n      "message": "\'Message.strl1\' requires no more than 5, but is 6",\n      "extensions": {}\n    },\n    {\n      "message": "\'Message.args\' requires no more than 5, but is 6",\n      "extensions": {}\n    }\n  ]\n}\n')))),Object(r.b)("h3",{id:"notempty"},"@notEmpty"),Object(r.b)("p",null,"This directive returns an error message if the string or an array is empty or null. It also returns an error even if the string just has whitespaces."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"notEmpty: String @notEmpty ")),Object(r.b)(l.a,{defaultValue:"query",values:[{label:"GraphQL Query",value:"query"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(r.b)(s.a,{value:"query",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'mutation {\n    upsert(values: {\n            Message: {\n                notEmpty:"  "\n            }\n        }\n    ) {\n        id\n    }\n}\n'))),Object(r.b)(s.a,{value:"response",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "upsert": [\n      {\n        "id": "01F3251ZK45XDMPAT0CDZDXM5E"\n      }\n    ]\n  },\n  "errors": [\n    {\n      "message": "\'Message.notEmpty\' is required, it cannot be null, empty or contain only spaces.",\n      "extensions": {}\n    },\n  ]\n}\n')))),Object(r.b)("h3",{id:"unique"},"@unique"),Object(r.b)("p",null,"Adding this directive to any keyword indexed field ensures that no duplicates can be inserted for that field. For example, let\u2019s say the value ",Object(r.b)("inlineCode",{parentName:"p"},"1")," has been added for a field ",Object(r.b)("inlineCode",{parentName:"p"},"uniqueVal")," while creating an object. While creating another object, again upserting the same value in the same field would result in an error."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"uniqueVal:\xa0String@unique")),Object(r.b)(l.a,{defaultValue:"query",values:[{label:"GraphQL Query",value:"query"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(r.b)(s.a,{value:"query",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'mutation {\n    upsert(values: {\n            Message: {\n                uniqueVal:"1"\n            }\n        }\n    ) {\n        id\n    }\n}\n'))),Object(r.b)(s.a,{value:"response",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'{\n  "data": {\n    "upsert": [\n      {\n        "id": "01F3259Z0D1P58SE7MK00JA8M8"\n      }\n    ]\n  },\n  "errors": [\n    {\n      "message": "\'Message.uniqueVal\' already exists with a value of 1",\n      "extensions": {}\n    }\n  ]\n}\n\n')))),Object(r.b)("h3",{id:"past"},"@past"),Object(r.b)("p",null,"This directive checks if a date specified in a \u2018DateTime\u2019 field is a past date. If it is not, it returns an error. The format accepted by the field is ISO 8601 standard \u2013 UTC date format."),Object(r.b)("h3",{id:"future"},"@future"),Object(r.b)("p",null,"This directive checks if a date specified in a \u2018DateTime\u2019 field is a future date. If it is not, it returns an error. Te format accepted by the field is ISO 8601 standard \u2013 UTC date format."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"past:\xa0DateTime@past")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"future:\xa0DateTime@future")),Object(r.b)("p",null,"Example of @past and @future directives:"),Object(r.b)(l.a,{defaultValue:"query",values:[{label:"GraphQL Query",value:"query"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(r.b)(s.a,{value:"query",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'mutation {\n    upsert(values: {\n            Message: {\n              past:"2021-08-12T04:19:02Z",\n              future:"2021-03-12T04:19:02Z"\n            }\n        }\n    ) {\n        id\n    }\n}\n'))),Object(r.b)(s.a,{value:"response",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'{\n  "data": {\n    "upsert": [\n      {\n        "id": "01F325PCNG6GHFH60BWCQ9GWBK"\n      }\n    ]\n  },\n  "errors": [\n    {\n      "message": "\'2021-08-12T04:19:02Z\' at \'Message.past\' is required to be in the past but was \'2021-08-12T04:19:02.000Z\'",\n      "extensions": {}\n    },\n    {\n      "message": "\'2021-03-12T04:19:02Z\' at \'Message.future\' is required to be in the future but was \'2021-03-12T04:19:02.000Z\'",\n      "extensions": {}\n    }\n  ]\n}\n\n')))),Object(r.b)("h3",{id:"pattern"},"@pattern"),Object(r.b)("p",null,"This directive checks if the field's value matches the given regular expression (regex). It takes regex values within brackets as an input. There is another Boolean parameter ",Object(r.b)("inlineCode",{parentName:"p"},"allMustMatch")," that defaults to false. If it is \u2018true\u2019 it means the value in the field must match both the regular expressions in the bracket (AND condition). If it is false, the field value may match with any of the two expressions(OR condition)."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},'pattern:\xa0String @pattern(regex:\xa0["^test.*$"])')),Object(r.b)("p",null,"Check the guideline for framing Regex: ",Object(r.b)("a",{parentName:"p",href:"https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html"},"https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html")),Object(r.b)(l.a,{defaultValue:"query",values:[{label:"GraphQL Query",value:"query"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(r.b)(s.a,{value:"query",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'mutation {\n    upsert(values: {\n            Message: {\n              pattern:"alpha",\n              pattern1:"beta",\n              pattern2:"gamma"\n            }\n        }\n    ) {\n        id\n    }\n}\n'))),Object(r.b)(s.a,{value:"response",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "upsert": [\n      {\n        "id": "01F327DG971E3XS601CRW46H5V"\n      }\n    ]\n  },\n  "errors": [\n    {\n      "message": "Invalid value \'alpha\'. Does not match patterns \'^test.*$\' from the list of required patterns ^test.*$. All of which must match",\n      "extensions": {}\n    },\n    {\n      "message": "Invalid value \'beta\'. Does not match patterns \'^test.*$\' from the list of required patterns ^test.*$ AND ^pass.*$. All of which must match",\n      "extensions": {}\n    },\n    {\n      "message": "Invalid value \'gamma\'. Does not match patterns \'^test.*$ OR ^pass.*$\' from the list of possible patterns ^test.*$ OR ^pass.*$. ",\n      "extensions": {}\n    }\n  ]\n}\n\n')))),Object(r.b)("h3",{id:"email"},"@email"),Object(r.b)("p",null,"This directive checks if the field's value is a valid email address."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"email: String @email")),Object(r.b)(l.a,{defaultValue:"query",values:[{label:"GraphQL Query",value:"query"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(r.b)(s.a,{value:"query",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'mutation {\n    upsert(values: {\n            Message: {\n              email:"abc",\n              email1:"abc@xyz"\n              email2:"abc@xyz.com"\n            }\n        }\n    ) {\n        id\n    }\n}\n\n'))),Object(r.b)(s.a,{value:"response",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "upsert": [\n      {\n        "id": "01F325W516QW7F6G4CGS33KW7S"\n      }\n    ]\n  },\n  "errors": [\n    {\n      "message": "\'abc\' is not a valid email address",\n      "extensions": {}\n    },\n    {\n      "message": "\'abc@xyz\' is not a valid email address",\n      "extensions": {}\n    }\n  ]\n}\n')))),Object(r.b)("h3",{id:"computed"},"@computed"),Object(r.b)("p",null,"This directive allows the value of a field to be calculated using an ArcQL query. You may also use a groovy-like function to combine the values in the fields. You may combine string or date values to match your requirements. "),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},'combine:\xa0String@computed(postQueryFn:\xa0"""self.hypi.id\xa0+\xa0":"\xa0+\xa0self.title\xa0""")')),Object(r.b)(l.a,{defaultValue:"query",values:[{label:"GraphQL Query",value:"query"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(r.b)(s.a,{value:"query",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'{\n  find(type: Post, arcql: "*") {\n    edges {\n      node {\n        ... on Post {\n           title\n           postCreated\n           augmentedTitle\n           date\n           combine\n        }\n      }\n      cursor\n    }\n  }\n}\n'))),Object(r.b)(s.a,{value:"response",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "find": {\n      "edges": [\n        {\n          "node": {\n            "title": " Hi There!",  # Upserted value of title\n            "postCreated": "2021-04-12T05:23:37Z",\n            "augmentedTitle": " Hi There! computed",\n            "date": "2021-04-12T05:25:10.922219Z",\n            "combine": "01F328J1B9BFMVBY8G63R6KXWS: Hi There!"\n          },\n          "cursor": "01F328J1B9BFMVBY8G63R6KXWS"\n        }\n      ]\n    }\n  }\n}\n')))),Object(r.b)("h3",{id:"noinput--nomath--noagg--notable"},"@noinput / @nomath / @noagg / @notable"),Object(r.b)("p",null,"Hypi automatically generates certain data types when you declare a type. These generated types are used to implement functionalities like CRUD, Aggregations, Maths functions, etc."),Object(r.b)("p",null,"Let\u2019s say you declared the following data type."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"type AWithNoDirs\xa0{\n    f1:\xa0String\n}\n")),Object(r.b)("p",null,"When you save the schema, the following tables will be automatically generated."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"AWithNoDirs\nAWithNoDirsInputOpt\nAWithNoDirsAggs\nAWithNoDirsGroupByOptions\nAWithNoDirsInput\nHypiUpsertInputUnion.AWithNoDirs: [AWithNoDirsInputOpt!]\n")),Object(r.b)("p",null,"You may check the details of these types under the documentation on the Hypi platform."),Object(r.b)("p",null,"Now, declare the same data type like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"type AWithNoDirs @noagg @notable @noinput @nomath\xa0{\n    f1:\xa0String\n}\n")),Object(r.b)("p",null,"When you save the above data type, only the ",Object(r.b)("inlineCode",{parentName:"p"},"AWithNoDirs")," table will get generated. Other tables will not be generated and the user will not be able to perform associated functions."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"@noinput")," tells Hypi not to generate an input type for this type. This prevents objects of this type from being used in upsert and other functions. So, you will not be able to perform mutations on this data type."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"@notable")," tells Hypi not to generate a table for the type it is attached to (",Object(r.b)("inlineCode",{parentName:"p"},"AWithNoDirs")," here). Instead, the user will use a serverless function or some other method to produce objects of this type. So, you will not be able to create objects of this type."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"@noagg")," tells Hypi not to generate aggregation fields for the type it is attached to. So you will not be able to perform aggregation functions on  ",Object(r.b)("inlineCode",{parentName:"p"},"AWithNoDirs")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"@nomath")," tells Hypi not to generate Maths fields for the type it is attached to. So you will not be able to perform Mathematical functions on  ",Object(r.b)("inlineCode",{parentName:"p"},"AWithNoDirs")),Object(r.b)("h3",{id:"http"},"@http"),Object(r.b)("p",null,"When this directive is applied, the value of the applied field gets resolved using an HTTP query configured with the given parameters. (See more about @http directive ",Object(r.b)("a",{parentName:"p",href:"/docs/apigateway#http-directive"},"here"),")"),Object(r.b)("h3",{id:"tan"},"@tan"),Object(r.b)("p",null,"This directive is used to implement serverless functions. (See more about @tan directive ",Object(r.b)("a",{parentName:"p",href:"/docs/use-serverless#tan-directive"},"here"),")"),Object(r.b)("h3",{id:"indices"},"@indices"),Object(r.b)("p",null,"In relational databases like SQL server, Oracle, MySQL or Postgres, you can create a data structure in the database that allows it to perform query on your fields in a performant way. So if you know that you won\u2019t be able to query your data using ",Object(r.b)("inlineCode",{parentName:"p"},"hypi.id")," then it is a good idea to create an index on the fields that you will use to query - otherwise your queries will get slower and slower as the amount of data grows."),Object(r.b)("p",null,"In the following example, an index is created on the",Object(r.b)("inlineCode",{parentName:"p"},"path"),"\xa0 field because it will be used for queries instead of",Object(r.b)("inlineCode",{parentName:"p"},"hypi.id"),".\xa0 "),Object(r.b)("p",null,"You can create one or more indices on one or more fields.  "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'@indices (sets: [  \n  #hypi:idx:name: index_path\n  ["path"],\n  #hypi:idx:name: index_host_port\n  ["host","port"]  \n])\n')),Object(r.b)("p",null,"This example create two indices, one on path and a composite index on both ",Object(r.b)("inlineCode",{parentName:"p"},"host")," and ",Object(r.b)("inlineCode",{parentName:"p"},"port"),". It allows performant queries on ",Object(r.b)("inlineCode",{parentName:"p"},"path")," by itself i.e. ",Object(r.b)("inlineCode",{parentName:"p"},"path = '/abc'")," or on the host and port ",Object(r.b)("inlineCode",{parentName:"p"},"host = 'hypi.io' AND port > 79")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"#hypi:idx:name:"),"\xa0 is a special comment available on each index definition. It allows the user to specify the name of the index. In the above example, ",Object(r.b)("inlineCode",{parentName:"p"},"index_path")," is the name of the index on the field ",Object(r.b)("inlineCode",{parentName:"p"},"path")," and ",Object(r.b)("inlineCode",{parentName:"p"},"index_host_port")," is the name of the index on fields ",Object(r.b)("inlineCode",{parentName:"p"},"host")," and ",Object(r.b)("inlineCode",{parentName:"p"},"port"),"."),Object(r.b)("p",null,"Naming an Index is completely optional. It is useful if you try to create an index on lots of fields. In this case Hypi can generate an index name that is too long. There is a limit of 256 characters for an index's name which would result in an error when publishing your release."),Object(r.b)("p",null,"In the ",Object(r.b)("inlineCode",{parentName:"p"},"CheckIndex")," data type declared in the schema, ",Object(r.b)("inlineCode",{parentName:"p"},"name")," and ",Object(r.b)("inlineCode",{parentName:"p"},"[age,id]")," are the indices. "),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"#hypi:idx:name:"),"\xa0 tells Hypi to give the indices suitable names. ( ",Object(r.b)("inlineCode",{parentName:"p"},"index_name"),", ",Object(r.b)("inlineCode",{parentName:"p"},"index_age_id"),"\xa0 in this example)"),Object(r.b)("p",null,"You may query the data using the 'find' function with arql query. The query will remain the same, but performance will be maintained as the data grows."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'{\n  find(type: CheckIndex, arcql: "age = 17 AND id = 1") {\n    edges {\n      node {\n        ... on CheckIndex {\n          name\n          age\n          id\n        }\n      }\n      cursor\n    }\n  }\n}\n')),Object(r.b)("h3",{id:"secret"},"@secret"),Object(r.b)("p",null,"Fields annotated with the",Object(r.b)("inlineCode",{parentName:"p"},"@secret"),"directive are encrypted using one of the three algorithms. "),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"SHA3 "),Object(r.b)("li",{parentName:"ol"},"BCRYPT "),Object(r.b)("li",{parentName:"ol"},"PKCS5. ")),Object(r.b)("p",null,"Hence, the values of these fields do not remain in a human-readable format. Out of the three algorithms, the encrypted values of SHA3 and BCRYPT can never be retrieved back. You can only run queries if the values match. These encryptions are good for password fields. However, PKCS5 values may be decrypted when necessary."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"sha:\xa0String@secret(hash:\xa0SHA3)")),Object(r.b)("h3",{id:"deprecated"},"@deprecated"),Object(r.b)("p",null,"Deprecated fields on a type or Enum values can be marked as deprecated in the Schema using the ",Object(r.b)("inlineCode",{parentName:"p"},"@deprecated")," directive. A ",Object(r.b)("inlineCode",{parentName:"p"},"reason")," for deprecation has to be included. The reason is formatted using Markdown syntax."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'directive @deprecated(\n      reason: String = "No longer supported"\n) on FIELD_DEFINITION | ENUM_VALUE\n')),Object(r.b)("p",null,"In the below example, the ",Object(r.b)("inlineCode",{parentName:"p"},"someTest")," field has been marked as deprecated. If you use the field within a query in the ",Object(r.b)("a",{parentName:"p",href:"/docs/ui-gql-playground"},"GraphQL editor"),", it highlights the field with a popped up message with the reason for deprecation."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'type checkSkip{\n    someTest:\xa0Boolean@deprecated(reason:\xa0"Use\xa0`check`.")\n    check:\xa0String\n}\n')),Object(r.b)("h3",{id:"skip"},"@skip"),Object(r.b)("p",null,"The",Object(r.b)("inlineCode",{parentName:"p"},"@skip"),"directive may be used for fields, fragment spreads, and inline fragments, and allows for conditional exclusion during execution of a ",Object(r.b)("inlineCode",{parentName:"p"},"query")," as described by the ",Object(r.b)("inlineCode",{parentName:"p"},"if")," argument. Please note this directive is used while executing query in GraphQL editor and not in the schema editor like other directives."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"directive @skip(if: Boolean!) on FIELD | FRAGMENT_SPREAD | INLINE_FRAGMENT\n")),Object(r.b)("p",null,"In the below example, ",Object(r.b)("inlineCode",{parentName:"p"},"check")," field will only be queried if the variable",Object(r.b)("inlineCode",{parentName:"p"},"$someTest"),"has the value ",Object(r.b)("inlineCode",{parentName:"p"},"false"),". If the value is ",Object(r.b)("inlineCode",{parentName:"p"},"true"),", the field will be skipped from the query execution."),Object(r.b)(l.a,{defaultValue:"query",values:[{label:"GraphQL Query",value:"query"},{label:"Input Data",value:"data"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(r.b)(s.a,{value:"query",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'query($someTest: Boolean!){\n  find(type: checkSkip, arcql: "*") {\n    edges {\n      node {\n        ... on checkSkip {\n          check @skip(if:$someTest)\n        }\n      }\n      cursor\n    }\n  }\n}\n'))),Object(r.b)(s.a,{value:"data",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'{\n  "someTest": true\n}\nOR\n{\n  "someTest": false\n}\n'))),Object(r.b)(s.a,{value:"response",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'#someTest = true\n{\n  "data": {\n    "find": {\n      "edges": [\n        {\n          "node": {},\n          "cursor": "01F46X1DC10TFB9ZT2EKGGK51H"\n        }\n      ]\n    }\n  }\n}\n#someTest = false\n{\n  "data": {\n    "find": {\n      "edges": [\n        {\n          "node": {\n            "check": "abc"\n          },\n          "cursor": "01F46X1DC10TFB9ZT2EKGGK51H"\n        }\n      ]\n    }\n  }\n}\n')))),Object(r.b)("h3",{id:"include"},"@include"),Object(r.b)("p",null,"Similar to the @skip directive, The",Object(r.b)("inlineCode",{parentName:"p"},"@include"),"directive may be used for fields, fragment spreads, and inline fragments. It allows conditional inclusion during the execution of a ",Object(r.b)("inlineCode",{parentName:"p"},"query")," as described by the ",Object(r.b)("inlineCode",{parentName:"p"},"if")," argument. "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"}," directive @include(if: Boolean!) on FIELD | FRAGMENT_SPREAD | INLINE_FRAGMENT\n")),Object(r.b)("p",null,"In the below example, ",Object(r.b)("inlineCode",{parentName:"p"},"check")," field will only be queried if the variable",Object(r.b)("inlineCode",{parentName:"p"},"$someTest"),"has the value ",Object(r.b)("inlineCode",{parentName:"p"},"true"),". If the value is ",Object(r.b)("inlineCode",{parentName:"p"},"false"),", the field will not be included in the query execution."),Object(r.b)(l.a,{defaultValue:"query",values:[{label:"GraphQL Query",value:"query"},{label:"Input Data",value:"data"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(r.b)(s.a,{value:"query",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'query($someTest: Boolean!){\n  find(type: checkSkip, arcql: "*") {\n    edges {\n      node {\n        ... on checkSkip {\n          check @include(if:$someTest)\n        }\n      }\n      cursor\n    }\n  }\n}\n'))),Object(r.b)(s.a,{value:"data",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'{\n  "someTest": true\n}\nOR\n{\n  "someTest": false\n}\n'))),Object(r.b)(s.a,{value:"response",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'#someTest = true\n{\n  "data": {\n    "find": {\n      "edges": [\n        {\n          "node": {\n            "check": "abc"\n          },\n          "cursor": "01F46X1DC10TFB9ZT2EKGGK51H"\n        }\n      ]\n    }\n  }\n}\n#someTest = false\n{\n  "data": {\n    "find": {\n      "edges": [\n        {\n          "node": {},\n          "cursor": "01F46X1DC10TFB9ZT2EKGGK51H"\n        }\n      ]\n    }\n  }\n}\n')))),Object(r.b)("h3",{id:"specifiedby"},"@specifiedBy"),Object(r.b)("p",null,"Hypi does not support this directive at the moment."))}u.isMDXComponent=!0},190:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),b=a,m=d["".concat(l,".").concat(b)]||d[b]||u[b]||r;return n?i.a.createElement(m,s(s({ref:t},c),{},{components:n})):i.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=b;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<r;c++)l[c]=n[c];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},191:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}},192:function(e,t,n){"use strict";var a=n(0),i=n(193);t.a=function(){var e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},193:function(e,t,n){"use strict";var a=n(0),i=Object(a.createContext)(void 0);t.a=i},194:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(192),l=n(191),s=n(57),o=n.n(s);var c=37,p=39;t.a=function(e){var t=e.lazy,n=e.block,s=e.defaultValue,d=e.values,u=e.groupId,b=e.className,m=Object(r.a)(),h=m.tabGroupChoices,f=m.setTabGroupChoices,j=Object(a.useState)(s),y=j[0],g=j[1],v=a.Children.toArray(e.children),O=[];if(null!=u){var N=h[u];null!=N&&N!==y&&d.some((function(e){return e.value===N}))&&g(N)}var T=function(e){var t=e.target,n=O.indexOf(t),a=v[n].props.value;g(a),null!=u&&(f(u,a),setTimeout((function(){var e,n,a,i,r,l,s,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,i=e.bottom,r=e.right,l=window,s=l.innerHeight,c=l.innerWidth,n>=0&&r<=c&&i<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o.a.tabItemActive),setTimeout((function(){return t.classList.remove(o.a.tabItemActive)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case p:var a=O.indexOf(e.target)+1;n=O[a]||O[0];break;case c:var i=O.indexOf(e.target)-1;n=O[i]||O[O.length-1]}null===(t=n)||void 0===t||t.focus()};return i.a.createElement("div",{className:"tabs-container"},i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n},b)},d.map((function(e){var t=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:Object(l.a)("tabs__item",o.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:x,onFocus:T,onClick:T},n)}))),t?Object(a.cloneElement)(v.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},195:function(e,t,n){"use strict";var a=n(0),i=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return i.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}}}]);