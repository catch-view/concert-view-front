import React, { useEffect, useState } from 'react';
import { Map } from 'react-kakao-maps-sdk';

// project imports
import Marker from './Marker';
import MapLoading from 'src/uis/Loadings/MapLoading';
import { useAppSelector, useAppDispatch } from 'src/store/hook';
import {
  setFocusingPosition,
  setUserPosition,
} from 'src/store/features/map/mapSlice';

const KakaoMap = () => {
  const { userPosition, focusingPosition } = useAppSelector(
    (state) => state.map
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    console.log('kakao map rendered');
    dispatch(setFocusingPosition({ ...userPosition }));
  }, [userPosition]);

  return (
    <Map
      id="map"
      center={{
        // 지도의 중심좌표
        lat: focusingPosition?.lat || 0,
        lng: focusingPosition?.lng || 0,
      }}
      style={{
        // 지도의 크기
        width: '100%',
        height: '100%',
      }}
    >
      <Marker
        position={{
          // 지도의 중심좌표
          lat: userPosition?.lat || 0,
          lng: userPosition?.lng || 0,
        }}
      />
    </Map>
  );
};

export default KakaoMap;
