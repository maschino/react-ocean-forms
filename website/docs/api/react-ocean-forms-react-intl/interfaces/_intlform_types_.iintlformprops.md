---
id: "_intlform_types_.iintlformprops"
title: "IIntlFormProps"
sidebar_label: "IIntlFormProps"
---

Props for the IntlForm component

## Type parameters

▪ **TFieldValues**

▪ **TSubmitArgs**

## Hierarchy

* IFormProps‹object, unknown› & object

* InjectedIntlProps

  ↳ **IIntlFormProps**

## Properties

### `Optional` asyncValidateOnChange

• **asyncValidateOnChange**? : *undefined | false | true*

*Inherited from [IIntlFormProps](_intlform_types_.iintlformprops.md).[asyncValidateOnChange](_intlform_types_.iintlformprops.md#optional-asyncvalidateonchange)*

If set to true the form will trigger asynchronous validation on
Fields whenever they change (e.g. on key press). Default behaviour
is that the fields will only async validate when they loose focus.
Can be overriden per field.

**`default`** false

___

### `Optional` asyncValidationWait

• **asyncValidationWait**? : *undefined | number*

*Inherited from [IIntlFormProps](_intlform_types_.iintlformprops.md).[asyncValidationWait](_intlform_types_.iintlformprops.md#optional-asyncvalidationwait)*

Configures the wait time before the async validators will be called.
Per default the form will call the async validators only 400ms after
the last value change. Can be overriden per field.

**`default`** 400

___

### `Optional` busy

• **busy**? : *undefined | true*

*Inherited from [IIntlFormProps](_intlform_types_.iintlformprops.md).[busy](_intlform_types_.iintlformprops.md#optional-busy)*

If set to true, the form will be forced into a busy state and thus disabling
any form buttons.

**`default`** false

___

### `Optional` children

• **children**? : *ReactNode*

*Inherited from __type.children*

___

### `Optional` className

• **className**? : *undefined | string*

*Inherited from [IIntlFormProps](_intlform_types_.iintlformprops.md).[className](_intlform_types_.iintlformprops.md#optional-classname)*

Sets the className of the html form.

___

### `Optional` defaultValues

• **defaultValues**? : *Partial‹TFieldValues›*

*Inherited from [IIntlFormProps](_intlform_types_.iintlformprops.md).[defaultValues](_intlform_types_.iintlformprops.md#optional-defaultvalues)*

Contains the default values of the form. Those values will be
put into the according fields when the form initializes. Those
values will be put into the according fields when the form initializes.

___

### `Optional` disabled

• **disabled**? : *undefined | false | true*

*Inherited from [IIntlFormProps](_intlform_types_.iintlformprops.md).[disabled](_intlform_types_.iintlformprops.md#optional-disabled)*

If set to true the form will disable all Fields and FormButtons.

**`default`** false

___

### `Optional` formatString

• **formatString**? : *TSTringFormatter*

*Inherited from [IIntlFormProps](_intlform_types_.iintlformprops.md).[formatString](_intlform_types_.iintlformprops.md#optional-formatstring)*

If set every text output will be put through this function.
Per default an internal implementation is used.

___

###  intl

• **intl**: *InjectedIntl*

*Inherited from [IIntlFormProps](_intlform_types_.iintlformprops.md).[intl](_intlform_types_.iintlformprops.md#intl)*

___

### `Optional` plaintext

• **plaintext**? : *undefined | false | true*

*Inherited from [IIntlFormProps](_intlform_types_.iintlformprops.md).[plaintext](_intlform_types_.iintlformprops.md#optional-plaintext)*

If set to true, all the fields will display only text instead of an
input element. This is useful to re-use Fields in a check page.

**`default`** false

___

### `Optional` resetOnSubmit

• **resetOnSubmit**? : *undefined | false | true*

*Inherited from [IIntlFormProps](_intlform_types_.iintlformprops.md).[resetOnSubmit](_intlform_types_.iintlformprops.md#optional-resetonsubmit)*

If set to true, all fields will be reset on an successful form submit

**`default`** false

___

### `Optional` values

• **values**? : *Partial‹TFieldValues›*

*Inherited from [IIntlFormProps](_intlform_types_.iintlformprops.md).[values](_intlform_types_.iintlformprops.md#optional-values)*

Contains the values of the form. Changing this property will
update all Field values, overwriting their default values but also
any value the user put in.

## Methods

### `Optional` onReset

▸ **onReset**(): *void*

*Inherited from [IIntlFormProps](_intlform_types_.iintlformprops.md).[onReset](_intlform_types_.iintlformprops.md#optional-onreset)*

Triggered when the form has been resetted by the user.

**Returns:** *void*

___

### `Optional` onSubmit

▸ **onSubmit**(`values`: TFieldValues, `submitArgs?`: TSubmitArgs): *Promise‹void› | void*

*Inherited from [IIntlFormProps](_intlform_types_.iintlformprops.md).[onSubmit](_intlform_types_.iintlformprops.md#optional-onsubmit)*

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

▸ **onValidate**(`values`: TFieldValues): *TFormValidationResult*

*Inherited from [IIntlFormProps](_intlform_types_.iintlformprops.md).[onValidate](_intlform_types_.iintlformprops.md#optional-onvalidate)*

Triggered after all field validations have been successfull. Provides the current
values end expects an error object with the field names as properties and the errors
inside those properties.

**`returns:`** should return null if the values are valid, otherwise an error object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`values` | TFieldValues | Contains the form values. The name of the fields are used as property names for the values object. FieldGroups result in a nested object. |

**Returns:** *TFormValidationResult*
