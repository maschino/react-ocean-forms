/**
 * Copyright (c) 2018-present, Umweltbundesamt GmbH
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import { FormText } from 'react-ocean-forms';
import { FormFeedback } from 'reactstrap';

import { IFieldErrorProps } from './FieldError.types';

/**
 * Component for displaying bootstrap
 * form feedbacks if there are any errors
 */
export const FieldError: React.FC<IFieldErrorProps> = (props) => {
  const { id, invalid, error } = props;

  // If the field isn't invalid do nothing
  if (invalid !== true || error === null) {
    return null;
  }

  // Error could be either an string or an array of strings
  const errorArray = !Array.isArray(error) ? [error] : error;
  const errors = errorArray.map((item) => (
    <FormFeedback key={`${id}_${item.message_id}`}>
      <FormText text={item.message_id} values={item.params} />
    </FormFeedback>
  ));

  return <>{errors}</>;
};
