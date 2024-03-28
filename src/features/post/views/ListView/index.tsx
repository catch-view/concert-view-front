import { useEffect, useMemo, Suspense, lazy } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Grid, Box } from '@mui/material';
import { mirage } from 'ldrs';

// project imports
import ListHeader from '../../components/ListHeader';
import LoadingSpinnerBox from 'src/features/post/components/LoadingSpinnerBox';
import { ViewContainer } from 'src/shared/styles/mui';

import { useGetInfinitePosts } from '../../hooks/useInfinitePosts';
import { Post } from '../../types';

const LazyPostCard = lazy(() => import('../../components/Card'));
mirage.register();

const PostView = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { isFetchingNextPage, data, hasNextPage, fetchNextPage } =
    useGetInfinitePosts(state?.placeID ?? '');

  const posts = useMemo(
    () => (data ? data.pages.flatMap(({ data }) => data.items) : []),
    [data]
  );

  useEffect(() => {
    if (!state) navigate('/');
  }, []);

  return (
    <ViewContainer>
      <ListHeader
        placeID={state?.placeID ?? ''}
        placeName={state?.placeName ?? ''}
        addressName={state?.addressName ?? ''}
      />

      <Suspense
        fallback={
          <Box
            sx={{
              margin: '5rem',
            }}
          >
            <l-mirage size='100' speed='1.75' color='black'></l-mirage>
          </Box>
        }
      >
        <Grid container justifyContent={'center'} spacing={2}>
          {posts?.map((post: Post) => (
            <LazyPostCard
              key={post.postID}
              {...{
                ...post,
                placeName: state?.placeName ?? '',
                addressName: state?.addressName ?? '',
              }}
            />
          ))}
        </Grid>
      </Suspense>

      {hasNextPage && (
        <LoadingSpinnerBox
          callback={() => {
            !isFetchingNextPage && fetchNextPage();
          }}
        />
      )}
    </ViewContainer>
  );
};

export default PostView;
