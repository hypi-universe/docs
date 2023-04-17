---
id: logic-blocks-1
title: Logic Blocks
sidebar_label: Logic Blocks
slug: /logic-blocks-1
---

Tink follows Block Based Programming model to help users add logic to their apps. It is important to know how these blocks connect to each other to form jigsaw puzzle. Each block has its own shape. It also has a slot to be inserted into. Blocks are interconnected with each other to form block based script.

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

### Hat blocks

A Hat Block is a block that starts a script at the occurence of an event. All hat blocks are either Control blocks or Events blocks.

![Logic Block](/img/Logic-Block-Event.png)

### Stack blocks

A Stack block is a rectangular block. It fits with slots of other blocks. Stack blocks make up the majority of the blocks available.

![Logic Block](/img/Logic-Block-Stack.png)


###  Boolean blocks

A Boolean block is an elongated hexagonal block. It reports boolean values, i.e. true-false or 0-1 values. So, this block acts as a reporter block.

![Logic Block](/img/Logic-Block-Boolean.png)

### Reporter blocks

A reporter block reports a value. Values can be of any data type; numbers to strings or any other object.

Unlike a stack block, reporter blocks cannot be placed directly above or below another block. Reporter block can be placed inside a block. They are dropped into a constant block with number, text, or drop-down input. When the block based script runs, it will first run the reporter block to find the value of the input. 

Reporter blocks can also have inputs that may be another kind of reporter blocks. 

![Logic Block ](/img/Logic-Block-Reporter.png)

### C blocks

A C block is shaped like the letter `C` so that other blocks can fit inside it. These blocks execute the conditions and loops. 

C blocks have a mouth as it looks like the letter C.  The blocks that will be placed inside the C block go in these mouths. `if - then`, `else`, consists of two mouths. So these blocks are termed as `E block`.

When empty C blocks are dragged over a stack of blocks, its mouth extends to wrap around them.

![Logic Block](/img/Logic-Block-C.png)

###  Cap blocks

A cap block is an end block. It stops another block from being placed underneath it. It looks and acts like a Stack Block, except there is no bump underneath it.

