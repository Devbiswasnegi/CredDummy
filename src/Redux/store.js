import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';


import reducers from './reducers';

const enhancers = [
  applyMiddleware(
    thunkMiddleware,
    createLogger({
      collapsed: true,
      predicate: () => __DEV__,
    }),
  ),
];

const enhancer = compose(...enhancers);

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['startReducer'],
};

const persistedReducer = persistReducer(persistConfig,reducers);
//@ts-ignore
export const store = createStore(persistedReducer, {}, enhancer);
export const persistor = persistStore(store);
