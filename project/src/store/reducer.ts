import {createReducer} from '@reduxjs/toolkit';
import {setSelectCity, setFilterOffers, setOffers} from './action';
import {DataStore} from '../types/state';
import {CITIES} from '../consts';
import {Offer} from '../types/offer';


const initialState: DataStore = {
  selectedCity: CITIES.Paris,
  filterOffers: [],
  offers: [],
};

const filterOffers = (offers: Offer[], city: string): Offer[] => offers.filter((offer) => offer.city.name === city);

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setSelectCity, (state, action) => {
      state.selectedCity = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
      state.filterOffers = filterOffers(state.offers, state.selectedCity);
    })
    .addCase(setFilterOffers, (state) => {
      state.filterOffers = filterOffers(state.offers, state.selectedCity);
    });
});

export {reducer};
