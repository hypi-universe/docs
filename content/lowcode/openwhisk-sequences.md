---
id: openwhisk-sequences
title: Action Sequences
sidebar_label: Action Sequences
slug: /lowcode/openwhisk-sequences
---

A powerful feature of the OpenWhisk programming model is the ability to compose actions together. A common composition is a sequence of actions, where the result of one action becomes the input to the next action in the sequence.

Here we will use several utility actions that are provided in the `/whisk.system/utils`
[package](openwhisk-packages.md) to create your first sequence.

1. Display the actions in the `/whisk.system/utils` package.

```
  hypi wsk package get --summary /whisk.system/utils
  package /whisk.system/utils: Building blocks that format and assemble data
     (parameters: none defined)
   action /whisk.system/utils/split: Split a string into an array
     (parameters: payload, separator)
   action /whisk.system/utils/sort: Sorts an array
     (parameters: lines)
   ...
```
      You will be using the `split` and `sort` actions in this example shown here, although the package contains more actions.
  
  2. Create an action sequence so that the result of one action is passed as an argument to the next action.
```
hypi wsk action create mySequence --sequence /whisk.system/utils/split,/whisk.system/utils/sort
```
This action sequence converts some lines of text to an array, and sorts the lines.

3. Invoke the action:
```
hypi wsk action invoke --result mySequence --param payload "Over-ripe sushi,\nThe Master\nIs full of regret."
```
```json
  {
      "length": 3,
      "lines": [
          "Is full of regret.",
          "Over-ripe sushi,",
          "The Master"
      ]
  }
```

In the result, you see that the lines are sorted.

**Note**: Parameters passed between actions in the sequence are explicit, except for default parameters.
Therefore parameters that are passed to the sequence action (e.g., `mySequence`) are only available to the first action in the sequence. 

The result of the first action in the sequence becomes the input JSON object to the second action in the sequence (and so on). This object does not include any of the parameters originally passed to the sequence unless the first action explicitly includes them in its result.

Input parameters to an action are merged with the action's default parameters, with the former taking precedence and overriding any matching default parameters. For more information about invoking action sequences with multiple named parameters, learn about [setting default parameters](openwhisk-parameters.md#setting-default-parameters-on-an-action).

:::note

Large portions of this page is copied from the [Apache OpenWhisk documentation](https://github.com/apache/openwhisk/tree/master/docs) on April 23rd 2021 - where there have been customisations to match Hypi's deployment this has been noted. Apache OpenWhisk and the Apache name are the property of the Apache Foundation and licensed under the [Apache V2 license](https://github.com/apache/openwhisk/blob/master/LICENSE.txt) .

:::