export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id'
}


export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unrnown = 'UNKKNOWN'
}


export enum ReviewLimits {
  MaxCommentPerPage = 10,
  MinCharactersComment = 50,
  MaxCharactersComment = 300,
}

