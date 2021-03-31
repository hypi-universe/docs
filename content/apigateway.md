---
id: apigateway
title: API gateway
sidebar_label: API gateway
slug: /apigateway
---

Hypi's API gateway acts as a middleware that simplifies the integration of your app with other services.

Importantly, by using the Hypi gateway, you can integrate external services with your Hypi app as if they were a part of the platform.

Hypi's features such as [authorisation](authorisation.md), [workflows](workflow.md) etc can all be mixed with gateway functions.

### Using the API gateway

To use the API gateway, you must add a dependency ``gateway`` to the App . As a reminder, a dependency is referenced by the app name, realm and release. Check more about [dependencies](overview.md) here. 

### @http directive

Hypi's API gateway is centered around a directive, namely`@http`. To integrate an API you add the directive to a query or mutation function in your app's schema.

Once you have added the directive to a function, it can be treated like any other function in Hypi. Instead of getting its data from the Hypi platform or serverless function, it will get its data from the HTTP service you've configured it to.

#### Definition and parameters

```java
directive @http(  method: HttpMethod! = GET,  url: String!,  headers: String,  requestTemplate: String,  saveAs: String) on FIELD_DEFINITION
```
When applied causes the value of the field it is applied to to be resolved using an HTTP query configured with the given parameters


| Parameter           | Description                                                                                                                                                                                               | Example                                                                                                                                                                      |
|---------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **method**          | One of the available HTTP methods                                                                                                                                                                         | GET, PUT, POST, DELETE, PATCH, OPTIONS, HEAD, TRACE                                                                                                                          |
| **url**             | The URL template to use to make the request                                                                                                                                                               | [https://api.my-domain.com/users/${settings.userId}?includeAge=${vars.includeAge}](https://api.my-domain.com/users/$%7Bsettings.userId%7D?includeAge=$%7Bvars.includeAge%7D) |
| **headers**         | The string formatted JSON object which sets the headers sent in the HTTP request. A JSON object where ALL entries MUST be strings or convertible to strings (basically numbers) #e.g. {"a": "v1", "b": 2} | {"Authorization":"Bearer ${settings.apiToken}"}                                                                                                                              |
| **requestTemplate** | The name of the request template which defines how the request body and response should be handled                                                                                                        |                                                                                                                                                                              |
| **saveAs**          | If present, the HTTP response will be stored in Hypi as the given type. The type must exist in the current instance                                                                                       |                                                                                                                                                                              |

### Variables

Each argument is a valid Velocity template meaning you can use dynamic parameters. The following may be referenced "vars", "settings".

+  **vars**refers to any arguments on the field the directive is applied to.   `${vars.firstName}` refers to the firstName argument of the field
+ **settings**refers to any instance settings provided in the app

### Utilities:

JSON and Map utilities are available for use in all templates.

+ JsonNode JSON.parseJSON(String)
+ Map<String, Object>; JSON.parse(String)

Map is the standard Java Map interface containing static util methods e.g. Map.of(...) JsonNode is a class used to represent JSON values by the Jackson JSON library.

### Example

In the Hypi schema editor (or via the API), you may annotate any query or mutation with this directive.

```java
type Query {
 getUser(includeAge: Boolean): User @http(
    url: "https://api.my-domain.com/users/${settings.userId} includeAge=${vars.includeAge}",
    headers: """{"Authorization":"Bearer ${settings.apiToken}"}"""
  )
}
```

You can then call this function via HTTP or GraphQL in your app. Note here that the response from the API must match the structure of the`User`object you specified as the return type.

If you're making a request to an API which doesn't directly match your type i.e.`User`in this case, you can use the`requestTemplate`parameter.  It transforms the API response by extracting fields from it and constructs an object which matches your declared return type.


