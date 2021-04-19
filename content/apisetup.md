---
id: apisetup
title: API Set-Up
sidebar_label: API Set-Up
slug: /apisetup
---

Hypi is API based platform. You may access Hypi APIs to build various functions for your App. 

Let’s check how to set up Hypi APIs so that they work for you!

### API Configuration

Configure APIs as per your requirements with the following settings:

+ **Enable Anonymous requests**: If anonymous requests are enabled, any user may access the APIs without any authentication token.

+ **Enable Anonymous Registrations**: If enabled, Accounts can be created by anonymous users by calling the [createAccount](authentication.md) function.

+ **Enable Account verification**: If enabled, Accounts must be verified before the [login](authentication.md).

### Domain Name

Every instance of your App carries a unique domain name. This domain allows you to access the APIs. The domain names get self-generated after the creation of an instance. 
E.g. `agglomerating.apps.hypi.app`.

You may provide a unique domain name ending with `.apps.hypi.app`. Hypi supports only the hypi domain as of now.

### Required HTTP headers

HTTP request headers contain information about the request context so that the server can tailor the response. Hypi HTTP request header has two fields, `hypi-domain` and `Authorization`.

+ `hypi-domain`: The domain name of the instance to make API requests to

+ `Authorization`: A valid token obtained from running a login query

Please note the following points:

* Anonymous access is possible only if it is enabled on the instance. It is not enabled by default.

* Login and register API calls do not require the Authorization header

* Creating an account does not require the Authorization header if anonymous registration is enabled on the instance. Anonymous registration is disabled by default. If it is disabled, new accounts can only be created by an existing user.

### API URLs

The API URLs you use depend on how you intend to work with your app. You make requests to these URLs to access the APIs. For the platform to know which of your instances it should route your request to, you must provide the `hypi-domain` header.

+ [https://api.hypi.app/graphql](#) - allows you to execute GraphQL queries against your instance. This unique URL is an endpoint that represents an object or collection of objects within the Hypi domain. You will point your HTTP client at this endpoint to interact with Hypi data resources.

     Check the curl request below that access this URL.
      
```
curl -v 'https://api.hypi.app/graphql' -H 'Content-Type: application/json' -H 'Authorization: &lt;auth-token-here&gt;' -H 'hypi-domain: my-instance.apps.hypi.app' --data-binary '&lt;graphql-query-here&gt;' --compressed
```

+ [https://api.hypi.app/rest](#) - allows you to use standard REST-like requests to execute queries against your instance. Check out RESTful APIs [here](rest-apis.md).

+ [wss://api.hypi.app](#) - allows you to subscribe to updates via WebSockets. Establishing a WebSocket connection provides a persistent connection between client and server and facilitates message passing between them.