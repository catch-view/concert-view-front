import { useMemo } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Post } from '../../types';

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

type Props = {
  posts: Post[];
};
const ImagesBox = ({ posts }: Props) => {
  const images = useMemo(() => {
    const contents = posts.flatMap((post) => post.contents);
    const imgs = contents.map((content) => content.image);
    return imgs;
  }, [posts]);

  return (
    <ImageList
      sx={{ width: '100%', height: '100%', marginBottom: '8rem' }}
      variant='quilted'
      cols={4}
      rowHeight={121}
    >
      {images.map((image, idx) => (
        <ImageListItem key={image} cols={1} rows={idx % 3 === 0 ? 2 : 3}>
          <img
            {...srcset(image, 150, idx % 3 === 0 ? 2 : 3, 1)}
            alt='postimg'
            loading='lazy'
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default ImagesBox;
