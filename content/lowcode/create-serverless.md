---
id: create-serverless
title: Create Serverless Function
sidebar_label: Create Serverless Function
slug: /lowcode/create-serverless
---

:::note

OpenWhisk requires a JSON object as output. Hence, serverless function cannot return arrays. It must return an object at the top level which can have arrays inside it.

:::

The creation of serverless function is effortless! 

After installation of CLI, [configure](openwhisk-cli.md) `OpenWhisk` to point towards Hypi's endpoint. Once it gets configured, you are ready to create a Serverless function.

We will be using `Javascript` with NodeJS runtime to write our function. And then we will create its docker image on Openwhisk and invoke it to use with the Hypi platform.

> Let's follow the below steps to create `Serverless Function` 

1. Create Java Script file action.js in a folder. Write  'Hello World' function in it.
```javascript
function main(args) {
    console.log('Hello World');
    // throw new Error('It failed!');
    return { hello: 'world', args: args };
}
```
2. Create an action called `hithere` using action.js. 
```
wsk action create hithere action.js
```
```
ok: created action
```
The docker image of the javascript function 'Hello World' gets created by OpenWhisk. `hithere` gets listed on a namespace on the Hypi platform.

3. Invoke an action `hithere`.  This is an activation of the serverless function. Now, your action is ready to use on Hypi platform as serverless function.
```
wsk action invoke hithere --param x 1 --param y hi --result
```
```
{
    "args": {
        "x": 1,
        "y": "hi"
    },
    "hello": "world"
}
```
`--param` takes input parameters for the function. `--result` shows the result of the function.

4. If you invoke the function without `--result` parameter, you will get the activation `id` of the action `hithere`
```
wsk action invoke hithere --param x 1 --param y hi
```
```
ok: invoked /_/hithere with id ee11ee981b984c1b91ee981b98cc1b48
```
5. You may get activation details of the action using the `id` received in the previous step.
```
wsk activation get ee11ee981b984c1b91ee981b98cc1b48
```
```
{
    "namespace": "01F2GA50PHFK7BAE9FZTPSPBK3",
    "name": "hithere",
    "version": "0.0.1",
    "subject": "01F2GA50PHFK7BAE9FZTPSPBK3",
    "activationId": "ee11ee981b984c1b91ee981b98cc1b48",
    "start": 1619068249600,
    "end": 1619068249603,
    "duration": 3,
    "statusCode": 0,
    "response": {
        "status": "success",
        "statusCode": 0,
        "success": true,
        "result": {
            "args": {
                "x": 1,
                "y": "hi"
            },
            "hello": "world"
        }
    },
    "logs": [
        "2021-04-22T05:10:49.60266801Z  stdout: Hello World"
    ],
    "annotations": [
        {
            "key": "path",
            "value": "01F2GA50PHFK7BAE9FZTPSPBK3/hithere"
        },
        {
            "key": "waitTime",
            "value": 90
        },
        {
            "key": "kind",
            "value": "nodejs:10"
        },
        {
            "key": "timeout",
            "value": false
        },
        {
            "key": "limits",
            "value": {
                "concurrency": 1,
                "logs": 10,
                "memory": 256,
                "timeout": 60000
            }
        }
    ],
    "publish": false
}
```
6. You may retrieve the action list and namespace list with the following commands.
```
wsk action list
```
```
actions
/01F2GA50PHFK7BAE9FZTPSPBK3/hithere                                    private nodejs:10
/01F2GA50PHFK7BAE9FZTPSPBK3/serverlessFun                              private nodejs:10
```
```
wsk namespace list
```
```
namespaces
01F2GA50PHFK7BAE9FZTPSPBK3
```
7. Verify that the action was invoked by checking the activations list:
```
wsk activation list
```
```
Datetime Activation ID     Kind      Start Duration   Status  Entity
2021-04-19 18:57:33 6955a0e828af40a195a0e828afe0a128 nodejs:10 cold  40ms       success 01F2GA50PH...TPSPBK3/hithere:0.0.1
2021-04-19 16:34:31 26285233eaba4960a85233eaba4960aa nodejs:10 cold  36ms       success 01F2GA50PH...TPSPBK3/serverlessFun:0.0.1
```
8. Every serverless function has access to `args.hypi` object. You can use this object to connect to [Hypi APIs](lowcode/api-references.md). 
      
  `args.hypi` object contains the following fields:  

1.  `token` - The token used to [configure the serverless function](/lowcode/openwhisk-cli#configure-openwhisk). It can be null for anonymous requests.
2.  `instanceId` - The [instance](lowcode/overview.md#instance) ID that the serverless function is executed in.
3.  `accountId` - The [account](lowcode/core.md#account) ID of the user making the API request.
4.  `domain` - The domain of the instance the request is made to.
5.  `env` - A map of any environment variables the user has created and set in the instance.
6.  `adminToken` - An admin token that can be used to perform actions on behalf of users other than the one making the request. This can be used, for example, to create permissions or link data on behalf of other users who wouldn't have permission to do so. 