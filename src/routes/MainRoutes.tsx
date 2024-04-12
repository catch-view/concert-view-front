// project imports
import DefaultLayout from 'src/features/ui/components/layouts/DefaultLayout';
import MapView from 'src/features/map/views/Map';
import PostView from 'src/features/post/views/ListView';
import CreatePostView from 'src/features/post/views/CreateView';
import WhatsHotView from 'src/features/post/views/WhatsHotView';

const MainRoutes = {
  path: '/',
  element: <DefaultLayout />,
  children: [
    {
      path: '',
      element: <MapView />,
    },
    {
      path: 'Whatshot',
      element: <WhatsHotView />,
    },
    {
      path: '/Post/:id/:page',
      element: <PostView />,
    },
    {
      path: '/Post/Create/:id',
      element: <CreatePostView />,
    },
  ],
};

export default MainRoutes;
