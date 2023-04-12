---
id: widget-intrinsic-width
title: Intrinsic Width
sidebar_label: Intrinsic Width
slug: /widget-intrinsic-width
---

![Intrinsic Width](/img/Widget-Intrinsic-Width-1.png)

## Overview

The Intrinsic Width Layout widget sizes its child to the child's maximum intrinsic width. When unlimited width is available (like the Row widget), child widgets like Text can expand infinitely. With Intrinsic width, the child widget sizes itself to a more reasonable width.

##  Use Cases

This widget is helpful if the accessible width is limitless, but you need to stop the child width to its intrinsic width.

## Properties

* The child's width gets snapped to a multiple of the provided value of Step Width.
* The child's height also gets snapped to a multiple of the provided value of Step Height.