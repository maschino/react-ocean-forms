---
id: "usefield.ifieldcomponentfieldprops"
title: "IFieldComponentFieldProps"
sidebar_label: "IFieldComponentFieldProps"
---

Props for the actual html input of a Field
input component. Designed to be passed to the
html input as-is.

## Type parameters

▪ **TDisplayValue**

## Hierarchy

* **IFieldComponentFieldProps**

## Properties

###  disabled

• **disabled**: *boolean*

Disabled state

___

###  id

• **id**: *string*

Html id

___

###  name

• **name**: *string*

Field name

___

###  value

• **value**: *TDisplayValue | undefined*

Field value

## Methods

###  onBlur

▸ **onBlur**(): *void*

OnBlur handler

**Returns:** *void*

___

###  onChange

▸ **onChange**(`event`: [IFieldChangedEvent](usefield.ifieldchangedevent.md)‹TDisplayValue›): *void*

OnChange handler

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | [IFieldChangedEvent](usefield.ifieldchangedevent.md)‹TDisplayValue› | Change event  |

**Returns:** *void*
