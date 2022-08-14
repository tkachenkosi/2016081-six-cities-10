import {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import {Icon, LayerGroup} from 'leaflet';
import useMap from '../../hooks/useMap/useMap';
import {Offer} from '../../types/offer';
import {MarkerUrl, INIT_CITY} from '../../consts';
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
  const centerMap = offers.length > 0 ? offers[0].city : INIT_CITY;
  const map = useMap(mapRef, centerMap);
  const {latitude, longitude, zoom } = centerMap.location;


  useEffect(() => {
    let layer: LayerGroup;
    if (map) {
      map.scrollWheelZoom.disable();
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

    // return () => {
    //   layer?.clearLayers();
    // };

  }, [map, offers, selectedOffer]);

  return (
    <section style={{height: '100%'}} ref={mapRef}>
    </section>
  );

}

export default MapOffers;

