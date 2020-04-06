import React from 'react';

import { render } from '@testing-library/react';

import { FieldError } from './FieldError';
import { Form } from '../Form';

describe('<FieldError />', () => {
  it('should do nothing if invalid is false', () => {
    const { asFragment } = render(
      <Form>
        <FieldError id="unitError" invalid={false} error={null} />
      </Form>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  const errorId = 'foo';
  const errorParams = { foo: 'bar' };

  it('should render an error', () => {
    const { getByText } = render(
      <Form>
        <FieldError
          id="unitError"
          invalid
          error={{
            message_id: errorId,
            params: errorParams,
          }}
        />
      </Form>
    );

    expect(getByText('foo')).toBeVisible();
  });

  it('should correctly use the stringFormatter', () => {
    const mockStringFormatter = jest.fn();

    render(
      <Form formatString={mockStringFormatter}>
        <FieldError
          id="unitError"
          invalid
          error={{
            message_id: errorId,
            params: errorParams,
          }}
        />
      </Form>
    );

    expect(mockStringFormatter).toHaveBeenCalledTimes(1);
    expect(mockStringFormatter).toHaveBeenCalledWith(errorId, errorParams);
  });

  it('should render multiple errors', () => {
    const { getByText } = render(
      <Form>
        <FieldError
          id="unitError"
          invalid
          error={[
            {
              message_id: errorId,
              params: errorParams,
            },
            { message_id: 'foo2', params: {} },
          ]}
        />
      </Form>
    );

    expect(getByText('foo')).toBeVisible();
    expect(getByText('foo2')).toBeVisible();
  });
});
