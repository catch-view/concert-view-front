export interface Post {
  postID: string;
  placeID: string;
  placeName: string;
  author: string;
  html: string;
  createdAt: string;
  tags: [string];
}

export interface Tag {
  label: string;
  bgColor?: string;
  color?: string;
}
