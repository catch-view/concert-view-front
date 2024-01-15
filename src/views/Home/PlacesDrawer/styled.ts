import { Box, styled } from '@mui/material';

interface DrawerBoxProps {
  open: boolean;
}
export const DrawerBox = styled(Box)((props: DrawerBoxProps) => ({
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  width: '330px',
  height: '100%',
  padding: '5px',
  background: 'rgba(255, 255, 255, 0.8)',
  zIndex: 50,
  fontSize: '12px',
  display: 'flex',
  flexDirection: 'column',
  opacity: props.open ? 1 : 0,
  transition: 'opacity 0.2s ease-in-out',
  borderLeft: '1px solid rgba(0,0,0,0.1)',
}));
