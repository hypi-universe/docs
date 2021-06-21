---
id: hypi-directives
title: Hypi Directives
sidebar_label: Hypi Directives
slug: /hypi-directives
---

A `directive` allows you to customise the behaviour of your data model. Hypi's built-in directives allow you to tell Hypi how to interact with your fields. For example, if you want to have some customisation like checking the lengths of String or Array fields or applying past and future date settings, you may do so using the directives provided by Hypi.

## What is a directive

An `@` character followed by a series of characters identifies a directive. It is optionally followed by a list of named arguments, which can appear after almost any form of syntax in the GraphQL query or schema languages.

`strl: String @length(min: 1, max: 5)`

Here, @length is the directive applied on the string field strl. `min` and `max` are the arguments that set the conditions to execute the directive.

Below is the schema built using some of the built-in directives.

```java
type Message {    
    //@length directive
    strl: String @length(min: 3, max: 5)
    strl1: String @length(min: 1, max: 5)
    strl2: String @length(min: 1, max: 5)
    args: [String] @length(min: 1, max: 5)
    //@notEmpty directive
    notEmpty: String @notEmpty 
    //@uniqueVal directive
    uniqueVal: String @unique
    //@past and @future directive
    past: DateTime @past
    future: DateTime @future
    //@pattern directive
    pattern: String @pattern(regex: ["^test.*$"])
    pattern1: String @pattern(regex: ["^test.*$", "^pass.*$"], 
              allMustMatch: true)
    pattern2: String @pattern(regex: ["^test.*$", "^pass.*$"], 
              allMustMatch: false)
    //@email directive
    email: String @email
    email1: String @email
    email2: String @email
    //@indices directive
    type CheckIndex @indices(sets:[  
        #hypi:idx:name: index_name
        ["name"],
        #hypi:idx:name: index_age_id
        ["age","id"]               
    ]){
        name: String      
        age: Int
        id: Int
    }
    //@secret directive
    sha: String @secret(hash: SHA3) #adslkjkjwdksjcfjskdjh
    bcrypt: String @secret(hash: BCRYPT) #lkdfjfeijewkllkjwekjf
     #hello world => dlfjdlkjfejlsldkjfkldnmksjklfjkewjnfk
     #dlfjdlkjfejlsldkjfkldnmksjklfjkewjnfk => hello world
    pkcs5: String @secret(hash: PKCS5)

}

type Post {
  //@computed directive
  title: String
  postCreated: DateTime @computed(query: "hypi.id = '${self.hypi.id}'", 
               type: "Post", postQueryFn: "res[0].hypi.created")
  augmentedTitle: String @computed(postQueryFn: 
               """self.title + " computed" """)
  date: DateTime @computed(postQueryFn:
               "import java.time.ZonedDateTime; return ZonedDateTime.now()")
  combine: String @computed(postQueryFn: 
               """self.hypi.id + ":" + self.title """)
}

//Directives to stop generation of tables
type AWithNoDirs @noagg @notable @noinput @nomath {
    f1: String
}
```
## Built-in directives

Let’s look at Hypi's built-in directives one by one. You may refer to the schema above for reference. The examples given for using the directives are self-explanatory. You may disable a directive by adding #
in front of it.

### @length

This directive is valid on String, Object and, Array fields. You may check if the string length or array length matches the range. You may also check if the object's list of non-null fields matches the range. But it doesn’t validate existing data. It just validates the length. It returns an error if the string length or an array length goes beyond specified limits.

`strl: String@length(min: 3, max: 5)`

:::note

A whitespace also gets added as an additional character while calculating the length of the string.

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```java
mutation {
    upsert(values: {
            Message: {
            	strl:"12",
              strl1:"123456",
              strl2:" ",
              args:["1","2","3","4","5","6"]
            }
        }
    ) {
        id
    }
}
```

</TabItem>
<TabItem value="response">

```java
{
  "data": {
    "upsert": [
      {
        "id": "01F324CHF82B7F7EE89PMEBS3S"
      }
    ]
  },
  "errors": [
    {
      "message": "'Message.strl' requires at least 3, but is 2",
      "extensions": {}
    },
    {
      "message": "'Message.strl1' requires no more than 5, but is 6",
      "extensions": {}
    },
    {
      "message": "'Message.args' requires no more than 5, but is 6",
      "extensions": {}
    }
  ]
}
```

</TabItem>
</Tabs>

### @notEmpty

This directive returns an error message if the string or an array is empty or null. It also returns an error even if the string just has whitespaces.

