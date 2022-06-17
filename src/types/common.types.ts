export enum KeyCodes {
  ESCAPE = 27,
}

export type Dictionary<T> = {
  [key: string]: T;
};

export type AppDate = {
  day: number,
  month: number,
  year: number
}

export type Balance = {
  balance: number
  earnings: number,
  expenses: number,
}
