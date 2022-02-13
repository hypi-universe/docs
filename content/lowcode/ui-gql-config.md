---
id: ui-gql-config
title: GraphQL configuration of an Instance
sidebar_label: GraphQL configuration of an Instance
slug: /lowcode/ui-gql-config
---

1. Go to the `API Instances` tab. Select an Instance from the list. Select the `Settings` to check the GraphQL configurations.

![GQLConfig](/img/UI-GraphQLConfig-1.PNG)

2. You can note the following settings under GraphQL configurations.

+ An `endpoint` is a unique URL that represents an object or collection of objects within the Hypi domain. You will point your HTTP client at this endpoint to interact with Hypi data resources.

+ Websocket URL allows you to subscribe to updates on an instance via `WebSockets`.

+ `HTTP request headers` contain information about the request context so that the server can tailor the response. Hypi HTTP request header has two fields, `hypi-domain`, and `Authorization`.

- `hypi-domain`: The domain name of the instance to make API requests to
- `Authorization`: A valid token obtained from running a login query

Check more about these fields [here](apisetup.md).

![GQLConfig](/img/UI-GraphQLConfig-2.PNG)

3. Below the HTTP request header, you can find the `Methods` (APIs) available under Hypi. Click on the inverted triangle button to get the list. A pop-up menu will be opened.

![GQLConfig](/img/UI-GraphQLConfig-3.PNG)

4. Select the method from the list to get details about the Method.

![GQLConfig](/img/UI-GraphQLConfig-4.PNG)

5. On the UI, you get the `input parameters` for the method to execute. Below that `Response fields` are also enlisted.

![GQLConfig](/img/UI-GraphQLConfig-5.PNG)
