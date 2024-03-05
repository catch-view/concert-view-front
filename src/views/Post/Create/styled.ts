import { Box, styled } from '@mui/material';

export const TopTextBox = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-start',
  marginTop: '1rem',
});

export const TextFieldsBox = styled(Box)({
  width: '600px',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  marginTop: '1rem',
});

export const TagsBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '0.5rem',
  width: '30%',
  margin: '0.5rem 0',
  padding: '1rem',
  boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
});

export const TagsList = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  marginTop: '0.5rem',
  flexWrap: 'wrap',
});
