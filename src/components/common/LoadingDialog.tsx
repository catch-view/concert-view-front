import { Backdrop, CircularProgress } from '@mui/material';

interface Props {
  open: boolean;
}
const LoadingDialog = ({ open }: Props) => {
  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default LoadingDialog;
