export type PostSliceState = {
  modalPost: Post | null;
}

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

export type Tag = {
  label: string;
  bgColor?: string;
  color?: string;
};

export type PostImage = {
  src: string; 
  rate: number;
  rateCount: number;
}