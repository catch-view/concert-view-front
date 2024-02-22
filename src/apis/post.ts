import { apiInstance } from 'src/plugins/axios';

interface CreatePostDto {
  postHtml: string;
  postImages: string[];
}
export const createPost = (Post: CreatePostDto) => {
  return apiInstance.post('post/create', {
    ...Post,
    createdAt: Date.now(),
  });
};

/**
 * 게시물 임시 저장
 * @param file
 * @returns
 */
export const saveTempPost = (file: File) => {
  return apiInstance.post('post/save-temp', file, {
    headers: { 'Content-type': 'multipart/form-data' },
  });
};

/**
 * 이미지 업로드
 * @param formData
 * @returns
 */
export const uploadPostImage = async (formData: FormData) => {
  return await apiInstance.post('post/upload-image', formData, {
    headers: { 'Content-type': 'multipart/form-data' },
  });
};
