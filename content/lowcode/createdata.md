---
id: createdata
title: Create Data
sidebar_label: Create Data
slug: /lowcode/create-data
---

“Create” functions as a mutation to insert data in the table. After creating an instance, you may want to add data to it. Just one function does the job of inserting and updating data, i.e. `upsert`.
```java
upsert (values: HypiUpsertUnion!) : [Hypi!] !
```
Notice the argument ‘values’ is plural because it allows you to create or update multiple values in a single request.

> Let’s go through an example. 

You may use the below example to insert data into an instance (Information related to Authors)
Run `upsert` GraphQL mutation in the [GraphQL Playground](ui-gql-playground.md) query section. Provide input data values in `Query variables` section. 

The result can be seen in response section. `id` value from the magic hypi object gets returned, when the data gets added to the tables successfully. You can see that data goes to `data` root as shown in the response. 

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

```graphql
  mutation Upsert($values: HypiUpsertInputUnion!) {
    upsert(values: $values) {
      id
    }
  }
```

</TabItem>
<TabItem value="data">

```json
  {
    "values": {
      "Author": [
      {
          "name": "Dan Brown",
          "age": 56,
          "booklist": [
            {
              "title": "Da Vinci Code",
              "publication": "abc",
              "available": true
            },
            {
              "title": "The Last Symbol",
              "publication": "pqr",
              "available": false
            }
          ]
      },
      {
        "name": "Paulo Coelho",
        "age": 70,
        "booklist": [
            {
              "title": "Alchemist"
            }         
          ]
        }     
      ]
    }
  }

```

</TabItem>

<TabItem value="response">

```json
  {
    "data": {
      "upsert": [
        {
          "id": "01F0DVHM26HHWS8X8X3NBRSAV6"
        },
        {
          "id": "01F0DVHM2AZCGM0JSR9QRNBWZY"
        }
      ]
    }
  }

```

</TabItem>
</Tabs>

For each object i.e. author, an id gets attached automatically. In the above example, we have passed hard-coded data in the form of a query variable. While passing on the data from User Interface, you may pass the data in the form of JSON. Just add JSON data into the variable ‘values’.