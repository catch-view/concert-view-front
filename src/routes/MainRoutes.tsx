// project imports
import MainLayout from 'src/components/layouts/MainLayout';
import HomeView from 'src/views/Home';
import PostView from 'src/views/Post';
import CreatePostView from 'src/views/Post/Create';
import PostDetailView from 'src/views/Post/Detail';

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
      path: '/Post/:id',
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
