---
id: updatedata
title: Update Data
sidebar_label: Update Data
slug: /lowcode/update-data
---

To perform an update for a created object, you can use the `upsert` function in the same format. The only difference is we need to pass on created id value to locate the object. Notice that we have passed on the same id values from hypi objects to the update information of two different authors. If the update is successful, the same id values are returned. 

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
          "hypi": 
          { 
             "id": "01F0DVHM26HHWS8X8X3NBRSAV6" 
          },   
          "booklist": [
              {
                "title": "Inferno",
                "available": true	
              }
          ]
    	},
        {
          "hypi": 
          {
              "id": "01F0DVHM2AZCGM0JSR9QRNBWZY"
          }, 
          "count": 30
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

If you don’t provide the id, a new object would be created. It may also result in the repetition of data.

> More Information:

+ You are free to mix insert and update operations. The system will accept and process them correctly.

+ The order of execution is undefined. Hypi can choose to process multiple requests sent in one query in parallel.

+ There is a limit of 25 records per request.

+ There is a request timeout of 2 seconds. The entire operation must complete within this timeframe.