---
id: hypiobject
title: Magic Hypi Object
sidebar_label: Magic Hypi Object
slug: /lowcode/magic-hypi-object
---

We like simple and automated things in the world of programming. One such thing is `Magic Hypi Object`. You will not create it and still, you will get it. That’s why it’s a magic object! It automatically gets attached to every data type. It allows the programmer to do pretty powerful things. 

> Let’s take an example.

We have the following data type.

```java
type Author {
    name: String
    age: Int
    count: Int
    booklist: [String!]
}
```
The above data type stores information of an author. The data fields are name, age, book count, and list of books, etc.  Insert this data in the form of a table.  A hypi object gets added to it automatically.

```java
type Author {
    hypi: Hypi
    name: String
    age: Int
    count: Int
    booklist: [String!]
}
```
> Let’s look at its structure.
```java
type Hypi {
    id:ID
    impl:String
    created:DateTime
    updated:DateTime
    trashed:DateTime
    createdBy:ID
    instanceId:String
}
```

## Available fields

| **Field**      | **Data Type** | **Description**                                              |
|----------------|---------------|--------------------------------------------------------------|
| **id**         | String        | Unique identification (ID) of a data type                    |
| **impl**       | String        | Name of the implementation of an interface                   |
| **trashed**    | DateTime      | The date on which the object was marked as trashed.          |
| **updated**    | DateTime      | The last date when the object was updated.                   |
| **created**    | DateTime      | The date when the object was created.                        |
| **createdBy**  | String        | The ID of the User Account which created the object.         |
| **instanceId** | String        | The ID of the app instance which created and owns the object |

Hypi updates some of the fields automatically like `trashed`, `updated`, `created`,`createdBy`.

A field like ‘id’ may get generated automatically. But you may set it as well. ’impl’ field value has to be set. Let’s look at these two fields in detail.

### id

`id:` => Specify the value of this field during mutation. Otherwise, Hypi will generate a unique ID number automatically. It is a mandatory field during ‘upsert’ (update) to locate the object to be updated. Specify it in the ArcQL query to find objects by ID. Check [CRUD](crud.md) operations to understand the utilization of an id.

### impl

`impl:`  => An app may consist of various interfaces. The ‘impl’ field stores value of the name of the implementation of an interface. Let’s say you have social media interfaces like Instagram, Twitter, Facebook. The ‘impl’ field should be set to “Twitter” to use the ‘Twitter’ interface. Hypi cannot automatically decide the implementation of an interface on which you intend to perform a mutation. If you do not provide the ‘impl’ value, the mutation will fail.