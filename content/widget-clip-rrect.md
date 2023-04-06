---
id: widget-clip-rrect
title: Clip RRect
sidebar_label: Clip RRect 
slug: /widget-clip-rrect
---

![ClipRRect-Widget](/img/Widget-ClipRRect-1.png)

##  Overview

A Clip RRect is a widget that clips its child using a rounded rectangle. RRect simply represents a Rounded Rectangle. 

##  Use Cases

* Widget Clip RRect is used to provide rounded corners to the basic widgets or buttons.
* You can provide rounded borders to the containers using Clip RRect.

##  Properties

* Any child widget can be dragged to the right-hand side properties panel. The child widget gets rounded corners by providing Border values.
* Set `Bottom Left`, `Bottom Right`, `Top Left`, and `Top Right` radius values. `X` values indicate horizontal axis values while `Y` values indicate vertical axis values. Just play around with the values to check how it works.
* If the content overflows the widget boundary, then there are the following ways to clip it.

1. Anti Alias - Clips the edges to have a smoother look. 
2. Anti Alias with Save Layer - Clips with anti-aliasing and saves the Layer immediately following the clip. This process is slower than Anti Aliasing and is rarely used.
3. Hard Edge - This is the fastest clipping with low fidelity. No anti-aliasing, or smoothening of edges applied.
