import {store} from '../store/index.js';
import {Offer, Review} from './offer';
import {AuthorizationStatus} from '../consts';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type DataStore = {
  selectedCity: string,
  offers: Offer[],
  sortType: string,
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
  error: string | null,
};
