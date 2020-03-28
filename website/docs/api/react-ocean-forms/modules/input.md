---
id: "input"
title: "Input"
sidebar_label: "Input"
---

Copyright (c) 2018-present, Umweltbundesamt GmbH

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.

## Index

### Interfaces

* [IInputProps](../interfaces/input.iinputprops.md)

### Functions

* [Input](input.md#const-input)

## Functions

### `Const` Input

▸ **Input**<**TSubmitValue**>(`props`: [IInputProps](../interfaces/input.iinputprops.md)‹TSubmitValue›): *Element*

Defines a form line containing a label and an input. Additionally it
will render validation messages. If the user adds the required validator
then it will mark the field as required as well.

**Type parameters:**

▪ **TSubmitValue**: *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`props` | [IInputProps](../interfaces/input.iinputprops.md)‹TSubmitValue› |

**Returns:** *Element*
