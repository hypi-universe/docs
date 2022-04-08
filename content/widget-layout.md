---
id: widget-layout
title: Layout Widgets
sidebar_label: Layout Widgets
slug: /widget-layout
---

Layout widgets are invisible. If you have basic widgets with you, how do you place them appropriately over the screen? That's when Layout widgets come to the picture!

Place the Layout widget on the screen and add a visible widget as its child.  A layout widget like a column can have many child widgets. 

Let's look at various Layout widgets and their functions.

## Align

* Aligns child widget within its boundaries.
* Sizes itself based on the size of the child.
* It can accommodate a single child. If you drag the second child widget, the first one gets replaced by the second.
* Available alignment positions: Bottom Center, Bottom Left, Bottom Right, Center, Centre-Left, Centre-Right, Top Centre, Top Left, and Top Right.

## Column

* Accommodates multiple widgets in a vertical array.
* It does not scroll. You can add child widgets till it fits available space in the column.
* If you have just one child widget to place, consider using Align or Centre Widget.
* You can change Vertical and Horizontal positions of child widgets using [Column properties](properties-column-row.md). Select the column and the properties are on the right-hand side Properties panel.
* When you add widgets to a screen, the widgets are aligned in a Column by default. You may remove the Column and use other Layout widgets.

##  Aspect Ratio

* Aspect Ratio is the width to height ratio of the screen or component.
* Aspect Ratio layout sizes the child widget as per the given aspect ratio.
* If the Aspect Ratio is 1, it means the layout is a perfect square with equal width and height. If it is greater than 1, the height reduces and the layout becomes a rectangle. If it is less than 1, the width reduces and the layout becomes a rectangle with a vertical column.
* Aspect ratio accommodates a single child. However, you may add another layout like a Column to the Aspect Ratio layout to add multiple widgets.

##  Baseline

* _Baseline_ is the number of logical pixels from the top of the baseline widget.
* Baseline widget shifts the child widget down so that child's baseline or the bottom aligns widget's baseline (or aligns the number of logical pixels from the top).
* It sizes itself to contain the child.
* Baseline to position the child has two types: Alphabetic or Ideographic. 
* Alphabetic baseline aligns the bottom of the glyphs of the alphabetic characters of the Text.
* Ideographic baseline aligns the bottom of the ideographic characters of the Text.

##  Card

* A panel with slightly rounded corners and an elevated shadow.
* Use for representing related information like an event, weather forecast, contact details, etc.
* Set the card colour and shadow colour. 
* Set the elevation (in pixels) of the shadow.
* Set the margins from all sides or any of the top, left, right, or bottom sides.

##  Center

* This widget places its child at its center.
* The height and width of the widget can be adjusted using the Width Factor and Height Factor.
* The widget's width will be the product of the child width and the width factor. So, if the width factor is 2.0, the width of the widget will be twice of child's width. 
* The widget's height will be the product of the child width and the height factor. So, if the height factor is 1.0, the height of the widget will be the same as the child's height. 
* Accommodates a single child. However, you may add a layout widget as a child that accommodates multiple child widgets.

##  Constrained Box

* This widget puts additional constraints on the dimensions of the child widget.
* Use to resize the child widget. 
* Provide constraint limits like Minimum width and height, Maximum width and height.
* If you want a minimum height of the child widget to be 100 pixels, enter the Min Height constraint as 100.
* Constrain the height of a button to stretch it or constrain text width to have multiple lines.

##  Sized Box

* It is a box with a specific size or dimensions.
* It resizes the child widget to fit into the box.
* Provide height and width in the Properties panel to resize.
* You may use it to add whitespaces between two widgets. Just add a blank SizedBox of required dimensions to add whitespace.

## Fractionally Sized Box

Resizes the child widget relative to the dimensions of the screen or the parent widget.

##  List Tile

* This widget has a list with a single row and fixed height.
* It usually holds text, leading and trailing icons. 
* Text includes title and subtitle. The leading icon has Circle Avatar and the trailing one has Pop Up Menu button. You can choose the elements on the List Tile from these.
* List Tile can be used within a Card. It helps to change the color of the tile. 
* Multiple List tiles can be placed in a List View.

##  Off Stage

* Off Stage widget can keep the child widget hidden from the screen.
* When the Off Stage value is false (No), the child widget will be displayed on the screen.
* When the Off Stage value is true (Yes), the child widget will be hidden.
* Off Stage does not leave whitespace when the child widget is hidden. 
* OffStage children however remain active behind the screen. They can receive focus through the keyboard.

