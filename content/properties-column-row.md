---
id: properties-column-row
title: Column/Row Properties
sidebar_label: Column / Row 
slug: /properties-column-row
---

Column and Row both accommodate multiple widgets. Column arranges the child widgets vertically and Row arranges the child widgets horizontally. Positions of the child widgets can be adjusted using the below properties. The same properties apply to Row and Column. 

## Main Axis Size

* This property decides the amount of space to be occupied on the main axis.
* Free space might remain after allocating space to the children. If you set the value to the minimum (**Min**), the amount of free space gets minimized. For the maximum (**Max**) value, the amount of free space gets maximized.

## Main Axis Alignment

Place the children along the main axis of Column/Row using Main Axis Alignment values.

* **Start** => Place the children at the start of the main axis.
* **Center** => Place the children at the Center of the main axis.
* **End** => Place the children at the End of the main axis.
* For the above three values, there will be no free space between the child widgets. The child widgets will be placed next to each other. The next three values adjust the free space between the children.
* **Space Between** => Place the free space evenly between the children. The first and last child gets placed at the start and end of the axis without any space. The space in between gets distributed evenly for the middle widgets.
* **Space Evenly** => Place the free space evenly between the children as well as before and after the first and last child. The amount of space before and after the first and last child (at the start and end of the axis) will be the same as the space between two consecutive widgets.
* **Space Around** => Place the free space evenly between the children as well as half of that space before and after the first and last child. The amount of space before and after the first and last child (at the start and end of the axis) will be half of the space between two consecutive widgets.

##  Cross Axis Alignment

The Cross axis is the perpendicular axis to the main axis. For the Column, the cross-axis is horizontal and for the row, the cross axis is vertical.

Cross axis alignment positions the child widgets along the cross axis as per the provided values.

* **Center** => Place the children aligning their centers along the middle of the cross axis. This is the default value of cross-axis alignment.
* **End** => Place the children close to the end of the cross axis.
* **Start** => Place the children with their start edge aligned with the start side of the cross axis.
* **Stretch** => The children fills entire cross axis.