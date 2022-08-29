import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../consts';
import FavorotesList from '../../components/favorites-list/favorites-list';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import Header from '../../components/header/header';
import {fetchFavotiresAction} from '../../store/api-actions';
import {useAppSelector} from '../../hooks';
import {Offer} from '../../types/offer';
import {store} from '../../store/index';
import {getFavoriteOffers} from '../../store/data-process/selectors';


function FavoritesScreen(): JSX.Element {

  useEffect(() => {
    store.dispatch(fetchFavotiresAction());
  }, []);

  const offers: Offer[] = useAppSelector(getFavoriteOffers);

  return (
    <div className={`page ${offers.length === 0 && 'page--favorites-empty'}`}>
      <Header />

      {offers.length > 0 ?
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <FavorotesList offers = {offers} />
            </section>
          </div>
        </main> : <FavoritesEmpty />}

      <footer className="footer container">
        <Link to={AppRoute.Root} className="footer__logo-link">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
}


export default FavoritesScreen;
