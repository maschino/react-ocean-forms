---
id: "formtext"
title: "FormText"
sidebar_label: "FormText"
---

Copyright (c) 2018-present, Umweltbundesamt GmbH

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.

## Index

### Interfaces

* [IFormTextProps](../interfaces/formtext.iformtextprops.md)

### Functions

* [FormText](formtext.md#const-formtext)

## Functions

### `Const` FormText

▸ **FormText**(`__namedParameters`: object): *null | Element‹›*

Wrapper for text output. It will use the Form.stringFormatter function to
output the message passed through the props. Best practice for custom input
component development is to pass every text output through the stringFormatter.
This enables the user of the form to add the react-ocean-forms-react-intl package
and get i18n support out of the box.

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`text` | null &#124; string |
`values` | undefined &#124; [IMessageValues](../interfaces/stringformatter.imessagevalues.md) |

**Returns:** *null | Element‹›*
