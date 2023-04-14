---
id: widget-scaffold
title: Scaffold
sidebar_label: Scaffold
slug: /widget-scaffold
---

![Scaffold](/img/Widget-Scaffold-1.png)

`Scaffold` provides a basic layout structure for the screens. It is the foundation of every screen. When you add a new screen, Scaffold widgets gets automatically added. It occupies the entire space on the screen. It has multiple places where you can place widgets.  It may consist of an App Bar, Drawer, Body, Bottom Navigation Bar, Floating Action Button, etc.

* The `body` is the primary content of the Scaffold where you normally put most widgets. It is not a list to accommodate multiple widgets. Instead, you must put a single widget like Column, which itself then accepts multiple widgets.

* The `appBar` is a horizontal bar placed at the top of many apps.

* The `Drawer` is where you often see the three little lines on the top left corner of an app. When you click it, it then shows a menu that appears over the app. Thus Drawer swipes from left to right.

* Some apps have the `Floating action button` e.g. a plus button at the bottom center or bottom right of the screen. It always floats on top of everything.

* The `Bottom Navigation Bar` is like a menu at the bottom of the screen with destination widgets. We can add Text, and multiple icons in the bar.

* The `Persistent Footer Buttons` are displayed at the bottom of the scaffold. They are placed just above the Bottom Navigation Bar but below the body.

###  Properties

* The `persistent footer alignment` property aligns the persistent footer buttons.`start` parameter is the distance in the horizontal direction and the `y` parameter is the distance in the vertical direction. The Alignment Position can be **Bottom Center, Bottom Start, Bottom End, Center, Center Start, Center End, Top Center, Top Start, Top End**, etc.
* `Drawer enable open drag gesture` determines if the drawer can be opened with a drag gesture on mobile. On desktops, the drawers are not draggable. By default, the value is true.
* `Drawer Scrim color` is the color to use for the scrim that obscures primary content while a drawer is open.
* Drag the Widgets from the widgets panel to the `End` section or `Drawer` section to create the Drawer menu.
* Select the `Background` color and `Drawer color`.
* Drag the App Bar widget to the `App` section to create App Bar.
* Set `Restoration ID` to save and restore the state of the Scaffold.
* Check `Drag Start Behaviour` [here](https://api.flutter.dev/flutter/material/Scaffold/drawerDragStartBehavior.html).
* Drag the Bottom Navigation Bar widget or any other widget to the `Bottom` section to create Bottom Navigation Bar.
* Drag any Layout widget that accepts multiple widgets to the `Body` section.
* Drag the Action Chip button to the `Floating` section to create a Floating action button.
* Select the `Floating Action Button Location` from the drop-down.
* Drag the Action Chip button to the `Persistent` section to create a Persistent Footer button.
* Set `Extend Body` to true or false. If it is true and the Persistent Footer button or Bottom Navigation Bar is displayed, then the body extends to the bottom of the scaffold. Otherwise, it extends only to the top of the Persistent Footer button or Bottom Navigation Bar.
* Set `Primary` to true if the scaffold is being displayed at the top of the screen.