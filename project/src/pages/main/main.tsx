import PlacesList from '../../components/places-list/places-list';
import MapOffers from '../../components/map/map';
import Header from '../../components/header/header';
import MainEmpty from '../../components/main-empty/main-empty';
import Locations from '../../components/locations/locations';
import SortingOffers from '../../components/sorting/sorting';
import {Offer} from '../../types/offer';
import {useAppSelector} from '../../hooks';
import {SortType} from '../../consts';


function MainScreen(): JSX.Element {
  const selectCity = useAppSelector((state) => state.selectedCity);
  const filteredOffers: Offer[] = useAppSelector((state) => state.offers).filter((offer) => offer.city.name === selectCity);
  const offersCount = filteredOffers.length;
  const isOffers: boolean = offersCount > 0;

  switch (useAppSelector((state) => state.sortType)) {
    case SortType.PRICE_TO_HIGH:
      filteredOffers.sort((a, b) => a.price - b.price );
      break;
    case SortType.PRICE_TO_LOW:
      filteredOffers.sort((a, b) => b.price - a.price );
      break;
    case SortType.TOP:
      filteredOffers.sort((a, b) => b.rating - a.rating );
  }

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Locations />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              {isOffers && <b className="places__found">{offersCount} places to stay in {selectCity}</b>}
              {isOffers && <SortingOffers />}

              <div className="cities__places-list places__list tabs__content">
                {isOffers ? <PlacesList offers={filteredOffers} /> : <MainEmpty />}

              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                {isOffers && <MapOffers offers={filteredOffers} selectedOffer={filteredOffers[0]} />}
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;

