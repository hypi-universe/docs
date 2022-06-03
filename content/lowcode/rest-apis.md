---
id: rest-apis
title: RESTful APIs
sidebar_label: RESTful APIs
slug: /lowcode/rest-apis
---

Hypi platform provides APIs with multiple flavors that suit different developers' tastes. The RESTful APIs are no different and at the same time, they were redesigned to abide by the [HATEOS](https://en.wikipedia.org/wiki/HATEOAS) code of conduct for better semantics and easier interpretation.

REST APIs conform to the constraints of the **REST** architectural style and allows for interaction with RESTful web services. The endpoint  `https://api.hypi.app/rest` allows you to use standard REST-like requests to execute queries against your instance.

Restful APIs include Authentication or CRUD functions like `login` ,`upsert`, `delete`,`find` and `get`.

There could be multiple ways to execute these functions. It allows Hypi developers to take advantage of the flexibility and tuning the APIs to their awesome applications.

Let's work with the `Author` and `Book` schema again to execute Restful APIs.

```java
type Author {
    name: String
    age: Int
    bestbook: Book
    booklist: [Book!]
}

type Book {
    title: String
    authorid: Int
    price: Float
}
```
:::note 

Headers for all the RESTful APIs include App Instance Domain as `hypi-domain` and  `application/json` as `content-type`.

For CRUD operations, an authorization header is required with `Authorization Token` from the instance.

:::

## Authentication

Users can login either by a username or an email. Logins can be triggered either by `GET` or `POST`. It provides an either/or alternative. You may choose the one that suits your need. The end result would be the same.

### GET

#### Login with Username

The first is the login using the username method. Username and Password are provided in the URL as query parameters.

`rest/v1/fn/query/login?username=x&password=y&type=query`

