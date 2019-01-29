/**
 * Copyright (c) 2018-present, Umweltbundesamt GmbH
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';

import { useFormContext } from '../FormContext';
import { IFormTextProps } from './FormText.types';

/**
 * Wrapper component for passing strings to the
 * context.stringFormatter method
 */
export const FormText: React.SFC<IFormTextProps> = ({ text, values }: IFormTextProps): JSX.Element | null => {
  if (text === '' || text === null) { return null; }

  const context = useFormContext();

  return (
    <React.Fragment>
      {context.stringFormatter(text, values)}
    </React.Fragment>
  );
};
FormText.displayName = 'FormText';
