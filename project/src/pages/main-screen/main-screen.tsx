import PlaceContainer from '../../components/place-container/place-container';
import Header from '../../components/header/header';
import MainEmpty from '../../components/main-empty/main-empty';
import Locations from '../../components/locations/locations';
import {Offer} from '../../types/offer';
import {useAppSelector} from '../../hooks';
import {SortType} from '../../consts';
import {getSelectCity, getSortType, getOffers} from '../../store/data-process/selectors';


function MainScreen(): JSX.Element {
  const selectCity = useAppSelector(getSelectCity);
  const filteredOffers: Offer[] = useAppSelector(getOffers).filter((offer) => offer.city.name === selectCity);
  const offersCount = filteredOffers.length;

  switch (useAppSelector(getSortType)) {
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
    <div className="page page--gray page--main" data-testid="main-page">
      <Header />

      <main className={`page__main page__main--index ${offersCount === 0 && 'page__main--index-empty'}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Locations />
        </div>
        <div className="cities">
          {offersCount > 0 ? <PlaceContainer filteredOffers={filteredOffers} selectCity={selectCity} /> : <MainEmpty />}
        </div>
      </main>
    </div>
  );
}

export default MainScreen;

