---
id: "usevalidation.ivalidationstate"
title: "IValidationState"
sidebar_label: "IValidationState"
---

## Hierarchy

* [IBasicValidationState](usevalidation.ibasicvalidationstate.md)

  ↳ **IValidationState**

  ↳ [IFieldGroupRenderParams](fieldgroup.ifieldgrouprenderparams.md)

  ↳ [IFieldComponentMeta](usefield.ifieldcomponentmeta.md)

## Properties

###  error

• **error**: *[TFieldErrors](../modules/validators.md#tfielderrors)*

*Inherited from [IFieldGroupRenderParams](fieldgroup.ifieldgrouprenderparams.md).[error](fieldgroup.ifieldgrouprenderparams.md#error)*

Contains any errors if available

___

###  isRequired

• **isRequired**: *boolean*

True, if the field is a required field
(has a required validator attached)

___

###  isValidating

• **isValidating**: *boolean*

*Inherited from [IFieldGroupRenderParams](fieldgroup.ifieldgrouprenderparams.md).[isValidating](fieldgroup.ifieldgrouprenderparams.md#isvalidating)*

True, if the field is currently validating
(asynchronous validation running in background)

___

###  valid

• **valid**: *boolean*

*Inherited from [IFieldGroupRenderParams](fieldgroup.ifieldgrouprenderparams.md).[valid](fieldgroup.ifieldgrouprenderparams.md#valid)*

True, if all validators report a valid state
