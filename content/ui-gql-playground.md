---
id: ui-gql-playground
title: GraphQL Playground
sidebar_label: GraphQL Playground
slug: /ui-gql-playground
---

1. On the Hypi platform, you can execute various GraphQL methods with `GraphQL playground`. Click on `API Instances`. Select the instance from the list of instances. Select `Playground` tab.

![GQLPlay](/img/UI-GQL-Play-1.PNG)

2. A sample FindAccount query is always present in the starting tab. Click on the `+` button to add a new tab to execute a method.

![GQLPlay](/img/UI-GQL-Play-2.PNG)

3. Note that `HTTP request headers` get automatically added. The same request headers are present in the [API configurations](ui-instance-api-config.md) of the instance.

![GQLPlay](/img/UI-GQL-Play-3.PNG)

4. Write the method. Enter input data under the `QUERY VARIABLES` tab. Hit the `blue play button` to execute the method. You will get the response on the right-hand side box.

![GQLPlay](/img/UI-GQL-Play-4.PNG)

5. You can check the history of executed methods (APIs) by clicking the `History` button.

![GQLPlay](/img/UI-GQL-Play-5.PNG)

6. Select the method and click the `Use` button to again insert the method in a tab on GraphQL Playground.

![GQLPlay](/img/UI-GQL-Play-6.PNG)

7. You may correct the improperly formatted code with `Prettify` button

![GQLPlay](/img/UI-GQL-Play-7.PNG)

8. The brackets get aligned properly with `Prettify`.

![GQLPlay](/img/UI-GQL-Play-8.PNG)

9. You may see the endpoint in a box to make an HTTP request. You may refresh the instance by clicking refresh symbol in front of it. Click `Copy CURL` to copy the HTTP request.

![GQLPlay](/img/UI-GQL-Play-9.PNG)

Paste the copied `CURL` to verify the request.

```java
curl 'https://api.alpha.hypi.dev/graphql' -H 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1' -H 'Origin: https://alpha.hypi.dev' -H 'Authorization: <Auth Key>' -H 'hypi-domain: ignorant.apps.hypi.app' --data-binary '{"query":"mutation Upsert($values: HypiUpsertInputUnion!) {\n  upsert(values: $values) {\n    id\n  }\n}\n","variables":{"values":{"Author":[{"name":"Dan Brown","age":56,"booklist":[{"title":"Da Vinci Code","publication":"abc","available":true}]}]}}}' --compressed
```
