import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

// interfaces
import { IKakaoPlace } from '../interface';

const PlaceCard = (place: IKakaoPlace) => {
  return (
    <Card sx={{ width: '100%', backgroundColor: 'white', cursor: 'pointer' }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {place.category_group_name}
        </Typography>
        <Typography variant="h5" component="div">
          {place.place_name}
        </Typography>
        <Typography variant="subtitle2" sx={{ mb: 1.5 }} color="text.secondary">
          {place.category_name}
        </Typography>
        <Typography variant="body2">{place.address_name}</Typography>
      </CardContent>
    </Card>
  );
};

export default PlaceCard;
