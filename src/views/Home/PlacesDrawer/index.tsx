import React from 'react';
import { Box, List, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface IPlacesDrawer {
  open: boolean;
  toggleOpenDrawer: () => void;
}
const PlacesDrawer = ({ open, toggleOpenDrawer }: IPlacesDrawer) => {
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

      {/* contents */}
      <List>Place Cards</List>

      {/* footer */}
      <Box>pagination</Box>
    </Box>
  );
};

export default PlacesDrawer;