`notEmpty: String @notEmpty `

<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```java
mutation {
    upsert(values: {
            Message: {
            	notEmpty:"  "
            }
        }
    ) {
        id
    }
}
```

</TabItem>
<TabItem value="response">

```json
{
  "data": {
    "upsert": [
      {
        "id": "01F3251ZK45XDMPAT0CDZDXM5E"
      }
    ]
  },
  "errors": [
    {
      "message": "'Message.notEmpty' is required, it cannot be null, empty or contain only spaces.",
      "extensions": {}
    },
  ]
}
```

</TabItem>
</Tabs>

### @unique

Adding this directive to any keyword indexed field ensures that no duplicates can be inserted for that field. For example, let’s say the value `1` has been added for a field `uniqueVal` while creating an object. While creating another object, again upserting the same value in the same field would result in an error.

`uniqueVal: String@unique`

<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```java
mutation {
    upsert(values: {
            Message: {
            	uniqueVal:"1"
            }
        }
    ) {
        id
    }
}
```

</TabItem>
<TabItem value="response">

```java
{
  "data": {
    "upsert": [
      {
        "id": "01F3259Z0D1P58SE7MK00JA8M8"
      }
    ]
  },
  "errors": [
    {
      "message": "'Message.uniqueVal' already exists with a value of 1",
      "extensions": {}
    }
  ]
}

```

</TabItem>
</Tabs>

### @past

This directive checks if a date specified in a ‘DateTime’ field is a past date. If it is not, it returns an error. The format accepted by the field is ISO 8601 standard – UTC date format.

### @future

This directive checks if a date specified in a ‘DateTime’ field is a future date. If it is not, it returns an error. Te format accepted by the field is ISO 8601 standard – UTC date format.

`past: DateTime@past`

`future: DateTime@future`

Example of @past and @future directives:

<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```java
mutation {
    upsert(values: {
            Message: {
              past:"2021-08-12T04:19:02Z",
              future:"2021-03-12T04:19:02Z"
            }
        }
    ) {
        id
    }
}
```

</TabItem>
<TabItem value="response">

```java
{
  "data": {
    "upsert": [
      {
        "id": "01F325PCNG6GHFH60BWCQ9GWBK"
      }
    ]
  },
  "errors": [
    {
      "message": "'2021-08-12T04:19:02Z' at 'Message.past' is required to be in the past but was '2021-08-12T04:19:02.000Z'",
      "extensions": {}
    },
    {
      "message": "'2021-03-12T04:19:02Z' at 'Message.future' is required to be in the future but was '2021-03-12T04:19:02.000Z'",
      "extensions": {}
    }
  ]
}

```

</TabItem>
</Tabs>

### @pattern

This directive checks if the field's value matches the given regular expression (regex). It takes regex values within brackets as an input. There is another Boolean parameter `allMustMatch` that defaults to false. If it is ‘true’ it means the value in the field must match both the regular expressions in the bracket (AND condition). If it is false, the field value may match with any of the two expressions(OR condition).

`pattern: String @pattern(regex: ["^test.*$"])`

Check the guideline for framing Regex: [https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html](https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html)

<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```java
mutation {
    upsert(values: {
            Message: {
              pattern:"alpha",
              pattern1:"beta",
              pattern2:"gamma"
            }
        }
    ) {
        id
    }
}
```

</TabItem>
<TabItem value="response">

```json
{
  "data": {
    "upsert": [
      {
        "id": "01F327DG971E3XS601CRW46H5V"
      }
    ]
  },
  "errors": [
    {
      "message": "Invalid value 'alpha'. Does not match patterns '^test.*$' from the list of required patterns ^test.*$. All of which must match",
      "extensions": {}
    },
    {
      "message": "Invalid value 'beta'. Does not match patterns '^test.*$' from the list of required patterns ^test.*$ AND ^pass.*$. All of which must match",
      "extensions": {}
    },
    {
      "message": "Invalid value 'gamma'. Does not match patterns '^test.*$ OR ^pass.*$' from the list of possible patterns ^test.*$ OR ^pass.*$. ",
      "extensions": {}
    }
  ]
}

```

</TabItem>
</Tabs>

### @email

This directive checks if the field's value is a valid email address.

`email: String @email`

<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```java
mutation {
    upsert(values: {
            Message: {
              email:"abc",
              email1:"abc@xyz"
              email2:"abc@xyz.com"
            }
        }
    ) {
        id
    }
}

```

</TabItem>
<TabItem value="response">

