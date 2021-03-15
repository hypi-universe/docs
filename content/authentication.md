---
id: authentication
title: Authentication
sidebar_label: Authentication
slug: /
---

Authentication involves verifying the identification of a user. The credentials of the user are matched against the credentials in the database. Users are generally identified with a user id or an email.

Authentication is important. It keeps the resources secure from unauthenticated users. The resources may include networks, databases, websites, and other applications. 

Hypi provides authentication functions to its users. The functions are easy-to-use. You can [create a password-protected account](#) with a user name or an email. You can [log in to the account](#) with saved credentials.

### createAccount:

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
You may pass on parameters to the Account object to store Account information. E.g. username, password, emails, phone contacts, group details, role details. Hypi also stores the login attempts in this table. The Person type (owner parameter) stores the information of the user like name, address, date of birth, gender, etc. It also keeps the information whether the user has been authenticated in the Boolean fields `verified` and `enable`.

Create a user account like this. You may pass more parameters as required. 
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
The above function returns the account id, the date of creation, and created by information from the created Account object.
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
### login

Users may log in using the `login` function.
```java
login(username:String!,password:String!): AccessToken
```
 It takes a username and password as inputs.
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
Login generates session token. The user has to use the session token to perform various actions. This function also returns the session expiry time. If any error comes during login, you may also get an error code and error message.
```json
{
     "data": {
     "login": {
     "sessionToken": "eyJhbGciOiJSUzI1NiJ9.eyJoeXBpLmluc3RhbmNlIjp7InJlYWxtIjoidHJ5aHlwaSIsIm5hbWUiOiJtZXNzYWdpbmciLCJyZWxlYXNlIjoiY2hlY2tkZWxldGUifSwiaHlwaS5sb2dpbiI6dHJ1ZSwiaHlwaS5wdXJwb3NlIjoibG9naW4iLCJoeXBpLnVzZXJuYW1lIjoidGVzdC1oeXBpQGh5cGkuaW8iLCJoeXBpLmVtYWlsIjoidGVzdC1oeXBpQGh5cGkuaW8iLCJhdWQiOiJ0cnloeXBpIiwiaWF0IjoxNjE1NzEzNzI0LCJleHAiOjE2MTgzMDU3MjQsInN1YiI6IjAxRjBSMEJKOVhHREhTMkdHTTdZWTRZN00xIiwibmJmIjoxNjE1NzEzNzI0fQ.aPKxmRtMwBal9bv64R1UKuKkNrHhZsXGWp3pgOQqsQQjD2Rz5YrD3KRd1XOu9TdtkuOgjvuu4RkMkSL72ToJ0DQylQ5aIJpSVyUQZlXKcwKVPHcsmaszdrkWwzNnz67DJtARlRFYWEax5eZ0EiC0qGIufgL\_ybepI055jKpfFyYzzdaM6\_nlUJIy2r\_EycTeqFSVMS7LnCzoSxMER-OWuuM0wugsYefrj2JroleYVjkD9f72MvCzq8iLlE5Qad1Hk5XXwMPqtB463xaY3BWl82A\_VhFPo-A9ewkfjKa-poKHXBxvuNh81l2RGtK8irYZ_SBEInTE4pCNpQskF4kf6g",
     "sessionExpires": 1618305724,
     "errorCode": null,
     "errorMsg": null
     }
    }
}
```
### loginByEmail:

Users may log in using the `loginByEmai` function. This function takes email-id and password as inputs. 
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
It also generates session-token and provides error code and error message if any.
```json
{
     "data": {
     "loginByEmail": {
     "sessionToken": "eyJhbGciOiJSUzI1NiJ9.eyJoeXBpLmluc3RhbmNlIjp7InJlYWxtIjoidHJ5aHlwaSIsIm5hbWUiOiJtZXNzYWdpbmciLCJyZWxlYXNlIjoiY2hlY2tkZWxldGUifSwiaHlwaS5sb2dpbiI6dHJ1ZSwiaHlwaS5wdXJwb3NlIjoibG9naW4iLCJoeXBpLnVzZXJuYW1lIjoidGVzdC1oeXBpQGh5cGkuaW8iLCJoeXBpLmVtYWlsIjoidGVzdC1oeXBpQGh5cGkuaW8iLCJhdWQiOiJ0cnloeXBpIiwiaWF0IjoxNjE1NzE0MDYzLCJleHAiOjE2MTgzMDYwNjMsInN1YiI6IjAxRjBSMEJKOVhHREhTMkdHTTdZWTRZN00xIiwibmJmIjoxNjE1NzE0MDYzfQ.syEn4gNH68nwZ5Fj7Mc85MoaTCDjNvFgFrE7ymSSgV7LpndNdZptEZ1aV-Tsniq9S3U89xsxUosHgiq6vZJUfexsBn5Okd5pm0tMgR2Eb2SMWNq2kSIyfdP1X9xLGIZ7NT13e9bAdKcEHwXuJDwV6Bf\_b-xlne5A3J9Zp-9eL5ebWtJ1rU20Q-3icZ0rwesAnDrlBdiz0SqQ3FzjIj7oM4mxcCOKYp4yfSwUHdAJpqIgD7cjIKczwOd4eyinew\_RiRdwi0mDyVgysovUlcvNfasj1Aze0Lqi9BlyR9d-9Z5uNS_eA8RJepGl75JdMVUX48w3MBCfpl1x2nJ6bfGSSA",
     "sessionExpires": 1618306063,
     "errorCode": null,
     "errorMsg": null
     }
   }
}
```
