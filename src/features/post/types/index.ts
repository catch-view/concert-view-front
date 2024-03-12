export type Post = {
  postID: string;
  placeID: string;
  author: string;
  images: string[];
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
