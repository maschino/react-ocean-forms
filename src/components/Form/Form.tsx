/**
 * Copyright (c) 2018-present, Umweltbundesamt GmbH
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import * as React from 'react';

import { getDeepValue, parseValidationError } from '../../utils';
import { stringFormatter as defaultStringFormatter } from '../../utils/stringFormatter';
import { FormContext, IBaseFormContext, IFieldState, IFieldValues, IFormContext, TFormEventListener } from '../FormContext';
import { IFormProps } from './Form.types';

interface IFormState<TFieldValues = IFieldValues> {
  context: IBaseFormContext<TFieldValues>;
}

interface IEventListenerContainer {
  [s: string]: TFormEventListener;
}

interface IFieldContainer {
  [s: string]: IFieldState;
}

/**
 * Wrapper for managed forms
 */
export class Form<TFieldValues = IFieldValues, TSubmitArgs = unknown>
extends React.Component<IFormProps<TFieldValues, TSubmitArgs>, IFormState<TFieldValues>> {
  public static displayName: string = 'Form';

  // tslint:disable-next-line:typedef
  public static defaultProps = {
    defaultValues: {},
    asyncValidationWait: 400,
    asyncValidateOnChange: false,
    formatString: defaultStringFormatter,
    disabled: false,
    plaintext: false,
  };

  private fields: IFieldContainer = {};
  private eventListeners: IEventListenerContainer = {};

  constructor(props: IFormProps<TFieldValues>) {
    super(props);

    this.state = {
      context: {
        fieldPrefix: null,

        registerField: this.registerField,
        unregisterField: this.unregisterField,
        notifyFieldEvent: this.notifyFieldEvent,

        registerListener: (name: string, callback: TFormEventListener): void => { this.eventListeners[name] = callback; },
        unregisterListener: (name: string): void => { delete this.eventListeners[name]; },

        getFieldState: this.getFieldState,
        getValues: this.getValues,

        submit: this.submit,

        busy: false,
      },
    };
  }

  /**
   * Returns the current state of the given field
   * @param name Field name
   * @returns Current field state or default field state
   */
  private getFieldState = (name: string): IFieldState => {
    return this.fields[name];
  }

  /**
   * Generates and returns an object that contains
   * all values from all the fields.
   * @returns Current values in form of { name: value, name2: value2, ... }
   */
  private getValues = (): TFieldValues => {
    const fields = Object.entries(this.fields);
    const values: IFieldValues = {};

    fields.forEach(([name, state]) => {
      if (state.isGroup === true) { return; }

      const nameParts = name.split('.');
      let valueRef = values;

      nameParts.forEach((key, index) => {
        if (nameParts.length === 1 || index === nameParts.length - 1) {
          valueRef[key] = state.getValue();
        } else {
          if (valueRef[key] === undefined) { valueRef[key] = {}; }
          valueRef = valueRef[key] as IFieldValues;
        }
      });
    });

    return (values as unknown) as TFieldValues;
  }

  /**
   * Gets called when a field triggers an event
   * @param name Field name
   * @param event Event name
   * @param args Event args
   */
  private notifyFieldEvent = (name: string, event: string, args?: unknown): void => {
    if (event === 'validation') {
      const { [name]: { label } } = this.fields;
      this.notifyListeners(name, event, { ...args, label });
    } else {
      this.notifyListeners(name, event, args);
    }
  }

  /**
   * Notifies the event listeners about an event
   * @param name Field name
   * @param event Event name
   * @param args Event args
   */
  private notifyListeners(name: string, event: string, args?: unknown): void {
    const listeners = Object.entries(this.eventListeners);
    listeners.forEach(([, callback]) => {
      callback(name, event, args);
    });
  }

  /**
   * Handles the submit event of the form - prevents
   * the default and runs the submit logic
   * @param event Event object
   */
  private handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    void this.submit();
  }

  /**
   * Submits the form - triggers any validations if needed
   * and raises the onFormSubmit prop callback if the
   * form is currently valid.
   * @param submitArgs Arguments that will be passed
   * to the onSubmit callback
   */
  private submit = async (submitArgs?: TSubmitArgs): Promise<void> => {
    this.updateBusyState(true);

    // Iterate through all fields and validate them
    // if needed.
    const fields = Object.entries(this.fields);
    const validations = fields.map(async ([, state]) => state.validate({
      checkAsync: true,
      immediateAsync: true,
    }));

    const validationStates = await Promise.all(validations);

    // Check if all fields are valid
    const allValid = validationStates.every(state => state.valid === true);
    if (allValid === false) {
      this.notifyFieldEvent('_form', 'submit-invalid');
      this.updateBusyState(false);

      return;
    }

    // Call the form wide validation
    const formValid = this.triggerFormValidation();
    if (formValid === false) {
      this.notifyFieldEvent('_form', 'submit-invalid');
      this.updateBusyState(false);

      return;
    }

    // Await the result from callOnSubmit
    const callOnSubmitResult = this.callOnSubmit(submitArgs);
    const { resetOnSubmit } = this.props;

    // Make sure the state is cleaned up before
    const cleanup = (resetForm: boolean | undefined): void => {
      this.updateBusyState(false);
      if (resetForm) { this.reset(); }
    };
    if (callOnSubmitResult instanceof Promise) {
      callOnSubmitResult.then(() => cleanup(resetOnSubmit));
    } else {
      cleanup(resetOnSubmit);
    }
  }

  /**
   * Updates the busy state in the form context
   * @param busy Busy state
   */
  private updateBusyState(busy: boolean): void {
    this.setState(prevState => ({
      context: {
        ...prevState.context,
        busy,
      },
    }));
  }

  /**
   * Triggers the form wide validation callback if given
   * @returns Validation state of the form
   */
  private triggerFormValidation(): boolean {
    const { onValidate } = this.props;
    if (onValidate === undefined) { return true; }

    const values = this.getValues();
    const result = onValidate(values);

    // If the callback returned null then the form is valid
    if (result === null) { return true; }

    // Otherwise parse the result object and update the
    // field states.
    const fields = Object.entries(this.fields);

    fields.forEach(([name, state]) => {
      const fieldError = parseValidationError(name, getDeepValue(name, result));
      const isValid = typeof fieldError !== 'object';

      if (!isValid) {
        state.updateValidation({
          valid: false,
          error: fieldError,
        });
      }
    });

    return false;
  }

  /**
   * Gathers all the data and calls the onSubmit callback
   * if provided.
   * @param submitArgs Arguments that will be passed
   * to the onSubmit callback
   */
  private callOnSubmit(submitArgs?: TSubmitArgs): void | Promise<void> {
    const { onSubmit } = this.props;
    if (onSubmit === undefined) { return; }

    const values = this.getValues();

    return onSubmit(values, submitArgs);
  }

  /**
   * Handles the reset event of the form - prevents
   * the default and sets the state of all fields back
   * to the default state.
   * @param event Event object
   */
  private handleReset = (event: React.FormEvent): void => {
    event.preventDefault();
    this.reset();
  }

  /**
   * Sets the state of all fields back
   * to the default state.
   */
  private reset = (): void => {
    const fields = Object.entries(this.fields);
    fields.forEach(([, state]) => {
      state.reset();
    });

    const { onReset } = this.props;
    if (onReset !== undefined) {
      onReset();
    }
  }

  /**
   * Registers a new field to the form.
   * @param name Field name
   * @param fieldState Field state
   */
  private registerField = (name: string, fieldState: IFieldState): void => {
    if (typeof name !== 'string' || name.length === 0) {
      throw new Error('[Form] registerField: name is required');
    }

    if (typeof fieldState !== 'object') {
      throw new Error('[Form] registerField: field state is required');
    }

    if (
      typeof fieldState.label !== 'string'
      || typeof fieldState.validate !== 'function'
      || typeof fieldState.updateValidation !== 'function'
      || typeof fieldState.reset !== 'function'
      || typeof fieldState.getValue !== 'function'
    ) {
      throw new Error('[Form] registerField: invalid field state given');
    }

    this.fields[name] = fieldState;
  }

  /**
   * Unregisters a field from the form.
   * @param name Field name
   */
  private unregisterField = (name: string): void => {
    this.notifyListeners(name, 'validation', {
      label: this.fields[name].label,
      valid: true,
    });
    delete this.fields[name];
  }

  /**
   * Combines the local form context with
   * the values from the props to form the
   * full form context passed to the form
   * components.
   */
  private prepareFormContext(): IFormContext<TFieldValues> {
    const { context } = this.state;
    const {
      defaultValues,
      values,
      asyncValidateOnChange,
      asyncValidationWait,
      formatString: stringFormatter,
      disabled,
      plaintext,
    } = this.props;

    return {
      ...context,
      defaultValues,
      values,
      asyncValidationWait,
      stringFormatter,
      disabled,
      plaintext,
      asyncValidateOnChange: asyncValidateOnChange,
    };
  }

  /**
   * Renders the form and wraps all its children
   * in a FormContext provider and a html form.
   */
  // tslint:disable-next-line:member-ordering
  public render(): JSX.Element {
    const {
      children,
      className,
      plaintext,
    } = this.props;

    const context = this.prepareFormContext();

    let formClass = className === undefined ? '' : className;
    if (plaintext) { formClass = `${formClass} plaintext`; }

    // tslint:disable-next-line:naming-convention
    const TypedFormContext = (FormContext as unknown) as React.Context<IFormContext<TFieldValues | undefined>>;

    return (
      <TypedFormContext.Provider value={context}>
        <form className={formClass} onSubmit={this.handleSubmit} onReset={this.handleReset}>
          {children}
        </form>
      </TypedFormContext.Provider>
    );
  }
}
