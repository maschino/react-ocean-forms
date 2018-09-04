import { TSTringFormatter } from '../../utils/stringFormatter';
import { TFieldValue } from '../Field';
import { IValidationArgs, IValidationComponentState, IValidationState } from '../withValidation';

export type TFormEventListener = ((name: string, event: string, args?: any) => void);

export interface IFieldState {
  label: string;
  isGroup?: boolean;
  validate(args?: IValidationArgs): Promise<IValidationState>;
  getValue(): TFieldValue;
  reset(): void;
  updateValidation(state: Partial<IValidationComponentState>): void;
}

export type TFieldValues = {
  [prop: string]: TFieldValue | TFieldValues;
};

export interface IBaseFormContext {
  fieldPrefix: string | null;

  busy: boolean;
  disabled: boolean;

  registerField(name: string, state: IFieldState): void;
  unregisterField(name: string): void;
  notifyFieldEvent(name: string, event: string, args?: any): void;

  registerListener(name: string, callback: TFormEventListener): void;
  unregisterListener(name: string): void;

  getFieldState(name: string): IFieldState;
  getValues(): TFieldValues;

  submit(submitArgs?: any): Promise<void>;
}

export interface IFormContext extends IBaseFormContext {
  defaultValues: TFieldValues;
  values?: TFieldValues;
  asyncValidateOnChange: boolean;
  asyncValidationWait: number;
  stringFormatter: TSTringFormatter;
  disabled: boolean;
  plaintext: boolean;
}
