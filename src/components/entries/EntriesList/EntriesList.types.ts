import { Entry } from '@store/entries/entries.types';

export type EntriesListProps = {
  entries?: Array<Entry>;
  onEntryClick?: (entry: Entry) => void;
};
