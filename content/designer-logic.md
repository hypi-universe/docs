---
id: designer-logic
title: Logic
sidebar_label: Logic
slug: /designer-logic
---

**Logic facilitates the transfer of data from one widget to another. **

Suppose you have a dropdown with a list of items. With the help of Logic, a text on another widget can be changed with the selection of a list item from the dropdown.

There are two steps to bind the two widgets together.
. 
* [**Output and Attribute Binding**](logic-output-binding.md)

Output and Attribute Binding stores the attribute value from a widget in a variable on the occurrence of an event on the same or another widget. 

* [**InputBinding** ](logic-input-binding.md)

Input Binding uses the variable to set the property of a widget.

You can store the data in four types of **variables**.

#### Screen Variable
The scope of this variable is limited to the selected screen only. So, data can be transferred from one widget to another on the same screen. Interchange of data on different screens is not allowed.

#### App Variable
Data can be stored on the application level using the App variable. Hence, data can be transferred from one screen to another. However, when the application gets closed, the value stored in this variable gets deleted as well.

#### Device Variable
The scope of this variable is on the device level. Even if the application gets closed, the value of this variable remains unchanged as the variable data gets saved on the device.

#### Static Variable
Static variables store hardcoded values like API URLs, static text, etc. Most of the time, you know these values at the time of development. They remain immutable and don't change with user interactions.

Static variables store the resource data uploaded through Assets. The system automatically assigns a static variable for each asset.  Assets can be referenced through the static variables.

### 1. **How to add Logic?###**
+ Select `Logic` on the top right corner and the Logic screen appears. You can see the list of variables on the left side.

![Logic](/img/Logic-Overview-1.PNG)

### 2. **How to change Logic Screen size?**
+ You can minimize or maximize the Logic screen.

### 3. **How to add Static Variables?**
+ Click `%` to add static variables. Provide Name, Type, and Default value. Static variables can be of type `text`, `bool`, `int`, and ` double`. 

![Logic](/img/Logic-Overview-2.PNG)

### 4. **How to add Output and Input Bindings?**
+ Click `+` to add variable. Again click `+` to add bindings. Add [Output Binding](logic-output-binding.md) through `Outputs` and [Input Bindings](logic-input-binding.md) through `Listener`. 

![Logic](/img/Logic-Overview-3.PNG)

### 5. **How to change Variable type?**
+ Click Screen State, App State, and Device State icons to change the variable type.

![Logic](/img/Logic-Overview-4.PNG)
