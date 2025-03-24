import { City } from './types/city';

const NEAR_OFFERS_COUNT = 3;
const MIN_REVIEW_LENGTH = 50;
const URL_PIN_DEFAULT = '../../public/img/pin.svg';
const URL_PIN_ACTIVE = '../../public/img/pin-active.svg';

const AppRoute = {
  Root: '/',
  Login: '/login',
  Offer: '/offer/:id',
  Favorites: '/favorites',
} as const;

const AuthorizationStatus = {
  Auth: 'AUTH',
  NoAuth: 'NO_AUTH',
  Unknown: 'UNKNOWN',
} as const;

const SortType = {
  Popular: 'Popular',
  PriceUp: 'Price: low to high',
  PriceDown: 'Price: high to low',
  TopRated: 'Top rated first',
} as const;

const RatingType = {
  Perfect: { value: 5, title: 'perfect' },
  Good: { value: 4, title: 'good' },
  NotBad: { value: 3, title: 'not bad' },
  Badly: { value: 2, title: 'badly' },
  Terribly: { value: 1, title: 'terribly' },
} as const;

const CityName = {
  Paris: 'Paris',
  Cologne: 'Cologne',
  Brussels: 'Brussels',
  Amsterdam: 'Amsterdam',
  Hamburg: 'Hamburg',
  Dusseldorf: 'Dusseldorf',
} as const;

const CITIES: Record<keyof typeof CityName, City> = {
  Paris: {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13,
    },
  },
  Cologne: {
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13,
    },
  },
  Brussels: {
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13,
    },
  },
  Amsterdam: {
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13,
    },
  },
  Hamburg: {
    name: 'Hamburg',
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13,
    },
  },
  Dusseldorf: {
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13,
    },
  },
} as const;

export {
  NEAR_OFFERS_COUNT,
  MIN_REVIEW_LENGTH,
  URL_PIN_DEFAULT,
  URL_PIN_ACTIVE,
  AppRoute,
  AuthorizationStatus,
  SortType,
  RatingType,
  CityName,
  CITIES,
};
