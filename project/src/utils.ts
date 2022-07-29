import {RATING_STEP} from './consts';

export const getRandomInteger = (a = 1, b = 10) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const calcRating = (rating : number) => `${RATING_STEP * rating}%`;
