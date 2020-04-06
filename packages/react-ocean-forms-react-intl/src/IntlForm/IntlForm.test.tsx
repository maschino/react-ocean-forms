import React from 'react';

import { IntlProvider } from 'react-intl';
import { FormText } from 'react-ocean-forms';

import { render } from '@testing-library/react';

import { IntlForm } from './IntlForm';

describe('<IntlForm />', () => {
  it('should render without crashing', () => {
    const { asFragment, getByText } = render(
      <IntlProvider locale="en">
        <IntlForm>mock</IntlForm>
      </IntlProvider>
    );

    expect(asFragment()).toMatchSnapshot();
    expect(getByText('mock')).toBeVisible();
  });

  it('should pass the correct message translation method to the base form', () => {
    const { getByText, queryByText } = render(
      <IntlProvider locale="en" messages={{ test: 'translated text' }}>
        <IntlForm>
          <FormText text="test" />
        </IntlForm>
      </IntlProvider>
    );

    expect(queryByText('test')).toBeNull();
    expect(getByText('translated text')).toBeVisible();
  });

  it('should pass the message params as well', () => {
    const { getByText, queryByText } = render(
      <IntlProvider locale="en" messages={{ test: 'translated text {foo}' }}>
        <IntlForm>
          <FormText text="test" values={{ foo: 'bar' }} />
        </IntlForm>
      </IntlProvider>
    );

    expect(queryByText('test')).toBeNull();
    expect(getByText('translated text bar')).toBeVisible();
  });

  describe('error cases', () => {
    const cases: [string, null | undefined | string][] = [
      ['null', null],
      ['undefined', undefined],
      ['empty', ''],
    ];

    describe.each(cases)('called with "%s"', (name, value) => {
      it('should return the passed value as-is', () => {
        const { getByTestId } = render(
          <IntlProvider locale="en">
            <IntlForm>
              <div data-testid="result">
                {/*
                 // TODO: Replace with expected error when new typescript version drops
                 // @ts-ignore */}
                <FormText text={value} />
              </div>
            </IntlForm>
          </IntlProvider>
        );

        expect(getByTestId('result')).toBeEmpty();
      });
    });
  });
});
