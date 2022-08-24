import {NameSpace} from '../../consts';
import type {State} from '../../types/state';
import {Offer, Review} from '../../types/offer';


export const getLoadedDataStatus = (state: State): boolean => state[NameSpace.Data].isDataLoaded;
export const getSelectCity = (state: State): string => state[NameSpace.Data].selectedCity;
export const getCountFavorites = (state: State): number => state[NameSpace.Data].countFavorites;
export const getSortType = (state: State): string => state[NameSpace.Data].sortType;
export const getError = (state: State): string | null => state[NameSpace.Data].error;
export const getFavoriteOffers = (state: State): Offer[] => state[NameSpace.Data].favoriteOffers;
export const getOffers = (state: State): Offer[] => state[NameSpace.Data].offers;
export const getNearbyOffers = (state: State): Offer[] => state[NameSpace.Data].nearbyOffers;
export const getRoomOffer = (state: State): Offer => state[NameSpace.Data].roomOffer;
export const getReviews = (state: State): Review[] => state[NameSpace.Data].reviews;

