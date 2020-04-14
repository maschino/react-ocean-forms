import React from 'react';

import { render, fireEvent, createEvent, act } from '@testing-library/react';
import { Form } from './Form';

describe('<Form />', () => {
  it('should render without error', () => {
    const { asFragment } = render(
      <Form>
        <div>mock child</div>
      </Form>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  describe('css classes', () => {
    it('should output any additional classNames added to the form', () => {
      const mockClass = 'mock-class';
      const { getByText } = render(<Form className={mockClass}>mock form</Form>);

      expect(getByText('mock form')).toHaveClass(mockClass);
    });

    describe('plaintext', () => {
      it('should have the plaintext css class if in plaintext mode', () => {
        const { getByText } = render(<Form plaintext>mock form</Form>);

        expect(getByText('mock form')).toHaveClass('plaintext');
      });

      it('should still add the additional classNames', () => {
        const mockClass = 'mock-class';
        const { getByText } = render(
          <Form className={mockClass} plaintext>
            mock form
          </Form>
        );

        expect(getByText('mock form')).toHaveClass(mockClass);
        expect(getByText('mock form')).toHaveClass('plaintext');
      });
    });
  });

  describe('html form event handling', () => {
    describe('onSubmit', () => {
      it('should call event.preventDefault', async () => {
        const { getByText } = render(<Form>mock form</Form>);

        const mockEvent = createEvent.submit(getByText('mock form'));
        await act(async () => {
          fireEvent(getByText('mock form'), mockEvent);
        });

        expect(mockEvent.defaultPrevented).toBeTruthy();
      });

      it('should not leak the onSubmit event', async () => {
        const mockParentOnSubmitHandler = jest.fn();
        const { getByText } = render(
          <div onSubmit={mockParentOnSubmitHandler}>
            <Form>mock form</Form>
          </div>
        );

        await act(async () => {
          fireEvent.submit(getByText('mock form'));
        });

        expect(mockParentOnSubmitHandler).not.toHaveBeenCalled();
      });

      it('should call Form.onSubmit', async () => {
        const mockOnSubmitHandler = jest.fn();
        const { getByText } = render(<Form onSubmit={mockOnSubmitHandler}>mock form</Form>);

        await act(async () => {
          fireEvent.submit(getByText('mock form'));
        });

        expect(mockOnSubmitHandler).toHaveBeenCalledTimes(1);
      });
    });

    describe('onReset', () => {
      it('should call event.preventDefault', async () => {
        const { getByText } = render(<Form>mock form</Form>);

        const mockEvent = createEvent.reset(getByText('mock form'));
        await act(async () => {
          fireEvent(getByText('mock form'), mockEvent);
        });

        expect(mockEvent.defaultPrevented).toBeTruthy();
      });

      it('should not leak the onReset event', async () => {
        const mockParentOnResetHandler = jest.fn();
        const { getByText } = render(
          <div onReset={mockParentOnResetHandler}>
            <Form>mock form</Form>
          </div>
        );

        await act(async () => {
          fireEvent.reset(getByText('mock form'));
        });

        expect(mockParentOnResetHandler).not.toHaveBeenCalled();
      });

      it('should call Form.onReset', async () => {
        const mockOnResetHandler = jest.fn();
        const { getByText } = render(<Form onReset={mockOnResetHandler}>mock form</Form>);

        await act(async () => {
          fireEvent.reset(getByText('mock form'));
        });

        expect(mockOnResetHandler).toHaveBeenCalledTimes(1);
      });
    });
  });
});
