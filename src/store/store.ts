import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './user';

const store = configureStore({
  reducer: {
    user: userReducer
  }
});

const handleChange = () => {
  const state = store.getState();
  console.log('store', state);
};

store.subscribe(handleChange);

export default store;
