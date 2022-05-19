---
id: apigateway
title: API gateway
sidebar_label: API gateway
slug: /lowcode/apigateway
---

Hypi's API gateway acts as a middleware that simplifies the integration of your app with other services.

Importantly, by using the Hypi gateway, you can integrate external services with your Hypi app as if they were a part of the platform.

Hypi's features such as [authorisation](authorisation.md) can all be mixed with gateway functions.

### Using the API gateway

API gateway is a part of App-core. It is available to use by default. 

### @http directive

Hypi's API gateway is centered around a directive, namely `@http`. To integrate an API you add the directive to a query or mutation function in your app's schema.

Once you have added the directive to a function, it can be treated like any other function in Hypi. Instead of getting its data from the Hypi platform or serverless function, it will get its data from the HTTP service you've configured it to.

#### Definition and parameters

```java
directive @http(  method: HttpMethod! = GET,  url: String!,  headers: String,  requestTemplate: String,  inline: InlineHttpRequestTemplate, saveAs: String) on FIELD_DEFINITION
```
HTTP query gets configured with the following parameters.


| **Parameter**       | **Description**                                                                                                                                                                                           | **Example**                                         |
|---------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|
| **method**          | One of the available HTTP methods                                                                                                                                                                         | GET, PUT, POST, DELETE, PATCH, OPTIONS, HEAD, TRACE |
| **url**             | The URL template to make the request                                                                                                                                                                      | URL to make request to                              |
| **headers**         | The string formatted JSON object which sets the headers sent in the HTTP request. A JSON object where ALL entries MUST be strings or convertible to strings (basically numbers) #e.g. {"a": "v1", "b": 2} | {"Authorization":"Bearer ${settings.apiToken}"}     |
| **requestTemplate** | The name of the request template which defines how the request body and response should be handled                                                                                                        |                                                     |
| **inline**          | Provides the body of RequestTemplate and ResponseTemplate                                                                                                                                                 |                                                     |
| **saveAs**          | If present, the HTTP response will be stored in Hypi as the given type. The type must exist in the current instance                                                                                       |                                                     |

A sample URL could be as follows:
https://api.my-domain.com/users?${settings.userId}&includeAge=${vars.includeAge}

Here query parameters could be passed using variables 'vars' and 'settings'. Utilities like JSON and MAP are available to use in all the templates like Groovy or Velocity.

### Variables

Each argument is a valid Velocity template meaning you can use dynamic parameters. The following may be referenced:  "vars", "settings","response".

+ **vars** refers to any arguments on the field the directive is applied to.   `${vars.firstName}` refers to the firstName argument of the field. So, pass on the variables through 'vars'.
+ **settings** refers to any instance settings provided in the app. You may save specific settings in the form of Environment Variable. And then use it in the HTTP request. `${settings.APITOKEN` refers to environment variable settings `APITOKEN` .
+ **response** refers to the response of the http request that is available in `responseTemplate`. It contains the entire response of the http request. You may tailor it as required.

### Utilities

JSON and Map utilities are available for use in all templates.

+ JsonNode JSON.parseJSON(String)
+ Map<String, Object>; JSON.parse(String)

