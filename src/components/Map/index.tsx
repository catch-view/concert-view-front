import React from 'react';
import { Map } from 'react-kakao-maps-sdk';

const MapTest = () => {
  return (
    <div>
      <Map
        center={{ lat: 33.5563, lng: 126.79581 }}
        style={{ width: '100%', height: '100vh' }}
      ></Map>
    </div>
  );
};

export default MapTest;
