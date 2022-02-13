---
id: webhooks
title: Webhooks
sidebar_label: Webhooks
slug: /lowcode/webhooks
---

`Webhooks` provide a way for external APIs to notify you when some event has occurred in their system. That is a typical use case for this API.

These APIs are generally not secure. Different providers have different mechanisms for proving to you that the request is genuinely from them. Hypi provides you access to all the data sent in the request, this enables you to perform verification as you see fit.

The `webhook` can handle events of any type like payment failure, notification for a new post on the blog, reporting of an issue in the system, etc. And the response to the event could be an automated email or storing the data in the database. The response can be customized based upon the status code sent through the `HTTP request`.

Let's say a payment system wants to notify the failure of Payments. So, the payment system sends an automated message or `payload` to the App Instance through an HTTP POST. A function defined in the App Schema process the webhook request. It parses the payload and extracts the data from it. The payload type is usually JSON. But some providers may send XML or URL encoded form data.

If the data of the payload has an `email ID` of the customer whose payment failed, a [trigger](triggers.md) can be invoked to send an email to him automatically.

Let’s define a function `myInlineFn` in the schema that processes a `webhook` request. 

:::caution

For the webhook to correct properly, the signature of the function processing webhook request must be `(payload: WebhookPayload): WebhookResponse`

:::

```java
type Query {
  myInlineFn(payload: WebhookPayload): 
    WebhookResponse @tan(type:Groovy, inline: """
    return [
      "status": 200,
      "headers": payload.headers,
      "body": payload.url.host + ":" + 
              payload.url.port + payload.url.path + "?" 
              + payload.url.queryParams + "<>" + payload.body
    ]
  """)
}
```
Let's go through the data types related to Webhook.

```java
type WebhookPayload {
    url: URLInput!
    headers: Json!
    body: String
}
```

`Webhookpayload` data type stores the data of a payload. A payload has url string along with a header and body.


| Parameter   | Type     | Description                                 |
|-------------|----------|---------------------------------------------|
| **url**     | URLInput | Input URL provided by the payload           |
| **headers** | JSON     | Header of the Payload HTTP request/response |
| **body**    | String   | Data Attached to Payload                    |

Input url contains url information like `url path`, `query parameters`, `port`, `host`, etc.

```java
type WebhookResponse {
    status: Int
    headers: Json
    body: Json
}
```
If the query or mutation functions in the Webhook definition (myInlineFn) returns this then it controls what the server responds with. For example, the GraphQL function can return a 301 or 302 `status` and a Location header to an external URL to cause a redirect. If `status` 200 gets returned, it indicates the success of the event. You may extract the `status` by parsing the input HTTP POST request.

You can design the `myInlineFn` as per the requirements. It takes the shape of  [User Defined Function](userdefinedfunctions.md). But as stated above, its signature remains the same. In the current function defined in the schema, it returns HTTP request status as 200 and it separates the payload header and body. The URL input parameters of the payload get attached to the payload body forming a response string.

## Example

```java
type Webhook {
    name: String
    as: Account
    query: GraphQLRef!
}
```
Webhook type is defined in Hypi as above. A webhook object needs to be created in an instance to send/receive a webhook HTTP request/response through an endpoint. The parameters of the Webhook type are as follows.

| Parameters | Type       | Description                                                                                                                                          |
|------------|------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| **name**   | String     | The name of the webhook. It is referenced in the URL by this name. If missing the webhook is only addressable by ID                                  |
| **as**     | Account    | Defaults to the account creating the Webhook. Hypi will generate an authorization token automatically for the account when the webhook is triggered. |
| **query**  | GraphQLRef | This refers to a GraphQL function to process webhook requests. The function can trigger a workflow or operate on the payload itself.                 |

Let’s check GraphQLRef type as well
```java
type GraphQLRef {
    type: OpType!
    field: String!
    selection: String
}
```

| Parameters    | Type   | Description                                                                                                           |
|---------------|--------|-----------------------------------------------------------------------------------------------------------------------|
| **type**      | OpType | Query/Mutation/Subscription                                                                                           |
| **field**     | String | The name of the function that processes the webhook request.                                                          |
| **selection** | String | If present this is a set of GraphQL fields that will be selected from the results of the function that is referenced. |

A simple webhook example looks like this.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Input Data', value: 'data'},
  ]}>
<TabItem value="query">

```java
mutation Upsert($values: HypiUpsertInputUnion!) {
  upsert(values: $values) {
    id
  }
}
```

</TabItem>
<TabItem value="data">

```java
{
  "values": {
    "Webhook": [
             {
              "hypi": {
              "id": "wid"
              },
             "name": "wh1",
            "query": {
            "type": "Query",
            "field": "myInlineFn"
            }
          }
       ]
    }
}
```
</TabItem>
</Tabs>

Once a Webhook is created, it can be called by making an HTTP request to:

* [https://api.hypi.app/webhook/{domain}/{webhookname}](#)

where `{domain}` is the instance domain for your app and `{webhook name}` is the name of the webhook to be executed. In the example on this page, the name is `wh1`.

**Ex:**  [https://api.hypi.app/webhook/incineration.apps.hypi.app/wh1](#)