import {store} from '../store/index.js';
import {Offer, Review} from './offer';
import {AuthorizationStatus} from '../consts';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;


export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
}

export type DataProcess = {
  selectedCity: string;
  offers: Offer[];
  roomOffer: Offer;
  sortType: string;
  isDataLoaded: boolean;
  error: string | null;
  reviews: Review[];
  nearbyOffers: Offer[];
  favoriteOffers: Offer[];
  countFavorites: number;
};

