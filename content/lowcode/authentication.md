---
id: authentication
title: Authentication
sidebar_label: Authentication
slug: /lowcode/authentication
---

Authentication involves verifying the identification of a user. The credentials of the user are matched against the credentials in the database. Users are generally identified with a user id or an email.

Authentication is important. It keeps the resources secure from unauthenticated users. The resources may include networks, databases, websites, and other applications. 

Hypi provides authentication functions to its users. The functions are easy-to-use. You can [create a password-protected account](#createaccount) with a user name or an email. You can [log in to the account](#login) with saved credentials.

## createAccount

`createAccount` is a mutation that creates a new user account. You need to provide the credentials of the user. It generates a new user account. This account can be used to login and perform various actions.
```java
createAccount(value: AccountInput!): Hypi
```
`Account` is a data type (table) which holds the information of an account.
```java
type Account {
    hypi: Hypi
    verified: Boolean
    enabled: Boolean
    username: String!
    password: Password!
    owner: Person
    emails(...): [Email!]
    phones(...): [Phone!]
    groups(...): [Group!]
    roles(...): [Role!]
    attempts(...): [LoginAttempt!]
    remoteLogins(...): [RemoteLogin!]
}
```
You may pass on parameters to the Account object to store Account information. E.g. username, password, emails, phone contacts, group details, role details. Hypi also stores the login attempts in this table. The Person type (owner parameter) stores the information of the user like name, address, date of birth, gender, etc. It also keeps the information whether the user has been authenticated in the Boolean fields `verified` and `enabled`.

Create a user account as shown in the below example. You may pass more parameters as required. The  function returns the account id, the date of creation, and created by information from the created Account object.

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
 createAccount(
     value: {
         username: "test-hypi@hypi.io"
         password: { value: "test-hypi@hypi.io" }
         emails: [{ value: "test-hypi@hypi.io" }]
     }
     ) {
         id
         created
         createdBy
     }
}
```
</TabItem>

<TabItem value="response">

```json
{
  "data": {
    "createAccount": {
      "id": "01F0R0BJ9XGDHS2GGM7YY4Y7M1",
      "created": "2021-03-14T09:16:28Z",
      "createdBy": "01F008Z07AZ6T263GWMCG7CCWZ"
    }
  }
}
```

</TabItem>
</Tabs>

## login

Users may log in using the `login` function.
```java
login(username:String!,password:String!): AccessToken
```
 It takes a username and password as inputs. Successful login generates session token. The user has to use the session token to perform various actions. This function also returns the session expiry time. If any error comes during login, you may also get an error code and error message.

<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```java
{
    login(
        username: "test-hypi@hypi.io", 
        password: "test-hypi@hypi.io"
    ) {
        sessionToken
        sessionExpires
        errorCode
        errorMsg
    }
}
```

</TabItem>

<TabItem value="response">

```json
{
     "data": {
     "login": {
         "sessionToken": "<test.login-token>",
         "sessionExpires": 1618305724,
         "errorCode": null,
         "errorMsg": null
     }
   }
}
```

</TabItem>
</Tabs>

## loginByEmail:

Users may log in using the `loginByEmail` function. This function takes email-id and password as inputs. It also generates session-token and provides error code and error message if any.

<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```java
{
    loginByEmail(email: "test-hypi@hypi.io", password: "test-hypi@hypi.io") {
        sessionToken
        sessionExpires
        errorCode
        errorMsg
    }
}
```

</TabItem>

<TabItem value="response">

```json
{
     "data": {
     "loginByEmail": {
         "sessionToken": "test.login-token",
         "sessionExpires": 1618306063,
         "errorCode": null,
         "errorMsg": null
     }
   }
}
```

</TabItem>
</Tabs>

:::note Read More...

* [How to register new user accounts](https://hypi.dev/t/how-to-register-new-user-accounts-in-your-lowcode-hypi-app-instance/118) 
* [How to login to user accounts](https://hypi.dev/t/how-to-login-to-user-accounts-in-your-lowcode-hypi-app-instance/117)
* [Authenticating User Accounts with Hypi’s low code APIs](https://hypi.dev/t/authenticating-user-accounts-with-hypis-low-code-apis/289)

:::

