import {
  LIST_MATCHES,
  FILTER_MATCHES,
  STOP_BROWSING
} from '../constants/ActionTypes';
import fbdb from './../databases/firebase';
import _ from 'lodash';

export function listMatches() {
  //console.log('listMatches', fbdb);
  return (dispatch) => {
    //console.log('2', dispatch);
    fbdb.on('value', (snapshot) =>{
      console.log(typeof snapshot.val(), snapshot.val());
      const matches = snapshot.val();
      dispatch({
        type: LIST_MATCHES,
        matches
      });
    });
  }
}

export function filterMatches(playerId) {
  const matches = [];
  return {
    type: FILTER_MATCHES,
    matches
  }
}

// export function stopBrowsing() {
//   return {
//     type: STOP_BROWSING
//   }
// }

export function stopBrowsing() {
  console.log('stoppingBrowsing');
  return (dispatch) => {
    fbdb.off('value');
    dispatch({
      type: STOP_BROWSING,
      matches: {}
    });
  }
}
