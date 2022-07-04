---
id: actions-php
title: PHP actions
sidebar_label: PHP actions
slug: /lowcode/actions-php
---

:::note

OpenWhisk requires a JSON object as output. Hence, serverless function cannot return arrays. It must return an object at the top level which can have arrays inside it.

:::

The process of creating PHP actions is similar to that of [other actions](openwhisk-actions.md#the-basics).

The following sections guide you through creating and invoking a single PHP action,
and demonstrate how to bundle multiple PHP files and third party dependencies.

PHP actions are executed using PHP 8.0, 7.4 or 7.3. The specific version of PHP is listed in the CHANGELOG files in the [PHP runtime repository](https://github.com/apache/openwhisk-runtime-php).

To use a PHP runtime, specify the `wsk` CLI parameter `--kind` when creating or
updating an action. The available PHP kinds are:

* PHP 8.0: `--kind php:8.0`
* PHP 7.4: `--kind php:7.4`
* PHP 7.3: `--kind php:7.3`

An action is simply a top-level PHP function. For example, create a file called `hello.php`
with the following source code:

```php
<?php
function main(array $args) : array
{
    $name = $args["name"] ?? "stranger";
    $greeting = "Hello $name!";
    echo $greeting;
    return ["greeting" => $greeting];
}
```

PHP actions always consume an associative array and return an associative array.

The entry method for the action is `main` by default but may be specified explicitly when creating
the action with the `wsk` CLI using `--main`, as with any other action type.

You can create an OpenWhisk action called `helloPHP` from this function as follows:

```
hypi wsk action create helloPHP hello.php
```

The CLI automatically infers the type of the action from the source file extension.
For `.php` source files, the action runs using a PHP 7.4 runtime.

Action invocation is the same for PHP actions as it is for [any other action](openwhisk-actions.md#the-basics).
```
hypi wsk action invoke --result helloPHP --param name World
```
```json
{
  "greeting": "Hello World!"
}
```
Find out more about parameters in the [Working with parameters](openwhisk-parameters.md) section.

### Packaging PHP actions in zip files

You can package a PHP action along with other files and dependent packages in a zip file.
The filename of the source file containing the entry point (e.g., `main`) must be `index.php`.
For example, to create an action that includes a second file called `helper.php`,
first create an archive containing your source files:

```bash
zip -r helloPHP.zip index.php helper.php
```

and then create the action:

```bash
hypi wsk action create helloPHP --kind php:7.4 helloPHP.zip
```

### Including Composer dependencies

If your PHP action requires [Composer](https://getcomposer.org) dependencies, you can install them as usual using `composer require` which will create a `vendor` directory.

Add this directory to your action's zip file and create the action:

```bash
zip -r helloPHP.zip index.php vendor
hypi wsk action create helloPHP --kind php:7.4 helloPHP.zip
```

The PHP runtime will automatically include Composer's autoloader for you, so you can immediately
use the dependencies in your action code. Note that if you don't include your own `vendor` folder,
then the runtime will include one for you with the following Composer packages:

- guzzlehttp/guzzle
- ramsey/uuid

The specific versions of these packages depends on the PHP runtime in use and is listed in the
CHANGELOG files in the [PHP runtime repository](https://github.com/apache/openwhisk-runtime-php).

### Built-in PHP extensions

The following PHP extensions are available in addition to the standard ones:

- bcmath
- curl
- gd
- intl
- mbstring
- mongodb
- mysqli
- pdo_mysql
- pdo_pgsql
- pdo_sqlite
- soap
- zip

:::note

Large portions of this page is copied from the [Apache OpenWhisk documentation](https://github.com/apache/openwhisk/tree/master/docs) on April 23rd 2021 - where there have been customisations to match Hypi's deployment this has been noted. Apache OpenWhisk and the Apache name are the property of the Apache Foundation and licensed under the [Apache V2 license](https://github.com/apache/openwhisk/blob/master/LICENSE.txt) .

:::