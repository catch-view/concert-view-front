import React from 'react';
import {
  AppBar as MuiAppBar,
  AppBarProps as MuiAppBarProps,
  Toolbar,
  IconButton,
  Typography,
  styled,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

// project imports
import { IHeaderProps } from './interface';

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppHeader = ({ showAppSidebar, toggleShowAppSidebar }: IHeaderProps) => {
  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(showAppSidebar && {
      marginLeft: 240,
      width: `calc(100% - ${240}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  return (
    <AppBar position="fixed" open={showAppSidebar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={toggleShowAppSidebar}
          edge="start"
          sx={{
            marginRight: 5,
            ...(showAppSidebar && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Mini variant drawer
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
