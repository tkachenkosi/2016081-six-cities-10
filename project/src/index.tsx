import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './components/app/app';
import ErrorMessage from './components/error-message/error-message';
import {offers} from './mocks/offers';
import {reviews} from './mocks/reviews';
import {store} from './store/index';
// import {setOffers} from './store/action';
import {checkAuthAction, fetchOffersAction,} from './store/api-actions';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);


// store.dispatch(setOffers(offers));
store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ErrorMessage />
      <App
        // offersCount = {Offer.OFFERS_COUNT}
        offers = {offers}
        reviews = {reviews}
      />
    </Provider>
  </React.StrictMode>
);
