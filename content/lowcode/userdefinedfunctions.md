---
id: userdefinedfunctions
title: User Defined Functions
sidebar_label: User Defined Functions
slug: /lowcode/user-defined-function
---

User Defined functions provide a lightweight way to implement custom behaviour outside of what Hypi offers. The functions are executed on the same server where the query gets processed.

Currently, you may use two programming language for the user defined functions.

+ Groovy: The entire Groovy syntax is available on the hypi platform. Groovy is a general programming language. Adding custom behaviour using Groovy becomes quick, easy and performant.

+ Velocity: The velocity template language is in place to output text. This text may execute dynamic behaviour. E.g., customizing the body of an email, substituting receiver’s name from a variable etc.

> Let’s check how to implement user defined functions. 

We will start with a simple schema as follows: 

```java
type Query {
    inlineGroovyFunction(a: String, b: Int, c: Boolean)
        :Json @tan(type:Groovy, inline: """
        def map = new java.util.LinkedHashMap()
        map.put("a", a)
        map.put("b", b)
        map.put("c", c)
        return map
    """)
    inlineVelocityFunction(a: String, b: Int, c: Boolean):
    String @tan(type:Velocity, inline: "$a,$b,$c")
}
```

The schema has two user defined functions. `inlineGroovyFunction` and `inlineVelocityFunction` You may define the user defined functions either inline or through a script. `@tan` directive is used to add the functions. 

`inlineGroovyFunction` function puts value of variables a,b and c in a LinkedHashMap and the map is returned in the form of JSON data. `inlineVelocityFunction` uses velocity template to return the formatted string output of variables a,b, and c. You may execute the user defined function as any other GraphQL query.

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
{
  inlineGroovyFunction(a:"val1", b:23, c: true)
}
OR
{
  inlineVelocityFunction(a:"val1", b:23, c: true)
}
```

</TabItem>

<TabItem value="response">

```json
{
  "data": {
    "inlineGroovyFunction": {
      "a": "val1",
      "b": 23,
      "c": true
    }
  }
}
OR
{
  "data": {
    "inlineVelocityFunction": "val1,23,true"
  }
}
```

</TabItem>
</Tabs>

You may pass the variable parameters to the function as well. Just like this:

```java
query inlineVelocityFunction($a: String, $b: Int, $c: Boolean){
  inlineVelocityFunction(a: $a, b: $b, c: $c)
}
```

As you can see in `inlineGroovyFunction`, Java classes are also available to use inline. You may also use a simple Groovy like version as follows.

```java
inlineGroovyFunction(a: String, b: Int, c: Boolean):Json @tan(type:Groovy, inline: """
     return [
     a: a,
     b: b,
     c: c
     ]
 """)
