import {createReducer} from '@reduxjs/toolkit';
import {setSelectCity} from './action';
import {DataStore} from '../types/state';
import {CITIES} from '../consts';

// const FIRST_CITY = 0;

const initialState: DataStore = {
  selectedCity: CITIES.Paris,
  filterOffers: [],
};


const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setSelectCity, (state, action) => {
      state.selectedCity = action.payload;
    });
});

export {reducer};
