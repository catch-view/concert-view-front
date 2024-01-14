import React from 'react';
import { Box } from '@mui/material';
import { MapMarker } from 'react-kakao-maps-sdk';

// project imports
import navigation from 'src/assets/images/navigation.png';
import user from 'src/assets/images/user.png';

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
        src: user,
        size: {
          width: 32,
          height: 32,
        },
      }}
    />
  );
};

export default Marker;
