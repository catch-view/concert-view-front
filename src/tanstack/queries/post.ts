import { useQuery } from '@tanstack/react-query';
import { apiInstance } from 'src/plugins/axios';
import { Post } from 'src/interfaces/post';

interface GetPostsDto {
  placeID: string;
  offset: number;
  limit: number;
}
/**
 * 게시물 조회 요청 메서드
 * @param GetPostsDto
 * @returns 장소 관련 게시물 목록
 */
const getPosts = async (getPostsDto: GetPostsDto): Promise<Post[]> => {
  return await apiInstance.get('post', {
    params: { ...getPostsDto },
  });
};

export const useGetPostsQuery = (getPostsDto: GetPostsDto) => {
  const {
    isLoading: isPostsLoading,
    isError: isPostsError,
    data: posts,
    refetch,
  } = useQuery({
    queryKey: ['posts', getPostsDto],
    queryFn: () => getPosts,
    enabled: false,
  });
};
