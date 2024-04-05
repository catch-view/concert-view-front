import { useEffect, useMemo, Suspense, lazy } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { mirage } from 'ldrs';

// project imports
import ListHeader from '../../components/ListHeader';
import LoadingSpinnerBox from 'src/features/post/components/LoadingSpinnerBox';
import { ViewContainer } from 'src/shared/styles/mui';
import ImagesBox from '../../components/ImagesBox';

import { useAppSelector } from 'src/store/hook';
import { useGetInfinitePosts } from '../../hooks/useInfinitePosts';
import { Post } from '../../types';
import * as Styled from './styled';

const LazyPostCard = lazy(() => import('../../components/Card'));
mirage.register();

const PostView = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { listMode } = useAppSelector((state) => state.post);
  const { isFetchingNextPage, isFetching, data, hasNextPage, fetchNextPage } =
    useGetInfinitePosts(state?.placeID ?? '');

  const posts = useMemo(
    () => (data ? data.pages.flatMap(({ data }) => data.items) : []),
    [data]
  );

  useEffect(() => {
    if (!state) navigate('/');
  }, []);

  return (
    <ViewContainer maxWidth='xl'>
      <ListHeader
        listMode={listMode}
        placeName={state?.placeName ?? ''}
        addressName={state?.addressName ?? ''}
      />

      <Suspense
        fallback={
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              margin: '5rem',
            }}
          >
            <l-mirage size='100' speed='1.75' color='black'></l-mirage>
          </Box>
        }
      >
        {listMode === 'posts' && (
          <Styled.PostsWrapper sx={{ marginBottom: '5rem' }}>
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
            {hasNextPage && !isFetching && (
              <LoadingSpinnerBox
                callback={() => {
                  !isFetchingNextPage && fetchNextPage();
                }}
              />
            )}
          </Styled.PostsWrapper>
        )}

        {listMode === 'images' && <ImagesBox posts={posts} />}
      </Suspense>
    </ViewContainer>
  );
};

export default PostView;
