---
id: logic-graphql
title: GraphQL Data Block
sidebar_label: GraphQL Data Block
slug: /logic-graphql
---

Logic Canvas connects the Tink frontend to [Hypi's lowcode backend](lowcode/introduction.md). GraphQL Data blocks do this connection. All the [CRUD APIs](lowcode/crud.md) provided by Hypi's low code backend can be added on the canvas using Data blocks. 

### GraphQL Data Block

Choose an event like Button Click and select suitable queries or mutations like upsert, get, find, delete, and login functions on the GraphQL Data block. So, with the click of a button, the selected query or mutation function will get executed. Please check the lowcode APIs for queries and mutations [here](lowcode/api-references.md). 

![GraphQL Data](/img/Logic-GQL-Data-Block-1.png)

It has a Response, Status Code, and Authorization Token. Add Constant Value blocks and provide variable names to them. Variables store the Response and Status code after execution. It takes an Authorization token as input to execute the request.

Add Object Blocks and Scalar blocks to retrieve specific data from the response.

###  Object Block

GraphQL object has a name and contains fields. Similarly, Object field blocks are given on the Logic Canvas. They have the shape of a `C`. You can choose a field on the object block. It fits inside the GraphQL Data block. It accepts scalar blocks or other object blocks inside it depending on what the selected field type is.

![GraphQL Data](/img/Logic-GQL-Object-Block-2.png)


###  Scalar Block

[Scalar](lowcode/scalars.md) has a data type that does not have any fields of its own. Int, Float, String are some of the scalar types.

When you want to retrieve Scalar values from an object, put a scalar block inside an object or GraphQL data block. The returned values get stored in the Response Variable.  E.g. **username** is a string that is used as a scalar block.

![GraphQL Data](/img/Logic-GQL-Scalar-Block-3.png)

###  GraphQL Data `find` Query

Hypi's low code APIs provide functions to read data from the backend. Here is a sample [find](lowcode/readdata.md#find) query to read data from the Account table. This demonstrates the no-code way to read data from the database. The logic flow follows the lowcode `find` query pattern.

![GraphQL Data](/img/Logic-data-find-query.png)

Here is a brief explanation of the no code logic.

* Used Constant block to store the response in a variable to access and use this data later
* Hardcoded the Authorization token used in the query. But normally this would be taken from a device variable stored at the time of user login.
* Used `*` to get data without any filters
* Can click the + to add other parameters such as a page to paginate through the results e.g. as the user scrolls in a list view
* Selected the fields like `username` and `enabled` in scalar blocks that are needed to display the results in the UI
* Used Object fields `edges` and `nodes` to access all the `Account` data.
* Show Toast displayed the result on the screen by converting the Result variable into String
