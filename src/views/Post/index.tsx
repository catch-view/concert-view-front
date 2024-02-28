import { useState, useEffect } from 'react';

import { ViewContainer } from '../styled';
import { useGetPostsQuery } from 'src/tanstack/queries/post';

const PostView = () => {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(0);
  /* const {
    data: posts,
    isLoading: isPostsLoading,
    isError,
    refetch,
  } = useGetPostsQuery();
 */
  //const getNextPosts = () => {};

  /* useEffect(() => {
   
  }, []); */

  return <ViewContainer>게시물 페이지</ViewContainer>;
};

export default PostView;
