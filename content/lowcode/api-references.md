---
id: api-references
title: Overview
sidebar_label: Overview
slug: /lowcode/api-references
---

Hypi platform tries to include the features most modern applications need to get going quickly. Some of the features of Hypi include the following. 

1.  [CRUD](#crud)
2.  [App dependencies](#app-dependencies)
3.  [Environment variables](#environment-variables)
4.  [Workflow](#workflow)
5.  [Webhooks](#webhooks)
6.  [Triggers](#triggers)
7.  [User defined functions](#user-defined-functions)
8.  [Serverless functions](#serverless-functions)
9.  [Authorisation and Permission policies](#authorisation-and-permission-policies)
10. [Maths API](#maths-api)
11. [Aggregations API](#aggregations-api)

## CRUD

CRUD is the acronym commonly used for Create, Read, Update and Delete. With Hypi, a CRUD API is automatically generated from your app's schema.  It enables you to start working with your app's APIs quickly.

It goes a little further by including the ability to "trash" data i.e. perform a soft delete. The data will not be returned unless explicitly requested. However, data will not get deleted from the database. You can later untrash or permanently delete the data.

See  [CRUD documentation](crud.md) for more information.

## App dependencies

Hypi tries to promote the DRY principle and general separation of concerns by providing you with the ability to split an app into smaller reusable parts.

In doing so, a single app's schema and other code can be simpler to maintain and manage. This is achieved by providing the ability for any app to be used as a dependency of another app.

Imagine creating an app like Twitter. You could break this into multiple smaller apps. E.g. one for timeline, one for searches, one for media lookup (where the image/video of a link is fetched and embedded in a Tweet).

How you choose to break your app down into modular parts is up to you, Hypi provides the facilities that make it possible and then gets out of the way.

See [App dependencies](ui-add-dependencies.md)

## Environment variables

Many applications require settings at run time which change depending on some criteria specific to the app or its users/environment. When you create a release, Hypi lets you define one or more fields that can be populated when an instance of the app is created. These become accessible at runtime.

See [Environment variables](ui-add-environment-var.md)

## Workflow

Workflow is a way of letting your app orchestrate the execution of multiple functions in response to a single event.

Imagine you were building a web app for a completely automated Pizza service.
When a user places an order for a Pizza, you want to do a few things:

1. Accept the order
2. Start the oven
3. Put the ingredients in the oven
4. Package the prepared pizza
5. Hand the Pizza over to the delivery driver

You could write one function which dispatches all of these one at a time. This case is simple enough.

What happens if you need to parallelise some parts of this?
Or execute some parts synchronously but others asynchronously?

The code will become more and more complex. Instead of taking on this complexity, you could use Hypi's workflows.

A workflow lets you define the order of execution of one or more functions as well as provide facilities for parallel execution of some functions and scheduling some to be executed later. It also lets you conditionally execute any step of the workflow and much more.

See [Workflow](workflow.md)

## Webhooks

Many cloud services provide a mechanism to report the occurrence of certain events in their system.
One of those mechanisms is called a Webhook. This is where the service will let you specify a URL that they will send an HTTP request.

Hypi's Webhooks let you define URLs that can be called by external services.
In response, you can call a user defined function, a serverless function, execute triggers, and more.

See [Webhooks](webhook.md)

## Triggers

Hypi triggers are a mechanism for automatically executing a function before or after another function.
If you're familiar with triggers in databases, it's the same concept.

Let's say you have an app that defines a function called `startProcess` and you depend on another app that has a function called `afterProcessStarted`.

You can use a `@trigger` to execute the `afterProcessStarted` function when `startProcess` is called.

The function used can be defined anywhere, either in the current app or in a dependency.

See [Triggers](triggers.md)

## User defined functions

User defined functions (UDF) are a lightweight way of executing custom code in the Hypi platform.
They are considered lightweight compared to serverless functions because they are evaluated on the same server where the calling code is executed.

Currently, two languages are supported for UDFs:

1. **Groovy** - the entire Groovy syntax is available making it quick, easy, and performant to add custom behaviour to your app.
2. **Velocity** - the velocity template language is used in places where you want to output text which executes some dynamic behaviour. For example, you could use this to customise the body of an email, using velocity templating to substitute the receiver's name from a variable, etc.

See [User Defined Functions](userdefinedfunctions.md)

## Serverless functions

Serverless functions are a modern approach to application development.

Just as all the features in Hypi described so far allow you to get work done without worrying about things like servers or execution environment, so is the case with serverless functions.

Serverless functions in Hypi let you write any custom code you want, wrap it in a Docker container, and then use it in your Hypi app as if it was defined by the Hypi platform itself.

See [Serverless functions](serverless.md)

## Authorisation and Permission policies

Many applications require their users to have certain permissions before they can perform a given action.
Hypi has built-in support for extensive permission and authorisation control.

You can define a Type, Scope, or Resource-based permission that uses different autorisation policies to control who can perform an action and when.

See [Authorisation](authorisation.md)

## Maths API

In many database systems, it is possible to ask the system to perform some basic mathemetical operations on an existing field/column. This is also possible with Hypi by using the maths API.

Maths APIs exist because in a high throughput system getting a value, performing math operations on the client, and then updating the value on the server can be error-prone.

What happens if two requests update the value having performed their own math operations client-side?

Hypi lets you avoid this conflict by providing an explicit API for executing mathematical operations on numeric fields.

See [Maths API](mathsapi.md)

## Aggregations API

It's often the case that you may want to count or group data in your app. You may want to ask things like, "How many of these things exist?".

Use cases for this:

* How many users do i have in my app?
* How many users exist in each department?
* How many users registered in the last 30 days?

These are some examples of questions that the aggregations API can be used to answer.

See [Aggregations API](aggregation.md)