---
id: oauth2login
title: OAuth2 Login
sidebar_label: OAuth2 Login
slug: /oauth2login
---

OAuth2 Authorization framework enables a third-party application to obtain limited access to an external Http service on behalf of the resource owner by orchestrating an interaction between the resource owner and the Http service. On Hypi, application developers can utilize OAuth2 functionality out of the box. Hypi supports a rich set of Http services such as Facebook, Google, Github, Twitter, and more. The following section explains how to integrate OAuth2 functionality in your apps.

## How to setup and use OAuth2 Login?

+ [Register Developer Account](#register-developer-account)
+ [Create OAuthProvider Object](#create-oauthprovider-object)
+ [Trigger Authorization Flow](#trigger-authorization-flow)
+ [Retrieve Access Token](#retrieve-access-token)

### Register Developer Account

External Http services enable developers to register applications on their platforms and then provide`ClientKey`and`ClientSecret`that can be used at subsequent API requests. 

For example, for Google one can register an application on 

`https://console.developers.google.com/apis/credentials`.

### Create OAuthProvider Object

Once the`ClientKey`and`ClientSecret`have been obtained, then start by using GraphQL to integrate OAuth2 to your application on Hypi.

```java
mutation upsert($values:HypiUpsertInputUnion!) {  upsert(values:$values){    id  }}
```
Providing the following JSON payload for the GraphQL request under the`Variables`tab. Here is an example for Google OAuth2 configuration:
```json
{
  "values": {
    "OAuthProvider": {
      "clientId": "Your Client Key",
      "clientSecret": "Your Client Secret",
      "clientAuthenticationMethod": "basic",
      "authorizationGrantType": "authorization_code",
      "redirectUriTemplate": "{baseUrl}/login/oauth2/code/{registrationId}",
      "scopes": [
        "openid",
        "profile",
        "email",
        "address",
        "phone",
        "add more comma separated list of scopes"
      ],
      "authorizationUri": "https://accounts.google.com/o/oauth2/v2/auth",
      "tokenUri": "https://www.googleapis.com/oauth2/v4/token",
      "userInfoUri": "https://www.googleapis.com/oauth2/v3/userinfo",
      "userInfoAuthenticationMethod": "header",
      "userNameAttributeName": "sub",
      "jwkSetUri": "https://www.googleapis.com/oauth2/v3/certs",
      "configurationMetadata": [
        {
          "key": "foo",
          "value": "bar"
        },
        {
          "key": "baz",
          "value": "qux"
        }
      ],
      "clientName": "Google",
      "hypiSuccessRedirectUri": "https://youcallbackdomain.com/successfulLogin"
    }
  }
}
```
### Enum Parameters

The following variables can take any value as long as it is described on the enum type in the core GraphQL schema on Hypi.

```json
enum UserNameAttributeName {
  iss
  sub
  aud
  exp
  iat
  auth_time
  nonce
  acr
  amr
  azp
  at_hash
  c_hash
}
enum AuthenticationMethod {
  header
  form
  query
}
enum AuthorizationGrantType {
  authorization_code
  implicit
  refresh_token
  client_credentials
}
enum ClientAuthenticationMethod {
  basic
  post
}
```
The definition of the above parameters can be found in the official standard specification of OAuth2 [Read more](#https://tools.ietf.org/html/rfc6749)

### Provider Endpoints

The following parameters are specific to the external Http service.
```java
{
  "authorizationUri": "",
  "tokenUri": "",
  "userInfoUri": "",
  "jwkSetUri": ""
}
```
For Google, the values would be:
```java
{
  "authorizationUri": "https://accounts.google.com/o/oauth2/v2/auth",
  "tokenUri": "https://www.googleapis.com/oauth2/v4/token",
  "userInfoUri": "https://www.googleapis.com/oauth2/v3/userinfo",
  "jwkSetUri": "https://www.googleapis.com/oauth2/v3/certs"
}
```
For GitHub, the values would be:
```java
{
    authorizationUri: https://github.com/login/oauth/authorize
    tokenUri: https://github.com/login/oauth/access_token
    userInfoUri: https://api.github.com/user
}
```

### Redirection URIs

The`redirectUriTemplate`variable is reserved for Hypi in order to handle the callback response from the external Http service. It is always set to as follows:
```java
{
  "redirectUriTemplate": "{baseUrl}/login/oauth2/code/{registrationId}"
}
```
Then provide the redirection Uri that the enduser should land on after the OAuth2 flow is complete. The value must represent a valid Http formatted Uri.

```java
{
  ""hypiSuccessRedirectUri": "https://youcallbackdomain.com/successfulLogin"
}
```

Hypi will add a query parameter`token`to the redirectUri that can be used to communicate with Hypi Platform representing the resource owner who has completed the authorization process. This token is the same as if you were to call the built in`login`or`loginByEmail`methods in Hypi i.e. it is a JWT token which can be used to call any Hypi API that would otherwise be called with a token returned by one of these methods.

### Trigger Authorization Flow

In order to start the authorization process, send the user to the following URL

`https://api.hypi.app/oauth2/authorization/${registrationId`

The`registrationId`is constructed as`instanceId`-`OAuthProviderId`.`instanceId`is the Hypi App Instance ID and`OAuthProviderId`is the ID of the`OAuthProvider`which is created in the first step. 

For example, 

if`instanceId`is`NOV5MNZTF01Q8XIUCCA099CXZY`and`OAuthProviderId`is`01ERDGNV0W50J8WZZRVXR4KASC`then the`registrationId`is`NOV5MNZTF01Q8XIUCCA099CXZY-01ERDGNV0W50J8WZZRVXR4KASC`

and the URL to initialize the flow is

`https://api.hypi.app/oauth2/authorization/NOV5MNZTF01Q8XIUCCA099CXZY-01ERDGNV0W50J8WZZRVXR4KASC`

### Retrieve Access Token

Hypi stores the`accessToken`and the`refreshToken`and they can be found on the GraphQL type`OAuth2AuthorizedClient`.
```java
type OAuth2AuthorizedClient {
  clientRegistrationId: String
  principalName: String
  accessToken: String
  refreshToken: String
}
```