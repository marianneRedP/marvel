import React from 'react';
import ReactDom from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import App from './container/app';
import HeroID from './components/hero_id';
import { fetchHeroes } from './actions/heroes';
import _ from 'lodash';
import reducer from './reducer'
import { Router, Route, browserHistory } from 'react-router';

const store = createStore(
  reducer,
  applyMiddleware(thunk, createLogger()),
);

store.dispatch(fetchHeroes());

ReactDom.render(
  <Provider store={ store }>
    <Router history={ browserHistory }>
      <Route path='/' component={ App } >
        <Route path='/hero' component={ HeroID }/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('marvel'),
);

