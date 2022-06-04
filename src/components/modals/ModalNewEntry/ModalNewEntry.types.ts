import { Entry } from '@store/entries/entries.types';

export type ModalNewEntryProps = {
  onCancel?: () => void;
  onSubmit?: (entry: Entry) => void;
  visible?: boolean;
}
