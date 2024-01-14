import React, { useEffect, useState } from 'react';
import {
  Box,
  List,
  ListItem,
  IconButton,
  TextField,
  Divider,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

// project imports
import PlacesList from './PlacesList';
import { IPlace } from './PlacesList/interface';

interface IPlacesDrawer {
  open: boolean;
  toggleOpenDrawer: () => void;
}
const PlacesDrawer = ({ open, toggleOpenDrawer }: IPlacesDrawer) => {
  const [places, setPlaces] = useState<IPlace[]>([]);

  useEffect(() => {
    const ps = new kakao.maps.services.Places();

    ps.keywordSearch('서촌 전시', (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        const placesData = data as IPlace[];
        setPlaces(placesData);
      }
    });
  }, []);

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        width: '330px',
        height: '100%',
        padding: '5px',
        background: 'rgba(255, 255, 255, 0.8)',
        zIndex: 50,
        fontSize: '12px',
        display: 'flex',
        flexDirection: 'column',
        opacity: open ? 1 : 0,
        transition: 'opacity 0.2s ease-in-out',
        borderLeft: '1px solid rgba(0,0,0,0.1)',
      }}
    >
      {/* header */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <IconButton onClick={toggleOpenDrawer}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Divider />

      {/* contents */}
      <TextField
        id="filled-basic"
        label="장소 키워드를 검색해보세요"
        variant="filled"
      />
      <PlacesList places={places} />

      {/* footer */}
      <Box>pagination</Box>
    </Box>
  );
};

export default PlacesDrawer;
