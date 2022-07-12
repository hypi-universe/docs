---
id: actions-rust
title: Rust actions
sidebar_label: Rust actions
slug: /lowcode/actions-rust
---

:::note

OpenWhisk requires a JSON object as output. Hence, serverless function cannot return arrays. It must return an object at the top level which can have arrays inside it.

:::

The process of creating Rust actions is similar to that of [other actions](openwhisk-actions.md#the-basics).

The following sections guide you through creating and invoking a single Rust action, and demonstrate how to bundle multiple Rust files and third party dependencies.

An example action Rust action is simply a top-level function.

For example, create a file called `hello.rs` with the following source code:

```Rust
extern crate serde_json;

use serde_derive::{Deserialize, Serialize};
use serde_json::{Error, Value};

#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
struct Input {
    #[serde(default = "stranger")]
    name: String,
}

#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
struct Output {
    greeting: String,
}

fn stranger() -> String {
    "stranger".to_string()
}

pub fn main(args: Value) -> Result<Value, Error> {
    let input: Input = serde_json::from_value(args)?;
    let output = Output {
        greeting: format!("Hello, {}", input.name),
    };
    serde_json::to_value(output)
}
```

Rust actions are mainly composed by a `main` function that accepts a JSON `serdes Value` as input and returns a `Result` including a JSON `serde Value`.

The entry method for the action is `main` by default but may be specified explicitly when creating
the action with the `wsk` CLI using `--main`, as with any other action type.

You can create an OpenWhisk action called `helloRust` from this function as follows:

```
hypi wsk action create helloRust --kind rust:1.34 hello.rs
```
The CLI automatically infers the type of the action from the source file extension.
For `.rs` source files, the action runs using a Rust v1.34 runtime.

Action invocation is the same for Rust actions as it is for any other actions:

```
hypi wsk action invoke --result helloRust --param name World
```

```json
  {
      "greeting": "Hello World!"
  }
```

Find out more about parameters in the [Working with parameters](openwhisk-parameters.md) section.

### Packaging Rust actions in zip files

If your action needs external dependencies, you need to provide a zip file including your source and your cargo file with all your dependencies.

The filename of the source file containing the entry point (e.g., `main`) must be `lib.rs`.
The folder structure should be as follows:
```
|- Cargo.toml
|- src
    |- lib.rs
```
Here is an example of a Cargo.toml file
```
[package]
name = "actions"
version = "0.1.0"
authors = ["John Doe <john@doe.com>"]
edition = "2018"

[dependencies]
serde_json = "1.0"
serde = "1.0"
serde_derive = "1.0"
```

To zip your folder:

```bash
zip -r helloRust.zip Cargo.toml src
```

and then create the action:

```bash
hypi wsk action create helloRust --kind rust:1.34 helloRust.zip
```

:::note

Large portions of this page is copied from the [Apache OpenWhisk documentation](https://github.com/apache/openwhisk/tree/master/docs) on April 23rd 2021 - where there have been customisations to match Hypi's deployment this has been noted. Apache OpenWhisk and the Apache name are the property of the Apache Foundation and licensed under the [Apache V2 license](https://github.com/apache/openwhisk/blob/master/LICENSE.txt) .

:::