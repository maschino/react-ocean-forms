---
id: "usevalidation"
title: "useValidation"
sidebar_label: "useValidation"
---

Copyright (c) 2019-present, Umweltbundesamt GmbH

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.

## Index

### Interfaces

* [IBasicValidationState](../interfaces/usevalidation.ibasicvalidationstate.md)
* [IUseValidationArgs](../interfaces/usevalidation.iusevalidationargs.md)
* [IUseValidationResult](../interfaces/usevalidation.iusevalidationresult.md)
* [IValidationArgs](../interfaces/usevalidation.ivalidationargs.md)
* [IValidationState](../interfaces/usevalidation.ivalidationstate.md)

### Type aliases

* [TResetMethod](usevalidation.md#tresetmethod)
* [TUpdateMethod](usevalidation.md#tupdatemethod)
* [TValidateMethod](usevalidation.md#tvalidatemethod)

### Functions

* [useValidation](usevalidation.md#usevalidation)

## Type aliases

###  TResetMethod

Ƭ **TResetMethod**: *function*

#### Type declaration:

▸ (): *void*

___

###  TUpdateMethod

Ƭ **TUpdateMethod**: *function*

Update validation state method

**`param`** Validation state overrides

#### Type declaration:

▸ (`state`: Partial‹[IBasicValidationState](../interfaces/usevalidation.ibasicvalidationstate.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`state` | Partial‹[IBasicValidationState](../interfaces/usevalidation.ibasicvalidationstate.md)› |

___

###  TValidateMethod

Ƭ **TValidateMethod**: *function*

Validation method

**`param`** Value to validate

**`param`** Optional validation args, @see IValidationArgs

#### Type declaration:

▸ (`value`: TFieldValue | undefined, `args?`: Partial‹[IValidationArgs](../interfaces/usevalidation.ivalidationargs.md)›): *Promise‹[IBasicValidationState](../interfaces/usevalidation.ibasicvalidationstate.md)›*

**Parameters:**

Name | Type |
------ | ------ |
`value` | TFieldValue &#124; undefined |
`args?` | Partial‹[IValidationArgs](../interfaces/usevalidation.ivalidationargs.md)› |

## Functions

###  useValidation

▸ **useValidation**<**TFieldValue**>(`args`: [IUseValidationArgs](../interfaces/usevalidation.iusevalidationargs.md)‹TFieldValue›): *[IUseValidationResult](../interfaces/usevalidation.iusevalidationresult.md)‹TFieldValue›*

**Type parameters:**

▪ **TFieldValue**

**Parameters:**

Name | Type |
------ | ------ |
`args` | [IUseValidationArgs](../interfaces/usevalidation.iusevalidationargs.md)‹TFieldValue› |

**Returns:** *[IUseValidationResult](../interfaces/usevalidation.iusevalidationresult.md)‹TFieldValue›*
