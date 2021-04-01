---
id: graphql
title: GraphQL 
sidebar_label: GraphQL 
slug: /graphql
---

GraphQL is **a syntax that represents how to request data** and is generally used to load data from a server to a client. The GraphQL data query language is:

+ **A Specification**, that determines the validity of the schema on the API server. The schema defines the validity of client calls.
    
+ **Strongly typed**, all GraphQL query corresponds to a particular type, and each type describes an available set of fields. Furthermore, GraphQL provides descriptive error messages before performing a query.
    
+ **Introspective**, allows a client to ask the server for details about the schema.
    
+ **Hierarchical**, the shape of a GraphQL query mirrors the shape of the `JSON` data it returns. Query and receive only the data you specify in a single round trip.
    
:::note

The purpose of GraphQL is to decrease the load on the server. Users can make a single call to fetch the required data rather than to construct multiple REST requests. The key idea is to `POST` a "query" to an HTTP endpoint, instead of hitting different HTTP endpoints for various resources. It makes fetching client's data from their backend APIs convenient.

:::

**GraphQL**  is now considered one of the most modern ways of building and querying APIs.