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
import { useAppSelector, useAppDispatch } from 'src/store/hook';
import { setDrawerPlaces, setDrawerSearchQuery } from '../../redux/slice';
import PlacesList from './PlacesList';
import { IKakaoPlace } from '../../types';
import * as Styled from './styled';
import { DisplayingErrorMessagesSchema } from './schemas';

interface IPlacesDrawer {
  open: boolean;
  toggleOpenDrawer: () => void;
}
const PlacesDrawer = ({ open, toggleOpenDrawer }: IPlacesDrawer) => {
  const dispatch = useAppDispatch();
  const { userPosition, drawerSearchQuery, drawerPlaces } = useAppSelector((state) => state.map);
  const ps = new kakao.maps.services.Places();
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


  useEffect(() => {
    if (drawerSearchQuery) {
      formik.values.searchQuery = drawerSearchQuery;
      searchPlaces();
    }
  }, []);

  /**
   * 페이지 클릭 처리 메소드
   * @param page 이동할 페이지 번호
   */
  const handlePageClick = (page: number) => {
    ps.keywordSearch(
      userPosition.addressName + formik.values.searchQuery,
      (data, status, _pagination) => {
        if (status === kakao.maps.services.Status.OK) {
          const placesData = data as IKakaoPlace[];
          dispatch(setDrawerPlaces(placesData));
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
          dispatch(setDrawerPlaces(placesData));
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
          if (e.key === 'Enter') {
            dispatch(setDrawerSearchQuery(formik.values.searchQuery));
            searchPlaces();
          }
        }}
        error={
          Boolean(formik.values.searchQuery.length) &&
          Boolean(formik.errors.searchQuery)
        }
        helperText={
          Boolean(formik.values.searchQuery.length) && formik.errors.searchQuery
        }
      />
      <PlacesList places={drawerPlaces} />

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
