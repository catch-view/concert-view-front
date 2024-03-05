import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams, useLocation } from 'react-router-dom';
import { Typography } from '@mui/material';

import { useGetPostsQuery } from 'src/tanstack/queries/post';
import { ViewContainer } from '../styled';
import { getPosts } from 'src/apis/post';
import PostCard from './Card';
import { Post } from 'src/interfaces/post';

const PostView = () => {
  const { pathname } = useLocation();
  const [placeID, setPlaceID] = useState('');
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(0);
  const { isLoading, data: posts, refetch } = useGetPostsQuery(placeID);

  useEffect(() => {
    const pid = pathname.split('/').at(-1);
    if (pid) setPlaceID(pid);
  }, []);

  return (
    <ViewContainer>
      <Typography variant="h4">posts</Typography>

      {posts?.map((post: Post) => (
        <PostCard key={post.postID} {...post} />
      ))}
    </ViewContainer>
  );
};

export default PostView;
