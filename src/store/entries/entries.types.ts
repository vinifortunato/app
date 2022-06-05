export enum EntryTypes {
  EXPENSE = 'EXPENSE',
  REVENUE = 'REVENUE',
  TRANSFERENCE = 'TRANSFERENCE',
}

export enum EntryStatus {
  PAID = 'PAID',
  PENDING = 'PENDING',
}

export type Entry = {
  amount: string;
  createdAt: string;
  date: string;
  deletedAt?: string;
  id: string;
  notes?: string;
  status: EntryStatus;
  title: string;
  type: EntryTypes;
  updatedAt: string;
};
