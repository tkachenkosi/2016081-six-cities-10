import PlacesList from '../../components/places-list/places-list';
import SortingOffers from '../../components/sorting/sorting';
import MapOffers from '../../components/map/map';
import {Offer} from '../../types/offer';


type PlaceContainerProps = {
  filteredOffers: Offer[];
  selectCity: string;
}

function PlaceContainer({filteredOffers, selectCity}: PlaceContainerProps): JSX.Element {
  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{filteredOffers.length} places to stay in {selectCity}</b>
        <SortingOffers />
        <PlacesList offers={filteredOffers} />

      </section>
      <div className="cities__right-section">
        <section className="cities__map map">
          <MapOffers offers={filteredOffers} selectedOffer={filteredOffers[0]} />
        </section>
      </div>
    </div>
  );
}


export default PlaceContainer;
