import { Box, styled } from '@mui/material';

export const Wrapper = styled(Box)({
  display: 'flex',
  width: '300px',
  height: 'fit-content',
  borderRadius: '0.5rem',
  cursor: 'pointer',
});

export const PlaceInfoBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  overflowY: 'scroll',
});
