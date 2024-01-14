import React, { useEffect, useState } from 'react';
import { Box, IconButton, styled } from '@mui/material';

// material icons
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';

// project imports
import KakaoMap from './KakaoMap';
import PlacesDrawer from './PlacesDrawer';
import useGeolocation from 'src/hooks/useGeolocation';
import { useAppSelector, useAppDispatch } from 'src/store/hook';
import {
  setFocusingPosition,
  setUserPosition,
} from 'src/store/features/map/mapSlice';
import * as Styled from './styled';

const Home = () => {
  const dispatch = useAppDispatch();

  // 우측 drawer show/hide 관련
  const [showPlacesDrawer, setShowPlacesDrawer] = useState(true);
  const toggleShowPlacesDrawer = () => {
    setShowPlacesDrawer(!showPlacesDrawer);
  };

  const { loaded, address, coordinates, error } = useGeolocation();

  useEffect(() => {
    if (loaded) {
      dispatch(
        setUserPosition({
          lat: coordinates?.lat || 0,
          lng: coordinates?.lng || 0,
          addressName: address,
        })
      );
    }
  }, [loaded]);

  return (
    <Styled.HomeContainer>
      <Styled.MapHeader>
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
      </Styled.MapHeader>

      <Styled.MapContent>
        <Styled.UserPosCard>사용자 위치: {address}</Styled.UserPosCard>
        <PlacesDrawer
          open={showPlacesDrawer}
          toggleOpenDrawer={toggleShowPlacesDrawer}
        />
        <KakaoMap />
      </Styled.MapContent>
    </Styled.HomeContainer>
  );
};

export default Home;
