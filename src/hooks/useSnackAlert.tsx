import { useCallback } from 'react';
import {
  setShowSnackAlert,
  setSnackAlertInfo,
} from 'src/store/features/uis/uisSlice';
import { useAppDispatch } from 'src/store/hook';

/**
 * 스낵바 알림 사용을 편하게 하기 위한 hook
 * @returns 스낵바 알림 활성화 메서드
 */
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
