import { FormControlLabel, Typography, Checkbox } from '@mui/material';

// icons
import ListAltIcon from '@mui/icons-material/ListAlt';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import CollectionsIcon from '@mui/icons-material/Collections';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';

import { useAppDispatch } from 'src/store/hook';
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
              color='success'
              checked={listMode === 'posts'}
              onChange={setListModeToPosts}
              icon={<ListAltOutlinedIcon />}
              checkedIcon={<ListAltIcon />}
            />
          }
          label='게시물로 보기'
        />
        <FormControlLabel
          control={
            <Checkbox
              color='success'
              checked={listMode === 'images'}
              onChange={setListModeToImages}
              icon={<CollectionsOutlinedIcon />}
              checkedIcon={<CollectionsIcon />}
            />
          }
          label='이미지로 보기'
        />
      </UtilBox>
    </Wrapper>
  );
};

export default ListHeader;
