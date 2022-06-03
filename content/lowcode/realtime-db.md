---
id: realtime-db
title: Realtime database
sidebar_label: Realtime database
slug: /lowcode/realtime-db
---

Hypi facilitates real-time monitoring of the database using Subscription method.

## Subscription

The subscription function monitors the upsert operation on any object of any type. If the mutation (insert or update of data) happens in any field of an object, the server will push the update to all connected clients subscribed to the type for which data was added or updated. The subscription works only on the upsert function execution and not on other mutations.

Hypi implements the GraphQL [subscriptions-transport-ws](https://github.com/apollographql/subscriptions-transport-ws/blob/v0.9.18/PROTOCOL.md) protocol. 

The WebSocket endpoint is [wss://api.hypi.app/graphql](wss://api.hypi.app/graphql)

Suppose you are creating a messaging app. When a sender sends the message, the receiver will receive the message through a subscription. The receiver listens to the changes in the text of the message object of the sender. If the data is inserted in the text field of the message object of the sender, the receiver receives the inserted text.

You may add the `subscription` to any field of any data type. The subscription works on the subscribed field only and not on other fields.

### Example

Here, we are configuring the subscription on the `name`  field of the `Author` type. This switches on the listener mode of the receiver. This works as a listener/receiver socket.

```json
subscription {
  subscribe {
    Author {
      name
    }
  }
}
```

Open second [Hypi GraphQL Playground](ui-gql-playground.md) (editor) on another tab of the browser selecting the same release and same instance. This works as a sender socket. Insert data in the name field.

```json
mutation Upsert($values: HypiUpsertInputUnion!) {
  upsert(values: $values) {
    id
  }
}
{
  "values": {
    "Author": [
      {
        "hypi": {"id": "Author1"},
        "name": "Dan Brown"
      }       
    ]
  }
}  
```

You will get the notification of this insertion into the previous socket that was listening to this event.

```json
{
  "data": {
    "subscribe": {
      "Author": {
        "name": "Dan Brown"
      }
    }
  },
  "errors": null
}
```

You may perform any number of upsert operation. The upsert event would be notified in the listener tab.

```json
{
  "data": {
    "subscribe": {
      "Author": {
        "name": "Paulo Coelho"
      }
    }
  },
  "errors": null
}

{
  "data": {
    "subscribe": {
      "Author": {
        "name": "Sudha Murti"
      }
    }
  },
  "errors": null
}    
```

Please note that if you insert data in the `age` field of Author1, the insertion notification will not be received.

:::note Read More...

* [How to monitor the database operation in real-time using a Subscription](https://hypi.dev/t/how-to-monitor-the-database-operation-in-real-time-using-a-subscription/242)
* [Introduction to Real-time Database queries using Hypi’s low code API](https://hypi.dev/t/introduction-to-real-time-database-queries-using-hypis-low-code-api/284)

:::