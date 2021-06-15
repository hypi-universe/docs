---
id: readdata
title: Read Data
sidebar_label: Read Data
slug: /read-data
---
Read the inserted data by using query functions. `get` and `find` are the two functions that return the data. If you need a single record, use the `get` function. For getting multiple records, use the `find` function.

## Get

The `get` function returns a single record using the ‘id’ of an object. You may use the ‘id’ received after creating the record. The [magic hypi object](hypiobject.md) also contains the ‘id’ of the object (`hypi.id`).

```java
get(type: HypiMutationType!, id: String!): HypiRootAggregate
```
Let’s pass the `Author` data type as an argument to fetch the data. Get the records in the fields like name, booklist, hypi id, created date, updated date. You can get titles and availability of books from the array booklist. You may use the fields from which you want to fetch the data.

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
  get(type: Author, id: "01F0DVHM26HHWS8X8X3NBRSAV6"){
    ... on Author {
      hypi{
        id
        created
        updated
      }
      name
      booklist{
        title
        available
      }
    }
  }
}
```

</TabItem>

<TabItem value="response">

```json
{
  "data": {
    "get": {
      "hypi": {
        "id": "01F0DVHM26HHWS8X8X3NBRSAV6"
      },
      "name": "Dan Brown",
      "booklist": [
        {
          "title": "Da Vinci Code",
          "available": true
        },
        {
          "title": "The Last Symbol",
          "available": false
        },
        {
          "title": "Inferno",
          "available": true
        }
      ]
    }
  }
}
```

</TabItem>
</Tabs>

***

## Find

The second approach to getting data out of an instance is by using the`find` 
function. Unlike the `get` function, this returns a list of objects matching the arcql filter provided.
```java
find(
    type: HypiMutationType!
    arcql: String!
    first: Int
    after: String
    last: Int
    before: String
    includeTrashed: Boolean
): HypiFilterConnection!
```
This function has many parameters. Let’s look at this table to understand them.

| **Parameter**      | **Description**                                                                            | **Example**                                    |
|--------------------|--------------------------------------------------------------------------------------------|------------------------------------------------|
| **type**           | The type (table) to find data from                                                         | Message, Author                                |
| **arcql**          | Query to filter the data                                                                   | arcql: "hypi.id= '01F0FW9XYQWQNNEDYV3S5P2WGQ'" |
| **first**          | Limit the number of records in the              results. Used with the ‘after’ parameter.  | 12                                             |
| **after**          | Return records after an object with this ID                                                | “01F0FW9XYQWQNNEDYV3S5P2WGQ”                   |
| **last**           | Limit the number of records in the              results. Used with the ‘before’ parameter. | 6                                              |
| **before**         | Return records before an object with this ID                                               | “01F0FW9XYQWQNNEDYV3S5P2WGQ”                   |
| **page**           | The page number to be returned                                                             | 3                                              |
| **includeTrashed** | Display Trashed objects in the                     record. ‘false’ by default              | False                                          |

+ ‘first’ and ‘after’ parameters work together. ‘last’ and ‘before’ work together.

+ ‘first’ and ‘last’ are the limits i.e. the max results to return (up to 25)

+ ‘before’ and ‘after’ are the ID of objects to return results before or after.

+ If ‘before’ is set, then results matching the arcql query are returned before this id

+ If ‘after’ is set, then results matching the arcql query are returned after this id

+ ‘includeTrashed’ is false by default. ‘find’ does not return the objects which were trashed using the ‘trash’ function. But if you set this parameter to true or use the untrash method then ‘find’ returns those objects.

+ 'page' number works with the `first` parameter. If this parameter is specified, then the records get divided into pages. Each page has the number of rows specified by the `first` parameter. 

Let’s check the below example. Records from an `Author` object are received using the `find` function. Records of Hypi IDs, updated date, name of the authors, and count of books are returned.

<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```java
{  
   find (
        type: Author, 
        arcql: "hypi.id = '01F0DVHM2AZCGM0JSR9QRNBWZY'"
   ) 
   {
    edges {
      cursor
      node {
        ... on Author {
          hypi {
            id
            updated
          }
          name
          count
        }
      }
    }
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
      pageLimit
      previousOffsets
      nextOffsets
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
          "cursor": "01F0DVHM2AZCGM0JSR9QRNBWZY",
          "node": {
            "hypi": {
              "id": "01F0DVHM2AZCGM0JSR9QRNBWZY",
              "updated": "2021-03-10T10:58:59Z"
            },
            "name": "Paulo Coelho",
            "count": 30
          }
        }
      ],
      "pageInfo": {
        "hasPreviousPage": false,
        "hasNextPage": false,
        "startCursor": "FIRST",
        "endCursor": "LAST",
        "pageLimit": 25,
        "previousOffsets": [],
        "nextOffsets": []
      }
    }
  }
}
```

</TabItem>
</Tabs>

### Pagination

Let's see how the pagination works while retrieving the records.  A `page` has a specific number of rows (`first`). The total number of records get divided by the number of rows to get the number of pages. If the `page` parameter has the value of `n` (integer), the `nth` page gets displayed in the result of  the `find` function.

Suppose the `book` object has the following records. The `after` parameter has the `hypi.id` value of the book alchemist. The pagination starts after the Alchemist record.  Let's say each page has two books (`first` parameter). So, the remaining records after Alchemist get divided into two records each. The table shows the page number of each record.

| **Book**                         | **Page No** |
|----------------------------------|-------------|
| The Last Symbol                  | -           |
| Alchemist ( **after** Parameter) | -           |
| In the wonderland of Investment  | 1           |
| Ikigai                           | 1           |
| Outlook                          | 2           |
| Blink                            | 2           |
| History of nearly everything     | 3           |
| Sapiens                          | 3           |
| Hamlet                           | 4           |
| Merchant of Venice               | 4           |

 Let's retrieve `page` **3** after the alchemist record. Here is the query.
 
<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```java
{
  find(type: Book, arcql: "*", first: 2, after:"01F6EFAYAX79ZG3Q13WGXKDAR5", page:3) {
    edges {
      node {
        ... on Book {
         title
          
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
            "title": "History of nearly everything"
          },
          "cursor": "01F6EFAYBSDNHTHVQRGJRDJPPK"
        },
        {
          "node": {
            "title": "Sapiens"
          },
          "cursor": "01F6EFAYBXQPRTJFB1K5QE29SM"
        }
      ]
    }
  }
}
```
</TabItem>
</Tabs>

If the `after` parameter has not been specified, the pagination begins from the first record.

:::note

`page` parameter doesn't work with the `before` parameter.

:::

