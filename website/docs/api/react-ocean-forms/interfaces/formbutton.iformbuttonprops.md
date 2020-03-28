---
id: "formbutton.iformbuttonprops"
title: "IFormButtonProps"
sidebar_label: "IFormButtonProps"
---

Props for the FormButton component

## Hierarchy

* **IFormButtonProps**

## Properties

### `Optional` component

• **component**? : *React.ReactType*

Can be used to render any other component other than the standard html button.

**`default`** button

___

### `Optional` disabled

• **disabled**? : *undefined | false | true*

True, if the button should be always disabled. If set to false
it will be still disabled if the form context is busy or disabled.

**`default`** false

___

### `Optional` submitArgs

• **submitArgs**? : *unknown*

Optional object that will be passed as the second parameter
to form.onSubmit if the button is of submit type.

___

### `Optional` type

• **type**? : *undefined | string*

Type of the button, either submit, reset or button.

**`default`** submit

## Methods

### `Optional` onClick

▸ **onClick**(`event`: MouseEvent): *void*

OnClick callback. Will be triggered after the form.onSubmit call.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | MouseEvent | event  |

**Returns:** *void*
