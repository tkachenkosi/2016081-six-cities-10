import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
// import {Offers} from './types/offer';
import {offers} from './mocks/offers';

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
    />
  </React.StrictMode>
);
