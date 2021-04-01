---
id: crud
title: CRUD APIs
sidebar_label: CRUD APIs
slug: /crud
---
CRUD is the acronym commonly used for Create, Read, Update, Delete. Hypi automatically generates CRUD API from the app’s schema.

Every app has one or more releases. Each release has its own schema. A schema is a set of GraphQL type definitions that defines the app’s data model. When you define a schema, Hypi automatically generates several APIs for you. CRUD APIs are one of them! They allow you to get data in and out of your apps.

To carry out CRUD operations, you should have a basic understanding of `GraphQL` type definitions. You should also be aware of `ArcQL` query language. GraphQL type definitions give structure to data models. ArcQL helps to filter and sort data on the Hypi platform. Also, get acquainted with `Hypi Magic Object`. It gets created in the schema automatically. Hypi object helps to perform simple data operations.

> You may check out these Guides.

+ [ArcQL](arcql.md)
+ [Magic Hypi Object](hypiobject.md)
+ [GraphQL type definitions](https://graphql.org/learn/schema/#type-system)

Let’s look at `CRUD` operations in detail. While you perform Query operations to get data from the database, you perform Mutations to create or update data in the database. Create, Update and Delete are mutations. Read is the Query.

> We will work with the below schemas to perform CRUD operations.

```java
  
  type Books {
      title: String
      publication: String
      available: Boolean
  }

  type Author {
      name: String!
      age: Int
      count: Int
      booklist: [Books!]
  }

```

Data type `Books` holds the information of a book like a title, publication, etc. It checks its availability in the library with the help of Boolean value. Data type `Author` holds data of an Author like name, age, count of books, and list of books.

> Now take a look at the below operations one by one!

+ [Create](createdata.md)

+ [Update](updatedata.md)

+ [Read](readdata.md)

+ [Delete](deletedata.md)