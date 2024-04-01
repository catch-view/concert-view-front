import { HttpHandler } from 'msw';
import { getMockPostsList } from 'src/features/post/apis/getPostsList.mock';

export const handlers: HttpHandler[] = [getMockPostsList];
