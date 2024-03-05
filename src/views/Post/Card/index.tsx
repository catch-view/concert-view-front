import { useState, useEffect } from 'react';

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Avatar, CardContent, CardMedia, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// project imports
import PostTag from 'src/components/atoms/PostTag';
import CardMediaSkeleton from 'src/components/uis/skeletons/CardMediaSkeleton';
import { Post } from 'src/interfaces/post';
import * as Styled from './styled';
import { Tag } from 'src/interfaces/post';

const PostCard = (post: Post) => {
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  useEffect(() => {
    const image = new Image();
    image.src = post.images[0];
    image.onload = () => {
      setImageLoaded(true);
    };
  }, []);

  return (
    <Styled.PostCard
      variant="outlined"
      onClick={() => {
        navigate(`/post/detail/${post.postID}`, {
          state: {
            post: post,
          },
        });
      }}
    >
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
      >
        {post.images.map((img: string) => (
          <SwiperSlide key={img}>
            {imageLoaded ? (
              <CardMedia
                component="img"
                image={img}
                alt="postimg"
                sx={{
                  height: '260px',
                  objectFit: 'contain',
                  borderRadius: '16px',
                  padding: '1%',
                }}
              />
            ) : (
              <CardMediaSkeleton />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <Styled.PostContentBox>
        <CardContent sx={{ flex: '1 0 auto', width: '320px' }}>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            {post.title}
          </Typography>
        </CardContent>

        <Styled.TagsBox>
          {post?.tags.map((tag: Tag) => (
            <PostTag key={tag.label} {...tag} />
          ))}
        </Styled.TagsBox>

        <Styled.AuthorInfoBox>
          <Avatar
            sx={{ width: 50, height: 50 }}
            aria-label="profile"
            src={''}
          />
          <Styled.AuthorInfo>
            <Typography sx={{ fontSize: 16, fontWeight: 600 }}>
              {post.author}
            </Typography>
            <Typography
              variant="subtitle1"
              color="#AAADB2"
              sx={{ fontSize: 14 }}
            >
              {post.createdAt}
            </Typography>
          </Styled.AuthorInfo>
        </Styled.AuthorInfoBox>
      </Styled.PostContentBox>
    </Styled.PostCard>
  );
};

export default PostCard;
