import React from 'react';
import { shallow } from 'enzyme';

import { createMockFormContext, createMockValidation } from '../test-utils/enzymeFormContext';
import { BaseField } from '../Field';

describe('<Field />', () => {
  const TestComponent = () => (<div id="test-component" />);

  let fieldState = null;
  const registerCallback = (name, state) => { fieldState = state; };

  const fieldName = 'unitField';
  const fullName = fieldName;
  const fieldLabel = 'Unit field';
  const formContext = createMockFormContext(registerCallback);
  const validation = createMockValidation();

  const setup = props => shallow((
    <BaseField
      name={fieldName}
      fullName={fullName}
      label={fieldLabel}
      component={TestComponent}
      context={formContext}
      validation={validation}
      {...props}
    />
  ));
  const wrapper = setup();

  it('should render without error', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should register itself in the form context', () => {
    expect(formContext.registerField).toHaveBeenCalledWith(
      fieldName,
      {
        label: fieldLabel,
        validate: expect.any(Function),
        reset: expect.any(Function),
        getValue: expect.any(Function),
        updateValidation: validation.update,
      },
    );
  });

  const changeValue = 'blubb';

  describe('onChange event handling', () => {
    const triggerChange = () => {
      const inputElement = wrapper.find('TestComponent');
      inputElement.prop('field').onChange({
        target: {
          name: fieldName,
          value: changeValue,
        },
      });
      wrapper.update();
    };

    it('should remember the changed value', () => {
      triggerChange();
      expect(wrapper.find('TestComponent').prop('field').value).toBe(changeValue);
    });

    it('should call the validate function', () => {
      expect(validation.validate).toHaveBeenLastCalledWith(
        changeValue,
        { checkAsync: false },
      );
    });

    it('should respect the Form.asyncValidateOnChange configuration', () => {
      formContext.asyncValidateOnChange = true;
      wrapper.setProps({ context: formContext });

      triggerChange();
      expect(validation.validate).toHaveBeenLastCalledWith(
        changeValue,
        { checkAsync: true },
      );
    });

    it('should respect the Field.asyncValidateOnChange configuration', () => {
      formContext.asyncValidateOnChange = false;
      wrapper.setProps({ context: formContext, asyncValidateOnChange: true });

      triggerChange();
      expect(validation.validate).toHaveBeenLastCalledWith(
        changeValue,
        { checkAsync: true },
      );

      wrapper.setProps({ asyncValidateOnChange: false });
    });

    it('should notify the form context', () => {
      expect(formContext.notifyFieldEvent).toHaveBeenLastCalledWith(
        fieldName,
        'change',
        changeValue,
      );
    });
  });

  describe('onBlur event handling', () => {
    const triggerBlur = () => {
      const inputElement = wrapper.find('TestComponent');
      inputElement.prop('field').onBlur();
      wrapper.update();
    };

    const resetMocks = () => {
      validation.validate.mockReset();
      formContext.notifyFieldEvent.mockReset();
    };

    beforeAll(() => {
      resetMocks();
      triggerBlur();
    });

    afterAll(() => {
      resetMocks();
    });

    it('should call the validate function', () => {
      expect(validation.validate).toHaveBeenLastCalledWith(changeValue);
    });

    it('should notify the form context', () => {
      expect(formContext.notifyFieldEvent).toHaveBeenLastCalledWith(
        fieldName,
        'blur',
      );
    });

    it('should not validate if the state is not dirty', () => {
      resetMocks();
      wrapper.setState({ dirty: false });
      wrapper.update();
      triggerBlur();

      expect(validation.validate).not.toHaveBeenCalled();
    });
  });

  describe('form context callbacks', () => {
    it('should return the correct value', () => {
      expect(fieldState.getValue()).toBe(changeValue);
    });

    it('should correctly pass the validate method', () => {
      const validateArgs = { foo: 'bar' };

      fieldState.validate(validateArgs);
      expect(validation.validate).toHaveBeenLastCalledWith(changeValue, validateArgs);
    });

    it('should correctly reset to its defaultValue', () => {
      fieldState.reset();
      wrapper.update();

      const inputElement = wrapper.find('TestComponent');
      expect(inputElement.prop('field').value).toBe('');

      expect(validation.reset).toHaveBeenCalled();
    });
  });

  it('should set its value to the defaultValue', () => {
    const newDefaultValue = 'foobar';
    formContext.defaultValues = { [fieldName]: newDefaultValue };
    wrapper.setProps({ context: formContext });
    wrapper.update();

    const inputElement = wrapper.find('TestComponent');
    expect(inputElement.prop('field').value).toBe(newDefaultValue);
  });

  it('should use an empty string if there is no defaultValue', () => {
    formContext.defaultValues = { foo: 'bar' };
    wrapper.setProps({ context: formContext });
    wrapper.update();

    const inputElement = wrapper.find('TestComponent');
    expect(inputElement.prop('field').value).toBe('');
  });

  it('should correctly unregister on unmount', () => {
    wrapper.unmount();
    expect(formContext.unregisterField).toHaveBeenCalledWith(fieldName);
  });
});
