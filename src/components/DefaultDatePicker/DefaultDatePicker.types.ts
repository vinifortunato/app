export enum DefaultDatePickerDayTypes {
  CURRENT = 'current',
  NEXT = 'next',
  PREVIOUS = 'previous',
  TODAY = 'today'
}

export type DefaultDatePickerProps = {
  disabled?: boolean;
  label?: string;
  name?: string;
  onChange?: (date: string) => void;
  testId?: string;
  value?: string;
};

export type DefaultDatePickerStyleProps = {
  dayType?: DefaultDatePickerDayTypes;
  selected?: boolean;
  show?: boolean;
};

export type DefaultDatePickerDay = {
  type: DefaultDatePickerDayTypes;
  value: number;
}
