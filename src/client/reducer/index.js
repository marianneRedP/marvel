import React from 'react';

import { HEROES_FETCHED, HERO_FETCHED } from '../actions/heroes';

const initialState = { heroes: {}, view: true };

const reducer = (state = initialState, action) => {
  switch(action.type) {
  case HEROES_FETCHED:
    return {
      ...state,
      heroes: action.heroes,
      view: true
    }
  case HERO_FETCHED:
    return {
      ...state,
      heroes: action.hero,
      view: false,
    }
    default:
      return state;
  }
};

export default reducer;


