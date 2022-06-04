import { configureStore } from '@reduxjs/toolkit';
import { dataStorage } from '@src/utils';
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
  // eslint-disable-next-line no-console
  console.log('store', state);

  dataStorage.save(state);
};

store.subscribe(handleChange);

export default store;
