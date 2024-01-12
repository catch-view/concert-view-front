import React from 'react';
import { Box, CssBaseline, styled, useTheme } from '@mui/material';
import { Outlet } from 'react-router-dom';

// project imports
import Header from './Header';
import Sidebar from './Sidebar';
import { useAppDispatch, useAppSelector } from 'src/store/hook';
import { toggleShowAppSidebar as toggle } from 'src/store/features/uis/uisSlice';
import { drawerWidth } from 'src/store/constant';

interface IStyledMainProps {
  open: boolean;
}
const Main = styled('main', {
  shouldForwardProp: (prop) => prop !== 'open',
})<IStyledMainProps>(({ theme, open }) => ({
  //...theme.typography.mainContent,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  transition: theme.transitions.create(
    'margin',
    open
      ? {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }
      : {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }
  ),
  [theme.breakpoints.up('md')]: {
    marginLeft: open ? 0 : -(drawerWidth - 20),
    width: `calc(100% - ${drawerWidth}px)`,
  },
  [theme.breakpoints.down('md')]: {
    marginLeft: '20px',
    width: `calc(100% - ${drawerWidth}px)`,
    padding: '16px',
  },
  [theme.breakpoints.down('sm')]: {
    marginLeft: '10px',
    width: `calc(100% - ${drawerWidth}px)`,
    padding: '16px',
    marginRight: '10px',
  },
}));

const MainLayout = () => {
  const theme = useTheme();
  const { showAppSidebar } = useAppSelector((state) => state.uis);
  const dispatch = useAppDispatch();

  const toggleShowAppSidebar = () => {
    dispatch(toggle(!showAppSidebar));
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header
        showAppSidebar={showAppSidebar}
        toggleShowAppSidebar={toggleShowAppSidebar}
      />

      <Sidebar
        showAppSidebar={showAppSidebar}
        toggleShowAppSidebar={toggleShowAppSidebar}
      />

      <Main theme={theme} open={showAppSidebar}>
        <Outlet />
      </Main>
    </Box>
  );
};

export default MainLayout;
