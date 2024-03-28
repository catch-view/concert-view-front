import { Container, Box, styled } from '@mui/material';
import { DRAWER_WIDTH } from 'src/features/ui/constants';

export const ViewContainer = styled(Box)({
  width: `calc(100%-${DRAWER_WIDTH}px)`,
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '8px',
  border: '1px solid rgba(0,0,0,0.2)',
  overflow: 'hidden',
});

export const FlexStartContainer = styled(Container)({});
