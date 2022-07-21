import {useRef, useEffect} from 'react';
import {Icon, Marker} from 'leaflet';
import useMap from '../../hooks/useMap/useMap';
import {Offer} from '../../types/offer';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../consts';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  offers: Offer[];
  selectedOffer: Offer;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function MyMap({offers, selectedOffer}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, offers[0].city);

  console.log('len -3->>', offers.length);
  console.log('city -3->>', offers[0].city);
  console.log('ref -3->>', mapRef);
  console.log('map -3->>', map);

  useEffect(() => {
    if (map) {

      offers.forEach((offer) => {

        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker.setIcon(selectedOffer !== undefined && offer.id === selectedOffer.id
          ? currentCustomIcon
          : defaultCustomIcon
        ).addTo(map);

      });
    }
  }, [map, offers, selectedOffer]);

  return (
    // <section className="cities__map map" ref={mapRef} style={{height: '100%'}}></section>
    <div ref={mapRef} style={{height: '100%'}}></div>
    // <div ref={mapRef}></div>
  );

}

export default MyMap;

