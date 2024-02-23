import { apiInstance } from 'src/plugins/axios';

interface CreatePostDto {
  author: string;
  password: string;
  htmlValue: string;
  createdAt: string;
}
export const createPost = (Post: CreatePostDto) => {
  return apiInstance.post('post/create', {
    ...Post,
    createdAt: Date.now(),
  });
};
