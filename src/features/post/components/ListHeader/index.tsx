import { FormControlLabel, Typography, Checkbox } from '@mui/material';

import { useAppSelector, useAppDispatch } from 'src/store/hook';
import { setListMode } from '../../redux/slice';
import { Wrapper, PlaceInfoBox, UtilBox } from './styled';

type Props = {
  listMode: 'posts' | 'images';
  placeName: string;
  addressName: string;
};
const ListHeader = ({ listMode, placeName, addressName }: Props) => {
  const dispatch = useAppDispatch();

  const setListModeToPosts = () => {
    dispatch(setListMode('posts'));
  };

  const setListModeToImages = () => {
    dispatch(setListMode('images'));
  };

  return (
    <Wrapper>
      <PlaceInfoBox>
        <Typography variant='h4' color='gray.400'>
          {placeName}
        </Typography>
        <Typography variant='h6' color='gray.700'>
          {addressName}
        </Typography>
      </PlaceInfoBox>

      <UtilBox>
        <FormControlLabel
          control={
            <Checkbox
              checked={listMode === 'posts'}
              onChange={setListModeToPosts}
            />
          }
          label='게시물로 보기'
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={listMode === 'images'}
              onChange={setListModeToImages}
            />
          }
          label='이미지로 보기'
        />
      </UtilBox>
    </Wrapper>
  );
};

export default ListHeader;
