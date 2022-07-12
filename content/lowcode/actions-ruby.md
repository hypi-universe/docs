---
id: actions-ruby
title: Ruby actions
sidebar_label: Ruby actions
slug: /lowcode/actions-ruby
---

:::note

OpenWhisk requires a JSON object as output. Hence, serverless function cannot return arrays. It must return an object at the top level which can have arrays inside it.

:::

The process of creating Ruby actions is similar to that of [other actions](openwhisk-actions.md#the-basics).

The following sections guide you through creating and invoking a single Ruby action, and demonstrate how to bundle multiple Ruby files and third party dependencies.

Ruby actions are executed using Ruby 2.5. To use this runtime, specify the `wsk` CLI parameter
`--kind ruby:2.5` when creating or updating an action. This is the default when creating an action
with file that has a `.rb` extension.

An action is simply a top-level Ruby method. For example, create a file called `hello.rb`
with the following source code:

```ruby
def main(args)
  name = args["name"] || "stranger"
  greeting = "Hello #{name}!"
  puts greeting
  { "greeting" => greeting }
end
```

Ruby actions always consume a Hash and return a Hash.

The entry method for the action is `main` by default but may be specified explicitly
when creating the action with the `wsk` CLI using `--main`, as with any other action type.

You can create an OpenWhisk action called `hello_ruby` from this function as follows:

```
hypi wsk action create hello_ruby hello.rb
```

The CLI automatically infers the type of the action from the source file extension.
For `.rb` source files, the action runs using a Ruby 2.5 runtime.

Action invocation is the same for Ruby actions as it is for [any other action](openwhisk-actions.md#the-basics).

```
hypi wsk action invoke --result hello_ruby --param name World
```

```json
{
  "greeting": "Hello World!"
}
```

Find out more about parameters in the [Working with parameters](openwhisk-parameters.md) section.

### Packaging Ruby actions in zip files

You can package a Ruby action along with other files and dependent packages in a zip file.
The filename of the source file containing the entry point (e.g., `main`) must be `main.rb`.
For example, to create an action that includes a second file called `helper.rb`,
first create an archive containing your source files:

```bash
zip -r hello_ruby.zip main.rb helper.rb
```
and then create the action:

```bash
hypi wsk action create hello_ruby --kind ruby:2.5 hello_ruby.zip
```

A few Ruby gems such as `mechanize` and `jwt` are available in addition to the default and bundled gems.

You can use arbitrary gems so long as you use zipped actions to package all the dependencies.

:::note

Large portions of this page is copied from the [Apache OpenWhisk documentation](https://github.com/apache/openwhisk/tree/master/docs) on April 23rd 2021 - where there have been customisations to match Hypi's deployment this has been noted. Apache OpenWhisk and the Apache name are the property of the Apache Foundation and licensed under the [Apache V2 license](https://github.com/apache/openwhisk/blob/master/LICENSE.txt) .

:::