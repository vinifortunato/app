import { Balance } from '@src/types/common.types';
import { Entry, EntryTypes } from '@store/entries/entries.types';

const entries = (entries: Array<Entry>): Balance => {
  let earnings = 0;
  let expenses = 0;

  entries.forEach((entry: Entry) => {
    if (entry.type === EntryTypes.REVENUE) {
      earnings += Number(entry.amount);
      return;
    }

    if (entry.type === EntryTypes.EXPENSE) {
      expenses += Number(entry.amount);
    }
  });

  const balance = earnings - expenses;
  return {
    balance,
    earnings,
    expenses
  };
};

const calculate = {
  entries
};

export default calculate;
