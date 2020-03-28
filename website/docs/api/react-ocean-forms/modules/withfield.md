---
id: "withfield"
title: "withField"
sidebar_label: "withField"
---

Copyright (c) 2018-present, Umweltbundesamt GmbH

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.

## Index

### Interfaces

* [IFieldComponentProps](../interfaces/withfield.ifieldcomponentprops.md)

### Type aliases

* [IValidatedComponentProps](withfield.md#ivalidatedcomponentprops)

### Functions

* [withField](withfield.md#const-withfield)

## Type aliases

###  IValidatedComponentProps

Ƭ **IValidatedComponentProps**: *[IUseValidationArgs](../interfaces/usevalidation.iusevalidationargs.md)*

## Functions

### `Const` withField

▸ **withField**<**TComp**, **TProps**>(`component`: TComp): *React.ComponentType‹WrappedValidatedComponentProps‹TComp››*

Higher order component for validation

**`deprecated`** Deprecated in favour of `useField` hook

**Type parameters:**

▪ **TComp**: *React.ComponentType‹TProps›*

▪ **TProps**: *[IFieldComponentProps](../interfaces/withfield.ifieldcomponentprops.md)*

**Parameters:**

Name | Type |
------ | ------ |
`component` | TComp |

**Returns:** *React.ComponentType‹WrappedValidatedComponentProps‹TComp››*
