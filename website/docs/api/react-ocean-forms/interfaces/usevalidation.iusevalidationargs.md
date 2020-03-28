---
id: "usevalidation.iusevalidationargs"
title: "IUseValidationArgs"
sidebar_label: "IUseValidationArgs"
---

Properties of a component that is wrapped
by withValidation

## Type parameters

▪ **TFieldValue**

## Hierarchy

* **IUseValidationArgs**

  ↳ [IUseFieldGroupArgs](fieldgroup.iusefieldgroupargs.md)

  ↳ [IUseFieldProps](usefield.iusefieldprops.md)

## Properties

### `Optional` asyncValidationWait

• **asyncValidationWait**? : *undefined | number*

Wait time in ms that should pass after
the last user input before the async
validators will be triggered

**`default`** Form.asyncValidationWait

___

### `Optional` asyncValidators

• **asyncValidators**? : *[TAsyncValidator](../modules/validators.md#tasyncvalidator)‹TFieldValue›[]*

Contains an array of functions that must return a Promise. Those functions are called by default onBlur,
however this behaviour can be changed by setting asyncValidateOnChange on the Form. The Form will call
all async validators of a Field at the same time and will wait for the result of every one of them. If
one of them returns a string the field will be marked as invalid. Per default the form will wait for 400ms
before triggering any validation. This is put in place so the validation won't get triggered on every
keystroke of the user. The async validators will be called 400ms after the last value change.

___

###  label

• **label**: *string*

Message id of the label that will be displayed along the input. If you don't
want to use any i18n features you can pass a raw message instead.

___

###  name

• **name**: *string*

Name of this input. Will be used as the unique identifier of this value.
**Must be unique inside its context (e.g. form wide or form group wide)!**

___

### `Optional` validators

• **validators**? : *[TValidator](../modules/validators.md#tvalidator)‹TFieldValue›[]*

Contains an array of functions that will validate this input. Those functions are called whenever
the value changes (on keypress, ...). They are called in order and whenever one fails the other ones
are not called. The validator function must return either undefined or a string containing the message
id of the validation error text.
