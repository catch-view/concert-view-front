import React from 'react';
import { MapMarker } from 'react-kakao-maps-sdk';

// project imports
import PlaceOverlay from '../../PlaceOverlay';

import { useAppSelector } from 'src/store/hook';

import location_64 from 'src/assets/images/location_64.png';

interface IMarker {
  position: {
    lat: number;
    lng: number;
  };
}
const Marker = ({ position }: IMarker) => {
  const { focusingPlace } = useAppSelector((state) => state.map);

  return (
    <MapMarker
      position={position}
      image={{
        src: location_64,
        size: {
          width: 64,
          height: 64,
        },
      }}
    >
      {focusingPlace.placeName && <PlaceOverlay {...focusingPlace} />}
    </MapMarker>
  );
};

export default Marker;
