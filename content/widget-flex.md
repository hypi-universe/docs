---
id: widget-flex
title: Flex Widget
sidebar_label: Flex
slug: /widget-flex
---

![Flex-Widget](/img/Widget-Flex-1.png)

## Overview

The Flex accommodates multiple widgets in a horizontal or vertical array. You can add child widgets till they fill available space. You can specify the main axis along which the children are placed. (Vertical or Horizontal)

##  Use Cases

* If you want flexibility of choosing the type of main axis, you can use Flex widget. 
* If you already know that you want to use Horizontal or Vertical alignment, you can use Row or Colum respectively.

##  Properties

* You can change the Vertical and Horizontal positions of child widgets using the properties. Select the direction of axis as horizontal or vertical from the right-hand side Properties panel.

### Main Axis Size

* This property decides the amount of space to be occupied on the main axis.
* Free space might remain after allocating space to the children. If you set the value to the minimum (**Min**), the amount of free space gets minimized. For the maximum (**Max**) value, the amount of free space gets maximized.

### Main Axis Alignment

Place the children along the main axis using Main Axis Alignment values.

* **Start** => Place the children at the start of the main axis.
* **Center** => Place the children at the Center of the main axis.
* **End** => Place the children at the End of the main axis.
* For the above three values, there will be no free space between the child widgets. The child widgets will be placed next to each other. The next three values adjust the free space between the children.
* **Space Between** => Place the free space evenly between the children. The first and last child gets placed at the start and end of the axis without any space. The space in between gets distributed evenly for the middle widgets.
* **Space Evenly** => Place the free space evenly between the children as well as before and after the first and last child. The amount of space before and after the first and last child (at the start and end of the axis) will be the same as the space between two consecutive widgets.
* **Space Around** => Place the free space evenly between the children as well as half of that space before and after the first and last child. The amount of space before and after the first and last child (at the start and end of the axis) will be half of the space between two consecutive widgets.

###  Cross Axis Alignment

The Cross axis is the perpendicular axis to the main axis. 

Cross axis alignment positions the child widgets along the cross axis as per the provided values.

* **Center** => Place the children aligning their centers along the middle of the cross axis. This is the default value of cross-axis alignment.
* **End** => Place the children close to the end of the cross axis.
* **Start** => Place the children with their start edge aligned with the start side of the cross axis.
* **Stretch** => The children fills entire cross axis.

###  Vertical Direction

* Choose Vertical direction as up or down to rearrange the child widgets on the main axis.
