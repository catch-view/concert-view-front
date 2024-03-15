import { useInfiniteQuery } from '@tanstack/react-query';
import { apiInstance } from 'src/plugins/axios';

type GetInfinitePostsParam = {
  placeID: string;
  pageParam: number;
};

export const useGetInfinitePosts = (placeID: string = '1602317080') => {
  const { data, isFetching, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ['posts', placeID],
      queryFn: async ({ pageParam = 1 }) => {
        return await apiInstance.get(`post/${placeID}/${pageParam}`);
      },
      initialPageParam: 1,
      getNextPageParam: ({ data: { isLastPage, currentPage } }, pages) => {
        console.log(pages)
        return isLastPage ? undefined : currentPage + 1
      },
      enabled: !!placeID,
    });

  return { data, isFetching, isFetchingNextPage, fetchNextPage, hasNextPage };
};
