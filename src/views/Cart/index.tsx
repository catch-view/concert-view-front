import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { Map } from 'react-kakao-maps-sdk';

// project imports
import MapLoading from 'src/uis/Loadings/MapLoading';
import { useAppDispatch } from 'src/store/hook';
import useGeolocation from 'src/hooks/useGeolocation';
import { setUserPosition } from 'src/store/features/map/mapSlice';

const Cart = () => {
  useEffect(() => {
    /* if (coordinates) {
      setMapLocState({
        center: { lat: coordinates?.lat, lng: coordinates?.lng },
        isPanto: true,
      });
    } */
    console.log('cart rendered');
  }, []);

  return <div>cart</div>;
};

export default Cart;
