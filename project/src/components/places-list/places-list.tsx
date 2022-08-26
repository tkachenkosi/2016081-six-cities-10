import React from 'react';
import {Offer} from '../../types/offer';
import PlaceCard from '../place-card/place-card';

type ListProps = {
  offers: Offer[];
  selectMapOffer: (offer: Offer | null) => void;
}

function PlacesList({offers, selectMapOffer}: ListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer: Offer) => <PlaceCard key={offer.id} offer={offer} selectMapOffer={selectMapOffer} />)}
    </div>
  );
}


export default PlacesList;
