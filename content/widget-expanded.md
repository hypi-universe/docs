---
id: widget-expanded
title: Expanded
sidebar_label: Expanded
slug: /widget-expanded
---


![Widget Expanded](/img/Widget-Expanded-1.png)

##  Overview

The Expanded widget expands the child of Row/Column/Flex so that child fills the available place. The child widget expands along the main axis, i.e. horizontally for a Row and Vertically for a Column.

If multiple child widgets are expanded, then space gets divided using their `flex` factor.

##  Properties

* If the `flex` factor is null or zero, the child is inflexible and determines its own size. If the flex is non-zero, the amount of space the children can occupy in the main axis is determined by dividing the free space using the flex factors of the flexible children.

   Let's say there are two expanded widgets in a row with flex factors 2 and 1. The expanded child widget with flex factor 2 gets double the free space as that of the expanded child widget with flex factor 1.
