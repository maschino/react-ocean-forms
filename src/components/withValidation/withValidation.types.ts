/**
 * Copyright (c) 2018-present, Umweltbundesamt GmbH
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { TAsyncValidator, TFieldErrors, TValidator } from '../../validators';
import { TFieldValue } from '../Field';
import { IFormContext } from '../FormContext';
import { IFormContextProps } from '../withForm';

/**
 * Properties of a component that is wrapped
 * by withValidation
 */
export interface IValidationWrapperProps extends IValidatedComponentProps, IFormContextProps {
  /**
   * Render prop
   */
  render(fullName: string, validation: IValidationProp, context: IFormContext): JSX.Element;
}

/**
 * Properties of a component that is wrapped
 * by withValidation
 */
export interface IValidatedComponentProps {
  /**
   * Field name
   */
  name: string;
  /**
   * Synchronous validators
   */
  validators?: TValidator[];
  /**
   * Asynchronous validators
   */
  asyncValidators?: TAsyncValidator[];
  /**
   * Wait time in ms that should pass after
   * the last user input before the async
   * validators will be triggered
   */
  asyncValidationWait?: number;
}

/**
 * Internal state of the validated component
 */
export interface IValidationState {
  /**
   * True, if the field is currently validating
   * (asynchronous validation running in background)
   */
  isValidating: boolean;
  /**
   * True, if all validators report a valid state
   */
  valid: boolean;
  /**
   * Contains any errors if available
   */
  error: TFieldErrors;
}

/**
 * Interface with properties describing the current
 * validation state and offering interfaces for
 * various validation tasks
 */
export interface IValidationProp extends IValidationState {
  /**
   * Triggers the validation of the field
   * @param value Field value
   * @param args Validation args @see IValidationArgs
   */
  validate(value: TFieldValue, args?: Partial<IValidationArgs>): Promise<IValidationState>;
  /**
   * Resets the validation state
   */
  reset(): void;
  /**
   * Forces a new validation state on this Field
   * @param state New validation state
   */
  update(state: Partial<IValidationState>): void;
}

/**
 * Base interface for consumers of withValidation props
 */
export interface IValidationProps extends IFormContextProps {
  /**
   * Full Name of the component
   * (context.fieldPrefix + '.' + fieldName)
   */
  fullName: string;
  /**
   * Validation properties, describes the current
   * validation state of the component
   */
  validation: IValidationProp;
}

/**
 * Arguments for the validate method
 */
export interface IValidationArgs {
  /**
   * True, if the async validators should
   * be triggered as well, otherwise only
   * the sync validators are triggered
   *
   * Default: true
   */
  checkAsync: boolean;
  /**
   * True, if the async validators should
   * be triggered without any delay
   *
   * Default: false
   */
  immediateAsync: boolean;
}