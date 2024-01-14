import React, { useEffect } from 'react';
import {
  Box,
  List,
  ListItem,
  IconButton,
  TextField,
  Divider,
} from '@mui/material';

import PlaceCard from './PlaceCard';

interface IPlacesList {
  places: IPlace[];
}
import { IPlace } from './interface';

const PlacesList = ({ places }: IPlacesList) => {
  return (
    <List
      sx={{
        flexGrow: 1,
        overflowY: 'scroll',
      }}
    >
      {places.map((place) => (
        <ListItem key={place.id}>
          <PlaceCard {...place} />
        </ListItem>
      ))}
    </List>
  );
};

export default PlacesList;
