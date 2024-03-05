export interface Post {
  postID: string;
  placeID: string;
  author: string;
  images: string[];
  title: string;
  html: string;
  createdAt: string;
  tags: Tag[];
}

export interface Tag {
  label: string;
  bgColor?: string;
  color?: string;
}
