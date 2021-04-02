---
id: gql-interfaces
title: GraphQL Interfaces
sidebar_label: GraphQL Interfaces
slug: /gql-interfaces
---

Similar to other type systems, GraphQL supports interfaces. Interfaces are abstract types that holds a certain set of fields that a type must include to implement the interface.

Interfaces are powerful, and a great way to build and use GraphQL schemas through the use of abstract types. Abstract types can't be used directly in schema, but can be used as building blocks for creating explicit types.

Example, you could have an interface Car that represents any Car in a trade show:

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
  model: string
}
type Bentley implements Car {
  id: ID!
  name: String!
  model: string
}
```
Now it can be used in another type like this:
```java
type Customer {
    owns: [Car!]
}
```
The `owns` field uses the `Car` interface. This allows `owns` to have values of type `Audi` and `Bently`.

:::tip IMPORTANT

When creating or updating a customer object, the `hypi.impl` field MUST be specified on each object in the `owns` field. Each object must tell Hypi if it is an Audi or a Bently.

:::
