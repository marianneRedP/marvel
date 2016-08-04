import React from 'react';
import ReactDom from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import App from './container/app';
import { fetchHeroes, fetchHeroesID } from './actions/heroes';
import _ from 'lodash';
import reducer from './reducer'

const store = createStore(
  reducer,
  applyMiddleware(thunk, createLogger()),
);

store.dispatch(fetchHeroes());

ReactDom.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('marvel'),
);
