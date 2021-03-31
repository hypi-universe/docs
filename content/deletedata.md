---
id: deletedata
title: Delete Data
sidebar_label: Delete Data
slug: /delete-data
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

```
mutation {
  trash(type: Author, 
  arcql: "hypi.id = '01F0DN278W6NMQFRW4TVRCA52V'")
}
```
```json
{
  "data": {
    "trash": 1
  }
}
```
If you use the ‘get’ or ‘find’ queries now, the result will not display the trashed object by default. You must set the ‘includeTrashed’ parameter to ‘true’ to get the object.

***

## untrash

The opposite of the trash function is `untrash`. Use this function to remove the marker from the data that was previously marked as trash.
```
untrash(type: HypiMutationType!, arcql: String!): Int!
```
The function returns the number of records that were marked untrashed.

```
mutation {
  untrash(
  type: Author, arcql: "hypi.id = '01F0DN278W6NMQFRW4TVRCA52V'")
}
```
```json
{
  "data": {
    "untrash": 1
  }
}
```

***

## delete

If you want to delete data permanently, use the `delete` function.
```
delete(type: HypiMutationType!, arcql: String!): Int!
```
The function returns the number of records that were marked deleted.
```
mutation {
  delete(type: Author, 
  arcql: "hypi.id = '01F0DVHM2AZCGM0JSR9QRNBWZY'")
}
```
```json
{
  "data": {
    "delete": 1
  }
}
```
You may delete more records using the ArcQL query. Maximum 25 records will be deleted in one request.

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
```json
{
  "data": {
    "deleteScalars": 2
  }
}