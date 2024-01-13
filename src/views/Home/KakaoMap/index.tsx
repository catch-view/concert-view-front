import React, { useEffect, useState } from 'react';
import { Box, CircularProgress } from '@mui/material';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

// project imports
import MapLoading from 'src/uis/Loadings/MapLoading';
import useGeolocation from 'src/hooks/useGeolocation';
import { useAppDispatch } from 'src/store/hook';

const KakaoMap = () => {
  const [mapLocState, setMapLocState] = useState({
    // 지도의 초기 위치
    center: { lat: 37.5728602, lng: 126.9759717 },
    // 지도 위치 변경시 panto를 이용할지에 대해서 정의
    isPanto: false,
  });

  const { loaded, coordinates, error } = useGeolocation();
  useEffect(() => {
    if (coordinates) {
      setMapLocState({
        center: {
          lat: coordinates?.lat || mapLocState.center.lat,
          lng: coordinates?.lng || mapLocState.center.lng,
        },
        isPanto: true,
      });
    }
  }, [loaded]);

  return (
    <Map // 지도를 표시할 Container
      id="map"
      center={{
        // 지도의 중심좌표
        lat: coordinates?.lat || mapLocState.center.lat,
        lng: coordinates?.lng || mapLocState.center.lng,
      }}
      style={{
        // 지도의 크기
        width: '100%',
        height: '100%',
      }}
    />
  );
};

export default KakaoMap;
