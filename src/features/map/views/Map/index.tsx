import { useEffect, useState } from 'react';
import { IconButton } from '@mui/material';

// material icons
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';

// project imports
import KakaoMap from '../../components/KakaoMap';
import PlacesDrawer from '../../components/PlacesDrawer';
import { ViewContainer } from 'src/shared/styles/mui/index';
import useGeolocation from 'src/shared/hooks/useGeolocation';
import { useAppDispatch } from 'src/store/hook';
import { setUserPosition } from 'src/features/map/redux/slice';
import * as Styled from './styled';

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
    <ViewContainer maxWidth='xl'>
      <Styled.MapHeader>
        <Styled.UserPosCard>접속 위치: {address}</Styled.UserPosCard>
        <IconButton
          size='small'
          sx={{
            display: showPlacesDrawer ? 'none' : '',
            zIndex: 60,
            color: 'white',
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
