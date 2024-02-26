import { apiInstance } from 'src/plugins/axios';
import { SuccessResponse } from 'src/interfaces/Success.response';

interface CreatePostDto {
  placeID: string;
  author: string;
  password: string;
  html: string;
  createdAt: string;
}
export const createPost = async (
  Post: CreatePostDto
): Promise<SuccessResponse> => {
  const { data } = await apiInstance.post('post/create', {
    ...Post,
  });

  return data;
};
