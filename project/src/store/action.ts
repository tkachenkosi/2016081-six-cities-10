import {createAction} from '@reduxjs/toolkit';
import {Offer, Review} from '../types/offer';
import {AuthorizationStatus} from '../consts';
import {AppRoute} from '../consts';

export const redirectToRoute = createAction<AppRoute>('redirectToRoute');
export const setSelectCity = createAction('city/setSelectCity', (value: string) => ({payload: value}));
export const setOffers = createAction('city/setOffers', (value: Offer[]) => ({payload: value}));
export const changeSort = createAction('sort/changeSort', (value: string) => ({payload: value}));
export const loadOffers = createAction<Offer[]>('data/loadOffers');
export const loadReviews = createAction<Review[]>('data/loadReviews');
export const requireAuthorization = createAction<AuthorizationStatus>('user/AuthorizationStatus');
export const setError = createAction<string | null>('game/setError');
export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');

