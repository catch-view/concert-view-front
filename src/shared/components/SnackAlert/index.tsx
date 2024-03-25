import { Snackbar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { useAppDispatch, useAppSelector } from 'src/store/hook';
import { setSnackInfo } from 'src/features/ui/redux/slice';

//icons
import CloseIcon from '@mui/icons-material/Close';

const SnackAlert = () => {
  const dispatch = useAppDispatch();
  const { snackInfo } = useAppSelector(
    (state) => state.ui
  );
  const getSnackStyle = (type: string) => {
    if (type === 'success') {
      return {
        '& .MuiSnackbarContent-root': {
          backgroundColor: '#00ab66',
          color: '#fff',
        },
      };
    } else if (type === 'danger') {
      return {
        '& .MuiSnackbarContent-root': {
          backgroundColor: '#f8ebed',
          color: '#b32134',
        },
      };
    } else {
      return {
        '& .MuiSnackbarContent-root': {
          backgroundColor: '#24a0ed',
          color: '#fff',
        },
      };
    }
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') return;
    dispatch(setSnackInfo({ showSnackAlert: false, snackAlertMessage: '', snackAlertType: 'info'}));
  };

  const action = (
    <IconButton color="inherit" onClick={handleClose}>
      <CloseIcon />
    </IconButton>
  );
  return (
    <Snackbar
      open={snackInfo.showSnackAlert}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      onClose={handleClose}
      message={snackInfo.snackAlertMessage}
      action={action}
      sx={getSnackStyle(snackInfo.snackAlertType)}
      autoHideDuration={7000}
    />
  );
};

export default SnackAlert;
