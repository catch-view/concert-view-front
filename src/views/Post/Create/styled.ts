import { Box, styled } from '@mui/material';

export const TopTextBox = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-start',
  marginTop: '1rem',
});

export const TextFieldsBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  marginTop: '1rem',
});

export const TagsBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '0.5rem',
});

export const TagsList = styled('li')({
  display: 'flex',
  flexDirection: 'row',
  marginTop: '0.5rem',
  listStyle: 'none',
});
