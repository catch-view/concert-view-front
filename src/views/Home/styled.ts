import { Box, styled } from '@mui/material';

export const HomeContainer = styled(Box)({
  position: 'relative',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alitnItems: 'center',
  overflowX: 'hidden',
  margin: '15px',
  borderRadius: '1rem',
  border: '1px solid rgba(0,0,0,0.2)',
});

export const MapHeader = styled(Box)({
  width: '100%',
  height: '65px',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  paddingRight: '30px',
});

export const MapContent = styled(Box)({
  width: '100%',
  height: '100%',
});

export const UserPosCard = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  minWidth: '250px',
  display: 'flex',
  padding: '0.3rem 0.4rem',
  margin: '68px 0 0 0.8rem',
  color: 'rgba(0,0,0,0.8)',
  zIndex: 50,
  borderRadius: '0.5rem',
  backgroundColor: 'rgba(255,255,255,0.7)',
  '&:hover': {
    backgroundColor: 'white',
    transform: 'scale(1.05)',
    transition: 'transform 0.2s ease-in-out',
  },
});
