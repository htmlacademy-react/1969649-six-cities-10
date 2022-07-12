export enum AppRoute {
  Root = '/',
  Login = '/login',
  Empty = '/empty',
  Property = '/property',
  PropertyNotLogged = '/property-not-logged',
  Favorites = '/favorites',
  FavoritesEmpty = '/favorites-empty'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  // Unknown = 'UNKNOWN',
}