import * as ActionTypes from '../constants/ActionTypes';

let defaultState = {
  games: {

  }
};

export default function(state = defaultState, action) {
  console.log('in browse reducer', 'state', state, 'action', action);
  switch (action.type) {
    case ActionTypes.LIST_MATCHES:
      console.log('in list matches');
      return state;
    default:
      return state;
  }
}
