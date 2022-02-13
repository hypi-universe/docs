---
id: faq
title: Hypi FAQs
sidebar_label: Hypi FAQs
slug: /lowcode/faq
---

##  Q. What is Hypi?

Hypi is an application developer community and marketplace centred around its low-code, serverless development platform which enables users to build and share vastly scalable, low-risk data driven-applications.

As a development platform Hypi helps organisations/developers save time in developing new cloud software or acting as a bridge between old or external services.

Developers who take part in the Hypi marketplace have the potential to earn huge profit margins by being in the Hypi ecosystem.

It is faster to develop apps with Hypi because of the “instance CRUD” service we offer that enables a developer to generate a cloud backend at the click of a button.
It is simpler to work with, Hypi brings together all the features needed in a modern data driven application into one easy to use package.

The Hypi market place allows developers to earn revenue and the only cost to the developer is the initial development since Hypi hosts and manages their apps after they’re launched.
The Hypi community makes it easy for businesses to find developers to build cloud software solutions for them

## Q. What types of apps can I build using the features released today? 

Hypi's serverless development platform is capable of developing any CRUD or data driven application. Declare what you want, code if you want. 

The Hypi platform provides storage and distribution for your application. By simply writing a Hypi data model an organisation can instantly get a data driven application that would otherwise have taken weeks or months to build.

Hypi makes it easy for anyone to build applications that are interoperable and easy to scale. GraphQL is paramount to this as Hypi's implementation allows even non-Hypi apps to become interoperable without any modification to the other apps. Hypi can simply sit in front of any existing service that is accessible over a network and start acting as a bridge to the non-hypi apps. 

## Q. What application developer languages are supported in Hypi?

Hypi is language agnostic - hence apps can be coded in the language of your choosing. 

Hypi currently supports data models written in GraphQL and custom serverless functions in, JavaScript, Go, Java, Kotlin, Node.js, PHP, Python, Ruby, Scala & Shell. You could also add your own language with a little more effort than it takes to use those listed here.

## Q. What is GraphQL ? 

From the official homepage "GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.".

Hypi chose GraphQL to take advantage of the flexibility it brings in enabling applications to seamlessly connect to otherwise disparate system. By using a unified language for both data models and querying Hypi's has made it easier than ever to make interoperability an easy task.

## Q. What is a GraphQL Schema? 

A GraphQL schema is a collection of data types that are available (for query, subscription and/or mutation) to a client for operation on an application. GraphQL Schemas stop client applications from needing to know the underlying data source within the app being queried. Schema declarations express the relationships and the shape of the data being returned. Resolvers define where the data comes from. 

A Hypi schema automatically provides resolvers for the instant CRUD functions and enables a developer to define custom resolvers pointing to serverless functions or external services. 

## Q. Do I need to know GraphQL to begin? 

No - although the Hypi platform is built on GraphQL Hypi provides a "core" app which includes most data models a typical app will need. This means you can get started without knowing GraphQL and as your understanding increases, you can add custom data models. It is also possible to find existing Hypi apps that other developers have built and made public, you can then add a dependency on these apps to get more data models without knowing GraphQL.

When you're ready to start using GraphQL can then access the GraphQL schema data model in “Editor” section of your app's dashboard.  

## Q. How is data secured with Hypi? 

Users who create apps register or subscribe to Realms when signing up to Hypi. Permissions and policies can be applied for refined access to a Hypi Realm.

Protection and access controls can be applied to each app's instance to secure on a per app or resource basis, using security controls within Hypi with our Identity and Access Management (IAM) implementation. 

## Q. How are updates handled with the Hypi platform?

Hypi broadcasts real time updates to any connected client. Disconnected clients will receive updates upon reconnection. 

## Q. How can I do complex queries with Hypi? 

Hypi allows you to take full advantage of its platform, your services or external systems such as databases or APIs.

Hypi recommends that you don't think about the query you would like to run but instead about your data model. Focus on designing your GraphQL data model that ideally represents your use case. Once you have this model, Hypi's model annotations can be used to connect the parts of your model to the the system or service where it should resolve your data from. This approach ensures your model fits your use case as best as possible and avoids the need to restructure data after Hypi returns it to your application.

That said, if it is required, Hypi generates an ArcQL parameter field in the CRUD API enabling you to perform per field filters. This means you don't need to write one large complex query but instead perform filtering at the field level making your queries simpler to understand and maintain. In cases where this isn't possible, you can use ArcQL to represent large, complex boolean logic queries.

## Q. Where is Hypi available?

Hypi is globally available. We want developers across the world to be a part of our community centred around unique low-code, serverless development platform which enables users to build and share vastly scalable, low-risk data driven-applications. 

## Q. Can I import existing apps into Hypi? 

Hypi can sit in front of an existing service that is accessible over a network and start acting as a bridge between this and your new app, so that even non-Hypi apps can be integrated and become interoperable with Hypi apps and each other.

Hypi cuts development time by permitting new apps to be built with dependencies inheriting existing app features. 

Alternatively, with Hypi’s sophisticated platform existing apps can be quickly rebuilt in Hypi.

## Q. What does Hypi Offer? 

Users can currently benefit from, 

1. **Security** 

* Realms representing organisations or groups. Only accessible by authorised users. 
* `IaM`, permissions for users and policies for controlling resources. 
* Apps with individual customer deployment, so no two customers will use the same app but employ an individual instance of it. 

 2. **Languages** 
 
* GraphQL an understanding of query language syntax is all you need. 
* Language agnostic platform - use a model, depend on apps, code what you want, publish a release, create an instance. Done!

3. **Serverless**
 
* Low code - depend on other apps to inherit its functions and features. 

4. **Storage** 

* No matter the data volume, variety or velocity, Hypi's built in scalable storage is available to meet your application needs

5. **Hypi NET** 

* A community connecting ideas and developers. Share programming knowledge and find customers. 
* For non- developers Hypi NET provides an opportunity for collaborative working connecting those with development skills to those with a development need.
 
6. **Marketplace**

* Find - what you need may already be out there already. 
* Publish - you built it so let customers find it.
* Collaborate - it’s not readily available so let’s build it together (Hypi NET)