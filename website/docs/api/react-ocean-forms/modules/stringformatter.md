---
id: "stringformatter"
title: "stringFormatter"
sidebar_label: "stringFormatter"
---

Copyright (c) 2018-present, Umweltbundesamt GmbH

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.

## Index

### Interfaces

* [IMessageValues](../interfaces/stringformatter.imessagevalues.md)

### Type aliases

* [TSTringFormatter](stringformatter.md#tstringformatter)

### Variables

* [TEST_MESSAGES](stringformatter.md#const-test_messages)

### Functions

* [addCustomMessages](stringformatter.md#const-addcustommessages)
* [stringFormatter](stringformatter.md#const-stringformatter)

## Type aliases

###  TSTringFormatter

Ƭ **TSTringFormatter**: *function*

#### Type declaration:

▸ (`id`: string, `values?`: [IMessageValues](../interfaces/stringformatter.imessagevalues.md)): *string*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |
`values?` | [IMessageValues](../interfaces/stringformatter.imessagevalues.md) |

## Variables

### `Const` TEST_MESSAGES

• **TEST_MESSAGES**: *IMessages* = DEFAULT_MESSAGES

## Functions

### `Const` addCustomMessages

▸ **addCustomMessages**(`messages`: IMessages): *void*

Adds custom messages to be supported by the
stringFormatter

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`messages` | IMessages | Object containing messages  |

**Returns:** *void*

___

### `Const` stringFormatter

▸ **stringFormatter**(`id`: string, `values?`: [IMessageValues](../interfaces/stringformatter.imessagevalues.md)): *string*

Uses the parameterized string and replaces the
templates with the values passed as the second
parameter.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | Message id to be formatted |
`values?` | [IMessageValues](../interfaces/stringformatter.imessagevalues.md) | Parameter values  |

**Returns:** *string*
