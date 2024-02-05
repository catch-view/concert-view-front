import React from 'react';
import {
  styled,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Theme,
  CSSObject,
} from '@mui/material';

// icons
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

// project imports
import MenuList from './MenuList';
import { ISidebarProps } from './interface';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const MuiDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

const SidebarHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppSidebar = ({
  showAppSidebar,
  toggleShowAppSidebar,
}: ISidebarProps) => {
  return (
    <MuiDrawer variant="permanent" open={showAppSidebar}>
      <SidebarHeader>
        <IconButton
          onClick={() => {
            toggleShowAppSidebar();
          }}
        >
          <ChevronLeftIcon />
        </IconButton>
      </SidebarHeader>

      <Divider />

      <MenuList showAppSidebar={showAppSidebar} />
    </MuiDrawer>
  );
};

export default AppSidebar;
