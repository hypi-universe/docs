---
id: widget-card
title: Card Widget
sidebar_label: Card 
slug: /widget-card
---

![Text-Card](/img/Widget-Card-1.png)

## Overview

A Card is a layout panel with slightly rounded corners and an elevation shadow. It is used to represent some related information, for example, an album, a geographical location, a meal, contact details, etc. You can design a Card by placing required child widgets into it. E.g. A Row with Text and Icon widgets.

## Use Cases

* Important information can be displayed on the Card and the User may or may not take action on it.
* Card's elevation, border, and background color can be adjusted to provide the desired appearance.

##  Properties

![Text-Card](/img/Widget-Card-2.png)

* Elevation gives raised appearance to the widget. Provide Elevation for the Card in Pixels.

Following are the border properties that can be set.

* Set the `Width` of the border with the `Stroke Align` value. StrokeAlign value ranges from -1.0 to 1.0. A value of -1.0 indicates a border inside the edge while 1.0 indicates an outside border. A value of 0 sets the center of the border on the edge of the widget.
* You may choose to make the border width `solid` or apply a `none` value.
* You can make corners of the border rounded. Set `Bottom Left`, `Bottom Right`, `Top Left`, and `Top Right` radius values. `X` values indicate horizontal axis values while `Y` values indicate vertical axis values. Just play around with the values to check how it works.

![Text-Card](/img/Widget-Card-3.png)

* Color sets the background of the Card. 
* Shadow of the Card gets shadow color.
* When the elevation is greater than zero, then the Card surface gets a tint to look like it is lifting off the rest of the screen. This[ tint color ](https://m3.material.io/styles/color/the-color-system/color-roles#8d13949e-aafc-47bc-81e1-a4daf8cba548)gets applied on top of the normal color. You can choose your own [Surface Tint](https://api.flutter.dev/flutter/material/Material/surfaceTintColor.html) color.
* Set `Border on Foreground` to true, if you need to show a border around the Card.
* If the content overflows the widget boundary, then there are following ways to clip it.

1. Anti Alias - It clips the edges to have a smoother look. 
2. Anti Alias with Save Layer - It clips with anti-aliasing and saves the Layer immediately following the clip. This process is slower than Anti Aliasing and is rarely used.
3. Hard Edge - This is the fastest clipping with low fidelity. No anti-aliasing, or smoothening of edges applied.

* If this widget represents a single semantic container, set `Semantic Container` to true. If `false`, it is a collection of individual semantic nodes.



* Provide `Margin` values to create empty space around the Card. Margin can be provided on **all sides or top, left, bottom, and right** edges.