---
id: widget-expand-icon
title: Expand Icon
sidebar_label: Expand Icon
slug: /widget-expand-icon
---


![Widget Expand Icon](/img/Widget-Expand-Icon-1.png)

## Overview

An Expand Icon widget represents a rotating expand/collapse button. With an OnPressed event, the icon rotates 180 degrees. It reverts the animation on a second event. Expand Icon uses the underlying icon : [Icons.expand_more](https://api.flutter.dev/flutter/material/Icons/expand_more-constant.html).

## Use Cases

For a dropdown menu, the expand icon state changes between expanded and collapsed with an OnPressed event.

##  Properties

![Widget Expand Icon](/img/Widget-Expand-Icon-2.png)

* Provide `Padding` values to create space between the expand icon and the parent widget.  Padding can be provided on **all sides or top, left, bottom, and right** edges.
* Set the `Size` of the Icon in pixels. 
* Set `Is Expanded` to true to trigger the icon in an expanded state. Making it false will collapse the Icon.
* Set the default Icon color using the `Color` property.
* When the icon is in an expanded state, it will get the `Expanded color`.
* Disabled icon gets `Disabled color`.