import { Box, Card, CardContent, styled } from '@mui/material';

export const OverlayCard = styled(Card)({
  width: '320px',
  backgroundColor: 'white',
});

export const OverlayCardContent = styled(CardContent)({
  '& .bottom': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginTop: '0.3rem',
  },
});

export const BtnBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: 1,
});

export const NoThumbnailsBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '160px',
  width: '100%',
});
