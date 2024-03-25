import PostDetailModal from 'src/features/post/components/DetailModal';
import { useAppSelector, useAppDispatch } from 'src/store/hook';
import { toggleShowModal } from '../../redux/slice';

const AppModal = () => {
  const { showModal, modalType } = useAppSelector((state) => state.ui);

  if (modalType === 'postDetail')
    return <PostDetailModal showModal={showModal} />;
  else return <></>;
};

export default AppModal;
