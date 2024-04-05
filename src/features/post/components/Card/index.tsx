import { useState, useEffect } from 'react';

// import Swiper
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

// mui
import { Avatar, CardMedia, Typography, Rating, Box } from '@mui/material';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

// project imports
import PostTag from '../PostTag';
import CardMediaSkeleton from 'src/features/post/components/skeletons/CardMediaSkeleton';
import { useAppDispatch } from 'src/store/hook';
import { toggleShowModal, setModalType } from 'src/features/ui/redux/slice';
import { setModalPost } from '../../redux/slice';
import { formatKoreanTextCompareDatesFromNow } from 'src/shared/utils/format/date';
import * as Styled from './styled';
import * as Type from '../../types';

const PostCard = (post: Type.ModalPost) => {
  const dispatch = useAppDispatch();
  const [curSwiperIdx, setCurSwiperIdx] = useState(0);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  useEffect(() => {
    // 첫번째 이미지가 로드되기 전까지 skelton 표시
    const image = new Image();
    image.src = post.contents[0].image;
    image.onload = () => {
      setImageLoaded(true);
    };
  }, []);

  const openPostDetailModal = () => {
    dispatch(setModalPost(post));
    dispatch(setModalType('postDetail'));
    dispatch(toggleShowModal());
  };

  return (
    <Styled.PostCard variant='outlined'>
      {imageLoaded ? (
        <Swiper
          // install Swiper modules
          modules={[Pagination]}
          slidesPerView={1}
          spaceBetween={10}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSlideChange={(swiper) => setCurSwiperIdx(swiper.activeIndex)}
        >
          {post?.contents?.map((content, idx) => (
            <SwiperSlide key={content.image}>
              <Box
                sx={{
                  position: 'relative',
                }}
              >
                <CardMedia
                  component='img'
                  image={content.image}
                  alt='postimg'
                  sx={{
                    position: 'relative',
                    height: { xs: '260px', sm: '260px', lg: '360px' },
                    objectFit: 'contain',
                    backgroundColor: 'rgba(0,0,0,0.7)',
                  }}
                />
                <Styled.ImageRateInfoBox>
                  {content.rates.length ? (
                    <>
                      <Rating
                        value={3.55}
                        precision={0.05}
                        readOnly
                        color='red'
                        sx={{
                          marginRight: '0.5rem',
                          '& .MuiRating-iconFilled': {
                            color: '#fbfd94',
                          },
                        }}
                      />
                      <Typography variant='caption' color='white'>
                        {content.rates.length}명의 평가
                      </Typography>
                    </>
                  ) : (
                    <>
                      <Rating
                        value={0}
                        readOnly
                        emptyIcon={<StarOutlineIcon />}
                        sx={{
                          marginRight: '0.5rem',
                          '& .MuiRating-iconEmpty': {
                            color: 'rgb(251, 252, 227, 0.45)',
                          },
                        }}
                      />
                      <Typography variant='caption' color='white'>
                        {0}명의 평가
                      </Typography>
                    </>
                  )}
                </Styled.ImageRateInfoBox>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <CardMediaSkeleton />
      )}
      <Styled.PostContentBox>
        <Typography
          variant='h5'
          sx={{ fontWeight: 600, cursor: 'pointer' }}
          onClick={openPostDetailModal}
        >
          {post.title}
        </Typography>

        <Styled.TagsBox>
          {post?.contents[curSwiperIdx].tags.map((tag: Type.Tag) => (
            <PostTag key={tag.label} {...tag} />
          ))}
        </Styled.TagsBox>

        <Styled.AuthorInfoBox>
          <Avatar
            sx={{ width: 50, height: 50 }}
            aria-label='profile'
            src={''}
          />
          <Styled.AuthorInfo>
            <Typography sx={{ fontSize: 16, fontWeight: 600 }}>
              {post.author}
            </Typography>
            <Typography
              variant='subtitle1'
              color='#AAADB2'
              sx={{ fontSize: 14 }}
            >
              {formatKoreanTextCompareDatesFromNow(post.createdAt)}
            </Typography>
          </Styled.AuthorInfo>
        </Styled.AuthorInfoBox>
      </Styled.PostContentBox>
    </Styled.PostCard>
  );
};

export default PostCard;