Note: Replace x and y with actual username and password.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="query"
  values={[
    {label: 'Request', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```java
$ curl --location --request GET 
    '/rest/v1/fn/query/login?username=x&password=y&type=query' \
  --header 'hypi-domain: whipcord.apps.hypi.app' \
  --header 'content-type: application/json'
```

</TabItem>
<TabItem value="response">

```json
{
  "data": {
    "login": {
      "hypi": null,
      "sessionToken": "eyJhb ...",
      "sessionExpires": 1598888479,
      "errorCode": null,
      "errorMsg": null
    }
  }
}
```

</TabItem>
</Tabs>

#### Login with Email

The second is the login using the email method. Email and Password are provided in the URL as query parameters.

`/rest/v1/fn/query/loginByEmail?email=x&password=y&type=query`

Replace x and y with actual email and password.

<Tabs
  defaultValue="query"
  values={[
    {label: 'Request', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```java
$ curl --location --request GET 
    '/rest/v1/fn/query/loginByEmail?email=x&password=y&type=query' \
  --header 'hypi-domain: whipcord.apps.hypi.app' \
  --header 'content-type: application/json'
```

</TabItem>
<TabItem value="response">

```json
{
  "data": {
    "loginByEmail": {
      "hypi": null,
      "sessionToken": "eyJhb ...",
      "sessionExpires": 1598888597,
      "errorCode": null,
      "errorMsg": null
    }
  }
}
```

</TabItem>
</Tabs>

### POST

Authentication can also be performed using the POST method.

#### Login with Username

The first is the login using the username method. The username and password are provided as input data.

<Tabs
  defaultValue="query"
  values={[
    {label: 'Request', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```java
$ curl --location --request POST '/rest/v1/login' \
  --header 'hypi-domain: whipcord.apps.hypi.app' \
  --header 'content-type: application/json' \
  --data-raw '{
      "username": "x",
      "password": "y"
  }'
```

</TabItem>

<TabItem value="response">

```json
{
  "data": {
    "login": {
      "hypi": null,
      "sessionToken": "eyJhb ...",
      "sessionExpires": 1598888836,
      "errorCode": null,
      "errorMsg": null
    }
  }
}
```

</TabItem>
</Tabs>


#### Login with Email

The second is again the login using the email method.

<Tabs
  defaultValue="query"
  values={[
    {label: 'Request', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```java
$ curl --location --request POST '/rest/v1/login' \
    --header 'hypi-domain: whipcord.apps.hypi.app' \
  --header 'content-type: application/json' \
  --data-raw '{
      "email": "x",
      "password": "y"
  }'
```

</TabItem>

<TabItem value="response">

```json
{
  "data": {
    "loginByEmail": {
      "hypi": null,
      "sessionToken": "eyJhb ...",
      "sessionExpires": 1598888914,
      "errorCode": null,
      "errorMsg": null
    }
  }
}
```

</TabItem>
</Tabs>

## CRUD Operations

The four basic CRUD operations **C**reate, **R**ead, **U**pdate, and **D**elete can be performed using the semantics of **P**ost, **G**et, **P**ut, and **D**elete HTTP methods. 

The main REST APIs endpoint is `https://api.hypi.app/rest/v1`

The APIs endpoint can be mapped to resources using the /{aggregate} or /{aggregate}/{identifier} for both GET and DELETE methods.  `{aggregate}` is the GraphQL type name from your app's schema and `{identifier}` is the ID of the object of the GraphQL type.

E.g. `https://api.hypi.app/Author/Author1`

POST and PUT will capture the identifiers from the GraphQL request body to avoid redundancy. 

The RESTful APIs explained herein allow the same functionality as the CRUD operations explained under [Hypi Platform CRUD Documentation](crud.md)

### Create Data with POST

To create a resource, send a POST request to the `/rest/v1` endpoint with the body containing the resource signature as defined by the GraphQL types. The body (--data-raw) contains the data to be inserted in the Author table. The format of the input data is the same as normal [Create](createdata.md) operation.

<Tabs
  defaultValue="query"
  values={[
    {label: 'Request', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```java
$ curl --location --request POST '/rest/v1' \
  --header 'authorization: eyJhb ...' \
  --header 'hypi-domain: whipcord.apps.hypi.app' \
  --header 'content-type: application/json' \
  --data-raw '{
        "values": {
        "Author": [
          {
            "hypi": {"id": "Author1"},
            "name": "Dan Brown",
            "age": 56,
            "booklist":[
              {
                "hypi": {"id": "Author1Book1"},
                "title": "Da Vinci Code",
                "price": 12.99,
                "authorid": 1
              },
              {
                "hypi": {"id": "Author1Book2"},
                "title": "The Last Symbol",
                "price": 10,
                "authorid": 1
              }
            ] 
          },
          {
            "hypi": {"id": "Author2"},
            "name": "Paulo Coelho",
            "age": 70,
            "booklist":[
              {
                "hypi": {"id": "Author2Book1"},
                "title": "Alchemist",
                "price": 5.99,
                 "authorid": 2
              }

            ] 
          }     
        ]
      }
    }  
  }'
```

</TabItem>
<TabItem value="response">

```json
{
    "data": {
        "upsert": [
            {
                "__typename": "Hypi",
                "id": "Author1",
                "impl": null,
                "created": "2021-04-15T04:04:06Z",
                "updated": "2021-04-15T04:04:06Z",
                "trashed": null,
                "createdBy": "01F2GA50NFXHMYCBDNYFJK1V7R",
                "instanceId": "01F3826NNRNXSDPVBMTMD47SCK"
            },
            {
                "__typename": "Hypi",
                "id": "Author2",
                "impl": null,
                "created": "2021-04-15T04:04:06Z",
                "updated": "2021-04-15T04:04:06Z",
                "trashed": null,
                "createdBy": "01F2GA50NFXHMYCBDNYFJK1V7R",
                "instanceId": "01F3826NNRNXSDPVBMTMD47SCK"
            }
        ]
    }
} 
```

</TabItem>
</Tabs>


### Update data with PUT

To make an [update request](updatedata.md), the same endpoint and the payload can be used.  However, the HTTP method should be `PUT`. 

<Tabs
  defaultValue="query"
  values={[
    {label: 'Request', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```java
$ curl --location --request PUT '/rest/v1' \
  --header 'authorization: eyJhb ...' \
  --header 'hypi-domain: whipcord.apps.hypi.app' \
  --header 'content-type: application/json' \
  --data-raw '{
     {
      "values": {
        "Author": [
          {
            "hypi": {"id": "Author3"},
            "name": "Sudha Murti",
            "age": 70,
            "booklist":[
              {
                "hypi": {"id": "Author3Book1"},
                "title": "Wise and Otherwise",
                "price": 3.99,
                "authorid": 3
              },
              {
                "hypi": {"id": "Author3Book2"},
                "title": "How I taught my GrandMother to Read",
                "price": 2.99,
                "authorid": 3
              }
            ] 
          }

        ]
      }
    }    
  }'
```

</TabItem>
<TabItem value="response">

```json
{
    "data": {
        "upsert": [
            {
                "__typename": "Hypi",
                "id": "Author3",
                "impl": null,
                "created": "2021-04-15T04:11:57Z",
                "updated": "2021-04-15T04:11:57Z",
                "trashed": null,
                "createdBy": "01F2GA50NFXHMYCBDNYFJK1V7R",
                "instanceId": "01F3826NNRNXSDPVBMTMD47SCK"
            }
        ]
    }
}
```

</TabItem>
</Tabs>

### Read data with GET using an ID

In order to access a resource with a particular hypi ID, the endpoint  `/rest/v1` is appended with `{aggregate}/{identifier}`  where  `{aggregate}` is the GraphQL type name from your app's schema and `{identifier}` is the ID of the object to get. HTTP method should be GET.

E.g. GET /rest/v1/Author/Author3. 

This will [retrieve the data](readdata.md#get) from Author3 object. 

<Tabs
  defaultValue="query"
  values={[
    {label: 'Request', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```java
$ curl --location --request GET '/rest/v1/Author/Author3' \
  --header 'authorization: eyJhb ...' \
  --header 'hypi-domain: whipcord.apps.hypi.app' \
  --header 'content-type: application/json'
```

</TabItem>
<TabItem value="response">

```json
{
    "data": {
             "hypi": {
                "__typename": "Hypi",
                "id": "Author3",
                "impl": null,
                "created": "2021-04-15T04:11:57Z",
                "updated": "2021-04-15T04:11:57Z",
                "trashed": null,
                "createdBy": "01F2GA50NFXHMYCBDNYFJK1V7R",
                "instanceId": "01F3826NNRNXSDPVBMTMD47SCK"
            },
            "name": "Sudha Murti",
            "age": 70,
            "bestbook": null,
            "booklist": [
                {
                    "__typename": "Book",
                    "hypi": {
                        "__typename": "Hypi",
                        "id": "Author3Book1",
                        "impl": null,
                        "created": "2021-04-15T04:11:57Z",
                        "updated": "2021-04-15T04:11:57Z",
                        "trashed": null,
                        "createdBy": "01F2GA50NFXHMYCBDNYFJK1V7R",
                        "instanceId": "01F3826NNRNXSDPVBMTMD47SCK"
                    },
                    "title": "Wise and Otherwise",
                    "authorid": 3,
                    "price": 3.99
                },
                {
                    "__typename": "Book",
                    "hypi": {
                        "__typename": "Hypi",
                        "id": "Author3Book2",
                        "impl": null,
                        "created": "2021-04-15T04:11:57Z",
                        "updated": "2021-04-15T04:11:57Z",
                        "trashed": null,
                        "createdBy": "01F2GA50NFXHMYCBDNYFJK1V7R",
                        "instanceId": "01F3826NNRNXSDPVBMTMD47SCK"
                    },
                    "title": "How I taught my GrandMother to Read",
                    "authorid": 3,
                    "price": 2.99
                }
            ]
        }
    }
}
```

</TabItem>
</Tabs>

### Read data with ArcQL Filter

GraphQL `find` method can be used to access a resource. Append the endpoint /rest/v1 with {aggregate} and pass on the arcql statement as query parameter.

:::info

The ArcQL parameter accepts any valid filter supported by [ArcQL](arcql.md). 

:::

In the below example, `arcql=title='Wise and Otherwise` is an arcql filter to retrieve the details of a book with the title `Wise and Otherwise`.

<Tabs
  defaultValue="query"
  values={[
    {label: 'Request', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```java
$ curl --location 
  --request GET "/rest/v1/Book?arcql=title='Wise and Otherwise'" \
  --header 'authorization: eyJhb ...' \
  --header 'hypi-domain: whipcord.apps.hypi.app' \
  --header 'content-type: application/json'
```

</TabItem>
<TabItem value="response">

```json
{
    "data": {
        "find": {
            "edges": [
                {
                    "cursor": "Author3Book1",
                    "node": {
                        "__typename": "Book",
                        "hypi": {
                            "__typename": "Hypi",
                            "id": "Author3Book1",
                            "impl": null,
                            "created": "2021-04-15T04:11:57Z",
                            "updated": "2021-04-15T04:11:57Z",
                            "trashed": null,
                            "createdBy": "01F2GA50NFXHMYCBDNYFJK1V7R",
                            "instanceId": "01F3826NNRNXSDPVBMTMD47SCK"
                        },
                        "title": "Wise and Otherwise",
                        "authorid": 3,
                        "price": 3.99
                    }
                }
            ],
            "pageInfo": {
                "hasPreviousPage": false,
                "hasNextPage": false,
                "startCursor": "FIRST",
                "endCursor": "LAST",
                "pageLimit": 25,
                "previousOffsets": [],
                "nextOffsets": []
            }
        }
    }
}
```

</TabItem>
</Tabs>

### DELETE Data using an ID

In order to delete a resource, enter {aggregate}/{identifier} as explained earlier. HTTP method should be DELETE.

As Author and Book tables are linked with one-to-many references, you will not be able to delete data without unlinking the references. Hence, pass on `clearArrayReferences=true` in the query parameter. 

Check more about Delete function [here](deletedata.md#delete).

<Tabs
  defaultValue="query"
  values={[
    {label: 'Request', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```java
$ curl --location 
  --request DELETE '/rest/v1/Author/Author1?clearArrayReferences=true' \
  --header 'authorization: eyJhb ...' \
  --header 'hypi-domain: whipcord.apps.hypi.app' \
  --header 'content-type: application/json'
```

</TabItem>
<TabItem value="response">

```json
{
  "data": {
    "delete": 1
  }
}
```

</TabItem>
</Tabs>

### DELETE data using ArcQL filter

Delete functionality can also be implemeted using ArcQL filter. The arcql query is passed as a query parameter. (`arcql=hypi.id='Author2Book1'`) .  

<Tabs
  defaultValue="query"
  values={[
    {label: 'Request', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```java
$ curl --location --request DELETE 
  "/rest/v1/Book?clearArrayReferences=true&arcql=hypi.id='Author2Book1'" \
  --header 'authorization: eyJhb ...' \
  --header 'hypi-domain: whipcord.apps.hypi.app' \
  --header 'content-type: application/json'
```

</TabItem>
<TabItem value="response">

```json
{
  "data": {
    "delete": 1
  }
}
```

</TabItem>
</Tabs>

## GraphQL/ArcQL Functions

Any arbitrary GraphQL function like `upsert`, `find`, or `delete` can be triggered using the following endpoint.

+ Endpoints: `/rest/v1/fn/{root}/{fn}`
+ Replace {root} with either of `query` or `mutation`
+ Replace {fn} with any GraphQL function such as get, find, login, or your own GraphQL function that you defined in your app's schema.

#### Create Data

`POST` can be used to create resources on the server. This is equivalent to calling the Hypi `upsert` function in GraphQL. Use the endpoint `/rest/v1/fn/mutation/upsert` to create an object.

<Tabs
  defaultValue="query"
  values={[
    {label: 'Request', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```java
$ curl --location --request POST '/rest/v1/fn/mutation/upsert' \
  --header 'authorization: eyJhb ...' \
  --header 'hypi-domain: whipcord.apps.hypi.app' \
  --header 'content-type: application/json' \
  --data-raw '{
     {
      "values": {
        "Author": [
          {
            "hypi": {"id": "Author4"},
            "name": "P G Wodehouse"
          }       
        ]
      }
    }   
  }'
```

</TabItem>
<TabItem value="response">

```json
{
    "data": {
        "upsert": [
            {
                "__typename": "Hypi",
                "id": "Author4",
                "impl": null,
                "created": "2021-04-15T05:13:27Z",
                "updated": "2021-04-15T05:13:27Z",
                "trashed": null,
                "createdBy": "01F2GA50NFXHMYCBDNYFJK1V7R",
                "instanceId": "01F3826NNRNXSDPVBMTMD47SCK"
            }
        ]
    }
}
```

</TabItem>
</Tabs>

#### Update Data

Similar to `POST`,`PUT` is used to update/modify existing resources. It is the same thing with the `upsert` function that is also used to modify the resource. Hence, the endpoint remains the same.

`/rest/v1/fn/mutation/upsert`

<Tabs
  defaultValue="query"
  values={[
    {label: 'Request', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```java
$ curl --location --request PUT '/rest/v1/fn/mutation/upsert' \
  --header 'authorization: eyJhb ...' \
  --header 'hypi-domain: latest.store.hypi.hypi.hypi.app' \
  --header 'content-type: application/json' \
  --data-raw '{
      {
          "values": {
            "Author": [
              {
                "hypi": {"id": "Author5"},
                "name": "Enid Blyton"

              }       
            ]
          }
       }
   }'
```

</TabItem>
<TabItem value="response">

```json
{
    "data": {
        "upsert": [
            {
                "__typename": "Hypi",
                "id": "Author5",
                "impl": null,
                "created": "2021-04-15T05:14:48Z",
                "updated": "2021-04-15T05:14:48Z",
                "trashed": null,
                "createdBy": "01F2GA50NFXHMYCBDNYFJK1V7R",
                "instanceId": "01F3826NNRNXSDPVBMTMD47SCK"
            }
        ]
    }
}
```

</TabItem>
</Tabs>

#### Read Data

The **R**ead requests discussed above can be rephrased as arbitrary GraphQL functions by using `query/get` or `query/find`.

##### Find

The `GET` , `PUT` , `POST`, and `DELETE` methods above are all semantics to make the API more familiar and inline with existing common practice.  Data can be retrieved using the the `find` function passing the `aggregate` to the `type` query parameter.  An arcql query can also be appended to it. Two query parameters can be separated using '&'. 

E.g. `/rest/v1/fn/query/find?type=Author&arcql=hypi.id='Author5'`

Unlike the `GET` function, this returns a list of objects matching the filter provided.

<Tabs
  defaultValue="query"
  values={[
    {label: 'Request', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```java
$ curl --location 
  --request GET "/rest/v1/fn/query/find?type=Author&arcql=hypi.id='Author5'" \
  --header 'authorization: eyJhb ...' \
  --header 'hypi-domain: latest.store.hypi.hypi.hypi.app' \
  --header 'content-type: application/json'
```

</TabItem>
<TabItem value="response">

```json
{
    "data": {
        "find": {
            "edges": [
                {
                    "cursor": "Author5",
                    "node": {
                        "__typename": "Author",
                        "hypi": {
                            "__typename": "Hypi",
                            "id": "Author5",
                            "impl": null,
                            "created": "2021-04-15T05:14:48Z",
                            "updated": "2021-04-15T05:14:48Z",
                            "trashed": null,
                            "createdBy": "01F2GA50NFXHMYCBDNYFJK1V7R",
                            "instanceId": "01F3826NNRNXSDPVBMTMD47SCK"
                        },
                        "name": "Enid Blyton",
                        "age": null,
                        "bestbook": null,
                        "booklist": null
                    }
                }
            ],
            "pageInfo": {
                "hasPreviousPage": false,
                "hasNextPage": false,
                "startCursor": "FIRST",
                "endCursor": "LAST",
                "pageLimit": 25,
                "previousOffsets": [],
                "nextOffsets": []
            }
        }
    }
}    
```

</TabItem>
</Tabs>

***
Above sample examples of RESTful APIs can be tested with Postman. Do check out hypi collection of above examples by clicking button below. 

Note:  You need to provide actual instance domain name and authorization token to run the queries in Postman. 

[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/15379828-1ebf55dd-f582-4b03-a10d-4dd70e3f6898?action=collection%2Ffork&collection-url=entityId%3D15379828-1ebf55dd-f582-4b03-a10d-4dd70e3f6898%26entityType%3Dcollection%26workspaceId%3Da1cfb46b-0624-4367-8c08-d41c6cf700f0)


:::note Read More...

* [How to create data using the REST API](https://hypi.dev/t/how-to-create-data-using-the-rest-api/32)
* [How to update data using the REST API](https://hypi.dev/t/how-to-update-data-using-the-rest-api/31)
* [How to read data using the REST API](https://hypi.dev/t/how-to-read-data-using-the-rest-api/30)
* [How to read data with the ArcQL filter using the REST API](https://hypi.dev/t/how-to-read-data-with-the-arcql-filter-using-the-rest-api/27)
* [How to delete data using the REST API](https://hypi.dev/t/how-to-delete-data-using-the-rest-api/21)
* [How to delete data with the ArcQL filter using the REST API](https://hypi.dev/t/how-to-delete-data-with-the-arcql-filter-using-the-rest-api/25)
* [How to login to Hypi App instance using REST API](https://hypi.dev/t/how-to-login-to-hypi-app-instance-using-rest-api/34)
* [How to create a serverless function to login using REST API](https://hypi.dev/t/how-to-create-a-serverless-function-to-login-using-rest-api/33)
* [How to use the Python Requests module to interact with REST APIs of Hypi](https://hypi.dev/t/how-to-use-the-python-requests-module-to-interact-with-rest-apis-of-hypi/135)

:::