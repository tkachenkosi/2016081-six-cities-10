import {createAction} from '@reduxjs/toolkit';
import {Offer} from '../types/offer';

export const setSelectCity = createAction('city/setSelectCity', (value: string) => ({payload: value}));
export const setOffers = createAction('city/setOffers', (value: Offer[]) => ({payload: value}));
export const setFilterOffers = createAction('city/setFilterOffer');

/*
configureStore — функция, предназначенная упростить процесс создания и настройки хранилища
createReducer — функция, помогающая лаконично и понятно описать и создать редьюсер
createAction — возвращает функцию создателя действия для заданной строки типа действия
createSlice — объединяет в себе функционал createAction и createReducer
createSelector — функция из библиотеки Reselect, переэкспортированная для простоты использования


 */
