---
id: triggers
title: Triggers
sidebar_label: Triggers
slug: /lowcode/triggers
---

In many databases and some other systems, it is possible to define a trigger that is executed before or after an event has happened. A trigger is used to maintain the integrity of the data. Or it can be used to automate a response to any event. For example, sending a welcome email when a new customer adds to the database, validating the data before creating an entry, etc.

In Hypi, triggers are supported with both a `before` and `after` semantics by adding the `@trigger` directive to a function.

The `before` function gets executed before the function being called. It can be used for validation or calling other services. If it fails, it prevents the execution of the function being called.

The `after` function gets executed after the called function. It cannot affect the results of the function being called. It can be used to notify another service of an operation being compelted.

> Important points to remember

+ Triggers can break existing functions if you decide to completely replace the output. You may override the existing functions using Trigger.

+ A trigger's `before` function is executed synchronously. i.e. it will complete before the function it is attached to.

+ A trigger's `after` function is executed asynchronously. i.e. the function it is attached to will return before the trigger is completed.

+ If a trigger's `before` function returns false, the function it is attached to will not be executed, nor will the `after` function.

Let’s go through the below schema to create a trigger and before/after functions:

```java
type AfterResult {
    check: String
}

type Query {
  # Before/After function
  truereturn:Boolean @tan(type:Groovy, inline: "return true")
  # Trigger Function 1    
  functiontrigger1:String @tan(type:Groovy, 
    inline: "return 'Trigger Successful!'") @trigger(config: {
    before: {type: Query, field: "truereturn"},  
    after: {type: Query,field: "truereturn"}
  })
  # Trigger Function 2    
  functiontrigger2(trigname:String):String @tan(type:Groovy, 
  inline: "return 'Trigger Successful'") @trigger(config: {
    before: {type: Mutation, field: "falsereturn"},
  })
  # Trigger Function 3    
  functiontrigger3(trigname:String):String @tan(type:Groovy, 
  inline: "return 'Trigger Successful'") @trigger(config: {
    before: {type: Query, field: "truereturn"},
    after: {type: Mutation,field: "falsereturn"}
  })
}

type Mutation {
  #Before/After function  
  falsereturn(trigname:String):Boolean @tan(type:Groovy, inline:"""
    gql(\"""
    mutation {
        upsert(values: {
            AfterResult: {
                check: "'$trigname' Failed"
            }
        }
        ) {
            id
        }
    }
    \""")     
    return false
    """)  
}
```

## Example

In the above schema, three functions are declared to which trigger is attached using the @trigger directive. (functiontrigger1,functiontrigger2,functiontrigger3). `truereturn` and `falsereturn` functions work as before/after functions. Trigger functions and before/after functions are implemented just like User Defined Functions.

For functiontrigger1, before and after functions return ‘true’. For functiontrigger2, before function fails. And for functiontrigger3 before function returns true, but after function fails.

Let’s execute the functions!

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```java
query {
  functiontrigger1
  functiontrigger2(trigname:"Before Function")
  functiontrigger3(trigname:"After Function")
}
```

</TabItem>
<TabItem value="response">

```java
{
  "data": {
    "functiontrigger1": "Trigger Successful!",
    "functiontrigger2": null,
    "functiontrigger3": "Trigger Successful"
  },
  "errors": [
    {
      "message": "Exception while fetching data (/functiontrigger2) : io.hypi.arc.os.gql.HypiGraphQLException: Pre-condition given by Mutation.falsereturn failed",
      "locations": [
        {
          "line": 3,
          "column": 3
        }
      ],
      "path": [
        "functiontrigger2"
      ]
    }
  ]
}

```

</TabItem>
</Tabs>

+ `functiontrigger1` is successfully executed as `before` function ( `truereturn` ) returns true. `After` function ( `truereturn` ) also returns true.

+ `functiontrigger2` fails as before functions ( `falsereturn` ) fails.  You can see the error message here `Pre-condition given by Mutation.falsereturn failed`.  As `before` function returns false, the function does not get executed.

+ `functiontrigger3` is successfully executed as `before` function ( `truereturn` ) returns true. However, `after` function returns false. But this does not affect the execution of the trigger function `functiontrigger3`.

`AfterResult` object holds the name of the function (before/after) which failed. Let's verify the objects using find function.

<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```java
{
  find(type: AfterResult, arcql: "*") {
    edges {
      node {
        ... on AfterResult {
          check
        }
      }
      cursor
    }
  }
}
```

</TabItem>
<TabItem value="response">

```json
{
  "data": {
    "find": {
      "edges": [
        {
          "node": {
            "check": "'Before Function' Failed"
          },
          "cursor": "01F2RCK09MKCG58W2W54CMCQK2"
        },
        {
          "node": {
            "check": "'After Function' Failed"
          },
          "cursor": "01F2RCK0D17HV9JSE79KPG4JXJ"
        }
      ]
    }
  }
}
```

</TabItem>
</Tabs>

You can see that 'Before Function' of `functiontrigger2` got executed and it returned false. Hence the Trigger was unsuccessful. 

'After Function'  of  `functiontrigger3` failed. It indicates that After function got executed and failed but still Trigger was successful.

:::note

We have added `AfterResult` just for demonstration puropse. It indicates how After/Before function can be implemented.

:::

## Function overriding

The in-built function of Hypi can be overriden using Trigger. Function overriding is allowed so long as all parameters of the new function exactly match the original parameters. This can be used to arbitrarily allow or deny access to a functionality depending upon the event to be handled by your App.

:::caution

Care must be taken when overriding functions. `upsert` for example is used everywhere - breaking it will cause many things to fail.

:::

Let's override built-in `upsert` function using `@trigger` .  You may allow or disallow insertion of data by overriding this function. Please check below schema. 

```java
type Query {
  allow(values: HypiUpsertInputUnion!)
      :Boolean @tan(type:Groovy,inline: "return true")
  disallow(values: HypiUpsertInputUnion!)
      :Boolean @tan(type:Groovy, inline: "return false")
}

type Mutation {
  after(values: HypiUpsertInputUnion!)
      : Boolean @tan(type: Groovy, inline: """
        gql('''
        mutation Create($values: HypiUpsertInputUnion!){
            upsert(values: $values) {
                hypi{id}
            }
        }''', new java.util.LinkedHashMap())
        return true
      """)
  upsert(values: HypiUpsertInputUnion!):[Hypi!] @trigger(config: {
    before:{type: Query, field: "allow"},
    after:{type: Mutation, field: "after"}
  })
}
```

If you insert the data, the upsert function works as before. The data gets added into the object successfully. However, if you set `before` function to `disallow`, the insertion of data fails as the disallow function returns false.

<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```java
mutation {
  upsert(values: { 
    Email: { value: "abc@xyz.com" } }
  ) {
    id
  }
}
```
</TabItem>
<TabItem value="response">

```java
{
  "data": {
    "upsert": null
  },
  "errors": [
    {
      "message": "Exception while fetching data (/upsert) : io.hypi.arc.os.gql.HypiGraphQLException: Pre-condition given by Query.disallow failed",
      "locations": [
        {
          "line": 2,
          "column": 3
        }
      ],
      "path": [
        "upsert"
      ]
    }
  ]
}
```

</TabItem>
</Tabs>