import { configureStore } from '@reduxjs/toolkit';
import { entriesReducer } from './entries';
import { userReducer } from './user';

const store = configureStore({
  reducer: {
    entries: entriesReducer,
    user: userReducer
  }
});

const handleChange = () => {
  const state = store.getState();
  console.log('store', state);
};

store.subscribe(handleChange);

export default store;
