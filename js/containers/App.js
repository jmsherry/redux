import React from 'react';
import { Router, Route, browserHistory, Redirect, IndexRoute } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import Home from '../components/Home';
import Main from '../components/Main';
import MatchList from '../components/MatchList';
import Score from '../components/Score';
import {renderDevTools} from '../utils/devTools';

const store = configureStore();

//Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

//console.log(Redirect);


export default React.createClass({
  render() {
    console.log('store', store);
    return (
      <div>
        <Provider store={store}>
          <Router history={history}>
            <Route path="/" component={Home}>
              <IndexRoute component={Main}/>
              <Route path="browse" component={MatchList}/>
              <Route path="score" component={Score}/>
            </Route>
          </Router>
        </Provider>
      </div>
    );
  }
});
