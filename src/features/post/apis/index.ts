import { apiInstance } from 'src/plugins/axios';
import { SuccessResponse } from 'src/shared/types';
import { Tag } from '../types';

interface CreatePostDto {
  placeID: string;
  author: string;
  password: string;
  tags?: Tag[];
  images: string[];
  title: string;
  html: string;
  createdAt: Date;
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

type GetPostsDto = {
  placeID: string;
  page: number;
};
/**
 * 게시물 조회 요청 메서드
 * @param GetPostsDto
 * @returns 장소 관련 게시물 목록
 */
export const getPosts = async (placeID: string) => {
  const { data } = await apiInstance.get(`post/${placeID}`);

  return data;
};

export const getPostsWithPage = async (param: GetPostsDto) => {
  const { data } = await apiInstance.get(`post/${param.placeID}`, {
    params: { page: param.page },
  });

  return data;
};
