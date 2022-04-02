---
id: nodejs-client-library
title: NodeJS Client Library
sidebar_label:  NodeJS
slug: /nodejs-client-library
---

Using NodeJS Client Library, integrate Hypi APIs effortlessly into the NodeJS based serverless functions. Download and install NPM NodeJS library and start using Hypi APIs.

Here are the easy steps to get you going.

+ Create a `package.json` file in a folder.

```
{
  "name": "nodejs-hypi",
  "main": "index.js",
  "dependencies": {
    "@hypi/hypi-client-nodejs": "^1.0.15"
  }
}
```
:::note 

Enter the latest version for the `@hypi/hypi-client-nodejs` dependency.

:::

+ Create `index.js` file in the same folder. This is the file with the serverless function. 

Below file has `nodeJSHypi` function to be exported using `exports.main`. `require()` function imports hypi nodejs client library dynamically.

```javascript
async function nodeJSHypi(args) {
  const HypiClient = require("@hypi/hypi-client-nodejs");
  const hypiClient = new HypiClient.HypiClient(args.hypi.domain);
  hypiClient.updateToken(args.hypi.token);
  var upsert_output = await hypiClient.upsert({
    Pair: [
      {
        hypi: {
          id: "pairId",
        },
        key: args.key,
        value: args.value,
      },
    ],
  });

  var get_output = await hypiClient.get(
    "Pair",
    "pairId",
    `{
      ... on Pair {
        hypi {
          id
        }
        key
        value
      }
    }`
  );

  var trash_output = await hypiClient.trash("Pair", "hypi.id = 'pairId'");

  var untrash_output = await hypiClient.untrash("Pair", "hypi.id = 'pairId'");

  var delete_output = await hypiClient.delete("Pair", "hypi.id = 'pairId'");

  return {
    upsert_output: upsert_output,
    get_output: get_output,
    trash_output: trash_output,
    untrash_output: untrash_output,
    delete_output: delete_output,
  };
}

exports.main = nodeJSHypi;
```
+  `args.hypi` has the following variables. You can make use of them.

```
hypi: {",
accountId: '01FVW473F5X84GY9XJ919JDRQW',",
domain: 'telescoped.apps.hypi.app',",
env: null,",
instanceId: '01FVW623W74K3KV3DTAWTRP595',",
token: 'Auth-Token'",
}
```

+ `hypiClient.upsert` is an async function that upserts the data in a type (`Pair` - an in-built data type has been used in the example). The function is identical to `upsert` hypi API. 
+  `hypiClient.get` , `hypiClient.find`, `hypiClient.trash` , `hypiClient.untrash`, and `hypiClient.delete` functions are nodejs hypi interfaces for [get](readdata.md#get), [find](readdata.md#find), [trash](deletedata.md#trash), [untrash](deletedata.md#untrash), [delete ](deletedata.md#delete)functions respectively.

+  Install the Hypi nodejs library using NPM ([https://www.npmjs.com/package/@hypi/hypi-client-nodejs](https://www.npmjs.com/package/@hypi/hypi-client-nodejs)): 
```
npm i @hypi/hypi-client-nodejs
```
`node_modules` folder gets created in the current folder.

+ Zip all the above files in the folder including the dependencies. (nodejsclient.zip)

+ Create the action from the zip folder.
```
wsk action create packageAction --kind nodejs:12 action.zip
```       
Explicitly provide a value for the `--kind` flag by using `nodejs:12`, or `nodejs:10`.

+ Define GraphQL Query in the Schema.

```Java
type Query {
 createPair(key:String,value:String): Json @tan(type:OpenWhisk, name: "packageNodeJS")
}
```
+ Execute the serverless function.

<Tabs
  defaultValue="query"
  values={[
    {label: 'GraphQL Query', value: 'query'},
    {label: 'Response', value: 'response'},
  ]}>
<TabItem value="query">

```
{
  createPair(key:"a", value:"b")
}
```
</TabItem>

<TabItem value="response">

```json
{
  "data": {
    "createPair": {
      "delete_output": {
        "data": {
          "delete": 1
        }
      },
      "get_output": {
        "data": {
          "get": {
            "__typename": "Pair",
            "hypi": {
              "__typename": "Hypi",
              "id": "pairId"
            },
            "key": "a",
            "value": "b"
          }
        },
        "loading": false,
        "networkStatus": 7,
        "stale": false
      },
      "trash_output": {
        "data": {
          "trash": 1
        }
      },
      "untrash_output": {
        "data": {
          "untrash": 1
        }
      },
      "upsert_output": {
        "data": {
          "upsert": [
            {
              "__typename": "Hypi",
              "id": "pairId"
            }
          ]
        }
      }
    }
  }
}
```

</TabItem>
</Tabs>
