---
id: designer-logic
title: Logic
sidebar_label: Overview
slug: /designer-logic
---

**Logic facilitates the transfer of data from one widget to another. It also helps to process data and perform logical operations**

Suppose you have a dropdown with a list of items. With the help of Logic, a text on another widget can be changed with the selection of a list item from the dropdown. With Logic, the data can also be stored on Hypi's low code backend. And similarly, data can be retrieved from the backend.

On the Logic Panel of Tink, you can perform Block Based Programming. Placing building blocks on the canvas in a specific order will perform all the logical and data operations. Just drag the blocks over the Logic canvas and place them in order. Select the appropriate variables and widgets to perform logic operations.

###  Variables 

You can store the data in the following  **variables**. The scope of accessibility of different variables differs.

####  Widget Properties

Widget Properties save the values of various widget properties. The current status of widgets decides Widget Properties values. 

#### Local Variable

Local variables are accessible only on the local canvas of the Logic Panel.

#### Screen Variable

The scope of this variable is limited to the selected screen only. So, data can be transferred from one widget to another on the same screen. Interchange of data on different screens is not allowed.

#### Global Variable

Data can be stored on the application level using the App variable. Hence, data can be transferred from one screen to another. However, when the application gets closed, the value stored in this variable gets deleted as well.

#### Device Variable

The scope of this variable is on the device level. Even if the application gets closed, the value of this variable remains unchanged as the variable data gets saved on the device.

####  Stack Variable

Stack stores different variable values one after the other in a stack. 


### 1. **How to add Logic?**

+ Select `Logic` in the top left corner and the Logic screen appears. You can see the list of building blocks on the left side.

![Logic](/img/Logic-Overview-1.PNG)

### 2. **How to change Logic Screen size?**

+ With the scroll of the mouse, you can minimize or maximize the Logic screen.

### 3. **How to choose Block Type?**

+ Click on the Block Type name (Data, Controls, Events, Variables, Actions, Operators) to choose various blocks of a particular block category.

![Logic](/img/Logic-Overview-2.PNG)