## Padding

* Add padding to create an empty space around the child widget.
* It shrinks the layout constraints by the given padding space. It causes the child to have a smaller size.
* You can have padding on all sides or any one side. 
* For one side padding, provide top, left, bottom, or right padding value  (in terms of pixels).
* For all side padding, provide a single padding value (in terms of pixels).

## Row

* Accommodates multiple widgets in a horizontal array.
* It does not scroll. You can add child widgets till they fill available space in the row.
* You can change Vertical and Horizontal positions of child widgets using [Row properties](properties-column-row.md).

## Flex

* Accommodates multiple widgets in a horizontal or vertical array.
* It does not scroll. You can add child widgets till they fill available space in the row.
* You can specify the main axis along which the children are placed. (Vertical or Horizontal)
* If you want flexibility of choosing the type of main axis, you can use Flex widget. If you are already know that you want to use Horizontal or Vertical alignment, you can use Row or Colum respectively.
* You can change Vertical and Horizontal positions of child widgets using [Flex properties](properties-column-row.md).

## Expanded

* Expands the child of Row/Column/Flex so that child fills the available place.
* Child widget expands along the main axis, i.e. horizontally for a Row and Vertically for a Column.

## Intrinsic Width

* Sizes its child to the child's maximum intrinsic width.
* When unlimited width is available (like Row widget), child widgets like Text can expand infinitely. With Intrinsic width, the child widget sizes itself to a more reasonable width.
* The child's width gets snapped to a multiple of the provided value of Step Width.
* The child's height also gets snapped to a multiple of the provided value of Step Height.

## Intrinsic Height

* Sizes its child to the child's maximum intrinsic height.
* When unlimited height is available (like Column widget), the child widget like a Button can expand infinitely. With Intrinsic height, the child widget sizes itself to a more reasonable height.

##  Switch List Tile

* This widget has a list with a single row and fixed height.
* It usually holds text, leading icon, and trailing toggle switch. 
* Text includes title and subtitle. The leading icon has Circle Avatar and the trailing has a toggle Switch. You can choose the widgets on the List Tile from these. However, the Toggle switch is not optional.
* Switch List Tile can be used within a Card. It helps to change the color of the tile. 
* Multiple Switch List tiles can be placed in a List View.

##  Fitted Box

* Scales and positions a child within itself according to box fit options.
* Options to fit the child widget within a target box are described [here](https://api.flutter.dev/flutter/painting/BoxFit.html).
* If a child widget does not fit into a parent or target box, add the Fitted box in between.
* Target box can be a widget with a fixed size like container, sized box, etc. Put Fitted Box inside a target box. Then add a child widget to the fitted box. You can fit the child inside the target box as per the fit options provided by the Fitted Box.

##  Container

* Container facilitates common painting, decorating, positioning, and sizing its child widget.
* It accepts just one child widget.
* You can change the background color and shape of the widget. The shape can be a rectangle or circle.
* Use the Transform widget to provide the rotation to the container at a certain angle.
* Gradient colors can be applied to the background at certain angles.
* Padding provides whitespace around the child widget.
* Margin provides space around the container widget.
* Height and Width parameters can be used to size the container.
* Container is quite useful to style the child widget. Change [the properties of the container](properties-container.md) and design the widget as per the requirements.

## Safe Area

* The operating system features may obstruct the view of a widget. For example, The Notch iPhone X, or other similar creative physical features of the display.
* Safe Area widgets provide the child with sufficient padding to avoid intrusion by the operating system.
* Use Safe Area to avoid the status bar at the top of the screen.
* Click the side under the properties of Safe Area for which you want to avoid the system intrusion; Left, Top, Right, or Bottom.

## Drawer

* Drawer is a left hand side navigation panel that slides in horizontally from the left edge of the screen.
* Add navigation links for the App in the drawer.
* Add a component to use as a drawer. Customize it using other widgets like Text buttons, Icons, Pop up menus, etc. Rename the component as `Drawer` or any suitable name.
* Enable `Drawer Component` from the [Tink Screen Properties](designer-screens.md#3-how-to-change-screen-properties). Choose created `Drawer` from the drop down menu. The Drawer gets automatically added to the screen. You may not be able to see it on the screen.
* Click `Preview`. Click on the left edge and slide horizontally to check the Drawer component. 







