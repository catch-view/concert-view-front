// project imports
import DefaultLayout from 'src/features/ui/components/layouts/DefaultLayout';
import MapView from 'src/features/map/views/Map';
import PostView from 'src/features/post/views/ListView';
import CreatePostView from 'src/features/post/views/CreateView';
import PostDetailView from 'src/features/post/views/DetailView';

const MainRoutes = {
  path: '/',
  // eslint-disable-next-line react/react-in-jsx-scope
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
      element: <CreatePostView />,
    },
    {
      path: '/Post/Detail/:id',
      element: <PostDetailView />,
    },
  ],
};

export default MainRoutes;
