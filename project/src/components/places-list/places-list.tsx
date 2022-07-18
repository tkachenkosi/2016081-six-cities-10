import React from 'react';
import {Offer, Offers} from '../../types/offer';
import PlaceCard from '../place-card/place-card';

type ListProps = {
  offers: Offers;
}

function PlacesList({offers}: ListProps): JSX.Element {
  return (
    <React.Fragment>
      {offers.map((offer: Offer) => <PlaceCard key={offer.id} offer={offer} />)}
    </ React.Fragment>
  );
}


export default PlacesList;
