---
id: gql-queries
title: GraphQL Queries
sidebar_label: GraphQL Queries
slug: /gql-queries
---

Every GraphQL schema has a root type for both queries and mutations. The query type defines GraphQL operations that retrieve data from the server.

GraphQL queries return only the data you define. To construct a query, you must identify fields within fields ( known as nested subfields) continuously, until you return only scalars.

## GraphQL API

The GraphQL API has a single endpoint:`https://api.hypi.app/graphql`You should construct queries like this:

> Note:  Arcql is Hypi's SQL-like query language used to filter, sort and paginate data in the platform.

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
# Variables
{
    "arcql": "* SORT hypi.updated DESC"
 }
```
Result:
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

## Authorization

**Note:**  You need to pass the Authorization`token`header before querying to get the results. Here's Example of setting up your header with auth token.

```json
{
  "url": "https://api.hypi.app/graphql/",
  "headers": {
       "Authorization":
        "Auth Token here. It can be copied from the Developer Hub",
       "hypi-domain": "my-domain.com" // instance API domain
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

+ Create the variable outside the operation in a`variables`object:

+ The variable needs to be pass to the operation as an argument: `query($arcql:String!){`

+ Use the variable within the operation:`todos(arcql: $arcql) {`

This process makes the query argument dynamic. You can change the value in the`variables`object and keep the foundation of the query the same.

Using variables as arguments lets you dynamically update values in the variables object without changing the query and using the Hypi`arcql`variable lets you filter, sort and paginate data in the platform.