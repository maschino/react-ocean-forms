import React from 'react';
import { shallow } from 'enzyme';

import mockEvent from '../test-utils/enzymeEventUtils';
import Form from '../Form';

describe('<Form />', () => {
  const onFieldValueChangedHandler = jest.fn();
  const onSubmitHandler = jest.fn();
  const onResetHandler = jest.fn();
  const onValidateHandler = jest.fn().mockReturnValue(null);

  const setup = props => shallow((
    <Form
      onFieldValueChanged={onFieldValueChangedHandler}
      onSubmit={onSubmitHandler}
      onReset={onResetHandler}
      onValidate={onValidateHandler}
      {...props}
    >
      <div>unitChild</div>
    </Form>
  ));
  const wrapper = setup();

  const getContext = () => wrapper.state('context');

  it('should render without error', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should create a valid form context', () => {
    const formContext = getContext();
    expect(formContext).toMatchObject({
      fieldPrefix: null,
      registerField: expect.any(Function),
      unregisterField: expect.any(Function),
      notifyFieldEvent: expect.any(Function),
      registerListener: expect.any(Function),
      unregisterListener: expect.any(Function),
      getFieldState: expect.any(Function),
      getValues: expect.any(Function),
      busy: false,
      disabled: false,
      asyncValidateOnChange: false,
      asyncValidationWait: 400,
      defaultValues: {},
    });
  });

  describe('configuration', () => {
    const cases = [
      ['disabled', true, 'disabled'],
      ['formatString', jest.fn(), 'stringFormatter'],
      ['asyncValidateOnChange', true, 'asyncValidateOnChange'],
      ['asyncValidationWait', 800, 'asyncValidationWait'],
      ['defaultValues', { foo: 'bar' }, 'defaultValues'],
    ];

    test.each(cases)('case %s', (prop, value, contextProp) => {
      wrapper.setProps({ [prop]: value });
      const formContext = getContext();

      expect(formContext).toMatchObject({ [contextProp]: value });
      wrapper.setProps({ [prop]: undefined });
    });
  });

  describe('invalid field registration', () => {
    const mf = () => {};
    const cases = [
      ['no parameters', undefined, undefined],
      ['invalid field name', '', undefined],
      ['no state', 'foo', undefined],
      ['empty state', 'foo', {}],
      ['1 of 5 props', 'foo', { label: 'hey' }],
      ['2 of 5 props', 'foo', { label: 'hey', validate: mf }],
      ['3 of 5 props', 'foo', { label: 'hey', validate: mf, updateValidation: mf }],
      ['4 of 5 props', 'foo', {
        label: 'hey',
        validate: mf,
        updateValidation: mf,
        reset: mf,
      }],
    ];

    const formContext = getContext();
    test.each(cases)('case %s', (testName, fieldName, fieldState) => {
      expect(() => formContext.registerField(fieldName, fieldState)).toThrowErrorMatchingSnapshot();
    });
  });

  const createMockField = label => ({
    label,
    validate: jest.fn().mockResolvedValue({
      isValidating: false,
      valid: true,
      error: null,
    }),
    updateValidation: jest.fn(),
    reset: jest.fn(),
    getValue: jest.fn().mockReturnValue(label),
  });

  const unitFieldName = 'unitField';
  const unitFieldState = createMockField('Unit field');

  const unitGroupName = 'unitGroup';
  const unitGroupState = createMockField('Unit group');
  unitGroupState.isGroup = true;

  const subFieldName = `${unitGroupName}.subField`;
  const subFieldState = createMockField('Sub field');

  const mockFields = [unitFieldState, unitGroupState, subFieldState];

  const subFieldLocalName = subFieldName.substring(unitGroupName.length + 1);
  const expectedFormValues = {
    [unitFieldName]: unitFieldState.label,
    [unitGroupName]: {
      [subFieldLocalName]: subFieldState.label,
    },
  };

  describe('field states and values', () => {
    let formContext = null;
    const refreshContext = () => { formContext = getContext(); };
    beforeEach(refreshContext);

    it('should register a new field without crashing', () => {
      expect(() => formContext.registerField(unitFieldName, unitFieldState)).not.toThrowError();
    });

    it('should register a new group without crashing', () => {
      expect(() => formContext.registerField(unitGroupName, unitGroupState)).not.toThrowError();
    });

    it('should register a new sub field without crashing', () => {
      expect(() => formContext.registerField(subFieldName, subFieldState)).not.toThrowError();
    });

    it('should return the correct field states', () => {
      expect(formContext.getFieldState(unitFieldName)).toBe(unitFieldState);
      expect(formContext.getFieldState(unitGroupName)).toBe(unitGroupState);
      expect(formContext.getFieldState(subFieldName)).toBe(subFieldState);
    });

    it('should correctly build the form values', () => {
      const formValues = formContext.getValues();

      expect(unitFieldState.getValue).toHaveBeenCalled();
      expect(subFieldState.getValue).toHaveBeenCalled();

      // The value of fieldGroups is computed by its children
      expect(unitGroupState.getValue).not.toHaveBeenCalled();

      expect(formValues).toMatchObject(expectedFormValues);
    });
  });

  const createMockListener = () => ({
    notify: jest.fn(),
    scrollIntoView: jest.fn(),
  });

  const mockListeners = [
    { id: 'listener1', state: createMockListener() },
    { id: 'listener2', state: createMockListener() },
    { id: 'listener3', state: createMockListener() },
  ];

  describe('listener / notify system', () => {
    let formContext = null;
    const refreshContext = () => { formContext = getContext(); };

    beforeEach(refreshContext);
    afterEach(() => {
      mockListeners.forEach(({ state }) => {
        state.notify.mockReset();
        state.scrollIntoView.mockReset();
        onFieldValueChangedHandler.mockReset();
      });
    });

    afterAll(() => {
      wrapper.setProps({
        onFieldValueChanged: onFieldValueChangedHandler,
      });
    });

    it('should register new listeners without crashing', () => {
      mockListeners.forEach((item) => {
        expect(() => formContext.registerListener(item.id, item.state)).not.toThrowError();
      });
    });

    it('should pass the validation notification to all listeners', () => {
      const eventName = 'validation';
      const eventArgs = { foo: 'bar' };

      formContext.notifyFieldEvent(unitFieldName, eventName, eventArgs);
      mockListeners.forEach(item => expect(item.state.notify).toHaveBeenLastCalledWith(
        unitFieldName,
        {
          label: unitFieldState.label,
          ...eventArgs,
        },
      ));
    });

    it('should not pass other notifications to the listeners', () => {
      const eventName = 'blur';
      const eventArgs = { foo: 'bar' };

      formContext.notifyFieldEvent(unitFieldName, eventName, eventArgs);
      mockListeners.forEach(item => expect(item.state.notify).not.toHaveBeenCalled());
    });

    it('should call the onFieldValueChanged prop', () => {
      const eventName = 'change';
      const eventArgs = 'myNewValue';

      formContext.notifyFieldEvent(unitFieldName, eventName, eventArgs);
      expect(onFieldValueChangedHandler).toHaveBeenCalledWith(unitFieldName, eventArgs);
    });

    it('should work without the onFieldValueChanged prop', () => {
      const eventName = 'change';
      const eventArgs = 'myNewValue';

      wrapper.setProps({
        onFieldValueChanged: undefined,
      });

      formContext.notifyFieldEvent(unitFieldName, eventName, eventArgs);
      expect(onFieldValueChangedHandler).not.toHaveBeenCalled();
    });
  });

  describe('onSubmit handling', () => {
    afterAll(() => {
      wrapper.setProps({
        onValidate: onValidateHandler,
        onSubmit: onSubmitHandler,
      });
    });

    describe('all valid', () => {
      it('should not throw an error', () => {
        const formElement = wrapper.find('form');
        expect(() => formElement.simulate('submit', mockEvent())).not.toThrowError();
      });

      it('should call all the validation functions', () => {
        mockFields.forEach(item => expect(item.validate).toHaveBeenLastCalledWith({
          checkAsync: true,
          immediateAsync: true,
        }));
      });

      it('should call the onValidate prop', () => {
        expect(onValidateHandler).toHaveBeenCalledWith(expectedFormValues);
        onValidateHandler.mockReset();
      });

      it('should call the onSubmit prop', () => {
        expect(onSubmitHandler).toHaveBeenCalledWith(expectedFormValues);
        onSubmitHandler.mockReset();
      });

      it('should work without optional props', () => {
        wrapper.setProps({
          onValidate: undefined,
          onSubmit: undefined,
        });

        const formElement = wrapper.find('form');
        expect(() => formElement.simulate('submit', mockEvent())).not.toThrowError();
      });
    });

    describe('invalid through form validator', () => {
      const invalidValidator = jest.fn().mockReturnValue({
        [unitFieldName]: 'error',
      });

      beforeAll(() => wrapper.setProps({ onValidate: invalidValidator }));
      afterAll(() => wrapper.setProps({ onValidate: onValidateHandler }));

      it('should not throw an error', () => {
        const formElement = wrapper.find('form');
        expect(() => formElement.simulate('submit', mockEvent())).not.toThrowError();
      });

      it('should update the validation state of the field', () => {
        expect(unitFieldState.updateValidation).toHaveBeenCalledWith({
          valid: false,
          error: {
            message_id: 'error',
            params: { },
          },
        });
      });

      it('should scroll to the first validation summary', () => {
        expect(mockListeners[0].state.scrollIntoView).toHaveBeenCalled();
        mockListeners[0].state.scrollIntoView.mockReset();
      });

      it('should not call the onSubmit prop', () => {
        expect(onSubmitHandler).not.toHaveBeenCalled();
        onSubmitHandler.mockReset();
      });
    });

    describe('invalid through field validators', () => {
      it('should not throw an error', () => {
        unitFieldState.validate = jest.fn().mockResolvedValue({
          isValidating: false,
          valid: false,
          error: 'foobar',
        });

        const formElement = wrapper.find('form');
        expect(() => formElement.simulate('submit', mockEvent())).not.toThrowError();
      });

      it('should scroll to the first validation summary', () => {
        expect(mockListeners[0].state.scrollIntoView).toHaveBeenCalled();
        mockListeners[0].state.scrollIntoView.mockReset();
      });

      it('should not call the onSubmit prop', () => {
        expect(onSubmitHandler).not.toHaveBeenCalled();
        onSubmitHandler.mockReset();
      });

      it('should not scroll if disableFocusSummaryOnError is set', () => {
        wrapper.setProps({
          disableFocusSummaryOnError: true,
        });

        const formElement = wrapper.find('form');
        expect(() => formElement.simulate('submit', mockEvent())).not.toThrowError();
        expect(mockListeners[0].state.scrollIntoView).not.toHaveBeenCalled();
      });

      it('should not crash if there are no listeners', () => {
        wrapper.setProps({
          disableFocusSummaryOnError: false,
        });

        const formContext = getContext();

        mockListeners.forEach((item) => {
          expect(() => formContext.unregisterListener(item.id)).not.toThrowError();
        });

        const formElement = wrapper.find('form');
        expect(() => formElement.simulate('submit', mockEvent())).not.toThrowError();
        expect(mockListeners[0].state.scrollIntoView).not.toHaveBeenCalled();
      });
    });
  });

  describe('onReset handling', () => {
    it('should not throw an error', () => {
      const formElement = wrapper.find('form');
      expect(() => formElement.simulate('reset', mockEvent())).not.toThrowError();
    });

    it('should reset all fields', () => {
      mockFields.forEach(item => expect(item.reset).toHaveBeenCalled());
    });

    it('should call the onReset prop', () => {
      expect(onResetHandler).toHaveBeenCalled();
      onResetHandler.mockReset();
    });

    it('should work without the onReset prop', () => {
      wrapper.setProps({ onReset: undefined });
      const formElement = wrapper.find('form');
      expect(() => formElement.simulate('reset', mockEvent())).not.toThrowError();
    });
  });

  describe('cleanup handling', () => {
    const formContext = getContext();

    it('should unregister all fields without throwing an error', () => {
      expect(() => formContext.unregisterField(unitFieldName)).not.toThrowError();
      expect(() => formContext.unregisterField(subFieldName)).not.toThrowError();
      expect(() => formContext.unregisterField(unitGroupName)).not.toThrowError();
    });
  });
});
