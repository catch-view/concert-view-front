import React from 'react';

// project imports
import NavigationScroll from './layouts/MainLayout/NavigationScroll';
import Routes from './routes';

const App = () => {
  return (
    <NavigationScroll>
      <Routes />
    </NavigationScroll>
  );
};

export default App;
