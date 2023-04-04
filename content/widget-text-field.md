---
id: widget-text-field
title: Text Field
sidebar_label: Text Field
slug: /widget-text-field
---

![Text-Field-Widget](/img/Widget-Text-Field-1.png)

##  Overview

Text Field is a basic widget that accepts user inputs. Enter the text in this widget using hardware or an onscreen keyboard. 

##  Use Cases

* TextField accepts and processes user inputs.
* Works as an edit box where the user can enter values for a field and edit the entered text.
* Input fields like username and password are the commonly used TextFields.
* A form may have many user input TextFields.

## Properties

![Text-Field-Widget](/img/Widget-Text-Field-2.png)

### Data

* `Restoration id` saves and restores the current state of TextField. Restoration data is stored in a restoration bucket under a given restoration id as a key.  All information that the application needs to restore is stored in the bucket. Restoration id is a unique String within a given bucket. TextField retrieves the data by using the same Restoration id that is originally used to store the data.

###  Layout

* Text Alignment shows how the text should be aligned horizontally. Probable values are Left, Right, Centre, Justify, Start, or End.
* Choose how to align the Text vertically; starting from the Bottom, Top, or Centre.
* Choose the [Drag Start Behaviour](https://api.flutter.dev/flutter/gestures/DragStartBehavior.html) value; Down or Start.

###  Size

* `Max Length` indicates the maximum number of characters allowed in the Text Field.
* `Cursor Width` decides the thickness of the cursor
* `Cursor Height` decides the height of the cursor

### Typography

![Text-Field-Widget](/img/Widget-Text-Field-3.png)


* Text styling properties like Font, Size, Weight, etc are described [here](widget-text.md).
* `Text Capitalization` configures how the uppercase or lowercase keyboard gets selected. The `None` setting stops Capitalization. `Character` makes each character capital. `Words` make the first character of each word capital. `Sentences` make the first character of each sentence capital.
* `Text Direction` can be `Left to Right` or `Right to Left`.
* `Obscure Text` decides whether to hide the text being edited. Passwords are the common fields for obscure text.
* `Auto Correct` decides whether to enable auto-correction of the text. The default value is `true`
* Setting `Enable Suggestion` to true, shows input suggestions as the user types.
* If `Obscure Text` is true, `Obscuring Character` is used for obscuring text. It must be only a single character. The default character is  U+2022 BULLET (•).
* `Max Lines` indicates the maximum number of lines that can be shown at a time.
* `Min lines` indicates the minimum number of lines to occupy when content has fewer lines.
* Check the `Max Length Enforcemet` values [here](https://api.flutter.dev/flutter/services/MaxLengthEnforcement.html).

### Effects 

#### Decoration

![Text-Field-Widget](/img/Widget-Text-Field-4.png)

* `Label Text` is an optional text that describes the TextField. When TextField is empty and unfocused, the label gets displayed on top of the user input area. When a user starts entering text and Text Field gets focused, the label moves above, either vertically adjacent or to the center of the input area. (Depending upon Floating Lable Alignment)
* `Hint Text` suggests what sort of input gets accepted in the TextField area. When the Text Field gets focus or the Lable text is empty, the Hint Text gets displayed on top of the user input area. (Replacing Label Text)
* `Helper Text` sets the context about the TextField's input value such as how the input text will be used, what are the appropriate input characters, etc. The helper text is shown below the input text area (below the border). If the error text value is also given, the helper text is not displayed.
* `Error text` value gets displayed if an invalid value is entered in the input Text Field. It appears below the text field input area and the border. If non-null, the border color animates to red. If the error text is present, helper text is not shown.
* The direction of the Hint Text is shown using `Hint Text Direction`. It defaults from Right to Left. But it can be set from Left to Right as well.
* Label Text position can be adjusted using the `Floating Label Behaviour` drop down menu. Label text disappears with focus if the `Never Float` option is set. The label will always float at the top of the field above the content if the `Always Float` option is set.  When `Float when the field is focused` option is set, the label will float to the top only when the field is focused or has some text content, otherwise it will appear in the text field in place of the content.
* Floating label can be centrally aligned at the top of the field. Or the start position aligns the label to the rightmost or leftmost position, vertically adjacent to the label.
* TextField uses less vertical space if `isDense` property is true. It becomes part of Dense form.
* `isCollapsed` property sets whether the TextField widget is of the same size as the input area. If set to true, it surrounds Hint Text and Input area with a border. But it does not add padding around them and it can not have Label Text and Error Tex.
* `Left` value indicates offset from the left border
* `Top` value indicates offset from the top border
* `Right` value indicates offset from the right border
* `Bottom` value indicates offset from the bottom border
* `All` value indicates offsets from all the sides
* `Prefix Text` is an optional text prefix to be placed before the input area
* `Suffix Text` is an optional text suffix to be placed after the input area
* `Counter Text` is an optional text to be placed below the line as a character count.
* `enabled` property is true by default.  If set to false, helperText, errorText, and counterText are not    displayed.
* `Filled` property is false by default. If set to true, the widget's input area is filled with a fill color.
* Choose the `Focus color`, `Fill Color`, and `Hover color`. When the Text Field has Focus from the keyboard, it will be filled with Focus color. When Mouse gets hovered over it, then it will get a Hover color. The `Fill` color is the default color of the Text Field.
* Set the `Text style` of different kinds of text in and around the Text field, i.e. Hint Text, Helper Text, Label Text, Error Text, Prefix text, Suffix text, Counter Text, etc. Text styling properties like Font, Size, Weight, etc are described [here](widget-text.md).
* Choose the `prefix icon` from Tink's Icon collection.

####  Border

![Text-Field-Widget](/img/Widget-Text-Field-5.png)

* For different kinds of borders set various border properties. These borders include `Border`, `Enabled Border`, `Disabled Border`, `Focused Border`, `Focused Error Border`, and `Error Border`.

Following are the border properties that can be set.

* Set the `Width` of the border with the `Stroke Align` value. StrokeAlign value ranges from -1.0 to 1.0. A value of -1.0 indicates a border inside the edge while 1.0 indicates an outside border. A value of 0 sets the center of the border on the edge of the widget.
* You may choose to make the border width `solid` or apply a `none` value.
* You can make corners of the border rounded. Set `Bottom Left`, `Bottom Right`, `Top Left`, and `Top Right` radius values. `X` values indicate horizontal axis values while `Y` values indicate vertical axis values. Just play around with the values to check how it works.
