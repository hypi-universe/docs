---
id: widget-properties
title: Common Widget Properties
sidebar_label: Common 
slug: /widget-properties
---

Certain properties are common to the widgets. And most of these properties need no detailed explanation. However, if you find something incomprehensible, you may check this reference.

## Elevation 

* Elevation provides raised appearance to the widget. 
* It is the z-coordinate to place the widget relative to its parent widget. 
* The value should be non-negative. 
* It controls the size of the shadow of the widget and opacity of the elevation overlay color.
* For various states of the widget, different elevation values can be set. For example, disabled, hovered, focused, active, or default state.  
* Hovering state refers to the mouse pointer moving over the widget. A focused state means the keyboard focus or cursor focus has been shifted to the widget. The widget may be active or disabled. For these changing states of the widgets, the elevation value can be different. This provides a dynamic appearance to the widget.

## Padding 

* Padding refers to the amount of space between the content of the widget and the outer border.
* Padding can be provided to the widget on all sides or top, left, bottom, right edges.
* Padding value has to be provided in terms of physical pixels.

## Margin 

* Margin refers to the space around the outer border of the widget.
* Margin can be provided to the widget on all sides or top, left, bottom, right edges.
* Margin value has to be provided in terms of physical pixels.

## Alignment

* Alignment places the widget at a certain position inside the parent widget boundaries.
* Position can be Bottom Center, Bottom Left, Bottom Right, Center, Center Left, Center Right, Top Left, Top Right, Top Center, etc.

## Background Colors

* Sets the background color of the widget. 
* Disabled state color for the background can also be set.

## Foreground Colors

* Sets the foreground color of the widget. 
* Disabled state color for the foreground can also be set.

## Shadow Color

* Sets the color of the shadow.

## Overlay Colors

* For various states of the overlay, different color values can be set. For example, hovered, focused, active, etc.
* For the changing states of the widgets, various overlay colors can be set for differentiation.

## Thickness

* Sets the thickness of the widget. 
* Applicable to widgets like Divider, Vertical Divider, etc.