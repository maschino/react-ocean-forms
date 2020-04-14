import React from 'react';

import { render } from '@testing-library/react';

import { withField } from './withField';
import { Form } from '../Form';

describe('withField', () => {
  it('should render without error', () => {
    const TestComponent: React.FC = () => <div id="test-component" />;
    const WrappedComponent = withField(TestComponent);

    const { asFragment } = render(
      <Form>
        <WrappedComponent name="mockComponent" label="mockComponent" />
      </Form>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
