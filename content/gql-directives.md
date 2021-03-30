---
id: gql-directives
title: GraphQL Directives
sidebar_label: GraphQL Directives
slug: /gql-directives
---

A directive allows you to customise the behaviour of your data model. Hypi's built in directives allow you to tell Hypi how to interact with your fields.

## What is a directive

A`@`character followed by a series of character identifies a directive, optionally followed by a list of named arguments, which can appear after almost any form of syntax in the GraphQL query or schema languages.

For example, we can imagine a UI component that has a summarised and detailed view, where one includes more fields than the other.

```java
 type Item {
       slug: String! @field(indexed: true, type: Keyword)
       title: String! @field(indexed: true)
       description: String @field(indexed: true)
       comments: [Comment!]
  }
```
     
Here, the`@field`part of the model is a directive. It tells Hypi to index the field it appears next to so that data in that field is searchable with [ArcQL](/arcql)

## Built-in directives

The Hypi platform provides many directives for you to use in your app.

### @http

When applied causes the value of the field it is applied to to be resolved using an HTTP query configured with the given parameters Variable substitution is supported of the form`$variable.name` (See [velocity template guide](http://velocity.apache.org/engine/1.7/user-guide.html)) 

The following may be referenced`vars`and`settings``vars`refers to any arguments on the field the directive is applied to so`$vars.firstName`refers to the firstName arg of the field`settings`refers to any instance settings provided in the app

### @tan

A directive which allows any GraphQL definition's field to be provided by a Hypi Arc Tan function. This means that any field in your GraphQL model can get its value from a serverless function.

### @api

If present on an object then it controls which Hypi CRUD functions will be generated for the type. It can be used to prevent e.g. the`create`function from being generated.

### @secret

Fields annotated with the`@secret`directive are never returned. They can only be compared using ArcQL. This is good for password fields._Note_: The value of these fields**CANNOT**be retrieved. You can only run queries to check if the original value matches.

Secrets are encrypted using one of three available algorithms: 1. SHA3 2. BCRYPT 3. PKCS5

### @field

The`@field`directive is used to tell Hypi how to treat the field it is applied to. The`indexed`parameter, if true tells Hypi to index the contents of the field so that it can be searched. The`type`parameter tells Hypi how to index the field. There are two options,`Keyword`and`Text`.`Keyword`should be used for fields like IDs which need to be matched exactly.`Text`should be used for field that need free form search e.g. like using a search engine.

### @length

Valid on String, Object and Array fields. Check if the string or array length matches the range. Checks if the object's list of non-null fields matches the range

### @notNull

Check if the value is not null

### @notEmpty

Check if the string or array is not null nor empty (for strings verifies its not all whitespace).

### @past

Check if the date is in the past

### @future

Check if the date is in the future

### @pattern

Check if the field's value matches the regular expression given a match flag (see[https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html](https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html))

### @email

Check if the field's value is valid email

### @unique

Adding this to any keyword indexed field ensures that no duplicates can be inserted for that field