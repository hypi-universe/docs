---
id: openwhisk-actions
title: OpenWhisk Actions
sidebar_label: OpenWhisk Actions
slug: /lowcode/openwhisk-actions
---

Actions are stateless functions that run on the OpenWhisk platform. For example, an action can
be used to detect the faces in an image, respond to a database change, respond to an API call,
or post a Tweet. In general, an action is invoked in response to an event and produces some
observable output.

An action may be created from a function programmed using a number of supported languages and runtimes, or from a binary-compatible executable, or even executables packaged as Docker containers.

* The OpenWhisk CLI [`wsk`](https://github.com/apache/openwhisk-cli/releases) makes it easy to create and invoke actions. Instructions for configuring the CLI are available [here](openwhisk-cli.md).

While the actual function code will be specific to a language and runtime, the OpenWhisk operations to create, invoke and manage an action are the same regardless of the implementation choice. We recommend that you review [the basics](#the-basics) before moving on to advanced topics.

* [The basics of working with actions](#the-basics) (_start here_)
* Common `wsk` CLI operations and tips
    - [Watching action output](#watching-action-output)
    - [Getting actions](#getting-actions)
    - [Listing actions](#listing-actions)
    - [Deleting actions](#deleting-actions)
* [Accessing action metadata within the action body](#accessing-action-metadata-within-the-action-body)

## The basics

To use a function as an action, it must conform to the following:

- The function accepts a dictionary as input and produces a dictionary as output. The input and output dictionaries are key-value pairs, where the key is a string and the value is any valid JSON value. The dictionaries are canonically represented as JSON objects when interfacing to an action via the REST API or the `wsk` CLI.
- The function must be called `main` or otherwise must be explicitly exported to identify it as the entry point.  The mechanics may vary depending on your choice of language, but in general the entry point can be specified using the `--main` flag when using the `wsk` CLI.

In this section, you'll invoke a built-in action using the `wsk` CLI, which you should
[download and configure](openwhisk-cli.md) first if necessary.

### Invoking a built-in action

Actions are identified by fully qualified names which generally have three parts separated by a forward slash:

1. a namespace
2. a package name
3. the action name

As an example, we will work with a built-in sample action called 
`/whisk.system/samples/greeting`.

The namespace for this action is `whisk.system`, the package name
is `samples`, and the action name is `greeting`. There are other sample actions and
utility actions, and later you'll learn how to explore the platform to discover more actions.

Let's take a look at the action body by saving the function locally:
```
hypi wsk action get /whisk.system/samples/greeting --save
```
```
ok: saved action code to /path/to/openwhisk/greeting.js
```
This is a JavaScript function, which is indicated by the `.js` extension. It will run using a [Node.js](http://nodejs.org/) runtime.

The contents of the file `greeting.js` should match the function below. It is a short function which
accepts optional parameters and returns a standard greeting.

```js
/**
 * @params is a JSON object with optional fields "name" and "place".
 * @return a JSON object containing the message in a field called "msg".
 */
function main(params) {
  // log the parameters to stdout
  console.log('params:', params);

  // if a value for name is provided, use it else use a default
  var name = params.name || 'stranger';

  // if a value for place is provided, use it else use a default
  var place = params.place || 'somewhere';

  // construct the message using the values for name and place
  return {msg:  'Hello, ' + name + ' from ' + place + '!'};
}
```

The command to invoke an action and get its result is `wsk action invoke <name> --result` as in:
```
hypi wsk action invoke /whisk.system/samples/greeting --result
```
This command will print the following result to the terminal:
```json
{
  "msg": "Hello, stranger from somewhere!"
}
```

### Passing parameters to actions

Actions may receive parameters as input, and the `wsk` CLI makes it convenient to pass parameters to the actions from the command line. Briefly, this is done with the flag `--param key value` where `key` is the property name and `value` is any valid JSON value. There is a longer [tutorial on working with parameters](openwhisk-parameters.md) that you should read after completing this basic walk-through.

The `/whisk.system/samples/greeting` action accepts two optional input arguments, which are used to tailor the response. The default greeting as described earlier is "Hello, stranger from somewhere!". The words "stranger" and "somewhere" may be replaced by specifying the following parameters respectively:

- `name` whose value will replace the word "stranger",
- `place` whose value will replace the word "somewhere".

```
hypi wsk action invoke /whisk.system/samples/greeting --result --param name Dorothy --param place Kansas
```
```
{
  "msg": "Hello, Dorothy from Kansas!"
}
```

### Request-Response vs Fire-and-Forget

The style of invocation shown above is synchronous in that the request from the CLI _blocks_ until the
activation completes and the result is available from the OpenWhisk platform. This is generally useful
for rapid iteration and development.

You can invoke an action asynchronously as well, by dropping the `--result` command line option. In this case the action is invoked, and the OpenWhisk platform returns an activation ID which you can use later to retrieve the activation record.
```
hypi wsk action invoke /whisk.system/samples/greeting
```
```
ok: invoked /whisk.system/samples/greeting with id 5a64676ec8aa46b5a4676ec8aaf6b5d2
``` 
To retrieve the activation record, you use the `wsk activation get <id>` command, as in:
```
hypi wsk activation get 5a64676ec8aa46b5a4676ec8aaf6b5d2
```
```
ok: got activation 5a64676ec8aa46b5a4676ec8aaf6b5d2
{
  "activationId": "5a64676ec8aa46b5a4676ec8aaf6b5d2",
  "duration": 3,
  "response": {
    "result": {
      "msg": "Hello, stranger from somewhere!"
    },
    "status": "success",
    "success": true
  }, ...
}
```
Sometimes it is helpful to invoke an action in a blocking style and receiving the activation record entirely
instead of just the result. This is achieved using the `--blocking` command line parameter.
```
hypi wsk action invoke /whisk.system/samples/greeting --blocking
```
```
ok: invoked /whisk.system/samples/greeting with id 5975c24de0114ef2b5c24de0118ef27e
{
  "activationId": "5975c24de0114ef2b5c24de0118ef27e",
  "duration": 3,
  "response": {
    "result": {
      "msg": "Hello, stranger from somewhere!"
    },
    "status": "success",
    "success": true
  }, ...
}
```

### Blocking invocations and timeouts

A blocking invocation request will _wait_ for the activation result to be available. The wait period
is the lesser of 60 seconds (this is the default for blocking invocations) or the action's configured
time limit.

The result of the activation is returned if it is available within the blocking wait period. Otherwise, the activation continues processing in the system and an activation ID is returned so that one may check for the result later, as with non-blocking requests.

When an action exceeds its configured time limit, the activation record will indicate this error.

### Working with activations

Some common CLI commands for working with activations are:
- `hypi wsk activation list`: lists all activations
- `hypi wsk activation get --last`: retrieves the most recent activation record
- `hypi wsk activation result <activationId>`: retrieves only the result of the activation (or use `--last` to get the most recent result).
- `hypi wsk activation logs <activationId>`: retrieves only the logs of the activation.
- `hypi wsk activation logs <activationId> --strip`: strips metadata from each log line so the logs are easier to read.

#### The `wsk activation list` command

The `hypi activation list` command lists all activations, or activations filtered by namespace or name. The result set can be limited by using several flags:

```
Flags:
  -f, --full          include full activation description
  -l, --limit LIMIT   only return LIMIT number of activations from the collection with a maximum LIMIT of 200 activations (default 30)
      --since SINCE   return activations with timestamps later than SINCE; measured in milliseconds since Th, 01, Jan 1970
  -s, --skip SKIP     exclude the first SKIP number of activations from the result
      --upto UPTO     return activations with timestamps earlier than UPTO; measured in milliseconds since Th, 01, Jan 1970
```

For example, to list the last 6 activations:
```
hypi wsk activation list --limit 6
```
```
Date       time     Activation ID     Kind   Start  Duration   Status  Entity
2019-03-16 20:03:00 8690bc9904794c9390bc9904794c930e nodejs:6  warm  2ms        success guest/tripleAndIncrement:0.0.1
2019-03-16 20:02:59 7e76452bec32401db6452bec32001d68 nodejs:6  cold  32ms       success guest/increment:0.0.1
2019-03-16 20:02:59 097250ad10a24e1eb250ad10a23e1e96 nodejs:6  warm  2ms        success guest/tripleAndIncrement:0.0.1
2019-03-16 20:02:58 4991a50ed9ed4dc091a50ed9edddc0bb nodejs:6  cold  33ms       success guest/triple:0.0.1
2019-03-16 20:02:57 aee63124f3504aefa63124f3506aef8b nodejs:6  cold  34ms       success guest/tripleAndIncrement:0.0.1
2019-03-16 20:02:57 22da217c8e3a4b799a217c8e3a0b79c4 sequence  warm  3.46s      success guest/tripleAndIncrement:0.0.1
```

The meaning of the different columns in the list are:

| Column | Description |
| :--- | :--- |
| `Datetime` | The date and time when the invocation occurred. |
| `Activation ID` | An activation ID that can be used to retrive the result using the `wsk activation get`, `wsk activation result` and `wsk activation logs` commands. |
| `Kind` | The runtime or action type |
| `Start` | An indication of the latency, i.e. if the runtime container was cold or warm started. |
| `Duration` | Time taken to execute the invocation. |
| `Status` | The outcome of the invocation. For an explanation of the various statuses, see the description of the `statusCode` below. |
| `Entity` | The fully qualified name of entity that was invoked. |

#### Understanding the activation record

Each action invocation results in an activation record which contains the following fields:

- `activationId`: The activation ID.
- `namespace` and `name`: The namespace and name of the entity.
- `start` and `end`: Timestamps recording the start and end of the activation. The values are in [UNIX time format](http://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap04.html#tag_04_15).
- `logs`: An array of strings with the logs that are produced by the action during its activation. Each array element corresponds to a line output to `stdout` or `stderr` by the action, and includes the time and stream of the log output. The structure is as follows: `TIMESTAMP` `STREAM:` `LOG LINE`.
- `annotations`: An array of key-value pairs that record metadata about the action activation.
- `response`: A dictionary that defines the following keys
- `status`: The activation result, which might be one of the following values:
    - *"success"*: the action invocation completed successfully.
    - *"application error"*: the action was invoked, but returned an error value on purpose, for instance because a precondition on the arguments was not met.
    - *"action developer error"*: the action was invoked, but it completed abnormally, for instance the action did not detect an exception, or a syntax error existed. This status code is also returned under specific conditions such as:
          - the action failed to initialize for any reason
          - the action exceeded its time limit during the init or run phase
          - the action specified a wrong docker container name
          - the action did not properly implement the expected runtime protocol
          - *"whisk internal error"*: the system was unable to invoke the action.
  - `statusCode`: A value between 0 and 3 that maps to the activation result, as described by the *status* field:

    | statusCode | status                 |
    |:---------- |:---------------------- |
    | 0          | success                |
    | 1          | application error      |
    | 2          | action developer error |
    | 3          | whisk internal error   |
    
  - `success`: Is *true* if and only if the status is *"success"*.
  - `result`: A dictionary as a JSON object which contains the activation result. If the activation was successful, this contains the value that is returned by the action. If the activation was unsuccessful, `result` contains the `error` key, generally with an explanation of the failure.

### Creating and updating your own action

Earlier we saved the code from the `greeting` action locally. We can use it to create our own version of the action in our own namespace.
```
hypi wsk action create greeting greeting.js
```
```
ok: created action greeting
```
For convenience, you can omit the namespace when working with actions that belong to you. Also if there
is no package, then you simply use the action name without a [package](openwhisk-packages.md) name.

If you modify the code and want to update the action, you can use `wsk action update` instead of
`wsk action create`. The two commands are otherwise the same in terms of their command like parameters.

```
hypi wsk action update greeting greeting.js
```
```
ok: updated action greeting
```

### Binding parameters to actions

Sometimes it is necessary or just convenient to provide values for function parameters. These can serve as
defaults, or as a way of reusing an action but with different parameters. Parameters can be bound to an action and unless overridden later by an invocation, they will provide the specified value to the function.

Here is an example.
```
hypi wsk action invoke greeting --result
```
```
{
  "msg": "Hello, stranger from somewhere!"
}
```
```
wsk action update greeting --param name Toto
ok: updated action greeting
```
```
hypi wsk action invoke greeting --result
```
```
{
  "msg": "Hello, Toto from somewhere!"
}
```
You may still provide additional parameters, as in the `place`:
```
hypi wsk action invoke greeting --result --param place Kansas
{
  "msg": "Hello, Toto from Kansas!"
}
```
and even override the `name`:
```
hypi wsk action invoke greeting --result --param place Kansas --param name Dorothy
{
  "msg": "Hello, Dorothy from Kansas!"
}
```

### Action execution

When an invocation request is received, the system records the request and dispatches an activation.

The system returns an activation ID (in the case of a non-blocking invocation) to confirm that the invocation was received.

Notice that if there's a network failure or other failure which intervenes before you receive an HTTP response, it is possible that OpenWhisk received and processed the request.

The system attempts to invoke the action once and records the `status` in the activation record.
Every invocation that is successfully received, and that the user might be billed for, will eventually have an activation record.

Note that in the case of action developer error the action may have partially run and generated externally visible side effects. It is the user's responsibility to check whether such side effects actually happened, and issue retry logic if desired. Also note that certain *whisk internal errors* will indicate that an action started running but the system failed before the action registered completion.

### Further considerations

- Functions should be stateless, or *idempotent*. While the system does not enforce this property,
    there is no guarantee that any state maintained by an action will be available across invocations. In some cases, deliberately leaking state across invocations may be advantageous for performance, but also exposes some risks.
- An action executes in a sandboxed environment, namely a container. At any given time, a single activation will execute inside the container. Subsequent invocations of the same action may reuse a previous container, and there may exist more than one container at any given time, each having its own state.
- Invocations of an action are not ordered. If the user invokes an action twice from the command line or the REST API, the second invocation might run before the first. If the actions have side effects, they might be observed in any order.
- There is no guarantee that actions will execute atomically. Two actions can run concurrently and their side effects can be interleaved. OpenWhisk does not ensure any particular concurrent consistency model for side effects. Any concurrency side effects will be implementation-dependent.
- Actions have two phases: an initialization phase, and a run phase. During initialization, the function is loaded and prepared for execution. The run phase receives the action parameters provided at invocation time. Initialization is skipped if an action is dispatched to a previously initialized container --- this is referred to as a _warm start_. You can tell if an invocation was a warm activation or a cold one requiring initialization by inspecting the activation record.
- An action runs for a bounded amount of time. This limit can be configured per action, and applies to both the initialization and the execution separately. If the action time limit is exceeded during the initialization or run phase, the activation's response status is _action developer error_.
- Functions should follow best practices to reduce vulnerabilities by treating input as untrusted, and be aware of vulnerabilities they may inherit from third-party dependencies.

## Watching action output

OpenWhisk actions might be invoked by other users, in response to various events, or as part of an action sequence. In such cases it can be useful to monitor the invocations.

You can use the OpenWhisk CLI to watch the output of actions as they are invoked.

1. Issue the following command from a shell:
```
hypi wsk activation poll
```
This command starts a polling loop that continuously checks for logs from activations.

2. Switch to another window and invoke an action:
```
hypi wsk action invoke /whisk.system/samples/helloWorld --param payload Bob
ok: invoked /whisk.system/samples/helloWorld with id 7331f9b9e2044d85afd219b12c0f1491
```
3. Observe the activation log in the polling window:
```
Activation: helloWorld (7331f9b9e2044d85afd219b12c0f1491)
  2016-02-11T16:46:56.842065025Z stdout: hello bob!
```
Similarly, whenever you run the poll utility, you see in real time the logs for any actions running on your behalf in OpenWhisk.

## Getting actions

Metadata that describes existing actions can be retrieved via the `wsk action get` command.
```
hypi wsk action get hello
```
```
ok: got action hello
{
    "namespace": "guest",
    "name": "hello",
    "version": "0.0.1",
    "exec": {
        "kind": "nodejs:6",
        "binary": false
    },
    "annotations": [
        {
            "key": "exec",
            "value": "nodejs:6"
        }
    ],
    "limits": {
        "timeout": 60000,
        "memory": 256,
        "logs": 10
    },
    "publish": false
}
```

### Getting the URL for an action

An action can be invoked through the REST interface via an HTTPS request.
To get an action URL, execute the following command:
```
hypi wsk action get greeting --url
```
A URL with the following format will be returned for standard actions:
```
ok: got action actionName
https://${APIHOST}/api/v1/namespaces/${NAMESPACE}/actions/greeting
```
Authentication is required when invoking an action via an HTTPS request using this resource path.
For more information regarding action invocations using the REST interface.

Another way of invoking an action which does not require authentication is via [web actions](openwhisk-webactions.md).

Any action may be exposed as a web action, using the `--web true` command line option at action
creation time (or later when updating the action).
```
hypi wsk action update greeting --web true
```
```
ok: updated action greeting
```
The resource URL for a web action is different:
```
hypi wsk action get greeting --url
```
```
ok: got action greeting
https://${APIHOST}/api/v1/web/${NAMESPACE}/${PACKAGE}/greeting
```
You can use `curl` or wget to invoke the action.
```
curl `hypi wsk action get greeting --url | tail -1`.json
```
```
{
  "payload": "Hello, Toto from somewhere!"
}
```

### Saving action code

Code associated with an existing action may be retrieved and saved locally. Saving can be performed on all actions except sequences and docker actions.

1. Save action code to a filename that corresponds with an existing action name in the current working directory. A file extension that corresponds to the action kind is used, or an extension of `.zip` will be used for action code that is a zip file.
```
hypi wsk action get /whisk.system/samples/greeting --save
```
```
ok: saved action code to /path/to/openwhisk/greeting.js
```
2. You may provide your own file name and extension as well using the `--save-as` flag.
```
hypi wsk action get /whisk.system/samples/greeting --save-as hello.js
```
```
ok: saved action code to /path/to/openwhisk/hello.js
```

## Listing actions

You can list all the actions that you have created using `wsk action list`:
```
hypi wsk action list
```
```
actions
/guest/mySequence                  private sequence
/guest/greeting                    private nodejs:6
```
Here, we see actions listed in order from most to least recently updated. For easier browsing, you can use the flag `--name-sort` or `-n` to sort the list alphabetically:
```
hypi wsk action list --name-sort
```
```
actions
/guest/mySequence                  private sequence
/guest/greeting                    private nodejs:6
```

Notice that the list is now sorted alphabetically by namespace, then package name if any, and finally action name, with the default package (no specified package) listed at the top.

**Note**: The printed list is sorted alphabetically after it is received from the platform. Other list flags such as `--limit` and `--skip` will be applied to the block of actions before they are received for sorting. To list actions in order by creation time, use the flag `--time`.

As you write more actions, this list gets longer and it can be helpful to group related actions into [packages](openwhisk-packages.md). To filter your list of actions to just those within a specific package, you can use:
```
hypi wsk action list /whisk.system/utils
```
```
actions
/whisk.system/utils/hosturl        private nodejs:6
/whisk.system/utils/namespace      private nodejs:6
/whisk.system/utils/cat            private nodejs:6
/whisk.system/utils/smash          private nodejs:6
/whisk.system/utils/echo           private nodejs:6
/whisk.system/utils/split          private nodejs:6
/whisk.system/utils/date           private nodejs:6
/whisk.system/utils/head           private nodejs:6
/whisk.system/utils/sort           private nodejs:6
```

## Deleting actions

You can clean up by deleting actions that you do not want to use.

1. Run the following command to delete an action:  
```
hypi wsk action delete greeting
```
```
  ok: deleted greeting
```
2. Verify that the action no longer appears in the list of actions.
```
hypi wsk action list
```
```
  actions
  /guest/mySequence                private sequence
```

## Accessing action metadata within the action body

The action environment contains several properties that are specific to the running action.
These allow the action to programmatically work with OpenWhisk assets via the REST API,
or set an internal alarm when the action is about to use up its allotted time budget.
The properties are accessible via the system environment for all supported runtimes:
Node.js, Python, Swift, Java and Docker actions when using the OpenWhisk Docker skeleton.

* `__OW_API_HOST` the API host for the OpenWhisk deployment running this action.
* `__OW_API_KEY` the API key for the subject invoking the action, this key may be a restricted API key. This property is absent unless explicitly [requested](openwhisk-annotations.md).
* `__OW_NAMESPACE` the namespace for the _activation_ (this may not be the same as the namespace for the action).
* `__OW_ACTION_NAME` the fully qualified name of the running action.
* `__OW_ACTION_VERSION` the internal version number of the running action.
* `__OW_ACTIVATION_ID` the activation id for this running action instance.
* `__OW_DEADLINE` the approximate time when this action will have consumed its entire duration quota (measured in epoch milliseconds).


:::note

Large portions of this page is copied from the [Apache OpenWhisk documentation](https://github.com/apache/openwhisk/tree/master/docs) on April 23rd 2021 - where there have been customisations to match Hypi's deployment this has been noted. Apache OpenWhisk and the Apache name are the property of the Apache Foundation and licensed under the [Apache V2 license](https://github.com/apache/openwhisk/blob/master/LICENSE.txt) .

:::