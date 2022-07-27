import React from 'react';
import {useAppSelector} from '../../hooks';
import {useAppDispatch} from '../../hooks';
import {setSelectCity} from '../../store/action';
import {CITIES} from '../../consts';


function Locations(): JSX.Element {
  const dispatch = useAppDispatch();
  const selectCity = useAppSelector((state) => state.selectedCity);
  const citiesName = Object.values(CITIES);

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {citiesName.map((location: string) => (
          <li className="locations__item" key={location}>
            <a className={`locations__item-link tabs__item ${location === selectCity && 'tabs__item--active'}`} href="#"
              onClick={(evt) => {
                evt.preventDefault();
                dispatch(setSelectCity(location));
              }}
            >
              <span>{location}</span>
            </a>
          </li>
        ),
        )}

      </ul>
    </section>
  );
}

export default Locations;

