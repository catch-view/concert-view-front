import { Box, styled } from '@mui/material';

export const Wrapper = styled(Box)({
  width: '100%',
  height: '200px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '3rem 2.5rem',
})

export const PlaceInfoBox = styled(Box)({
  display: 'flex',
  flexDirection:'column'
})

export const UtilBox = styled(Box)({
  display: 'flex',
})