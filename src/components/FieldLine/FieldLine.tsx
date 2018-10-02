/**
 * Copyright (c) 2018-present, Umweltbundesamt GmbH
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

import { TValidator, validators as defaultValidators } from '../../validators';
import { FieldError } from '../FieldError';
import { FormText } from '../FormText';
import { IFieldLineProps } from './FieldLine.types';

/**
 * Create a required *
 * @param validators Validator array
 */
function createRequiredMarker(validators?: TValidator[]): JSX.Element | null {
  if (Array.isArray(validators) && validators.includes(defaultValidators.required)) {
    return <span className="field-required"> *</span>;
  }

  return null;
}

/**
 * Component for displaying bootstrap
 * form groups with any children
 */
export const FieldLine: React.SFC<IFieldLineProps> = (props: IFieldLineProps): JSX.Element => {
  const {
    field,
    meta,
    label,
    children,
    validators,
  } = props;

  const groupClass = meta.valid ? 'field-group' : 'field-group is-invalid';

  return (
    <div className={groupClass}>
      <label htmlFor={field.id} className="text-right">
        <FormText text={label} />
        {createRequiredMarker(validators)}
      </label>
      <div className="input-container">
        {children}
        <FieldError
          id={`${field.id}_errors`}
          invalid={!meta.valid}
          error={meta.error}
          stringFormatter={meta.stringFormatter}
        />
      </div>
    </div>
  );
};

FieldLine.displayName = 'FieldLine';