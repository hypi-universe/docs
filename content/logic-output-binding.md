---
id: logic-output-binding
title: Output and Attribute Binding
sidebar_label: Output and Attribute Binding
slug: /logic-output-binding
---

Using Output and Attribute binding, you can save the data in a variable as an output of an event.

There are two components of Output and Attribute binding.

+ **Output Binding:**  Captures the occurrence of an event on the widget. For example, pressing a button, entering value in a text field, changing value from the drop-down, etc.
+ **Attribute Binding:**  Get the value or data from an attribute of a widget and save it to a [Variable](designer-logic.md). The variable can store the data on [Screen](designer-logic.md#screen-variable), [App](designer-logic.md#app-variable), or [Device](designer-logic.md#device-variable) level.

1. **How to add Output Binding?**

+ Click `+` to add variable. Again click `+` to add bindings.

![Logic-Output](/img/Logic-Output-Binding-1.PNG)

+ Select the widget as an event source. When you click on `Select a Widget`, the focus goes to the current screen. Select the widget from the screen. After selection, the name of the widget and probable events associated with that widget get reflected. For example, the `OnPressed` event of a Button. Select the event.

![Logic-Output](/img/Logic-Output-Binding-2.PNG)

2. **How to add Attribute Binding?**

+ Select the widget as an attribute source. When you click on `Select a Widget`, the focus again goes to the current screen.Select the widget from the screen. After selection, you can see the name of the widget and the attributes of that widget. For example, the data attribute of a Text. Select the attribute.

![Logic-Output](/img/Logic-Output-Binding-3.PNG)

3. **How do you check if the Output and Attribute binding has been added succefully?**

+ Check the order of the widgets, events, and attribute in highlighted text. Also, check if the meaning of the text seems logical to you.
+ Before adding attribute binding, the border of the binding dialogue box is red. It turns green after successfully adding the binding. 

![Logic-Output](/img/Logic-Output-Binding-4.PNG)
 
