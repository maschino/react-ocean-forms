---
id: "withform"
title: "withForm"
sidebar_label: "withForm"
---

Copyright (c) 2018-present, Umweltbundesamt GmbH

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.

## Index

### Interfaces

* [IFormContextProps](../interfaces/withform.iformcontextprops.md)

### Functions

* [withForm](withform.md#const-withform)

## Functions

### `Const` withForm

▸ **withForm**<**TComp**, **TProps**>(`Component`: TComp): *React.ComponentType‹FormComponentProps‹TComp››*

High order component for consuming the form context

**`deprecated`** Deprecated in favour of `useFormContext` hook

**Type parameters:**

▪ **TComp**: *React.ComponentType‹TProps›*

▪ **TProps**: *[IFormContextProps](../interfaces/withform.iformcontextprops.md)*

**Parameters:**

Name | Type |
------ | ------ |
`Component` | TComp |

**Returns:** *React.ComponentType‹FormComponentProps‹TComp››*
