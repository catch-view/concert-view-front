// project imports
import DefaultLayout from 'src/features/ui/components/layouts/DefaultLayout';
import MapView from 'src/features/map/views/Map';
import PostView from 'src/features/post/views/ListView';
import CreatePostView from 'src/features/post/views/CreateView';
import CreatePostViewExp from 'src/features/post/views/CreateView/experimental.index';

const MainRoutes = {
  path: '/',
  element: <DefaultLayout />,
  children: [
    {
      path: '',
      element: <MapView />,
    },
    {
      path: '/Post/:id/:page',
      element: <PostView />,
    },
    {
      path: '/Post/Create/:id',
      element: <CreatePostViewExp />,
    },
  ],
};

export default MainRoutes;
