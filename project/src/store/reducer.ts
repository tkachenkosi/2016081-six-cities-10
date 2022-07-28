import {createReducer} from '@reduxjs/toolkit';
import {setSelectCity, setOffers} from './action';
import {DataStore} from '../types/state';
import {CITIES} from '../consts';


const initialState: DataStore = {
  selectedCity: CITIES.Paris,
  offers: [],
};


const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setSelectCity, (state, action) => {
      state.selectedCity = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
      // state.filterOffers = filterOffers(state.offers, state.selectedCity);
    });
});

export {reducer};
