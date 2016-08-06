import * as ActionTypes from '../constants/ActionTypes';

let defaultState = {
  matches: {

  },
  players: {

  }
};

export default function(state = defaultState, action) {
  //console.log('in score reducer', 'state', state, 'action', action);
  switch (action.type) {
    case ActionTypes.LIST_MATCHES:
    console.log('listing matches');
      return state;
    default:
      return state;
  }
}
