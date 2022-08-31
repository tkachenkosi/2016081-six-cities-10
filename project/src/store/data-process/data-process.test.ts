import {dataProcess, setSelectCity, loadOffers, loadNearbyOffers, loadFavorites, loadRoomOffer, loadReviews, changeFavoritStatus} from './data-process';
import {Offer, Review} from '../../types/offer';
import {mockOffer, mockReview, mockCityName} from '../../mocks-test';
import {CITIES, SortType, INIT_OFFER} from '../../consts';

const mockOffers: Offer[] = [mockOffer];
const mockReviews: Review[] = [mockReview];

const state = {
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

describe('Reducer: test dataProcess', () => {
  it('empty parametrs', () => {
    expect(dataProcess.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
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
      });
  });

  it('set selected city', () => {
    expect(dataProcess.reducer(state, setSelectCity(mockCityName)))
      .toEqual({
        selectedCity: mockCityName,
        offers: [],
        roomOffer: INIT_OFFER,
        sortType: SortType.POPULAR,
        isDataLoaded: false,
        error: null,
        reviews: [],
        nearbyOffers: [],
        favoriteOffers: [],
        countFavorites: 0,
      });
  });

  it('load offers', () => {
    expect(dataProcess.reducer(state, loadOffers(mockOffers)))
      .toEqual({
        selectedCity: CITIES.Paris,
        offers: mockOffers,
        roomOffer: INIT_OFFER,
        sortType: SortType.POPULAR,
        isDataLoaded: false,
        error: null,
        reviews: [],
        nearbyOffers: [],
        favoriteOffers: [],
        countFavorites: 0,
      });
  });

  it('load nearbly offers', () => {
    expect(dataProcess.reducer(state, loadNearbyOffers(mockOffers)))
      .toEqual({
        selectedCity: CITIES.Paris,
        offers: [],
        roomOffer: INIT_OFFER,
        sortType: SortType.POPULAR,
        isDataLoaded: false,
        error: null,
        reviews: [],
        nearbyOffers: mockOffers,
        favoriteOffers: [],
        countFavorites: 0,
      });
  });

  it('load favorite offers', () => {
    expect(dataProcess.reducer(state, loadFavorites(mockOffers)))
      .toEqual({
        selectedCity: CITIES.Paris,
        offers: [],
        roomOffer: INIT_OFFER,
        sortType: SortType.POPULAR,
        isDataLoaded: false,
        error: null,
        reviews: [],
        nearbyOffers: [],
        favoriteOffers: mockOffers,
        countFavorites: mockOffers.length,
      });
  });

  it('load property offers', () => {
    expect(dataProcess.reducer(state, loadRoomOffer(mockOffers)))
      .toEqual({
        selectedCity: CITIES.Paris,
        offers: [],
        roomOffer: mockOffers,
        sortType: SortType.POPULAR,
        isDataLoaded: false,
        error: null,
        reviews: [],
        nearbyOffers: [],
        favoriteOffers: [],
        countFavorites: 0,
      });
  });

  it('load reviews', () => {
    expect(dataProcess.reducer(state, loadReviews(mockReviews)))
      .toEqual({
        selectedCity: CITIES.Paris,
        offers: [],
        roomOffer: INIT_OFFER,
        sortType: SortType.POPULAR,
        isDataLoaded: false,
        error: null,
        reviews: mockReviews,
        nearbyOffers: [],
        favoriteOffers: [],
        countFavorites: 0,
      });
  });

  it('set update offer', () => {
    expect(dataProcess.reducer(state, changeFavoritStatus(mockOffer)))
      .toEqual({
        selectedCity: CITIES.Paris,
        offers: mockOffers,
        roomOffer: INIT_OFFER,
        sortType: SortType.POPULAR,
        isDataLoaded: false,
        error: null,
        reviews: [],
        nearbyOffers: [],
        favoriteOffers: mockOffers,
        countFavorites: mockOffers.length,
      });
  });

});

