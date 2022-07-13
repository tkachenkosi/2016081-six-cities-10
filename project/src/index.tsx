import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

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
    />
  </React.StrictMode>,
);
