---
id: "usefield.ifieldcomponentmeta"
title: "IFieldComponentMeta"
sidebar_label: "IFieldComponentMeta"
---

Meta informations about the current field state

## Hierarchy

  ↳ [IValidationState](usevalidation.ivalidationstate.md)

  ↳ **IFieldComponentMeta**

## Properties

###  error

• **error**: *[TFieldErrors](../modules/validators.md#tfielderrors)*

*Inherited from [IFieldGroupRenderParams](fieldgroup.ifieldgrouprenderparams.md).[error](fieldgroup.ifieldgrouprenderparams.md#error)*

Contains any errors if available

___

###  isRequired

• **isRequired**: *boolean*

*Inherited from [IFieldGroupRenderParams](fieldgroup.ifieldgrouprenderparams.md).[isRequired](fieldgroup.ifieldgrouprenderparams.md#isrequired)*

True, if the field is a required field
(has a required validator attached)

___

###  isValidating

• **isValidating**: *boolean*

*Inherited from [IFieldGroupRenderParams](fieldgroup.ifieldgrouprenderparams.md).[isValidating](fieldgroup.ifieldgrouprenderparams.md#isvalidating)*

True, if the field is currently validating
(asynchronous validation running in background)

___

###  plaintext

• **plaintext**: *boolean*

True if the field is in plaintext mode

___

###  stringFormatter

• **stringFormatter**: *[TSTringFormatter](../modules/stringformatter.md#tstringformatter)*

String formatter method

___

###  touched

• **touched**: *boolean*

True, if the user has changed the value

___

###  valid

• **valid**: *boolean*

*Inherited from [IFieldGroupRenderParams](fieldgroup.ifieldgrouprenderparams.md).[valid](fieldgroup.ifieldgrouprenderparams.md#valid)*

True, if all validators report a valid state
