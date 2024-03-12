import { Box, Card, CardMedia, styled } from '@mui/material';

export const PostCard = styled(Card)({
  display: 'flex',
  maxWidth: '820px',
  backgroundColor: 'white',
  padding: '14px',
  margin: '0.5rem 0',
  border: 'transparent',
  boxShadow:
    '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
});

export const PostContentBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '16px',
});

export const TagsBox = styled(Box)({
  display: 'flex',
});

export const AuthorInfoBox = styled(Box)({
  display: 'flex',
  gap: 5,
  flexDirection: 'row',
  borderRadius: '16px',
  alignContent: 'center',
  alignItems: 'center',
  margin: '16px',
});

export const AuthorInfo = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '16px',
  marginTop: '2px',
});
