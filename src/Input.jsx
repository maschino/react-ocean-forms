/**
 * Copyright (c) 2018-present, Umweltbundesamt GmbH
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';

import FieldLine from './FieldLine';
import { fieldMetaShape, fieldShape } from './shapes';

/**
 * Component for displaying bootstrap
 * form groups with an html input and
 * oForm support
 */
function Input(props) {
  const {
    field,
    type,
  } = props;

  return (
    <FieldLine {...props}>
      <input type={type} {...field} />
    </FieldLine>
  );
}

Input.defaultProps = {
  info: undefined,
  type: 'text',
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  info: PropTypes.string,
  type: PropTypes.string,
  meta: fieldMetaShape.isRequired,
  field: fieldShape.isRequired,
};

export default Input;
