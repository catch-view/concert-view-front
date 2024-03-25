export type PostSliceState = {
  modalPost: ModalPost | null;
};

export type Post = {
  postID: string;
  placeID: string;
  author: string;
  images: PostImage[];
  title: string;
  html: string;
  createdAt: string;
  tags: Tag[];
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
