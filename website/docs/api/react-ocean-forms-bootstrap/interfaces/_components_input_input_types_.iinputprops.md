---
id: "_components_input_input_types_.iinputprops"
title: "IInputProps"
sidebar_label: "IInputProps"
---

Props for the Input component

## Type parameters

▪ **TSubmitValue**

## Hierarchy

* IUseFieldProps‹DefaultHtmlInputValueType, TSubmitValue›

  ↳ [IBaseFieldLineProps](_components_fieldline_fieldline_types_.ibasefieldlineprops.md)

  ↳ **IInputProps**

## Properties

### `Optional` asyncValidateOnChange

• **asyncValidateOnChange**? : *undefined | false | true*

*Inherited from [ICheckProps](_components_check_check_types_.icheckprops.md).[asyncValidateOnChange](_components_check_check_types_.icheckprops.md#optional-asyncvalidateonchange)*

If set to true the form will trigger asynchronous validation on this field whenever
it changes (e.g. on key press). Default behaviour is that the fields will only async
validate when they loose focus.

**`default`** Form.asyncValidateOnChange

___

### `Optional` asyncValidationWait

• **asyncValidationWait**? : *undefined | number*

*Inherited from [ICheckProps](_components_check_check_types_.icheckprops.md).[asyncValidationWait](_components_check_check_types_.icheckprops.md#optional-asyncvalidationwait)*

Wait time in ms that should pass after
the last user input before the async
validators will be triggered

**`default`** Form.asyncValidationWait

___

### `Optional` asyncValidators

• **asyncValidators**? : *TAsyncValidator‹TSubmitValue›[]*

*Inherited from [ICheckProps](_components_check_check_types_.icheckprops.md).[asyncValidators](_components_check_check_types_.icheckprops.md#optional-asyncvalidators)*

Contains an array of functions that must return a Promise. Those functions are called by default onBlur,
however this behaviour can be changed by setting asyncValidateOnChange on the Form. The Form will call
all async validators of a Field at the same time and will wait for the result of every one of them. If
one of them returns a string the field will be marked as invalid. Per default the form will wait for 400ms
before triggering any validation. This is put in place so the validation won't get triggered on every
keystroke of the user. The async validators will be called 400ms after the last value change.

___

### `Optional` containerClass

• **containerClass**? : *undefined | string*

*Inherited from [IBaseFieldLineProps](_components_fieldline_fieldline_types_.ibasefieldlineprops.md).[containerClass](_components_fieldline_fieldline_types_.ibasefieldlineprops.md#optional-containerclass)*

CssClass for the field line container

___

### `Optional` defaultValue

• **defaultValue**? : *TSubmitValue*

*Inherited from [ICheckProps](_components_check_check_types_.icheckprops.md).[defaultValue](_components_check_check_types_.icheckprops.md#optional-defaultvalue)*

Overwrites the Form default values for this field. This value will be
used during form initialization.

___

### `Optional` disabled

• **disabled**? : *undefined | false | true*

*Inherited from [ICheckProps](_components_check_check_types_.icheckprops.md).[disabled](_components_check_check_types_.icheckprops.md#optional-disabled)*

Overwrites the disabled state for this field.

**`default`** Form.disabled

___

### `Optional` getDisplayValue

• **getDisplayValue**? : *TValueCallback‹TSubmitValue, DefaultHtmlInputValueType›*

*Inherited from [ICheckProps](_components_check_check_types_.icheckprops.md).[getDisplayValue](_components_check_check_types_.icheckprops.md#optional-getdisplayvalue)*

Called, when the field is loading its value from the forms
default values. Must return the value to display.

**`param`** Contains the current field value.
<br />

**`param`** Contains the properties disabled and plaintext, representing the current Form setup.

**`returns:`** the function should return the value that should be displayed.

___

### `Optional` getSubmitValue

• **getSubmitValue**? : *TValueCallback‹DefaultHtmlInputValueType, TSubmitValue›*

*Inherited from [ICheckProps](_components_check_check_types_.icheckprops.md).[getSubmitValue](_components_check_check_types_.icheckprops.md#optional-getsubmitvalue)*

Called, when the field is submitting its value to the form.
Must return the value to submit.

**`param`** Contains the current field value.
<br />

**`param`** Contains the properties disabled and plaintext, representing the current Form setup.

**`returns:`** the function should return the value that should be submitted.

___

### `Optional` info

• **info**? : *undefined | string*

*Inherited from [IInfoProps](_components_fieldline_fieldline_types_.iinfoprops.md).[info](_components_fieldline_fieldline_types_.iinfoprops.md#optional-info)*

Info text

___

### `Optional` inputSize

• **inputSize**? : *undefined | string*

*Inherited from [IBaseFieldLineProps](_components_fieldline_fieldline_types_.ibasefieldlineprops.md).[inputSize](_components_fieldline_fieldline_types_.ibasefieldlineprops.md#optional-inputsize)*

Input size for the bootstrap input column

___

###  label

• **label**: *string*

*Inherited from [ICheckProps](_components_check_check_types_.icheckprops.md).[label](_components_check_check_types_.icheckprops.md#label)*

*Overrides void*

Message id of the label that will be displayed along the input. If you
don't want to use any i18n features you can pass a raw message instead.

___

### `Optional` labelClass

• **labelClass**? : *undefined | string*

*Inherited from [IBaseFieldLineProps](_components_fieldline_fieldline_types_.ibasefieldlineprops.md).[labelClass](_components_fieldline_fieldline_types_.ibasefieldlineprops.md#optional-labelclass)*

CssClass for the label column

___

### `Optional` labelSize

• **labelSize**? : *undefined | string*

*Inherited from [IBaseFieldLineProps](_components_fieldline_fieldline_types_.ibasefieldlineprops.md).[labelSize](_components_fieldline_fieldline_types_.ibasefieldlineprops.md#optional-labelsize)*

Label size for the bootstrap label column

___

###  name

• **name**: *string*

*Inherited from [ICheckProps](_components_check_check_types_.icheckprops.md).[name](_components_check_check_types_.icheckprops.md#name)*

*Overrides void*

Name of this input. Will be used as the unique identifier of this value.
**Must be unique inside its context (e.g. form wide or form group wide)!**

___

### `Optional` plaintext

• **plaintext**? : *undefined | false | true*

*Inherited from [ICheckProps](_components_check_check_types_.icheckprops.md).[plaintext](_components_check_check_types_.icheckprops.md#optional-plaintext)*

Overwrites the plaintext state for this field.

**`default`** Form.plaintext

___

### `Optional` prefix

• **prefix**? : *React.ReactNode*

*Inherited from [IBaseFieldLineProps](_components_fieldline_fieldline_types_.ibasefieldlineprops.md).[prefix](_components_fieldline_fieldline_types_.ibasefieldlineprops.md#optional-prefix)*

Prefix component

___

### `Optional` suffix

• **suffix**? : *React.ReactNode*

*Inherited from [IBaseFieldLineProps](_components_fieldline_fieldline_types_.ibasefieldlineprops.md).[suffix](_components_fieldline_fieldline_types_.ibasefieldlineprops.md#optional-suffix)*

Suffix component

___

### `Optional` type

• **type**? : *InputType*

Html input type

___

### `Optional` validators

• **validators**? : *TValidator‹TSubmitValue›[]*

*Inherited from [ICheckProps](_components_check_check_types_.icheckprops.md).[validators](_components_check_check_types_.icheckprops.md#optional-validators)*

Contains an array of functions that will validate this input. Those functions are called whenever
the value changes (on keypress, ...). They are called in order and whenever one fails the other ones
are not called. The validator function must return either undefined or a string containing the message
id of the validation error text.

___

### `Optional` value

• **value**? : *TSubmitValue*

*Inherited from [ICheckProps](_components_check_check_types_.icheckprops.md).[value](_components_check_check_types_.icheckprops.md#optional-value)*

Overwrites the Form value for this field. Changing this property will
update the Field value, overwriting its default value but also any
value the user put in.

## Methods

### `Optional` onBlur

▸ **onBlur**(): *void*

*Inherited from [ICheckProps](_components_check_check_types_.icheckprops.md).[onBlur](_components_check_check_types_.icheckprops.md#optional-onblur)*

Triggered on field blur.

**Returns:** *void*

___

### `Optional` onChange

▸ **onChange**(`value`: TSubmitValue | undefined): *void*

*Inherited from [ICheckProps](_components_check_check_types_.icheckprops.md).[onChange](_components_check_check_types_.icheckprops.md#optional-onchange)*

Triggered on field value change.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | TSubmitValue &#124; undefined | Current field value  |

**Returns:** *void*
