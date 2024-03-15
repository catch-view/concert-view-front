import { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

// project imports
import PostCard from '../../components/Card';
import LoadingSpinnerBox from 'src/shared/components/Loading/LoadingSpinnerBox';
import { ViewContainer } from 'src/shared/styles/mui';

import { useGetInfinitePosts } from '../../hooks/useInfinitePosts';
import { Post } from '../../types';

const PostView = () => {
  const { pathname } = useLocation();
  const [placeID, setPlaceID] = useState('');
  const { isFetching, isFetchingNextPage, data, hasNextPage, fetchNextPage } =
    useGetInfinitePosts(placeID);

  const posts = useMemo(
    () => (data ? data.pages.flatMap(({ data }) => data.items) : []),
    [data]
  );

  useEffect(() => {
    const pid = pathname.split('/').at(-2);
    if (pid) setPlaceID(pid);
  }, []);

  return (
    <ViewContainer>
      {/*  <Typography variant="h2">{ }</Typography> */}

      {posts?.map((post: Post) => (
        <PostCard key={post.postID} {...post} />
      ))}

      {hasNextPage && (<LoadingSpinnerBox callback={() => {
        !isFetchingNextPage && fetchNextPage();
      }} />)}
    </ViewContainer>
  );
};

export default PostView;
