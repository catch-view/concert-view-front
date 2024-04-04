import {
  styled,
  Drawer,
  Divider,
  Box,
  IconButton,
  Theme,
  CSSObject,
} from '@mui/material';

// icons
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

// project imports
import MenuList from './MenuList';
import { ISidebarProps } from './types';
import { DRAWER_WIDTH } from 'src/features/ui/constants';

const openedMixin = (theme: Theme): CSSObject => ({
  width: DRAWER_WIDTH,
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
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: DRAWER_WIDTH,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const SidebarHeader = styled(Box)(({ theme }) => ({
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
    <MuiDrawer variant='permanent' open={showAppSidebar}>
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
