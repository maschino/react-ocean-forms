---
id: "usefield.iusefieldprops"
title: "IUseFieldProps"
sidebar_label: "IUseFieldProps"
---

## Type parameters

▪ **TDisplayValue**

▪ **TSubmitValue**

## Hierarchy

* [IBaseFieldProps](usefield.ibasefieldprops.md)‹TDisplayValue, TSubmitValue›

* [IUseValidationArgs](usevalidation.iusevalidationargs.md)‹TSubmitValue›

  ↳ **IUseFieldProps**

  ↳ [IInputProps](input.iinputprops.md)

## Properties

### `Optional` asyncValidateOnChange

• **asyncValidateOnChange**? : *undefined | false | true*

*Inherited from [IInputProps](input.iinputprops.md).[asyncValidateOnChange](input.iinputprops.md#optional-asyncvalidateonchange)*

If set to true the form will trigger asynchronous validation on this field whenever
it changes (e.g. on key press). Default behaviour is that the fields will only async
validate when they loose focus.

**`default`** Form.asyncValidateOnChange

___

### `Optional` asyncValidationWait

• **asyncValidationWait**? : *undefined | number*

*Inherited from [IUseFieldGroupArgs](fieldgroup.iusefieldgroupargs.md).[asyncValidationWait](fieldgroup.iusefieldgroupargs.md#optional-asyncvalidationwait)*

Wait time in ms that should pass after
the last user input before the async
validators will be triggered

**`default`** Form.asyncValidationWait

___

### `Optional` asyncValidators

• **asyncValidators**? : *[TAsyncValidator](../modules/validators.md#tasyncvalidator)‹TSubmitValue›[]*

*Inherited from [IUseFieldGroupArgs](fieldgroup.iusefieldgroupargs.md).[asyncValidators](fieldgroup.iusefieldgroupargs.md#optional-asyncvalidators)*

Contains an array of functions that must return a Promise. Those functions are called by default onBlur,
however this behaviour can be changed by setting asyncValidateOnChange on the Form. The Form will call
all async validators of a Field at the same time and will wait for the result of every one of them. If
one of them returns a string the field will be marked as invalid. Per default the form will wait for 400ms
before triggering any validation. This is put in place so the validation won't get triggered on every
keystroke of the user. The async validators will be called 400ms after the last value change.

___

### `Optional` defaultValue

• **defaultValue**? : *TSubmitValue*

*Inherited from [IInputProps](input.iinputprops.md).[defaultValue](input.iinputprops.md#optional-defaultvalue)*

Overwrites the Form default values for this field. This value will be
used during form initialization.

___

### `Optional` disabled

• **disabled**? : *undefined | false | true*

*Inherited from [IInputProps](input.iinputprops.md).[disabled](input.iinputprops.md#optional-disabled)*

Overwrites the disabled state for this field.

**`default`** Form.disabled

___

### `Optional` getDisplayValue

• **getDisplayValue**? : *[TValueCallback](../modules/usefield.md#tvaluecallback)‹TSubmitValue, TDisplayValue›*

*Inherited from [IInputProps](input.iinputprops.md).[getDisplayValue](input.iinputprops.md#optional-getdisplayvalue)*

Called, when the field is loading its value from the forms
default values. Must return the value to display.

**`param`** Contains the current field value.
<br />

**`param`** Contains the properties disabled and plaintext, representing the current Form setup.

**`returns:`** the function should return the value that should be displayed.

___

### `Optional` getSubmitValue

• **getSubmitValue**? : *[TValueCallback](../modules/usefield.md#tvaluecallback)‹TDisplayValue, TSubmitValue›*

*Inherited from [IInputProps](input.iinputprops.md).[getSubmitValue](input.iinputprops.md#optional-getsubmitvalue)*

Called, when the field is submitting its value to the form.
Must return the value to submit.

**`param`** Contains the current field value.
<br />

**`param`** Contains the properties disabled and plaintext, representing the current Form setup.

**`returns:`** the function should return the value that should be submitted.

___

###  label

• **label**: *string*

*Inherited from [IInputProps](input.iinputprops.md).[label](input.iinputprops.md#label)*

*Overrides [IUseValidationArgs](usevalidation.iusevalidationargs.md).[label](usevalidation.iusevalidationargs.md#label)*

Message id of the label that will be displayed along the input. If you
don't want to use any i18n features you can pass a raw message instead.

___

###  name

• **name**: *string*

*Inherited from [IInputProps](input.iinputprops.md).[name](input.iinputprops.md#name)*

*Overrides [IUseFieldGroupArgs](fieldgroup.iusefieldgroupargs.md).[name](fieldgroup.iusefieldgroupargs.md#name)*

Name of this input. Will be used as the unique identifier of this value.
**Must be unique inside its context (e.g. form wide or form group wide)!**

___

### `Optional` plaintext

• **plaintext**? : *undefined | false | true*

*Inherited from [IInputProps](input.iinputprops.md).[plaintext](input.iinputprops.md#optional-plaintext)*

Overwrites the plaintext state for this field.

**`default`** Form.plaintext

___

### `Optional` validators

• **validators**? : *[TValidator](../modules/validators.md#tvalidator)‹TSubmitValue›[]*

*Inherited from [IUseFieldGroupArgs](fieldgroup.iusefieldgroupargs.md).[validators](fieldgroup.iusefieldgroupargs.md#optional-validators)*

Contains an array of functions that will validate this input. Those functions are called whenever
the value changes (on keypress, ...). They are called in order and whenever one fails the other ones
are not called. The validator function must return either undefined or a string containing the message
id of the validation error text.

___

### `Optional` value

• **value**? : *TSubmitValue*

*Inherited from [IInputProps](input.iinputprops.md).[value](input.iinputprops.md#optional-value)*

Overwrites the Form value for this field. Changing this property will
update the Field value, overwriting its default value but also any
value the user put in.

## Methods

### `Optional` onBlur

▸ **onBlur**(): *void*

*Inherited from [IInputProps](input.iinputprops.md).[onBlur](input.iinputprops.md#optional-onblur)*

Triggered on field blur.

**Returns:** *void*

___

### `Optional` onChange

▸ **onChange**(`value`: TSubmitValue | undefined): *void*

*Inherited from [IInputProps](input.iinputprops.md).[onChange](input.iinputprops.md#optional-onchange)*

Triggered on field value change.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | TSubmitValue &#124; undefined | Current field value  |

**Returns:** *void*
