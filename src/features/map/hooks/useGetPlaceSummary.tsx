import { useQuery } from '@tanstack/react-query';
import { getPlaceSummary } from '../apis';

export const useGetPlaceSummary = (placeID: string) => {
  const { data, isLoading, isFetching, isError } = useQuery({
    queryKey: ['placeSummary', placeID],
    queryFn: async () => await getPlaceSummary(placeID),
  });

  return { data, isLoading, isFetching, isError };
};
