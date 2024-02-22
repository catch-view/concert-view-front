import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from '@mui/material';

// project imports
import NavigationScroll from './components/layouts/MainLayout/NavigationScroll';
import Routes from './routes';
import theme from './themes';
import SnackAlert from './components/common/SnackAlert';

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme('light')}>
        <CssBaseline />
        <NavigationScroll>
          <Routes />
        </NavigationScroll>

        <SnackAlert />
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
