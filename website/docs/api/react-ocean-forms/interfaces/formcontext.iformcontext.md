---
id: "formcontext.iformcontext"
title: "IFormContext"
sidebar_label: "IFormContext"
---

Interface describing the form context

## Type parameters

▪ **TFieldValues**

## Hierarchy

* [IBaseFormContext](formcontext.ibaseformcontext.md)‹TFieldValues›

  ↳ **IFormContext**

## Properties

###  asyncValidateOnChange

• **asyncValidateOnChange**: *boolean*

If set to true the form will trigger asynchronous validation on
Fields whenever they change (e.g. on key press). Default behaviour
is that the fields will only async validate when they loose focus.
Can be overriden per field.

___

###  asyncValidationWait

• **asyncValidationWait**: *number*

Configures the wait time before the async validators will be called.
Per default the form will call the async validators only 400ms after
the last value change. Can be overriden per field.

___

###  busy

• **busy**: *boolean*

*Inherited from [IBaseFormContext](formcontext.ibaseformcontext.md).[busy](formcontext.ibaseformcontext.md#busy)*

True, if the form is currently busy

___

###  defaultValues

• **defaultValues**: *Partial‹TFieldValues›*

Contains the default values of the form. Those values will be
put into the according fields when the form initializes.

___

###  disabled

• **disabled**: *boolean*

If set to true the form will disable all Fields and FormButtons.

___

###  fieldPrefix

• **fieldPrefix**: *string | null*

*Inherited from [IBaseFormContext](formcontext.ibaseformcontext.md).[fieldPrefix](formcontext.ibaseformcontext.md#fieldprefix)*

Optional field prefix

___

###  plaintext

• **plaintext**: *boolean*

If set to true, all the fields will display only text instead of an
input element. This is useful to re-use Fields in a check page.

___

###  stringFormatter

• **stringFormatter**: *[TSTringFormatter](../modules/stringformatter.md#tstringformatter)*

Optional string formatter method

___

### `Optional` values

• **values**? : *Partial‹TFieldValues›*

Contains the values of the form. Changing this property will
update all Field values, overwriting their default values but also
any value the user put in.

## Methods

###  getFieldState

▸ **getFieldState**(`name`: string): *IFieldState*

*Inherited from [IBaseFormContext](formcontext.ibaseformcontext.md).[getFieldState](formcontext.ibaseformcontext.md#getfieldstate)*

Returns the field state of the given field

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | Unique field name  |

**Returns:** *IFieldState*

___

###  getValues

▸ **getValues**(): *TFieldValues*

*Inherited from [IBaseFormContext](formcontext.ibaseformcontext.md).[getValues](formcontext.ibaseformcontext.md#getvalues)*

Returns all field values

**Returns:** *TFieldValues*

___

###  notifyFieldEvent

▸ **notifyFieldEvent**(`name`: string, `event`: string, `args?`: unknown): *void*

*Inherited from [IBaseFormContext](formcontext.ibaseformcontext.md).[notifyFieldEvent](formcontext.ibaseformcontext.md#notifyfieldevent)*

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

*Inherited from [IBaseFormContext](formcontext.ibaseformcontext.md).[registerField](formcontext.ibaseformcontext.md#registerfield)*

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

*Inherited from [IBaseFormContext](formcontext.ibaseformcontext.md).[registerListener](formcontext.ibaseformcontext.md#registerlistener)*

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

*Inherited from [IBaseFormContext](formcontext.ibaseformcontext.md).[reset](formcontext.ibaseformcontext.md#reset)*

Resets the form

**Returns:** *void*

___

###  submit

▸ **submit**(`submitArgs?`: unknown): *Promise‹void›*

*Inherited from [IBaseFormContext](formcontext.ibaseformcontext.md).[submit](formcontext.ibaseformcontext.md#submit)*

Submits the form

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`submitArgs?` | unknown | Optional submit args  |

**Returns:** *Promise‹void›*

___

###  unregisterField

▸ **unregisterField**(`name`: string): *void*

*Inherited from [IBaseFormContext](formcontext.ibaseformcontext.md).[unregisterField](formcontext.ibaseformcontext.md#unregisterfield)*

Unregisters the field from the form context

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | Unique field name  |

**Returns:** *void*

___

###  unregisterListener

▸ **unregisterListener**(`name`: string): *void*

*Inherited from [IBaseFormContext](formcontext.ibaseformcontext.md).[unregisterListener](formcontext.ibaseformcontext.md#unregisterlistener)*

Unregisters a listener from the form context

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | Unique listener name  |

**Returns:** *void*
