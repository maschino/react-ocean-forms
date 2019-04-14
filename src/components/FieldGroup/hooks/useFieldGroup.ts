import { useCallback, useMemo } from 'react';

import { useFormContext, useValidation, IValidationArgs, IBasicValidationState } from '../../../hooks';
import { useFullName, useFieldRegistration } from '../../../hooks/internal';
import { IFieldValues, IFormContext } from '../../FormContext';

import { getGroupValue } from './useFieldGroup.utils';
import { IUseFieldGroupArgs, IUseFieldGroupResult } from './useFieldGroup.types';

export function useFieldGroup(props: IUseFieldGroupArgs): IUseFieldGroupResult {
  const formContext = useFormContext();

  const {
    name,
    label,
    defaultValues,
    values,
    disabled = formContext.disabled,
    plaintext = formContext.plaintext,
    asyncValidateOnChange = formContext.asyncValidateOnChange,
  } = props;

  const fullName = useFullName(name);
  const { validationState, validate, resetValidation, updateValidationState } = useValidation(props);

  /**
   * Triggers the validation of the group
   */
  const validateGroup = useCallback(
    (args?: Partial<IValidationArgs>): Promise<IBasicValidationState> => {
      const groupValue = getGroupValue(formContext, fullName);
      return validate(groupValue, args);
    },
    [formContext, fullName, validate],
  );

  // Register the group in the formContext, so the group
  // validation can be called on form submit.
  useFieldRegistration(
    fullName,
    label,
    true,
    updateValidationState,
    validateGroup,
    resetValidation,
    useCallback(() => ({}), []),
  );

  /**
   * Listens to child field events, triggers validation if
   * needed and passes them to the higher context
   * @param name Field name
   * @param event Event name
   * @param args Event args
   */
  const notifyFieldEvent = useCallback(
    (name: string, event: string, args?: unknown): void => {
      formContext.notifyFieldEvent(name, event, args);

      if (event !== 'change' && event !== 'blur') { return; }

      if (event === 'change') {
        const localName = name.substring(fullName.length + 1);

        const currentGroupValue = getGroupValue(formContext, fullName);
        const intermediateGroupValue = {
          ...(currentGroupValue === undefined ? { } : currentGroupValue),
          ...{
            // Override the value of the event sender, because
            // the Field didn't update its state yet, making the
            // Form.getValues() returning an old Field value.
            [localName]: args,
          },
        };

        void validate(
          intermediateGroupValue as IFieldValues,
          { checkAsync: asyncValidateOnChange },
        );
      } else if (!asyncValidateOnChange) {
        void validate(getGroupValue(formContext, fullName));
      }
    },
    [asyncValidateOnChange, formContext, fullName, validate],
  );

  const subContext: IFormContext = useMemo(() => ({
    ...formContext,
    fieldPrefix: fullName,
    notifyFieldEvent,
    disabled,
    plaintext,
    defaultValues: defaultValues === undefined ? formContext.defaultValues : { ...formContext.defaultValues, ... { [fullName]: defaultValues }},
    values: values === undefined ? formContext.values : { ...formContext.values, ... { [fullName]: values }},
  }), [defaultValues, disabled, formContext, fullName, notifyFieldEvent, plaintext, values]);

  const groupState = useMemo(
    () => ({
      fullName,
      isValidating: validationState.isValidating,
      isRequired: validationState.isRequired,
      valid: validationState.valid,
      error: validationState.error,
    }),
    [
      fullName,
      validationState,
    ],
  );

  return {
    groupFormContext: subContext,
    renderParams: groupState,
  };
}
