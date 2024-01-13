import React from 'react';
import { CircularProgress, Box } from '@mui/material';

const MapLoading = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <CircularProgress size={200} color="primary" />
    </Box>
  );
};

export default MapLoading;
