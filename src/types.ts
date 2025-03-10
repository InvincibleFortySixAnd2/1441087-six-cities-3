type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

type City = {
  name: string;
  location: Location;
};

type OfferBase = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
};

type OfferPreview = OfferBase & {
  previewImage: string;
};

type Offer = OfferBase & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: User;
  images: string[];
  maxAdults: number;
};

type Review = {
  id: string;
  date: Date;
  user: User;
  comment: string;
  rating: number;
};

export type { User, Location, City, OfferPreview, Offer, Review };
