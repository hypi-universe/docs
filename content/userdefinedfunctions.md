---
id: userdefinedfunctions
title: User Defined Functions
sidebar_label: User Defined Functions
slug: /user-defined-function
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

### Function ‘gql’

The function 'gql' is available to execute inside the user defined function. Using this function you may perform mutation or query operations inside the user defined function. The result depends upon the type of operation. If you perform an `upsert` mutation, it will return id, createdBy etc. (Just like the normal `upsert` in Hypi) If you perform a `find` query, it will return a list.

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