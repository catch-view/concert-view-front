import { useEffect, useState } from 'react';
import { IconButton } from '@mui/material';

// material icons
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';

// project imports
import KakaoMap from './KakaoMap';
import PlacesDrawer from './PlacesDrawer';
import useGeolocation from 'src/hooks/useGeolocation';
import { useAppDispatch } from 'src/store/hook';
import { setUserPosition } from 'src/store/features/map/mapSlice';
import * as Styled from './styled';
import { ViewContainer } from '../styled';

const HomeView = () => {
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
    <ViewContainer>
      <Styled.MapHeader>
        <Styled.UserPosCard>접속 위치: {address}</Styled.UserPosCard>
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
        <PlacesDrawer
          open={showPlacesDrawer}
          toggleOpenDrawer={toggleShowPlacesDrawer}
        />
        <KakaoMap />
      </Styled.MapContent>
    </ViewContainer>
  );
};

export default HomeView;
