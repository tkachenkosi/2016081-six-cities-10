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
