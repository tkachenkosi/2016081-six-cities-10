import {createReducer} from '@reduxjs/toolkit';
import {setSelectCity, setOffers, changeSort, loadOffers, loadReviews, requireAuthorization, setError, setDataLoadedStatus} from './action';
import {DataStore} from '../types/state';
import {CITIES, SortType, AuthorizationStatus} from '../consts';


const initialState: DataStore = {
  selectedCity: CITIES.Paris,
  offers: [],
  sortType: SortType.POPULAR,
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  error: null,
  reviews: [],
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
    .addCase(loadReviews, (state, action) => {
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
    });
});

export {reducer};
