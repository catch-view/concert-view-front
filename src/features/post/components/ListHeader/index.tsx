import { Select, MenuItem, Typography, SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import { useGetInfinitePosts } from '../../hooks/useInfinitePosts';
import { Wrapper, PlaceInfoBox, UtilBox } from './styled';

type Props = {
  placeID: string;
  placeName: string;
  addressName: string;
};
const ListHeader = ({ placeID, placeName, addressName }: Props) => {
  const [sortOption, setSortOption] = useState('posts');

  const handleSortOptionChange = (event: SelectChangeEvent) => {
    setSortOption(event.target.value as string);
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
        <Select
          color='info'
          value={sortOption}
          onChange={handleSortOptionChange}
          label='정렬옵션'
          size='small'
        >
          <MenuItem value='posts'>posts</MenuItem>
          <MenuItem value='images'>images</MenuItem>
        </Select>
      </UtilBox>
    </Wrapper>
  );
};

export default ListHeader;
