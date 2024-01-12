import React from 'react';

// project imports
import MainLayout from 'src/layouts/MainLayout';
import Home from 'src/views/Home';

const MainRoutes = {
  path: '/',
  // eslint-disable-next-line react/react-in-jsx-scope
  element: <MainLayout />,
  children: [
    {
      path: 'home',
      element: <Home />,
    },
  ],
};

export default MainRoutes;
