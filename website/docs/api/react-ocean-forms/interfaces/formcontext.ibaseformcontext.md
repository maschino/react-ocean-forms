---
id: "formcontext.ibaseformcontext"
title: "IBaseFormContext"
sidebar_label: "IBaseFormContext"
---

Base interface for the form context

## Type parameters

▪ **TFieldValues**

## Hierarchy

* **IBaseFormContext**

  ↳ [IFormContext](formcontext.iformcontext.md)

## Properties

###  busy

• **busy**: *boolean*

True, if the form is currently busy

___

###  fieldPrefix

• **fieldPrefix**: *string | null*

Optional field prefix

## Methods

###  getFieldState

▸ **getFieldState**(`name`: string): *IFieldState*

Returns the field state of the given field

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | Unique field name  |

**Returns:** *IFieldState*

___

###  getValues

▸ **getValues**(): *TFieldValues*

Returns all field values

**Returns:** *TFieldValues*

___

###  notifyFieldEvent

▸ **notifyFieldEvent**(`name`: string, `event`: string, `args?`: unknown): *void*

Notifies the form context about a field event

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | Unique field name |
`event` | string | Event name |
`args?` | unknown | Optional event args  |

**Returns:** *void*

___

###  registerField

▸ **registerField**(`name`: string, `state`: IFieldState): *void*

Registers a field to the form context

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | Unique field name |
`state` | IFieldState | Field state  |

**Returns:** *void*

___

###  registerListener

▸ **registerListener**(`name`: string, `callback`: TFormEventListener): *void*

Registers a listener to all field events inside
this form context

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | Unique listener name |
`callback` | TFormEventListener | Callback method  |

**Returns:** *void*

___

###  reset

▸ **reset**(): *void*

Resets the form

**Returns:** *void*

___

###  submit

▸ **submit**(`submitArgs?`: unknown): *Promise‹void›*

Submits the form

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`submitArgs?` | unknown | Optional submit args  |

**Returns:** *Promise‹void›*

___

###  unregisterField

▸ **unregisterField**(`name`: string): *void*

Unregisters the field from the form context

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | Unique field name  |

**Returns:** *void*

___

###  unregisterListener

▸ **unregisterListener**(`name`: string): *void*

Unregisters a listener from the form context

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | Unique listener name  |

**Returns:** *void*
