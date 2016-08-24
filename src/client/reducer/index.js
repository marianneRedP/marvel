import React from 'react';

import { HEROES_FETCHED, HERO_FETCHED } from '../actions/heroes';

const initialState = { heroes: {} };

const reducer = (state = initialState, action) => {
  switch(action.type) {
  case HEROES_FETCHED:
    return {
      ...state,
      heroes: action.heroes,
    }
  case HERO_FETCHED:
    return {
      ...state,
      heroes: action.hero,
    }
    default:
      return state;
  }
};

export default reducer;


