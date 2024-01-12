import React from 'react';
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from '@mui/material';

// project imports
import NavigationScroll from './layouts/MainLayout/NavigationScroll';
import Routes from './routes';

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={{}}>
        <CssBaseline />
        <NavigationScroll>
          <Routes />
        </NavigationScroll>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
