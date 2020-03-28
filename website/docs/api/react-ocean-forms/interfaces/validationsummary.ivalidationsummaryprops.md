---
id: "validationsummary.ivalidationsummaryprops"
title: "IValidationSummaryProps"
sidebar_label: "IValidationSummaryProps"
---

Properties for the ValidationSummary

## Hierarchy

* **IValidationSummaryProps**

## Properties

### `Optional` disableFocusOnSubmit

• **disableFocusOnSubmit**? : *undefined | false | true*

If set to true the validation summary will stop automatically scrolling
to itself when the user clicks on a submit button and the form is invalid.

**`default`** false

___

###  id

• **id**: *string*

Id of this input. Will be used as the unique identifier of the div.
**Must be unique form wide!**

___

### `Optional` title

• **title**? : *undefined | string*

Message that will be used as the title, wrapped in a h4.

## Methods

### `Optional` render

▸ **render**(`children`: React.ReactNode): *ReactElement | null*

Optional function that can be used to customize the ValidationSummary rendering.
Note: This function will only be called when there are errors to be displayed.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`children` | React.ReactNode | Validation summary content (header + rendered field errors)  |

**Returns:** *ReactElement | null*

___

### `Optional` renderFieldError

▸ **renderFieldError**(`id`: string, `fieldName`: string, `errors`: React.ReactNode, `linkCallback`: React.MouseEventHandler): *React.ReactNode*

Optional function that can be used to customize the output of each error.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | Id of the failing field |
`fieldName` | string | Display name of the failing field |
`errors` | React.ReactNode | Object / Array of objects with the rendered error messages |
`linkCallback` | React.MouseEventHandler | Function that should be called on click, will focus on the input element.  |

**Returns:** *React.ReactNode*
