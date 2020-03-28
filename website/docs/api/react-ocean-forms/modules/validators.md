---
id: "validators"
title: "validators"
sidebar_label: "validators"
---

Copyright (c) 2018-present, Umweltbundesamt GmbH

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.

## Index

### Enumerations

* [FieldErrorMessageId](../enums/validators.fielderrormessageid.md)

### Interfaces

* [IDefaultValidator](../interfaces/validators.idefaultvalidator.md)
* [IFieldErrorObject](../interfaces/validators.ifielderrorobject.md)

### Type aliases

* [TAsyncValidator](validators.md#tasyncvalidator)
* [TFieldError](validators.md#tfielderror)
* [TFieldErrors](validators.md#tfielderrors)
* [TValidator](validators.md#tvalidator)

### Functions

* [isDefaultValidator](validators.md#isdefaultvalidator)
* [isIFieldErrorObject](validators.md#isifielderrorobject)

### Object literals

* [validators](validators.md#const-validators)

## Type aliases

###  TAsyncValidator

Ƭ **TAsyncValidator**: *function*

Async validator method type

#### Type declaration:

▸ (`value`: TFieldValue | undefined, `context`: [IFormContext](../interfaces/formcontext.iformcontext.md), ...`args`: unknown[]): *Promise‹[TFieldError](validators.md#tfielderror)›*

**Parameters:**

Name | Type |
------ | ------ |
`value` | TFieldValue &#124; undefined |
`context` | [IFormContext](../interfaces/formcontext.iformcontext.md) |
`...args` | unknown[] |

___

###  TFieldError

Ƭ **TFieldError**: *undefined | string | [IFieldErrorObject](../interfaces/validators.ifielderrorobject.md)*

Possible return values of a validator

___

###  TFieldErrors

Ƭ **TFieldErrors**: *null | [IFieldErrorObject](../interfaces/validators.ifielderrorobject.md) | [IFieldErrorObject](../interfaces/validators.ifielderrorobject.md)[]*

Possible error states of a validated component

___

###  TValidator

Ƭ **TValidator**: *function*

Validator method type

#### Type declaration:

▸ (`value`: TFieldValue | undefined, `context`: [IFormContext](../interfaces/formcontext.iformcontext.md), ...`args`: unknown[]): *[TFieldError](validators.md#tfielderror)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | TFieldValue &#124; undefined |
`context` | [IFormContext](../interfaces/formcontext.iformcontext.md) |
`...args` | unknown[] |

## Functions

###  isDefaultValidator

▸ **isDefaultValidator**(`object`: any): *object is IDefaultValidator*

Returns true if the given object is a IDefaultValidator

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`object` | any | Function to test  |

**Returns:** *object is IDefaultValidator*

___

###  isIFieldErrorObject

▸ **isIFieldErrorObject**(`object`: any): *object is IFieldErrorObject*

Returns true if the given object implements
IFIeldErrorObject

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`object` | any | Object to test  |

**Returns:** *object is IFieldErrorObject*

## Object literals

### `Const` validators

### ▪ **validators**: *object*

###  alphaNumeric

• **alphaNumeric**: *alphaNumeric*

###  maxLength

• **maxLength**: *maxLength*

###  minLength

• **minLength**: *minLength*

###  required

• **required**: *required*

###  withAsyncParam

• **withAsyncParam**: *withAsyncParam*

###  withParam

• **withParam**: *withParam*
