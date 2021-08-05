---
id: openwhisk-websocket
title: Using the WebSocket Package
sidebar_label: WebSocket Package
slug: /openwhisk-websocket
---

The `/whisk.system/websocket` package offers a convenient way post messages to a WebSocket.

The package includes the following action:

| Entity | Type | Parameters | Description |
| --- | --- | --- | --- |
| `/whisk.system/websocket` | package | uri | Utilities for communicating with WebSockets |
| `/whisk.system/websocket/send` | action | uri, payload | Send the payload to the WebSocket URI |

If you plan to send many messages to the same WebSocket URI, creating a package binding with the `uri` value is suggested.  With binding, you don't need to specify the value each time that you use the `send` action.

### Sending a message to a WebSocket

The `/whisk.system/websocket/send` action will send a payload to a WebSocket URI. The parameters are as follows:

- `uri`: The URI of the websocket server (e.g. ws://mywebsockethost:80)
- `payload`: The message you wish to send to the WebSocket

:::note

Large portions of this page is copied from the [Apache OpenWhisk documentation](https://github.com/apache/openwhisk/tree/master/docs) on August 5th 2021 - where there have been customisations to match Hypi's deployment this has been noted. Apache OpenWhisk and the Apache name are the property of the Apache Foundation and licensed under the [Apache V2 license](https://github.com/apache/openwhisk/blob/master/LICENSE.txt) .

:::