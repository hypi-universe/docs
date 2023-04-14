---
id: widget-navigation-bar
title: Navigation Bar
sidebar_label: Navigation Bar
slug: /widget-navigation-bar
---

![Navigation Bar](/img/Widget-Navigation-Bar-1.png)

The Navigation bar has the primary destination placed sequentially and it offers a convenient way to switch between these destinations. Navigation Bar is generally located in the \[Scaffold\](#) widget when there are nested navigators or destinations.

###  Primary Destination

A primary destination can be anything the user wants. 

A) Look at the attached Twitter app, the primary destinations are  

1.  Home
2.  Search
3.  Alerts
4.  Messages

![Navigation Bar](/img/Twitter-Destination.png)

B) In the Google Analytics app, they don’t have a navigation bar. Instead, they put their primary destinations in a drawer (the burger icon in the top left).  So, it shows primary destinations when you open the drawer. 

![Navigation Bar](/img/Google-Analystics-Destination.png)

C) In the New York Times news app, they have  

1.  Today
2.  For you
3.  Play
4.  Sections

![Navigation Bar](/img/News-Destination.png)

Destinations are the main areas in the app where the app’s owner wants the user to be able to get to quickly and easily.

Check more about the Navigation [here](https://m2.material.io/design/navigation/understanding-navigation.html).

## Use Cases

Navigation Bar is the easiest way to divide a screen into primary destinations and provide easy navigation by indexing the destinations.

##  Properties

* `Selected Index` determines the currently selected destination. The first destination usually has an index of 0. Then it goes on incrementing with 1 with the next destinations.
* `Elevation` value in pixels provides a raised appearance to the navigation bar.
* You can also set the `Height` and `Color` of the navigation bar.
* To arrange destinations on the Navigation Bar, drag the widgets from the Widgets panel to the `Destination` widgets on the Properties panel.