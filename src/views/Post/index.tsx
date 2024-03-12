import { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

// project imports
import { useInfinitePosts } from 'src/hooks/tanstack/useInfinitePosts';
import { ViewContainer } from '../styled';
import PostCard from './Card';
import { Post } from 'src/interfaces/post';
import useIntersect from 'src/hooks/useIntersect';

const PostView = () => {
  const { pathname } = useLocation();
  const [placeID, setPlaceID] = useState('');
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(0);
  const { isFetchingNextPage, data, hasNextPage, fetchNextPage } =
    useInfinitePosts(placeID);

  const posts = useMemo(
    () => (data ? data.pages.flatMap(({ data }) => data.contents) : []),
    [data]
  );

  const ref = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  });

  useEffect(() => {
    const pid = pathname.split('/').at(-1);
    if (pid) setPlaceID(pid);
  }, []);

  return (
    <ViewContainer>
      {/*  <Typography variant="h2">{ }</Typography> */}

      {posts?.map((post: Post) => (
        <div key={Math.random()}>{post?.postID}</div>
      ))}

      <div ref={ref}></div>
    </ViewContainer>
  );
};

export default PostView;
