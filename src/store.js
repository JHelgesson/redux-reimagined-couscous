import thunk from 'redux-thunk';
import combinedReducers from './store/index';
import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'

export const history = createBrowserHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = {};

const store = createStore(
  connectRouter(history)(combinedReducers),
  initialState,
  composeEnhancers(
    applyMiddleware(
      routerMiddleware(history),
      thunk
    )
  )
);

export default store;
