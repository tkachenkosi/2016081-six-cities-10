import {createReducer} from '@reduxjs/toolkit';
import {setSelectCity, setOffers, changeSort, loadOffers, loadNearbyOffers, loadRoomOffer, loadReviews, requireAuthorization, setError, setDataLoadedStatus, changeFavoritStatus, addReview} from './action';
import {DataStore} from '../types/state';
import {CITIES, SortType, AuthorizationStatus, INIT_OFFER} from '../consts';


const initialState: DataStore = {
  selectedCity: CITIES.Paris,
  offers: [],
  roomOffer: INIT_OFFER,
  sortType: SortType.POPULAR,
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  error: null,
  reviews: [],
  nearbyOffers: [],
  favoriteOffers: [],
};


const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setSelectCity, (state, action) => {
      state.selectedCity = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(loadRoomOffer, (state, action) => {
      state.roomOffer = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(addReview, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(changeSort, (state, action) => {
      if (state.sortType !== action.payload) {
        state.sortType = action.payload;
      }
    })
    .addCase(changeFavoritStatus, (state, action) => {
      if (!action.payload.isFavorite) {
        state.favoriteOffers = state.favoriteOffers.filter((offer) => offer.id !== action.payload.id);
      }
      const index = state.offers.findIndex((offer) => offer.id === action.payload.id);
      state.offers = [...state.offers.slice(0, index), action.payload, ...state.offers.slice(index + 1), ];
    });
});

export {reducer};
