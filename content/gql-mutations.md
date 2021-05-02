---
id: gql-mutations
title: GraphQL Mutations
sidebar_label: GraphQL Mutations
slug: /gql-mutations
---

As a complete platform, we focus not just on querying but creating and updating your app's data. Similar to queries, mutations must also have data/fields selected. You can ask for any nested fields. This is useful for fetching the new state of an object after an update.

## Form a mutation

You must specify three things when defining a mutation:

1. `Name of the mutation`, typically named after the type of modification you want to perform e.g.`CreateToDo`...but it can be anything you want.

2. The `Input variable`, passed as an argument to the mutation name that contains the data you want to send to the server.

3. `Payload object`, the data you want to send to the server.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Input Data', value: 'data'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```java
mutation CreateTodo( $todos: [TodoInput!]!) {
   createTodo(todo: $todo) {
      hypi {
        id
        created
       }
     description
     completed
   }
 }
```
   
</TabItem>
<TabItem value="data">

```java
   {
     "todo": [ {
       "description": "This is a great todo!"
        "completed":"false",
     }  ]
   }
```

</TabItem>

<TabItem value="response">

```json
{
  "data": {
    "createTodo": [{
        "hypi": {
               "id": "c94144ec-52aa-4337-9d8b-15fa8ec5c979"
               "created": "2019-11-02T15:45:16Z"
           }
        "description": "This is a great todo!"
        "completed":"false",
    }]
  }
}
```

</TabItem>
</Tabs>




