import { Box, Input, styled } from '@mui/material';

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
  margin: '0.3rem 0',
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
