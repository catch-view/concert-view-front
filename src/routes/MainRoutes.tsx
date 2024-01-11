import { lazy } from 'react';
// project imports
import MainLayout from 'src/layouts/MainLayout';

const MainRoutes = {
  path: '/',
  // eslint-disable-next-line react/react-in-jsx-scope
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: null,
    },
  ],
};

export default MainRoutes;
