import {
  CREATE_MATCH,
  SCORE,
  FOUL,
  CHANGE_PLAYER,
  END_MATCH_WIN,
  END_MATCH_DQ,
  END_MATCH_ABANDON
} from '../constants/ActionTypes';
import _ from 'lodash';

export function createMatch(matchData) {
  matchdata._id = _.uniqueId();
  return {
    type: CREATE_MATCH,
    matchData
  }
}

export function score(playerId, ball) {
  return {
    type: SCORE,
    playerId,
    ball
  }
}

export function foul(playerId, penalty) {
  return {
    type: FOUL,
    playerId,
    penalty
  }
}

export function changePlayer() {
  return {
    type: CHANGE_PLAYER
  }
}

export function winMatch(id) {
  return {
    type: END_MATCH_WIN,
    id
  }
}

export function dqMatch(id, playerId) {
  return {
    type: END_MATCH_DQ,
    id,
    playerId
  }
}

export function abandonMatch(id) {
  return {
    type: END_MATCH_ABANDON,
    id
  }
}
