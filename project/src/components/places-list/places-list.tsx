import React from 'react';
import {Offer} from '../../types/offer';
import PlaceCard from '../place-card/place-card';
import {useAppSelector} from '../../hooks';

type ListProps = {
  offers: Offer[];
}

// <React.Fragment>
// </ React.Fragment>

function PlacesList({offers}: ListProps): JSX.Element {
  const dataOffers = useAppSelector((state) => state.filterOffers);
  console.log('-->',offers);
  return (
    <>
      {dataOffers.map((offer: Offer) => <PlaceCard key={offer.id} offer={offer} />)}
    </>
  );
}


export default PlacesList;
