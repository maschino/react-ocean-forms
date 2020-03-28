---
id: "form"
title: "Form"
sidebar_label: "Form"
---

Copyright (c) 2018-present, Umweltbundesamt GmbH

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.

## Index

### Interfaces

* [IFormProps](../interfaces/form.iformprops.md)

### Type aliases

* [TFormValidationResult](form.md#tformvalidationresult)

### Functions

* [Form](form.md#const-form)

## Type aliases

###  TFormValidationResult

Ƭ **TFormValidationResult**: *object | null*

## Functions

### `Const` Form

▸ **Form**<**TFieldValues**, **TSubmitArgs**>(`props`: React.PropsWithChildren‹[IFormProps](../interfaces/form.iformprops.md)‹TFieldValues, TSubmitArgs››): *ReactElement | null*

The form is the main component. It glues together all the Form logic through the context api.
All form specific components must be wrapped by a form.

**Type parameters:**

▪ **TFieldValues**: *object*

▪ **TSubmitArgs**

**Parameters:**

Name | Type |
------ | ------ |
`props` | React.PropsWithChildren‹[IFormProps](../interfaces/form.iformprops.md)‹TFieldValues, TSubmitArgs›› |

**Returns:** *ReactElement | null*
