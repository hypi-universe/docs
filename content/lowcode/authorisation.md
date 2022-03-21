---
id: authorisation
title: Authorisation
sidebar_label: Authorisation
slug: /lowcode/authorisation
---

[Authorisation](https://en.wikipedia.org/wiki/Authorization) is the process of specifying access/ rights/ privileges to various resources. It provides information security and computer security to systems. Of course, we can control the access to users as well. The authorisation process decides whether access should be given or denied.

Authorisation defers from [Authentication](authentication.md). Authentication verifies the identity of a user. In authorisation, a user or an application gets permission to access a resource. The resource determines the extent of the permissions it should grant.

Classic authorisation models consist of a triple; a [subject](#subject), an [object](#object), and an `action`. Hypi adopts this triple with few enhancements.

Hypi's authorisation model is similar to [User Managed Access Control](https://en.wikipedia.org/wiki/User-Managed_Access) /UMA. But it is not a compliant implementation of the same.

Check out the concepts involved in the authorisation.

#### Subject

A subject is an entity trying to perform an action like query or mutation or gain access to a resource.

#### Object

An object or a resource is the thing being protected. In Hypi, two primary things can be protected.

+ Resource - any object that exists on the Hypi platform
+ Scope - Any GraphQL field of any type OR any arbitrary Uniform Resource Identifier

## Hypi's Authorisation System 

By default, permission is denied to everything and everyone. When a user registers on the platform,  default permissions are granted to him. 

Access Rights can be granted by the `system-admin` [Account ](#)to the users of an instance or domain. 

Rights include permission to view or modify a resource/data. The rights are based upon various operations the subject wants to perform on the object.

### Update, Delete, Trash, Link and Unlink of a resource

[Mutation](crud.md) rights may be granted to the subject. It includes update, delete, trash, link, and unlink permissions. All of these functions operate on existing resources. `AccessRight` object generates an authorisation request for mutations.

### Searching for resources

The platform uses [ArcQL](arcql.md) query language for finding data. All requests to get data, no matter how trivial the query, goes through ArcQL. During a search, resources that match are further filtered down to only those that the subject is allowed to see. So, only certain types of records a subject can access through a query. For example, a password is a resource that is not accessible to any subject except the user.

### Implicit Access Rights

If no `Access Right` is given explicitly, the platform acts as if one is implicitly created for the `Account` which created the object. So, the creator of an object has complete access to all its resources by default - no one else does.

## AccessRight

**AccessRight** encapsulates the object involved in the authorisation. 

```java
type AccessRight {
  resource: String!
  resourceType: String!
  #By default the user creating the permission, if it is provided and is not the same user then there must be a
  #AccessRight that exists with the operation name "grantPermission" that was created by the owner of the target resource
  resourceOwnerId: String
  resourceOwnerInstanceId: String
  fields: String
  operationType: String!
  operation: String!
  startDate: DateTime
  endDate: DateTime
  permissionType: AccessRightType!
  approved: Boolean
  members: [Account!]
}
```

Let's check the parameters.

| Parameter          | Type            | Description                                                                                                        |
|--------------------|-----------------|--------------------------------------------------------------------------------------------------------------------|
| **members**        | Account         | The `hypi.id` of the Accounts to grant access rights to                                                            |
| **approved**       | Bool            | Set `true` to grant the access. Set `false` to remove the access                                                   |
| **permissionType** | AccessRightType | Set to RBP for resource based permission                                        SBP for scope based permission     |
| **startDate**      | String          | Start date for access rights grant (Optional)                                                                      |
| **endDate**        | DateTime        | End date for access rights grant (Optional)                                                                        |
| **operationType**  | OpType          | Query, Mutation, or Subscription                                                                                   |
| **operation**      | String          | Operation or method associated with operationType e.g. find or get for Query type                                  |
| **resourceType**   | String          | The type of an object that the access right gets applied to. This field is required only if permissionType is RBP. |
| **resource**       | String          | The `hypi.id` of the resource to provide the grant. This field is required only if permissionType is RBP.          |
| **fields**         | String          | Specify the field of a resourceType to grant access only to the field data of the object. (Optional)               |

###  Resource Based Permission (RBP)

Resource based permision (RBP) is an access right that protects data in a resource. 

The below example demonstrates how to create an Access Right for a resource. 
It creates an access to a user account to execute [get](https://docs.hypi.app/docs/lowcode/read-data#get) query for the object of type `Book`. 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```json
mutation {
  upsert(
    values: {
      AccessRight: [
        {
          resource: "01FX0GXS7DCAQ6RV2R0ZAYTW34"
          resourceType: "Book"
          operationType: "Query"
          operation: "get"
          permissionType: RBP
          approved: true
          members: { hypi: { id: "01FX0GS3N002781PK421EETAT8" } }
        }
      ]
    }
  ) {
    id
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
        "id": "01FYNPB3SYTAVA0J76VJP2ZB2H"
      }
    ]
  }
}
```

</TabItem>
</Tabs>

* After successfully granting the Access Right, member user can see/retrieve data from the `Book` object. (`hypi.id` of the Book object is given in the `resource` field). 
* You can provide access to multiple users by providing `hypi.id` s of the users in the `members` field.   
* You can use wild card `*` to provide acces to all users. Use `{ hypi: { id: "*" } }` in the members field to provide access to all users.
* If you use `*` in the resource field, it means that access has been granted to all the objects of the `Book` type that are owned by the user creating the `AccessRight`. That is to say, a wildcard on a resource can grant access to all my resources but not to the resources of other users.

:::note

To test if the `AccessRight` is working, [login](authentication.md#login) the member user. A new `Authorization Token` will get generated. Using the new token, retrieve the data from the resource using the `get` query.

:::

###  Scope Based Permission (SBP)

Scope Based permission(SBP) is an access right that protects a method e.g. Query.find. When you create a SBP, the resource Id is ignored. 

The below example creates Scope Based Permission to a user account to execute `upsert` mutation on `Book` objects. It means user can create or update objects of Book type. 

<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```json
mutation {
  upsert(
    values: {
      AccessRight: [
        {
          resource:"*"
          resourceType:"Book"
          operationType: "Mutation"
          operation: "upsert"
          permissionType: SBP
          approved: true
          members: { hypi: { id: "01FVWJQQN0WW87S5AZZ2RZMYHE" } }
        }
      ]
    }
  ) {
    id
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
        "id": "01FYNPB3SYTAVA0J76VJP2ZB2H"
      }
    ]
  }
}
```

</TabItem>
</Tabs>

:::imp

Only a system admin can create scope based permissions. By default, the user that created the Hypi instance is the only system admin.

:::

###  Check Access Rights

You may check if the user has permission to access an object's details. Use `get` or `find` function to get details of `AccessRight` object.

```
{
  get(type: AccessRight, id: "01FVWTKBBZ21JYDPXJHA7H5SVY") {
    ... on AccessRight {
      resource
      resourceType
      operation
      operationType
      permissionType
      approved
      members {
        hypi {
          id
        }
        username
      }
    }
  }
}
```