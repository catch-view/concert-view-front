import { Snackbar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { useAppDispatch, useAppSelector } from 'src/store/hook';
import { setShowSnackAlert } from 'src/features/ui/redux/slice';

//icons
import CloseIcon from '@mui/icons-material/Close';

const SnackAlert = () => {
  const dispatch = useAppDispatch();
  const { snackAlertMessage, snackAlertType, showSnackAlert } = useAppSelector(
    (state) => state.uis
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
    if (reason === 'clickaway') {
      return;
    }

    dispatch(setShowSnackAlert(false));
  };

  const action = (
    <IconButton color="inherit" onClick={handleClose}>
      <CloseIcon />
    </IconButton>
  );
  return (
    <Snackbar
      open={showSnackAlert}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      onClose={handleClose}
      message={snackAlertMessage}
      action={action}
      sx={getSnackStyle(snackAlertType)}
    />
  );
};

export default SnackAlert;
