---
id: widget-grid-paper
title: Grid Paper
sidebar_label: Grid Paper
slug: /widget-grid-paper
---

![Grid Paper Widget](/img/Widget-GridPaper-1.png)

##  Overview

Grid Paper widget draws a rectilinear grid of lines one pixel wide. The Grid's origin is at the top left corner of the child widget. The grid is always drawn on the child widget.

##  Use Cases

* Visualize your layout using Gridlines.
* Draw Grid over other Layout widgets like Stack or Container.

##  Properties

* Set the `Color` of the grid lines.
* An `interval` is the distance between the primary lines in the grid, in logical pixels. Usually given 100 logical pixels.
* A `Division` is the number of major divisions within each primary grid cell.
* A `Sub Division` is the number of minor divisions within each major division including the major division itself.
* `interval` = 100.0, `divisions` = 2, and `subdivisions` = 5 creates a widget that draws a rectilinear grid of 1-pixel-wide lines.