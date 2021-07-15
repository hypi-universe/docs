---
id: react-todo-app
title: A React ToDo App using low code API’s of Hypi
sidebar_label: ReactJS
slug: /react-todo-app
---

Hypi’s low code APIs can be used to develop various kinds of data-driven applications.

Here, let’s look at `React ToDo app` developed using low code APIs of Hypi. The ToDo App’s front end provides the below functions:

+ [Create Account](#create-account)
+ [Log in to Account](#log-in-to-account)
+ [Add Tasks](#add-task-details)
+ [Add task details like Person responsible to do the task, Status of the task, etc.](#add-task-details)
+ [Retrieve the todo list](#retrieve-the-todo-list)
+ [Edit/ Delete task details](#edit/delte-task-details)

### API Set up

Hypi’s command-line interface facilitates using Hypi APIs with the client application. Check this [Hypi CLI guide](hypi-cli-intro.md) on how to synchronize Hypi APIs with the client application.

### Create Account

To start using ToDo App, you need to create an Account with Hypi. Provide username, password, and email id to create an account. Authentication takes place using Hypi’s [createAccount](authentication.md#createaccount) mutation.

### Log in to Account

After creating the account with Hypi, you can login to ToDo App. Login into the Hypi account using saved credentials. Hypi’s [loginByEmail](authentication.md#loginbyemail) function is used to login into the account and start the session.

### Add Task details

Add task details like `task title`, `person`, `status` and save the data on Hypi’s low code backend. The details are stored in [GraphQL data type](gql-schema-types.md#type-language) - ToDos.
```
type  Todos {
 title: String
 person: String
 date: DateTime
 status: String
}
```
[upsert](createdata.md) mutation is used to create the data.

### Retrieve the ToDo list

The list of ToDo tasks gets displayed on the front end. Hypi’s [find](readdata.md#find) function is used to retrieve the entered data from ToDos objects.

### Edit/Delete task details

You may edit a task to update the status or other details. [Upsert](createdata.md) mutation is used to edit the saved ToDo data.

You may delete a task as well. The task gets deleted using the [delete](deletedata.md#delete) function of Hypi.

#### Important files

**Graphql/queries.js** : Consists of graphql queries and mutation

**Views/ AddToDOForm.js, Dashboard.js, Login.js, SignUp.js** : Consist of implementation of important functions discussed above.

The full code of React ToDo is available on Github. The live application is embedded here. You can fork and use it as a starting point.


<iframe src="https://codesandbox.io/embed/hypi-lowcode-todo-app-q6mjs?fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style={{width:'100%', height: '500px', border:'0', borderRadius: '4px', overflow:'hidden'}}
     title="Hypi lowcode todo app"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>


[https://github.com/hypi-universe/example-apps/tree/main/reactjs/todo/v1](https://github.com/hypi-universe/example-apps/tree/main/reactjs/todo/v1)
