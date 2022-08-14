
import React from 'react';
import {Offer} from '../../types/offer';
import NearCard from '../near-card/near-card';

type ListProps = {
  offers: Offer[];
  selectMapOffer: (offer: Offer | null) => void;
}

function NearList({offers, selectMapOffer}: ListProps): JSX.Element {
  return (
    <>
      {offers.map((offer: Offer) => <NearCard key={offer.id} offer={offer} selectMapOffer={selectMapOffer} />)}
    </>
  );
}


export default NearList;
