import { Box, styled } from '@mui/material';

export const ViewContainer = styled(Box)({
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
