---
id: widget-clip-oval
title: Clip Oval
sidebar_label: Clip Oval 
slug: /widget-clip-oval
---

![CO-Widget](/img/Widget-ClipOval-1.png)

##  Overview

A Clip Oval is a widget that clips its child using an oval. It inscribes an axis-aligned oval into its dimensions. It also prevents its child from painting outside that oval.

##  Use Cases

* Clip Oval is used to provide an oval shape to the basic widgets or buttons.

##  Properties

* Any child widget can be dragged to the right-hand side properties panel. The child widget gets an oval shape after dragging.
* If the content overflows the widget boundary, then there are the following ways to clip it.

1. Anti Alias - Clips the edges to have a smoother look. 
2. Anti Alias with Save Layer - Clips with anti-aliasing and saves the Layer immediately following the clip. This process is slower than Anti Aliasing and is rarely used.
3. Hard Edge - This is the fastest clipping with low fidelity. No anti-aliasing, or smoothening of edges applied.
