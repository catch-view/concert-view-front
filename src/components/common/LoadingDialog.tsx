import { Container, CircularProgress } from '@mui/material';

const LoadingDialog = () => {
  return (
    <Container
      sx={{
        position: 'fixed',
        /* top: 0,
        left: 0, */
        width: '100vh',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.7)',
        zIndex: 9999,
      }}
    >
      <CircularProgress size={100} />
    </Container>
  );
};

export default LoadingDialog;
