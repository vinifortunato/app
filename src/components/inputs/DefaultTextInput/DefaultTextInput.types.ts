/* eslint-disable @typescript-eslint/no-explicit-any */
export type DefaultTextInputProps = {
  editable?: boolean;
  label?: string;
  onChange?: (event: any) => void;
  onFocus?: (event: any) => void;
  placeholder?: string;
  testId?: string;
  value?: string;
};
