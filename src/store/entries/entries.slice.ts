import { createSlice } from '@reduxjs/toolkit';
import { Entry } from './entries.types';

const initialState: Array<Entry> = [];

const entriesSlice = createSlice({
  name: 'entries',
  initialState,
  reducers: {
    add: (state, action) => {
      const entry = action.payload;
      entry.id = state.length;
      return [...state, entry];
    },
    set: (state, action) => {
      return action.payload;
    }
  }
});

export const actions = entriesSlice.actions;
export const reducer = entriesSlice.reducer;

export default entriesSlice;
