import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    setUser: (state, action) => {
      return action.payload;
    }
  }
});

export const actions = userSlice.actions;
export const reducer = userSlice.reducer;

export default userSlice;
