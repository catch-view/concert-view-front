import { useQuery } from '@tanstack/react-query';
import { getPosts } from 'src/apis/post';

export const useGetPostsQuery = (placeID: string) => {
  return useQuery({
    queryKey: ['posts', placeID],
    queryFn: () => getPosts(placeID),
    enabled: !!placeID,
  });
};
