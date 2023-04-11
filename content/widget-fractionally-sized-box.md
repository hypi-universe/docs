---
id: widget-fractionally-sized-box
title: Fractionally Sized Box
sidebar_label: Fractionally Sized Box
slug: /widget-fractionally-sized-box
---


![FSizedBox-Widget](/img/Widget-FSizedBox-1.png)


##  Overview

A fractionally sized box resizes the child widget relative to the dimensions of the screen or the parent widget. For example, keeping the Container width 80% of ( or 0.8 times) the width of the screen.

## Use Cases

* Fractionally Sized Box can be used inside a Row or Column to resize the child widgets. In this case, the width and height of the child widget get adjusted relative to the dimensions of the parent widget, i.e. Row or Column.

##  Properties
 
* `Width Factor` decides the width of the child of the Fractionally Sized Box. The maximum width of the parent of the Fractionally sized box multiplied by this factor gives the width of the child.

* `Height Factor` decides the height of the child of the Fractionally Sized Box. The maximum height of the parent of the Fractionally sized box multiplied by this factor gives the height of the child.

The above settings keep the dimensions of the Container (child widget ) as 80% of the screen width and 70% of the screen height.