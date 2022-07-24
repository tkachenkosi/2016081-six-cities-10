import {createReducer} from '@reduxjs/toolkit';
import {selectCity} from './action';
import {CITIES} from '../consts';

const FIRST_CITY = CITIES.Paris;

const initialState = {
  city: FIRST_CITY,
};


const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCity, (state) => {
      state.city = FIRST_CITY;
    });
});

export {reducer};
