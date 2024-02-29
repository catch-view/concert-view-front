import { apiInstance } from 'src/plugins/axios';
import { SuccessResponse } from 'src/interfaces/Success.response';
import { Tag } from 'src/interfaces/post';

interface CreatePostDto {
  placeID: string;
  placeName: string;
  placeAddress: string;
  author: string;
  password: string;
  tags?: Tag[];
  html: string;
  createdAt: string;
}
/**
 * 게시물 등록 요청 메서드
 * @param Post 등록할 게시물
 * @returns 게시물 등록 성공 여부
 */
export const createPost = async (
  createPostDto: CreatePostDto
): Promise<SuccessResponse> => {
  const { data } = await apiInstance.post('post/create', {
    ...createPostDto,
  });

  return data;
};

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
export const getPosts = async (getPostsDto: GetPostsDto) => {
  const { data } = await apiInstance.get('post', {
    params: { ...getPostsDto },
  });

  return data;
};
