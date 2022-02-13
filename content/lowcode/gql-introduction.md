---
id: gql-introduction
title: GraphQL Introduction
sidebar_label: GraphQL Introduction
slug: /lowcode/gql-introduction 
---
## What is GraphQL?

GraphQL was created by Facebook to enhance RESTful API calls.

**GraphQL** makes getting server information much more comfortable and a lot faster. A GraphQL `query` gets parsed to a string. The string is sent to a server to be interpreted and fulfilled. The server returns JSON to the client.

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
   Songs {
     name
     # Queries can have comments!
     author
     year
   }
} 
```

</TabItem>

<TabItem value="response">

```json
{
       "data": {
         "songs": [
           {
              "name": "It's A Beautiful Day",
              "author": "Queen",
              "year":"1995",
           },
           {
              "name": "Let's Make A Night To Remember",
              "author": "Bryan Adams",
              "year": "1996"
           }
           ]
         }
       
 }
```

</TabItem>
</Tabs>

**GraphQL queries mirror their response**, making it easy to predict the shape of the data returned from a query. It is also easy to write a query if you know the data your app needs.

GraphQL is unapologetic in its approach. It is driven by the data requirements of products and developers who build the products. Because of the predictability of GraphQL, it's easy to learn and use.

:::info

GraphQL is not a database query language or a storage model. It contains graphs, nodes, and edges. The graph refers to graph structures specified in the schema. Within the graph, nodes represent objects and edges represent connections linking objects. GraphQL APIs traverses through the graph and returns application data based on the schema definitions, independent of how the data is stored.

:::
## Why GraphQL?

Hypi chose GraphQL because it includes both a query language and schema definition language (SDL). That is why our customers can precisely define the data, structure, and relationships they need.

###  Ship Apps faster adopting GraphQL and Hypi

Managing data for the modern applications can present many challenges. Developers are aggregating data from multiple sources that they need to merge into an app's UI. Furthermore, developers are deciding how to manage state on the client, simultaneously executing complex features such as caching and optimistic UI.

Adopting Hypi in your organisation will ease these pain points considerably. Using GraphQL's declarative approach to data modelling and fetching will simplify data transformation and speed up your API and app development. Using the Hypi platform enables faster development cycles thanks to its ability to understand a GraphQL model's relationships. Hypi generates most (in some cases all) of the backend APIs instantly.

### Explore your API

Hypi loves GraphQL's strongly typed query language because it enables developers to take advantage of incredible tooling for exploring App Instance APIs. Developers can query a Release schema for information about what queries and types it supports. Introspection is at your fingertips with automatic documentation, autocomplete, and more.