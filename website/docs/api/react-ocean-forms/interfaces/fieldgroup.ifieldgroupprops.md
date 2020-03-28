---
id: "fieldgroup.ifieldgroupprops"
title: "IFieldGroupProps"
sidebar_label: "IFieldGroupProps"
---

Props for the field group component

## Type parameters

▪ **TFieldValue**

## Hierarchy

  ↳ [IUseFieldGroupArgs](fieldgroup.iusefieldgroupargs.md)‹TFieldValue›

  ↳ **IFieldGroupProps**

## Properties

### `Optional` asyncValidateOnChange

• **asyncValidateOnChange**? : *undefined | false | true*

*Inherited from [IUseFieldGroupArgs](fieldgroup.iusefieldgroupargs.md).[asyncValidateOnChange](fieldgroup.iusefieldgroupargs.md#optional-asyncvalidateonchange)*

If set to true the form will trigger asynchronous validation on Fields whenever
they change (e.g. on key press). Default behaviour is that the fields will only
async validate when they loose focus.

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

• **asyncValidators**? : *[TAsyncValidator](../modules/validators.md#tasyncvalidator)‹TFieldValue›[]*

*Inherited from [IUseFieldGroupArgs](fieldgroup.iusefieldgroupargs.md).[asyncValidators](fieldgroup.iusefieldgroupargs.md#optional-asyncvalidators)*

Contains an array of functions that must return a Promise. Those functions are called by default onBlur,
however this behaviour can be changed by setting asyncValidateOnChange on the Form. The Form will call
all async validators of a Field at the same time and will wait for the result of every one of them. If
one of them returns a string the field will be marked as invalid. Per default the form will wait for 400ms
before triggering any validation. This is put in place so the validation won't get triggered on every
keystroke of the user. The async validators will be called 400ms after the last value change.

___

### `Optional` defaultValues

• **defaultValues**? : *TFieldValue*

*Inherited from [IUseFieldGroupArgs](fieldgroup.iusefieldgroupargs.md).[defaultValues](fieldgroup.iusefieldgroupargs.md#optional-defaultvalues)*

Overwrites the Form default values for the child fields of this field group.
Those values will be put into the according fields when the form initializes.

___

### `Optional` disabled

• **disabled**? : *undefined | false | true*

*Inherited from [IUseFieldGroupArgs](fieldgroup.iusefieldgroupargs.md).[disabled](fieldgroup.iusefieldgroupargs.md#optional-disabled)*

Overwrites the disabled state for this field group.

**`default`** Form.disabled

___

###  label

• **label**: *string*

*Inherited from [IUseFieldGroupArgs](fieldgroup.iusefieldgroupargs.md).[label](fieldgroup.iusefieldgroupargs.md#label)*

*Overrides [IUseValidationArgs](usevalidation.iusevalidationargs.md).[label](usevalidation.iusevalidationargs.md#label)*

Message id of the label that will be displayed along the input.
If you don't want to use any i18n features you can pass a raw message instead.

___

###  name

• **name**: *string*

*Inherited from [IUseFieldGroupArgs](fieldgroup.iusefieldgroupargs.md).[name](fieldgroup.iusefieldgroupargs.md#name)*

Name of this input. Will be used as the unique identifier of this value.
**Must be unique inside its context (e.g. form wide or form group wide)!**

___

### `Optional` plaintext

• **plaintext**? : *undefined | false | true*

*Inherited from [IUseFieldGroupArgs](fieldgroup.iusefieldgroupargs.md).[plaintext](fieldgroup.iusefieldgroupargs.md#optional-plaintext)*

Overwrites the plaintext state for this field group.

**`default`** Form.plaintext

___

### `Optional` validators

• **validators**? : *[TValidator](../modules/validators.md#tvalidator)‹TFieldValue›[]*

*Inherited from [IUseFieldGroupArgs](fieldgroup.iusefieldgroupargs.md).[validators](fieldgroup.iusefieldgroupargs.md#optional-validators)*

Contains an array of functions that will validate this input. Those functions are called whenever
the value changes (on keypress, ...). They are called in order and whenever one fails the other ones
are not called. The validator function must return either undefined or a string containing the message
id of the validation error text.

___

### `Optional` values

• **values**? : *TFieldValue*

*Inherited from [IUseFieldGroupArgs](fieldgroup.iusefieldgroupargs.md).[values](fieldgroup.iusefieldgroupargs.md#optional-values)*

Overwrites the Form values for the child fields of this field group. Changing
this property will update all Field values, overwriting their default values
but also any value the user put in.

## Methods

###  render

▸ **render**(`params`: [IFieldGroupRenderParams](fieldgroup.ifieldgrouprenderparams.md)): *React.ReactNode*

Gets called to render its children (see render prop pattern).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`params` | [IFieldGroupRenderParams](fieldgroup.ifieldgrouprenderparams.md) | Contains the group state consisting of fullName, isValidating,valid, error which can be used to display those informations.  |

**Returns:** *React.ReactNode*
