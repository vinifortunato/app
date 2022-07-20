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

export type DateFilterSettings = {
  itemsPerRow: number;
  itemWidth: number;
  wrapperWidth: number;
};

export type DateFilterState = {
  data: Array<DateFilterItem>;
  flags: Dictionary<boolean>;
  index: number;
  settings: DateFilterSettings;
};

export type DateFilterItemStyleProps = {
  isCurrent?: boolean;
  itemWidth?: number;
};
