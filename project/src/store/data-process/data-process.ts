import {createSlice} from '@reduxjs/toolkit';
import {DataProcess} from '../../types/state';
import {NameSpace, CITIES, SortType, INIT_OFFER} from '../../consts';


const initialState: DataProcess = {
  selectedCity: CITIES.Paris,
  offers: [],
  roomOffer: INIT_OFFER,
  sortType: SortType.POPULAR,
  isDataLoaded: false,
  error: null,
  reviews: [],
  nearbyOffers: [],
  favoriteOffers: [],
  countFavorites: 0,
};

export const dataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    setSelectCity: (state, action) => {
      state.selectedCity = action.payload;
    },
    loadOffers: (state, action) => {
      state.offers = action.payload;
    },
    loadNearbyOffers: (state, action) => {
      state.nearbyOffers = action.payload;
    },
    loadFavorites: (state, action) => {
      state.favoriteOffers = action.payload;
      state.countFavorites = state.favoriteOffers.length;
    },
    loadRoomOffer: (state, action) => {
      state.roomOffer = action.payload;
    },
    loadReviews: (state, action) => {
      state.reviews = action.payload;
    },
    addReview: (state, action) => {
      state.reviews = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setDataLoadedStatus: (state, action) => {
      state.isDataLoaded = action.payload;
    },
    changeSort: (state, action) => {
      if (state.sortType !== action.payload) {
        state.sortType = action.payload;
      }
    },
    changeFavoritStatus: (state, action) => {
      if (!action.payload.isFavorite) {
        state.favoriteOffers = state.favoriteOffers.filter((offer) => offer.id !== action.payload.id);
      } else {
        state.favoriteOffers.push(action.payload);
      }
      state.countFavorites = state.favoriteOffers.length;
      const index = state.offers.findIndex((offer) => offer.id === action.payload.id);
      state.offers = [...state.offers.slice(0, index), action.payload, ...state.offers.slice(index + 1), ];
    },
  },
});

export const {setSelectCity, loadOffers, loadNearbyOffers, loadFavorites, loadRoomOffer, loadReviews, addReview, setError, setDataLoadedStatus, changeSort, changeFavoritStatus} = dataProcess.actions;
