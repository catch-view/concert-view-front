import React from 'react';

// project imports
import MainLayout from 'src/layouts/MainLayout';
import HomeView from 'src/views/Home';
import CreatePostView from 'src/views/Post/Create';

const MainRoutes = {
  path: '/',
  // eslint-disable-next-line react/react-in-jsx-scope
  element: <MainLayout />,
  children: [
    {
      path: '',
      element: <HomeView />,
    },
    {
      path: '/Post/Create',
      element: <CreatePostView />,
    },
  ],
};

export default MainRoutes;
