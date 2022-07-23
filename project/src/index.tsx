import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {offers} from './mocks/offers';
import {reviews} from './mocks/reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);


const Offer = {
  OFFERS_COUNT: 9,
};

root.render(
  <React.StrictMode>
    <App
      offersCount = {Offer.OFFERS_COUNT}
      offers = {offers}
      reviews = {reviews}
    />
  </React.StrictMode>
);
