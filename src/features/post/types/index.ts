export type PostSliceState = {
  modalPost: ModalPost | null;
  listMode: 'posts' | 'images';
};

export type ModalPost = Post & {
  placeID: string;
  placeName: string;
  addressName: string;
};

export type Tag = {
  label: string;
  bgColor?: string;
  color?: string;
};

export type PostImage = {
  src: string;
  rates: ImageRate[];
};

export type ImageRate = {
  clientIP: string;
  rate: number;
};

export type PostContent = {
  image: string;
  rates: ImageRate[];
  tags: Tag[];
  description: string;
};

export type Post = {
  postID: string;
  placeID: string;
  title: string;
  author: string;
  password: string;
  contents: PostContent[];
  createdAt: string;
};
