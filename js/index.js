import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import es6p from 'es6-promise';

es6p.polyfill();


ReactDOM.render(<App />, document.getElementById('app-container'));
