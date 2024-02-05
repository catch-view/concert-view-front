import React from 'react';
import { MapMarker } from 'react-kakao-maps-sdk';

// project imports
import { useAppSelector } from 'src/store/hook';
import user from 'src/assets/images/user.png';

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
        src: user,
        size: {
          width: 32,
          height: 32,
        },
      }}
    ></MapMarker>
  );
};

export default Marker;
