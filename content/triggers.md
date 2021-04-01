---
id: triggers
title: Triggers
sidebar_label: Triggers
slug: /triggers
---

In many databases and some other systems, it is possible to define a trigger which is executed before or after an even has happened. In Hypi, triggers are supported with both a before and after semantics by adding the `@trigger` directive to a function.

>  Important points to remember

+ Triggers can break existing functions if you decide to completely replace the output
+ A trigger's `before` function is executed synchronously. i.e. it will complete before the function it is attached to
+ A trigger's `after` function is executed asynchronously. i.e. the function it is attached to will return before the trigger is completed.
+ If a trigger's `before` function returns false, the function it is attached to will not be executed, nor will the `after` function.

On this page, we use the following schema:

```java
type PostActionData{
  data: Json
}
type Query {
  allow(values: HypiUpsertInputUnion!):Boolean @tan(type:Groovy, inline: "return true")
  disallow(values: HypiUpsertInputUnion!):Boolean @tan(type:Groovy, inline: "return false")
  deny2:Boolean @tan(type:Groovy, inline: "return false")
  deny1: Boolean @tan(type:Groovy, inline: "return true") @trigger(config: {
    before: {type: Query, field: "deny2"}
  })
}
type Mutation {
  after(hypiResult: [HypiInput!]): Boolean @tan(type: Groovy, inline: """
  gql('''mutation Create($values: HypiUpsertInputUnion!){upsert(values: $values){hypi{id}}}''', new java.util.LinkedHashMap())
  return true
  """)
  upsert(values: HypiUpsertInputUnion!):[Hypi!] @trigger(config: {
    before:{type: Query, field: "allow"},
    after:{type: Mutation, field: "after"}
  })
}
```
#### Example

```java
{
  deny1
}

{
  "data": {
    "deny1": null
  },
  "errors": [
    {
      "message": "Exception while fetching data (/deny1) : io.hypi.arc.os.gql.HypiGraphQLException: Pre-condition given by Query.deny2 failed",
      "locations": [
        {
          "line": 2,
          "column": 3
        }
      ],
      "path": [
        "deny1"
      ]
    }
  ]
}
```

You can see the error message here `Pre-condition given by Query.deny2 failed`. The function `deny1` has a `before` trigger which calls `deny2`. Since `deny2` returns false, the function is not executed.

#### Function overriding

The `upsert` function is overriden in the schema above so that a `@trigger` could be attached. Function overriding is allowed so long as all parameters of the new function match the original exactly. In this case, the built in `upsert` function had a trigger added to it. This can be used to arbitrarily allow or deny access as your app see fit to the function. Care must be taken when overriding functions, upsert for example is used everywhere - breaking it will cause many things to fail.