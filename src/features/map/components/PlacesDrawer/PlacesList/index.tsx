import { useEffect } from 'react';
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
import { setFocusingPlace } from '../../../redux/slice';

import { KakaoPlace } from './interface';

interface IPlacesList {
  places: KakaoPlace[];
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
              setFocusingPlace({
                addressName: place.address_name,
                categoryGroupCode: place.category_group_code,
                categoryGroupName: place.category_group_name,
                distance: place.distance,
                id: place.id,
                phone: place.phone,
                placeName: place.place_name,
                placeUrl: place.place_url,
                roadAddressName: place.road_address_name,
                lat: Number(place.y),
                lng: Number(place.x),
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
