import { apiInstance } from 'src/plugins/axios';
import { SuccessResponse } from 'src/interfaces/Success.response';
import { Tag } from 'src/interfaces/post';
import queryString from 'query-string';

interface CreatePostDto {
  placeID: string;
  author: string;
  password: string;
  tags?: Tag[];
  images: string[];
  title: string;
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
}
/**
 * 게시물 조회 요청 메서드
 * @param GetPostsDto
 * @returns 장소 관련 게시물 목록
 */
export const getPosts = async (placeID: string) => {
  const { data } = await apiInstance.get(`post/${placeID}`);

  return data;
};

export const getPostsWithPage = async (placeID: string, page: number) => {
  const { data } = await apiInstance.get(`post/${placeID}`, {
    params: { page: page },
  });

  return data;
};
