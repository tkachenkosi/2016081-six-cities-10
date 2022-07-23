
import React from 'react';
import {Offer} from '../../types/offer';
import NearCard from '../near-card/near-card';

type ListProps = {
  offers: Offer[];
}

function NearList({offers}: ListProps): JSX.Element {
  return (
    <>
      {offers.map((offer: Offer) => <NearCard key={offer.id} offer={offer} />)}
    </>
  );
}


export default NearList;
