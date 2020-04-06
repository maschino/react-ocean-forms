import React from 'react';

import { render } from '@testing-library/react';

import { Input } from './Input';
import { Form } from '../Form';

describe('<Input />', () => {
  it('should render without crashing', () => {
    const { asFragment } = render(
      <Form>
        <Input name="unitInput" label="unitInput" />
      </Form>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should only display the value if plaintext is set', () => {
    const { getByText, queryByLabelText } = render(
      <Form plaintext>
        <Input name="unitInput" label="unitInput" value="mock value" />
      </Form>
    );

    expect(getByText('mock value')).toBeVisible();
    expect(queryByLabelText('unitInput')).toBeNull();
  });

  it('should properly pass the type prop', () => {
    const { getByLabelText } = render(
      <Form>
        <Input name="unitInput" label="unitInput" type="number" />
      </Form>
    );

    expect(getByLabelText('unitInput')).toBeVisible();
    expect(getByLabelText('unitInput')).toHaveAttribute('type', 'number');
  });
});