Map is the standard Java Map interface containing static util methods e.g. Map.of(...) 
JsonNode is a class used to represent JSON values by the [Jackson JSON library](https://www.baeldung.com/jackson).

### RequestTemplate

`RequestTemplate` data type defines the templates that should be applied to a given HTTP request. It contains the name of the request and formats of the request and response. Sometimes the url has a specific request format. You may match that format using the RequestTemplate. Similarly, you may tailor the response received using `ResponseTemplate`. 

`RequestTemplate` can be referenced by name using the parameter `requestTemplate`
You may create an object of RequestTemplate in the GraphQL editor and then execute HTTP request or you may specify the RequestTemplate inline in the Schema using the parameter `inline`. 

We will look at both these use-cases in the [Example](#example). Please note you may run the HTTP request without this template if there is no specific requirement.

```java
type RequestTemplate{
    name:String!
    request:String
    response:String
}
```

### InlineHttpRequestTemplate

`InlineHttpRequestTemplate` data type can be used to provide the body of the `requestTemplate` instead of referencing a request template by name. If the structure is static, variable `inline` can be used which has `InlineHttpRequestTemplate` data type.

You may tailor the response received by processing `responseTemplate` string.

```java
input InlineHttpRequestTemplate {  
  requestTemplate: String  
  responseTemplate: String  
}
```
Example:
```java
inline: {
    requestTemplate: """{"to": "${vars.email}","notification" : 
    {"title" : "$vars.title", "body": "$vars.body"}}""", 
    responseTemplate: """..."""}
}
```

### Example

Let's use directive `@http` and send an HTTP request to the website [https://httpbin.org](https://httpbin.org). It echos the HTTP request back as a response.

#### Use-Case:1 

In this use-case, we will define `requestTemplate` and `responseTemplate`  using `inline` variable. 

Here is the schema for the HTTP request.  It sends the http POST request to the url containing the username and email-id using `setEmail` function. 

```java
type Mutation {
   # {emailid: "value emailid", user: "value user"}
 setEmail(emailid: String, user: String): Json @http(
    
    method: POST,
    url: "https://httpbin.org/post?user=$vars.user&emailid=$vars.emailid",
    headers: """{"Content-Type": "application/json", 
             "Authorization": "${settings.APITOKEN}"}"""
    inline: {
      requestTemplate: """{"email": "${vars.emailid}"}""",
#Notice the use of .textValue() method-this gets the string value without quotes
      responseTemplate: """{"value": "$!{response.json.email.textValue()}"}"""
#OR - the below - notice there is no quote around the variable 
#Hypi uses the Java Jackson JSON library which will automatically include quotes like this "<value here>"
      #responseTemplate: """{"value": $!{response.json.email}}"""
    },
    saveAs: "Email"    
  )
}
```
The `requestTemplate` has the `$vars.emailid` field that holds the input email id to be sent across. The `responseTemplate` extracts the echoed email value from the`json` field of the response and saves it in the `value` field of the `Email` data type. Notice the use of APITOKEN environment variable. The value of this field has to be set at runtime and the same gets sent over in the HTTP request header.

Let's run the http request now by executing the `setEmail` function. The response gets saved in the `Email` object.

<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```java
mutation{
  setEmail(emailid: "test1@abc.com", user: "abc3")
}
```

</TabItem>
<TabItem value="response">

```json
{
  "data": {
    "setEmail": {
      "value": "test1@abc.com"
    }
  }
}
```

</TabItem>
</Tabs>

You may cross-check the response in the `Email` object by using the [find](readdata.md) function.

#### Use-Case:2

In this use-case, we will create the RequestTemplate object in the GraphQL editor and format the request. Let's create requestTemplate - `httpbin-post`. 
```java
mutation{  
  upsert(values:{  
    RequestTemplate:[  
      {  
        name:"httpbin-post",  
        request: """{"id": "${vars.emailid}"}"""  
      }  
    ]  
  }){  
    id  
  }  
}
```

Here is the schema for the HTTP request.  Here we are using `requestTemplate` parameter instead of `inline`.
```java
type HttpBinResponse2 {
  args: Json
  data: String
  headers: Json
  files: Json
  form: Json
  json: Json
  origin: String
  url: String
}

type Mutation {
 setEmail(emailid: String, user: String): Json @http(
    method: POST,
    headers: """{"Content-Type": "application/json"}"""
    url: "https://httpbin.org/post?user=$vars.user&emailid=$vars.emailid",
    requestTemplate: "httpbin-post",
    saveAs: "HttpBinResponse2"    
  )
}
```

`$vars.emailid` holds the input email id to be sent across. The same has been used in the requestTemplate -`httpbin-post`. So only `emailid` will be echoed back and not the user string as we have omitted it in the requestTemplate. `HttpBinResponse2` is the data type that holds the response of the website to the http request. 

Let's run the HTTP request now by executing the `setEmail` function. The response gets saved in the `HttpBinResponse2` object. Notice the `headers` setting echoed in the response.

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
mutation{
  setEmail(emailid: "example@http.com", user: "abc3")
}
```

</TabItem>
<TabItem value="response">

```java
{
  "data": {
    "setEmail": {
      "args": {
        "emailid": "example@http.com",
        "user": "abc3"
      },
      "data": "{\"id\": \"example@http.com\"}",
      "files": {},
      "form": {},
      "headers": {
        "Content-Length": "26",
        "Content-Type": "application/json",
        "Host": "httpbin.org",
        "User-Agent": "Apache-HttpAsyncClient/4.1.4 (Java/11.0.10)",
        "X-Amzn-Trace-Id": "Root=1-607fc4ba-32fdf04c146a3f453474be30"
      },
      "json": {
        "id": "example@http.com"
      },
      "origin": "51.210.125.224",
      "url": "https://httpbin.org/post?user=abc3&emailid=example%40http.com"
    }
  }
}
```

</TabItem>
</Tabs>

You may cross-check the response in the `HttpBinResponse2` object by using the `find` function.

:::note Read More...

* [How to configure an HTTP request using Hypi directive (@http)](https://hypi.dev/t/how-to-configure-an-http-request-using-hypi-directive-http/60)
* [How to configure an HTTP request using requestTemplate parameter](https://hypi.dev/t/how-to-configure-an-http-request-using-requesttemplate-parameter/59)

:::