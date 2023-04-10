---
id: widget-dialog
title: Dialog
sidebar_label: Dialog
slug: /widget-dialog
---

![Dialog Widget](/img/Widget-Dialog-1.png)

## Overview

The Dialog widget creates a dialog with a single child widget. Usually, there is no specific purpose for this dialog. It can convey any kind of information or ask a user to take any action.

Any layout like a Column or Row can be a child widget of the Dialog.

## Properties

![Dialog Widget](/img/Widget-Dialog-2.png)

* Inset animation only has an effect on phones like iPhones that have the round curve area at the bottom for the button. If the dialog overlaps with the iPhone button then there is an animation that redraws the bottom of the dialog so that it goes around the curve.
* Set the values of [Inset Animation Duration](https://api.flutter.dev/flutter/cupertino/CupertinoAlertDialog/insetAnimationDuration.html) in Seconds. 
* Set the values of [Inset Animation Curves](https://api.flutter.dev/flutter/animation/Curves-class.html)

![Dialog Widget](/img/Widget-Dialog-3.png)

* `Background` color sets the background of the Dialog. 
* Shadow of the dialog gets a `Shadow` color.
* When the elevation is greater than zero, then the action chip surface gets a tint to look like it is lifting off the rest of the screen. This[ tint color ](https://m3.material.io/styles/color/the-color-system/color-roles#8d13949e-aafc-47bc-81e1-a4daf8cba548)gets applied on top of the normal color. You can choose your own [Surface Tint](https://api.flutter.dev/flutter/material/Material/surfaceTintColor.html) color.
* The `elevation` gives raised appearance to the Dialog. The value has to be given in Pixels. 
* If the content overflows the widget boundary, then there are the following ways to `clip` it.

1. Anti Alias - It clips the edges to have a smoother look. 
2. Anti Alias with Save Layer - It clips with anti-aliasing and saves the Layer immediately following the clip. This process is slower than Anti Aliasing and is rarely used.
3. Hard Edge - This is the fastest clipping with low fidelity. No anti-aliasing, or smoothening of edges applied.

![Dialog Widget](/img/Widget-Dialog-4.png)

* Provide `Inset Padding` values to create space between the screen's edge and the outer border of the Dialog.  Padding can be provided on **all sides or top, left, bottom, and right** edges.
    
    ![Dialog Widget](/img/Widget-Dialog-5.png)
    
   Following are the border properties that can be set.

* Set the `Width` of the border with the `Stroke Align` value. StrokeAlign value ranges from -1.0 to 1.0. A value of -1.0 indicates a border inside the edge while 1.0 indicates an outside border. A value of 0 sets the center of the border on the edge of the widget.
* Set the `Color` of the border.
* You may choose to make the border width `solid` or apply a `none` value.
* You can make corners of the border rounded. Set `Bottom Left`, `Bottom Right`, `Top Left`, and `Top Right` radius values. `X` values indicate horizontal axis values while `Y` values indicate vertical axis values. Just play around with the values to check how it works.


* The Alignment** places the widget at a certain position inside the parent widget boundaries. The Position can be **Bottom Center, Bottom Left, Bottom Right, Center, Center Left, Center Right, Top Left, Top Right, Top Center**, etc. Choose the child widget position inside the dialog appropriately. X and Y coordinates can also be provided to position the child widget.