---
id: logic-get-variable
title: Get Variable Block
sidebar_label: Get Variable Block
slug: /logic-get-variable
---

You can retrieve the data from the [variables](designer-logic.md#variables) using the `Get Variable` Block. For example, get the `data` variable widget property value from the Text Field widget.

`Get Variable` is a reporter block that returns a value. Value can be of any data type.

* On the Logic Canvas, use the Get Variable Block for retrieving the value of a variable. Click on the Configure button in the top left corner to select the variable.

![Get Variables](/img/Logic-GV-1.png)

* If the Widget Property variable is chosen, then select the widget from the right-hand side screen widgets panel. Click on the question mark to select the widget.

![Get Variables](/img/Logic-GV-2.png)

* Now, again click on the Configure button in the top left corner to select the widget property variable. Choose the `data` variable as a Widget Property variable from the drop down.

![Get Variables](/img/Logic-GV-3.png)

* Get Variable block cannot be placed directly above or below another block. It can only be placed inside a block. Usually, it is placed with a Set Variable block. Drag the Get Variable block inside the Set Variable block.
* Other variable values like device variable, global variable can also be retrieved. Choose the Constant Block and write the variable name whose value needs to be retrieved.