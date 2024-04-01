import { Box, styled } from '@mui/material';

export const TopTextBox = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-start',
  marginTop: '1rem',
});

export const TextFieldsBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  marginTop: '1rem',
  width: '50%',

  '& .MuiTextField-root': {
    width: '100%',
  },
});

export const TagsBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '2rem',
  '& .MuiTextField-root': {
    width: '50%',
  },
}));

export const TagsList = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  marginTop: '0.5rem',
  flexWrap: 'wrap',
});

// 새로운 생성 페이지 관련

export const ImageUploadBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px dashed rgba(0,0,0,0.1)',
  padding: '1rem',
  marginTop: '1.5rem',
  cursor: 'grab',
  borderRadius: '1rem',
});

export const EditorBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '360px',
  marginTop: '2rem',
});

export const CurrentImageBox = styled('img')({
  height: '320px',
  objectFit: 'contain',
  borderRadius: '0.5rem',
  marginRight: '1rem',
});

export const LeftFabBtnBox = styled(Box)({
  position: 'absolute',
  display: 'flex',
  bottom: '4.5rem',
  left: '4.5rem',
});

export const RightFabBtnBox = styled(Box)({
  position: 'absolute',
  display: 'flex',
  bottom: '4.5rem',
  right: '4.5rem',
});
