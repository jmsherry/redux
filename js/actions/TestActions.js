import { DOG_WASHED } from '../constants/ActionTypes';

export function washDog(text) {
  return {
    type: DOG_WASHED,
    text
  }
}
