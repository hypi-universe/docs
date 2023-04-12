---
id: widget-ignore-pointer
title: Ignore Pointer
sidebar_label: Ignore Pointer
slug: /widget-ignore-pointer
---

![Ignore Pointer](/img/Widget-Ignore-Pointer.png)

Ignore Pointer is a widget that remains invisible during hit testing.

For clicks of the mouse button, no event takes place. The widget ignores the movements of the pointer. It is unlike the disabled state, where the child widget may be painted in a different color. During hit testing with a mouse, it still consumes space and paints its child as usual.

## Use Cases

* The Ignore Pointer prevents accidental interactions with the parts of the UI.

##  Properties

* Drag the child widget from the widgets panel to the right-hand side Properties panel.
* Set `Ignoring` to true to make the child widget invisible during hit testing.
