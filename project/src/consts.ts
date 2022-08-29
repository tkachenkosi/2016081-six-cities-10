export const RATING_STEP = 20;
export const TIMEOUT_SHOW_ERROR = 2000;

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorite = '/favorite',
  Room = '/offer/:id',
  NotFound = '/not--found'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKKNOWN'
}

export enum ReviewLimits {
  MaxCommentPerPage = 10,
  MinChar = 50,
  MaxChar = 300,
}

export enum HttpCode {
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
}

export enum TokenKey {
  Auth = 'six-cities-token',
  Avatar = 'six-cities-user-avatarurl',
  Email = 'six-cities-user-email',
}

export enum NameSpace {
  Data = 'DATA',
  User = 'USER',
}

export const CITIES = {
  Paris: 'Paris',
  Cologne: 'Cologne',
  Brussels: 'Brussels',
  Amsterdam: 'Amsterdam',
  Hamburg: 'Hamburg',
  Dusseldorf: 'Dusseldorf',
};

export const SortType = {
  POPULAR: 'Popular',
  PRICE_TO_HIGH: 'Price: low to high',
  PRICE_TO_LOW: 'Price: high to low',
  TOP: 'Top rated first',
};


export enum MarkerUrl {
  // Default = 'img/pin.svg',
  // Selected = 'img/pin-active.svg',
  Default = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
  Selected = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg',
}

export const INIT_CITY = {
  name: 'Paris',
  location: {
    latitude: 52.370216,
    longitude: 4.895168,
    zoom: 10,
  },
};

export const INIT_OFFER = {
  city: {
    name: '',
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 10,
    },
  },
  previewImage: '',
  images: [],
  title: '',
  isFavorite: false,
  isPremium: false,
  rating: 0,
  type: '  ',
  bedrooms: 0,
  maxAdults: 0,
  price: 0,
  goods: [],
  host: {
    id: 0,
    name: '',
    isPro: false,
    avatarUrl: '',
  },
  description: '',
  location: {
    latitude: 0,
    longitude: 0,
    zoom: 10,
  },
  id: -1,
};
