---
id: overview
title: Hypi Overview
sidebar_label: Hypi Overview
slug: /overview
---

Certain concepts are the backbone of Hypi. It is better to know them. Let's take an overview of these concepts.

## App

Hypi `App` is the building block that you will deploy in your application. It covers all the functionalities you want to carry out using Hypi. Hence, the concept of `App` is the heart of Hypi.

The App encapsulates a collection of data structures and serverless functions. You may also add other resources that your app may need to serve its purpose. It will have data models written in `GraphQL`. Serverless functions may be written in `JavaScript`, `Swift`, `Go`, `PHP`, `Python`, `Ruby`, `Rust`, `.NET`, `Docker`, `Java (Scala, Kotlin, Groovy, and other JVM languages)`. Hypi App is compatible with most programming languages.

An app is a way to implement group-related behavior and add resources. It is quite similar to a micro-service that handles its own data and functionalities. You may have more than one App in your product to implement different modules.

[Create an App](ui-create-app.md)

Let's look deep inside the Hypi 'App'. It consists of the below components.

+ [Release](#release)

+ [Schema](#schema)

+ [Dependencies](#dependencies)

+ [Environment Settings](#environment-settings)

+ [Instance](#instance)

***

## Release

A Release represents a version of your app. You may create independent releases for different stages of the Software Development Life Cycle.

Let’s say you have releases `alpha`, `rc-1`, `prod-1`. The `alpha` release is for development, `rc-1` for release candidate, and `prod-1` for production release. An App will have different releases under its belt.

[Create a Release](ui-create-release.md)

***

## Schema

Schema is the way of defining a data model using Graph QL. It is linked to a particular Release. You need to identify the structured data needed to build the application. Generate tables/objects to define data models and add them to the schema.

Have a robust schema that caters to the functionalities of the backend services of your App. Everything about your app's APIs is controlled with the schema.

[https://blog.logrocket.com/simplifying-the-graphql-data-model/](https://blog.logrocket.com/simplifying-the-graphql-data-model/)

[Model a Schema](ui-create-table-vb.md)

***

## Dependencies

A Hypi App may have a functional dependency on one or more apps. Borrow the functionalities from other apps using the Dependencies feature. When you add an app as a dependency, your Hypi app will inherit its behavior.

Hypi promotes the `DRY` (Don’t Repeat Yourself) principle. Do we like to write the same code again and again? So, build small reusable apps that have dependencies on each other.

Imagine creating an app like Twitter. You could break this into multiple smaller apps, e.g. one for timeline, one for searches, one for media lookup (where the image/video of a link is fetched and embedded in a Tweet). This way, we can identify small modular parts.

After identifying modular parts, it is up to you how to utilize them. Hypi lets you configure the dependency and avoids the repetition of software patterns.

[Add Dependencies](ui-add-dependencies.md)

***

## Environment Settings

Environment Settings let you define variables in your system that describe the environment. These are mostly key-value pairs to define configuration options for the App. Many applications require settings at run time which change depending on some criteria specific to the app or its users/environment. Environment Variables let you configure these settings.

Apart from built-in variables, Hypi allows you to add variables for different environments. You may have one variable set to one value for the development machine and another value set for the production environment.

Within each release, you can define one or more variables and later populate values for those variables for each instance that you create. These variables are then accessible at runtime.

| **Environment Variable** | **Description**                                |
|--------------------------|------------------------------------------------|
| DB\_USER\_NAME           | User Name for logging in to different machines |
| DB_PWD                   | Password for the machine                       |

[https://www.ge.com/digital/documentation/historian/version23/r\_public\_rest\_apis\_env_variables.html](https://www.ge.com/digital/documentation/historian/version23/r_public_rest_apis_env_variables.html)

[Add Environment Settings](ui-add-environment-var.md)

***

## Instance

An instance is an isolated copy of your app. Isolated copy means data created in one instance is not accessible by default from another instance. Only someone with permission can grant access between instances. Check here about the [permissions](authorisation.md).

Data stored in the database at a particular time is called an instance of a database. Think of an app as a template and an instance as a deployed version of that template. A release may have one or more instances.

Every instance gets a domain. Hypi generates one by default. But, you are free to create a new domain, e.g. [_abc.apps.hypi.app_](#). A domain has a unique set of values attributed to various data fields.

Check more about [Domains](apisetup.md) provided by Hypi.

[Add an Instance](ui-create-instance.md)
