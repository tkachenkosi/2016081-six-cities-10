import {useEffect, useState, MutableRefObject} from 'react';
import {Map, TileLayer} from 'leaflet';
import {City} from '../../types/offer';

function useMap(mapRef: MutableRefObject<HTMLElement | null>, city: City): Map | null {

  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {

      // lat: city.location.latitude,
      // lng: city.location.longitude

      const instance = new Map(mapRef.current, {
        center: {
          lat: 52.370216,
          lng: 4.895168
        },
        zoom: city.location.zoom
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }
      );

      instance.addLayer(layer);

      setMap(instance);
      // не сохроняет в map
      // console.log('instance -->>', instance);
      // console.log('layer -->>', layer);
      // console.log('map -->>', map);
    }
  }, [mapRef, map, city]);

  return map;
}

export default useMap;

