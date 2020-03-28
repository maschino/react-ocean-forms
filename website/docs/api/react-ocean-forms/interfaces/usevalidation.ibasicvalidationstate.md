---
id: "usevalidation.ibasicvalidationstate"
title: "IBasicValidationState"
sidebar_label: "IBasicValidationState"
---

## Hierarchy

* **IBasicValidationState**

  ↳ [IValidationState](usevalidation.ivalidationstate.md)

## Properties

###  error

• **error**: *[TFieldErrors](../modules/validators.md#tfielderrors)*

Contains any errors if available

___

###  isValidating

• **isValidating**: *boolean*

True, if the field is currently validating
(asynchronous validation running in background)

___

###  valid

• **valid**: *boolean*

True, if all validators report a valid state
