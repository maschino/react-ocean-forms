---
id: "form.iformprops"
title: "IFormProps"
sidebar_label: "IFormProps"
---

Props for the Form component

## Type parameters

▪ **TFieldValues**

▪ **TSubmitArgs**

## Hierarchy

* **IFormProps**

## Properties

### `Optional` asyncValidateOnChange

• **asyncValidateOnChange**? : *undefined | false | true*

If set to true the form will trigger asynchronous validation on
Fields whenever they change (e.g. on key press). Default behaviour
is that the fields will only async validate when they loose focus.
Can be overriden per field.

**`default`** false

___

### `Optional` asyncValidationWait

• **asyncValidationWait**? : *undefined | number*

Configures the wait time before the async validators will be called.
Per default the form will call the async validators only 400ms after
the last value change. Can be overriden per field.

**`default`** 400

___

### `Optional` busy

• **busy**? : *undefined | true*

If set to true, the form will be forced into a busy state and thus disabling
any form buttons.

**`default`** false

___

### `Optional` className

• **className**? : *undefined | string*

Sets the className of the html form.

___

### `Optional` defaultValues

• **defaultValues**? : *Partial‹TFieldValues›*

Contains the default values of the form. Those values will be
put into the according fields when the form initializes. Those
values will be put into the according fields when the form initializes.

___

### `Optional` disabled

• **disabled**? : *undefined | false | true*

If set to true the form will disable all Fields and FormButtons.

**`default`** false

___

### `Optional` formatString

• **formatString**? : *[TSTringFormatter](../modules/stringformatter.md#tstringformatter)*

If set every text output will be put through this function.
Per default an internal implementation is used.

___

### `Optional` plaintext

• **plaintext**? : *undefined | false | true*

If set to true, all the fields will display only text instead of an
input element. This is useful to re-use Fields in a check page.

**`default`** false

___

### `Optional` resetOnSubmit

• **resetOnSubmit**? : *undefined | false | true*

If set to true, all fields will be reset on an successful form submit

**`default`** false

___

### `Optional` values

• **values**? : *Partial‹TFieldValues›*

Contains the values of the form. Changing this property will
update all Field values, overwriting their default values but also
any value the user put in.

## Methods

### `Optional` onReset

▸ **onReset**(): *void*

Triggered when the form has been resetted by the user.

**Returns:** *void*

___

### `Optional` onSubmit

▸ **onSubmit**(`values`: TFieldValues, `submitArgs?`: TSubmitArgs): *Promise‹void› | void*

Triggered when the form has been validated successfully and is ready to be submitted.
If the passed function is an async function / returns a promise, then the form context
will stay in a busy state until the function resolves.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`values` | TFieldValues | Contains the form values. The name of the fields are used as property names for the values object. FieldGroups result in a nested object. <br /> |
`submitArgs?` | TSubmitArgs | By default undefined. Can be set by FormButton or any other manual way of calling the submit method of the form context.  |

**Returns:** *Promise‹void› | void*

___

### `Optional` onValidate

▸ **onValidate**(`values`: TFieldValues): *[TFormValidationResult](../modules/form.md#tformvalidationresult)*

Triggered after all field validations have been successfull. Provides the current
values end expects an error object with the field names as properties and the errors
inside those properties.

**`returns:`** should return null if the values are valid, otherwise an error object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`values` | TFieldValues | Contains the form values. The name of the fields are used as property names for the values object. FieldGroups result in a nested object. |

**Returns:** *[TFormValidationResult](../modules/form.md#tformvalidationresult)*
