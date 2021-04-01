---
id: serverlessfunction
title: Serverless Function
sidebar_label: Serverless Function
slug: /serverlessfunction
---

Serverless technology are a means of adding custom behaviour without having to worry too much about infrastructure, deployment or maintenance. Serverless functions are single purpose, programmatic funcions that are hosted by cloud computing platforms. You may access serverless functions from Hypi platform. You need to have a docker image of the function created on the platform like OpenFaaS.  

> How to setup and use a serverless?

+ [Create an App](#create-an-app)
+ [Get App ID](#get-app-id)
+ [Create Serverless](#create-serverless)
+ [Define tan directive](#define-tan-directive)
+ [Trigger Function](#trigger-function)

### Create an App

App is the basic building block of Hypi platform. Check more about App [here](overview.md). Create an App using [this](apisetup.md) guide.

### Get App ID

Run the following GraphQL query to retrieve the App ID available as `hypi.id`. Note that the query returns multiple apps in your realm, so pick the one related the App that you have just created in the previous step.

```java
{
  find(type: App, arcql:"*"){
    edges{
      node{
        ... on App {
          name
          releases{
            hypi {
              id
            }
            name
          }
        }
      }
      cursor
    }
  }
}
```

### Create Serverless

At this point, you are ready to create the Serverless function. In order to create a serverless you should already have a containerized image ready to deploy available either in a public or a private docker registry.

Under the query variables, you can supply the actual parameters. Note that the parameters are a typical JSON payload. The values supplied here are for illustrative purposes only, and you need to edit them to match your use case.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Input Data', value: 'data'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```java
mutation upsert($values:HypiUpsertInputUnion!) {
  upsert(values:$values){
    id
  }
}
```

</TabItem>
<TabItem value="data">

```json
{
  "values": {
    "App": {
      "name": "test-serverless",
      "hypi": {
        "id": "01EJX6A9VWTV3EMDKRMW9G757X"
      },
      "releases": [
        {
          "name": "initial",
          "hypi": {
            "id": "01EJX6BHM5YDNX30DWTNWJB5DH"
          },
          "serverless": {
            "hypi": {
              "impl": "OpenFaaSFn"
            },
            "image": "functions/alpine:latest",
            "name": "echo-app",
            "credentials": {
              "server": "hub.docker.com",
              "username": "example",
              "password": "example"
          }
        }
      ]
    }
  }
}
``` 

</TabItem>
</Tabs>

> Verify that the serverless was created

In order to double check that the serverless was created successfully, then run the following GraphQL query and make sure that the serverless name exists in the retrieved list.

```json
{
  find(type: App, arcql:"*"){
    edges{
      node{
        ... on App {
          name
          releases{
            name
            serverless{
              ... on OpenFaaSFn{
                name
                image
                credentials {
                  server
                  username
                  password
                }
              }
            }
          }
        }
      }
      cursor
    }
  }
}
```

### Define tan directive

Before you start using the serverless function, you need to define a GraphQL query type that provides the parameters of the function. Here is an example definition.

```java
type Query {
    f1(a:String!, b: Int!, c:Boolean!):EchoType @tan(type:OpenFaaS, name:"echoit", handler:"cat")
}
type EchoType {
        a: String
        b: Int
        c: Boolean
}
```

This has just defined a @tan function that accepts 3 parameters of types String, Integer, and Boolean. It returns a JSON object. The @tan directive has a few options; type, name, handler, and saveAs. They are explained below:

+ **type:**  instructs the system on which serverless backend to use, currently OpenFaaS is available as well as inline scripts written in Groovy or Velocity.
+ **name:**  the name field should match the name provided under the GraphQL "serverless" object.
+ **handler:**  is the script/entrypoint to execute inside the container. For example, "python main.py -env=prod" or "go run quickstart.go" ... etc.
+ **saveAs:**  instructs the Hypi platform to persist the result of the serverless function call as a GraphQL type in the database. For example, saveAs: "ServerlessResponse".

Observe here how the @tan directive is instructed to return payload of user-defined type "EchoType". Thus, any user-defined type can be returned.

### Trigger Function

It is now time to run the function and pass some real values and obtain the results. Using a query like this.

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
query{
    f1(a:"Hello, @tan", b:2329, c:true) {
        a
        b
        c
    }
}
```

</TabItem>

<TabItem value="response">

```json
{
  "data": {
    "f1": {
      "a": "Hello, @tan",
      "b": 2329,
      "c": true
    }
  }
}
```

</TabItem>
</Tabs>

