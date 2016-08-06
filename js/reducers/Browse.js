import * as ActionTypes from '../constants/ActionTypes';

export default function(state = {}, action) {
  switch (action.type) {
    case ActionTypes.LIST_MATCHES:
      return {...state, matches: action.matches};
    case ActionTypes.FILTER_MATCHES:
      return {...state, matches: action.matches};
    case ActionTypes.STOP_BROWSING:
      return {...state, matches: action.matches};
    default:
      return state;
  }
}
