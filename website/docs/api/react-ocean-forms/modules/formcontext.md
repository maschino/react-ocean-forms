---
id: "formcontext"
title: "FormContext"
sidebar_label: "FormContext"
---

Copyright (c) 2018-present, Umweltbundesamt GmbH

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.

## Index

### Interfaces

* [IBaseFormContext](../interfaces/formcontext.ibaseformcontext.md)
* [IFieldValues](../interfaces/formcontext.ifieldvalues.md)
* [IFormContext](../interfaces/formcontext.iformcontext.md)

### Variables

* [FormContext](formcontext.md#const-formcontext)

## Variables

### `Const` FormContext

• **FormContext**: *Context‹undefined | [IFormContext](../interfaces/formcontext.iformcontext.md)‹[IFieldValues](../interfaces/formcontext.ifieldvalues.md)››* = React.createContext<IFormContext | undefined>(undefined)

Context for the communication between the form
and its fields.
