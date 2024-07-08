import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import FormDataArrayReducer from './FormSclice'; // Adjust the path as per your project

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, FormDataArrayReducer);

export const store = configureStore({
  reducer: {
    formdata: persistedReducer,
  },
});

export const persistor = persistStore(store);
