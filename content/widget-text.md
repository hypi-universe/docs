---
id: widget-text
title: Text Widget
sidebar_label: Text 
slug: /widget-text
---

![Text-Widget](/img/Widget-Text-1.png)

##  Overview

Text is an important basic widget that is visible and common. It can be a child widget of other visible widgets like Button, Circle Avatar, etc. Properties of the Text content can be changed to provide a different visual appearance. Customize Text Properties like Value, Font, Weight, Size, Alignment, Color, etc to design the visual appearance.

## Use Cases

* Display the text content in your application with this widget.
* Text can be displayed in single line or multiple lines
* The text content within this widget is a static text that can only be changed at runtime using the Logic bindings. For example, at the click of a Button widget, the Text changes from `Yes` to `No`.
* The user cannot edit the Text from this widget. To allow users to edit the text, use the [Text Field](#) widget.

## Properties

* Set the **Value** of the Text content.  The below image displays the Text widget value as `Hello Tink`.

![Image not found: /img/Widget-Text-2.png](/img/Widget-Text-2.png "Image not found: /img/Widget-Text-2.png")

* Set the Font of the text by choosing an option from the menu. The menu appears after clicking on **Font** from the Typography section. Fonts available in Google Fonts Library are enlisted in the Font Menu.
* Set the **Font size** by providing values in pixels.
* Change the **Thickness** of the Text using **Weight** option.

![Text-Widget](/img/Widget-Text-3.png)

* Change the **Letter spacing** to create space between two letters. Change the **Word Spacing** to create space between two words. Green space indicates Letter Spacing and Blue Space indicates word spacing in the below image.

![Text-Widget](/img/Widget-Text-4.png)

* Set the **Height of the Text Widget** by providing values in pixels.
* Set the **Text Alignment** - `Left`, `Right`, `Center`, `Justify`.
* Set the **Text Color** and **Background color** of the Text.
* **Decorate** the text with the `Underline`, `Overline`, or `Strikethrough` line. The line's `color` can be changed. The `Thickness` of the line can be changed by providing values in the edit box. Setting the style to `None` reverts the changes.
* Set the **text alignment - Start, Centre, End, Justify, Left, or Right.**
* Set the **Text direction as Left to Right or Right to Left.**

![Text-Widget](/img/Widget-Text-5.png)

* Handle a visual overflow of text by clipping or fading the overflowing text, adding an ellipsis (…) at the end, or making overflowing text visible outside the widget area.
* Softwrap checks whether the text should break at soft line breaks.
* **The Text Scale Factor** defines the number of font pixels for each logical pixel. If the factor is 1.5, the text font would be 50% bigger than the specified font size.
* **MaxLines** sets the maximum number of lines for the text content. It wraps the text if necessary.
