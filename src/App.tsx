import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from '@mui/material';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// project imports
import NavigationScroll from './components/layouts/MainLayout/NavigationScroll';
import Routes from './routes';
import theme from './themes';
import SnackAlert from './components/common/SnackAlert';

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme('light')}>
          <CssBaseline />
          <NavigationScroll>
            <Routes />
          </NavigationScroll>

          <SnackAlert />
        </ThemeProvider>
      </StyledEngineProvider>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
};

export default App;
