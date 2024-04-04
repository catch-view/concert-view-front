import { Box, styled } from '@mui/material';

interface DrawerBoxProps {
  open: boolean;
}
export const DrawerBox = styled(Box)((props: DrawerBoxProps) => ({
  position: 'fixed',
  top: 80,
  right: 0,
  bottom: 0,
  width: '330px',
  height: '85%',
  margin: '2rem',
  padding: '5px',
  background: 'rgba(255, 255, 255, 0.8)',
  zIndex: 50,
  fontSize: '12px',
  flexDirection: 'column',
  display: props.open ? 'flex' : 'none',
  transition: 'opacity 0.2s ease-in-out',
  boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  borderRadius: '1rem',
}));
