---
id: deletedata
title: Delete Data
sidebar_label: Delete Data
slug: /lowcode/delete-data
---
The hypi platform supports two types of deletions. The first one is a **Soft Delete** that does not actually delete data but ‘marks’ it as deleted. Use the `trash` function to perform a soft delete. You may reverse the soft delete to restore data.

The second type of delete is irreversible. The data is permanently deleted from the system and cannot be undone. Use the `delete` or `deleteScalars` functions to delete data permanently.

So, there are four functions related to deletion.

> Let's check them out!

+ [trash](#trash)
+ [untrash](#untrash)
+ [delete](#delete)
+ [deleteScalars](#deletescalars)


***

## trash

In some cases, you want your data to ‘appear’ deleted. But you may restore it if required. Take an example of an email application. There is often a "recycle" or "trash" folder. By using the `trash` function, you can put unwanted data in Trash.
```
trash(type: HypiMutationType!, arcql: String!): Int!
```
The function returns the number of records that were marked as trash.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```
mutation {
  trash(type: Author, 
  arcql: "hypi.id = '01F0DN278W6NMQFRW4TVRCA52V'")
}
```

</TabItem>

<TabItem value="response">

```json
{
  "data": {
    "trash": 1
  }
}
```

</TabItem>
</Tabs>

If you use the ‘get’ or ‘find’ queries now, the result will not display the trashed object by default. You must set the ‘includeTrashed’ parameter to ‘true’ to get the object.

***

## untrash

The opposite of the trash function is `untrash`. Use this function to remove the marker from the data that was previously marked as trash.
```
untrash(type: HypiMutationType!, arcql: String!): Int!
```
The function returns the number of records that were marked untrashed.

<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```
mutation {
  untrash(
  type: Author, arcql: "hypi.id = '01F0DN278W6NMQFRW4TVRCA52V'")
}
```

</TabItem>

<TabItem value="response">

```json
{
  "data": {
    "untrash": 1
  }
}
```

</TabItem>
</Tabs>

***

## delete

If you want to delete data permanently, use the `delete` function.

```java

delete(type: HypiMutationType!, arcql: String!,clearArrayReferences:Boolean=false): Int!

```

The function returns the number of records that were marked deleted. You may delete the records using the ArcQL query. The `arcql` parameter takes the query. Maximum 25 records will be deleted in one request.

`clearArrayReferences` parameter is used to implement deletion of the array fields with one-to-many references. (See [References](references.md).)

Hypi supports “lightweight” [Referential Integrity](https://en.wikipedia.org/wiki/Referential_integrity) on array fields. The referential integrity check can be forcibly disabled by setting the `clearArrayReferences` to `true` when deleting objects. The default is set to 'false' which means if there are existing references to an object, you cannot delete it. But setting `clearArrayReferences` to true removes the references by unlinking the referenced objects and then deletes the object specified by 'arcql' query.

:::note

Setting `clearArrayReferences` to true only removes references to data in array fields as the name implies and it does not delete the referenced objects in the array. Only the object specified by the 'arcql' field will get deleted.

:::

Let's look at the example from our `Author` and `Book` data types now. If you try to delete data from Book table without setting `clearArrayReferences` values, it would result in an error. As the references exist between Author and Book tables through the 'booklist' field, the Book records cannot be deleted without removing the references.

<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```
mutation {
  delete(type: Book, arcql: "hypi.id = '01F2X8203XKRFR7G62T6SP1MW4'")
}
```

</TabItem>

<TabItem value="response">

```json
{
  "data": null,
  "errors": [
    {
      "message": "There are at least 1 references to the data being deleted. A sample of references found is included.",
      "extensions": {}
    },
    {
      "message": "Author.booklist links to Book. Use unlink to remove the reference before deleting",
      "extensions": {}
    },
    {
      "message": "Cannot return null for non-nullable type: 'Int' within parent 'Mutation' (/delete)",
      "path": [
        "delete"
      ]
    }
  ]
}
```

</TabItem>
</Tabs>

Setting parameter `clearArrayReferences` to `true` will remove the object. 

<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```
mutation {
  delete(type: Book, arcql: "hypi.id = '01F2X8203XKRFR7G62T6SP1MW4'",
  clearArrayReferences:true)
}
```

</TabItem>

<TabItem value="response">

```json
{
  "data": {
    "delete": 1
  }
}
```

</TabItem>
</Tabs>

:::caution

`clearArrayReferences` can lead to an inconsistent state if your app re-uses object IDs. Hypi never re-use an object ID but if you specify your IDs manually make sure not to re-use them. Otherwise using `clearArrayReferences` and then using an ID that was deleted will result in the new object reappearing on non-array fields but pointing to the new data. This is because `clearArrayReferences` only removes references to data in array fields as the name implies.

:::

Please note that you may remove the references using the [unlink](references.md) function and then delete the object without setting `clearArrayReferences` field.  You may not set `clearArrayReferences` if you are deleting objects that do not deal with an object- array or have one-to-many references.

***

##  deleteScalars

Array fields in Hypi are not stored directly with the other scalar fields in an object. This allows you to add an unlimited number of items to an array field. So, if you want to delete data permanently from a scalar array, use the `deleteScalars` function.

If there is an array that references another type, note that deleteScalars will not delete scalar data from that array. ‘link’ function is used for that purpose.
```java
deleteScalars(
    type: HypiMutationType!
    field: String!
    values: [String!]!
    arcql: String!
): Int!
```


| **Parameter** | **Description**                                     | **Example**                       |
|---------------|-----------------------------------------------------|-------------------------------------------------|
| **type**      | The type (table) to delete scalar array values from | Message, Author                                 |
| **field**     | The name of the array field                         | Number                                          |
| **values**    | The values to be deleted                            | \[2,5,6\]                                       |
| **arcql**     | The id of the object to delete values from          | arcql: "hypi.id=  '01F0FW9XYQWQNNEDYV3S5P2WGQ'" |

> Consider the data type ‘Question’ which holds question-answer keys for a test.

```java
type Question {
    hypi: Hypi
    question: [Int!]
    answer: [String!]  
}
```
 The below example shows the use of the ‘deleteScalars’ function to delete data from scalar arrays. In the example, from an ‘ans’ field from Question, string values (“b” and “c”) are deleted. The function returns the number of records affected by the deletion.

Frame arcql query to select the object and get an id. In the example, hypi id has been hardcoded.

<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```java
mutation{
  deleteScalars(
    type:Question,
    field:"ans",
    values:["b","c"],
    arcql:"hypi.id ='01F0FW9XYQWQNNEDYV3S5P2WGQ'"
  )
}
```

</TabItem>

<TabItem value="response">

```json
{
  "data": {
    "deleteScalars": 2
  }
}
```

</TabItem>
</Tabs>
