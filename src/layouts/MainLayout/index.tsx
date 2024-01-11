import React from 'react';
import { Box, CssBaseline } from '@mui/material';

// project imports
import Header from './Header';
import Sidebar from './Sidebar';

const MainLayout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header />

      <Sidebar />
    </Box>
  );
};

export default MainLayout;
