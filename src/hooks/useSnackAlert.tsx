import { useCallback } from 'react';
import {
  setShowSnackAlert,
  setSnackAlertInfo,
} from 'src/store/features/uis/uisSlice';
import { useAppDispatch } from 'src/store/hook';

const useSnackAlert = () => {
  const dispatch = useAppDispatch();

  const activateSnack = (
    message: string,
    type: 'success' | 'danger' | 'info'
  ) => {
    dispatch(
      setSnackAlertInfo({
        message: message,
        type: type,
      })
    );
    dispatch(setShowSnackAlert(true));
  };

  return { activateSnack: useCallback(activateSnack, []) };
};

export default useSnackAlert;
