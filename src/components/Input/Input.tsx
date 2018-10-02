/**
 * Copyright (c) 2018-present, Umweltbundesamt GmbH
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

import { FieldLine } from '../FieldLine';
import { IInputProps } from './Input.types';

/**
 * Component for displaying bootstrap
 * form groups with an html input and
 * oForm support
 */
export class Input extends React.Component<IInputProps> {
  public static displayName: string = 'Input';

  // tslint:disable-next-line:typedef
  public static defaultProps = {
    type: 'text',
    // TODO: Without this, the usage of Input
    // inside of a Field would throw a type error..
    label: undefined,
  };

  public render(): JSX.Element {
    const {
      field,
      type,
      meta,
    } = this.props;

    const fieldValue = field.value;
    if (typeof fieldValue !== 'string' && fieldValue !== undefined) {
      throw new Error(
        'Incompatible field value supplied for input component '
        + `${field.id}. Only values with type string or undefined are allowed.`,
      );
    }

    return (
      <FieldLine {...this.props}>
        {meta.plaintext ? field.value : <input type={type} {...field} value={fieldValue} />}
      </FieldLine>
    );
  }
}