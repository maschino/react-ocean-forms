---
id: "usevalidation.iusevalidationresult"
title: "IUseValidationResult"
sidebar_label: "IUseValidationResult"
---

Result of the useValidation hook

## Type parameters

▪ **TFieldValue**

## Hierarchy

* **IUseValidationResult**

## Properties

###  resetValidation

• **resetValidation**: *[TResetMethod](../modules/usevalidation.md#tresetmethod)*

Resets the validation to default

___

###  updateValidationState

• **updateValidationState**: *[TUpdateMethod](../modules/usevalidation.md#tupdatemethod)*

Overwrites the validation state

**`see`** TUpdateMethod

___

###  validate

• **validate**: *[TValidateMethod](../modules/usevalidation.md#tvalidatemethod)‹TFieldValue›*

Triggers the validation

**`see`** TValidateMethod

___

###  validationState

• **validationState**: *[IValidationState](usevalidation.ivalidationstate.md)*

Current validation state
