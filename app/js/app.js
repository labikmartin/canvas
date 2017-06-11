//- ### ### ### ### ### ### ### ###
//- BUILD
//- ### ### ### ### ### ### ###

//- ### CSS BUILD
import scss from './sass/styles.scss';
 
//- ### TEMPLATES BUILD
function requireAll (r) { r.keys().forEach(r); }
requireAll(require.context('./templates/', false, /\.pug$/));

//- ### ### ### ### ### ### ### ### 
//- APP
//- ### ### ### ### ### ### ###

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './js/components/index';
import reducers from './js/reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
