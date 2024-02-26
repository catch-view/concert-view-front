import { useMutation } from '@tanstack/react-query';
import { createPost } from 'src/apis/post';

export const createPostMutation = useMutation({
  mutationFn: createPost,
});
