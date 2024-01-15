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

  // 최초 렌더링 시 현재 사용자 접속 위치 focusing
  useEffect(() => {
    dispatch(setFocusingPosition({ ...userPosition }));
  }, [userPosition]);

  return (
    <Map
      id="map"
      center={{
        lat: focusingPosition.lat || 0,
        lng: focusingPosition.lng || 0,
      }}
      isPanto={true}
      style={{
        // 지도의 크기
        width: '100%',
        height: '100%',
      }}
    >
      {/* 접속자 위치 마커 */}
      <Marker
        position={{
          // 마커 좌표
          lat: focusingPosition?.lat || 0,
          lng: focusingPosition?.lng || 0,
        }}
      />
    </Map>
  );
};

export default KakaoMap;
