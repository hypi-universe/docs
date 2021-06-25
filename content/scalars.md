---
id: scalars
title: Scalars
sidebar_label: Scalars
slug: /scalars
---

A GraphQL object type has a name and cont
ains fields. But at some point, those fields have to resolve to some concrete data. That's where the scalar types come in: they represent the leaves of the query.

In the following query, the `name` and `appearsIn` fields will resolve to scalar types:
```java
{
 hero {
         name
         appearsIn
     }
 }
```

Scalar types represent primitive leaf values in a GraphQL type system. GraphQL responses take the form of a hierarchical tree; the leaves of this tree are typically GraphQL Scalar types (but may also be Enum types or null values).

Please note that the scalar fields don't have any sub-fields - they are the leaves of the query.

## Built-in scalars

GraphQL comes with a set of default built-in scalar types out of the box. Hypi also supports these scalar types.

### Int

`Int` scalar type represents `signed 32‐bit numeric non-fractional value`. The response field that supports the 32-bit integer or a number type should use this format.

### Float

`Float` scalar type represents a `signed double-precision finite floating-point value` as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_754).

### String

`String` data type represents a `UTF‐8 character sequence`. It is a free-form human-readable text. How the string is encoded to UTF-8 internally is left to the service implementation.

### Boolean

`Boolean` type represents `true` or  `false`.

### ID

`ID` scalar type represents a `unique identifier`, often used to refetch an object or as the key for a cache. ID is serialized as String, but it is not intended to be human-readable.

ID could represent, from small auto-increment numbers to large 128-bit random numbers, to base64 encoded values, or string values of a format like GUID. 

## Custom Scalars

Hypi supports custom scalar types in addition to the built-in scalars.

### UUID

`UUID` represents a scalar serialized as a string conforming to [RFC 4122](https://en.wikipedia.org/wiki/Universally_unique_identifier). When querying a field of type UUID, you can then rely on the ability to parse the result with an RFC 4122 compliant parser.

### Json

`JSON` (JavaScript Object Notation) is a lightweight format for storing and transporting data. Hypi supports declaring JSON data type for a field. Json type accepts only Json values while entering input or returning a value.

### DateTime

`DateTime` represents valid [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date time value.`DateTime` type accepts only valid ISO 8601 date-time values while entering input or returning a value.

DateTime scalar supports following ISO 8601 date-time notations.

| Date/Time        | Format                             | Example                   |
|------------------|------------------------------------|---------------------------|
| Date             | yyyy-mm-dd                         | 2008-09-15                |
| Datetime         | yyyy-mm-ddThh:mm:ss.ffffff         | 2008-09-15T15:53:00       |
| UTC zone         | yyyy-mm-ddThh:mm:ss.nnnnnn+\-hh:mm | 2008-09-15T15:53:00+05:00 |
| Date Time in UTC | yyyy-mm-ddThh:mm:ssZ               | 2021-05-10T02:43:42Z      |

### Any


`Any` represents any possible value without any specific format. Use of this data type is highly discouraged. This data type must be serialized to String and it is internally stored as
String. No queries or operations are possible on it. It can be used in extremely rare cases where the existing type system makes something impossible.

:::note

Hypi CRUD APIs do not support [Unions](http://spec.graphql.org/draft/#sec-Unions).  But they can be used in custom serverless functions which do not depend on Hypi’s CRUD APIs

:::

