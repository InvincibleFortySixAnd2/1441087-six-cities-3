import { Action } from '@reduxjs/toolkit';
import { OfferFull, OfferPreview, OfferPreviews } from '../types/offer-types';
import { Reviews } from '../types/review-types';
import { CurrentUser } from '../types/user-types';

export const getMockOfferPreviews = (): OfferPreviews => [
  {
    id: 'e5a2a853-caba-47a1-b63e-c9c649021122',
    title: 'House in countryside',
    type: 'room',
    price: 195,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/5.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.858610000000006,
      longitude: 2.330499,
      zoom: 16,
    },
    isFavorite: true,
    isPremium: false,
    rating: 2.3,
  },
  {
    id: '40c73477-9799-4da0-997b-bf284d2b13bf',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'room',
    price: 123,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/15.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.834610000000005,
      longitude: 2.335499,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.9,
  },
];

export const getMockOfferFull = (): OfferFull => ({
  id: '89b6ae84-2724-4369-ab85-6877dbdd2795',
  title: 'Perfectly located Castro',
  description:
    'Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.',
  type: 'room',
  price: 299,
  images: [
    'https://16.design.htmlacademy.pro/static/hotel/14.jpg',
    'https://16.design.htmlacademy.pro/static/hotel/9.jpg',
    'https://16.design.htmlacademy.pro/static/hotel/20.jpg',
    'https://16.design.htmlacademy.pro/static/hotel/7.jpg',
    'https://16.design.htmlacademy.pro/static/hotel/6.jpg',
    'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
  ],
  city: {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13,
    },
  },
  location: {
    latitude: 48.868610000000004,
    longitude: 2.342499,
    zoom: 16,
  },
  goods: [
    'Air conditioning',
    'Wi-Fi',
    'Laptop friendly workspace',
    'Towels',
    'Washing machine',
    'Kitchen',
    'Baby seat',
    'Breakfast',
    'Fridge',
    'Washer',
    'Dishwasher',
    'Coffee machine',
  ],
  host: {
    isPro: true,
    name: 'Angelina',
    avatarUrl:
      'https://16.design.htmlacademy.pro/static/host/avatar-angelina.jpg',
  },
  isPremium: true,
  isFavorite: false,
  rating: 3.4,
  bedrooms: 1,
  maxAdults: 2,
});

export const getMockOfferFullPreview = (): OfferPreview => ({
  id: '89b6ae84-2724-4369-ab85-6877dbdd2795',
  title: 'Perfectly located Castro',
  type: 'room',
  price: 299,
  previewImage: 'https://16.design.htmlacademy.pro/static/hotel/5.jpg',
  city: {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13,
    },
  },
  location: {
    latitude: 48.868610000000004,
    longitude: 2.342499,
    zoom: 16,
  },
  isPremium: true,
  isFavorite: false,
  rating: 3.4,
});

export const getMockReviews = (): Reviews => [
  {
    id: 'ecefb027-adde-4aa7-b53d-6f35093252dd',
    comment:
      'What an amazing view! The house is stunning and in an amazing location. The large glass wall had an amazing view of the river!',
    date: '2025-02-10T21:00:00.468Z',
    rating: 5,
    user: {
      name: 'Mollie',
      avatarUrl: 'https://16.design.htmlacademy.pro/static/avatar/6.jpg',
      isPro: false,
    },
  },
  {
    id: 'a127e283-903e-4e1b-a5d8-75008d0039c1',
    comment:
      'Home is amazing. It\'s like staying in a museum. The rooms, furnishings and artworks are incredible. The views of My Vesuvius',
    date: '2025-02-07T21:00:00.468Z',
    rating: 2,
    user: {
      name: 'Jack',
      avatarUrl: 'https://16.design.htmlacademy.pro/static/avatar/7.jpg',
      isPro: true,
    },
  },
];

export const getMockCurrentUser = (): CurrentUser => ({
  email: 'test@mail.com',
  token: 'dGVzdEBtYWlsLmNvbQ==',
  name: 'test',
  avatarUrl: 'https://16.design.htmlacademy.pro/static/avatar/4.jpg',
  isPro: false,
});

export const extractActionsTypes = (actions: Action<string>[]) => actions.map(({ type }) => type);
