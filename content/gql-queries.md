---
id: gql-queries
title: GraphQL Queries
sidebar_label: GraphQL Queries
slug: /gql-queries
---

Every GraphQL schema has a root type for both queries and mutations. The query type defines GraphQL operations that retrieve data from the server.

GraphQL queries return only the data you define. To construct a query, you must identify fields within fields ( known as nested subfields) continuously, until you return only scalars.

## GraphQL API

The GraphQL API has a single endpoint: `https://api.hypi.app/graphql`. Queries are sent to this endpoint. 

> Note:  Arcql is Hypi's SQL-like query language used to filter, sort, and paginate data in the platform.

You should construct queries like this:

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
query getMyTodos($arcql:String) {
   todos(arcql:$arcql) {
     hypi {
        id
        created
      }
     description
     completed
   }
}
```

</TabItem>
<TabItem value="data">

```java
{
    "arcql": "* SORT hypi.updated DESC"
 }
```
</TabItem>

<TabItem value="response">

```json
{
       "data": {
         "todos": [
           {
              "hypi": {
               "id": "c94144ec-52aa-4337-9d8b-15fa8ec5c979"
               "created": "2019-11-02T15:45:16Z"
               }
              "description": "Buy milk for the office",
              "completed":"false",
            },
        ]
     }
 }
```

</TabItem>
</Tabs>

## Authorization

**Note:**  You need to pass the Authorization `token` header before querying to get the results. Here's an Example of setting up your header with auth token. Read more about Authorization [here](authorisation.md).

```json
{
  "url": "https://api.hypi.app/graphql/",
  "headers": {
       "Authorization":
        "Auth Token here. It can be copied from the Developer Hub",
       "hypi-domain": "my-domain.com" # instance API domain
  }
}
```

## Query Variables

GraphQL Variables makes queries more dynamic and powerful, and they reduce complexity when passing mutation input objects. **Here you can see variables in its simplest form.**

```java
query findTodoItem($arcql:String) {
     todos(arcql: $arcql) {
       item {
         description
         hypi {
          id
         }
       }
   }
}
variables {
   "arcql": "hypi.id = 'abc-123'"
}
```

There are three steps to using variables:

+ Create the variable outside the operation in a `variables` object. You can provide variables in the [QUERY VARIABLES](ui-gql-playground.md) box on the user interface of Hypi. You need not specify the 'variables' keyword for that.

+ The variable needs to be pass to the operation as an argument: `query($arcql:String!){`

+ Use the variable within the operation: `todos(arcql: $arcql) {`

This process makes the query argument dynamic. You can change the value in the `variables` object and keep the foundation of the query the same.

Using variables as arguments lets you dynamically update values in the variables object without changing the query and using the Hypi `arcql` variable lets you filter, sort, and paginate data in the platform.

When the user sends a request, the UI combines the query and variable to make a JSON object and process the API.

```java
{  
  "query: "query findTodoItems...",  
  "variables": {  
   "arcql": "hypi.id = ..."  
  }  
}
```

##  Nested queries

GraphQL query can have subqueries within it. So,nested queries can be executed.  Check out below example.

```java
query findTodoItem($filter:String, $subQuery: String) {  
     todos(arcql: $filter) {  
       item {  
         listField(arcql: $subQuery){  
           f1  
         }  
         description  
         hypi {  
          id  
         }  
       }  
   }  
}  
variables {  
   "filter": "hypi.id = 'abc-123'",  
   "subQuery": "f1 ^ 'hello'"  
}
```
Here, both `todos` and `listField` have an argument called `arcql` but the variables that set its value are different (`$filer` and `$subQuery`)

:::note

Refer [Read Data](readdata.md) to understand Hypi's query functions. 

:::