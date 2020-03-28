---
id: "usefield.ibasefieldprops"
title: "IBaseFieldProps"
sidebar_label: "IBaseFieldProps"
---

Basic props for the field component

## Type parameters

▪ **TDisplayValue**

▪ **TSubmitValue**

## Hierarchy

* **IBaseFieldProps**

  ↳ [IUseFieldProps](usefield.iusefieldprops.md)

## Properties

### `Optional` asyncValidateOnChange

• **asyncValidateOnChange**? : *undefined | false | true*

If set to true the form will trigger asynchronous validation on this field whenever
it changes (e.g. on key press). Default behaviour is that the fields will only async
validate when they loose focus.

**`default`** Form.asyncValidateOnChange

___

### `Optional` defaultValue

• **defaultValue**? : *TSubmitValue*

Overwrites the Form default values for this field. This value will be
used during form initialization.

___

### `Optional` disabled

• **disabled**? : *undefined | false | true*

Overwrites the disabled state for this field.

**`default`** Form.disabled

___

### `Optional` getDisplayValue

• **getDisplayValue**? : *[TValueCallback](../modules/usefield.md#tvaluecallback)‹TSubmitValue, TDisplayValue›*

Called, when the field is loading its value from the forms
default values. Must return the value to display.

**`param`** Contains the current field value.
<br />

**`param`** Contains the properties disabled and plaintext, representing the current Form setup.

**`returns:`** the function should return the value that should be displayed.

___

### `Optional` getSubmitValue

• **getSubmitValue**? : *[TValueCallback](../modules/usefield.md#tvaluecallback)‹TDisplayValue, TSubmitValue›*

Called, when the field is submitting its value to the form.
Must return the value to submit.

**`param`** Contains the current field value.
<br />

**`param`** Contains the properties disabled and plaintext, representing the current Form setup.

**`returns:`** the function should return the value that should be submitted.

___

###  label

• **label**: *string*

Message id of the label that will be displayed along the input. If you
don't want to use any i18n features you can pass a raw message instead.

___

###  name

• **name**: *string*

Name of this input. Will be used as the unique identifier of this value.
**Must be unique inside its context (e.g. form wide or form group wide)!**

___

### `Optional` plaintext

• **plaintext**? : *undefined | false | true*

Overwrites the plaintext state for this field.

**`default`** Form.plaintext

___

### `Optional` value

• **value**? : *TSubmitValue*

Overwrites the Form value for this field. Changing this property will
update the Field value, overwriting its default value but also any
value the user put in.

## Methods

### `Optional` onBlur

▸ **onBlur**(): *void*

Triggered on field blur.

**Returns:** *void*

___

### `Optional` onChange

▸ **onChange**(`value`: TSubmitValue | undefined): *void*

Triggered on field value change.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | TSubmitValue &#124; undefined | Current field value  |

**Returns:** *void*
