import React from 'react';

import { render, fireEvent, createEvent, act } from '@testing-library/react';
import { FormButton } from './FormButton';
import { Form } from '../Form';

describe('<FormButton />', () => {
  describe('render', () => {
    it('should render without crashing', () => {
      const { asFragment } = render(
        <Form>
          <FormButton>Mock button</FormButton>
        </Form>
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it('should render without crashing when using a custom component', () => {
      const { asFragment } = render(
        <Form>
          <FormButton component="div">Mock button</FormButton>
        </Form>
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('disabled button', () => {
    it('button should be disabled if the form is busy', async () => {
      const mockFormSubmitHandler = jest.fn();
      const mockClickHandler = jest.fn();

      const { getByRole } = render(
        <Form busy onSubmit={mockFormSubmitHandler}>
          <FormButton onClick={mockClickHandler} />
        </Form>
      );

      expect(getByRole('button')).toBeDisabled();

      await act(async () => {
        fireEvent.click(getByRole('button'));
      });
      expect(mockFormSubmitHandler).not.toHaveBeenCalled();
      expect(mockClickHandler).not.toHaveBeenCalled();
    });

    it('button should be disabled if the form is disabled', async () => {
      const mockFormSubmitHandler = jest.fn();
      const mockClickHandler = jest.fn();

      const { getByRole } = render(
        <Form disabled onSubmit={mockFormSubmitHandler}>
          <FormButton onClick={mockClickHandler} />
        </Form>
      );

      expect(getByRole('button')).toBeDisabled();

      await act(async () => {
        fireEvent.click(getByRole('button'));
      });
      expect(mockFormSubmitHandler).not.toHaveBeenCalled();
      expect(mockClickHandler).not.toHaveBeenCalled();
    });

    it('button should be disabled if disabled prop is true', async () => {
      const mockFormSubmitHandler = jest.fn();
      const mockClickHandler = jest.fn();

      const { getByRole } = render(
        <Form onSubmit={mockFormSubmitHandler}>
          <FormButton disabled onClick={mockClickHandler} />
        </Form>
      );

      expect(getByRole('button')).toBeDisabled();

      await act(async () => {
        fireEvent.click(getByRole('button'));
      });
      expect(mockFormSubmitHandler).not.toHaveBeenCalled();
      expect(mockClickHandler).not.toHaveBeenCalled();
    });

    it('button should call event.preventDefault if it has been clicked while in disabled state', async () => {
      const mockFormSubmitHandler = jest.fn();
      const mockClickHandler = jest.fn();

      const { getByText } = render(
        <Form onSubmit={mockFormSubmitHandler}>
          <FormButton disabled onClick={mockClickHandler} component="div">
            Mock button
          </FormButton>
        </Form>
      );

      const mockEvent = createEvent.click(getByText('Mock button'));
      await act(async () => {
        fireEvent(getByText('Mock button'), mockEvent);
      });
      expect(mockFormSubmitHandler).not.toHaveBeenCalled();
      expect(mockClickHandler).not.toHaveBeenCalled();
      expect(mockEvent.defaultPrevented).toBeTruthy();
    });
  });

  describe('enabled button', () => {
    it('button should be enabled and correctly call all callbacks', async () => {
      const mockFormSubmitHandler = jest.fn();
      const mockClickHandler = jest.fn();

      const { getByRole } = render(
        <Form onSubmit={mockFormSubmitHandler}>
          <FormButton onClick={mockClickHandler} />
        </Form>
      );

      expect(getByRole('button')).not.toBeDisabled();

      await act(async () => {
        fireEvent.click(getByRole('button'));
      });
      expect(mockFormSubmitHandler).toHaveBeenCalledTimes(1);
      expect(mockClickHandler).toHaveBeenCalledTimes(1);
    });

    it('should pass the submitArgs to Form.onSubmit', async () => {
      const mockSubmitArgs = { foo: 'bar' };
      const mockFormSubmitHandler = jest.fn();
      const mockClickHandler = jest.fn();

      const { getByRole } = render(
        <Form onSubmit={mockFormSubmitHandler}>
          <FormButton onClick={mockClickHandler} submitArgs={mockSubmitArgs} />
        </Form>
      );

      expect(getByRole('button')).not.toBeDisabled();

      await act(async () => {
        fireEvent.click(getByRole('button'));
      });
      expect(mockFormSubmitHandler).toHaveBeenCalledTimes(1);
      expect(mockFormSubmitHandler).toHaveBeenCalledWith({}, mockSubmitArgs);
      expect(mockClickHandler).toHaveBeenCalledTimes(1);
    });

    it('should not crash if no onClick handler is present', async () => {
      const mockFormSubmitHandler = jest.fn();

      const { getByRole } = render(
        <Form onSubmit={mockFormSubmitHandler}>
          <FormButton />
        </Form>
      );

      expect(getByRole('button')).not.toBeDisabled();

      await act(async () => {
        fireEvent.click(getByRole('button'));
      });
      expect(mockFormSubmitHandler).toHaveBeenCalledTimes(1);
    });
  });

  describe('button type parameter', () => {
    it('should not call Form.onSubmit if the button type is not submit', async () => {
      const mockFormSubmitHandler = jest.fn();
      const mockClickHandler = jest.fn();

      const { getByRole } = render(
        <Form onSubmit={mockFormSubmitHandler}>
          <FormButton onClick={mockClickHandler} type="button" />
        </Form>
      );

      expect(getByRole('button')).not.toBeDisabled();
      expect(getByRole('button')).toHaveAttribute('type', 'button');

      await act(async () => {
        fireEvent.click(getByRole('button'));
      });
      expect(mockFormSubmitHandler).not.toHaveBeenCalled();
      expect(mockClickHandler).toHaveBeenCalledTimes(1);
    });

    it('should call Form.onReset if the button type is reset', async () => {
      const mockFormSubmitHandler = jest.fn();
      const mockFormResetHandler = jest.fn();
      const mockClickHandler = jest.fn();

      const { getByRole } = render(
        <Form onSubmit={mockFormSubmitHandler} onReset={mockFormResetHandler}>
          <FormButton onClick={mockClickHandler} type="reset" />
        </Form>
      );

      expect(getByRole('button')).not.toBeDisabled();
      expect(getByRole('button')).toHaveAttribute('type', 'reset');

      await act(async () => {
        fireEvent.click(getByRole('button'));
      });
      expect(mockFormSubmitHandler).not.toHaveBeenCalled();
      expect(mockFormResetHandler).toHaveBeenCalledTimes(1);
      expect(mockClickHandler).toHaveBeenCalledTimes(1);
    });
  });
});