```

##  User Defined Functions using APIs

It is easy to call CRUD APIs, Math APIs, Authentication functions from User Defined Functions. You may parse JSON and XML data inside User Defined Function as well. 

Let's check how to implement these functions.

###   upsert

Look at the `groovyUpsert` user defined function below. It can be used to insert or update data in an object.  Its behaviour is the same as the [upsert](createdata.md) function from [CRUD APIs](crud.md). `groovyUpsert` inserts data in the `Author` and `Book` objects. 

You may use appropriate name for `groovyUpsert` as per its behaviour. But `inline` parameter of `@tan` directive must use the `upsert` function to insert or update data.

```javascript
type Mutation {
  groovyUpsert(a: String, b: Int, c: Int, d: String, e:String, f: Boolean):Json
  @tan(type:Groovy, inline: """return upsert([
          Author: [
           [             
             name: a,
             age: b,
             count: c,
             booklist:[
                [
                 title: d,
                 publication: e,
                 available: f
                ]
             ]
           ]
          ]
        ]
    )  
  """
  ) 
}
```
Note there is a slight change of syntax for the upsert function. Since it is written in Groovy, we have used square brackets instead of curly brackets.

Here is the execution of the function.

<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```
mutation{
  groovyUpsert(a:"Dan Brown", b: 56, c:3, d: "Da Vinci Code", e: "abc", f: true)
}
```
</TabItem>

<TabItem value="response">

```
{
  "data": {
    "groovyUpsert": [
      {
        "__typename": "Hypi",
        "id": "01F9V5QJDFV5MJWSQ0KV13N5PN",
        "impl": null,
        "created": "2021-07-05T11:09:24Z",
        "updated": "2021-07-05T11:09:24Z",
        "trashed": null,
        "createdBy": "01F2GA50NFXHMYCBDNYFJK1V7R",
        "instanceId": "01F9V52Z4NW0CBTNS7QG7G3RAE",
        "tags": null
      }
    ]
  }
}
```
</TabItem>
</Tabs>

To [update an existing object](updatedata.md), we will do a slight modification in the schema. Let's add a parameter to pass hypi.id to update an existing object.

```
type Mutation {
  groovyUpsert(a: String, b: Int, c: Int, d: String, e:String, f: Boolean, g: ID):Json
  @tan(type:Groovy, inline: """return upsert([
          Author: [
           [ 
             hypi:[
                 id: g
             ],            
             name: a,
             age: b,
             count: c,
             booklist:[
                [
                 title: d,
                 publication: e,
                 available: f
                ]
             ]
           ]
          ]
        ]
    )  
  """
  ) 
}
```
Here is the execution of function.

<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```
mutation{
  groovyUpsert( d: "Inferno", e: "xyz", f: true, g: "01F9V5QJDFV5MJWSQ0KV13N5PN")
}
```

</TabItem>

<TabItem value="response">

```
{
  "data": {
    "groovyUpsert": [
      {
        "__typename": "Hypi",
        "id": "01F9V5QJDFV5MJWSQ0KV13N5PN",
        "impl": null,
        "created": null,
        "updated": "2021-07-05T11:18:26Z",
        "trashed": null,
        "createdBy": null,
        "instanceId": "01F9V52Z4NW0CBTNS7QG7G3RAE",
        "tags": null
      }
    ]
  }
}
```
</TabItem>
</Tabs>

###   find

Below user defined function (`groovyFind`) can be used to retrieve all the data from an object.  Its behaviour is the same as the [find](readdata.md#find) function from CRUD APIs.  

Use appropriate name for `groovyFind` as per the requirements. But `inline` parameter of `@tan` directive must use the `find` function to retrieve data.

```
type Query {
groovyFind(type: String!,  arcql: String!,  first: Int,  after: String,  last: Int,  before: String,  includeTrashed: Boolean,  page: Int):Json @tan(type:Groovy,  inline:  """return find(type, arcql, first, after, last, before, includeTrashed, page)""")  
}
```
Let's retrieve the data inserted in the Author object.

<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```
{
  groovyFind(type:"Author", arcql:"hypi.id = '01F9V5QJDFV5MJWSQ0KV13N5PN'")
}
```
</TabItem>

<TabItem value="response">

```
{
  "data": {
    "groovyFind": {
      "edges": [
        {
          "cursor": "01F9V5QJDFV5MJWSQ0KV13N5PN",
          "node": {
            "__typename": "Author",
            "hypi": {
              "__typename": "Hypi",
              "id": "01F9V5QJDFV5MJWSQ0KV13N5PN",
              "impl": null,
              "created": "2021-07-05T11:09:24Z",
              "updated": "2021-07-05T11:18:26Z",
              "trashed": null,
              "createdBy": "01F2GA50NFXHMYCBDNYFJK1V7R",
              "instanceId": "01F9V52Z4NW0CBTNS7QG7G3RAE",
              "tags": null
            },
            "name": "Dan Brown",
            "age": 56,
            "count": 3,
            "booklist": [
              {
                "__typename": "Book",
                "hypi": {
                  "__typename": "Hypi",
                  "id": "01F9V5QJDJCNF8EENSAQNXC217",
                  "impl": null,
                  "created": "2021-07-05T11:09:24Z",
                  "updated": "2021-07-05T11:09:24Z",
                  "trashed": null,
                  "createdBy": "01F2GA50NFXHMYCBDNYFJK1V7R",
                  "instanceId": "01F9V52Z4NW0CBTNS7QG7G3RAE",
                  "tags": null
                },
                "title": "Da Vinci Code",
                "publication": "abc",
                "available": true
              },
              {
                "__typename": "Book",
                "hypi": {
                  "__typename": "Hypi",
                  "id": "01F9V68331S0PVGH1Y8QK39NPC",
                  "impl": null,
                  "created": "2021-07-05T11:18:26Z",
                  "updated": "2021-07-05T11:18:26Z",
                  "trashed": null,
                  "createdBy": "01F2GA50NFXHMYCBDNYFJK1V7R",
                  "instanceId": "01F9V52Z4NW0CBTNS7QG7G3RAE",
                  "tags": null
                },
                "title": "Inferno",
                "publication": "xyz",
                "available": true
              }
            ]
          }
        }
      ]
    }
  }
}
```
</TabItem>
</Tabs>

###   get

Below `groovyGet` user defined function can be used to get data from a single object.  Its behaviour is the same as the [get](readdata.md#get) function from CRUD APIs.  You may choose another name for `groovyGet`. However, `inline` parameter of `@tan` directive must use the `get` function to get data from a single object.

```
type Query {
groovyGet( type: HypiMutationType! id: String! ): HypiRootAggregate
  @tan(type:Groovy, inline: """return get(type, id)""")
}
```
<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```
{
  groovyGet(type:Author, id:"01F9V5QJDFV5MJWSQ0KV13N5PN") {
    ... on Author {
      hypi{
        id
        created
        updated
      }
      name
      booklist{
        title
        available
      }
    }
  }
}
```
</TabItem>

<TabItem value="response">

```
{
  "data": {
    "groovyGet": {
      "hypi": {
        "id": "01F9V5QJDFV5MJWSQ0KV13N5PN",
        "created": "2021-07-05T11:09:24Z",
        "updated": "2021-07-05T11:18:26Z"
      },
      "name": "Dan Brown",
      "booklist": [
        {
          "title": "Da Vinci Code",
          "available": true
        },
        {
          "title": "Inferno",
          "available": true
        }
      ]
    }
  }
}
```
</TabItem>
</Tabs>

###   trash 

Below `groovyTrash` user defined function can be used to put unwanted data in a trash.  Its behaviour is the same as the [trash](deletedata.md#trash) function from CRUD APIs. You may choose another name for `groovyTrash`. But `inline` parameter of `@tan` directive must use the `trash` function to trash data.

```
type Mutation {
groovyTrash( type: HypiMutationType! arcql: String! ): Int!
  @tan(type:Groovy, inline: """return trash(type, arcql)""")
}
```

<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```
mutation {
  groovyTrash(type:Author,arcql: "hypi.id='01F9V5QJDFV5MJWSQ0KV13N5PN'")
}
```
</TabItem>

<TabItem value="response">

```
{
  "data": {
    "groovyTrash": 1
  }
}
```
</TabItem>
</Tabs>

###   untrash

Below user defined function (`groovyUntrash`)  can be used to withdraw data marked as trash.  Its behaviour is the same as the [untrash](deletedata.md#untrash) function from CRUD APIs. You may use different name for `groovyUntrash`. But `inline` parameter of `@tan` directive must use the `untrash` function to untrash data.

```
type Mutation {
groovyUntrash( type: HypiMutationType! arcql: String! ): Int!
  @tan(type:Groovy, inline: """return untrash(type, arcql)""")
}
```
<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```
mutation {
  groovyUntrash(type:Author,arcql: "hypi.id='01F9V5QJDFV5MJWSQ0KV13N5PN'")
}
```
</TabItem>

<TabItem value="response">

```
{
  "data": {
    "groovyUntrash": 1
  }
}
```
</TabItem>
</Tabs>

###   delete

Look at the `groovyDelete` user defined function below. It can be used to delete the unwanted data permanently  Its behaviour is the same as the [delete](deletedata.md#delete) function from CRUD APIs. You may use another name for `groovyDelete`. Make sure to use `delete` function in the `inline` parameter of `@tan` directive to delete data.

```
type Mutation {
  groovyDelete(type: HypiMutationType! arcql: String! clearArrayReferences: Boolean = false ): Int!
  @tan(type:Groovy, inline: """return delete(type, arcql, clearArrayReferences)""")
}
```
<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```

