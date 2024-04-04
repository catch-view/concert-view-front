import { apiInstance } from 'src/plugins/axios';
import { Thumbnail } from '../types';

type GetPlaceSummaryResponse = {
  placeID: string;
  thumbnails: Thumbnail[];
  ratesCnt: number;
};
export const getPlaceSummary = async (placeID: string) => {
  const { data } = await apiInstance.get<GetPlaceSummaryResponse>('place', {
    params: {
      placeID: placeID,
    },
  });

  return data;
};
