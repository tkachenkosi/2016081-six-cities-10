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

function MapOffers({offers, selectedOffer}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, offers[0].city);

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
    <div ref={mapRef} style={{height: '100%'}}></div>
  );

}

export default MapOffers;

