import React, { useEffect, useState } from 'react';
import { Map } from 'react-kakao-maps-sdk';

// project imports
import UserMarker from './Marker/UserMarker';
import PlaceMarker from './Marker/PlaceMarker';
import MapLoading from 'src/uis/Loadings/MapLoading';
import { useAppSelector, useAppDispatch } from 'src/store/hook';
import {
  setFocusingPlace,
  setUserPosition,
} from 'src/store/features/map/mapSlice';

const KakaoMap = () => {
  const { userPosition, focusingPlace } = useAppSelector((state) => state.map);
  const dispatch = useAppDispatch();

  // 최초 렌더링 시 현재 사용자 접속 위치 focusing
  useEffect(() => {
    dispatch(
      setFocusingPlace({
        ...focusingPlace,
        lat: userPosition.lat,
        lng: userPosition.lng,
      })
    );
  }, [userPosition]);

  return (
    <Map
      id="map"
      center={{
        lat: focusingPlace.lat ?? 0,
        lng: focusingPlace.lng ?? 0,
      }}
      isPanto={true}
      style={{
        // 지도의 크기
        width: '100%',
        height: '100%',
      }}
    >
      {/* 접속자 위치 마커 */}
      <UserMarker
        position={{
          // 마커 좌표
          lat: userPosition?.lat ?? 0,
          lng: userPosition?.lng ?? 0,
        }}
      />

      {/* 포커싱 장소 마커 */}
      {focusingPlace.placeName && (
        <PlaceMarker
          position={{
            lat: focusingPlace?.lat ?? 0,
            lng: focusingPlace?.lng ?? 0,
          }}
        />
      )}
    </Map>
  );
};

export default KakaoMap;
