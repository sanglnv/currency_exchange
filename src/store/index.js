/**
 * Created by sanglnv on 5/27/17.
 */
import { createStore as _createStore , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import rootReducers from './../reducers';
import Registry from './registry';
import registryMiddleware from './registry/middleware';

export default (initialState = {}) => {
  const registry = new Registry(rootReducers);
  const middlewares = [thunk, logger, registryMiddleware(registry)];
  let finalCreateStore = applyMiddleware(...middlewares);

  // If we have redux devtools installed then hook into it
  if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    finalCreateStore = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(finalCreateStore)
  }

  const store = finalCreateStore(_createStore)(
    registry.initialReducers,
    initialState
  );

  registry.store = store;

  return store
}
