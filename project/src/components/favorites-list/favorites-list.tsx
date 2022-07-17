
import React from 'react';
import {Offer, Offers} from '../../types/offer';
import FavoriteCard from '../favorite-card/favorite-card';

type ListProps = {
  offers: Offers;
}

function FavoritesList({offers}: ListProps): JSX.Element {
  return (
    <React.Fragment>
      {offers.map((offer: Offer) => <FavoriteCard key={offer.id} offer={offer} />)}
    </ React.Fragment>
  );
}


export default FavoritesList;
