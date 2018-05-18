import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducer';

import {logger, randomid} from '../middlewares';

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(); // dev only

const enhancer = applyMiddleware(logger, randomid);

const store = createStore(reducer, reduxDevTools, enhancer);

export default store;
