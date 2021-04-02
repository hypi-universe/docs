---
id: authorisation
title: Authorisation
sidebar_label: Authorisation
slug: /authorisation
---

[Authorisation](https://en.wikipedia.org/wiki/Authorization) is the process of specifying access/ rights/ privileges to various resources. It provides information security and computer security to systems. Of course, we can control the access to users as well. The authorisation process decides whether access should be given or denied.

Authorisation defers from [Authentication](authentication.md). Authentication verifies the identity of a user. In authorisation, a user or an application gets permission to access a resource. The resource determines the extent of the permissions it should grant.

Classic authorisation models consist of a triple; a [subject](#subject), an [object](#object), and an `action`. Hypi adopts this triple with few enhancements.

Hypi's authorisation model is similar to [User Managed Access Control](https://en.wikipedia.org/wiki/User-Managed_Access) /UMA. But it is not a compliant implementation of the same.

Check out the concepts involved in the authorisation.

#### Subject

A subject is an entity trying to perform an action or gain access to a resource.

#### Object

An object or a resource is the thing being protected. In Hypi, two primary things can be protected.

+ Resource - any object that exists on the Hypi platform
+ Scope - Any GraphQL field of any type OR any arbitrary Uniform Resource Identifier

## Policy

A policy is an interface with two fields that contain important pieces of information. It has the name of the `subject` to provide authorisation. And it holds the logic of granting or denying access. The values of the logic can be Positive or Negative.
```java
interface Policy {
    hypi: Hypi
    name: String!
    logic: AuthLogic
}
```
There are several parameters to decide the policy of authorisation. One of the main purposes of a policy is to promote re-use. Policies are intended to be created and re-used so that they can be kept as simple as possible.

Hypi has various policy types for different kinds of subjects. Various groups, accounts, roles, realms, clients have individual policy objects. A time-bound access policy is also in place. You can also group various policies with Aggregate policy. 

+  GroupPolicy - Applies to a list of Accounts or Organisations in the groups.
```java
type GroupPolicy implements Policy {
    name:String!
    logic:AuthLogic
    groups(...):[Group!]
}
```
+  RolePolicy - Applies to a list of Roles.
```java
type RolePolicy implements Policy {
    name:String!
    logic:AuthLogic
    roles(...):[Role!]!
}
```
+  AccountPolicy - Applies to a set of Accounts.
```java
type AccountPolicy implements Policy {
    name:String!
    logic:AuthLogic
    accounts(...):[Account!]
}
```
+  RealmPolicy - Applies to a set of Realms.
```java
type RealmPolicy implements Policy {
    name:String!
    logic:AuthLogic
    realms(...):[RealmLink!]
}
```
+  TimePolicy – Allows time-bound access to groups, roles, accounts, realms, and clients.
```java
type TimePolicy implements Policy {
    from:DateTime
    to:DateTime
    name:String!
    logic:AuthLogic
    clients(...):[AuthClient!]
    roles(...):[Role!]
    groups(...):[Group!]
    accounts(...):[Account!]
    realms(...):[RealmLink!]
}
```
+  ClientPolicy - Controls access based on the client used to access a resource. A client acts on behalf of a subject.
```java
type ClientPolicy implements Policy {
    name:String!
    logic:AuthLogic
    clients(...):[AuthClient!]
}
```
+  AggregatePolicy - Allows grouping one or more policies.
```java
type Aggregated Policy implementsPolicy {
    decisionStrategy:DecisionStrategy
    name:String!
    logic:AuthLogic
    policies(...):[Policy!]!
}
```
## Permission

Permission encapsulates the object involved in the authorisation. You may check out the parameters in the [example](#example) section.
```java
type Permission {
    hypi: Hypi
    name: String!
    decisionStrategy: DecisionStrategy
    type: String!
    resource: String
    operationType: OpType!
    includeAllAccounts: Boolean
    policies(**...**): [Policy!]
    scopes(**...**): [String!]!
    operations(**...**): [String]!
}
```
Permissions are based upon various operations the subject wants to perform on the object.

### Update, Delete, Trash, Link and Unlink of a resource

[Mutation](crud.md) permissions may be granted to the subject. It includes update, delete, trash, link, and unlink permissions. All of these functions operate on existing resources. Permission object generates an authorisation request for mutations.

### Searching for resources

The platform uses [ArcQL](arcql.md) query language for finding data. All requests to get data, no matter how trivial the query, goes through ArcQL. During a search, resources that match that search are further filtered down to only those that the subject is allowed to see. So, only certain types of records a subject can access through a query. For example, a password is a resource that is not accessible to any subject except the user.

### Implicit Permission

If no `Permission` is given explicitly, the platform acts as if one is implicitly created with an `AccountPolicy`. This permission grants access to the `Account` which created the object. So, the creator of an object has complete access to it by default - no one else does.

## Permission APIs

Let's look at the APIs related to Permission.

### Permission

The below example demonstrates how to create permission to an account to access an object's details.
```json
mutation {
  upsert(
    values: {
      Permission: [
        {
          name: "Grant access to anonymous user"
          decisionStrategy: Unanimous
          type: "File"
          resource: "<file-id>"
          scopes: ["*"]
          operationType: Query
          operations: ["find"]
          #includeAllAccounts: true, //wildcard so all accounts can access
          policies: [
            {
              hypi: { impl: "AccountPolicy" }
              name: "Grant user anonymous access to my file"
              logic: Positive
              accounts: [{ hypi: { id: "anonymous" } }]
            }
          ]
        }
      ]
    }
  ) {
    id
  }
}

```
Let's check the parameters.

| Parameter              | Type             | Description                                                                                                            |
|------------------------|------------------|------------------------------------------------------------------------------------------------------------------------|
| **Name**               | String           | The description of the permission                                                                                      |
| **decisionStrategy**   | DecisionStrategy | Defines how the policy arrives at a decision, defaults to Unanimous                                                    |
| **type**               | String           | The type or an object that this permission applies to                                                                  |
| **resource**           | String           | If present then the scopes in this permission will have the given policies applied to this resource.                   |
| **operationType**      | OpType           | Query, Mutation, or Subscription                                                                                       |
| **includeAllAccounts** | Boolean          | If true, this permission grants/denies access to all accounts (including anonymous account)                            |
| **policies**           | Policy           | Give access to specific users, groups, etc instead of to all accounts                                                  |
| **scopes**             | String           | An array of the fields to grant access to. Not permitted to access other fields. Use `*’ to give access to all fields. |
| **operations**         | String           | a list of fields in the operationType e.g. find, upsert, or any custom method                                          |

### hasPermission

You may check if the user has permission to access an object's details. You can use the function `hasPermission` for that. The below example demonstrates how to use the function. Refer to the table above to know about the parameters. Make sure you have passed the appropriate session token as the “Authorisation” parameter in the HTTP header. You get a session token after [login](authentication.md) into the account

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
   hasPermission(req:{
     opType:Mutation,
     operationName:"upsert",
     type:"Account",
     resource:"01F0R0BJ9XGDHS2GGM7YY4Y7M1"
     scopes:"username"
 })
}
```

</TabItem>

<TabItem value="response">

```json
{
 "data": {
     "hasPermission": [true]
  }
}
```


</TabItem>
</Tabs>

The function returns `true` if the user has requested permission. Otherwise, it returns `false`.

### me

`me` function returns the details of various permissions for a user. You may access the information of permissions provided to various groups, accounts, roles, realms, and clients. This function returns an object of type PermissionDescription
```java
type PermissionDescription {
    hypi: Hypi
    roles: [Role!]
    groups: [Group!]
    organisations: [Organisation!]
    realms: [Realm!]
    permissions(...): [Permission]
}
```
You may simply use the fields of PermissionDescription to access permission details. Information about the group/organization/role should have been stored while [creating the user account](authentication.md). Otherwise, the fields would return a null value.
```json
{
   me{
        roles{
            name
        }
        organisations{
            name
            phones{
            number
            }
        }
        permissions{
            operations
            operationType
        }
    }
}

```
