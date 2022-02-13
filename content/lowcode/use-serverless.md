---
id: use-serverless
title: Use Serverless Function
sidebar_label: Use Serverless Function
slug: /lowcode/use-serverless
---

:::note

OpenWhisk requires a JSON object as output. Hence, serverless function cannot return arrays. It must return an object at the top level which can have arrays inside it.

:::

After the creation of the serverless function on the Hypi namespace, now is the time to use it!

Before you start using the serverless function, you need to define a GraphQL type (Query/Mutation) in the schema like this.

```java
type Query{
    f1(a: Int,b: String): Json @tan(type:OpenWhisk, name:"hithere")
}
```
Here, function `f1`  has been defined with input parameters `a` and `b`and it returns a JSON value. It uses @tan directive to access serverless function `hithere` (Check [this](create-serverless.md) guide on how to create serverless function).

### @tan Directive

@tan directive has the following structure. 

```java
directive @tan(
  type: TanType!
  name: String
  inline: String
  saveAs: String
) on FIELD_DEFINITION
```


| **Parameter** | **Description**                                                                                                                                                                                                                                                                         | **Example**               |
|---------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------|
| **type**      | OpenWhisk type is used for serverless functions. Groovy/Velocity type is used with User Defined Functions                                                                                                                                                                               | Groovy/Velocity/OpenWhisk |
| **name**      | The name of the serverless function in the docker image OR if it is a script, the script's name.Required IFF the "inline" parameter isn't provided.                                                                                                                             | hithere                   |
| **inline**    | Instead of the name of an existing function, short scripts can be provided inline with this field. If name is provided, this is ignored. If this is not provided, name MUST be present. The value of this field is the contents of the script in one of the supported tan script types. |                           |
| **saveAs**    | If present, the result of the function will be stored in Hypi as the given type. The type must exist in the current instance.                                                                                                                                                           |                           |

### Use Serverless Function

It is now time to run the function and pass some real values and obtain the results. Use a query like this.

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
{
  f1(a:1,b:"abc")
}
```

</TabItem>
<TabItem value="response">

```json
{
  "data": {
    "f1": {
      "args": {
        "a": 1,
        "b": "abc"
      },
      "hello": "world"
    }
  }
}
```

</TabItem>
</Tabs>
