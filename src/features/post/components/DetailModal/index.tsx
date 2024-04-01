import { useMemo } from 'react';
import {
  Box,
  Dialog,
  DialogContent,
  CardMedia,
  IconButton,
  Rating,
  Typography,
  Avatar,
} from '@mui/material';
import CloseOutlined from '@mui/icons-material/CloseOutlined';

// import Swiper
import { Pagination, EffectFade, EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';

// project imports
import { useAppSelector, useAppDispatch } from 'src/store/hook';
import { toggleShowModal } from 'src/features/ui/redux/slice';
import { formatKoreanTextCompareDatesFromNow } from 'src/shared/utils/format/date';
import { ImageRate } from '../../types';
import * as Styled from './styled';

type Props = {
  showModal: boolean;
};
const PostDetailModal = ({ showModal }: Props) => {
  const { ip } = useAppSelector((state) => state.user);
  const { modalPost } = useAppSelector((state) => state.post);
  const dispatch = useAppDispatch();

  const toggleModal = () => {
    dispatch(toggleShowModal());
  };

  /**
   * 이미지 평가 여부 확인
   */
  const checkIsRated = (rates: ImageRate[]) => {
    const idx = rates.findIndex((rate: ImageRate) => rate.clientIP === ip);
    if (idx == -1) return false;
    else return true;
  };

  return (
    <Dialog
      maxWidth='xl'
      open={showModal}
      onClose={toggleModal}
      sx={{
        '& .MuiDialog-paper': {
          backgroundColor: 'white',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          padding: '0.2rem',
        }}
      >
        <IconButton onClick={toggleModal}>
          <CloseOutlined />
        </IconButton>
      </Box>
      <DialogContent
        sx={{
          paddingY: { md: '1.5rem', lg: '3rem' },
          paddingX: { md: '3rem', lg: '10rem' },
          overflowX: 'hidden',
        }}
      >
        <Styled.ModalHeader>
          <Styled.HeaderPlaceInfoBox>
            <Typography variant='h4' fontWeight='bold'>
              {modalPost?.title}
            </Typography>{' '}
            <br />
            <Typography variant='h5' color='grey.600'>
              🏛️{modalPost?.placeName}
            </Typography>
            <Typography variant='h6' color='grey.500'>
              📮{modalPost?.addressName}
            </Typography>
          </Styled.HeaderPlaceInfoBox>
          <Styled.HeaderAuthorInfoBox>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Avatar sx={{ marginRight: '0.3rem' }} />
              <Typography variant='h6' color='black'>
                {modalPost?.author}
              </Typography>
            </Box>
            <Typography variant='caption'>
              {formatKoreanTextCompareDatesFromNow(modalPost?.createdAt ?? '')}{' '}
              작성
            </Typography>
          </Styled.HeaderAuthorInfoBox>
        </Styled.ModalHeader>

        <Swiper
          // install Swiper modules
          modules={[Pagination, EffectFade, EffectCards]}
          pagination={{ clickable: true }}
          grabCursor={true}
          effect='cards'
        >
          {modalPost?.images.map((img, idx) => (
            <Styled.ImageSlideBox key={idx}>
              <SwiperSlide
                key={idx}
                style={{
                  borderRadius: '1rem',
                }}
              >
                <CardMedia
                  component='img'
                  image={img}
                  alt='postimg'
                  sx={{
                    backgroundColor: 'rgba(0,0,0,0.85)',
                    borderRadius: '1rem 1rem 0 0',
                    height: { md: '480px', lg: '680px' },
                    objectFit: 'contain',
                  }}
                />
                <Styled.ImageRateBox>
                  <Typography variant='caption'>
                    이 이미지에 대한 평점 /
                  </Typography>
                  <Rating />
                </Styled.ImageRateBox>
              </SwiperSlide>
            </Styled.ImageSlideBox>
          ))}
        </Swiper>

        <Styled.EditorContentBox
          sx={{
            boxShadow: 1,
            overflowX: 'hidden',
            img: {
              width: '100%',
              objectFit: 'contain',
            },
          }}
          dangerouslySetInnerHTML={{ __html: modalPost?.html ?? '' }}
        ></Styled.EditorContentBox>
      </DialogContent>
    </Dialog>
  );
};

export default PostDetailModal;
