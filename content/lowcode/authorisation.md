---
id: authorisation
title: Authorisation
sidebar_label: Authorisation
slug: /lowcode/authorisation
---

[Authorisation](https://en.wikipedia.org/wiki/Authorization) is the process of specifying access/ rights/ privileges to various resources. It provides information security and computer security to systems. Of course, we can control the access to users as well. The authorisation process decides whether access should be given or denied.

Authorisation differs from [Authentication](authentication.md). Authentication verifies the identity of a user. In authorisation, a user or an application gets permission to access a resource. The `AccessRight` object can control access by specifying the resource and the actions allowed on it.

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

Access Rights can be granted by the `system-admin` [Account ](core.md#account)to the users of an instance or domain. A user can also grant other users access to his own data in the same `AppInstance`.

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
  fields: String
  operationType: String!
  operation: String!
  startDate: DateTime
  endDate: DateTime
  permissionType: AccessRightType!
  approved: Boolean
  membersSourceType: String
  membersSourceField: String
  members: [Account!]
}
```

Let's check the parameters.

| Parameter              | Type            | Description                                                                                                                                                                                                                                                                                                          |
|------------------------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **members**            | Account         | The `hypi.id` of the Accounts to grant access rights to. This is an array with `hypi.id`s  of the Accounts.                                                                                                                                                                                                          |
| **membersSourceType**  | String          | If specified, this data type holds the list of members that the access right applies to.                                                                                                                                                                                                                             |
| **membersSourceField** | String          | A field in the `membersSourceType` data type. The field consists of an array of Account objects that this AccessRight applies to.                                                                                                                                                                                    |
| **membersSourceId**    | String          | The `hypi.id` of the object of `membersSourceType`. The object has the list of Accounts to grant access rights to.                                                                                                                                                                                                   |
| **approved**           | Bool            | Set `true` to grant the access. Set `false` to deny the access                                                                                                                                                                                                                                                       |
| **permissionType**     | AccessRightType | Set to RBP for resource based permission                                        SBP for scope based permission                                                                                                                                                                                                       |
| **startDate**          | String          | Start date for access rights grant (Optional)                                                                                                                                                                                                                                                                        |
| **endDate**            | DateTime        | End date for access rights grant (Optional)                                                                                                                                                                                                                                                                          |
| **operationType**      | OpType          | Query, Mutation, or Subscription                                                                                                                                                                                                                                                                                     |
| **operation**          | String          | Operation or method associated with operationType e.g. `find` or `get` for Query type and  `upsert`, `delete` for Mutation type                                                                                                                                                                                      |
| **resourceType**       | String          | The type of an object that the access right gets applied to. This field is required only if permissionType is RBP.                                                                                                                                                                                                   |
| **resource**           | String          | The `hypi.id` of the resource to provide the grant. This field is required only if permissionType is RBP.                                                                                                                                                                                                            |
| **resourceOwnerId**    | String          | This field determines which account's resource AccessRight gives access to. If the user CREATING the AccessRight is NOT a system admin, then this is automatically set to the account ID of the user making the request. If the user is a system admin, then the system admin can set this to any user's account ID. |

:::tip IMPORTANT

`operation`, `operationType` , `resource` , `resourceType` fields support wild card (`*`)

:::

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
* If multiple `AccessRight` objects are created, they must all evaluate as `true` and if at least one evaluates to `false`, then access will be denied.

:::tip TIP

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

:::tip IMPORTANT

Only a system admin can create scope based permissions. By default, the user that created the Hypi instance is the only system admin.

:::

###  Add members using `membersSourceId`

Instead of using the `members` field, you can add members to the `AccessRight` object using `membersSourceId`. 

+ Create a new data type (with any name) and add any field with the [Account!] type. The data type could be an already existing one.
```
type Team {
  # ... other fields
  colleagues: [Account!]
  # ... other fields
}
```
+ Add members to the `Team` type using `upsert`.  `membersSourceId` is the `hypi.id` of the created `Team` object.

<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```
mutation {
  upsert(
    values: {
      Team: [
        {
          colleagues: [
            { hypi: { id: "01G6QCNETWAZ33X6877ZW81MFC" } }
            { hypi: { id: "01G6QCP8D2E2XJMBD4CVQJ3CQ3" } }
          ]
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

```
{
  "data": {
    "upsert": [
      {
        "id": "01G6QD0ZKSZXPX31W0XT1JG1EJ"
      }
    ]
  }
}
```

</TabItem>
</Tabs>

+ Create an access right using `membersSourceId`, `membersSourceType`, and `membersSourceField`. 

``` 
mutation {
  upsert(
    values: {
      AccessRight: [
        {
          resource: "01G6QD42MPA3HDQG5H866W64PQ"
          resourceType: "Book"
          operationType: "Query"
          operation: "get"
          permissionType: RBP
          approved: true
          membersSourceType: "Team",
          membersSourceField: "colleagues"
          membersSourceId: "01G6QD0ZKSZXPX31W0XT1JG1EJ"
        }
      ]
    }
  ) {
    id
  }
}
```

An access right will be automatically granted to `membersSourceField` Account members. If you add a new member to this field, the member account will also get instantaneous access to the resource.

+ To add new `colleagues` to the `Tam`, you can link the `membersSourceType` with member Accounts using the `link` function. 

<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```
mutation {
  link(
    from: Team
    to: Account
    via: "colleagues"
    whereFromID: "01G6QD0ZKSZXPX31W0XT1JG1EJ"
    andToID: "01G6QCP8D2E2XJMBD4CVQJ3CQ3"
  )
}
```

</TabItem>
<TabItem value="response">

```
{
  "data": {
    "link": true
  }
}
```

</TabItem>
</Tabs>

Please note that for the above option to work properly, the user performing the Mutation.link should be the system admin or member of an AccessRight allowing him to link to the other account.

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

### Delete Access Rights

System admin can remove all the access rights.  Some cases do not require the default permissions. Hence, the system admin must first create the access right he needs (MUST do this first or he'll lose access) and then delete the old access rights he doesn't need.

```
mutation {
  delete(type: AccessRight, arcql: "hypi.id = '01F2X8203XKRFR7G62T6SP1MW4'",
  clearArrayReferences:true)
}
```

:::caution

Delete the Access Rights granted to other users one by one. Don't remove all the Access Rights using wildcard (*).

:::

:::note Read More...

* [How to create Resource Based Permissions](https://hypi.dev/t/how-to-create-resource-based-permissions/223)
* [How to create Scope Based Permissions](https://hypi.dev/t/how-to-create-scope-based-permissions/226)
* [How to provide Access Rights to different users](https://hypi.dev/t/how-to-provide-access-rights-to-different-users/235)
* [How to provide access rights to different users (Part 2)](https://hypi.dev/t/how-to-provide-access-rights-to-different-users-part-2/237)
* [How to grant access rights to a Room for exchange of Messages among Users](https://hypi.dev/t/how-to-grant-access-rights-to-a-room-for-exchange-of-messages-among-users/246)

:::
