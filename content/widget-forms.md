---
id: widget-forms
title: Forms
sidebar_label: Forms
slug: /widget-forms
---

Form widgets are interactive widgets that process user inputs. 

Various events get triggered when the states of the form widgets change. For example, when Switch gets toggled, the OnChanged event gets triggered. And the state of the Switch changes from ON to OFF or vice versa. In the [Logic](designer-logic.md) section, you can select a widget and store the state value in a Variable.

#### Checkbox

* Allows selection from the multiple options
* When a user clicks on the checkbox, the state or value of the checkbox changes. The widget calls the OnChanged event and the checkbox gets rebuilt with the new value.
* `value` of the checkbox can be true or false. true represents selection and false represents unselection.

####  Checkbox List Tile

* This widget has a list with a single row and fixed height.
* It usually holds text, leading icon, and trailing checkbox. 
* Text includes title and subtitle. The leading icon has Circle Avatar and the trailing has a checkbox. You can choose the widgets on the Checkbox List Tile from these. However, the checkbox is not optional.
* Checkbox List Tile can be used within a Card. It helps to change the color of the tile. 
* Multiple Checkbox List tiles can be placed in a List View.

#### Elevated Button

* Elevated button is also the [Basic](widget-basic.md) widget. But most forms have this button to submit user responses.
* Use when other elements on the screen are generally flat. 
* The elevated style of the button captures the user's attention.

#### Icon Button

* This is a button with an icon placed on its front.
* Choose from hundreds of images from Hypi's Tink's icon collection to place on the icon button widget. 
* It is an interactive button and triggers the OnPressed event when the button is clicked.

####  Popup Menu Button

* Displays a menu when pressed.
* After selection of an item from the menu list, the menu disappears.
* OnSelected event gets triggered when a menu item is selected.
* The selected menu item value is the value passed to OnSelected.

####  Radio

* Allows selection from the multiple options. 
* Radio buttons are grouped together.
* When a user clicks on the radio button, the state or value of the radio button changes. The widget calls the OnChanged event and the radio button gets rebuilt with the new value.
* `value` of the radio button can be true or false. `true` represents selection and `false` represents unselection.

####  Radio List Tile

* This widget has a list with a single row and fixed height.
* It usually holds text, leading radio, and trailing icon. 
* Text includes title and subtitle. The trailing icon has Circle Avatar and the leading has a radio. You can choose the widgets on the Radio List Tile from these. However, Radio is not optional.
* Radio List Tile can be used within a Card. It helps to change the color of the tile. 
* Multiple Radio List tiles can be placed in a List View.

####  Slider

* Select from a range of values by moving the slider thumb.
* Set minimum and maximum values in the properties panel.
* When the slider moves, the slider value gets updated continuously.
* When a user clicks on the slider, the state or value of the slider changes. The widget calls the OnChanged event and the slider gets rebuilt with the new value.

####  Range Slider

* Select a range from a range of values by moving the slider thumbs.
* Set minimum and maximum values in the properties panel.
* When the first slider thumb moves, the start value of the range gets updated.
* When the second slider thumb moves, the end value of the range gets updated.
* When a user clicks on the range slider, the state or value of the slider changes. The widget calls the OnChanged event and the range slider gets rebuilt with the new value.

####  Switch

* Toggles the ON/OFF state of a single setting.
* When a user clicks on the toggle, the state or value of the switch changes. The widget calls the OnChanged event and the Switch gets rebuilt with the new value.
* `value` of the switch can be true or false. true represents ON state and false represents OFF state.
* Change the appearance of the Switch by choosing colors for its elements from the properties panel.

####  Text Field

* Enter the text in this widget using hardware or an onscreen keyboard.
* Use to accept and process user inputs.
