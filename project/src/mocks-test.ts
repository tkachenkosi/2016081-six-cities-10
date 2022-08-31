import {name, address, datatype, date, image, lorem} from 'faker';

export const mockCityName = 'Amsterdam';

export const mockOffer = {
  id: datatype.number(1),
  previewImage: image.image(),
  images: [image.image(), image.image()],
  title: lorem.sentence(),
  isFavorite: true,
  isPremium: datatype.boolean(),
  rating: datatype.number(1),
  type: lorem.word(),
  bedrooms: datatype.number(1),
  maxAdults: datatype.number(1),
  price: datatype.number(1),
  goods: [lorem.word(), lorem.word(), lorem.word(), lorem.word(), lorem.word()],
  city: {
    name: mockCityName,
    location: {
      latitude: Number(address.latitude()),
      longitude: Number(address.longitude()),
      zoom: datatype.number(1),
    },
  },
  host: {
    id: datatype.number(1),
    name: lorem.word(),
    isPro: datatype.boolean(),
    avatarUrl: image.image(),
  },
  description: lorem.sentence(),
  location: {
    latitude: Number(address.latitude()),
    longitude: Number(address.longitude()),
    zoom: datatype.number(1),
  },
};


export const mockReview = {
  id: datatype.number(1),
  rating: datatype.number(1),
  comment: lorem.sentence(),
  date: date.recent().toISOString(),
  user: {
    id: datatype.number(1),
    isPro: datatype.boolean(),
    name: name.findName(),
    avatarUrl: image.image(),
  },
};
