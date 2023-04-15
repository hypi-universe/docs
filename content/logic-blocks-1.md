---
id: logic-blocks-1
title: Logic Blocks
sidebar_label: Logic Blocks
slug: /logic-blocks-1
---

Tink follows Block Based Programming model to help users add logic to their apps. It is important to know how these blocks connect to each other to form jigsaw puzzle. Each block has its own shape. It also has a slot shape to be inserted into. Blocks are interconnected with each other to form block based script.

Let's check different types of Logic Blocks!

There are 6 concepts in the Block based programming model that we’ll summarise here. 

* Hat blocks
* Stack blocks
* Boolean blocks
* Reporter blocks
* C blocks
* Cap blocks

Hypi is also introducing the concept of

* Script blocks
* Function blocks
* Module blocks

These blocks are divided into 6 categories. Data, Controls, Events, Variables, Actions, Operators.

### Hat blocks

A Hat Block is a block that starts a script when a specific event occurs. All hat blocks are either Control blocks or Events blocks.

![Logic Block](/img/Logic-Block-Event.png)

### Stack blocks

A Stack block is a rectangular block that is shaped to fit above and below other blocks. Stack blocks make up the majority of the blocks available.

![Logic Block](/img/Logic-Block-Stack.png)


###  Boolean blocks

A Boolean block is an elongated hexagonal block that reports boolean values (values with only true or
false). When the block is used, it acts as a reporter block, reporting "true" or "false" string values or the
numbers "1" and "0" depending on its usage in a script.

![Logic Block](/img/Logic-Block-Boolean.png)

### Reporter blocks

A reporter block is a block that reports a value. These can be anything, from numbers to strings or any other object in Dart.

Unlike a stack block, which changes something on the Stage, plays a sound, stops the script, or changes a variable, reporter blocks cannot be placed directly above or below another block. Instead, they are dropped into a number, text, or drop-down input. When the script runs the block into which the reporter block has been dropped, it will first run the reporter block to find the value of the input. 

Reporter blocks can also have inputs that may be another kind of reporter blocks. Boolean Block is a  special kind of reporter block that reports either "true" or "false".

![Logic Block ](/img/Logic-Block-Reporter.png)

### C blocks

A C block is a block that is shaped like the letter "C" so that other blocks can fit inside it. These blocks perform the conditions and loops. 

C blocks have a "mouth" (it looks like the letter "C", hence the name) — the blocks that will be placed inside the C block go in these mouths. All but one of the C blocks consist of one mouth — the other, if <> then, else, consists of two mouths. (For this reason, this block is occasionally referred to as an "E block".)

When any of the other C blocks are dragged over a stack of blocks and if the C is empty, its mouth extends to wrap around them.

![Logic Block](/img/Logic-Block-C.png)

###  Cap blocks

A cap block is a block that is designed to stop a block from being placed underneath it. It looks and acts like a Stack Block, except there is no bump underneath it and blocks cannot be placed under it.

### Script blocks

Script blocks are simple unnamed sequences that have a hat block and exactly 1 C block with at least 1 stack block. In Hypi, they’re used under the “Actions” tab of the UI e.g. if a user selects a button, the action tab allows them to choose “onClick” as the hat block, auto inserts a C block and lets the user add a stack, function or module block within it. They’re non-reusable functions.

### Function blocks

Function blocks are the same as script blocks but they also have a name which makes them re-usable so that they can be added within C blocks as just like another stack block. The input of a function, is the input
of the C block it contains which is always a run C block. The run C block is simply a C block that runs all the stack blocks inside it in order. The input of the run C block is the input of the first stack block
inside it thereby making it the input of the function overall.

The general shape used here is the standard representation of a mathematical function. `f` would be the function name and `x`,` y` etc are the inputs.

### Module blocks

A module block is a list of functions. It does not have an entry point. It is simply a way to group related functions together into a namespace, such that two functions with the same name but from different
namespaces will not conflict with each other
.
