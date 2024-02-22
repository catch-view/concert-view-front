import { useEffect, useState } from 'react';
import {
  Box,
  List,
  ListItem,
  IconButton,
  TextField,
  Divider,
  Pagination,
  Stack,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

// project imports
import PlacesList from './PlacesList';
import { IKakaoPlace } from './PlacesList/interface';
import * as Styled from './styled';

interface IPlacesDrawer {
  open: boolean;
  toggleOpenDrawer: () => void;
}
const PlacesDrawer = ({ open, toggleOpenDrawer }: IPlacesDrawer) => {
  const ps = new kakao.maps.services.Places();
  const [places, setPlaces] = useState<IKakaoPlace[]>([]);
  const [pageData, setPageData] = useState<{
    curPage: number;
    totalPages: null | number;
  }>({
    curPage: 1,
    totalPages: null,
  });

  const handlePageClick = (page: number) => {
    ps.keywordSearch(
      '신문로2가 전시',
      (data, status, _pagination) => {
        if (status === kakao.maps.services.Status.OK) {
          const placesData = data as IKakaoPlace[];
          setPlaces(placesData);
        }
      },
      {
        page,
      }
    );
  };

  useEffect(() => {
    ps.keywordSearch('신문로2가 전시', (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        const placesData = data as IKakaoPlace[];
        setPlaces(placesData);
        setPageData({ ...pageData, totalPages: _pagination.last });
      }
    });
  }, []);

  return (
    <Styled.DrawerBox open={open}>
      {/* header */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          paddingY: '0.4rem',
        }}
      >
        <IconButton onClick={toggleOpenDrawer}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Divider sx={{ marginBottom: '0.85rem' }} />

      {/* contents */}
      <TextField
        id="filled-basic"
        label="장소 키워드를 검색해보세요"
        variant="filled"
      />
      <PlacesList places={places} />

      {/* footer */}
      {pageData.totalPages && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Stack spacing={2}>
            <Pagination
              count={pageData.totalPages}
              onChange={(event, page) => {
                handlePageClick(page);
              }}
            />
          </Stack>
        </Box>
      )}
    </Styled.DrawerBox>
  );
};

export default PlacesDrawer;
