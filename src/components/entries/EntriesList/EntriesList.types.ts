import { Dictionary } from '@src/types/common.types';
import { Entry } from '@store/entries/entries.types';

export type EntriesListProps = {
  entries?: Array<Entry>;
  onEntryClick?: (entry: Entry) => void;
};

export type EntryListDay = {
  key: string;
  label: string;
  entries: Array<Entry>;
}

export type EntryListMonth = {
  key: string;
  label: string;
  days: Dictionary<EntryListDay>;
}

export type EntryListYear = {
  key: string;
  label: string;
  months: Dictionary<EntryListMonth>;
}
