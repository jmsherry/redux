import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
//import {devTools, persistState} from 'redux-devtools';
import * as reducers from '../reducers/index';
import { routerReducer } from 'react-router-redux';
import createLogger from 'redux-logger';

let createStoreWithMiddleware;
const logger = createLogger();

// Configure the dev tools when in DEV mode
if (__DEV__) {
  createStoreWithMiddleware = compose(
    applyMiddleware(thunkMiddleware, logger)//,
    //window.devToolsExtension ? window.devToolsExtension() : (f) => f
    // devTools(),
    // persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
  )(createStore);
} else {
  createStoreWithMiddleware = applyMiddleware(thunkMiddleware, logger)(createStore);
}

const rootReducer = combineReducers({
    ...reducers,
    routing: routerReducer
  });

export default function configureStore(initialState={}) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
