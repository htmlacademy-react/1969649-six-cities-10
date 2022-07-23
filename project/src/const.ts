// пока в приложении нет логики авторизации, здесь можно явно задать состояние
export const isGuest = false;

// количество элементов в блоке «Список предложений неподалёку»
export const OFFERS_NEAR = 3;

export const REVIEW_LENGTH = 10;

export const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export const locations = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export enum AppRoute {
  Main = '/',
  MainEmpty = '/empty',
  Favorites = '/favorites',
  FavoritesEmpty = '/favorites-empty',
  Login = '/login',
  // OfferNotLogged = '/offer-not-logged',
  Offer = '/offer',
  OfferId = '/offer/:id',
  NotFound = '/not-found-screen'
}

export enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN', // будет задействована при запросе данных с сервера
}

export enum OfferType {
  Apartment = 'Apartment',
  Hotel = 'Hotel',
  House = 'House',
  Room = 'Private Room',
}

