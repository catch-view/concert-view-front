import React from 'react';
import { Box } from '@mui/material';
import { MapMarker } from 'react-kakao-maps-sdk';

// project imports
import navigation from 'src/assets/images/navigation.png';
import user from 'src/assets/images/user.png';
import location_64 from 'src/assets/images/location_64.png';

interface IMarker {
  position: {
    lat: number;
    lng: number;
  };
}
const Marker = ({ position }: IMarker) => {
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
    />
  );
};

export default Marker;
