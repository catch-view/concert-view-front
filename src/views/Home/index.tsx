import React, { useEffect, useState } from 'react';
import { Box, IconButton, styled } from '@mui/material';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

// material icons
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';

// project imports
import KakaoMap from './KakaoMap';
import PlacesDrawer from './PlacesDrawer';
import MapLoading from 'src/uis/Loadings/MapLoading';
import { useAppDispatch } from 'src/store/hook';
import useGeolocation from 'src/hooks/useGeolocation';

const MapHeader = styled(Box)({
  width: '100%',
  height: '65px',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',

  paddingRight: '30px',
});

const MapContent = styled(Box)({
  width: '100%',
  height: '100%',
});

const Home = () => {
  const [showPlacesDrawer, setShowPlacesDrawer] = useState(true);

  const toggleShowPlacesDrawer = () => {
    setShowPlacesDrawer(!showPlacesDrawer);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        height: '630px',
        display: 'flex',
        flexDirection: 'column',
        alitnItems: 'center',
        overflowX: 'hidden',
        margin: '20px',
        borderRadius: '1rem',
        border: '1px solid rgba(0,0,0,0.2)',
      }}
    >
      <MapHeader>
        <IconButton
          size="small"
          sx={{
            display: showPlacesDrawer ? 'none' : '',
            zIndex: 60,
          }}
          onClick={toggleShowPlacesDrawer}
        >
          <HolidayVillageIcon />
        </IconButton>
      </MapHeader>

      <MapContent>
        <PlacesDrawer
          open={showPlacesDrawer}
          toggleOpenDrawer={toggleShowPlacesDrawer}
        />
        <KakaoMap />
      </MapContent>
    </Box>
  );
};

export default Home;
