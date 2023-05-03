---
id: logic-action
title: Action Block
sidebar_label: Action Block
slug: /logic-action
---

An Event may have an Action associated with it e.g. opening a dialog or a screen, closing a popover, etc. Tink Logic provides Action blocks to connect different Screens, Dialogs, Widgets, etc. Here is a list of Action Blocks.

* `Go To Screen` block opens up another screen. Select the Screen to be opened from the drop-down. This helps to navigate from the current screen to the next.

![Logic ACtion](/img/Logic-go-to-screen.png)

* Below Action block `shows component, widget, or screen in a dialog`.

![Logic ACtion](/img/Logic-show-component-in-dialog.png)

* `Close Popover` removes the topmost dialog from the navigator. If multiple dialogs are opened, the top one gets closed and other dialogs are visible.

![Logic ACtion](/img/Logic-close-popover.png)

* `Show Toast` displays a message as a toast at the bottom of the screen. Add a constant block inside it and add a message string to it. You can also use the Get block inside Show Toast to retrieve the variable value and display the value.

![Logic ACtion](/img/Logic-show-toast.png)

* `Show Widget or Component in a Bottom Sheet`. Select the component or widget from the dropdown menu.

![Logic ACtion](/img/Logic-show-component-in-bs.png)

