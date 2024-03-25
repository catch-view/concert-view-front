import { Box, styled } from '@mui/material';

export const ModalHeader = styled(Box)({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  marginBottom: '1rem',
  position: 'sticky',
  top: -50,
  backgroundColor: 'rgba(255,255,255,0.7)',
  zIndex: 50,
  width: '100%',
  padding: '1rem 1.5rem',
});

export const HeaderPlaceInfoBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
});

export const HeaderAuthorInfoBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-end',
});

export const ImageSlideBox = styled(Box)({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
});

export const ImageRateBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
  backgroundColor: 'white',
  borderRadius: '0 0 1rem 1rem',
  padding: '1.75rem 1.5rem',
  border: '0.5px solid rgba(0,0,0,0.1)',
});

/**
 * Post 상세 모달 내 에디터 HTML Wrapper
 */
export const EditorContentBox = styled(Box)({
  width: '100%',
  marginTop: '1rem',
  padding: '0.8rem',
});

export const EditorContentHeader = styled(Box)({});
