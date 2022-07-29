import React from 'react';
import {Offer} from '../../types/offer';
import PlaceCard from '../place-card/place-card';
// import {useAppSelector} from '../../hooks';

type ListProps = {
  offers: Offer[];
}

// <React.Fragment>
// </ React.Fragment>

function PlacesList({offers}: ListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer: Offer) => <PlaceCard key={offer.id} offer={offer} />)}
    </div>
  );
}


export default PlacesList;
