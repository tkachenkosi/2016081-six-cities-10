import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './components/app/app';
import {offers} from './mocks/offers';
import {reviews} from './mocks/reviews';
import {store} from './store/index';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);


const Offer = {
  OFFERS_COUNT: 9,
};

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        offersCount = {Offer.OFFERS_COUNT}
        offers = {offers}
        reviews = {reviews}
      />
    </Provider>
  </React.StrictMode>
);
