---
id: "usefield"
title: "useField"
sidebar_label: "useField"
---

Copyright (c) 2018-present, Umweltbundesamt GmbH

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.

## Index

### Interfaces

* [IBaseFieldProps](../interfaces/usefield.ibasefieldprops.md)
* [IFieldChangedEvent](../interfaces/usefield.ifieldchangedevent.md)
* [IFieldComponentFieldProps](../interfaces/usefield.ifieldcomponentfieldprops.md)
* [IFieldComponentMeta](../interfaces/usefield.ifieldcomponentmeta.md)
* [IUseFieldProps](../interfaces/usefield.iusefieldprops.md)
* [IUseFieldResult](../interfaces/usefield.iusefieldresult.md)
* [IUseFieldState](../interfaces/usefield.iusefieldstate.md)
* [IValueMeta](../interfaces/usefield.ivaluemeta.md)

### Type aliases

* [TBasicFieldValue](usefield.md#tbasicfieldvalue)
* [TValueCallback](usefield.md#tvaluecallback)

### Functions

* [useField](usefield.md#usefield)

## Type aliases

###  TBasicFieldValue

Ƭ **TBasicFieldValue**: *string | boolean | number | object | null | undefined*

Type that defines which values a field could hold

**`deprecated`** Please speficy the value types through type arguments

___

###  TValueCallback

Ƭ **TValueCallback**: *function*

Type definition for getDisplayValue and getSubmitValue callbacks

#### Type declaration:

▸ (`value`: TFieldValue | undefined, `meta`: [IValueMeta](../interfaces/usefield.ivaluemeta.md)): *TOutValue | undefined*

**Parameters:**

Name | Type |
------ | ------ |
`value` | TFieldValue &#124; undefined |
`meta` | [IValueMeta](../interfaces/usefield.ivaluemeta.md) |

## Functions

###  useField

▸ **useField**<**TDisplayValue**, **TSubmitValue**>(`props`: [IUseFieldProps](../interfaces/usefield.iusefieldprops.md)‹TDisplayValue, TSubmitValue›): *[IUseFieldResult](../interfaces/usefield.iusefieldresult.md)‹TDisplayValue›*

Hook for writing custom fields. Will handle the internal state
of the field, the validation and all communication with the
form context.

**Type parameters:**

▪ **TDisplayValue**

Type of the value that will be displayed (consumed by the displaying component)

▪ **TSubmitValue**

Type of the value that will be submitted to the form

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`props` | [IUseFieldProps](../interfaces/usefield.iusefieldprops.md)‹TDisplayValue, TSubmitValue› | Field props @see IUseFieldProps |

**Returns:** *[IUseFieldResult](../interfaces/usefield.iusefieldresult.md)‹TDisplayValue›*
