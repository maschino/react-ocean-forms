---
id: "fieldgroup"
title: "FieldGroup"
sidebar_label: "FieldGroup"
---

Copyright (c) 2018-present, Umweltbundesamt GmbH

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.

## Index

### Interfaces

* [IFieldGroupProps](../interfaces/fieldgroup.ifieldgroupprops.md)
* [IFieldGroupRenderParams](../interfaces/fieldgroup.ifieldgrouprenderparams.md)
* [IUseFieldGroupArgs](../interfaces/fieldgroup.iusefieldgroupargs.md)
* [IUseFieldGroupResult](../interfaces/fieldgroup.iusefieldgroupresult.md)

### Functions

* [FieldGroup](fieldgroup.md#const-fieldgroup)

## Functions

### `Const` FieldGroup

▸ **FieldGroup**<**TFieldValues**>(`props`: React.PropsWithChildren‹[IFieldGroupProps](../interfaces/fieldgroup.ifieldgroupprops.md)‹TFieldValues››): *ReactElement | null*

Defines a collection of fields. It combines its values to a
sub-object and provides the possibility to attach validators to the group.

**Type parameters:**

▪ **TFieldValues**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`props` | React.PropsWithChildren‹[IFieldGroupProps](../interfaces/fieldgroup.ifieldgroupprops.md)‹TFieldValues›› |

**Returns:** *ReactElement | null*
