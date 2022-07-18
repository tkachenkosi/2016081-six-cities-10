export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type City = {
  location: Location;
  name: string;
};

export type Host = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
};

export type Offer = {
  id: number;
  bedrooms: number;
  city: City;
  description: string;
  goods: string[];
  host: Host;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: Location;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
};


export type Review = {
  comment: string
  date: string
  id: number
  rating: number
  user: {
    avatarUrl: string
    id: number
    isPro: boolean
    name: string
  }
};

export type NewReview = {
  roomId: number | null,
  comment: string,
  rating: number,
};


export type Offers = Offer[];
export type Reviews = Review[];

/*

previewImage  Изображение
isPremium     Премиальность
price         Стоимость за ночь
title         Заголовок
type          Тип жилья
isFavorite    Избранное
rating        Рейтинг

bedrooms      Фотографии
bedrooms      Подробное описание
bedrooms      Количество спален
maxAdults     Максимальное количество гостей
goods         Список бытовых предметов в квартире
host          Информация о хозяине

Аватар автора.
Имя автора.
Оценку. Оценка выводится в виде закрашенных звезд.
Дата отзыва в формате: Месяц Год. Например: April 2019.
Текст отзыва.

*/

