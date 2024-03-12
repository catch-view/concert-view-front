import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import {
  Box,
  IconButton,
  TextField,
  Divider,
  Pagination,
  Stack,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

// project imports
import { useAppSelector } from 'src/store/hook';
import PlacesList from './PlacesList';
import { IKakaoPlace } from './PlacesList/interface';
import * as Styled from './styled';
import { DisplayingErrorMessagesSchema } from './schemas';

interface IPlacesDrawer {
  open: boolean;
  toggleOpenDrawer: () => void;
}
const PlacesDrawer = ({ open, toggleOpenDrawer }: IPlacesDrawer) => {
  const { userPosition } = useAppSelector((state) => state.map);
  const ps = new kakao.maps.services.Places();
  const [places, setPlaces] = useState<IKakaoPlace[]>([]);
  const [pageData, setPageData] = useState<{
    curPage: number;
    totalPages: null | number;
  }>({
    curPage: 1,
    totalPages: null,
  });

  const formik = useFormik({
    initialValues: {
      searchQuery: '',
    },
    validationSchema: DisplayingErrorMessagesSchema,
    onSubmit: (values) => {
      () => {
        return;
      };
    },
    enableReinitialize: false,
    validateOnBlur: true,
  });

  const handlePageClick = (page: number) => {
    ps.keywordSearch(
      userPosition.addressName + formik.values.searchQuery,
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

  /**
   * 장소 검색 메서드
   */
  const searchPlaces = () => {
    ps.keywordSearch(
      userPosition.addressName + formik.values.searchQuery,
      (data, status, _pagination) => {
        if (status === kakao.maps.services.Status.OK) {
          const placesData = data as IKakaoPlace[];
          setPlaces(placesData);
          setPageData({ ...pageData, totalPages: _pagination.last });
        }
      }
    );
  };

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
        id="searchQuery"
        label="장소 키워드를 검색해보세요"
        variant="filled"
        name="searchQuery"
        color="info"
        value={formik.values.searchQuery}
        onChange={formik.handleChange}
        onKeyDown={(e) => {
          if (e.key === 'Enter') searchPlaces();
        }}
        error={
          Boolean(formik.values.searchQuery.length) &&
          Boolean(formik.errors.searchQuery)
        }
        helperText={
          Boolean(formik.values.searchQuery.length) && formik.errors.searchQuery
        }
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
