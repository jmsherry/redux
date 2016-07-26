import {
  VIEW_MATCHES,
  FILTER_MATCHES,
  CREATE_MATCH
} from '../constants/ActionTypes';
import fbdb from './../databases/firebase';
import _ from 'lodash';

export function listMatches() {
  console.log('listMatches', fbdb);
  return (dispatch) => {
    console.log('2', dispatch);
    fbdb.child('games').on('value', (snapshot) =>{
      console.log('3', snapshot);
      dispatch({
        type: LIST_MATCHES,
        payload: snapshot.val()
      });
    });
  }
}

export function filterMatches(playerId) {
  return {
    type: FILTER_MATCHES,
    playerId
  }
}

export function createMatch(matchData) {
  matchdata._id = _.uniqueId();
  return {
    type: CREATE_MATCH,
    matchData
  }
}
