import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import { getPosts, getPostsWithPage } from 'src/apis/post';
import { apiInstance } from 'src/plugins/axios';

export const useGetPostsQuery = (placeID: string) => {
  return useQuery({
    queryKey: ['posts', placeID],
    queryFn: () => getPosts(placeID),
    enabled: !!placeID,
  });
};

export const useGetPostsInfiniteQuery = (placeID: string) => {
  return useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: ({ pageParam = 0 }) =>
      apiInstance.get(`post/${placeID}`, {
        params: { page: pageParam },
      }),
    initialPageParam: 0,
    getNextPageParam: ({ data: { isLastPage, pageNumber } }) =>
      isLastPage ? undefined : pageNumber + 1,
    enabled: !!placeID,
  });
};
