import { Entry } from '@store/entries/entries.types';

export enum KeyCodes {
  ESCAPE = 27,
}

export type Dictionary<T> = {
  [key: string]: T;
};

export type Day = {
  key: string;
  label: string;
  entries: Array<Entry>;
}

export type Month = {
  key: string;
  label: string;
  days: Dictionary<Day>;
}

export type Year = {
  key: string;
  label: string;
  months: Dictionary<Month>;
}

export type Balance = {
  balance: number
  earnings: number,
  expenses: number,
}