```json
{
  "data": {
    "upsert": [
      {
        "id": "01F325W516QW7F6G4CGS33KW7S"
      }
    ]
  },
  "errors": [
    {
      "message": "'abc' is not a valid email address",
      "extensions": {}
    },
    {
      "message": "'abc@xyz' is not a valid email address",
      "extensions": {}
    }
  ]
}
```
</TabItem>
</Tabs>

### @computed

This directive allows the value of a field to be calculated using an ArcQL query. You may also use a groovy-like function to combine the values in the fields. You may combine string or date values to match your requirements. 

`combine: String@computed(postQueryFn: """self.hypi.id + ":" + self.title """)`

<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```java
{
  find(type: Post, arcql: "*") {
    edges {
      node {
        ... on Post {
           title
           postCreated
           augmentedTitle
           date
           combine
        }
      }
      cursor
    }
  }
}
```

</TabItem>
<TabItem value="response">

```json
{
  "data": {
    "find": {
      "edges": [
        {
          "node": {
            "title": " Hi There!",  // Upserted value of title
            "postCreated": "2021-04-12T05:23:37Z",
            "augmentedTitle": " Hi There! computed",
            "date": "2021-04-12T05:25:10.922219Z",
            "combine": "01F328J1B9BFMVBY8G63R6KXWS: Hi There!"
          },
          "cursor": "01F328J1B9BFMVBY8G63R6KXWS"
        }
      ]
    }
  }
}
```

</TabItem>
</Tabs>

### @noinput / @nomath / @noagg / @notable

Hypi automatically generates certain data types when you declare a type. These generated types are used to implement functionalities like CRUD, Aggregations, Maths functions, etc.

Let’s say you declared the following data type.
```java
type AWithNoDirs {
    f1: String
}
```
When you save the schema, the following tables will be automatically generated.
```java
AWithNoDirs
AWithNoDirsInputOpt
AWithNoDirsAggs
AWithNoDirsGroupByOptions
AWithNoDirsInput
HypiUpsertInputUnion.AWithNoDirs: [AWithNoDirsInputOpt!]
```
You may check the details of these types under the documentation on the Hypi platform.

Now, declare the same data type like this:
```java
type AWithNoDirs @noagg @notable @noinput @nomath {
    f1: String
}
```
When you save the above data type, only the `AWithNoDirs` table will get generated. Other tables will not be generated and the user will not be able to perform associated functions.

`@noinput` tells Hypi not to generate an input type for this type. This prevents objects of this type from being used in upsert and other functions. So, you will not be able to perform mutations on this data type.

`@notable` tells Hypi not to generate a table for the type it is attached to (`AWithNoDirs` here). Instead, the user will use a serverless function or some other method to produce objects of this type. So, you will not be able to create objects of this type.

`@noagg` tells Hypi not to generate aggregation fields for the type it is attached to. So you will not be able to perform aggregation functions on  `AWithNoDirs`

`@nomath` tells Hypi not to generate Maths fields for the type it is attached to. So you will not be able to perform Mathematical functions on  `AWithNoDirs`

### @http

