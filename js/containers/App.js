import React from 'react';
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import Home from '../components/Home';
import Birds from '../components/Birds';
import Spots from '../components/Spots';
import {renderDevTools} from '../utils/devTools';

const store = configureStore();

//Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);


export default React.createClass({
  render() {
    console.log('store', store);
    return (
      <div>
        <Provider store={store}>
          <Router history={history}>
            <Route path="/" component={Home}>
              <Route path="birds" component={Birds}/>
              <Route path="spots" component={Spots}/>
            </Route>
          </Router>
        </Provider>
      </div>
    );
  }
});
