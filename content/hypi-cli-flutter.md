---
id: hypi-cli-flutter
title: Use Hypi in a Flutter Project
sidebar_label: Flutter
slug: /hypi-cli-flutter
---

Flutter is Google’s UI toolkit for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase. In this guide, we will showcase how to import the Hypi package within the Flutter project using Hypi CLI. After the import, you may use Hypi functionalities to build Flutter Applications.

**Prerequisite**: Knowledge of application development using Flutter. Installed flutter SDK on the system.

Follow the below steps to import the Hypi package.

### Login

Login to your Hypi account using [hypi login](hypi-cli-intro.md#hypi-login) command.

### Hypi Init

Use the `hypi init` command to initialize a new hypi App and Instance in your flutter project folder.
```
    USAGE
      $ hypi init [WEBSITE] [NAME] [LABEL] [DOMAIN]
    
    OPTIONS
      -h, --help           show CLI help
      -i, --have_instance
    
    EXAMPLES
      $ hypi init -i
      $ hypi init --have_instance
      $ hypi init
```
Go to your flutter project folder on the command line and run `hypi init`
```
hypi init
This command will walk you through creating the app.yaml and instance.yaml files.
? Do you have a Hypi instance created at https://hypi.app that you’d like to use? No
? App name? FlutterHypi
? App label? FlutterHypi
? Website? https://hypi.app/apps
? Domain(Optional)? flutterHypi.apps.hypi.app
Init done successfully, Now write your schema then run the hypi sync command to generate your app's API
```
This creates a  `.hypi` folder in your Flutter project folder. Within `.hypi`, three files are created. `app.yaml`, `instance.yaml` and `schema.graphql`. The files app.yaml and instance.yaml has Hypi `App and Instance` details. 

:::info 

You should write your schema inside `schema.graphql` file.

:::

```
app.yaml
==============================
website: https://hypi.app/apps
name: FlutterHypi
label: FlutterHypi
releases:
  - name: latest
schema:
types: schema.graphql
status: PUBLISHED
notes: latest version
hypi:
id: 01F4EYDEMCS5CKBHWBM0SFJ7DH
hypi:
id: 01F4EYDEM7VJ6WZK9BQFFAQ0G5
```
```
instance.yaml
=================================
domain: flutterHypi.apps.hypi.app
release:
name: latest
hypi:
id: 01F4EYDEMCS5CKBHWBM0SFJ7DH
hypi:
id: 01F4EYDHHCFV05BZZF6N7ZEG35
```

If you want to use an existing domain on the Hypi website instead of creating a new one, you may provide that domain that as well.
```
hypi init
```
```
This command will walk you through creating app.yaml and instance.yaml files.
? Do you have a Hypi instance created at https://hypi.app that you’d like to use? Yes
? Please enter a valid domain freehand.apps.hypi.app
Init done successfully, Now write your schema then run the hypi sync command to generate your app's API
```
In this case, the existing schema will get imported. You may edit the schema in the `schema.graphql`

### Hypi Sync

You need to generate schema dart files to use Hypi APIs within the flutter project. Use the `hypi sync flutter` command for that.
```
    USAGE
      $ hypi sync flutter
    
    OPTIONS
      -h, --help  show CLI help
    
    EXAMPLE
      $ hypi sync
```
For syncing, make sure that the following dependencies exist inside your pubspec.yaml in your flutter project.
```
dependencies:

 artemis: ">=6.0.0 <7.0.0"
 json_annotation: ^ 3.1.0
 equatable: ^ 1.2.5
 meta: ">=1.0.0 <2.0.0"
 gql: ">=0.12.3 <1.0.0"

dev_dependencies:

 artemis: ">=6.0.0 <7.0.0"
 build_runner: ^ 1.10.4
 json_serializable: ^ 3.5.0
```
Run `flutter pub get` command to get the dependencies you have added. If there are duplicate entries for any parameters, comment out the previous entries.

Also check if `build.yaml` file exists. If not, create one with the following content.
```
targets:
  $default:
    sources:
      - lib/**
      - graphql/**
      - .hypi/generated-schema.graphql
      - generated-schema.graphql
    builders:
      artemis:
        options:
          schema_mapping:
            - schema: .hypi/generated-schema.graphql
              output: lib/models/graphql/graphql_api.dart
              queries_glob: graphql/*.graphql
              naming_scheme: pathedWithFields
          custom_parser_import: 'package:graphbrainz_example/coercers.dart'
          scalar_mapping:
              - graphql_type: DateTime
                dart_type: DateTime
              - graphql_type: Json
                dart_type: Set
              - graphql_type: Long
                dart_type: int
              - graphql_type: Any
                dart_type: String
```
Now run `hypi sync flutter` to generate dart files.
```
hypi sync flutter
```
```
App created with id : 01F4EYDEM7VJ6WZK9BQFFAQ0G5
Instance created with id : 01F4EYDHHCFV05BZZF6N7ZEG35
updateAppYamlFile done
updateInstanceYamlFile done
Introspection done
Running flutter pub run build_runner build --delete-conflicting-outputs
Program output: [INFO] Generating build script...
[INFO] Generating build script completed, took 545ms

[INFO] Initializing inputs
[INFO] Reading cached asset graph...
[INFO] Reading cached asset graph completed, took 86ms

[INFO] Checking for updates since last build...
[INFO] Checking for updates since last build completed, took 4.0s

[INFO] Running build...
[INFO] 12.6s elapsed, 0/1 actions completed.
[INFO] 13.7s elapsed, 1/1 actions completed.
[INFO] Running build completed, took 14.8s

[INFO] Caching finalized dependency graph...
[INFO] Caching finalized dependency graph completed, took 971ms

[INFO] Succeeded after 15.8s with 2 outputs (1 actions)

Sync Process... done

```
After syncing, `dart` files get created in the `\lib\models\graphql` folder. Also, `generated-schema.graphql` file gets generated in the `.hypi` folder that has hypi schema.

Now you are ready to update your dart files and create a flutter application using Hypi!