When this directive is applied, the value of the applied field gets resolved using an HTTP query configured with the given parameters. (See more about @http directive [here](apigateway.md#http-directive))

### @tan

This directive is used to implement serverless functions. (See more about @tan directive [here](use-serverless.md#tan-directive))

### @indices

In relational databases like SQL server, Oracle, MySQL or Postgres, you can create a data structure in the database that allows it to perform query on your fields in a performant way. So if you know that you won’t be able to query your data using `hypi.id` then it is a good idea to create an index on the fields that you will use to query - otherwise your queries will get slower and slower as the amount of data grows.

In the following example, an index is created on the`path`  field because it will be used for queries instead of`hypi.id`.  

You can create one or more indices on one or more fields.  

```
@indices (sets: [  
  #hypi:idx:name: index_path
  ["path"],
  #hypi:idx:name: index_host_port
  ["host","port"]  
])
```
This example create two indices, one on path and a composite index on both `host` and `port`. It allows performant queries on `path` by itself i.e. `path = '/abc'` or on the host and port `host = 'hypi.io' AND port > 79`

`#hypi:idx:name:`  is a special comment available on each index definition. It allows the user to specify the name of the index. In the above example, `index_path` is the name of the index on the field `path` and `index_host_port` is the name of the index on fields `host` and `port`.

Naming an Index is completely optional. It is useful if you try to create an index on lots of fields. In this case Hypi can generate an index name that is too long. There is a limit of 256 characters for an index's name which would result in an error when publishing your release.

In the `CheckIndex` data type declared in the schema, `name` and `[age,id]` are the indices. 

`#hypi:idx:name:`  tells Hypi to give the indices suitable names. ( `index_name`, `index_age_id`  in this example)

You may query the data using the 'find' function with arql query. The query will remain the same, but performance will be maintained as the data grows.

```java
{
  find(type: CheckIndex, arcql: "age = 17 AND id = 1") {
    edges {
      node {
        ... on CheckIndex {
          name
          age
          id
        }
      }
      cursor
    }
  }
}
```

### @secret

Fields annotated with the`@secret`directive are encrypted using one of the three algorithms. 

1. SHA3 
2. BCRYPT 
3. PKCS5. 

Hence, the values of these fields do not remain in a human-readable format. Out of the three algorithms, the encrypted values of SHA3 and BCRYPT can never be retrieved back. You can only run queries if the values match. These encryptions are good for password fields. However, PKCS5 values may be decrypted when necessary.

`sha: String@secret(hash: SHA3)`

### @deprecated

Deprecated fields on a type or Enum values can be marked as deprecated in the Schema using the `@deprecated` directive. A `reason` for deprecation has to be included. The reason is formatted using Markdown syntax.
```
directive @deprecated(
      reason: String = "No longer supported"
) on FIELD_DEFINITION | ENUM_VALUE
```
In the below example, the `someTest` field has been marked as deprecated. If you use the field within a query in the [GraphQL editor](ui-gql-playground.md), it highlights the field with a popped up message with the reason for deprecation.

```java
type checkSkip{
    someTest: Boolean@deprecated(reason: "Use `check`.")
    check: String
}
```

###  @skip

The`@skip`directive may be used for fields, fragment spreads, and inline fragments, and allows for conditional exclusion during execution of a `query` as described by the `if` argument. Please note this directive is used while executing query in GraphQL editor and not in the schema editor like other directives.

```
directive @skip(if: Boolean!) on FIELD | FRAGMENT_SPREAD | INLINE_FRAGMENT
```   
In the below example, `check` field will only be queried if the variable`$someTest`has the value `false`. If the value is `true`, the field will be skipped from the query execution.

<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Input Data', value: 'data'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```java
query($someTest: Boolean!){
  find(type: checkSkip, arcql: "*") {
    edges {
      node {
        ... on checkSkip {
          check @skip(if:$someTest)
        }
      }
      cursor
    }
  }
}
```

</TabItem>
<TabItem value="data">

```
{
  "someTest": true
}
OR
{
  "someTest": false
}
```

</TabItem>
<TabItem value="response">

```json
//someTest = true
{
  "data": {
    "find": {
      "edges": [
        {
          "node": {},
          "cursor": "01F46X1DC10TFB9ZT2EKGGK51H"
        }
      ]
    }
  }
}
//someTest = false
{
  "data": {
    "find": {
      "edges": [
        {
          "node": {
            "check": "abc"
          },
          "cursor": "01F46X1DC10TFB9ZT2EKGGK51H"
        }
      ]
    }
  }
}
```

</TabItem>
</Tabs>

###  @include

Similar to the @skip directive, The`@include`directive may be used for fields, fragment spreads, and inline fragments. It allows conditional inclusion during the execution of a `query` as described by the `if` argument. 
```
 directive @include(if: Boolean!) on FIELD | FRAGMENT_SPREAD | INLINE_FRAGMENT
```
In the below example, `check` field will only be queried if the variable`$someTest`has the value `true`. If the value is `false`, the field will not be included in the query execution.

<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Input Data', value: 'data'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```java
query($someTest: Boolean!){
  find(type: checkSkip, arcql: "*") {
    edges {
      node {
        ... on checkSkip {
          check @include(if:$someTest)
        }
      }
      cursor
    }
  }
}
```

</TabItem>
<TabItem value="data">

```
{
  "someTest": true
}
OR
{
  "someTest": false
}
```
</TabItem>
<TabItem value="response">

```json
//someTest = true
{
  "data": {
    "find": {
      "edges": [
        {
          "node": {
            "check": "abc"
          },
          "cursor": "01F46X1DC10TFB9ZT2EKGGK51H"
        }
      ]
    }
  }
}
//someTest = false
{
  "data": {
    "find": {
      "edges": [
        {
          "node": {},
          "cursor": "01F46X1DC10TFB9ZT2EKGGK51H"
        }
      ]
    }
  }
}
```
</TabItem>
</Tabs>

### @specifiedBy

Hypi does not support this directive at the moment.