import React from 'react';
import ReactDom from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import App from './containers/app';
import Heroes from './containers/heroes';
import HeroID from './containers/hero_id';
import reducer from './reducer'
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

//const reducers = combineReducers({
 // reducer,
//  routing: routerReducer
//})

const store = createStore(
  reducer,
  applyMiddleware(thunk, createLogger()),
);

//const history = syncHistoryWithStore(browserHistory, store);


ReactDom.render(
  <Provider store={ store }>
    <Router history={ browserHistory }>
      <Route path='/' component={ App } >
        <IndexRoute component={ Heroes } />
        <Route path='/hero/:id' component={ HeroID }/>   
      </Route>
    </Router>
  </Provider>,
  document.getElementById('marvel'),
);