mutation {
  groovyDelete(type: Book, arcql: "hypi.id = '01F9V68331S0PVGH1Y8QK39NPC'",
  clearArrayReferences:true)
}
```
</TabItem>

<TabItem value="response">

```
{
  "data": {
    "groovyDelete": 1
  }
}
```
</TabItem>
</Tabs>

###   deleteScalars

Data in a scalar array can be permanently deleted as shown in the `groovyDeleteScalars` user defined function below. Behaviour is the same as that of [deleteScalars](deletedata.md#deletescalars).  You may choose appropriate name for `groovyDeleteScalars` Use `deleteScalars` function in the Groovy function of the `inline` parameter of the `@tan` directive.

```
type Mutation { 
 groovyDeleteScalars( type: HypiMutationType! field: String! values: [String!]! arcql: String! ): Int!
  @tan(type:Groovy, inline: """return deleteScalars(type, field, values, arcql)""")
}
```
<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```
mutation{
  groovyDeleteScalars(
    type:Question,
    field:"answer",
    values:["a","b"],
    arcql:"hypi.id ='01F9VASEMCNFMR7F8N13R6GJXS'"
  )
}
```
</TabItem>

<TabItem value="response">

```
{
  "data": {
    "groovyDeleteScalars": 2
  }
}
```
</TabItem>
</Tabs>

###   link

You can create a reference, using the `link` function. Two objects can be conneted using one-to-one or one-to-many references.  `groovyLink` function below works similar to the [link](references.md) function. You may replace `groovyLink`  with another function name. But `inline` parameter of `@tan` directive must use the `link` function to link objects.

```
type Mutation {
groovyLink( from: HypiMutationType! to: HypiMutationType! via: String! whereFromID: String! andToID: String! fromInstanceId: String toInstanceId: String ): Boolean!
  @tan(type:Groovy, inline: """return link(from, to, via, whereFromID, andToID, fromInstanceId, toInstanceId)""")
}
```
<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```
mutation {
    groovyLink(from:Author,to:Book,    via:"booklist",whereFromID:"01F9V5QJDFV5MJWSQ0KV13N5PN",andToID:"01F9VB3EJMQWF27JW6QKPBEGM2")
}
```
</TabItem>

<TabItem value="response">

```
{
  "data": {
    "groovyLink": true
  }
}
```
</TabItem>
</Tabs>

###   unlink

You can remove a reference, using the unlink function.  `groovyUnlink` user defined function below works similar to the [unlink](references.md) function.  You may opt to have another name for `groovyUnlink`.But `inline` parameter of `@tan` directive must use the `unlink` function to unlink references.

```
type Mutation {
groovyUnlink(from: HypiMutationType! to: HypiMutationType! via: String! whereFromID: String! andToID: String! fromInstanceId: String toInstanceId: String ): Boolean!
  @tan(type:Groovy, inline: """return unlink(from, to, via, whereFromID, andToID, fromInstanceId, toInstanceId)""")
}
```
<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```
mutation {  groovyUnlink(from:Author,to:Book,via:"booklist",whereFromID:"01F9V5QJDFV5MJWSQ0KV13N5PN",andToID:"01F9VB3EJMQWF27JW6QKPBEGM2")
}
```
</TabItem>

<TabItem value="response">

```
{
  "data": {
    "groovyUnlink": true
  }
}
```
</TabItem>
</Tabs>

### createAccount

You may create a new user account using createAccount. The `groovyCreateAccount` user defined function works similar to the [createAccount](authentication.md#createaccount) function. Choose any other name for `groovyCreateAccount`. But `inline` parameter of `@tan` directive must use the `createAccount` function to create an account.

```
type Mutation {
groovyCreateAccount( value: AccountInput! ): Hypi
  @tan(type:Groovy, inline: """return createAccount(value)""")
}
```
<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```
mutation {
 groovyCreateAccount(
     value: {
         username: "test-hypi1@hypi.io"
         password: { value: "test-hypi1@hypi.io" }
         emails: [{ value: "test-hypi1@hypi.io" }]
     }
     ) {
         id
         created
         createdBy
     }
}
```
</TabItem>

<TabItem value="response">

```
{
  "data": {
    "groovyCreateAccount": {
      "id": "01F9V9JVG571TCQ11KSM7Y5PR5",
      "created": "2021-07-05T12:16:44Z",
      "createdBy": "01F9V9JVG571TCQ11KSM7Y5PR5"
    }
  }
}
```
</TabItem>
</Tabs>

### login / loginByEmail

Users may login with `login` or  `loginByEmail` function. `groovyLogin` /`groovyLoginByEmail`  user defined functions below work similar to [login](authentication.md#login) / [loginByEmail](authentication.md#loginbyemail) functions. You may choose another names for these functions.  But `inline` parameter of `@tan` directive must use the `login`/`loginByEmail` function to login.

```
type Query {
groovyLoginByEmail(email: String! password: String! ): AccessToken
  @tan(type:Groovy, inline: """return loginByEmail(email, password)""")
 
 groovyLogin(username: String! password: String! ): AccessToken
  @tan(type:Groovy, inline: """return login(username, password)""")
}
```

<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```
{
  groovyLogin(username:"test-hypi@hypi.io",password:"test-hypi@hypi.io"){
        sessionToken
        sessionExpires
        errorCode
        errorMsg
    }
}
OR
{
  groovyLoginByEmail(email:"test-hypi@hypi.io",password:"test-hypi@hypi.io"){
        sessionToken
        sessionExpires
        errorCode
        errorMsg
    }
}
```

</TabItem>

<TabItem value="response">

```
{
  "data": {
    "groovyLogin": {
      "sessionToken": "Auth-Token",
      "sessionExpires": 1628078182,
      "errorCode": null,
      "errorMsg": null
    }
  }
}
```

</TabItem>
</Tabs>

### Maths APIs

Maths APIs can be used to perform Mathematical operations. Behaviour of `groovyMath` user defined function is similar to [Maths APIs](mathsapi.md). 

Here is the schema. Please note the use of square brackets in the syntax. `price` is the float field on which Mathematical operations are carried out. You may have another name for `groovyMath`. But use `math` function in the Groovy function of the `inline` parameter of `@tan` directive.

```
type Mutation {
groovyMath(a: ID, b: Float, c: Float, d: Float, e:Float):Json
  @tan(type:Groovy, inline: """return math([
          Book: [
            [             
                price: [
                 hypi: [
                  id: a
                 ],
                 div: b,
                 times: c,
                 minus: d,
                 plus: e
                ]             
             ] 
          ]
       ]
    )  
  """
  )
}
```
<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```
mutation{
  groovyMath(a:"01F9VCE833595FYZR9X6MSKPMH",b:10,c:2,d:2,e:8)
}
```
</TabItem>

<TabItem value="response">

```
{
  "data": {
    "groovyMath": [
      {
        "__typename": "Hypi",
        "id": "01F9VCE833595FYZR9X6MSKPMH",
        "impl": null,
        "created": null,
        "updated": "2021-07-05T13:08:58Z",
        "trashed": null,
        "createdBy": null,
        "instanceId": "01F9V52Z4NW0CBTNS7QG7G3RAE",
        "tags": null
      }
    ]
  }
}
```
</TabItem>
</Tabs>

### parseJSON

You may parse a JSON value inside a user defined function using `parseJSON` function. `groovyParseJSON` function below does the same.  You may have another name for `groovyParseJSON`. But use `parseJSON` function in the Groovy function of the `inline` parameter of `@tan` directive.

```
groovyParseJSON(value: String): Json
  @tan(type:Groovy, inline: """return parseJSON(value)""")
