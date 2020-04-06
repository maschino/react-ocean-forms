import React from 'react';

import { render } from '@testing-library/react';

import { FieldLine } from './FieldLine';
import { Form } from '../Form';

describe('<FieldLine />', () => {
  const meta = {
    valid: true,
    error: null,
    isValidating: false,
    isRequired: false,
    touched: false,
    stringFormatter: jest.fn(),
    plaintext: false,
  };
  const field = {
    id: 'unitInput',
    name: 'unitInput',
    value: '',
    disabled: false,
    onChange: jest.fn(),
    onBlur: jest.fn(),
  };

  it('should render without crashing', () => {
    const { asFragment } = render(
      <Form>
        <FieldLine label="unitInput" field={field} meta={meta}>
          mock
        </FieldLine>
      </Form>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should display invalid correctly', () => {
    const { asFragment } = render(
      <Form>
        <FieldLine label="unitInput" field={field} meta={{ ...meta, valid: false }}>
          mock
        </FieldLine>
      </Form>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should show a required marker', () => {
    const { asFragment } = render(
      <Form>
        <FieldLine label="unitInput" field={field} meta={{ ...meta, isRequired: true }}>
          mock
        </FieldLine>
      </Form>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
