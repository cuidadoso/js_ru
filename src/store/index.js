import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import history from '../history';

import reducer from '../reducer';
import { api, logger, randomid } from '../middlewares';

const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(); // dev only

const enhancer = applyMiddleware(
  thunk,
  routerMiddleware(history),
  randomid,
  api,
  logger
);

const store = createStore(reducer, reduxDevTools, enhancer);

export default store;
