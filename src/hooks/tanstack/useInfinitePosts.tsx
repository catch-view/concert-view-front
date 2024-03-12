import { useInfiniteQuery } from '@tanstack/react-query';
import { apiInstance } from 'src/plugins/axios';
import queryString from 'query-string';

type getInfinitePostsParam = {
  placeID: string;
  pageParam: number;
};

export const useInfinitePosts = (placeID: string) => {
  const { data, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ['posts', placeID],
      queryFn: async ({ pageParam = 0 }) => {
        return await apiInstance.get('post', {
          params: { placeID: placeID, page: pageParam },
        });
      },
      initialPageParam: 0,
      getNextPageParam: ({ data: { isLastPage, pageNumber } }) =>
        isLastPage ? undefined : pageNumber + 1,
      enabled: !!placeID,
    });

  return { data, isFetchingNextPage, fetchNextPage, hasNextPage };
};
