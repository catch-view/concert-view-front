import {
  AppBar as MuiAppBar,
  AppBarProps as MuiAppBarProps,
  Toolbar,
  IconButton,
  useTheme,
  styled,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

// project imports
import { IHeaderProps } from './interface';
import { DRAWER_WIDTH } from 'src/features/ui/constants';

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: DRAWER_WIDTH,
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  backgroundColor: 'white',
  color: 'rgba(0,0,0,0.8)',
}));

const AppHeader = ({ showAppSidebar, toggleShowAppSidebar }: IHeaderProps) => {
  return (
    <AppBar position='absolute' open={showAppSidebar}>
      <Toolbar sx={{ pr: '24px' }}>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          onClick={toggleShowAppSidebar}
          edge='start'
          sx={{
            marginRight: 5,
            ...(showAppSidebar && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
