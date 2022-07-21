import React from 'react';
import {Offer} from '../../types/offer';
import PlaceCard from '../place-card/place-card';

type ListProps = {
  offers: Offer[];
}

// <React.Fragment>
// </ React.Fragment>

function PlacesList({offers}: ListProps): JSX.Element {
  return (
    <>
      {offers.map((offer: Offer) => <PlaceCard key={offer.id} offer={offer} />)}
    </>
  );
}


export default PlacesList;
