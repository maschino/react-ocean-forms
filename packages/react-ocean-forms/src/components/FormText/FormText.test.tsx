import React from 'react';

import { render } from '@testing-library/react';

import { FormText } from './FormText';
import { Form } from '../Form';

describe('<FormText />', () => {
  it('should render nothing if text is null', () => {
    const { getByTestId } = render(
      <Form>
        <div data-testid="result">
          <FormText text={null} />
        </div>
      </Form>
    );

    expect(getByTestId('result')).toBeEmpty();
  });

  it('should render existing text', () => {
    const mockStringFormatter = jest.fn().mockImplementation((value) => value);
    const mockText = 'mock-text';
    const mockValues = { foo: 'bar' };

    const { getByText } = render(
      <Form formatString={mockStringFormatter}>
        <FormText text={mockText} values={mockValues} />
      </Form>
    );

    expect(mockStringFormatter).toHaveBeenCalledTimes(1);
    expect(mockStringFormatter).toHaveBeenCalledWith(mockText, mockValues);
    expect(getByText(mockText)).toBeVisible();
  });
});
