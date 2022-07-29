import {store} from '../store/index.js';
import {Offer} from './offer';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type DataStore = {
  selectedCity: string,
  offers: Offer[],
  sortType: string,
};
