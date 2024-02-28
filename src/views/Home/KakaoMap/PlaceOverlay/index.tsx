import { Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

import { IPlace } from 'src/store/features/map/interface';
import * as Styled from './styled';

const PlaceOverlay = (place: IPlace) => {
  return (
    <Styled.Wrapper>
      <img
        src="https://images.unsplash.com/photo-1495562569060-2eec283d3391?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width={128}
        height={128}
        style={{ objectFit: 'cover' }}
      />
      <Styled.PlaceInfoBox>
        <Typography variant="h6">{place.placeName}</Typography>
        <Typography>리뷰 수: 23개</Typography>

        <Button size="small">
          <Link to={`/post/create/${place.id}`}>test</Link>
        </Button>
      </Styled.PlaceInfoBox>
    </Styled.Wrapper>
  );
};

export default PlaceOverlay;
