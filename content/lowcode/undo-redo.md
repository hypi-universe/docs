---
id: undo-redo
title: Undo / Redo APIs
sidebar_label: Undo / Redo APIs
slug: /lowcode/undo-redo
---

Hypi supports the **Versioning** of saved data on the object level. You can roll back data to a specific version. It is also possible to restore the rolled-back data.

###  @versioned 

The `@versioned` directive tracks the version of each object that holds a data of certain type . Declare the data type using the `@versioned` directive as below.

```
type VersionedObj @versioned {
 data: String 
}
```

The `version` field in the [hypi](magic-hypi-object.md) object automatically generates a version for each object created for a data type.  Or you can create an object with a unique version number.

```
mutation {
  upsert(values: { VersionedObj: { data: "abc", hypi: { version: 1 } } }) {
    id
  }
}
#result
{
  "data": {
    "upsert": [
      {
        "id": "01GCBVD8J5Y9H94HC23CTWR8J7"
      }
    ]
  }
}
```
Update the object data by changing the version number. The version number gets automatically generated if not specified.

```
mutation {
  upsert(
    values: {
      VersionedObj: {
        data: "xyz"
        hypi: { id: "01GCBVD8J5Y9H94HC23CTWR8J7", version: 2 }
      }
    }
  ) {
    id
  }
}
```

This way `version` saves different copies of the data inserted in an object. Hypi facilitates navigation through these copies or versions using `undo` and `redo` functions.

###  undo 

The `undo` function rolls back the data to a previous version or a specified version. Provide the object `hypi.id` and data `type` as parameters to the function. To roll back the data to a specific version, provide the `version` number as well.

Let's check the `undo` function.

```
undo(
	type: String!
	id: ID!
	version: Long
): Boolean
```

| Parameter | Description                                                                                                                              | Example                      |
|-----------|------------------------------------------------------------------------------------------------------------------------------------------|------------------------------|
| type      | Data type                                                                                                                                | "VersionedObj"               |
| id        | `hypi.id` of the object to roll back data from                                                                                           | "01GCBVD8J5Y9H94HC23CTWR8J7" |
| version   | Version number to roll back data to. This is an optional parameter. If it isn't provided, data gets rolled back to the previous version. | 1                            |
Let's execute the function on the data previously inserted.

```
mutation {
  undo(type: "VersionedObj", id: "01GCBVD8J5Y9H94HC23CTWR8J7", version: 1)
}
#result
{
  "data": {
    "undo": true
  }
}
```
Retrieving the data shows data from version 1.

```
{
  get(type: VersionedObj, id: "01gceewc1yp1wcz1j7d8p9tn2k") {
    ... on VersionedObj {
      hypi {
        id
        version
      }
      data
    }
  }
}
#result
{
  "data": {
    "get": {
      "hypi": {
        "id": "01gceewc1yp1wcz1j7d8p9tn2k",
        "version": 1
      },
      "data": "abc"
    }
  }
}
```

###  redo

The `redo` function restores the rolled back data. Provide the object `hypi.id` and data type as parameters to the function. To restore the data to a specific version, provide the version number as well.

Let's check the `redo` function.

```
redo(
	type: String!
	id: ID!
	version: Long
): Boolean
```

| Parameter | Description                                                                                                                         | Example                      |
|-----------|-------------------------------------------------------------------------------------------------------------------------------------|------------------------------|
| type      | Data type                                                                                                                           | "VersionedObj"               |
| id        | hypi.id of the object for which the data needs to be restored                                                                       | "01GCBVD8J5Y9H94HC23CTWR8J7" |
| version   | Version number to restore data to. This is an optional parameter. If it isn't provided, data gets restored to the previous version. | 2                            |
Let's execute the function to restore previously rolled back data.

```
mutation {
  redo(type: "VersionedObj", id: "01GCBVD8J5Y9H94HC23CTWR8J7", version: 2)
}
#result
{
  "data": {
    "redo": true
  }
}
```
