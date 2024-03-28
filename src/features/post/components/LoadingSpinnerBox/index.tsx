import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { useIntersectionObserver, UseIntersectionObserverProps } from 'src/shared/hooks/useIntersectionObserver'

const LoadingSpinner = ({...observerProps}: UseIntersectionObserverProps) => {
  const { ref } = useIntersectionObserver(observerProps);
  return (
    <Box
      ref={ref}
      sx={{
        display: 'flex',
        width: '100%',
        height: '150px',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CircularProgress color='success' size={100} />
    </Box>
  );
};

export default LoadingSpinner;
