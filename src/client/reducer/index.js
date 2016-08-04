import React from 'react';

import { HERO_FETCHED, HERO_ID_FETCHED } from '../actions/heroes';

const initialState = { heroes: {}, view: true };

const reducer = (state = initialState, action) => {
  switch(action.type) {
  case HERO_FETCHED:
    return {
      ...state,
      heroes: action.heroes,
      view: true
    }
  case HERO_ID_FETCHED:
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
