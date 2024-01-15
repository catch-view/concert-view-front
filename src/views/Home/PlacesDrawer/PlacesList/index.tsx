import React, { useEffect } from 'react';
import {
  Box,
  List,
  ListItem,
  IconButton,
  TextField,
  Divider,
} from '@mui/material';

// project imports
import PlaceCard from './PlaceCard';

// redux
import { useAppDispatch } from 'src/store/hook';
import { setFocusingPosition } from 'src/store/features/map/mapSlice';

import { IPlace } from './interface';

interface IPlacesList {
  places: IPlace[];
}
const PlacesList = ({ places }: IPlacesList) => {
  const dispatch = useAppDispatch();

  return (
    <List
      sx={{
        flexGrow: 1,
        overflowY: 'scroll',
      }}
    >
      {places.map((place) => (
        <ListItem
          key={place.id}
          onClick={() => {
            dispatch(
              setFocusingPosition({
                lat: Number(place.y),
                lng: Number(place.x),
                addressName: '',
              })
            );
          }}
        >
          <PlaceCard {...place} />
        </ListItem>
      ))}
    </List>
  );
};

export default PlacesList;
