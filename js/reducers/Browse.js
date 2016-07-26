import * as ActionTypes from '../constants/ActionTypes';

let defaultState = {
  games: {

  },
  players: {

  }
};

export default function(state = defaultState, action) {
  console.log('in home reducer', 'state', state, 'action', action);
  switch (action.type) {
    case ActionTypes.LIST_MATCHES:
      return state;
    default:
      return state;
  }
}
