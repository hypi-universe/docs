---
id: logic-set-variable
title: Set Variable Block
sidebar_label: Set Variable Block
slug: /logic-set-variable
---

You can store or save the data in the [variables](designer-logic.md#variables).  For example, after the click of a Button, set the data variable (widget property) of a Text widget.

* On the Logic Canvas, use Set Variable Block for setting any kind of variable. Click on the Configure button in the top left corner to select the variable to be set.

![Set Variables](/img/Logic-SV-1.png)

* If the Widget Property variable is set, then select the event source or widget by choosing the widget from the right-hand side screen widgets panel.  

* Now, again click on the Configure button in the top left corner to select the widget property vaariable. Choose the data variable from the drop down as a Widget Property variable of Text Widget.

* Then select the value to set the variable. It can be a constant value. So, choose Constant block from the variable section and set the value in the edit box. This way, the data widget property of a Text widget sets to constant String value ‘Tink’

![Set Variables](/img/Logic-SV-2.png)

  Please note the value to be set can be variable. In this case, use the Get Block instead of Constant block to retrieve the value. 