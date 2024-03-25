import { useEffect } from 'react';
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from '@mui/material';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// project imports
import AppModal from './features/ui/components/Modal';
import NavigationScroll from 'src/features/ui/components/NavigationScroll';
import Routes from './routes';
import theme from 'src/shared/styles/themes';
import SnackAlert from 'src/shared/components/SnackAlert';
import useClientIP from './shared/hooks/useGetIpAddress';
import { useAppDispatch } from './store/hook';
import { setIp } from './features/user/redux/slice';

const App = () => {
  const dispatch = useAppDispatch();
  const queryClient = new QueryClient();
  const ip = useClientIP();

  // 클라이언트 ip 주소 세팅
  useEffect(() => {
    dispatch(setIp(ip ?? ''));
  }, [ip]);

  return (
    <QueryClientProvider client={queryClient}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme('light')}>
          <CssBaseline />
          <NavigationScroll>
            <Routes />
          </NavigationScroll>

          <AppModal />
          <SnackAlert />
        </ThemeProvider>
      </StyledEngineProvider>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
};

export default App;
