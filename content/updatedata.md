---
id: updatedata
title: Update Data
sidebar_label: Update Data
slug: /update-data
---
To perform an update for a created object, you can use the `upsert` function in the same format.
```java
mutation Upsert($values: HypiUpsertInputUnion!) {
  upsert(values: $values) {
    id
  }
}
```
The only difference is we need to pass on created id value to locate the object. Notice we have passed on the same id values from hypi objects to the update information of two different authors.

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
If the update is successful, the same id values are returned. If you don’t provide the id, a new object will get created. It may also result in the repetition of data.
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

+ You are free to mix insert and update operations. The system will accept and process them correctly.

+ The order of execution is undefined. Hypi can choose to process multiple requests sent in one query in parallel.

+ There is a limit of 25 records per request.

+ There is a request timeout of 2 seconds. The entire operation must complete within this timeframe.