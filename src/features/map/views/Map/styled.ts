import { Box, styled } from '@mui/material';

export const MapHeader = styled(Box)({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: 'rgba(0,0,0,0.7)',
  padding: '0.1rem 0.5rem',
});

export const MapContent = styled(Box)({
  position: 'relative',
  width: '100%',
  height: '100%',
});

export const UserPosCard = styled(Box)({
  width: 'fit-content',
  padding: '0.3rem 0.4rem',
  margin: '0.5rem 0.3rem',
  color: 'rgba(0,0,0,0.8)',
  borderRadius: '0.5rem',
  backgroundColor: 'rgba(255,255,255,0.7)',
  '&:hover': {
    fontWeight: 'bold',
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
});
