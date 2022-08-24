import React from 'react';
import {useAppSelector} from '../../hooks';
import {useAppDispatch} from '../../hooks';
import {setSelectCity} from '../../store/data-process/data-process';
import {CITIES} from '../../consts';
import {getSelectCity} from '../../store/data-process/selectors';


function Locations(): JSX.Element {
  const dispatch = useAppDispatch();
  const selectCity = useAppSelector(getSelectCity);
  const citiesName = Object.values(CITIES);

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {citiesName.map((location: string) => (
          <li className="locations__item" key={location}>
            <a className={`locations__item-link tabs__item ${location === selectCity && 'tabs__item--active'}`} href="/"
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

