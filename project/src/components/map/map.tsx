import {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import {Icon, LayerGroup} from 'leaflet';
import useMap from '../../hooks/useMap/useMap';
import {Offer} from '../../types/offer';
import {MarkerUrl} from '../../consts';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  offers: Offer[];
  selectedOffer: Offer | null;
}

const defaultCustomIcon = new Icon({
  iconUrl: MarkerUrl.Default,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: MarkerUrl.Selected,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});


function MapOffers({offers, selectedOffer}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, offers[0].city);
  const {latitude, longitude, zoom } = offers[0].city.location;

  useEffect(() => {
    let layer: LayerGroup;
    if (map) {
      layer = new LayerGroup().addTo(map);

      offers.forEach((offer) => {
        leaflet.marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        },
        {
          icon: (selectedOffer !== null && offer.id === selectedOffer.id)
            ? currentCustomIcon
            : defaultCustomIcon,
        }).addTo(layer);
      });

      map.flyTo([latitude, longitude], zoom);
    }

    return () => {
      layer?.clearLayers();
    };

  }, [map, offers, selectedOffer]);

  return (
    <section className="cities__map map" style={{height: '100%'}} ref={mapRef}>
    </section>
  );

}

export default MapOffers;

