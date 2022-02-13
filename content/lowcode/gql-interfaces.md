---
id: gql-interfaces
title: GraphQL Interfaces
sidebar_label: GraphQL Interfaces
slug: /lowcode/gql-interfaces
---

GraphQL supports `interfaces` similar to other type systems. Interfaces are abstract types that hold a certain set of fields. A type must include these fields to implement the interface.

Interfaces are powerful, and a great way to build and use GraphQL schemas through the use of abstraction. Abstract types can't be used directly in the schema, but can be used as building blocks for creating explicit types.

For example, you could have an interface Car that represents any model of a Car in a trade show:

```java
interface Car {
  id: ID!
  name: String!
  model: String
}
```

This means that any type that implements Car needs to have these exact fields, with these arguments and return types.

For example, here are some types of brands that might implement Car:
```java
type Audi implements Car {
  id: ID!
  name: String!
  model: String
}
type Bentley implements Car {
  id: ID!
  name: String!
  model: String
}
```
Now it can be used in another type like this:
```java
type Customer {
    owns: [Car!]
}
```
The `owns` field uses the `Car` interface. This allows `owns` to have values of type `Audi` and  `Bently`.

:::tip IMPORTANT

When creating or updating a customer object, the `hypi.impl` field MUST be specified on each object in the `owns` array.  Each object of type `owns` must tell Hypi if it is an Audi or a Bently. 

The `hypi.impl` field is needed for upsert, not for queries. For queries on each implementation, you MUST use an inline fragment i.e. 

`... on <Impl> { <impl specific fields> }`

:::

Here follows the example that inserts data in the Customer object using an interface Car.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Input Data', value: 'data'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```java
mutation Upsert($values: HypiUpsertInputUnion!) {
    upsert(values: $values) {
      id
    }
}
```

</TabItem>
<TabItem value="data">

```
{
  "values": {
      "Customer": {
        "owns": [
          { 
            "hypi": 
            { 
                "impl": "Audi" 
            },
            "id": 1, 
            "name": "Audi Class", 
            "model": "aux" 
          },
          {
            "hypi": 
            	{ 
                "impl": "Bentley" 
              },
            "id": 2,
            "name": "Bentley Class",
            "model": "vx"
          }
        ]
      }
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
        "id": "01F2NDF0BJ8T5YK8SW1JWKX8QW"
      }
    ]
  }
}
```

</TabItem>
</Tabs>

Check the use of inline fragments to retrieve interface data. (... on Audi { model })

```java
{
  find(type: Customer, arcql: "*") {
    edges {
      node {
        ... on Customer {
         owns {
             #Retrieve data from interfaces
            ... on Audi { model }
            ... on Bentley { model }
            name
          }
        }
      }
      cursor
    }
  }
}
```
You may use sub-queries on the interface fields. (arcql: "owns.model = 'vx'").  Check the below example.

<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
     {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```java
{  
  find(type: Customer, arcql: "*") {  
    edges {  
      node {  
        ... on Customer {  
         owns(arcql: "model = 'vx'") {  
             #Retrieve data from interfaces  
            ... on Audi { model }  
            ... on Bentley { model }  
            name  
          }  
        }  
      }  
      cursor  
    }  
  }  
}
```

</TabItem>
<TabItem value="response">

```
{  
  "data": {  
    "find": {  
      "edges": [  
        {  
          "node": {  
            "owns": [  
              {  
                "model": "vx",  
                "name": "Bentley Class"  
              }  
            ]  
          },  
          "cursor": "01F45A70PJ8DDPSPHEYNEFH513"  
        }  
      ]  
    }  
  }  
}
```
</TabItem>
</Tabs>
