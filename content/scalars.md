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

While returning an Int data type, GraphQL services convert non-integer internal values to Int without losing the information whenever required. E.g. returning 1 for floating value 1.0 or returning 123 for string “123” etc. When the value is less than -2^31 or greater than or equal to 2^31, a field error should be raised.

When expected as an input data type, the Int field accepts only a signed 32-bit integer. All other inputs like string, float raise an error.

### Float

`Float` scalar type represents a `signed double-precision finite floating-point value` as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_754).

While returning an Int data type, GraphQL services convert non-floating point internal values to Float without losing the information whenever required. E.g. returning 1.0 for integer 1 or 123.0 for string “123”. Non-finite floating-point internal values (NaN and Infinity) cannot be coerced to Float and must raise a field error.

When expected as an input data type, both integer and float values are accepted. Input integer values are coerced to Float by adding an empty fractional part. E.g. 1.0 for 1. Any other input type including string with numeric content raises an error.

### String

`String` data type represents a `UTF‐8 character sequence`. It is a free-form human-readable text. How the string is encoded to UTF-8 internally is left to the service implementation.

While returning a String data type, GraphQL services coerce non-raw string values to String without losing the information whenever required. E.g. ‘true’ for the Boolean true value of “1” for int 1.

When expected as an input data type, the String field accepts only valid Unicode string input. All other inputs raise an error.

### Boolean

`Boolean` type represents `true` or  `false`.

While returning a Boolean value, GraphQL services coerce non-Booleanraw values to Boolean without losing the information whenever required. E.g. returning ‘true’ for non-zero numbers.

When expected as an input data type, the Boolean field accepts only valid Boolean input. All other inputs raise an error.

### ID

`ID` scalar type represents a `unique identifier`, often used to refetch an object or as the key for a cache. ID is serialized as String, but it is not intended to be human-readable.

ID could represent, from small auto-increment numbers to large 128-bit random numbers, to base64 encoded values, or string values of a format like GUID. GraphQL services should coerce as appropriate given the ID formats they expect.

When expected as an input data type, both integer and string values are accepted. Input integer(1 or -1) or string (“1”) values are coerced to appropriate ID formats. Any other input type including float raises an error.

## Custom Scalars

Hypi supports custom scalar types in addition to the built-in scalars.

### UUID

`UUID` represents a scalar serialized as a string conforming to [RFC 4122](https://en.wikipedia.org/wiki/Universally_unique_identifier). When querying a field of type UUID, you can then rely on the ability to parse the result with an RFC 4122 compliant parser.

### Json

`JSON` (JavaScript Object Notation) is a lightweight format for storing and transporting data. Hypi supports declaring JSON data type for a field. Json type accepts only Json values while entering input or returning a value.

### DateTime

`DateTime` represents valid [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date time value.`DateTime` type accepts only valid ISO 8601 date-time values while entering input or returning a value.

### Any

`Any` represents any possible value without any specific format. Use of this data type is highly discouraged. This data type must be serialized to String and it is internally stored as String. No queries or operations are possible on it. It can be used in extremely rare cases where the existing type system makes something impossible.

:::note

Hypi CRUD APIs do not support [Unions](http://spec.graphql.org/draft/#sec-Unions).  But they can be used in custom serverless functions which do not depend on Hypi’s CRUD APIs

:::