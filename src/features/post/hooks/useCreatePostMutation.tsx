import { useMutation } from '@tanstack/react-query';
import { createPost } from '../apis';

export const useCreatePostMutation = () =>
  useMutation({
    mutationFn: createPost,
  });
