import { Typography, Button, Divider, Rating, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { IPlace } from 'src/store/features/map/interface';
import * as Styled from './styled';

const PlaceOverlay = (place: IPlace) => {
  const navigate = useNavigate();

  const navigateToPostsPage = () => {
    navigate(`/Post/${place.id}`);
  };
  const navigateToCreatePage = () => {
    navigate(`/Post/Create/${place.id}`, {
      state: {
        placeID: place.id,
        placeName: place.placeName,
        addressName: place.addressName,
      },
    });
  };

  return (
    <Styled.OverlayCard>
      <Styled.OverlayCardContent>
        <Typography variant="h6">{place.placeName}</Typography>
        <Typography color="gray.500" variant="subtitle2">
          {place.addressName}
        </Typography>
        <br />
        <Box className="bottom">
          <Rating
            name="half-rating"
            defaultValue={2.5}
            precision={0.5}
            readOnly
          />
          <Typography variant="subtitle1">관련 포스트 수: n</Typography>
        </Box>
        <Divider sx={{ marginY: '0.5rem' }} />

        <Styled.BtnBox>
          <Button color="success" onClick={navigateToPostsPage}>
            포스트 확인
          </Button>
          <Button color="info" onClick={navigateToCreatePage}>
            포스트 작성
          </Button>
        </Styled.BtnBox>
      </Styled.OverlayCardContent>
    </Styled.OverlayCard>
  );
};

export default PlaceOverlay;
