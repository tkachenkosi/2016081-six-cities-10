import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Offer} from '../../types/offer';
import {AppRoute,CITIES} from '../../consts';
import FavoriteCard from '../favorite-card/favorite-card';
import {setSelectCity} from '../../store/action';
import {store} from '../../store/index';

type ListProps = {
  offers: Offer[];
}

function FavoritesList({offers}: ListProps): JSX.Element {
  const navigate = useNavigate();

  return (
    <ul className="favorites__list">
      {Object.values(CITIES).map((city) => {
        const offersFilterCity: Offer[] = offers.filter((offer) => offer.city.name === city);
        if (offersFilterCity.length > 0) {
          return (
            <li className="favorites__locations-items" key ={city}>
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="#" onClick={(evt) => {evt.preventDefault(); store.dispatch(setSelectCity(city));navigate(AppRoute.Root);}}>
                    <span>{city}</span>
                  </a>
                </div>
              </div>
              <div className="favorites__places">
                {offersFilterCity.map((offer: Offer) => <FavoriteCard key={offer.id} offer={offer} />)}
              </div>
            </li>
          );
        }
      })}
    </ul>
  );
}


export default FavoritesList;