```
<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```
{
  groovyParseJSON(value:"{\"share\":{\"gpname\": \"scalars\",\"url\": \"scalars@hypi.in\"}}")
}
```
</TabItem>

<TabItem value="response">

```
{
  "data": {
    "groovyParseJSON": {
      "share": {
        "gpname": "scalars",
        "url": "scalars@hypi.in"
      }
    }
  }
}
```
</TabItem>
</Tabs>

### parseXML

You may parse an XML value inside a user defined function using `parseXML` function. `groovyParseXML` function below does the same.  

You may have another name for `groovyParseXML`. But use `parseXML` function in the Groovy function of the `inline` parameter of `@tan` directive.
```
groovyParseXML(value: String): Json
  @tan(type:Groovy, inline: """return parseXML(value)""")
```
<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```
{
  groovyParseXML(value:"<note><to>abc</to><from>xyz</from><heading>Reminder</heading><body>Low code</body></note>")
}
```
</TabItem>

<TabItem value="response">

```
{
  "data": {
    "groovyParseXML": {
      "to": "abc",
      "from": "xyz",
      "heading": "Reminder",
      "body": "Low code"
    }
  }
}
```
</TabItem>
</Tabs>

### Function ‘gql’

The function 'gql' is available to execute inside the user defined function. Using this function you may perform mutation or query operations inside the usergraphql defined function. The result depends upon the type of operation. If you perform an `upsert` mutation, it will return id, createdBy etc. (Just like the normal `upsert` in Hypi) If you perform a `find` query, it will return a list.  `groovyUpsert` can be defined in the schema under Mutation type as follows.
  

Let’s check a few examples of how to use this function. Add the following schema in GraphQL.
```java
type Mutation {
  SetBookInfo(a: String, b: Float, c: Int):Json @tan(type:Groovy, inline: """
    return [ gql(\"""
    mutation {
        upsert(
            values: { 
                Book: [
                    { 
                        title: "$a",
                        price: $b,
                        authorid: $c
                    }
                ] 
            }
        ) {
            id
        }
    }\"""
    )
    ]
  """)
}
type Query {
  GetAuthorInfo(a: String):Json @tan(type:Groovy, inline: """
    return [ gql(\"""
    query {
           get(type: Author, id: "$a"){
            ... on Author {
            hypi{
                id               
            }
            name
            booklist{
                title               
                price
                authorid 
            }
        }
        
    }
    }\"""
    )
    ]
  """)
}                                                         
```

`SetBookInfo` is a user defined function to set parameter values inside the table `Book`. Upon successful creation of the object, the `hypi.id` is returned.

<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```java
mutation {
  SetBookInfo(a:"Ikigai", b:6.99, c: 7)
}
```

</TabItem>

<TabItem value="response">

```java
{
  "data": {
    "SetBookInfo": [
      {
        "data": {
          "upsert": [
            {
              "id": "01F1F23WERW6V4JQYDRW4QQRBQ"
            }
          ]
        }
      }
    ]
  }
}
```


</TabItem>
</Tabs>

Let's retrieve `Author` table data using `GetAthorInfo`. Pass the Author id as `Author1` .It returns the author infomation with id 'Author1'

<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```java
query {
  GetAuthorInfo(a:"Author1")
}
```

</TabItem>

<TabItem value="response">

```json
{
  "data": {
    "GetAuthorInfo": [
      {
        "data": {
          "get": {
            "hypi": {
              "id": "Author1"
            },
            "name": "Dan Brown",
            "booklist": [
              {
                "title": "Da Vinci Code",
                "price": 12.99,
                "authorid": 1
              }
            ]
          }
        }
      }
    ]
  }
}
```

</TabItem>
</Tabs>

The`gql`function accepts two parameters.

+ `query`: String - the GraphQL query to execute
+ `values`: Map - a map containing the set of variables used in `query`

In the above examples, we have just used GraphQL query string. Let's modify the `SetBookInfo` function with Map values.

```java
type Mutation {
  SetBookInfo(a: String, b: Float, c: Int):Json @tan(type:Groovy, inline: """
    return gql('''
    mutation CreateBook($p: String, $q: Float, $r: Int){
        upsert(
            values: { 
                Book: [
                    { 
                        title: $p,
                        price: $q,
                        authorid: $r
                    }
                ] 
            }
        ) {
            id
        }
    }''', ['p':a , 'q': b, 'r': c])
  """)
}
```
Notice few changes here:

+ Replaced the `\"""` with just `'''` . Using three `'` in Groovy, we have the same effect as `"""`. without string interpolation. It means that `$a` is not evaluated as a Groovy variable and remains as a part of the string.
+ Added GraphQL variables `CreateBook($p: String, $q: Float, $r: Int)`
+ Added variable values `['p':a, 'q': b, 'r': c]` in the map. Now, the variables `$p` , `$q` and `$r` are GraphQL variables not Groovy variables.

With these changes, the result is the same as the previous example!