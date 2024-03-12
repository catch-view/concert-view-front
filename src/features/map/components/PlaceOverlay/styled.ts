import { Box, Card, CardContent, styled } from '@mui/material';

export const OverlayCard = styled(Card)({
  width: '320px',
  backgroundColor: 'white',
});

export const OverlayCardContent = styled(CardContent)({
  '& .bottom': {
    textAlign: 'left',
  },
});

export const BtnBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: 1,
});
