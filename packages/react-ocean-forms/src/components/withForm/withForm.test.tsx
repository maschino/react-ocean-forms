import React from 'react';

import { render } from '@testing-library/react';

import { withForm } from './withForm';
import { IFormContextProps } from './withForm.types';
import { Form } from '../Form';

describe('withForm', () => {
  const TestComponent: React.FC<IFormContextProps> = (props) => (
    <div data-test-id="test-component">form busy: {props.context.busy ? 'true' : 'false'}</div>
  );
  const WrappedComponent = withForm(TestComponent);

  it('should render without error', () => {
    const { asFragment } = render(
      <Form>
        <WrappedComponent />
      </Form>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should receive the correct form context values', () => {
    const { getByText } = render(
      <Form busy>
        <WrappedComponent />
      </Form>
    );

    expect(getByText('form busy: true')).toBeVisible();
  });
});
