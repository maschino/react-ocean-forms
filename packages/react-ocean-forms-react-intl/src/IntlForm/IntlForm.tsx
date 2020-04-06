/**
 * Copyright (c) 2018-present, Umweltbundesamt GmbH
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @packageDocumentation
 * @module IntlForm
 * @category Components
 * @preferred
 */

import React, { useCallback } from 'react';

import { injectIntl } from 'react-intl';
import { Form, IMessageValues } from 'react-ocean-forms';

import { IIntlFormProps } from './IntlForm.types';

/**
 * React-intl wrapper for the OceanJS
 * Forms component.
 */
const BaseIntlForm: React.FC<IIntlFormProps> = (props) => {
  const { intl, children, ...rest } = props;

  const formatIntlString = useCallback(
    (id: string, values?: IMessageValues): string => {
      // Return the id if no valid id was given
      if (id === null || id === undefined || id === '') {
        return id;
      }

      return intl.formatMessage({ id }, values);
    },
    [intl]
  );

  return (
    <Form {...rest} formatString={formatIntlString}>
      {children}
    </Form>
  );
};

export const IntlForm = injectIntl(BaseIntlForm);
