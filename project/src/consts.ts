export const RATING_STEP = 20;
export const TIMEOUT_SHOW_ERROR = 2000;

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKKNOWN'
}

export enum ReviewLimits {
  MaxCommentPerPage = 10,
  MinCharactersComment = 50,
  MaxCharactersComment = 300,
}

export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Nearby = '/nearby',
  Favorite = '/favorites',
  Reviews = '/comments',
}

export enum HttpCode {
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
}

export enum StorageKey {
  AuthToken = 'six-cities-token',
  UserAvatar = 'six-cities-user-avatar-url',
  UserEmail = 'six-cities-user-email',
}

export const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

// export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

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

