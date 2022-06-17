import { AppDate, Dictionary } from '@src/types/common.types';

export type DateFilterProps = {
  defaultDate?: AppDate;
  onChange?: (appDate: AppDate) => void;
  testId?: string;
};

export type DateFilterItem = {
  id: string;
  month: number;
  year: number;
};

export type DateFilterState = {
  data: Array<DateFilterItem>;
  flags: Dictionary<boolean>;
  index: number;
};

export type DateFilterItemStyleProps = {
  isCurrent?: boolean;
};
