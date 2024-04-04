import { useState, useEffect } from 'react';
import {
  Typography,
  Button,
  Divider,
  Rating,
  Box,
  Skeleton,
  CardMedia,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

// import Swiper
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

// project imports
import { useGetPlaceSummary } from '../../hooks/useGetPlaceSummary';
import { Place } from '../../types';
import * as Styled from './styled';

// icons
import ImageNotSupportedIcon from '@mui/icons-material/ImageNotSupported';

const PlaceOverlay = (place: Place) => {
  const [curSwiperIdx, setCurSwiperIdx] = useState(0);
  const { data, isLoading, isFetching, isError } = useGetPlaceSummary(place.id);
  const navigate = useNavigate();

  const navigateToPostsPage = () => {
    navigate(`/Post/${place.id}/1`, {
      state: {
        placeID: place.id,
        placeName: place.placeName,
        addressName: place.addressName,
      },
    });
  };
  const navigateToCreatePage = () => {
    navigate(`/Post/Create/${place.id}`, {
      state: {
        placeID: place.id,
        placeName: place.placeName,
        addressName: place.addressName,
      },
    });
  };

  return (
    <Styled.OverlayCard>
      <Styled.OverlayCardContent>
        <Typography variant='h6'>{place.placeName}</Typography>
        <Typography color='gray.500' variant='subtitle2'>
          {place.addressName}
        </Typography>
        <br />
        <Box>
          {isLoading ? (
            <>
              <Skeleton variant='rectangular' width='100%' height={160} />
            </>
          ) : data?.ratesCnt ? (
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              grabCursor={true}
              onSlideChange={(swiper) => setCurSwiperIdx(swiper.activeIndex)}
            >
              {data?.thumbnails?.map((thumbnail) => (
                <SwiperSlide key={thumbnail.image}>
                  <CardMedia
                    component='img'
                    image={thumbnail.image}
                    alt='thumbnail'
                    sx={{
                      backgroundColor: 'rgba(0,0,0,0.8)',
                      height: '160px',
                      objectFit: 'contain',
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <Styled.NoThumbnailsBox>
              <ImageNotSupportedIcon sx={{ width: '80px', height: '80px' }} />
              <Typography variant='caption' color='grey.700'>
                아직 등록된 이미지가 없어요
              </Typography>
            </Styled.NoThumbnailsBox>
          )}
        </Box>
        <Box className='bottom'>
          <Rating
            name='half-rating'
            defaultValue={
              data?.thumbnails?.length
                ? data.thumbnails[curSwiperIdx].avgRate
                : 0.0
            }
            precision={0.25}
            readOnly
          />
          <Typography variant='caption' color='grey.500'>
            {data?.ratesCnt ?? 0}개의 게시물
          </Typography>
        </Box>
        <Divider sx={{ marginY: '0.5rem' }} />

        <Styled.BtnBox>
          <Button color='success' onClick={navigateToPostsPage}>
            포스트 확인
          </Button>
          <Button color='info' onClick={navigateToCreatePage}>
            포스트 작성
          </Button>
        </Styled.BtnBox>
      </Styled.OverlayCardContent>
    </Styled.OverlayCard>
  );
};

export default PlaceOverlay;
