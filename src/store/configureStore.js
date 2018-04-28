import { createStore, applyMiddleware, compose } from 'redux';
import throttle from 'lodash/throttle';
import reducer from './reducers/reducers';
import api from './middlewares/api';
import config from './../config';

import { loadState, saveState } from './localStorage';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
  const persistedState = loadState();
  const store = createStore(
    reducer,
    persistedState,
    composeEnhancers(applyMiddleware(api(config.baseUrl)))
  );
  store.subscribe(throttle(() => {
    saveState(store.getState());
  }, 1000));
  return { store };
};

export default configureStore;
