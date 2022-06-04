import { createSlice } from '@reduxjs/toolkit';
import { UserState } from './user.types';

const initialState: UserState = null;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    set: (state, action) => {
      return action.payload;
    }
  }
});

export const actions = userSlice.actions;
export const reducer = userSlice.reducer;

export default userSlice;
