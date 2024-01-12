import React, { useEffect, useState } from 'react';
import { Box, CircularProgress } from '@mui/material';
import { Map } from 'react-kakao-maps-sdk';

// project imports
import MapLoading from 'src/uis/Loadings/MapLoading';
import { useAppDispatch } from 'src/store/hook';
import useGeolocation from 'src/hooks/useGeolocation';

const Home = () => {
  const dispatch = useAppDispatch();
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
    <Box
      sx={{
        height: '500px',
        display: 'flex',
      }}
    >
      fk
      <MapLoading />
      {/*{loaded && <Map center={mapLocState.center} />} */}
    </Box>
  );
};

export default Home;
