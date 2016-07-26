import {
  VIEW_MATCHES,
  FILTER_MATCHES,
  CREATE_MATCH
} from '../constants/ActionTypes';
import fbdb from './../databases/firebase';
console.log(fbdb);

export function listMatches() {
  console.log(fbdb);
  return (dispatch) => {
    console.log('2', dispatch);
    fbdb.on('value', (snapshot) =>{
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
  return {
    type: CREATE_MATCH,
    matchData
  }
}
