import {createReducer} from '@reduxjs/toolkit';
import {setSelectCity, setOffers, changeSort} from './action';
import {DataStore} from '../types/state';
import {CITIES, SortType} from '../consts';


const initialState: DataStore = {
  selectedCity: CITIES.Paris,
  offers: [],
  sortType: SortType.POPULAR,
};


const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setSelectCity, (state, action) => {
      state.selectedCity = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeSort, (state, action) => {
      if (state.sortType !== action.payload) {
        state.sortType = action.payload;
      }
    });
});

export {reducer};
