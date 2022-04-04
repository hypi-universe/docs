---
id: widget-advance
title: Advance
sidebar_label: Advance
slug: /widget-advance
---

##  App Bar

* Consists of a toolbar and other widgets like Icon, Title, etc.
* It has a single row with a fixed height.
* Create an App Bar in a Tink Component. App Bar size can be set by changing the size of the component.
* Rename the component as `App Bar` or any other suitable name.
* The App Bar should be the base layout widget of the Component. 
* It is necessary to use App Bar in the form of a component. You cannot drag and drop the App Bar to the Screen.
* You may add a leading icon to the App Bar and choose the icons from Tink's icon collection.
* You may add Centre Title and provide the title by choosing the Text from the Navigator.
* Enable Appbar from the [Tink Screen Properties](designer-screens.md#3-how-to-change-screen-properties). Choose created `App Bar` from the drop down menu. App Bar gets automatically added to the topmost part of the screen.

## Bottom App Bar

* Add Bottom App Bar at the bottom of the screen. 
* Similar to App Bar, it also consists of a toolbar and other widgets like Icon, Title, etc.
* Drag and drop the Bottom App Bar widget to the screen. Customize the appearance by changing its properties.
* You may also add Bottom App Bar in the form of a component.
* Enable `Bottom Navbar` from the [Tink Screen Properties](designer-screens.md#3-how-to-change-screen-properties). Choose a component as a bottom bar from the drop down menu. Bottom App Bar gets automatically added to the bottom of the screen.

##  Circular Progress Indicator

* Spins to indicate that the application is busy.
* Progress is circular and indeterminate. It means the progress is being made without any indicator of how much progress remains.

##  Linear Progress Indicator

* Indicates that the application is busy by showing progress along the line.
* Progess is linear and inderterminate. It means the progress is being made without any indicator of how much progress remains.

## Action Chip

* Triggers an action related to primary content or shows progress and confirmation.
* Display after primary content (below a card or at the bottom of the screen)
* Holds an Avatar and Text. Showing Avatar on the front is optional.
* Change the Text of the child widgets from the Properties panel.
* Handle OnPressed event from the Logic section to implement an action.
